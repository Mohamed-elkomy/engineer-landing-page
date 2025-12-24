import React from "react";
import google from "../../../assets/images/google.png";
import apple from "../../../assets/images/apple.png";
import frame from "../../../assets/images/1.png";

import styles from "./Download.module.css";

export default function Download() {
  return (
    <section
      id="download"
      className={`${styles.downloadSection} d-flex justify-content-between align-items-center`}
    >
      {/* IMAGE */}
      <div className={`${styles.downloadRight} d-flex justify-content-center`}>
        <img
          src={frame}
          className={styles.downloadImg}
          alt="صورة التطبيق"
          loading="lazy"
        />
      </div>

      {/* TEXT */}
      <div className={`${styles.downloadLeft} text-end`}>
        <h1 className={styles.downloadTitle}>حمّل تطبيق المهندس الآن</h1>

        <p className={styles.downloadText}>
          تطبيق المهندس هو أداة احترافية لإدارة احتياجاتك من الأسلاك والكابلات
          الكهربائية، سواء كنت مهندساً، مقاولاً، فنياً، أو تعمل في مجال
          التركيبات والصيانة. يوفّر التطبيق كتالوجاً شاملاً للمنتجات، معلومات
          تقنية دقيقة، وحاسبة كهربائية متقدمة تساعدك على تحديد المقاس المناسب
          لكل مشروع بسهولة وسرعة.
        </p>

        <div className={`${styles.downloadButtons} d-flex justify-content-start`}>
          <button
            type="button"
            className="p-0 border-0 bg-transparent"
            aria-label="تحميل من متجر آبل"
          >
            <img
              src={apple}
              className={styles.downloadBtn}
              alt="تحميل من متجر آبل"
            />
          </button>

          <button
            type="button"
            className="p-0 border-0 bg-transparent"
            aria-label="تحميل من متجر جوجل"
          >
            <img
              src={google}
              className={styles.downloadBtn}
              alt="تحميل من متجر جوجل"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
