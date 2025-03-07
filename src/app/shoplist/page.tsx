import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";

const shoplist = [
  {
    id: 1,
    name: "Product 1",
    image: "/images/shoplist1.png",
    price: "$120.00",
    oldPrice: "$150.00",
    description: "This is a brief description of Product 1.",
    rating: 4,
    colors: ["bg-red-500", "bg-blue-500", "bg-green-500"],
  },
  {
    id: 2,
    name: "Product 2",
    image: "/images/shoplist2.png",
    price: "$99.00",
    oldPrice: "$130.00",
    description: "This is a brief description of Product 2.",
    rating: 5,
    colors: ["bg-yellow-500", "bg-purple-500", "bg-gray-500"],
  },
];

const ShopList = () => {
  return (
    <div className="font-sans text-[#151875]">
      {/* Header Section */}
      <div className="py-28 px-8">
        <h1 className="text-4xl font-bold">Shop List</h1>
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-indigo-950">Shopping List</p>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="p-8">
        <div className="space-y-6">
          {shoplist.map((product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="lg:w-1/3 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-2/3 lg:ml-6 mt-4 lg:mt-0">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  {/* Color Options */}
                  <div className="mt-2 flex gap-1">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 ${color} rounded-full`}
                      ></span>
                    ))}
                  </div>
                </div>

                {/* Price and Old Price */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-indigo-950 line-through">
                    {product.oldPrice}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 w-96">{product.description}</p>

                {/* Rating */}
                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <AiOutlineHeart size={24} />
                  </button>
                  <Link href="/cart">
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                      <AiOutlineShoppingCart size={24} />
                    </button>
                  </Link>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300">
                    <AiOutlineEye size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
