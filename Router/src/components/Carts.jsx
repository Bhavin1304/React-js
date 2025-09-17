import React, { useEffect, useState } from 'react'
import "./Carts.css";

export default function Carts({ cartList, setCartList }) {
  const [total, setTotal] = useState(0);

  const totalPrice = () => {
    let sum = 0;
    cartList.forEach(cart => {
      sum += cart.price;
    });
    setTotal(sum);
  };

  useEffect(() => {
    totalPrice();
  }, [cartList]);

  const removeProductFromCart = (id) => {
    setCartList(prev => prev.filter((cart) => cart.id !== id));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Cart Page / Total - Rs. {total}
      </h2>

      <div className="row g-3">
        {cartList.map((cart) => (
          <div key={cart.id} className=" col-md-6 col-lg-3  ">
            <div className="card h-100 shadow-sm">
              <img src={cart.image} alt={cart.title} className="card-img-top p-3"style={{ height: "100px", objectFit: "contain" }}/>
              <div className="card-body text-center">
                <h5 className="card-title">{cart.title}</h5>
                   Rs.{cart.price}
                <p className="card-text fw-bold text-success">
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProductFromCart(cart.id)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
