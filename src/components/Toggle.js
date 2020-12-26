import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div onClick={() => setToggle(!toggle)}>{toggle ? children : "---"}</div>
  );
};

export default Toggle;
