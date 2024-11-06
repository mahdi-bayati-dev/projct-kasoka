import React from "react";
import "./heder_style_cart.css"

function CartHeader({ svg, text, delay, onClick}) {
    const style = {
        animationDelay: `${delay}s`
    };

    return (
        <div className="cart_container" style={style} onClick={onClick}>
            <div className="item_cart">
                <div className="svg">
                    {svg}
                </div>
                <a href="#" className="cart_link">{text}</a>
            </div>
        </div>
    );
}



export default CartHeader
