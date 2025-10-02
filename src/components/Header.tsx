import { ShoppingCart, Search, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-orange-400 to-pink-400 p-2 rounded-xl">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              PawsHeaven
            </span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for pets, breeds..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Dogs
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Cats
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Supplies
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-orange-50 rounded-full transition-colors">
              <Heart className="w-6 h-6 text-gray-700" />
            </button>
            <button className="relative p-2 hover:bg-orange-50 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
