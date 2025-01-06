import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../asstes/wings_logo.webp";
import { IoSearchOutline } from "react-icons/io5";


import { IoMdCart } from "react-icons/io";
const Header = () => {
  const navs = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "Our Coffee",
      link_path: "/",
    },
    {
      link_name: "Contact us",
      link_path: "/",
    },
    {
      link_name: "Shop",
      link_path: "/",
    },
  ];


const [searchInput, setSearchInput]=useState(false)

  return (
    <>
      <div class="header_parent">
        <div class="header_cont">
          <div class="right_navs">
            <div class="navs">
              {navs.map((item, index) => (
                <Link key={index} to={item.link_path}>
                  {item.link_name}
                </Link>
              ))}
            </div>
          </div>
          <div class="middle_logo">
            <img src={logo} alt=""/>
          </div>
          <div class={searchInput ? "left_section active" : "left_section"}>
            <Link class="cart">
             <span>
              Cart
             </span>
             <span>
             <IoMdCart />
             </span>
            </Link>

           <div class="search_bar">
           <input type="text" placeholder="search" className={searchInput ? "input active" : "input"} />
            <div class="search_icon"  onClick={()=>setSearchInput(!searchInput)} >
              <span>
              <IoSearchOutline />
              </span>
            </div>
           </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
