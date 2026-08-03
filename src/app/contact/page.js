"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
  FaSpinner,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white text-gray-900 mb-6"
          >
            تواصل{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              معنا
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600 leading-relaxed"
          >
            لديك استفسار أو تريد مناقشة مشروعك؟ سنكون سعداء بسماع منك
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border dark:border-slate-700"
        >
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-700"
                >
                  الاسم الكامل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="أدخل اسمك بالكامل"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-700"
                >
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 pl-4 py-3 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-700"
                >
                  رقم الهاتف (اختياري)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="مثال: 0123456789"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-700"
                >
                  رسالتك
                </label>
                <div className="relative">
                  <div className="absolute top-3 right-3 text-gray-400">
                    <FaComment />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full p-3 border dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="أخبرنا عن مشروعك أو استفسارك..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 hover:from-cyan-600 hover:to-blue-700 dark:hover:from-cyan-700 dark:hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <FaSpinner className="animate-spin" /> جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> أرسل الرسالة
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3"
                >
                  <FaCheck className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">تم الإرسال بنجاح!</p>
                    <p className="text-sm">
                      شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-3"
                >
                  <FaTimes className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">حدث خطأ!</p>
                    <p className="text-sm">
                      تعذر إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا
                      عبر وسائل أخرى.
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-xl" />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
                البريد الإلكتروني
              </h3>
              <a
                href="mailto:me8999109@gmail.com"
                className="dark:text-gray-300 text-gray-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                info@bravocode.com
              </a>
            </motion.div>

            {/* Phone Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaComment className="text-xl" />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
                واتساب
              </h3>
              <a
                href="https://wa.me/201003625969"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                +20 123 456 789
              </a>
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="text-xl" />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
                ساعات العمل
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                الأحد - الخميس
                <br />9 ص - 5 م
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
