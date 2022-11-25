import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Will";
import UserForm from "./pages/create-will";
import Homepage from "./pages/homepage";



const Routeswitch = () => {
  return (
    <>
      <Routes>
        <Route path="/will-form" element={<UserForm />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/will" element={<Details />} />
      </Routes>
    </>
  );
};

export default Routeswitch;
