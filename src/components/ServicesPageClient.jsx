"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLightbulb, FaCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import ServiceRequestPopup from './ServiceRequestPopup';

// Service Card Component with Animation
const ServiceCard = ({ service, onRequest }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl dark:hover:shadow-slate-700/50 transition-shadow"
  >
    <div className="relative w-full h-56">
      <Image 
        src={service.imageUrl} 
        alt={service.title} 
        fill 
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
          {service.icon || <FaLightbulb />}
        </div>
        <h3 className="text-xl font-bold dark:text-white text-gray-900">{service.title}</h3>
      </div>
      <p className="dark:text-gray-400 text-gray-600 mt-2 flex-grow">{service.summary}</p>
      <div className="mt-6">
        <button
          onClick={() => onRequest(service)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 hover:from-cyan-600 hover:to-blue-700 dark:hover:from-cyan-700 dark:hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
        >
          اطلب هذه الخدمة
        </button>
      </div>
    </div>
  </motion.div>
);

export default function ServicesPageClient({ projects }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleRequestService = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  // Predefined services with icons
  const predefinedServices = [
    {
      id: 'custom-design',
      title: 'تصميم مخصص حسب الطلب',
      summary: 'هل لديك فكرة فريدة؟ سنقوم بتصميم وبرمجة موقع أو تطبيق ويب مخصص بالكامل لتلبية احتياجات عملك بدقة وتحقيق أهدافك.',
      imageUrl: '/web-custom.jpg',
      icon: <FaCode />
    },
  ];

  return (
    <div className="dark:bg-slate-900 bg-gray-50 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white text-gray-900 mb-6"
          >
            حلول <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">رقمية</span> متكاملة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600 leading-relaxed"
          >
            نقدم خدمات متكاملة لتحويل أفكارك إلى واقع رقمي ناجح، بدءاً من التصميم وحتى الإطلاق والتسويق.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Display project-based services */}
          {projects.map((project) => (
            <ServiceCard 
              key={project.id} 
              service={{
                ...project, 
                summary: `بناء موقع مشابه لمشروع "${project.title}" مع تخصيصات تناسب علامتك التجارية.`,
                icon: <FaLightbulb />
              }} 
              onRequest={handleRequestService} 
            />
          ))}
          
          {/* Display predefined services */}
          {predefinedServices.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onRequest={handleRequestService} 
            />
          ))}
        </motion.div>
      </section>

      {/* Service Request Popup */}
      <ServiceRequestPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        service={selectedService}
      />
    </div>
  );
}