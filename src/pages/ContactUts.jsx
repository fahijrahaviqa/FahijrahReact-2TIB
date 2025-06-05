import React from "react";
import NavbarUts from "../components/NavbarUts";

function ContactUts() {
  return (
    <div>
      <NavbarUts />
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Hubungi Kami</h1>
        <form className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Nama
            </label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan nama Anda"
              className="w-full px-3 py-2 border rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email Anda"
              className="w-full px-3 py-2 border rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
              Pesan
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tulis pesan Anda di sini"
              className="w-full px-3 py-2 border rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUts;
