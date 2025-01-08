import React from 'react'
import "./Error.scss"

import image1 from "../../asstes/benas2.png"
import image2 from "../../asstes/err.png"

const Error = () => {
  return (
    <>
      <div class="error_page_parent bg-img-cover parent">
        <div class="error_page_cont cont">
   <h2>
    404
   </h2>
   <p>
    Page not found
   </p>
        </div>

        <div class="img1">
            <img src={image1} alt=""/>
        </div>
        <div class="img2">
        <img src={image2} alt=""/>
        </div>
      </div>
    </>
  )
}

export default Error
