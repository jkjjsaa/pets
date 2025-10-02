import { Heart, ShoppingCart, Star } from 'lucide-react';

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: number;
  emoji: string;
  rating: number;
  gradient: string;
  featured?: boolean;
}

interface FeaturedPetsProps {
  wishlist: number[];
  toggleWishlist: (petId: number) => void;
  addToCart: () => void;
}

export default function FeaturedPets({ wishlist, toggleWishlist, addToCart }: FeaturedPetsProps) {
  const pets: Pet[] = [
    {
      id: 1,
      name: 'Max',
      breed: 'Golden Retriever',
      age: '8 weeks',
      price: 1200,
      emoji: '🐕',
      rating: 4.9,
      gradient: 'from-orange-200 to-orange-300',
      featured: true,
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'Persian Cat',
      age: '12 weeks',
      price: 800,
      emoji: '🐈',
      rating: 4.8,
      gradient: 'from-pink-200 to-pink-300',
      featured: true,
    },
    {
      id: 5,
      name: 'Rocky',
      breed: 'French Bulldog',
      age: '9 weeks',
      price: 2500,
      emoji: '🐕',
      rating: 5.0,
      gradient: 'from-orange-200 to-yellow-300',
      featured: true,
    },
    {
      id: 6,
      name: 'Whiskers',
      breed: 'Maine Coon',
      age: '14 weeks',
      price: 1000,
      emoji: '🐈',
      rating: 4.8,
      gradient: 'from-pink-200 to-pink-300',
    },
    {
      id: 7,
      name: 'Buddy',
      breed: 'Labrador Retriever',
      age: '10 weeks',
      price: 1100,
      emoji: '🐕',
      rating: 4.9,
      gradient: 'from-orange-200 to-orange-300',
    },
    {
      id: 8,
      name: 'Mittens',
      breed: 'British Shorthair',
      age: '11 weeks',
      price: 900,
      emoji: '🐈',
      rating: 4.7,
      gradient: 'from-pink-200 to-pink-300',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Featured This Week
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Adorable Pets
          </h2>
          <p className="text-lg text-gray-600">
            Carefully selected, health certified, and ready for their forever homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {pet.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  FEATURED
                </div>
              )}

              <div className="relative">
                <div className={`w-full h-64 bg-gradient-to-br ${pet.gradient} flex items-center justify-center text-8xl`}>
                  {pet.emoji}
                </div>
                <button
                  onClick={() => toggleWishlist(pet.id)}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all ${
                    wishlist.includes(pet.id)
                      ? 'bg-pink-500 text-white'
                      : 'bg-white/90 text-gray-700 hover:bg-pink-500 hover:text-white'
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={wishlist.includes(pet.id) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">{pet.name}</h3>
                  <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <span className="text-sm font-semibold text-gray-700">{pet.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 font-medium mb-1">{pet.breed}</p>
                <p className="text-sm text-gray-500 mb-4">{pet.age} old</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Adoption Fee</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      ${pet.price}
                    </p>
                  </div>
                  <button
                    onClick={addToCart}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            View All Pets
          </button>
        </div>
      </div>
    </section>
  );
}
