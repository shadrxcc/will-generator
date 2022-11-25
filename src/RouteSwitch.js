import React from "react";
import { Routes, Route } from "react-router-dom";
import Createwill from "./pages/create-will";



const Routeswitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Createwill/>} />
      </Routes>
    </>
  );
};

export default Routeswitch;
