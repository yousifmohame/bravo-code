"use client";
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaUser, FaSpinner, FaCheck, FaTimes } from 'react-icons/fa';

export default function ServiceRequestPopup({ isOpen, onClose, service }) {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  // Reset form when opening
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setFormData({ name: '', whatsappNumber: '' });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceName: service.title,
          serviceId: service.id,
          clientName: formData.name,
          whatsappNumber: formData.whatsappNumber,
        }),
      });
      
      if (!response.ok) throw new Error('فشل الإرسال');
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 w-full max-w-md relative border dark:border-slate-700">
        <button 
          onClick={onClose} 
          className="absolute top-4 left-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>
        
        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <FaCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">تم إرسال طلبك بنجاح!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              شكراً {formData.name} لطلبك خدمة "{service.title}". سيتواصل معك فريقنا عبر واتساب خلال 24 ساعة.
            </p>
            <button 
              onClick={onClose}
              className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              إغلاق النافذة
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-2">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 mb-3">
                <FaWhatsapp className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">طلب خدمة</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{service.title}</p>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="أدخل اسمك بالكامل"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  رقم الواتساب
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <FaWhatsapp />
                  </div>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="مثال: 01234567890"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  سنتواصل معك عبر هذا الرقم خلال 24 ساعة
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center items-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <FaSpinner className="animate-spin" /> جاري الإرسال...
                  </>
                ) : (
                  'إرسال الطلب الآن'
                )}
              </button>
            </div>

            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg text-sm">
                حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}