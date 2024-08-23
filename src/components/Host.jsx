import "./../scss/Host.scss";

export default function Host ({ name, picture }) {
  
  const nomPrenom = name.split(" ");
  const firstName = nomPrenom[0];
  const lastName = nomPrenom[1];
  
  return (
      <div className="host-info">
        <div className="host-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img src={picture} alt={name} />
      </div>
  );
}