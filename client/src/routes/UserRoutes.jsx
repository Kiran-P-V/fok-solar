import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/UserPages/AuthPages/Login";
import { Signup } from "../pages/UserPages/AuthPages/Signup";
import { EstimatePage } from "../pages/UserPages/EstimatePage";
import { HomePage } from "../pages/UserPages/HomePage";
import { NewHome } from "../pages/UserPages/NewHome";
import { PreExistingHome } from "../pages/UserPages/PreExistingHome";
import { SuccessEmailPage } from "../pages/UserPages/SuccessEmailPage";

export const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/newhome" element={<NewHome />} />
        <Route path="/preexistinghome" element={<PreExistingHome />} />
        <Route path="/estimate" element={<EstimatePage />} />
        <Route path="/email" element={<SuccessEmailPage />} />
      </Routes>
    </>
  );
};
