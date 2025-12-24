import heroimage from "../../../assets/images/7.png";
import google from "../../../assets/images/google.png";
import apple from "../../../assets/images/apple.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className="row align-items-center">

        {/* TEXT SIDE */}
        <div className={`col-lg-6 col-md-6 col-12 text-end ${styles.heroRight}`}>
          <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
            المهندس – حلول متقدمة للكابلات والأسلاك الكهربائية
          </h1>

          <h2
            className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-1s`}
          >
            خبرة هندسية في توفير أفضل أنواع الأسلاك والكابلات بمعايير جودة وأمان عالمية
          </h2>

          <p
            className={`${styles.desc} animate__animated animate__fadeInUp animate__delay-2s`}
          >
            نوفر أحدث أنواع الكابلات الكهربائية الموثوقة والمعتمدة، مع دعم فني متخصص
            يساعدك على اختيار المقاسات المناسبة، حساب الأحمال بدقة، وضمان أعلى كفاءة
            في التركيبات الكهربائية للمشروعات السكنية والصناعية. مع المهندس… الجودة
            والأمان أساس عملنا.
          </p>

          {/* Store buttons */}
          <div
            className={`${styles.storeButtons} d-flex justify-content-lg-start justify-content-center gap-2 animate__animated animate__fadeInUp animate__delay-3s`}
          >
            <button
              type="button"
              className="p-0 border-0 bg-transparent"
              aria-label="Download on the Apple App Store"
            >
              <img src={apple} className={styles.storeBtn} alt="App Store" />
            </button>

            <button
              type="button"
              className="p-0 border-0 bg-transparent"
              aria-label="Download on Google Play"
            >
              <img src={google} className={styles.storeBtn} alt="Google Play" />
            </button>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className={`col-lg-6 col-md-6 col-12 text-center mt-4 mt-lg-0`}>
          <img
            src={heroimage}
            className={`${styles.heroImg} animate__animated animate__zoomIn animate__delay-1s`}
            alt="صورة التطبيق"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
