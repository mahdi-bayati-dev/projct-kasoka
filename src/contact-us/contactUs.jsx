import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './cuntactUs.css';

const ContactUs = () => {
    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const defaultCenter = {
        lat: 30.2839,
        lng: 57.0834
    };

    // استایل مشترک برای همه آیکون‌ها
    const iconStyle = {
        fontSize: "20px"  // می‌توانید این مقدار را تغییر دهید
    };

    return (
        <div className="contactUs_container">
            <div className="contactUs_title">
                <p>تماس با ما</p>
                <h3>با ما تماس بگیرید</h3>
            </div>

            <div className="contactUs_map">
                <LoadScript googleMapsApiKey="AIzaSyDOn58_V4aZisW3RIeRJ-Lb148YU_ttFiQ">
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    >
                        <Marker position={defaultCenter} />
                    </GoogleMap>
                </LoadScript>
            </div>

            <div className="contactUs_text_address">
                <div className="contactUs_address">
                    <div className="address_item">
                        <LocationOnIcon sx={iconStyle} className="address_icon" />
                        <div className="address_info">
                            <span>مکان:</span>
                            <p>کرمان بلوار سرباز</p>
                        </div>
                    </div>
                    <div className="address_item">
                        <EmailIcon sx={iconStyle} className="address_icon" />
                        <div className="address_info">
                            <span>ایمیل:</span>
                            <p>mbyaty01@gmail.com</p>
                        </div>
                    </div>
                    <div className="address_item">
                        <PhoneIcon sx={iconStyle} className="address_icon" />
                        <div className="address_info">
                            <span>تماس:</span>
                            <p>09014367323</p>
                        </div>
                    </div>
                </div>

                <div className="contactUs_text">
                    <div className="name_email">
                        <input type="text" placeholder="نام" />
                        <input type="email" placeholder="ایمیل" />
                    </div>
                    <input type="text" placeholder="موضوع" />
                    <textarea placeholder="پیام شما"></textarea>
                    <button className="contactUs_btn" type="submit">ارسال پیام</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
