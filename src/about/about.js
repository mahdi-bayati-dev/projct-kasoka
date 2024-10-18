import React, { useEffect, useState } from 'react';
import './about.css';

function About() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className='about_container'>
            <div className={`about_text ${animate ? 'animate' : ''}`}>
                <h2>شرکت ما</h2>
                <p>
                    شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید.
                </p>
                <p>
                    نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.
                </p>
                <h3>خدمات ما</h3>
                <ul>
                    <li>۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی</li>
                    <li>تمرکز بر دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی</li>
                    <li>یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار تا ایجاد وفاداری در مشتریان</li>
                </ul>
            </div>
            <div className={`img_about ${animate ? 'animate' : ''}`}>
                <img src="./img_about/about.jpg" alt="تصویر شرکت نوآد" />
            </div>
        </div>
    )
}

export default About;
