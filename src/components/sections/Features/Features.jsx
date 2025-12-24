import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: "🔥",
    title: "مقاومة وموثوقية عالية",
    text:
      "كابلات مقاومة للحرارة والرطوبة والتآكل لأداء ثابت في أصعب الظروف التشغيلية.",
  },
  {
    icon: "🛠️",
    title: "دعم فني وحساب أحمال",
    text:
      "دعم تقني متخصص يساعدك في اختيار الكابل المناسب وحساب الأحمال الكهربائية بدقة.",
  },
  {
    icon: "📏",
    title: "تنوّع المقاسات والاستخدامات",
    text:
      "مجموعة واسعة من المقاسات تناسب المشاريع السكنية، الصناعية، والتجارية.",
  },
  {
    icon: "⚡",
    title: "جودة عالية ومعايير أمان",
    text:
      "كابلات وأسلاك مصنوعة وفق أعلى معايير الجودة لضمان أمان كامل في جميع التركيبات الكهربائية.",
  },
  {
    icon: "📦",
    title: "تغليف احترافي وشحن سريع",
    text:
      "تغليف آمن، وترتيب في التخزين، وسرعة في تنفيذ الطلبات وتوصيلها للموقع.",
  },
  {
    icon: "📊",
    title: "تكامل مع التطبيق",
    text:
      "إدارة الطلبات، متابعة الكميات، وحسابات الأحمال مباشرة من خلال تطبيق المهندس.",
  },
];

export default function Features() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container text-center">
        <h1 className={styles.featuresTitle}>مميزات تطبيق المهندس</h1>
        <p className={styles.featuresSubtitle}>
          حلول متكاملة في عالم الكابلات والأسلاك الكهربائية
        </p>

        <div className={styles.sliderWrapper}>
          {/* Custom buttons */}
          <button ref={prevRef} className={styles.prevBtn} aria-label="السابق" />
          <button ref={nextRef} className={styles.nextBtn} aria-label="التالي" />

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              577: { slidesPerView: 2 },
              993: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className={styles.featuresSwiper}
          >
            {FEATURES.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.featureCard}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
