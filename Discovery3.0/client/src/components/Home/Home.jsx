import React, { useEffect, useState, useRef } from "react";
import { initializeSlider } from "./home.js";
import "../../styles/global.css";
import "./home.css";


export const Home = () => {
  const [rotate, setRotate] = useState(0); // Tracks rotation
  const [active, setActive] = useState(0); // Tracks active item
  const imageRef = useRef(null); // Ref for the image container
  const contentsRef = useRef([]); // Ref for the content items
  const items = 6; // Number of slider items
  const rotateAdd = 360 / items; // Rotation increment per item

  const nextSlider = () => {
    const newActive = active + 1 > items - 1 ? 0 : active + 1;
    setActive(newActive);
    setRotate((prevRotate) => prevRotate - rotateAdd); // Adjust for clockwise rotation
  };

  const prevSlider = () => {
    const newActive = active - 1 < 0 ? items - 1 : active - 1;
    setActive(newActive);
    setRotate((prevRotate) => prevRotate + rotateAdd); // Adjust for counter-clockwise rotation
  };

  useEffect(() => {
    // Update rotation and active content
    if (imageRef.current) {
      imageRef.current.style.setProperty("--rotate", `${rotate}deg`);
    }

    contentsRef.current.forEach((content, index) => {
      if (content) {
        if (index === active) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      }
    });

    // Auto-slide every 3 seconds
    const autoNext = setInterval(nextSlider, 3000);
    return () => clearInterval(autoNext); // Cleanup interval on unmount
  }, [rotate, active]);
  useEffect(() => {
    // Initialize slider functions
    const cleanup = initializeSlider();

  
    // Cleanup logic
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/frame-13.png",
      content: "Image & Content 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, fuga."
    },
    {
      image: "/frame-13.png",
      content: "Image & Content 2"
    },
    {
      image: "/frame-13.png",
      content: "Image & Content 3"
    },
    {
      image: "/frame-13.png",
      content: "Image & Content 4"
    },
    {
      image: "/frame-13.png",
      content: "Image & Content 5"
    },
    {
      image: "/frame-13.png",
      content: "Image & Content 6"
    },
    {
      image: "/frame-13.png",
      content: "Image & Content 7"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return (
    <main>
      <div id="main">
        <div id="page1">
          <h1>Discover Recipe & Delicious Food</h1>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
            </svg>
          </span>
          <p>
            Discover, organize, and manage your favorite recipes. Enhance your
            cooking journey with ease and creativity.
          </p>
          <div id="page1cont">
            <h4>Recipe Discovery</h4>
            <h4>Ingredient Tracking</h4>
            <h4>Step-by-Step Guidance</h4>
            <h4>Personalized Suggestions</h4>
          </div>
          <div className="moving-div">
            <div className="blur-left"></div>
            <div className="move">
              <img src="/frame-13.png" alt="Chef Hat" decoding="async" />
              <img src="/frame-15.png" alt="Spatula" decoding="async" />
              <img src="/frame-17.png" alt="Pan" decoding="async" />
              <img src="/frame-21.png" alt="Whisk" decoding="async" />
              <img src="/frame-9.png" alt="Knife" decoding="async" />
              <img src="/frame-24.png" alt="Bowl" decoding="async" />
              <img src="/frame-16.png" alt="Spoon" decoding="async" />
              <img src="/frame-22.png" alt="Fork" decoding="async" />
              <img src="/frame-13.png" alt="Chef Hat" decoding="async" />
              <img src="/frame-15.png" alt="Spatula" decoding="async" />
              <img src="/frame-17.png" alt="Pan" decoding="async" />
              <img src="/frame-21.png" alt="Whisk" decoding="async" />
              <img src="/frame-9.png" alt="Knife" decoding="async" />
              <img src="/frame-24.png" alt="Bowl" decoding="async" />
              <img src="/frame-16.png" alt="Spoon" decoding="async" />
              <img src="/frame-22.png" alt="Fork" decoding="async" />
            </div>
            <div className="blur-right"></div>
          </div>
        </div>
        
        {/* <div className="page3">
          <video
            src="/6314152_person_people_african_american_h7d62fca5V0240007VERTICAL1080p12000br.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div> */}
        
        <div className="slider1">
        <div className="title">
            Your Recipes
        </div>
        <div className="images" ref={imageRef}>
        {[...Array(items)].map((_, index) => (
          <div className="item" style={{ "--i": index + 1 }} key={index}>
            <img src={`/frame-13.png`} alt={`Recipe ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="content">
        {[...Array(items)].map((_, index) => (
          <div
            className={`item ${index === 0 ? "active" : ""}`}
            ref={(el) => (contentsRef.current[index] = el)}
            key={index}
          >
            <h1>{`PRODUCT NAME ${index + 1}`}</h1>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              expedita tenetur consectetur. Ipsum, quibusdam recusandae impedit
              molestiae libero nobis nemo possimus perspiciatis.
            </div>
            <button>See more</button>
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevSlider}>
        {"<"}
      </button>
      <button id="next" onClick={nextSlider}>
        {">"}
      </button> 
    </div>
        <div className="page4">
        <section className="custom-slider-container">
          <h2 className="underline py-5">Your's Liked Recipes</h2>
          <div className="custom-slider">
            <button onClick={prevSlide} className="slider-nav prev">❮</button>
            <div className="slider-wrapper">
              {slides.map((slide, index) => {
                const position = (index - currentIndex + slides.length) % slides.length;
                let className = "slider-item";

                if (position === 0) className += " center-slide";
                else if (position === 1 || position === slides.length - 1) className += " side-slide";
                else className += " hidden-slide";

                return (
                  <div key={index} className={className}>
                    <img src={slide.image} alt={slide.content} className="slide-image" />
                    <p className="slide-content">{slide.content}</p>
                  </div>
                );
              })}
            </div>
            <button onClick={nextSlide} className="slider-nav next">❯</button>
          </div>
          <div className="pagination">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </section>
        </div>
        <div className="page7">
          <div className="title1">
            <h1>Your's Bookmarked Recipes</h1>
          </div>
        <div class="slider" reverse="true" style={{
            "--width": "250px",
            "--height": "300px",
            "--quantity": 9}}>
            <div class="list">
            {[...Array(9)].map((_, index) => (
      <div className="item" style={{ "--position": index + 1 }} key={index}>
        <img src={`/frame-13.png`} alt="slider item" />
      </div>
    ))}

            </div>
        </div>
        </div>
        <section
          style={{ backgroundColor: "black", height: "85vh" }}
          className="sliding-section px-10"
        >
          <h2
            style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "80px" }}
            className="font-semibold text-yellow-600 text-6xl"
          >
            Dish Of The Day !
          </h2>
          <div className="dish-of-the-day-slider">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="flex justify-between mt-4 items-center">
                    <img
                      src="frame-9.png"
                      alt="Placeholder image of a sandwich"
                      className="border-solid border-4 border-yellow-500 rounded-2xl h-80"
                    />
                    <div className="textslider w-2/3 ml-6">
                      <h3 className=" text-5xl relative right-20 text-blue-700">
                        Healthy Bites: Nourishing Sandwich Creations
                      </h3>
                      <p className="text-yellow-700 mt-2 py-2 px-10">
                        A burst of flavor and nutrition in every bite! This simple
                        yet satisfying sandwich is perfect for a quick and healthy
                        lunch. Loaded with fresh vegetables like cucumbers, bell
                        peppers, and carrots, topped with creamy hummus and sandwiched
                        between slices of whole-grain bread, this veggie delight is
                        sure to satisfy your cravings. Customize it with your favorite
                        veggies and spreads for a personalized touch.
                      </p>
                      <button className="py-4 px-6 bg-yellow-300 font-semibold mt-2 rounded-2xl">
                        Explore More
                      </button>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="flex justify-between mt-4 items-center">
                    <img
                      src="frame-13.png"
                      alt="Placeholder image of a salad"
                      className="border-solid border-4 border-yellow-500 rounded-2xl h-80"
                    />
                    <div className="w-2/3 ml-6">
                      <h3 className="textslider1 text-5xl relative right-20 text-blue-700">
                        Tropical Salad Delight
                      </h3>
                      <p className="text-yellow-700 mt-2 py-2 px-10">
                        A refreshing salad packed with tropical flavors and
                        nutritious ingredients.
                      </p>
                      <button className="py-4 px-6 bg-yellow-300 font-semibold mt-2 rounded-2xl">
                        Explore More
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
