import React, { useState } from 'react';
import NavbarUts from '../components/NavbarUts';

function MenuUts() {
  const [activeCategory, setActiveCategory] = useState('makanan');

  const menuData = {
    makanan: [
      {
        id: 1,
        name: "Nasi Goreng Special",
        description: "Nasi goreng khas Indonesia dengan bumbu rahasia, ayam, udang, dan kerupuk",
        price: "Rp 35.000",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Indonesian",
        spicy: 2
      },
      {
        id: 2,
        name: "Spaghetti Carbonara",
        description: "Pasta Italia dengan saus krim creamy, bacon crispy, dan keju parmesan",
        price: "Rp 42.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayJoPZxHOtxD7g03DXWQx-vRYqUdVSKzHszh7Oecwd2bXvmSlZ_N-kL_REkswYB_ICzg&usqp=CAU",
        category: "Italian",
        spicy: 0
      },
      {
        id: 3,
        name: "Sushi Roll Premium",
        description: "Sushi roll segar dengan salmon, alpukat, mentimun, wasabi dan kecap asin",
        price: "Rp 48.000",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Japanese",
        spicy: 0
      },
      {
        id: 4,
        name: "Chicken Teriyaki Bento",
        description: "Paket lengkap ayam teriyaki, nasi, salad segar, dan pickle Jepang",
        price: "Rp 38.000",
        image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Japanese",
        spicy: 0
      },
      {
        id: 5,
        name: "Beef Rendang",
        description: "Daging sapi dengan bumbu rendang Padang yang kaya rempah dan santan",
        price: "Rp 45.000",
        image: "https://www.recipetineats.com/tachyon/2014/11/Beef-Rendang-9.jpg?resize=964%2C1350&zoom=0.67",
        category: "Indonesian",
        spicy: 3
      },
      {
        id: 6,
        name: "Tom Yum Soup",
        description: "Sup Thailand pedas asam dengan udang, jamur, dan daun jeruk",
        price: "Rp 32.000",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Thai",
        spicy: 3
      }
    ],
    minuman: [
      {
        id: 7,
        name: "Es Teh Manis",
        description: "Teh manis segar dengan es batu, minuman klasik Indonesia",
        price: "Rp 8.000",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Traditional"
      },
      {
        id: 8,
        name: "Cappuccino",
        description: "Kopi espresso dengan foam susu yang creamy dan sempurna",
        price: "Rp 18.000",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Coffee"
      },
      {
        id: 9,
        name: "Thai Tea",
        description: "Teh Thailand dengan susu kental manis, rasa yang unik dan menyegarkan",
        price: "Rp 15.000",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Traditional"
      },
      {
        id: 10,
        name: "Fresh Orange Juice",
        description: "Jus jeruk segar tanpa gula tambahan, kaya vitamin C",
        price: "Rp 12.000",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Fresh Juice"
      },
      {
        id: 11,
        name: "Matcha Latte",
        description: "Teh hijau Jepang premium dengan susu, rasa yang khas dan menenangkan",
        price: "Rp 22.000",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Tea"
      },
      {
        id: 12,
        name: "Smoothie Bowl",
        description: "Smoothie mangga dengan topping granola, buah segar, dan madu",
        price: "Rp 25.000",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Healthy"
      }
    ]
  };

  const renderSpicyLevel = (level) => {
    if (!level) return null;
    return (
      <div className="flex items-center mt-2">
        <span className="text-sm text-gray-600 mr-2">Pedas:</span>
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${
              i < level ? 'text-red-500' : 'text-gray-300'
            }`}
          >
            🌶️
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarUts />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Menu <span className="text-yellow-300">D'BENTO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Cita rasa autentik dari berbagai belahan dunia
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveCategory('makanan')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'makanan'
                  ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🍽️ Makanan
            </button>
            <button
              onClick={() => setActiveCategory('minuman')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'minuman'
                  ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🥤 Minuman
            </button>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeCategory].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {renderSpicyLevel(item.spicy)}
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-yellow-600">
                      {item.price}
                    </span>
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      + Keranjang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-800 to-black py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Siap Memesan Menu Favorit Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Hubungi kami sekarang untuk reservasi atau delivery
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              📞 Hubungi Kami
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              🛵 Order Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuUts;