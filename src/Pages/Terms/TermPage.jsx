import PolicyCard from "../../components/Policy/PolicyCard";
import { Link } from "react-router-dom";
import styles from "../../assets/css/PolicyPages.module.css";

export default function TermsPage() {
    return (
        <section className={styles.policyContainer}>
            <h1 className={`${styles.pageTitle} animate__animated animate__fadeInDown`}>
                الشروط والأحكام
            </h1>

            <PolicyCard title="مقدمة">
                <p>
                    توضح هذه الشروط والأحكام إطار استخدام تطبيق{" "}
                    <strong>المهندس للكابلات الكهربائية</strong> والخدمات المقدمة من خلاله.
                    باستخدامك للتطبيق فإنك توافق على جميع البنود الواردة هنا.
                </p>
            </PolicyCard>

            <PolicyCard title="1. استخدام التطبيق">
                <p>
                    يلتزم المستخدم بعدم إساءة استخدام التطبيق أو محاولة تعطيل أي جزء من
                    أنظمته أو خدماته.
                </p>
            </PolicyCard>

            <PolicyCard title="2. حساب المستخدم">
                <p>
                    يجب إدخال بيانات صحيحة عند التسجيل، ويحظر مشاركة الحساب مع الآخرين. يحق
                    للإدارة تعليق الحساب في حال وجود نشاط غير طبيعي.
                </p>
            </PolicyCard>

            <PolicyCard title="3. الطلبات والخدمات">
                <p>
                    يتيح التطبيق طلب المنتجات الخاصة بالكابلات والأسلاك الكهربائية. الأسعار
                    قابلة للتغيير دون إشعار مسبق.
                </p>
            </PolicyCard>

            <PolicyCard title="4. المسؤولية">
                <p>
                    يبذل التطبيق جهده لتوفير معلومات دقيقة، ومع ذلك يتحمّل المستخدم مسؤولية
                    التأكد من ملاءمة المنتجات لاستخدامه.
                </p>
            </PolicyCard>

            <PolicyCard title="5. الإلغاء والاسترداد">
                <p>
                    يخضع الإلغاء لشروط{" "}
                    <Link to="/return">سياسة الاسترجاع والاسترداد</Link>.
                </p>
            </PolicyCard>

            <PolicyCard title="6. الملكية الفكرية">
                <p>
                    جميع محتويات التطبيق بما فيها النصوص والصور والبرمجيات ملك للشركة ولا
                    يجوز نسخها بدون إذن.
                </p>
            </PolicyCard>

            <PolicyCard title="7. تعديلات الشروط">
                <p>
                    قد يتم تعديل الشروط في أي وقت وتصبح سارية فور نشرها داخل التطبيق أو
                    الموقع.
                </p>
            </PolicyCard>

            <PolicyCard title="8. التواصل">
                <p>لأي استفسار يمكنكم التواصل عبر البريد أو الهاتف في صفحة الدعم.</p>
            </PolicyCard>
        </section>
    );
}
