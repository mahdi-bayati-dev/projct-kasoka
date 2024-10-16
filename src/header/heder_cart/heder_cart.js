import React from "react";
import "./heder_style_cart.css"

function CartHeader({ svg, text, delay}) {
    const style = {
        animationDelay: `${delay}s`
    };

    return (
        <div className="cart_container" style={style}>
            <div className="item_cart">
                <div className="svg">
                    {svg}
                </div>
                <a href="#">{text}</a>
                
            </div>
            
        </div>
    );
}


export default CartHeader
