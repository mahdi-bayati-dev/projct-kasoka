import React, { useState, useEffect } from "react";
import './Services.css'
import ServicesItem from "./Services-item";

const servicesData = [
  { 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 20h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H7v-2h2v2zm-4 0H3v-2h2v2zm16-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2zm-4 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2zm-8 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2zM9 20H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V6h2v2zm0-4H7V2h2v2zM5 20H3v-2h2v2zm0-4H3v-2h2v2zm0-4H3v-2h2v2zm0-4H3V6h2v2zm0-4H3V2h2v2z"/></svg>,
    title: "مدیریت سرمایه",
    text: "ما به شما در مدیریت و رشد سرمایه‌تان کمک می‌کنیم."
  },

  { 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>,
    title: "خدمات بانکی",
    text: "ارائه انواع خدمات بانکی از جمله وام، سپرده و کارت اعتباری."
  },
  { 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"/></svg>,
    title: "مشاوره مالی",
    text: "ارائه مشاوره تخصصی برای بهبود وضعیت مالی شما."
  },
  { 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z"/></svg>,
    title: "بیمه",
    text: "ارائه انواع خدمات بیمه‌ای برای حفاظت از دارایی‌های شما."
  },
  { 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 20h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H7v-2h2v2zm-4 0H3v-2h2v2zm16-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2zm-4 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2zm-8 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2zM9 20H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V6h2v2zm0-4H7V2h2v2zM5 20H3v-2h2v2zm0-4H3v-2h2v2zm0-4H3v-2h2v2zm0-4H3V6h2v2zm0-4H3V2h2v2z"/></svg>,
    title: "مدیریت سرمایه",
    text: "ما به شما در مدیریت و رشد سرمایه‌تان کمک می‌کنیم."
  },
  { 
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"/></svg>,
    title: "سرمایه‌گذاری",
    text: "کمک به شما برای یافتن بهترین فرصت‌های سرمایه‌گذاری."
  }
];

function Services() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return(
      <section id="services">
        <div className={`services-wrapper ${animate ? 'animate' : ''}`}>
            <div className="container_serves">
                <h4 className="text_serves_1">خدمات</h4>
                <h3 className="text_serves_2">خدمات ما را بررسی کنید</h3>
            </div>
            <div className="box_container">
                {servicesData.map((service, index) => (
                    <ServicesItem 
                        key={index}
                        svg={service.svg}
                        title={service.title}
                        text={service.text}
                    />
                ))}
            </div>
        </div>
        </section>
    )
}

export default Services
