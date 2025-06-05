import productData from "./products.json";
import { useState } from "react";

export default function ProductListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    selectedBrand: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? product.tags.includes(dataForm.selectedTag)
      : true;

    const matchesBrand = dataForm.selectedBrand
      ? product.brand === dataForm.selectedBrand
      : true;

    return matchesSearch && matchesTag && matchesBrand;
  });

  const allTags = [
    ...new Set(productData.flatMap((product) => product.tags)),
  ];

  const allBrands = [...new Set(productData.map((product) => product.brand))];

  return (
    <div className="p-8">
      {/* Input Search */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search product..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />

      {/* Dropdown Filter Tag */}
      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* Dropdown Filter Brand */}
      <select
        name="selectedBrand"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Brands</option>
        {allBrands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {/* List Produk */}
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-600 font-medium">Brand: {product.brand}</p>
          <p className="text-gray-600">
            Price: ${product.price} (-{product.discountPercentage}%)
          </p>
          <p className="text-gray-600">Rating: ⭐ {product.rating}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
          <p className="text-gray-600">
            Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} mm
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
