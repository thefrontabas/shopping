import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { mainfunc, pricefunc, searchfunc, filterfunc } from "../Redux/Filter";

export default function Range(params) {
  let dis = useDispatch();
  let [number, setNumber] = useState(0);
  function change(e) {
    setNumber(e.target.value * 100);
    dis(pricefunc(e.target.value * 100));
    dis(searchfunc(""));
    dis(mainfunc(""));
    dis(filterfunc(false));
  }
  return (
    <div className="rangebox">
      <div className="head">FILTER</div>
      <div className="slider">
        <div>${number}</div>
        <input
          type={"range"}
          className="range"
          min="0"
          max="11"
          onChange={change}
        />
      </div>
    </div>
  );
}
