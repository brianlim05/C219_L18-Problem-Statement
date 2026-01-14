import { NavLink, Outlet, useParams } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  if (!diploma) {
    return <div className="hint">Diploma not found.</div>;
  }

  return (
    <div className="diploma-layout">
      <div className="module-list">
        <h3 className="section-title">Modules</h3>

        {diploma.modules.map((m) => (
          <NavLink
            key={m.id}
            to={m.id}
            className={({ isActive }) =>
              isActive ? "module-btn active" : "module-btn"
            }
          >
            <span className="module-code">{m.id}</span>
            <span className="module-name">{m.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="module-detail">
        <Outlet />
      </div>
    </div>
  );
}
