import React, { useEffect, useState } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";
import { mainfunc, pricefunc, searchfunc } from "../FilterApp/Redux/Filter";
import { useDispatch, useSelector } from "react-redux";
import { menufunc } from "../FilterApp/Redux/Filter";
export default function Mainmenu(params) {
  let dis = useDispatch();
  let redux = useSelector((state) => state.filter.value);

  const [arr, setArr] = useState(["Home", "Women", "kid's", "Men"]);
  const [number, setNumber] = useState([]);
  const [seed, setSeed] = useState("");
  let sum = 0;
  useEffect(() => {
    show();
  }, [redux]);

  async function show(params) {
    try {
      let res = await axios(
        `https://6437e9e1894c9029e8c9a935.mockapi.io/shops`
      );
      setNumber(res.data.map((item) => item.number));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    setSeed(
      `https://avatars.dicebear.com/api/adventurer/${Math.floor(
        Math.random() * 5000
      )}.svg`
    );
  }, []);

  const sendData = (item) => {
    dis(mainfunc(item.toLocaleLowerCase()));
  };

  const chnageData = (e) => {
    dis(mainfunc(""));
    dis(searchfunc(e.target.value));
    dis(pricefunc(""));
  };

  return (
    <>
      <div className="head">
        <div className="box1">
          <div className="user">
            <img src={seed} alt="profile" className="user-photo-profile" />
          </div>
          <div className="bag">
            <NavLink to={"/cart"}>
              <div className="bagicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  width="28px"
                >
                  <path
                    fill="#fff"
                    d="m3.19 15.437.851-.207-.85.207Zm0-6.182-.85-.208.85.208Zm17.445 0 .85-.208-.85.208Zm0 6.182.85.208-.85-.208Zm-5.76 5.348-.192-.854.192.854Zm-5.924 0-.193.854.193-.854Zm0-16.878.192.854-.192-.854Zm5.924 0 .192-.854-.192.854Zm-6.446 16.76.192-.853-.192.854Zm6.968 0 .192.854-.192-.854Zm0-16.642-.193.853.193-.853Zm-6.968 0-.193-.854.193.854Zm-4.254 1.61-.86.158.86-.158ZM3.47 6.65a.875.875 0 0 0 1.721-.315L3.47 6.65ZM1.327 1.727a.875.875 0 1 0-.308 1.723l.308-1.723Zm6.462 19.334c.087.188.121.4.096.608l1.738.208a2.878 2.878 0 0 0-.247-1.554l-1.587.738Zm.096.608c-.025.21-.107.404-.234.562l1.364 1.096c.334-.416.544-.92.608-1.45l-1.738-.208Zm-.234.562a1.019 1.019 0 0 1-.474.331l.549 1.662c.507-.168.954-.48 1.289-.896L7.65 22.23Zm-.474.331a.968.968 0 0 1-.56.015l-.46 1.688c.516.14 1.06.127 1.569-.041l-.549-1.662Zm-.56.015a1.011 1.011 0 0 1-.487-.305l-1.306 1.165c.356.399.818.688 1.333.828l.46-1.688Zm-.487-.305a1.1 1.1 0 0 1-.261-.547l-1.725.294c.09.527.324 1.02.68 1.418l1.306-1.165Zm-.261-.547a1.13 1.13 0 0 1 .066-.613l-1.622-.658a2.88 2.88 0 0 0-.17 1.565l1.726-.294Zm.066-.613c.078-.193.206-.354.366-.469L5.284 19.22c-.434.31-.77.74-.971 1.235l1.622.658Zm11.487-.302c.15.131.263.307.322.508l1.68-.494a2.833 2.833 0 0 0-.848-1.33l-1.154 1.316Zm.322.508c.06.202.062.417.006.62l1.687.464a2.882 2.882 0 0 0-.014-1.578l-1.678.494Zm.006.62a1.09 1.09 0 0 1-.314.515l1.178 1.294c.396-.36.68-.828.823-1.345l-1.687-.465Zm-.314.515a.997.997 0 0 1-.514.249l.274 1.728a2.748 2.748 0 0 0 1.418-.683l-1.178-1.294Zm-.514.249a.971.971 0 0 1-.557-.077l-.727 1.592a2.72 2.72 0 0 0 1.558.213l-.274-1.728Zm-.557-.077a1.036 1.036 0 0 1-.44-.386l-1.475.943c.289.452.7.812 1.188 1.035l.727-1.592Zm-.44-.386a1.117 1.117 0 0 1-.175-.589l-1.75.02c.006.536.161 1.06.45 1.512l1.474-.943Zm-.175-.589a1.12 1.12 0 0 1 .161-.593l-1.495-.91A2.87 2.87 0 0 0 14 21.67l1.75-.02ZM8.62 4.878l.522-.117-.385-1.708-.522.118.385 1.707Zm6.062-.117.521.117.385-1.707-.522-.118-.384 1.708Zm.521 15.053-.521.117.384 1.708.522-.118-.385-1.707Zm-6.061.117-.522-.117-.385 1.707.522.118.385-1.707ZM4.041 15.23a12.172 12.172 0 0 1 0-5.768l-1.7-.415a13.922 13.922 0 0 0 0 6.598l1.7-.415Zm15.744-5.768a12.171 12.171 0 0 1 0 5.768l1.7.415a13.923 13.923 0 0 0 0-6.598l-1.7.415Zm-5.102 10.47a12.586 12.586 0 0 1-5.54 0l-.385 1.707c2.079.468 4.231.468 6.31 0l-.385-1.707ZM9.143 4.76a12.587 12.587 0 0 1 5.54 0l.384-1.708a14.337 14.337 0 0 0-6.309 0l.385 1.708Zm-.522 15.053c-2.233-.504-4.015-2.27-4.58-4.584l-1.7.415c.717 2.937 2.992 5.222 5.895 5.876l.385-1.707Zm6.968 1.707c2.903-.654 5.179-2.939 5.896-5.876l-1.7-.415c-.565 2.313-2.347 4.08-4.58 4.584l.384 1.707Zm-.385-16.643c2.234.504 4.016 2.27 4.58 4.584l1.7-.415c-.716-2.937-2.992-5.221-5.895-5.876l-.385 1.707ZM8.236 3.171c-2.903.655-5.178 2.939-5.895 5.876l1.7.415c.565-2.313 2.347-4.08 4.58-4.584l-.385-1.707ZM3.7 17.124h16.426v-1.75H3.7v1.75ZM3.314 5.793l.157.856 1.721-.315-.156-.856-1.722.315ZM1.02 3.45c1.147.205 2.073 1.128 2.295 2.343l1.722-.315c-.35-1.907-1.817-3.413-3.71-3.75L1.02 3.45Z"
                  ></path>
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="1.75"
                    d="m13.423 7.256.047.006c1.993.285 3.453 1.762 3.453 3.494"
                  ></path>
                </svg>
                <span>{number.map((item) => (sum += item)).pop()}</span>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="icon">
          <ion-icon
            onClick={() => dis(menufunc(false))}
            name="close"
          ></ion-icon>
        </div>
      </div>
      <div className="linkbox">
        <ul>
          {arr.map((item) => (
            <li
              key={item}
              onClick={() => {
                sendData(item);
                dis(menufunc(false));
              }}
            >
              <NavLink
                to={item == "Home" ? `` : `/type=${item.toLocaleLowerCase()}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="searchbox">
        <div className="inputbox">
          <div className="icon">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div className="input">
            <input
              type={"search"}
              placeholder="search ..."
              onChange={chnageData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
