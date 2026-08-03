"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { AuthContextProvider, useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSignOutAlt, FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";

function DashboardContent() {
  const { user } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error("فشل تحميل المشاريع");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("حدث خطأ أثناء تحميل المشاريع");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
      setError("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من أنك تريد حذف هذا المشروع؟")) {
      try {
        const token = await user.getIdToken();
        const response = await fetch(`/api/projects/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('فشل حذف المشروع');
        setProjects(projects.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting project:", error);
        setError("فشل حذف المشروع");
      }
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      
      
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900">لوحة التحكم</h1>
            <p className="dark:text-gray-400 text-gray-600 mt-2">
              مرحباً بك، <span className="font-medium text-cyan-600 dark:text-cyan-400">{user?.email}</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <Link 
              href="/projects/new" 
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-cyan-500/30"
            >
              <FaPlus /> إضافة مشروع جديد
            </Link>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl overflow-hidden border dark:border-slate-700 border-gray-200 transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-100 dark:bg-slate-700">
                <tr>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">صورة الغلاف</th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">اسم المشروع</th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">التصنيف</th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">السعر</th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center p-8">
                      <div className="flex justify-center items-center gap-2 dark:text-gray-400 text-gray-600">
                        <FaSpinner className="animate-spin" /> جاري تحميل المشاريع...
                      </div>
                    </td>
                  </tr>
                ) : projects.length > 0 ? (
                  projects.map(project => (
                    <tr 
                      key={project.id} 
                      className="border-t dark:border-slate-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="relative w-20 h-12 rounded-md overflow-hidden">
                          <Image 
                            src={project.imageUrl || "/placeholder-project.png"} 
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </td>
                      <td className="p-4 font-medium dark:text-white text-gray-900 max-w-xs truncate">
                        {project.title}
                      </td>
                      <td className="p-4">
                        <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm">
                          {project.category}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-cyan-600 dark:text-cyan-400">
                        {new Intl.NumberFormat('ar-EG', { style: 'currency', currency: 'EGP' }).format(project.price)}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-4">
                          <Link 
                            href={`/projects/edit/${project.id}`} 
                            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            <FaEdit size={14} /> تعديل
                          </Link>
                          <button 
                            onClick={() => handleDelete(project.id)} 
                            className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                          >
                            <FaTrash size={14} /> حذف
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-8 dark:text-gray-400 text-gray-600">
                      لم يتم إضافة أي مشاريع بعد.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <AuthContextProvider>
      <ProtectedRoute>
        <DashboardContent />
      </ProtectedRoute>
    </AuthContextProvider>
  );
}