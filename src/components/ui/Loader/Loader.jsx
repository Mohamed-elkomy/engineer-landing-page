import logo from "../../../assets/images/logo-2.png";
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.loaderOverlay} role="status" aria-label="جاري التحميل">
            <div className={`${styles.loaderCard} text-center`}>
                <img src={logo} alt="شعار الشركة" className={styles.loaderLogo} loading="lazy" />
                <div className={styles.loaderDot} aria-hidden="true" />
                <p className={`${styles.loaderText} mt-2`}>يرجى الانتظار...</p>
            </div>
        </div>
    );
}

