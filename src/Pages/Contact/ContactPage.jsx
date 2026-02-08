import { useState } from "react";
import styles from "./ContactPage.module.css";
import buttons from "../../assets/css/buttons.module.css";

const initialState = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "الاسم مطلوب";
    if (!form.email.trim()) nextErrors.email = "البريد الإلكتروني مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "بريد إلكتروني غير صالح";
    if (!form.message.trim()) nextErrors.message = "الرسالة مطلوبة";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    setStatus("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("تم استلام رسالتك، سنعاود التواصل قريباً.");
    setForm(initialState);
  };

  return (
    <section className={styles.contactPage}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <h1 className={`${styles.contactTitle} text-center mb-4`}>
              تواصل معنا
            </h1>

            <p className="text-center text-muted mb-5">
              يمكنك مراسلتنا عبر النموذج أو استخدام بيانات التواصل المباشرة.
            </p>

            <div className={`${styles.contactCard} rounded-4`}>
              {/* بيانات التواصل */}
              <div className="mb-4">
                <h2 className="h5 fw-bold">بيانات التواصل</h2>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">📞 01024298289</li>
                  <li className="mb-2">✉️ depa01777@icloud.com</li>
                  <li>📍 القاهرة - مصر</li>
                </ul>
              </div>

              <hr className="my-4" />

              {/* الفورم */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    الاسم
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn w-100 ${buttons.primaryBtn}`}
                >
                  إرسال
                </button>

                {status && (
                  <div
                    className="alert alert-success mt-3 mb-0 text-center"
                    aria-live="polite"
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
