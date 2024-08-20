import "./../scss/Tags.scss";

export default function Tags ({ tags }) {
  return (
    <div className="housing-tags">
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}
