import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sneakfunc } from "../Redux/Filter";
import axios from "axios";

export default function Card(params) {
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState([]);
  let redux = useSelector((state) => state.filter.value);
  let dispatch = useDispatch();
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
    showdata();
  }, [redux]);

  async function showdata(params) {
    try {
      let res = await axios(
        `https://6437e9e1894c9029e8c9a935.mockapi.io/shop2`
      );
      setArr(res.data);
      setFilter(res.data);
      for (const item of res.data) {
        if (item.for == redux.result) {
          setFilter(arr.filter((item) => item.for == redux.result));
        } else if (item.type == redux.result) {
          setFilter(arr.filter((item) => item.type == redux.result));
        } else if (item.color == redux.result) {
          setFilter(arr.filter((item) => item.color == redux.result));
        } else if (redux.result == "" && redux.price == "") {
          setFilter(
            res.data.filter((item) =>
              item.name?.includes(redux.search.toUpperCase())
            )
          );
        } else if (redux.result == "" && redux.search == "") {
          setFilter(arr.filter((item) => item.price <= redux.price));
        }
        // else if(redux.result=="home"){
        //     setFilter(cityList)
        // }
      }
    } catch (e) {
      console.log(e);
    }
  }

  function starfunc(e, i) {
    e.target.stroke = "orange";
    console.log(e.target.fill);
  }

  async function bagfunc(item) {
    try {
      let res = await axios.post(
        `https://6437e9e1894c9029e8c9a935.mockapi.io/shops`,
        { item: item, number: 1 }
      );
      dispatch(sneakfunc([item]));
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="card-flex">
      {!filter ? (
        <div className="none-box">No Results!</div>
      ) : (
        filter.map((item) => (
          <div className="card" title={item.name} key={item.id}>
            <div
              className="imgbox"
              style={{
                backgroundColor:
                  color[Math.round(Math.random() * color.length)],
              }}
            >
              <img src={item.img} draggable="false" alt="" />
              <div className="bagbox">
                <ion-icon
                  name="bag-handle"
                  onClick={() => bagfunc(item)}
                ></ion-icon>
              </div>
            </div>
            <div className="contentbox">
              <div className="box1">
                <div className="name">{item.name}</div>
                <div className="star">
                  {[1, 2, 3].map((item, i) => (
                    <div>
                      <svg
                        onClick={(e) => starfunc(e, i)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={"15px"}
                      >
                        <path
                          stroke="#000"
                          d="M9.654 4.586c.878-2.115 3.814-2.115 4.692 0l.612 1.474a2.555 2.555 0 0 0 2.065 1.57l1.707.194c2.155.244 3.046 2.951 1.471 4.475L18.752 13.7a2.636 2.636 0 0 0-.745 2.404l.35 1.77c.443 2.243-1.96 3.936-3.855 2.718l-1.145-.736a2.503 2.503 0 0 0-2.714 0l-1.145.736c-1.896 1.218-4.298-.475-3.855-2.717l.35-1.771a2.637 2.637 0 0 0-.745-2.404l-1.45-1.4c-1.574-1.524-.683-4.23 1.472-4.475l1.707-.194a2.555 2.555 0 0 0 2.065-1.57l.612-1.474Z"
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="box2">
                <div className="price">{item.price}$</div>
                <div
                  className="color"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
