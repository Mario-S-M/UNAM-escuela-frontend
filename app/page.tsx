const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8 md:px-8 lg:px-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-center">
          Bienvenido a mi sitio web
        </h1>
        <p className="text-base md:text-lg mb-4 md:mb-6 text-center">
          Este sitio web es totalmente accesible
        </p>
        <div className="flex gap-3 md:gap-4">
          <button className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm md:text-base touch-manipulation">
            Más información
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
