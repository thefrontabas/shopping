import React from "react";
import { useDispatch } from "react-redux";
import { mainfunc, filterfunc } from "../Redux/Filter";

export default function Colorfilter(params) {
  const color = [
    "blue",
    "red",
    "purple",
    "black",
    "orange",
    "pink",
    "darksyan",
    "darkslateblue",
    "springgreen",
    "gray",
    "red",
    "purple",
    "orange",
  ];
  let dis = useDispatch();
  const sendData = (item) => {
    dis(mainfunc(item));
    dis(filterfunc(false));
  };
  return (
    <div className="colorbox">
      <div className="head">COLORS</div>
      <div className="colorcard">
        {color.map((item, i) => (
          <div
            className="color"
            key={i}
            onClick={() => sendData(item)}
            title={color[i]}
            style={{ backgroundColor: color[i] }}
          ></div>
        ))}
      </div>
    </div>
  );
}
