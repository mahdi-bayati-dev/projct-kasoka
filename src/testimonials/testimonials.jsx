import React, { useState, useEffect } from "react";
import './testimonials.css'

function Testimonials() {

    const testimonials = [
        {
            name: "Warren Buffett",
            position: "CEO of Berkshire Hathaway",
            quote: "The best investment you can make is in yourself.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/800px-Warren_Buffett_KU_Visit.jpg"
        },
        {
            name: "Elon Musk",
            position: "CEO of Tesla & SpaceX",
            quote: "When something is important enough, you do it even if the odds are not in your favor.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
            name: "Ray Dalio",
            position: "Founder of Bridgewater Associates",
            quote: "Pain plus reflection equals progress.",
            image: "https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/0x0.jpg"
        },
        {
            name: "Robert Kiyosaki",
            position: "Author of Rich Dad Poor Dad",
            quote: "It's not how much money you make, but how much money you keep.",
            image: "https://pbs.twimg.com/profile_images/1479185541218783232/3zdwZ1Xr_400x400.jpg"
        }
    ];
    
    

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return ( 
        <div className="testimonials_container">
            <div className="Testimonials_section">
                <div className="testimonials_person_item">
                    <img className="img_person" src={testimonials[current].image} alt={testimonials[current].name} />
                    <h3>{testimonials[current].name}</h3>
                    <span>{testimonials[current].position}</span>
                    <p>{testimonials[current].quote}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;