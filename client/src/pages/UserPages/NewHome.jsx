import React from "react";
import { AddAC } from "../../components/UserComponents/AddAC";
import { SquareFeetBox } from "../../components/UserComponents/SquareFeetBox";
import { Header } from "../../layouts/UserLayouts/Header";

export const NewHome = () => {
  return (
    <>
      <Header />
      <AddAC />
      <SquareFeetBox />
    </>
  );
};
