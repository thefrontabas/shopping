import React, { lazy, Suspense, useState } from "react";
import Menu from "./Menu/Menu";
import "./FilterApp/Style/Style.css";

import { Route, Routes } from "react-router";
import Menuhead from "./Menu/Menuhead";
import { useSelector } from "react-redux";
import Index from "./Loading/Index";

const Apps = lazy(() =>
  import(/*PackNames: App-Route*/ "./FilterApp/Filterbox/Apps")
);
const Bag = lazy(() => import(/*PackNames: bag-Route*/ "./BagApp/Bag"));
const Mainmenu = lazy(() => import("./Menu/Mainmenu"));

function App() {
  const [arr, setArr] = useState([
    "men",
    "women",
    "kid's",
    "football",
    "basketball",
  ]);
  let redux = useSelector((state) => state.filter.value);

  return (
    <div className="App">
      <div className="menubox">
        <Menu />
      </div>
      <div className="menuhead">
        <Menuhead />
      </div>
      {redux.showmenu && (
        <Suspense fallback={<Index />}>
          <div className="mainmenu">
            <Mainmenu />
          </div>
        </Suspense>
      )}

      <Suspense fallback={<Index />}>
        <Routes>
          <Route path="" element={<Apps />} exact />
          {arr.map((item) => (
            <Route path={`/type=${item}`} element={<Apps />} />
          ))}
          <Route path={`/cart`} element={<Bag />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
