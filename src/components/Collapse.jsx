import "./../scss/Collapse.scss";
import React, { useState } from "react";
import arrowIcon from './../assets/images/arrow.png'


export default function Collapse ({ title, children }) {

  const [openButton, setOpenButton] = useState(false);
  const [openButtonStyle, setOpenButtonStyle] = useState("initial-icon");

  const toggleCollapse = () => {
    setOpenButton(!openButton);
    setOpenButtonStyle(openButton ? "initial-icon" : "final-icon");
  };

  return (
    <div className="collapses-container">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img src={arrowIcon} className={`collapse-icon ${openButtonStyle}`} alt="collapse icon" />
      </button>
      {openButton && <div className="collapse-content">{children}</div>}
    </div>
  );
}















