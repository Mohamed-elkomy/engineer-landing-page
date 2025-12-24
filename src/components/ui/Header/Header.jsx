import { Link, NavLink, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import { useEffect, useRef, useState } from "react";

import logo from "../../../assets/images/logo-2.png";
import styles from "./Header.module.css";
import buttons from "../../../assets/css/buttons.module.css";

export default function Header() {
    const offcanvasRef = useRef(null);
    const offcanvasInstanceRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    /* Init Offcanvas */
    useEffect(() => {
        const el = offcanvasRef.current;
        if (!el) return;

        const instance = Offcanvas.getOrCreateInstance(el, { backdrop: true });
        offcanvasInstanceRef.current = instance;

        const handleShown = () => setIsOpen(true);
        const handleHidden = () => setIsOpen(false);

        el.addEventListener("shown.bs.offcanvas", handleShown);
        el.addEventListener("hidden.bs.offcanvas", handleHidden);

        return () => {
            el.removeEventListener("shown.bs.offcanvas", handleShown);
            el.removeEventListener("hidden.bs.offcanvas", handleHidden);
            instance.dispose();
        };
    }, []);

    /* Close offcanvas on route change */
    useEffect(() => {
        if (offcanvasInstanceRef.current) {
            offcanvasInstanceRef.current.hide();
        }
    }, [pathname]);

    const toggleOffcanvas = () => {
        const instance =
            offcanvasInstanceRef.current ||
            (offcanvasRef.current &&
                Offcanvas.getOrCreateInstance(offcanvasRef.current));

        if (!instance) return;
        instance.toggle();
    };

    const closeOffcanvas = () => {
        if (offcanvasInstanceRef.current) {
            offcanvasInstanceRef.current.hide();
        }
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav
                className={`navbar navbar-expand-lg shadow-sm py-2 sticky-top ${styles.navbar}`}
            >
                <div className="container d-flex align-items-center justify-content-between">
                    {/* Mobile Toggle */}
                    <button
                        className={`navbar-toggler border-0 ${styles.navbarToggler}`}
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                        onClick={toggleOffcanvas}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="المهندس للكابلات" className={styles.brandLogo} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse d-none d-lg-flex">
                        <ul className="navbar-nav mx-auto gap-3">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-link ${styles.navLink} ${isActive ? styles.active : ""
                                        }`
                                    }
                                >
                                    الرئيسية
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/privacy"
                                    className={({ isActive }) =>
                                        `nav-link ${styles.navLink} ${isActive ? styles.active : ""
                                        }`
                                    }
                                >
                                    سياسة الخصوصية
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/return"
                                    className={({ isActive }) =>
                                        `nav-link ${styles.navLink} ${isActive ? styles.active : ""
                                        }`
                                    }
                                >
                                    سياسة الاسترجاع والاسترداد
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/terms"
                                    className={({ isActive }) =>
                                        `nav-link ${styles.navLink} ${isActive ? styles.active : ""
                                        }`
                                    }
                                >
                                    الشروط والأحكام
                                </NavLink>
                            </li>
                        </ul>

                        <Link to="/contact" className={`btn ${buttons.primaryBtn}`}>
                            تواصل معنا
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ================= OFFCANVAS ================= */}
            <div
                ref={offcanvasRef}
                className={`offcanvas offcanvas-end ${styles.offcanvas}`}
                tabIndex="-1"
                dir="rtl"
                aria-labelledby="mobileMenuLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title w-100" id="mobileMenuLabel">
                        <img
                            src={logo}
                            alt="المهندس للكابلات"
                            className={styles.offcanvasLogo}
                        />
                    </h5>

                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={closeOffcanvas}
                    />
                </div>

                <div className="offcanvas-body">
                    <Link
                        to="/"
                        className={`nav-link mb-3 ${styles.offcanvasLink}`}
                        onClick={closeOffcanvas}
                    >
                        الرئيسية
                    </Link>

                    <Link
                        to="/privacy"
                        className={`nav-link mb-3 ${styles.offcanvasLink}`}
                        onClick={closeOffcanvas}
                    >
                        سياسة الخصوصية
                    </Link>

                    <Link
                        to="/return"
                        className={`nav-link mb-3 ${styles.offcanvasLink}`}
                        onClick={closeOffcanvas}
                    >
                        سياسة الاسترجاع والاسترداد
                    </Link>

                    <Link
                        to="/terms"
                        className={`nav-link mb-4 ${styles.offcanvasLink}`}
                        onClick={closeOffcanvas}
                    >
                        الشروط والأحكام
                    </Link>

                    <Link
                        to="/contact"
                        className={`btn w-100 ${buttons.primaryBtn}`}
                        onClick={closeOffcanvas}
                    >
                        تواصل معنا
                    </Link>
                </div>
            </div>
        </>
    );
}
