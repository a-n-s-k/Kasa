import "./../scss/Banner.scss";

export default function Banner ({ text, className }) {
  return (
    <div className={`${className}`}>
      <h1>{text}</h1>
    </div>
  );
}