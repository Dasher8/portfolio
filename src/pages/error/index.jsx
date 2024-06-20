import React from "react";
import LayoutDefault from "../../layouts/default";
import { Link } from "react-router-dom";

export default function Error() {
  return (
      <LayoutDefault>
        <main className="error-page">
          <h1 id="error-title">404</h1>
          <p id="error-text">
            Oups! La page que <br className="space" /> vous demandez n'existe
            pas.
          </p>
          <Link to={"/"} className="return-link">
            <p>Retourner sur la page d’accueil</p>
          </Link>
        </main>
      </LayoutDefault>
  );
}
