export default function Categories() {
  const categories = [
    {
      name: 'Dogs',
      emoji: '🐕',
      count: '500+ breeds',
      gradient: 'from-orange-400 to-orange-500',
      bgGradient: 'from-orange-100 to-orange-200',
    },
    {
      name: 'Cats',
      emoji: '🐈',
      count: '300+ breeds',
      gradient: 'from-pink-400 to-pink-500',
      bgGradient: 'from-pink-100 to-pink-200',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600">
            Find the perfect companion from our diverse selection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {category.emoji}
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
