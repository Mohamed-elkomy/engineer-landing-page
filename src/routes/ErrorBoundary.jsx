import { Component } from "react";
import { Link } from "react-router-dom";
import buttons from "../assets/css/buttons.module.css";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Route error boundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container text-center py-5" dir="rtl">
          <h1 className="display-6 fw-bold mb-3">حدث خطأ غير متوقع</h1>
          <p className="text-muted mb-4">
            نعمل على حل المشكلة. يمكنك العودة للصفحة الرئيسية ومتابعة التصفح.
          </p>
          <Link to="/" className={`btn px-4 ${buttons.primaryBtn}`}>
            العودة للرئيسية
          </Link>
        </section>
      );
    }
    return this.props.children;
  }
}

