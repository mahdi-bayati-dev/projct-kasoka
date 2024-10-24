import React, { useState } from "react";
import financialPackages from "./ExampleData";
import ProductCart from "./ExampleCart";
import './Example.css'

function ExampleWork() {
  const [filteredPackages, setFilteredPackages] = useState(financialPackages);
  const [activeBtn, setactiveBtn] = useState('all');

  const btnAll = () => {
    setFilteredPackages(financialPackages);
    setactiveBtn('all')
  };

  const btnProduct = () => {
    const filtered = financialPackages.filter(pkg => {
      return pkg.price < 1_500_000;
    });
    setFilteredPackages(filtered);
    setactiveBtn('product')
  };

  const btndiscount = () => {
    const filtered = financialPackages.filter(pkg => {
        return pkg.price < 3_000_000;
      });
      setFilteredPackages(filtered);
      setactiveBtn('discount')
  };

  const btnFree = () => {
    const filtered = financialPackages.filter(pkg => {
        return pkg.price < 5_000_000;
      });
      setFilteredPackages(filtered);
      setactiveBtn('free')
  };

  return (
    <div className="containerExample">
      <p>نمونه کار ها</p>
      <h2>پکیج  های ما را بررسی کنید</h2>
      <div className="btnFilter">
        <button className={activeBtn === 'all' ? 'active':''} onClick={btnAll}>همه</button>
        <button className={activeBtn === 'product' ? 'active':''} onClick={btnProduct}>محصولات</button>
        <button className={activeBtn === 'discount' ? 'active':''} onClick={btndiscount}>تخفیف</button>
        <button className={activeBtn === 'free' ? 'active':''} onClick={btnFree}>فری</button>
      </div>

      <div className="product">
        {filteredPackages.map((pkg, index) => (
          <ProductCart
            key={index}
            name={pkg.name}
            price={pkg.price}
            duration={pkg.duration}
            users={pkg.users}
            features={pkg.features}
          />
        ))}
      </div>
    </div>
  );
}

export default ExampleWork;
