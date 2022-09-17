import React, { useState, useEffect } from "react";

const Effect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <h1>Window width: {windowWidth}px</h1>;
};
export default Effect;
