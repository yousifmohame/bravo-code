"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPenFancy, FaCode, FaRocket, FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ProcessStep = ({ icon, title, description, delay }) => {
  const icons = {
    discovery: <FaLightbulb className="text-3xl" />,
    design: <FaPenFancy className="text-3xl" />,
    development: <FaCode className="text-3xl" />,
    launch: <FaRocket className="text-3xl" />
  };

  return (
    <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: delay * 0.2 }} 
        className="flex flex-col items-center text-center"
    >
        <div className="dark:bg-cyan-500/10 bg-cyan-100 dark:border-cyan-500/30 border-cyan-200 text-cyan-600 dark:text-cyan-400 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg dark:shadow-cyan-500/10 shadow-cyan-200">
            {icons[icon]}
        </div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            {title}
        </h3>
        <p className="dark:text-gray-400 text-gray-600 max-w-xs leading-relaxed">
            {description}
        </p>
    </motion.div>
  );
};

export default function HomePageClient({ projects }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check user preference or system preference
        const isDark = localStorage.getItem('darkMode') === 'true' || 
                      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    return (
        <div className={`overflow-x-hidden transition-colors duration-300 ${darkMode ? 'dark' : ''}`} dir="rtl">
            {/* Dark Mode Toggle Button */}
            <button 
                onClick={toggleDarkMode}
                className="fixed z-50 bottom-6 left-6 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-slate-700"
                aria-label="تبديل الوضع الليلي"
            >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
            </button>
            
            {/* Hero Section */}
            <section className="relative overflow-hidden dark:bg-slate-900 bg-gray-50">
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-b dark:from-slate-900 from-gray-100 dark:to-slate-900/0 to-gray-100/0 z-10" />
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 dark:opacity-5" />
                </div>
                
                <div className="container mx-auto px-4 text-center pt-40 pb-24 md:pt-48 md:pb-32 relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7, delay: 0.2 }} 
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 dark:text-white text-gray-900"
                    >
                        رؤيتك، <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                            مُهندسة بإتقان
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7, delay: 0.4 }} 
                        className="max-w-3xl mx-auto text-xl dark:text-gray-300 text-gray-600 leading-relaxed"
                    >
                        نبتكر حلولًا رقمية استثنائية تحقق أهداف عملك وتتفوق على توقعاتك
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.7, delay: 0.6 }} 
                        className="mt-12 flex gap-4 justify-center flex-wrap"
                    >
                        <Link 
                            href="/services" 
                            className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-blue-700 transition-all text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/30"
                        >
                            إطلب موقعك الأن
                        </Link>
                        <Link 
                            href="/contact" 
                            className="bg-gray-800 hover:bg-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 border border-gray-700 dark:border-slate-700 transition-all text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-gray-700/20 dark:hover:shadow-slate-700/20"
                        >
                            تواصل معنا الآن
                        </Link>
                    </motion.div>
                    
                    
                </div>
            </section>

            {/* Our Process Section */}
            <section className="bg-gradient-to-b from-gray-100 to-white dark:from-slate-900 dark:to-slate-950 py-24">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6 }} 
                        className="text-center mb-20"
                    >
                        <span className="inline-block bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-4 py-2 rounded-full mb-4 border border-cyan-200 dark:border-cyan-500/20">
                            منهجيتنا
                        </span>
                        <h2 className="text-4xl font-bold mb-4 dark:text-white text-gray-900">كيف نعمل لتحقيق نجاحك</h2>
                        <p className="dark:text-gray-400 text-gray-600 text-lg max-w-2xl mx-auto">
                            عملية منهجية تضمن وصولنا إلى أفضل النتائج الممكنة لمشروعك
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ProcessStep 
                            delay={0} 
                            icon="discovery" 
                            title="الاستكشاف والتخطيط" 
                            description="نعمل على فهم عميق لأهدافك واحتياجاتك لنضع خطة استراتيجية محكمة" 
                        />
                        <ProcessStep 
                            delay={1} 
                            icon="design" 
                            title="تصميم تجربة المستخدم" 
                            description="نصمم واجهات جذابة وسهلة الاستخدام تركز على تجربة العميل" 
                        />
                        <ProcessStep 
                            delay={2} 
                            icon="development" 
                            title="التطوير الدقيق" 
                            description="نبني حلولًا تقنية متينة باستخدام أحدث أدوات التطوير وأفضل الممارسات" 
                        />
                        <ProcessStep 
                            delay={3} 
                            icon="launch" 
                            title="الإطلاق والتحسين" 
                            description="نضمن تشغيلًا سلسًا ونوفر دعمًا مستمرًا لضمان نجاح مشروعك" 
                        />
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6 }} 
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4 border border-purple-200 dark:border-purple-500/20">
                            أعمالنا
                        </span>
                        <h2 className="text-4xl font-bold mb-4 dark:text-white text-gray-900">مشاريع نفتخر بها</h2>
                        <p className="dark:text-gray-400 text-gray-600 text-lg max-w-2xl mx-auto">
                            نظرة على بعض الحلول التي قدمناها لعملائنا المميزين
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects && projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link 
                                    href={`/portfolio/${project.id}`} 
                                    className="block group relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                                >
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <Image 
                                            src={project.imageUrl} 
                                            alt={project.title} 
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-gray-900/5 to-transparent dark:from-slate-900/80 dark:via-slate-900/30" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs px-3 py-1 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">{project.title}</h3>
                                        <p className="dark:text-gray-400 text-gray-600 line-clamp-2">{project.summary}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.3 }} 
                        className="text-center mt-16"
                    >
                        <Link 
                            href="/portfolio" 
                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 dark:bg-slate-800 dark:hover:bg-slate-700 border border-gray-700 dark:border-slate-700 text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:shadow-gray-700/20 dark:hover:shadow-slate-700/20"
                        >
                            عرض جميع المشاريع <FaArrowLeft />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Final Call to Action Section */}
            <section className="relative overflow-hidden py-28 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 dark:from-cyan-900/40 dark:to-purple-900/40">
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 dark:opacity-5" />
                </div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6 }} 
                        className="text-4xl md:text-5xl font-extrabold mb-6 dark:text-white text-gray-900"
                    >
                        مستعد لبدء مشروعك القادم؟
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.2 }} 
                        className="text-xl dark:text-gray-300 text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        دعنا نتحول فكرتك إلى واقع ملموس يحقق أهداف عملك ويفوق توقعاتك
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link 
                            href="/contact" 
                            className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-blue-700 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/30 transition-all"
                        >
                            تواصل معنا الآن
                        </Link>
                        <Link 
                            href="/services" 
                            className="bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-gray-700/10 dark:hover:shadow-white/10 transition-all"
                        >
                            عرض خدماتنا
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}