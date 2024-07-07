import React, { useState } from "react";
import { hairdata } from "../components/images/images";
import { hairdatas } from "../components/images/images";
import { NavLink } from "react-router-dom";
import { Element } from 'react-scroll';
import "../App.css";

const Hair = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredHairdatas =
    selectedCategories.length === 0
      ? hairdatas
      : hairdatas.filter((item) => selectedCategories.includes(item.category));

  return (
    <>
      <div className="pic"></div>
      <div className="h22">
        <div className="sidesrs">
          {hairdata.map((data, index) => (
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
          {filteredHairdatas.map((datash, index) => (
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

export default Hair;
