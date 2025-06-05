import React from 'react';

// Parent Component
export default function ResponsiveDesign() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">📱 Responsive Design Demo</h2>
      <ResponsiveText />
      <ResponsiveWidth />
      <ResponsiveLayout />
    </div>
  );
}

// Child 1: Ukuran teks responsif
function ResponsiveText() {
  return (
    <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
      Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.
      <br />
      Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
    </p>
  );
}

// Child 2: Komponen dengan lebar fleksibel
function ResponsiveWidth() {
  return (
    <div className="mb-4">
      <p>
        Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:
        <br /><br />
      </p>
      <p>
        <strong>md:w-1/2</strong> → Saat layar mencapai ukuran tablet (md: 768px) atau lebih besar, setiap kolom akan memiliki lebar 50%.
      </p>
      <p>
        <strong>md:flex-row</strong> pada div parent membuat dua kolom ini sejajar secara horizontal pada layar tablet ke atas,
        sedangkan pada layar lebih kecil (mobile), kolom akan tersusun vertikal secara default (`flex-col`).
      </p>

      <div className="flex flex-col md:flex-row mb-4 mt-4">
        <div className="bg-red-400 w-full md:w-1/2 p-4">Kolom 1</div>
        <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
      </div>
    </div>
  );
}

// Child 3: Grid layout responsif
function ResponsiveLayout() {
  return (
    <div>
      <p className="mt-4">
        Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong> dari Tailwind CSS. Jumlah kolom akan menyesuaikan dengan ukuran layar:
      </p>
      <p>
        - <strong>grid-cols-1</strong> → default 1 kolom<br />
        - <strong>sm:grid-cols-2</strong> → ≥ 640px: 2 kolom<br />
        - <strong>md:grid-cols-3</strong> → ≥ 768px: 3 kolom<br />
        - <strong>lg:grid-cols-4</strong> → ≥ 1024px: 4 kolom
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-blue-500 p-4">Box 1</div>
        <div className="bg-blue-500 p-4">Box 2</div>
        <div className="bg-blue-500 p-4">Box 3</div>
        <div className="bg-blue-500 p-4">Box 4</div>
      </div>
    </div>
  );
}
