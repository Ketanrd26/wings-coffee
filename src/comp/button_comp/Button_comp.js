import React, { useState } from "react";
import { GiTeapot } from "react-icons/gi";
import { RiCupFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Button_comp = ({btn_text,btn_path,borderColor,color}) => {
    const [mouseLeave,setMouseLeave] = useState(null)
  return (
    <>
      <Link  style={{border:`1px solid ${borderColor}`}} class={mouseLeave ? "tea_btn enterBtn" : "tea_btn exitBtn"} to={btn_path} onMouseEnter={()=>setMouseLeave(true)}  onMouseLeave={()=>setMouseLeave(false)} >
        <div className="icons">
          <span className="animatespan"  style={{color:`${color}`}}  >
            <GiTeapot  />
          </span>
          <span  style={{color:`${color}`}}  >
            <RiCupFill />
          </span>
        </div>
        <span style={{color:`${color}`}}  >{btn_text}</span>
      </Link>
    </>
  );
};

export default Button_comp;
