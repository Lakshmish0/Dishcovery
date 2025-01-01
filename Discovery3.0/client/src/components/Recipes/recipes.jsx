import React from "react";
import { Link } from "react-router-dom";
const RecipePage = () => {
  const toggleLike = (id) => {
    // Logic for toggling like
    console.log(`Liked recipe: ${id}`);
  };

  const toggleBookmark = (id) => {
    // Logic for toggling bookmark
    console.log(`Bookmarked recipe: ${id}`);
  };

  const recipeNumber = 1; // Example recipe number

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-4">
          Recipe Name
        </h1>
        <div className="w-64 border-t-4 border-yellow-500 mx-auto mb-8"></div>

        {/* Recipe Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
          {/* Left Content */}
          <div
            style={{ left: "100px", top: "50px" }}
            className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-8 relative"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Making Process</h2>
            <p className="mt-4 text-lg font-semibold text-gray-700">Ingredients:</p>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            </p>

            <p className="mt-4 text-lg font-semibold text-gray-700">Description:</p>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
              augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
              lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod
              erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
            </p>
            <div className="flex-1">
              <div className="flex space-x-4 mt-4">
                <button
                  type="button"
                  onClick={() => toggleLike("recipe" + recipeNumber)}
                  className="text-yellow-500 text-sm"
                  id="likeButton"
                >
                  <i className="far fa-heart"></i> Like Recipe
                </button>
                <button
                  type="button"
                  onClick={() => toggleBookmark("recipe" + recipeNumber)}
                  className="text-yellow-500 text-sm"
                  id="bookmarkButton"
                >
                  <i className="far fa-bookmark"></i> Bookmark Recipe
                </button>
                
              </div>
            </div>
            <Link to="/search-menu">
                  <button className="text-white bg-blue-500 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 relative top-2 ">
                    Go back
                  </button>
                </Link>
          </div>

          {/* Right Photo */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div
              style={{ width: "70vh", height: "70vh", top: "50px", left: "30px" }}
              className="border-2 border-dashed border-gray-200 relative flex items-center justify-center bg-gray-50 shadow-lg rounded-lg"
            >
              <span className="text-6xl text-gray-300">Photo</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipePage;
