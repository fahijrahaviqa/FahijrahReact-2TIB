function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('/your-image-path.jpg')",
      }}
    >
      <h1 className="text-5xl font-bold font-[cursive]">Hot And Ready To Serve</h1>
      <p className="mt-4 max-w-lg">
        D’BENTO is a restaurant, bar and coffee roastery located in Italy. We
        have awesome recipes and the most talented chefs in town!
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black">
        More Detail
      </button>
    </section>
  );
}
