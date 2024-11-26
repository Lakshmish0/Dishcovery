import React from "react";

export const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <h1 className="text-3xl font-semibold mb-6 text-blue-600">Your Profile</h1>
          
          {/* Profile Info Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <div className="flex">
              <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mr-6">
                <img 
                  src="/images/profile-placeholder.png" 
                  alt="User profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg"><span className="font-semibold">Name:</span> Koushik S Jain</p>
                <p className="text-lg"><span className="font-semibold">Email:</span> user@example.com</p>
                <p className="text-lg"><span className="font-semibold">Phone:</span> +1 234 567 8900</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition duration-300">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          
          {/* Recipe Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-600">Your Recipes</h2>
            
            {/* Recipe Navigation */}
            <div className="flex space-x-8 mb-8 border-b pb-4">
              <a href="#" className="text-yellow-600 font-semibold hover:text-yellow-700 pb-2 border-b-2 border-yellow-600">
                My Recipes
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 pb-2 border-b-2 border-transparent hover:border-yellow-600">
                Liked Recipes
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-600 pb-2 border-b-2 border-transparent hover:border-yellow-600">
                Bookmarked Recipes
              </a>
            </div>

            {/* Recipe Cards */}
            <div className="space-y-6">
              {/* Single Recipe Card */}
              <div className="flex bg-gray-50 rounded-lg overflow-hidden">
                <div className="w-1/3">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/images/roti-sabji.jpg" 
                    alt="Roti and Sabji"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-2xl font-semibold mb-3">Roti and Sabji</h3>
                  <div className="space-y-3">
                    <p>
                      <span className="font-semibold">Ingredients:</span> 
                      <span className="text-gray-600">
                        Whole wheat flour, water, salt, assorted vegetables (potatoes, spinach, 
                        cauliflower, carrots), onion, tomato, ginger-garlic paste, spices 
                        (turmeric, cumin, coriander, red chili powder), oil/ghee
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Description:</span> 
                      <span className="text-gray-600">
                        A classic Indian meal combining soft whole-wheat rotis with flavorful 
                        vegetable curry (sabji). The vegetables are cooked with aromatic spices, 
                        creating a nutritious and satisfying dish that's customizable to taste.
                      </span>
                    </p>
                    <div className="flex space-x-4 mt-4">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition duration-300">
                        Edit Recipe
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-300">
                        Remove Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
              <button className="text-gray-600 hover:text-yellow-600 disabled:text-gray-400">
                Previous
              </button>
              <span className="text-gray-600">Page 1 of 1</span>
              <button className="text-gray-600 hover:text-yellow-600 disabled:text-gray-400">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
