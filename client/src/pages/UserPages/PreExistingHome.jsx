import React from "react";
import { PreExistingConsumerCheck } from "../../components/UserComponents/PreExistingConsumerCheck";
import { Header } from "../../layouts/UserLayouts/Header";

export const PreExistingHome = () => {
  return (
    <>
      <Header />
      <PreExistingConsumerCheck />
    </>
  );
};
