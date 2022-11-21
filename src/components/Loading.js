import React from "react";
import { SunspotLoader } from "react-awesome-loaders";

const Loading = () => {
  return (
    <SunspotLoader
      gradientColors={["#0d6efd"]}
      shadowColor={"#FFFFFF"}
      size="18em"
    />
  );
};

export default Loading;
