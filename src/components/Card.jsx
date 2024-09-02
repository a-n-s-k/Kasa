import React from 'react';
import "./../scss/Card.scss";
import { Link } from "react-router-dom";

export default function Card ({ coverImage, title, itemId }) {
  return (
    <article key={itemId} className="card">
      <Link to={`/logement/${itemId}`} className="card-link">
        <div className="img-container">
          <img src={coverImage} alt={title} />
        </div>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  );
}