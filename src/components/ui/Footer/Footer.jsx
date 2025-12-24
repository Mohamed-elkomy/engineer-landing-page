import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-2.png";
import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    /* Handle Scroll-To-Top Button */
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {/* FOOTER */}
            <footer className={`${styles.footer} text-end`} dir="rtl">
                <div
                    className={`${styles.footerContent} d-flex flex-wrap justify-content-between`}
                >
                    {/* About Column */}
                    <div className={styles.footerColumn}>
                        <h3>عن الشركة</h3>
                        <p>
                            المهندس للكابلات الكهربائية هي شركة متخصصة في تصنيع وتوزيع
                            الكابلات والأسلاك الكهربائية، وتقديم حلول عالية الجودة
                            للمشروعات السكنية والتجارية والصناعية.
                        </p>
                    </div>

                    {/* Important Links */}
                    <div className={styles.footerColumn}>
                        <h3>روابط هامة</h3>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/privacy">سياسة الخصوصية</Link></li>
                            <li><Link to="/return">سياسة الاسترجاع والاسترداد</Link></li>
                            <li><Link to="/terms">الشروط والأحكام</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.footerColumn}>
                        <h3>تواصل معنا</h3>
                        <p>01000000000 📞</p>
                        <p>support@elmohandes-cables.com ✉️</p>
                        <p>القاهرة - مصر 📍</p>
                    </div>

                    {/* Logo */}
                    <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <hr />

                <div className={`${styles.copyright} text-center`}>
                    © 2025 جميع الحقوق محفوظة - المهندس للكابلات الكهربائية
                </div>
            </footer>

            {/* SCROLL TO TOP */}
            <button
                className={`${styles.scrollTopBtn} ${showButton ? styles.show : ""
                    }`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FaArrowCircleUp />
            </button>
        </>
    );
}
