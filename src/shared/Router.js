import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Layout from "./Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
