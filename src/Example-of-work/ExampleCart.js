import React from "react";
import './ExampleStyle.css'

function ProductCart({ name, price, duration, users, features }) {
    return (
        <div className="plan">
            <div className="inner">
                <span className="pricing">
                    <span className="amount">{price.toLocaleString()}</span>
                    <small>تومان / {duration} روز</small>
                </span>
                <p className="title">{name}</p>
                <p className="info">این پکیج برای {users} کاربر طراحی شده است.</p>
                <ul className="features">
                    {features.map((feature, index) => (
                        <li key={index}>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="action">
                    <a className="button" href="#">
                        انتخاب پکیج
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
