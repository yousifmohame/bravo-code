"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaUsers, FaTrophy, FaHandshake } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="dark:bg-slate-900 bg-gray-50">
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
            من <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">نحن</span>؟
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600 leading-relaxed"
          >
            فريق مبدع من الخبراء المختصين في بناء الحلول الرقمية التي تحقق النجاح لعملك
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/team.jpg" 
                alt="فريق العمل"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-6">قصتنا</h2>
            <div className="space-y-4 dark:text-gray-300 text-gray-600 leading-relaxed">
              <p>
                بدأنا رحلتنا في عام 2018 بفريق صغير من المطورين الموهوبين الذين شاركوا شغفًا واحدًا: تحويل الأفكار إلى حلول رقمية استثنائية.
              </p>
              <p>
                اليوم، نحن فخورون بأننا أصبحنا وكالة رقمية رائدة، حيث عملنا مع أكثر من 50 عميلاً من مختلف القطاعات لمساعدتهم على تحقيق أهدافهم الرقمية.
              </p>
              <p>
                نؤمن بأن نجاح عملائنا هو نجاحنا، ولهذا نضع كل جهودنا لضمان أن كل مشروع ننفذه يحقق أقصى تأثير ممكن.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">قيمنا الأساسية</h2>
            <p className="max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
              المبادئ التي نؤمن بها وترشدنا في كل ما نقوم به
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-3xl" />,
                title: "الإبداع",
                description: "نبتكر حلولاً فريدة تلبي احتياجات عملائنا بطرق غير تقليدية"
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "العمل الجماعي",
                description: "نعمل معاً كفريق متكامل لتحقيق أفضل النتائج"
              },
              {
                icon: <FaTrophy className="text-3xl" />,
                title: "التميز",
                description: "نسعى للجودة في كل تفصيل من تفاصيل عملنا"
              },
              {
                icon: <FaHandshake className="text-3xl" />,
                title: "الشفافية",
                description: "علاقاتنا مع العملاء مبنية على الصراحة والوضوح"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">{value.title}</h3>
                <p className="dark:text-gray-300 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">فريقنا</h2>
          <p className="max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
            المواهب المبدعة التي تقف وراء نجاح مشاريعنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "أحمد محمد",
              role: "المدير التنفيذي",
              image: "/team-member-1.jpg",
              bio: "خبرة 10 سنوات في إدارة المشاريع الرقمية والتطوير الاستراتيجي"
            },
            {
              name: "سارة عبدالله",
              role: "مديرة التصميم",
              image: "/team-member-2.jpg",
              bio: "مصممة واجهات مستخدم مبدعة مع شغف بتجربة المستخدم"
            },
            {
              name: "خالد محمود",
              role: "كبير المطورين",
              image: "/team-member-3.jpg",
              bio: "خبير في تطوير الويب وتطبيقات الجوال بتقنيات حديثة"
            },
            {
              name: "لمى علي",
              role: "مديرة التسويق",
              image: "/team-member-4.jpg",
              bio: "متخصصة في التسويق الرقمي وزيادة التحويلات"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-white text-gray-900">{member.name}</h3>
                <p className="text-cyan-600 dark:text-cyan-400 mb-3">{member.role}</p>
                <p className="dark:text-gray-300 text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">مستعد لبدء مشروعك القادم؟</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              دعنا نتحول فكرتك إلى واقع ملموس يحقق أهداف عملك ويفوق توقعاتك
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-cyan-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-colors"
            >
              تواصل معنا
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}