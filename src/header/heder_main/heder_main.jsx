
import React from 'react';
import './heder_main_style.css';
import CartHeder from '../heder_cart/heder_cart';
import { Link, useNavigate } from 'react-router-dom';
import Chart from '../../pages/Chart/Chart';


function HeaderMain() {
  let navigate = useNavigate()
  const cartItems = [
    {
      text: "اطلاعات محصول",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      delay: 0.8
    },
    {
      text: "عملکرد های پایانی",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
        </svg>
      ),
      delay: 1
    },
    {
      text: "نمونه کار ها",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      delay: 1.2
    },
    
    {
      text: "نمودار کیفی",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
      delay: 1.4,  // Added comma here
      onClick: () => navigate('/charts')
    }
    
    
  ];



  return (
    <div className="header-main-container">
      <div className="bgm">
        <img src={process.env.PUBLIC_URL + "/img_heder/img_heder.jpeg"} alt="Background" className="img-header-main" />
        <div className="overlay"></div> {/* انتقال overlay به داخل bgm */}
        <div className="text_heder_main">
          <h1>راه حل های قدرتمند دیجیتال با</h1>
          <p>KASUKA</p>
          <p>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
          <div className='cart'>
            {cartItems.map((item, index) => (
              <CartHeder key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default HeaderMain;
