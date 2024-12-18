import "./../scss/Collapse.scss";
import React, { useState } from "react";
import icon from "./../assets/images/Vector.svg";

const iconInitialState = {
  transform: "rotate(180deg)",
};

export default function Collapse ({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iconStyle, setIconStyle] = useState(iconInitialState);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIconStyle(isOpen ? iconInitialState : { transform: "rotate(0deg)", transition: "all 0.17s linear" });
  };

  return (
    <>
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img src={icon} className="collapse-icon" alt="collapse icon" style={iconStyle} />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </>
  );
}
