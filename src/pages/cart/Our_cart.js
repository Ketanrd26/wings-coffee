import React, { useState } from "react";
import "./ourcart.scss";
import img1 from "../../asstes/Wings-10-scaled.webp";
import { IoClose } from "react-icons/io5";

const Our_cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: img1,
      product: "wings coffee 1, wieng coffee 2",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 2,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 3,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 4,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 5,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 6,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 7,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
    {
      id: 8,
      image: img1,
      product: "wings coffee 1",
      price: "$120",
      quantity: 2,
      total: "$240",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = cartItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="ourcart-parent parent bg-img-cover">
      <div className="ourcart-cont cont">
        <div className="cart-left">
          <div className="top-cart">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr className="table_data" key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt="Product"
                        className="product-image"
                      />

                      {item.product}
                    </td>

                    <td>{item.price}</td>
                    <td>
                      <div className="counter">
                        <button
                          className="counter-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity === 1}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="counter-value">{item.quantity}</span>
                        <button
                          className="counter-btn"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{item.total}</td>
                    <td  >
                      <button className="remove-btn" aria-label="Remove item">
                        <IoClose />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bottom-cart">
            {/* Pagination */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`page-btn ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="cart-mobile">
          <div className="cart-mobile-left">
            <img src={img1} />
          </div>

          <div className="cart-mobile-right">
            <div className="mobile-title">Lorem, ipsum.</div>
            <p className="product-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="drop-down-box">
              <div className="first-drop">
                <label htmlFor="plan" className="weight">
                  Weight:
                </label>
                <select id="plan">
                  <option value="tfgram">250g</option>
                  <option value="fhundredgram">500g</option>
                  <option value="onekilo">1kg</option>
                </select>
              </div>
              <div className="second-drop">
                <label htmlFor="plan" className="weight">
                  Qty:
                </label>
                <select id="plan">
                  <option value="">1</option>
                  <option value="product2">2</option>
                  <option value="product3">3</option>
                  <option value="porduct4">4</option>
                  <option value="product5">5</option>
                </select>
              </div>
            </div>
            <div className="line"></div>
            <div className="product-price">
              $120
              <s className="close-price">$180</s>
            </div>
            <div className="product-price-save">You save $60</div>
          </div>
          <div className="close">
            <IoClose />
          </div>
        </div>

        {/* Right side order cart */}
        <div className="cart-right">
          <div className="cart-box">
            <h3>Order Summary</h3>
            <div className="btn-box">
              <input type="text" placeholder="Your Voucher" />
              <button type="submit" className="btn-new">
                Apply
              </button>
            </div>
            <div className="main-price-box">
              <div className="price-box">
                <div className="price-title">Sub Total</div>
                <div className="main-price">
                  {" "}
                  <strong>$120</strong>
                </div>
              </div>
              <div className="price-box">
                <div className="price-title">Discount (7%)</div>
                <div className="main-price">
                  <strong>$120</strong>
                </div>
              </div>
              <div className="price-box">
                <div className="price-title">Delivery Charges</div>
                <div className="main-price">
                  <strong>$120</strong>
                </div>
              </div>
              <div className="line"></div>
              <div className="price-box-total">
                <div className="price-title">Total</div>
                <div className="main-price">$120</div>
              </div>
              <button className="buy-product">Buy This Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_cart;
