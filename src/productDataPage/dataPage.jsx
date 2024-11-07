// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import financialPackages from "../Example-of-work/ExampleData";
import "./dataPage.css";

function ProductDetailPage() {
  const { id } = useParams();
  const product = financialPackages.find((pkg) => pkg.id === parseInt(id));

  if (!product) return <p>محصول مورد نظر یافت نشد!</p>;

  return (
    <div className="productPage_container">
      <div className="productPage_text">
        <h1>{product.name}</h1>
        <p className="description_product_page">{product.description}</p>

        <h3>ویژگی‌ها:</h3>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="img_productPage">
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", height: "auto" }}
        />
        <div className="text_left">
          <span>قیمت</span>
          <p className="price_product_page">
            تومان {product.price.toLocaleString()}{" "}
          </p>
        </div>
        <div className="text_left">
          <span>مدت زمان</span>
          <p className="time_product_page">روز {product.duration} </p>
        </div>
        <div className="text_left">
          <span>تعداد کاربران</span>
          <p className="user_product_page"> {product.users}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
