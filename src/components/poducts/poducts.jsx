import { use, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import ProductCard from "./poducts-card";

const Products = ({ c, setC, dataPromise }) => {

  const poductsData = use(dataPromise);
  // console.log(poducts)

  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {

    // setCart([...cart, product]);
    toast.success(` added to cart!`);
    setC(c + 1);
  };

  return (
    <div className="px-6 md:px-16 py-16 bg-base-100">

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "products"
                ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white"
                : ""
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "cart"
                ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white"
                : ""
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

        {/* Product List */}
                    {
              activeTab === "products" ? 
                
                  <ProductCard 
                  handleAddToCart={handleAddToCart}
                   poductsData={poductsData}
                   setCart={setCart}
                   cart={cart}
                   ></ProductCard>

                
                : 
                <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
              
            }
    </div>
  );
};

export default Products;