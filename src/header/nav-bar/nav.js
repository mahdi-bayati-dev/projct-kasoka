import React, { useState } from 'react';
import './navStyle.css';
import './tespansev-nav.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reputePassword, setReputePassword] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let userValue = {
            name,
            email,
            password,
            reputePassword,
            number
        };
        
        fetch('', {
            method: 'POST',
            body: JSON.stringify(userValue)
        })
        .then(res => {
            console.log(res);
            setShow(false); // بستن مودال بعد از ارسال موفق
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <nav className="nav_container">
                <div className="nav_content">
                    <div className="logo_start">
                        <div className="logo">
                            <img src="./img_heder/logo.png" alt="KASUKA Logo" />
                            <span>KASUKA</span>
                        </div>
                        <a onClick={handleShow} className='btn_nav' href="#">شروع</a>
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

            {/* مودال لاگین */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>ورود به سیستم</Modal.Title>
                </Modal.Header>
               
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>نام و نام خانوادگی</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                                    autoFocus
                                    onChange={event => setName(event.target.value)}
                                />
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>آدرس ایمیل</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="example@email.com"
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="رمز عبور را وارد کنید"
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>تکرار رمز عبور</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="رمز عبور را مجددا وارد کنید"
                                    onChange={event => setReputePassword(event.target.value)}
                                />
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Label>شماره موبایل</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="09xxxxxxxxx"
                                    onChange={event => setNumber(event.target.value)}
                                />
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="قوانین و مقررات را می‌پذیرم"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    ذخیره تغییرات
                </Button>


                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavBar;
