import React from 'react';
import "./../scss/Tags.scss";

export default function Tags ({ tags }) {
  return (
      <div className="logement-tags">
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className="tags">
          {tag}
        </p>
      ))}
    </div>
  );
}
