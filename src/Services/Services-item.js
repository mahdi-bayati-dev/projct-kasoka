import React from "react";
import './Services-item.css'

function ServicesItem({svg, title, text}) {
    return(
        <div className="container_box_serves">
            <div className="serves_svg">
                {svg}
            </div>
            <div className="title_serves">
                <h5>{title}</h5>
            </div>
            <div className="text_p_serves">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ServicesItem
