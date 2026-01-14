import { getFavs, setFavs, getDiploma } from "../api";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Favourites() {
  const [favs, setFavList] = useState(getFavs());

  function removeFav(key) {
    const updated = favs.filter((f) => f !== key);
    setFavs(updated);
    setFavList(updated);
  }

  if (favs.length === 0) {
    return <div className="fav-empty">No favourite modules saved.</div>;
  }

  return (
    <div>
      <h2 className="section-title">Favourites</h2>

      <div className="fav-list">
        {favs.map((key) => {
          const [diplomaId, moduleId] = key.split(":");
          const diploma = getDiploma(diplomaId);
          const module = diploma.modules.find((m) => m.id === moduleId);

          return (
            <div key={key} className="fav-wrapper">
              <NavLink
                to={`/diplomas/${diplomaId}/${moduleId}`}
                className="fav-card"
              >
                <div className="fav-code">{module.id}</div>
                <div className="fav-title">{module.name}</div>
                <div className="fav-diploma">{diploma.name}</div>
              </NavLink>

              <button
                className="btn-remove"
                onClick={() => removeFav(key)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
