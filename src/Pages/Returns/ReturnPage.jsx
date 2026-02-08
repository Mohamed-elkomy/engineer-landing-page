import PolicyCard from "../../components/Policy/PolicyCard";
import styles from "../../assets/css/PolicyPages.module.css";

export default function ReturnPolicyPage() {
  return (
    <section className={styles.policyContainer}>
      <h1
        className={`${styles.pageTitle} animate__animated animate__fadeInDown`}
      >
        سياسة الاسترجاع والاسترداد
      </h1>

      <PolicyCard title="مقدمة">
        <p>
          تهدف سياسة الاسترجاع والاسترداد في "المهندس للكابلات الكهربائية" إلى
          ضمان الشفافية وتوضيح حقوق العميل في حال وجود رغبة في إلغاء الطلب أو
          استبدال المنتجات.
        </p>
      </PolicyCard>

      <PolicyCard title="1. الحالات المؤهلة لإلغاء الطلب">
        <p>
          • في حال تم تقديم طلب الإلغاء قبل شحن المنتج.
          <br />
          • وجود خطأ في المنتج.
          <br />
          • تلف المنتج أثناء الشحن.
          <br />• حدوث خطأ في عملية الدفع.
        </p>
      </PolicyCard>

      <PolicyCard title="2. شروط قبول الإلغاء أو الاسترجاع">
        <p>
          • خلال 48 ساعة من الاستلام.
          <br />
          • المنتج بحالته الأصلية.
          <br />
          • وجود الفاتورة.
          <br />• عدم قصّ أو استخدام المنتج.
        </p>
      </PolicyCard>

      <PolicyCard title="3. آلية تقديم الطلب">
        <p>
          • عبر التطبيق.
          <br />
          • الاتصال بالدعم.
          <br />• توفير بيانات الطلب.
        </p>
      </PolicyCard>

      <PolicyCard title="4. الاسترداد">
        <p>
          • خلال 3–7 أيام عمل.
          <br />
          • بنفس وسيلة الدفع.
          <br />• قد تُخصم رسوم شحن.
        </p>
      </PolicyCard>

      <PolicyCard title="5. الحالات غير المشمولة">
        <p>
          • المنتجات المخصّصة.
          <br />
          • المنتجات المستخدمة.
          <br />
          • الطلبات المتأخرة.
          <br />• المنتجات السليمة.
        </p>
      </PolicyCard>

      <PolicyCard title="6. تعديل السياسة">
        <p>
          يحق للشركة تعديل السياسة في أي وقت مع الإعلان داخل التطبيق أو الموقع.
        </p>
      </PolicyCard>

      <PolicyCard title="7. اتصل بنا">
        <p>
          <strong>depa01777@icloud.com</strong>
        </p>
      </PolicyCard>
    </section>
  );
}
