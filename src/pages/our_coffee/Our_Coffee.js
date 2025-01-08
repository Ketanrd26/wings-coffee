import React from "react";
import "./Our_Coffee.scss";
import community from "../../asstes/Wings-6-scaled.webp";
import beans from "../../asstes/beans_2.png";


import coffee_mug from "../../asstes/coffee_mug.png"
const Our_Coffee = () => {

  const data =[
    {
      count:"84+",
      content:"Brazil – Natural – Cupping Score"
    },
    {
      count:"86+",
      content:"Rwanda – Fully Washed – Cupping Score"
    },
    {
      count:"90+",
      content:"Panama – Natural, Maceration and Fully Washed – Cupping score"
    }
   
  ]
  return (
    <>
      <div class="our_coffee_parent parent">
        <div class="our_coffee_cont cont">
          <h2>Customization</h2>
          <img src={community} alt="" />
          <div class="content">
            <p>
              To offer complexity and uniqueness, we create customized blends
              for our customers with our three main origins.
            </p>
            <p>
              The ratio of the blend will become the signature of that specific
              customer and will not be repeated for any other customer – while
              using Wings as the supplier.
            </p>
          </div>

          <p className="para">
            All our coffees are Grade 1 Arabica. This is the highest grade of
            beans, and to be classified as Grade 1 Coffee, the beans need to
            have no primary defects and 0-3 full defects, with a maximum of 5%
            above and below the specified screen size.
          </p>
        </div>
      </div>

      <div class="our_coofee_second_parent parent">
        <div class="our_coffee_seconf_cont cont">
          <div class="left">
            <h3>At WCR we source our coffee directly from Origin.</h3>
            <p>
              Our direct sourcing principal allows us to work closer with the
              producers. This has the following benefits for our clients:
            </p>
            <ul>
              <li>
              Fixed prices for at least 6 months due to direct relationship with farmers
              </li>
              <li>
              Consistent quality guaranteed due to origin visit’s before shipment dispatch to Qatar
              </li>
            </ul>
          </div>

         
        </div>

        <div class="beans_img">
          <img src={beans} alt=""/>
        </div>
      </div>

      <div class="counter_parent parent">
        <div class="counters_cont cont">
          <h2>
          We constantly source coffee from the following main origins:
          </h2>
          <div class="counters">
            {
              data.map((item,index)=>(
                <div class="count" key={index} >
                <div class="icon">
                <img src={coffee_mug} alt=""/>
                <h3 className="counter_num" >
                  {item.count}
                </h3>
                </div>
                <div class="title">
                  <p>
                 {item.content}
                  </p>
                </div>
              </div>
              ))
            }
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Our_Coffee;
