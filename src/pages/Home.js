import React, { useState, useEffect } from "react";
import { images } from "../components/images/images";
import "./Home.css";
import { f } from "../components/images/images";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";

import { makeup } from "../components/images/images";
import { reviews } from "../components/images/images";

const Home = () => {
  //

  const [startsindex, setStartsindex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Handle screen resize to show different number of items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle previous item click
  const previtem = () => {
    setStartsindex((prevIndex) => {
      const newIndex = prevIndex - itemsToShow;
      return newIndex < 0 ? makeup.length + newIndex : newIndex;
    });
  };

  // Function to handle next item click
  const nextitem = () => {
    setStartsindex((prevIndex) => (prevIndex + itemsToShow) % makeup.length);
  };

  // Ensure the sliced items wrap around
  const displayedItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    displayedItems.push(makeup[(startsindex + i) % makeup.length]);
  }
  //
  const [currentindex, setCurrentindex] = useState(0);
  const [startindex, setStartindex] = useState(0);
  const [startpoint, setStartpoint] = useState(0);
  const prevreview = () => {
    if (startpoint > 0) {
      setStartpoint(startpoint - 1);
    }
  };
  const nextreview = () => {
    if (startindex + 1 < makeup.length) {
      setStartpoint(startpoint + 1);
    }
  };

  const prevfunction = () => {
    setCurrentindex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextfunction = () => {
    setCurrentindex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="imagecarousal">
        <i className="fa-solid fa-backward" onClick={prevfunction}></i>
        <img src={images[currentindex]} alt={`Carousel ${currentindex + 1}`} />
        <i className="fa-solid fa-forward" onClick={nextfunction}></i>
      </div>
      {/* second  */}

      <div className="secondone">
        {f.map((image, index) => (
          <img key={index} src={image} alt={`ScrollableImage ${index + 1}`} />
        ))}
      </div>

      <Element name="hees" className="hees">
        <div className="aboutsup">
          <h2>About Glows</h2>
          <hr className="her" />
        </div>
        <div className="aboutsdown">
          <p>
            <br /> <br />
            Welcome to Glows Cosmetics, your ultimate destination for all things
            beauty and skincare. At Glows, we believe that beauty is more than
            just skin deep; it's about confidence, self-expression, and feeling
            your best every single day. Our mission is to empower individuals to
            embrace their unique beauty by offering a wide range of high-quality
            cosmetics and skincare products that cater to every skin type, tone,
            and preference.
            <br /> <br />
            Our Story Glows Cosmetics was founded with a passion for beauty and
            a commitment to quality. We started as a small boutique store,
            driven by the desire to provide exceptional products and
            personalized customer service. Over the years, we have grown into a
            beloved brand, trusted by thousands of beauty enthusiasts who share
            our vision of inclusivity and innovation in the beauty industry.
            <br /> <br />
            Our Products At Glows, we offer an extensive selection of cosmetics,
            including foundations, lipsticks, eyeshadows, mascaras, and more.
            Our makeup collection is curated to help you create any look you
            desire, whether it's a natural day-time glow or a bold evening
            statement. We also pride ourselves on our range of skincare
            products, from cleansers and toners to serums and moisturizers,
            designed to nourish and protect your skin. Our products are
            formulated with the finest ingredients, ensuring that they are not
            only effective but also safe for all skin types. We are committed to
            cruelty-free practices and offer a variety of vegan options, so you
            can feel good about the products you're using.
            <br /> <br />
            Our Commitment to Sustainability At Glows, we understand the
            importance of sustainability in today's world. We are dedicated to
            reducing our environmental footprint by implementing eco-friendly
            practices across our operations. From recyclable packaging to
            sustainable sourcing of ingredients, we strive to make a positive
            impact on the planet while delivering the best products to our
            customers.
            <br /> <br />
            Customer Experience What sets Glows Cosmetics apart is our
            dedication to exceptional customer service. Our knowledgeable and
            friendly staff are always ready to assist you, whether you're
            looking for the perfect foundation match or need advice on the best
            skincare routine for your needs. We offer personalized consultations
            and makeup tutorials to help you make the most of our products. In
            addition to our in-store experience, we provide a seamless online
            shopping experience. Our website is user-friendly, with detailed
            product descriptions, customer reviews, and helpful tips to guide
            you in making the best choices for your beauty needs. We offer fast
            shipping and hassle-free returns to ensure your satisfaction with
            every purchase.
            <br /> <br />
            Community and Inclusivity At Glows, we celebrate diversity and
            believe that beauty comes in all shapes, sizes, and colors. Our
            products are designed to be inclusive, with a wide range of shades
            and formulations to suit every individual. We are proud to support
            various community initiatives and partner with organizations that
            promote self-esteem and empowerment.
            <br /> <br />
            Visit Us We invite you to visit Glows Cosmetics and discover the
            difference that quality, passion, and care can make in your beauty
            routine. Whether you shop with us in-store or online, we are
            committed to providing you with the best products and a delightful
            shopping experience. Thank you for choosing Glows Cosmetics, where
            beauty shines from within.
          </p>
        </div>
      </Element>

      {/* third  */}
      <div className="third">
        <h2>Top picks</h2>
        <hr className="his" />

        <div className="scrollhere">
          <i className="fa-solid fa-backward" onClick={previtem}></i>

          {displayedItems.map((cosmo, index) => (
            <div key={index} className="makeup-item">
              <img src={cosmo.item} alt="makeup" />
              <h2>{cosmo.name}</h2>
            </div>
          ))}

          <i className="fa-solid fa-forward" onClick={nextitem}></i>
        </div>
      </div>

      {/* fourth  */}
      <div className="reviews">
        <i
          className={`fa-solid fa-backward ${startpoint === 0 ? "blur" : ""}`}
          onClick={startpoint > 0 ? prevreview : null}
        ></i>

        {reviews.slice(startpoint, startpoint + 1).map((re, index) => (
          <div key={index} className="reviewitem">
            <h3>{re.names}</h3>
            <div className="paras">{re.content}</div>
          </div>
        ))}

        <i
          className={`fa-solid fa-forward ${
            startpoint >= reviews.length - 1 ? "blur" : ""
          }`}
          onClick={startpoint < reviews.length - 1 ? nextreview : null}
        ></i>
      </div>
    </>
  );
};

export default Home;
