'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Code, 
  Cpu, 
  Shield, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Globe 
} from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Cpu,
                title: "حلول تقنية مبتكرة",
                description: "نُطور حلول برمجية ذكية تناسب احتياجات عملك",
                color: "bg-blue-500"
              },
              {
                icon: Shield,
                title: "أمن وحماية عالية",
                description: "نُطبّق أفضل معايير الأمان والحماية للبيانات",
                color: "bg-emerald-500"
              },
              {
                icon: Zap,
                title: "أداء عالي وسريع",
                description: "تطبيقات خفيفة، سريعة، وقابلة للتطوير",
                color: "bg-orange-500"
              },
              {
                icon: Code,
                title: "دعم فني مستمر",
                description: "دعم فني 24/7 وتحديثات دورية للأنظمة",
                color: "bg-purple-500"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center">
              <motion.h3 
                className="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Bravocode
              </motion.h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن فريق من المطورين والمهندسين المتخصصين في بناء حلول رقمية متكاملة. من تطبيقات الويب إلى أنظمة الذكاء الاصطناعي، نُحوّل أفكارك إلى واقع رقمي قوي وآمن.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {[
                { icon: Github, href: 'https://github.com/bravocode', color: 'bg-gray-800', name: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/company/bravocode', color: 'bg-blue-700', name: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com/bravocode', color: 'bg-sky-500', name: 'Twitter' },
                { icon: Instagram, href: 'https://instagram.com/bravocode', color: 'bg-gradient-to-tr from-purple-500 to-orange-400', name: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xl font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', href: '/' },
                { label: 'خدماتنا', href: '/services' },
                { label: 'مشاريعنا', href: '/portfolio' },
                { label: 'عن Bravocode', href: '/about' },
                { label: 'المدونة', href: '/blog' },
                { label: 'اتصل بنا', href: '/contact' },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xl font-bold text-white">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                { label: 'تطوير تطبيقات ويب', href: '/services' },
                { label: 'تطبيقات الجوال (iOS & Android)', href: '/services' },
                { label: 'الذكاء الاصطناعي والبيانات', href: '/services' },
                { label: 'واجهات مستخدم (UI/UX)', href: '/services' },
                { label: 'استضافة وصيانة', href: '/services' },
                { label: 'حلول مؤسسية', href: '/services' },
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-xl font-bold text-white">تواصل معنا</h4>
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  text: 'info@bravocode.com', 
                  href: 'mailto:me8999109@gmail.com',
                  bg: 'bg-blue-500/10',
                  iconColor: 'text-blue-400'
                },
                { 
                  icon: Phone, 
                  text: '+20 100 362 5969', 
                  href: 'tel:+201003625969', 
                  dir: 'ltr',
                  bg: 'bg-green-500/10',
                  iconColor: 'text-green-400'
                },
                { 
                  icon: MapPin, 
                  text: 'القاهرة، مصر', 
                  href: '#',
                  bg: 'bg-amber-500/10',
                  iconColor: 'text-amber-400'
                },
                { 
                  icon: Globe, 
                  text: 'bravocode.com', 
                  href: 'https://bravocode.vercel.app',
                  dir: 'ltr',
                  bg: 'bg-purple-500/10',
                  iconColor: 'text-purple-400'
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className={`flex items-center gap-4 p-3 rounded-lg ${contact.bg} hover:bg-gray-800 transition-colors`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-2 rounded-lg ${contact.iconColor}`}>
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 hover:text-white" dir={contact.dir}>
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bravocode. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              الشروط والأحكام
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              الدعم الفني
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer