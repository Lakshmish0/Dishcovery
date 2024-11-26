import PropTypes from "prop-types";
import React from "react";
import "./home.css";
import "../../styles/global.css"

export const Home = () => {
  return (
    <main>
        <section className="text-center py-10">
            <h1 className="slide-in-title font-family-serif text-5xl text-blue-700 font-semibold py-4">
                Discover Recipe & Delicious Food
            </h1>
            
            <div className="mt-4 flex justify-center">
                <input 
                    className="w-3/4 p-2 border border-yellow-500 rounded-2xl" 
                    type="search" 
                    placeholder="Search your favorite food" 
                />
                <button className="ml-2 p-5 bg-yellow-300 font-semibold relative px-4 rounded-2xl">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </section>
        
        <section className="px-10">
            <h2 className="font-semibold text-yellow-600 text-3xl">Dish Of The Day !</h2>
            <div className="flex justify-between mt-4 items-center">
                <img 
                    src="frame-9.png" 
                    alt="Placeholder image of a sandwich" 
                    className="border-solid border-4 border-yellow-500 rounded-2xl h-80" 
                />
                <div className="w-2/3 ml-6">
                    <h3 className="text-3xl relative right-20 text-blue-700">
                        Healthy Bites: Nourishing Sandwich Creations
                    </h3>
                    <p className="text-gray-700 mt-2 py-2 px-10 text-1xl">
                        A burst of flavor and nutrition in every bite! This simple yet satisfying sandwich is perfect for a quick and healthy lunch. Loaded with fresh vegetables like cucumbers, bell peppers, and carrots, topped with creamy hummus and sandwiched between slices of whole-grain bread, this veggie delight is sure to satisfy your cravings. Customize it with your favorite veggies and spreads for a personalized touch.
                    </p>
                    <button className="py-2 px-4 bg-yellow-300 text-sm font-semibold mt-2 rounded-2xl">
                        Explore More
                    </button>
                </div>
            </div>
        </section>

        <section className="px-10 mt-6">
            <h2 className="font-semibold text-blue-600 text-3xl py-3">Popular For You !</h2>
            <div className="flex justify-between mt-4 items-center">
                <img 
                    src="frame-13.png" 
                    alt="Placeholder image of a salad bowl" 
                    className="border-solid border-4 relative left-20 border-yellow-500 rounded-2xl h-80" 
                />
                <div className="w-2/3 ml-6">
                    <h3 className="font-semibold text-yellow-600 relative left-5 text-3xl">
                        Tropical Paradise Crunch: Dive into a Refreshing Salad Oasis of Exotic Delights!
                    </h3>
                    <p className="text-gray-700 mt-2 py-2 px-10 text-1xl">
                        Indulge in a tropical escape with our refreshing Tropical Paradise Crunch salad! Packed with a vibrant mix of exotic fruits like pineapple, mango, and papaya, topped with crunchy nuts and a drizzle of tangy dressing, this salad is a burst of flavor in every bite. Perfect for a light and healthy meal or a refreshing dessert.
                    </p>
                    <button className="py-2 px-4 bg-yellow-300 text-sm font-semibold mt-2 rounded-2xl relative left-20">
                        Explore More
                    </button>
                </div>
            </div>
        </section>       
    </main>
  );
} 
