import React from "react";
import { useDispatch } from "react-redux";
import { filterfunc, menufunc } from "../FilterApp/Redux/Filter";
import { NavLink } from "react-router-dom";

export default function Menuhead(props) {
  let dis = useDispatch();
  return (
    <>
      <NavLink to={""}>
        <div className="logo">
          <img
            src="https://www.game7athletics.com/media/wysiwyg/NIKE_WHT.PNG"
            alt=""
          />
        </div>
      </NavLink>
      <div className="icon">
        <ion-icon name="menu" onClick={() => dis(menufunc(true))}></ion-icon>
        <ion-icon
          name="options"
          onClick={() => dis(filterfunc(true))}
        ></ion-icon>
      </div>
    </>
  );
}
