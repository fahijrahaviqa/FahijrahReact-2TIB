// src/pages/HomeUts.jsx 
import React from "react";
import NavbarUts from '../components/NavbarUts';

function HomeUts() {
  return (
    <div>
      <NavbarUts />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-red-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Buka Setiap Hari • 10:00 - 22:00</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Nikmati
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Sensasi Kuliner
            </span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              di <span className="text-yellow-400 drop-shadow-lg">D'BENTO</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Rasa autentik dari berbagai belahan dunia, kualitas premium, 
            <br className="hidden md:block" />
            pengalaman kuliner yang tak terlupakan
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">1000+</div>
              <div className="text-sm text-gray-300">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-gray-300">Menu Pilihan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">5★</div>
              <div className="text-sm text-gray-300">Rating Google</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                🍽️ Lihat Menu
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                📞 Reservasi Sekarang
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-300">Scroll untuk lebih lanjut</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Menu Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Top 3 Menu Terfavorit
            </h2>
            <p className="text-xl text-gray-600">
              Pilihan terbaik yang paling disukai pelanggan kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nasi Goreng */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Nasi Goreng Special" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                  #1 Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Nasi Goreng Special
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Nasi goreng khas Indonesia dengan bumbu rahasia, dilengkapi ayam, udang, dan kerupuk. Rasa yang bikin ketagihan!
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-600">Rp 35.000</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Spaghetti */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayJoPZxHOtxD7g03DXWQx-vRYqUdVSKzHszh7Oecwd2bXvmSlZ_N-kL_REkswYB_ICzg&usqp=CAU" 
                  alt="Spaghetti Carbonara" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  #2 Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Spaghetti Carbonara
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Pasta Italia autentik dengan saus krim creamy, bacon crispy, dan keju parmesan. Kelezatan Eropa di lidah Anda.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-600">Rp 42.000</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>

            {/* Sushi Roll */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sushi Roll Premium" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  #3 Choice
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Sushi Roll Premium
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sushi roll segar dengan isian salmon, alpukat, dan mentimun. Disajikan dengan wasabi dan kecap asin khas Jepang.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-600">Rp 48.000</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeUts;