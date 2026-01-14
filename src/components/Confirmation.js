export default function Confirmation() {
  const raw = sessionStorage.getItem("rp_register");
  let data = null;

  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = null;
  }

  if (!data) {
    return (
      <div className="page">
        <h1 className="page-title">No registration found</h1>
        <p className="page-subtitle">Please submit the form first.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">Thank You, {data.name}!</h1>

      <div className="confirm-box">
        <p className="confirm-line">You're now registered for <strong>{data.course}</strong>.</p>
        <p className="confirm-line">We'll email to <strong>{data.email}</strong></p>
      </div>
    </div>
  );
}
