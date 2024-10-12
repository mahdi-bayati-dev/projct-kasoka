import React from "react";

function FeaturesItem({ svg, textH4, textP }) {
    return (
        <div className="features-text">
            <div className="text">
                <div>
                    {svg}
                </div>
                <div>
                    <h4>{textH4}</h4>
                    <p>{textP}</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesItem;
