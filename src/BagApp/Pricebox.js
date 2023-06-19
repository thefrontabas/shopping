import "./Style.css";
import axios, { all } from "axios";
import React, { useEffect, useState } from "react";

export default function Pricebox(params) {
  let [sum, setsum] = useState([]);
  let [number, setnumber] = useState([]);

  let allsum = 0;
  let allsum2 = 0;

  useEffect(() => {
    show();
  });

  async function show(params) {
    try {
      let res = await axios(
        `https://6437e9e1894c9029e8c9a935.mockapi.io/shops`
      );
      setnumber(res.data.map((item) => item.number));
      setsum(res.data.map((item) => item.number * item.item.price));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="pricebox">
      <div className="pricecom">
        <div className="text">
          commodity prices ({number.map((item) => (allsum2 += item)).pop()})
        </div>
        <div className="number">
          {" "}
          {Intl.NumberFormat("en-US").format(
            sum.map((item) => (allsum += item)).pop()
          )}
          $
        </div>
      </div>

      <div className="totalprice">
        <div className="text">Total shopping cart</div>
        <div className="number">
          {" "}
          {Intl.NumberFormat("en-US").format(allsum)}$
        </div>
      </div>

      <div className="btnbox">
        <button>Countinue</button>
      </div>
    </div>
  );
}
