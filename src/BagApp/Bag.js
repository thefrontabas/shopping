import "./Style.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sneakfunc } from "../FilterApp/Redux/Filter";
import Pricebox from "./Pricebox";

export default function Bag(params) {
  const [bags, setBags] = useState([]);
  let dis = useDispatch();
  let [number, setnumber] = useState([]);
  let redux = useSelector((state) => state.filter.value);
  let sum = 0;

  const color = [
    "#482121",
    "#27374D",
    "#6a00ff",
    "#B04759",
    "#4942E4",
    "#e3af88",
    "#3C6255",
    "#443C68",
    "#d8be43",
    "#312f50",
    "#67e18a",
    "#19376D",
    "#e3af88",
  ];
  useEffect(() => {
    show();
  }, [redux.sneake]);

  async function show(params) {
    try {
      let res = await axios(
        `https://6437e9e1894c9029e8c9a935.mockapi.io/shops`
      );
      setBags(res.data);
      setnumber(res.data.map((item) => item.number));
    } catch (e) {
      console.log(e);
    }
  }

  async function plusfunc(key, item, number) {
    try {
      let res = await axios.put(
        `https://6437e9e1894c9029e8c9a935.mockapi.io/shops/${key}`,
        { number: number + 1, item: item }
      );
      dis(sneakfunc([item]));
    } catch (e) {
      console.log(e);
    }
  }

  async function minfunc(key, item, number) {
    if (number == 1) {
      try {
        let res = await axios.delete(
          `https://6437e9e1894c9029e8c9a935.mockapi.io/shops/${key}`
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let res = await axios.put(
          `https://6437e9e1894c9029e8c9a935.mockapi.io/shops/${key}`,
          { number: number - 1, item: item }
        );
      } catch (e) {
        console.log(e);
      }
    }
    dis(sneakfunc([item]));
  }
  return (
    <div className="bagbox2">
      <div className="tabbox">
        <div className="tab">
          {" "}
          MY BAG <span>{number.map((item) => (sum += item)).pop()}</span>
        </div>
        <div className="border"></div>
      </div>

      <div className="flex">
        <div className="bagcard">
          <div className="content">
            <div className="text">Your Shopping Cart</div>
            <div className="number">{bags.length} commodity</div>
          </div>
          <div className="cardbox2">
            {bags.map((item) => {
              return (
                <div key={item.id} className="card" title={item.item.name}>
                  <div
                    className="imgbox"
                    style={{
                      backgroundColor:
                        color[Math.round(Math.random() * color.length)],
                    }}
                  >
                    <img src={item.item.img} draggable="false" alt="" />
                  </div>
                  <div className="contentbox">
                    <div className="box1">
                      <div className="name">{item.item.name}</div>
                      <div className="star">
                        <div
                          className="plus"
                          onClick={() =>
                            plusfunc(item.id, item.item, item.number)
                          }
                        >
                          +
                        </div>
                        <div className="number">{item.number}</div>
                        <div
                          className="plus"
                          onClick={() =>
                            minfunc(item.id, item.item, item.number)
                          }
                        >
                          -
                        </div>
                      </div>
                    </div>
                    <div className="box2">
                      <div className="price">{item.item.price}$</div>
                      <div
                        className="color"
                        style={{ backgroundColor: item.item.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="infobox">
          <Pricebox />
        </div>
      </div>
    </div>
  );
}
