import { useParams, useNavigate } from "react-router-dom";
import { getModule, toggleFav, isFav } from "../api";
import { useState } from "react";

export default function Module() {
  const { diplomaId, moduleId } = useParams();
  const navigate = useNavigate();
  const module = getModule(diplomaId, moduleId);

  const [saved, setSaved] = useState(isFav(diplomaId, moduleId));

  if (!module) {
    return <div className="hint">Select a module to view details.</div>;
  }

  function handleSave() {
    toggleFav(diplomaId, moduleId);
    setSaved(isFav(diplomaId, moduleId));
  }

  function handleRegister() {
    navigate("/register", {
      state: {
        diplomaId,
        moduleId,
        moduleName: module.name,
      },
    });
  }

  return (
    <div>
      <h2>{module.name}</h2>

      <p className="module-desc">{module.details}</p>

      <div className="module-meta">
        <div>
          <strong>Year</strong>
          <span>{module.level}</span>
        </div>

        <div>
          <strong>Duration</strong>
          <span>{module.duration}</span>
        </div>
      </div>

      <div className="module-actions">
        <button
          className={`btn outline ${saved ? "active" : ""}`}
          onClick={handleSave}
        >
          {saved ? "★ Saved" : "☆ Save"}
        </button>

        <button className="btn" onClick={handleRegister}>
          Register Interest
        </button>
      </div>
    </div>
  );
}
