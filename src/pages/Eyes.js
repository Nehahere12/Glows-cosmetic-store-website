import React, { useState } from "react";
import { eyedatas } from "../components/images/images";
import { eyesdata } from "../components/images/images";
import "../App.css";
import { NavLink } from "react-router-dom";

const Eyes = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredEyedatas =
    selectedCategories.length === 0
      ? eyedatas
      : eyedatas.filter((item) => selectedCategories.includes(item.category));

  return (
    <>
      <div className="pics"></div>
      <div className="h22">
        <div className="sidess">
          {eyesdata.map((data, index) => (
            <div key={index} className="reff">
              <input
                type="checkbox"
                checked={selectedCategories.includes(data)}
                onChange={() => handleCheckboxChange(data)}
              />
              <p className="index">{data}</p>
            </div>
          ))}
        </div>
        <div className="sides2">
          {filteredEyedatas.map((datash, index) => (
            <div className="nss" key={index}>
              <img className="news1" src={datash.img} alt={datash.name} />
              <h1>{datash.name}</h1>
              <div className="news2">
                <p>{datash.price}</p>
                <p>{datash.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Eyes;
