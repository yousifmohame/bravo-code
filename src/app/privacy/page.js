export const metadata = {
  title: "سياسة الخصوصية | Bravocode",
  description:
    "تعرف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك الشخصية عند استخدامك لخدمات Bravocode.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white text-gray-900 mb-4">
            سياسة{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              الخصوصية
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600">
            آخر تحديث: 9 أغسطس 2025
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-10 border dark:border-slate-700">
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p className="lead dark:text-gray-300 text-gray-600">
              نحن في Bravocode (&quot;نحن&quot;، &quot;لنا&quot;، أو &quot;الخاص بنا&quot;) نحترم خصوصيتك
              ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا
              واستخدامنا والكشف عن معلوماتك عند استخدامك لموقعنا وخدماتنا.
            </p>

            <div className="space-y-8">
              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-slate-700 border-gray-200">
                  المعلومات التي نجمعها
                </h2>
                <p className="dark:text-gray-300 text-gray-600">
                  قد نجمع معلومات شخصية منك مباشرة عندما تزودنا بها، مثل:
                </p>
                <ul className="space-y-2 mt-4 dark:text-gray-300 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-1">
                      •
                    </span>
                    <span>
                      <strong className="dark:text-white text-gray-900">
                        معلومات الاتصال:
                      </strong>{" "}
                      مثل اسمك، بريدك الإلكتروني، ورقم هاتفك عندما تملأ نموذج
                      التواصل أو تطلب خدمة.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-1">
                      •
                    </span>
                    <span>
                      <strong className="dark:text-white text-gray-900">
                        معلومات المشروع:
                      </strong>{" "}
                      التفاصيل التي تقدمها حول مشروعك عند طلب عرض سعر أو خدمة.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-1">
                      •
                    </span>
                    <span>
                      <strong className="dark:text-white text-gray-900">
                        بيانات الاستخدام:
                      </strong>{" "}
                      معلومات حول كيفية تفاعلك مع موقعنا، بما في ذلك عناوين IP
                      ونوع المتصفح وصفحات الزيارة.
                    </span>
                  </li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-slate-700 border-gray-200">
                  كيف نستخدم معلوماتك
                </h2>
                <p className="dark:text-gray-300 text-gray-600">
                  نستخدم المعلومات التي نجمعها للأغراض التالية:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    "تقديم وتشغيل وصيانة خدماتنا",
                    "الرد على استفساراتك وتقديم دعم العملاء",
                    "تحسين وتخصيص خدماتنا",
                    "فهم كيفية استخدامك لموقعنا",
                    "منع الاحتيال وضمان الأمان",
                    "إرسال تحديثات ورسائل ترويجية (بموافقتك)",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                    >
                      <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="dark:text-gray-300 text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-slate-700 border-gray-200">
                  مشاركة معلوماتك
                </h2>
                <p className="dark:text-gray-300 text-gray-600">
                  نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد
                  نشارك معلوماتك فقط في الحالات التالية:
                </p>
                <ul className="space-y-3 mt-4 dark:text-gray-300 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <span>
                      مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا
                      وتقديم خدماتنا، بشرط أن يوافقوا على الحفاظ على سرية هذه
                      المعلومات.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <span>
                      عندما يكون ذلك مطلوبًا بموجب القانون أو للاستجابة لإجراءات
                      قانونية.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <span>
                      في حالة دمج أو استحواذ على شركتنا، حيث قد يتم نقل
                      المعلومات كجزء من الصفقة.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-slate-700 border-gray-200">
                  أمان البيانات
                </h2>
                <p className="dark:text-gray-300 text-gray-600">
                  نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية، بما في ذلك:
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "التشفير",
                      desc: "نستخدم تشفير SSL لحماية البيانات المنقولة",
                    },
                    {
                      title: "الوصول المحدود",
                      desc: "الوصول إلى بياناتك مقصور على الموظفين المصرح لهم",
                    },
                    {
                      title: "التقييم المنتظم",
                      desc: "مراجعة دورية لإجراءات الأمان لدينا",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border dark:border-slate-600"
                    >
                      <h3 className="font-bold text-lg dark:text-white text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="dark:text-gray-300 text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 dark:text-gray-300 text-gray-600">
                  ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة
                  بنسبة 100%، لذلك لا يمكننا ضمان أمانها المطلق.
                </p>
              </div>

              {/* Policy Changes */}
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-slate-700 border-gray-200">
                  التغييرات على سياسة الخصوصية
                </h2>
                <p className="dark:text-gray-300 text-gray-600">
                  قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنقوم
                  بإعلامك بأي تغييرات جوهرية عن طريق نشر إشعار واضح على موقعنا
                  أو إرسال إشعار مباشر إليك.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 pb-2 border-b dark:border-slate-700 border-gray-200">
                  اتصل بنا
                </h2>
                <p className="dark:text-gray-300 text-gray-600">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل
                  معنا عبر:
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    صفحة التواصل
                  </a>
                  <a
                    href="mailto:privacy@bravocode.com"
                    className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    privacy@bravocode.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}