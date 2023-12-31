import React from "react";
import "./index.css";

const DIGITMAP = [
  {
    box1: "box1-top-border box1-right-border box1-left-border",
    box2: "box2-bottom-border box2-right-border box2-left-border",
  },
  {
    box1: "box1-right-border",
    box2: "box2-right-border",
  },
  {
    box1: "box1-top-border box1-right-border box1-bottom-border",
    box2: "box2-bottom-border box2-top-border box2-left-border",
    midBox: "mid-box-border",
  },
  {
    box1: "box1-top-border box1-right-border box1-bottom-border",
    box2: "box2-bottom-border box2-right-border box2-top-border",
    midBox: "mid-box-border",
  },
  {
    box1: "box1-bottom-border box1-right-border box1-left-border",
    box2: "box2-top-border box2-right-border",
    midBox: "mid-box-border",
  },
  {
    box1: "box1-top-border box1-bottom-border box1-left-border",
    box2: "box2-top-border box2-right-border box2-bottom-border",
    midBox: "mid-box-border",
  },
  {
    box1: "box1-top-border box1-bottom-border box1-left-border",
    box2: "box2-bottom-border box2-right-border box2-left-border box2-top-border",
    midBox: "mid-box-border",
  },
  {
    box1: "box1-top-border box1-right-border",
    box2: "box2-right-border",
  },
  {
    box1: "box1-top-border box1-right-border box1-left-border box1-bottom-border",
    box2: "box2-top-border box2-right-border box2-left-border box2-bottom-border",
    midBox: "mid-box-border",
  },
  {
    box1: "box1-top-border box1-right-border box1-left-border box1-bottom-border",
    box2: "box2-top-border box2-right-border box2-bottom-border",
    midBox: "mid-box-border",
  },
];
const EachDigit:React.FC<{ value:number }> = ({ value }) => {
  console.log(value, DIGITMAP[value]);
  return (
    <div className="container">
      <div className={`box box1 ${DIGITMAP[value]?.box1}`}></div>
      <div className={`mid-box ${DIGITMAP[value]?.midBox}`}></div>
      <div className={`box box2 ${DIGITMAP[value]?.box2}`}></div>
    </div>
  );
};

export default EachDigit;
