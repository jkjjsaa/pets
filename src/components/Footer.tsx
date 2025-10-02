import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-orange-400 to-pink-400 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold">PawsHeaven</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting loving families with their perfect pets since 2020. Your trusted partner in pet adoption.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Our Breeders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Adoption Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Pet Care Tips</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Browse Pets</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Dogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Cats</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Pet Supplies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Pet Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Training Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Pet Street, Animal City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">hello@pawsheaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 PawsHeaven. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
