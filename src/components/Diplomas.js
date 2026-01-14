import { NavLink, Outlet } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();

  return (
    <div className="split">
      <div className="panel">
        <h2 className="section-title">Diplomas</h2>

        <div className="diploma-list">
          {diplomas.map((d) => (
            <NavLink
              key={d.id}
              to={d.id}
              className={({ isActive }) =>
                isActive ? "diploma-item active" : "diploma-item"
              }
            >
              <div className="diploma-name">{d.name}</div>
              <div className="diploma-desc">{d.description}</div>
              <div className="diploma-meta">{d.modulesCount} modules</div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="panel">
        <Outlet />
      </div>
    </div>
  );
}
