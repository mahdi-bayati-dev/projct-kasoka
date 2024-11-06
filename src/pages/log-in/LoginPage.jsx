import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    reputePassword: "",
    number: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.name.length < 3) {
      newErrors.name = "نام باید حداقل 3 کاراکتر باشد";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست";
    }

    if (formData.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل 6 کاراکتر باشد";
    }

    if (formData.password !== formData.reputePassword) {
      newErrors.reputePassword = "رمز عبور مطابقت ندارد";
    }

    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(formData.number)) {
      newErrors.number = "شماره موبایل معتبر نیست";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/dashboard');
      } else {
        setErrors({ submit: data.message || 'خطا در ورود به سیستم' });
      }
    } catch (error) {
      setErrors({ submit: 'خطا در ارتباط با سرور' });
    }
  };

  return (
    <>
      <div className="btn_login">
        <Link to="/"><button className="btn_back_home_login">خانه</button></Link>
      </div>
      <div className="login-page">
        <div className="login_page_container">
          <div className="login_form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-1">
                <Form.Label>نام و نام خانوادگی</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>آدرس ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="password-container">
                <Form.Group className="mb-3">
                  <Form.Label>رمز عبور</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>تکرار رمز عبور</Form.Label>
                  <Form.Control
                    type="password"
                    name="reputePassword"
                    value={formData.reputePassword}
                    onChange={handleChange}
                    isInvalid={!!errors.reputePassword}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.reputePassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>شماره موبایل</Form.Label>
                <Form.Control
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  isInvalid={!!errors.number}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </Form.Group>

              {errors.submit && (
                <div className="alert alert-danger">{errors.submit}</div>
              )}

              <Button variant="primary" type="submit">
                ثبت نام
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
