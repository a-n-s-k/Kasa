import "./../scss/Banner.scss";

export default function Banner ({ text, bannerStyle }) {
  return (
    <div className={`${bannerStyle}`}>
      <h1>{text}</h1>
    </div>
  );
}