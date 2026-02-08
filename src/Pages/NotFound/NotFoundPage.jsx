import { Link } from "react-router-dom";
import buttons from "../../assets/css/buttons.module.css";
export default function NotFoundPage() {
    return (
        <section className="container text-center py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <h1 className="display-5 fw-bold mb-3">الصفحة غير موجودة</h1>
                    <p className="text-muted mb-4">
                        قد تكون الرابط غير صحيح أو تم نقل الصفحة. جرّب العودة للصفحة الرئيسية أو استخدام القائمة بالأعلى.
                    </p>
                    <Link to="/" className={`btn px-4 ${buttons.primaryBtn}`}>
                        العودة للرئيسية
                    </Link>
                </div>
            </div>
        </section>
    );
}
