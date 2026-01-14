import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const course = courseRef.current.value.trim();

    if (!name || !email || !course) return;

    sessionStorage.setItem(
      "rp_register",
      JSON.stringify({ name, email, course })
    );

    navigate("/confirmed");
  }

  return (
    <div className="page">
      <h1 className="page-title">Register your interest</h1>
      <p className="page-subtitle">Please register the course you are interested!</p>

      <form className="form-card" onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Name:</label>
          <input className="input" ref={nameRef} required />
        </div>

        <div className="field">
          <label className="label">Email:</label>
          <input className="input" ref={emailRef} type="email" required />
        </div>

        <div className="field">
          <label className="label">Course:</label>
          <input className="input" ref={courseRef} required />
        </div>

        <button className="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
