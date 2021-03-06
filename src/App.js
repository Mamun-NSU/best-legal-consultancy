import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import NotFound from "./components/Shared/NotFound/NotFound";
import Service from "./components/Service/Service";
import useServices from "./hooks/useServices";
import { Link, useParams } from "react-router-dom";

function App() {
  const [services, setServices] = useServices();

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
