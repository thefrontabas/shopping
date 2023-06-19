import React from "react";
import Colorfilter from "./Colorfilter";
import Links from "./Links";
import { useDispatch } from "react-redux";
import { filterfunc } from "../Redux/Filter";
import Range from "./Range";
export default function Mainfilter(params) {
  let dis = useDispatch();

  return (
    <div className="mainfilter">
      <div style={{ color: "#fff" }}>
        <ion-icon
          onClick={() => dis(filterfunc(false))}
          name="close"
        ></ion-icon>
      </div>
      <Links />
      <Colorfilter />
      <Range />
    </div>
  );
}
