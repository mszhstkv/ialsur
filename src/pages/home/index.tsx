const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        ialsur
      </h1>
      <p className="text-2xl mb-8 text-gray-200">Deckbuilding Roguelite Idle</p>
      <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        В бой!
      </button>
    </div>
  );
};

export default HomePage;
