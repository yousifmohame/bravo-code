"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { AuthContextProvider, useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaUser,
  FaCalendarAlt,
  FaSync,
  FaTrash,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

function ServiceRequestsDashboard() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchRequests = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const token = await user.getIdToken();
      const response = await fetch("/api/service-requests", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("فشل تحميل الطلبات");
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
      setError("حدث خطأ أثناء تحميل الطلبات");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [user]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = await user.getIdToken();
      const response = await fetch(`/api/service-requests/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("فشل تحديث الحالة");

      setRequests(
        requests.map((req) =>
          req.id === id ? { ...req, status: newStatus } : req
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      setError("حدث خطأ أثناء تحديث حالة الطلب");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الطلب؟")) {
      try {
        const token = await user.getIdToken();
        const response = await fetch(`/api/service-requests/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("فشل حذف الطلب");

        setRequests(requests.filter((req) => req.id !== id));
      } catch (error) {
        console.error("Error deleting request:", error);
        setError("حدث خطأ أثناء حذف الطلب");
      }
    }
  };

  const filteredRequests =
    statusFilter === "all"
      ? requests
      : requests.filter((req) => req.status === statusFilter);

  return (
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900">
              إدارة طلبات الخدمات
            </h1>
            <p className="dark:text-gray-400 text-gray-600 mt-2">
              عرض وتحديث طلبات العملاء للخدمات المختلفة
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={fetchRequests}
              className="flex items-center gap-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaSync className={loading ? "animate-spin" : ""} /> تحديث
            </button>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-lg px-4 py-2 text-slate-800 dark:text-white"
            >
              <option value="all">جميع الحالات</option>
              <option value="new">جديد</option>
              <option value="contacted">تم التواصل</option>
              <option value="completed">مكتمل</option>
            </select>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl overflow-hidden border dark:border-slate-700">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-100 dark:bg-slate-700">
                <tr>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">
                    العميل
                  </th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">
                    الخدمة
                  </th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">
                    التواصل
                  </th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">
                    التاريخ
                  </th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">
                    الحالة
                  </th>
                  <th className="p-4 dark:text-white text-gray-900 font-semibold">
                    إجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center p-8">
                      <div className="flex justify-center items-center gap-2 dark:text-gray-400 text-gray-600">
                        <FaSpinner className="animate-spin" /> جاري تحميل
                        الطلبات...
                      </div>
                    </td>
                  </tr>
                ) : filteredRequests.length > 0 ? (
                  filteredRequests.map((req) => (
                    <tr
                      key={req.id}
                      className="border-t dark:border-slate-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <td className="p-4 font-medium dark:text-white text-gray-900">
                        {req.clientName || "غير محدد"}
                      </td>
                      <td className="p-4 dark:text-white text-gray-900">
                        {req.serviceName}
                      </td>
                      <td className="p-4">
                        <a
                          href={`https://wa.me/${req.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                        >
                          <FaWhatsapp /> {req.whatsappNumber}
                        </a>
                      </td>
                      <td className="p-4 dark:text-gray-400 text-gray-600">
                        {format(new Date(req.requestedAt), "dd MMM yyyy", {
                          locale: ar,
                        })}
                      </td>
                      <td className="p-4">
                        <select
                          value={req.status}
                          onChange={(e) =>
                            handleStatusChange(req.id, e.target.value)
                          }
                          className="bg-white dark:bg-slate-700 border dark:border-slate-600 rounded px-3 py-1 text-sm dark:text-white"
                        >
                          <option value="new">جديد</option>
                          <option value="contacted">تم التواصل</option>
                          <option value="completed">مكتمل</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleDelete(req.id)}
                            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center p-8 dark:text-gray-400 text-gray-600"
                    >
                      لا توجد طلبات متطابقة مع الفلتر المحدد
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceRequestsPage() {
  return (
    <AuthContextProvider>
      <ProtectedRoute>
        <ServiceRequestsDashboard />
      </ProtectedRoute>
    </AuthContextProvider>
  );
}
