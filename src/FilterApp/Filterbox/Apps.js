import React, { Suspense, lazy } from "react";
import Card from "../Cardbox/card";
import Colorfilter from "./Colorfilter";
import Links from "./Links";
import Range2 from "./Range";
import { useSelector } from "react-redux";

const Mainfilter = lazy(() => import("./Mainfilter"));
export default function App(params) {
  let redux = useSelector((state) => state.filter.value);
  return (
    <div className="flexbox">
      <div className="filterbox">
        <div className="filterbox2">
          <Links />
          <Colorfilter />
          <Range2 />
        </div>
      </div>
      {redux.showfilter && (
        <Suspense fallback={<p>loading</p>}>
          <Mainfilter />
        </Suspense>
      )}
      <div className="cardbox">
        <div className="head">LIFESTYLE SNEAKERS</div>
        <Card />
      </div>
    </div>
  );
}
