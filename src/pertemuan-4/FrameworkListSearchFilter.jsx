import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkList() {
  // Inisialisasi DataForm (gabungan dari searchTerm & selectedTag)
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value kalau perlu*/
  });

  // Handle perubahan input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Logic Search dan Filter Framework
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  // Mengambil semua tag unik dari data
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      {/* Input Search */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
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

      {/* Hasil Pencarian */}
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">{item.details.developer}</p>
          <p className="text-gray-600">{item.details.releaseYear}</p>
          <p className="text-gray-600">
            <a
              href={item.details.officialWebsite}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.details.officialWebsite}
            </a>
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap">
            {item.tags.map((tag, index) => (
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
