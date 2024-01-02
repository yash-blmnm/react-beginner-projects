import React, { memo } from "react";
import "./index.css";
import { DIGITMAP } from "./constant";

const EachDigit:React.FC<{ value:number }> = memo(({ value }) => {
  return (
    <div className="container">
      <div className={`box box1 ${DIGITMAP[value]?.box1}`}></div>
      <div className={`mid-box ${DIGITMAP[value]?.midBox}`}></div>
      <div className={`box box2 ${DIGITMAP[value]?.box2}`}></div>
    </div>
  );
});

export default EachDigit;
