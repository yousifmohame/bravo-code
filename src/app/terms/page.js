export const metadata = {
  title: "شروط الخدمة | Bravocode",
  description: "يرجى قراءة شروط وأحكام استخدام موقع وخدمات Bravocode بعناية.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white text-gray-900 mb-4">
            شروط{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              الخدمة
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600">
            آخر تحديث: 9 أغسطس 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-10 border dark:border-slate-700">
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <p className="lead dark:text-gray-300 text-gray-600 mb-8">
              باستخدامك لموقع Bravocode (&quot;الموقع&quot;) أو أي من خدماتنا،
              فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على
              هذه الشروط، يرجى عدم استخدام الموقع أو خدماتنا.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <div className="scroll-mt-20" id="section-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    الموافقة على الشروط
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    يعد استخدامك لموقعنا أو خدماتنا بمثابة موافقة صريحة منك على
                    الالتزام بهذه الشروط والأحكام وسياسة الخصوصية الخاصة بنا.
                  </p>
                  <p>
                    إذا كنت تستخدم الموقع نيابة عن كيان تجاري، فإنك تعلن وتضمن
                    أن لديك السلطة القانونية للالتزام بهذه الشروط نيابة عن ذلك
                    الكيان.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="scroll-mt-20" id="section-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    استخدام الخدمات
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    أنت توافق على استخدام خدماتنا فقط للأغراض المشروعة ووفقًا
                    لهذه الشروط وجميع القوانين واللوائح المعمول بها.
                  </p>
                  <p>أنت مسؤول عن:</p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>أي محتوى أو معلومات تقدمها عبر خدماتنا</li>
                    <li>الحفاظ على سرية معلومات حسابك وكلمة المرور</li>
                    <li>جميع الأنشطة التي تحدث تحت حسابك</li>
                  </ul>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 mt-4">
                    <p className="text-yellow-700 dark:text-yellow-300">
                      <strong>ملاحظة:</strong> يحظر استخدام خدماتنا لأي غرض غير
                      قانوني أو غير مصرح به بموجب هذه الشروط.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="scroll-mt-20" id="section-3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    الملكية الفكرية
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    الموقع وجميع محتوياته وميزاته ووظائفه مملوكة لـ Bravocode أو
                    مرخص لها وهي محمية بموجب قوانين حقوق النشر والعلامات
                    التجارية والبراءات الدولية.
                  </p>
                  <p>لا يجوز لك:</p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>نسخ أو تعديل أو إنشاء أعمال مشتقة من محتوى موقعنا</li>
                    <li>استخدام أي محتوى لأغراض تجارية دون إذن كتابي منا</li>
                    <li>حذف أو تغيير أي إشعارات حقوق الملكية</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="scroll-mt-20" id="section-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    حدود المسؤولية
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    إلى أقصى حد يسمح به القانون، لن تكون Bravocode مسؤولة بأي
                    حال من الأحوال عن:
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية</li>
                    <li>فقدان البيانات أو الأرباح أو السمعة</li>
                    <li>أي أخطاء أو إغفالات في المحتوى</li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 p-4 mt-4">
                    <p className="text-blue-700 dark:text-blue-300">
                      <strong>استثناء:</strong> لا تستثني هذه الشروط أو تحد من
                      المسؤولية عن الوفاة أو الإصابة الشخصية الناتجة عن إهمالنا
                      أو عن الاحتيال أو التمثيل الكاذب.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="scroll-mt-20" id="section-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    5
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    إنهاء الخدمة
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    يجوز لنا إنهاء أو تعليق وصولك إلى موقعنا وخدماتنا على الفور،
                    دون إشعار مسبق أو مسؤولية، في الحالات التالية:
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>إذا انتهكت هذه الشروط</li>
                    <li>إذا طلبت ذلك السلطات القانونية</li>
                    <li>في حالة حدوث تغيير غير متوقع في الخدمة</li>
                  </ul>
                  <p>
                    عند الإنهاء، يتوقف حقك في استخدام الخدمة على الفور، ويجب
                    عليك التوقف فورًا عن استخدام الموقع.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="scroll-mt-20" id="section-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    6
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    القانون الحاكم
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    تخضع هذه الشروط وتُفسر وفقًا لقوانين جمهورية مصر العربية،
                    بغض النظر عن تعارضها مع أحكام القانون.
                  </p>
                  <p>
                    أي نزاعات تنشأ عن أو تتعلق بهذه الشروط ستخضع للاختصاص الحصري
                    للمحاكم في جمهورية مصر العربية.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="scroll-mt-20" id="section-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    7
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white text-gray-900">
                    التغييرات على الشروط
                  </h2>
                </div>
                <div className="pl-14 space-y-4 dark:text-gray-300 text-gray-600">
                  <p>
                    نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه
                    الشروط في أي وقت.
                  </p>
                  <p>
                    سنقوم بنشر الإشعار بأي تغييرات جوهرية على هذه الصفحة وسنحدد
                    تاريخ &quot;آخر تحديث&quot; في أعلى هذه الشروط.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 dark:border-green-500 p-4 mt-4">
                    <p className="text-green-700 dark:text-green-300">
                      <strong>نصيحة:</strong> نوصي بمراجعة هذه الشروط بشكل دوري
                      للاطلاع على أي تحديثات. استمرار استخدامك للخدمة بعد نشر
                      التغييرات يعني موافقتك على الشروط المعدلة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-8 mt-8 border-t dark:border-slate-700">
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-4">
                  اتصل بنا
                </h3>
                <p className="dark:text-gray-300 text-gray-600 mb-4">
                  إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    صفحة التواصل
                  </a>
                  <a
                    href="mailto:legal@bravocode.com"
                    className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    legal@bravocode.com
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
