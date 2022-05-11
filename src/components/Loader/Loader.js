import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Loader as LoaderWrapper } from "./LoaderStyle";

const Loader = () => {
  return (
    <LoaderWrapper>
      <TailSpin type="TailSpin" color="red" />
    </LoaderWrapper>
  );
};

export default Loader;
