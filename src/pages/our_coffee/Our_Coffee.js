import React from "react";
import "./Our_Coffee.scss";
import community from "../../asstes/Wings-6-scaled.webp";

const Our_Coffee = () => {
  return (
    <>
      <div class="our_coffee_parent parent">
        <div class="our_coffee_cont cont">
          <h2>Customization</h2>
          <img src={community} alt="" />
        </div>
      </div>
    </>
  );
};

export default Our_Coffee;
