import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { mainfunc, filterfunc } from "../Redux/Filter";

export default function Links() {
  let dis = useDispatch();
  const [arr, setArr] = useState([
    "men",
    "women",
    "kid's",
    "football",
    "basketball",
  ]);

  const sendDate = (item) => {
    dis(mainfunc(item));
    dis(filterfunc(false));
  };
  return (
    <div className="linkbox">
      <div className="head">SNEAKER'S</div>
      <div className="ulbox">
        {arr.map((item, i) => (
          <div key={i} onClick={() => sendDate(item)} className="link">
            <NavLink to={`/type=${item}`}>{item.toUpperCase()}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
