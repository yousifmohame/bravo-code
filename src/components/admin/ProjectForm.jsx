"use client";
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import TiptapEditor from './TiptapEditor';
import { FaTrash, FaSave, FaSpinner, FaImage, FaPlus } from 'react-icons/fa';

export default function ProjectForm({ initialData, projectId }) {
  const { user } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    gallery: [],
    technologies: '',
    category: '',
    price: ''
  });
  
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isEditing = !!projectId;

  useEffect(() => {
    if (initialData && !formData.title) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        gallery: initialData.galleryImages || [],
        technologies: initialData.technologies?.join(', ') || '',
        category: initialData.category || '',
        price: initialData.price || ''
      });
    }
  }, [initialData, formData.title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length || !user) return;

    setIsUploading(true);
    setError(null);
    const token = await user.getIdToken();

    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` },
          body: formData
        });
        
        if (!response.ok) {
          throw new Error(`فشل رفع الصورة: ${file.name}`);
        }
        
        return response.json();
      });

      const results = await Promise.all(uploadPromises);
      const uploadedUrls = results.map(result => result.url);
      
      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, ...uploadedUrls]
      }));
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = (urlToRemove) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter(url => url !== urlToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("يجب أن تكون مسجلاً للدخول لتنفيذ هذا الإجراء.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const apiEndpoint = isEditing ? `/api/projects/${projectId}` : '/api/projects';
    const method = isEditing ? 'PUT' : 'POST';

    const dataToSubmit = {
      title: formData.title,
      description: formData.description,
      imageUrl: formData.gallery[0] || '',
      galleryImages: formData.gallery,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean),
      category: formData.category,
      price: Number(formData.price) || 0,
      createdAt: isEditing ? initialData.createdAt : new Date().toISOString(),
    };

    try {
      const token = await user.getIdToken();
      const response = await fetch(apiEndpoint, {
        method: method,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(dataToSubmit)
      });
      
      if (!response.ok) {
        throw new Error(response.statusText || 'فشل إرسال المشروع');
      }
      
      setSuccess('تم حفظ المشروع بنجاح!');
      setTimeout(() => {
        router.push('/dashboard');
        router.refresh();
      }, 1500);
    } catch (err) {
      console.error("Failed to submit project:", err);
      setError(err.message || 'حدث خطأ أثناء حفظ المشروع.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      dir="rtl"
      className="max-w-4xl mx-auto space-y-8 dark:bg-slate-800 bg-white p-8 rounded-lg shadow-2xl border dark:border-slate-700 border-gray-200"
    >
      <h1 className="text-3xl font-bold mb-6 dark:text-white text-gray-900">
        {isEditing ? "تعديل المشروع" : "إنشاء مشروع جديد"}
      </h1>
      
      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
          {success}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block mb-2 font-medium dark:text-gray-300 text-gray-700">
          اسم المشروع
        </label>
        <input 
          id="title" 
          name="title"
          type="text" 
          value={formData.title} 
          onChange={handleChange} 
          required 
          className="w-full p-3 dark:bg-slate-700 bg-gray-50 dark:text-white text-gray-900 rounded border dark:border-slate-600 border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="category" className="block mb-2 font-medium dark:text-gray-300 text-gray-700">
            تصنيف المشروع
          </label>
          <input 
            id="category" 
            name="category"
            type="text" 
            value={formData.category} 
            onChange={handleChange} 
            placeholder="مثال: متجر إلكتروني" 
            required 
            className="w-full p-3 dark:bg-slate-700 bg-gray-50 dark:text-white text-gray-900 rounded border dark:border-slate-600 border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 font-medium dark:text-gray-300 text-gray-700">
            سعر المشروع (بالجنيه المصري)
          </label>
          <input 
            id="price" 
            name="price"
            type="number" 
            value={formData.price} 
            onChange={handleChange} 
            placeholder="مثال: 15000" 
            required 
            className="w-full p-3 dark:bg-slate-700 bg-gray-50 dark:text-white text-gray-900 rounded border dark:border-slate-600 border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-medium dark:text-gray-300 text-gray-700">
          وصف المشروع (دراسة الحالة)
        </label>
        <TiptapEditor
          content={formData.description}
          onChange={(newContent) => setFormData(prev => ({ ...prev, description: newContent }))}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium dark:text-gray-300 text-gray-700">
          صور المشروع (أول صورة هي الغلاف)
        </label>
        <div className="flex items-center gap-4">
          <label className="flex-1 cursor-pointer">
            <input 
              type="file" 
              multiple 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*"
            />
            <div className="w-full p-3 dark:bg-slate-700 bg-gray-50 dark:text-white text-gray-900 rounded border dark:border-slate-600 border-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600 transition flex items-center justify-center gap-2">
              <FaImage className="text-cyan-500" />
              <span>اختر الصور</span>
            </div>
          </label>
          {isUploading && (
            <div className="flex items-center gap-2 text-cyan-500">
              <FaSpinner className="animate-spin" />
              <span>جاري الرفع...</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {formData.gallery.map((url, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden border dark:border-slate-700 border-gray-300">
              <img 
                src={url} 
                alt={`صورة معرض ${index + 1}`} 
                className="w-full h-32 object-cover"
              />
              {index === 0 && (
                <span className="absolute top-2 left-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded">
                  صورة الغلاف
                </span>
              )}
              <button 
                type="button" 
                onClick={() => handleRemoveImage(url)} 
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaTrash size={12} />
              </button>
            </div>
          ))}
          
          {formData.gallery.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-8 text-gray-500 dark:text-gray-400">
              <FaImage className="text-4xl mb-2" />
              <p>لا توجد صور مرفوعة بعد</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="block mb-2 font-medium dark:text-gray-300 text-gray-700">
          التقنيات المستخدمة (افصل بينها بفاصلة)
        </label>
        <input 
          id="technologies" 
          name="technologies"
          type="text" 
          value={formData.technologies} 
          onChange={handleChange} 
          placeholder="Next.js, Tailwind CSS, Firebase" 
          required 
          className="w-full p-3 dark:bg-slate-700 bg-gray-50 dark:text-white text-gray-900 rounded border dark:border-slate-600 border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" 
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting || isUploading} 
        className="w-full p-4 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 rounded font-bold text-white hover:from-cyan-600 hover:to-blue-700 dark:hover:from-cyan-700 dark:hover:to-blue-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin" />
            <span>جاري الحفظ...</span>
          </>
        ) : (
          <>
            <FaSave />
            <span>{isEditing ? "تحديث المشروع" : "إنشاء المشروع"}</span>
          </>
        )}
      </button>
    </form>
  );
}