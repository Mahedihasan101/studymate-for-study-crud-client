// CreatePartnerProfile.jsx
import React, { useState } from "react";
import img from '../assets/bgimg.jpg'

const CreatePartnerProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    imageUrl: "",
    price: "",
    processingTime: "",
    rating: "",
    description: "",
    stock: "",
    customizable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner Profile Data:", formData);
    // Add your API call here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4  " style={{
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
  
     <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-10 mb-5">Create <span className="text-blue-500">Partner Profile</span></h2>
         <form
        onSubmit={handleSubmit}
        className=" rounded-2xl shadow-2xl p-8 w-full max-w-3xl  bg-[#e7e2de] "
      >
        <h2 className="text-2xl border- font-bold text-gray-800 mb-6">
          Basic Info
        </h2>

        {/* Basic Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Basic Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-blue-600   rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="category"
              placeholder="Sub Category Name"
              value={formData.category}
              onChange={handleChange}
              className="border border-blue-600   rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="border border-blue-600   rounded-2xl px-4 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Product Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Product Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
            
              type="text"
              name="price"
              placeholder="Product price"
              value={formData.price}
              onChange={handleChange}
              className="border border-blue-600   rounded-2xl px-4 py-2  focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="processingTime"
              placeholder="Processing time"
              value={formData.processingTime}
              onChange={handleChange}
              className="border border-blue-600   rounded-2xl  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              className="border border-blue-600  rounded-2xl l  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <textarea
            name="description"
            placeholder="Product description"
            value={formData.description}
            onChange={handleChange}
            className="border border-blue-600     rounded-2xl px-4 py-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
          ></textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="stock"
              placeholder="Stock status"
              value={formData.stock}
              onChange={handleChange}
              className="border border-blue-600  rounded-2xl  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <label className="flex items-center space-x-2 border border-blue-600    rounded-2xl px-4 py-2 cursor-pointer focus-within:ring-2 focus-within:ring-yellow-400">
              <input
                type="checkbox"
                name="customizable"
                checked={formData.customizable}
                onChange={handleChange}
                className="form-checkbox h-5 w-5border-blue-600   rounded-3xl "
              />
              <span className="border-blue-500">Is this Customizable?</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-yellow-500 text-white font-bold py-3 rounded-2xl transition-all"
        >
          Add Item
        </button>
      </form>
     </div>
    </div>
  );
};

export default CreatePartnerProfile;
