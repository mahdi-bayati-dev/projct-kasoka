// import React from 'react';
// import './navStyle.css';
// import './tespansev-nav.css'

// function NavBar() {
//     return (
//         <nav className="nav_continuer">
//             <div>
//                 <a className='btn_nav' href="#">شروع</a>
//             </div>
//             <div className="maun_nav">
//                 <ul className='ul_menu_heder'>
//                     <li><a href="#">خانه</a></li>
//                     <li><a href="#">خدمات</a></li>
//                     <li><a href="#">درباره ما</a></li>
//                     <li><a href="#">تماس با ما</a></li>
//                     <li><a href="#">تیم</a></li>
//                     <li><a href="#">لیست کشویی</a></li>
//                     <li><a href="#">نمونه کار</a></li>
//                 </ul>
//             </div>
//             <div className="logo">
//                 <span>KASUKA</span>
//                 <img src="./img_heder/logo.png" alt="KASUKA Logo" />
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

import React, { useState } from 'react';
import './navStyle.css';
import './tespansev-nav.css'

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav_container">
            <div className="nav_content">
                <div className="logo_start">
                    <div className="logo">
                        <img src="./img_heder/logo.png" alt="KASUKA Logo" />
                        <span>KASUKA</span>
                    </div>
                    <a className='btn_nav' href="#">شروع</a>
                </div>
                <div className={`menu_toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`main_nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className='ul_menu_header'>
                        <li><a href="#">خانه</a></li>
                        <li><a href="#">خدمات</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">تیم</a></li>
                        <li><a href="#">لیست کشویی</a></li>
                        <li><a href="#">نمونه کار</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
