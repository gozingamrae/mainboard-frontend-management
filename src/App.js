import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Main from "./main/Main";
import Error from "./main/Error";
import Inventory from "./inventory/Inventory";
import Warehousing from "./inventory/Warehousing";
import Product from "./product/Product";
import AddProduct from "./product/AddProduct";
import CuponRegist from "./cupon/pages/cuponregist";
import CuponReport from "./cupon/pages/cuponreport";
import PointReport from "./point/pages/pointreport";
import Inspect from "./inspect/Inspect";
import Common from "./common/Common";
import Member from "./member/pages/Member";
import BlackList from "./member/pages/Blacklist";
import "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Common/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/warehousing" element={<Warehousing/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/cuponregist" element={<CuponRegist/>}/>
          <Route path="/cuponreport" element={<CuponReport/>} />
          <Route path="/pointreport" element={<PointReport/>}/>
          <Route path="/inspect" element={<Inspect/>} />
          <Route path="/member" element={<Member/>} />
          <Route path="/blacklist" element={<BlackList/>} />
          <Route path="/*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
