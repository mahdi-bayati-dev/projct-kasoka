// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navStyle.css';
// import './responsive-nav.css';

// function NavBar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="nav_container">
//             <div className="nav_content">
//                 <div className="logo_start">
//                     <div className="logo">
//                         <img src="./img_heder/logo.png" alt="KASUKA Logo" />
//                         <span>KASUKA</span>
//                     </div>
//                     <Link className="btn_nav" to="/login">ثبت نام</Link>
//                     <button  className={`menu_toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//                 <ul className={`ul_menu_header ${isMenuOpen ? 'open' : ''}`}>
//                     <li><Link to="/" onClick={() => setIsMenuOpen(false)}>خانه</Link></li>
//                     <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>خدمات</Link></li>
//                     <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>درباره ما</Link></li>
//                     <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>تماس با ما</Link></li>
//                     <li><Link to="/team" onClick={() => setIsMenuOpen(false)}>تیم</Link></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;
import React, { useState } from 'react';
import './navStyle.css';
import './responsive-nav.css';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // تابعی برای اسکرول به بخش مشخصی
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <section id="home">
        <nav className="nav_container">
            <div className="nav_content">
                <div className="logo_start">
                    <div className="logo">
                        <img src="./img_heder/logo.png" alt="KASUKA Logo" />
                        <span>KASUKA</span>
                    </div>
                    <a className="btn_nav" href="/login">ثبت نام</a>
                    <button className={`menu_toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <ul className={`ul_menu_header ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#home" onClick={() => scrollToSection('home')}>خانه</a></li>
                    <li><a href="#services" onClick={() => scrollToSection('services')}>خدمات</a></li>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>درباره ما</a></li>
                    <li><a href="#contact" onClick={() => scrollToSection('contact')}>تماس با ما</a></li>
                    <li><a href="#team" onClick={() => scrollToSection('team')}>تیم</a></li>
                </ul>
            </div>
        </nav>
        </section>
    );
}

export default NavBar;
