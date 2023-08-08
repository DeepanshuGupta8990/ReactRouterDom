import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import  About  from "./components/About";
import { Navbar } from "./components/Navbar";
import { Order } from "./components/OrderSumarry";
import { NoMatchCom } from "./components/NoMatchCom";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { Userdetails } from "./Userdetails";
import { Admin } from "./components/Admin";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        {/* <Route path="about" element={<About />} ></Route> */}
        <Route path="about" element={<React.Suspense fallback="..Loading">
<LazyAbout />
</React.Suspense>} ></Route>
        <Route path="/orderSummary" element={<Order />}></Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<Userdetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="*" element={<NoMatchCom />}></Route>
      </Routes>
    </>
  );
}

export default App;