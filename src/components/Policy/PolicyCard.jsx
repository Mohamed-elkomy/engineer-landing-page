import "./PolicyCard.css";

export default function PolicyCard({ title, children }) {
  return (
    <div className="policy-card animate__animated animate__fadeInUp">
      <h2>{title}</h2>
      <div className="policy-content">{children}</div>
    </div>
  );
}
