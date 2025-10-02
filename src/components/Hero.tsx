import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-pink-50 to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Trusted by 50,000+ Pet Parents
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Perfect Pet
              </span>
              Today!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with verified breeders and discover your new furry companion.
              Every pet comes with health certification and lifetime support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center">
                Adopt Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border-2 border-gray-200">
                Browse Pets
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-800">5,000+</div>
                <div className="text-sm text-gray-600">Happy Adoptions</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Verified Breeders</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Health Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center text-6xl">
                    🐕
                  </div>
                  <p className="mt-3 font-semibold text-gray-800">Golden Retriever</p>
                  <p className="text-sm text-gray-500">8 weeks old</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center text-6xl">
                    🐕
                  </div>
                  <p className="mt-3 font-semibold text-gray-800">Beagle</p>
                  <p className="text-sm text-gray-500">7 weeks old</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-4 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center text-6xl">
                    🐈
                  </div>
                  <p className="mt-3 font-semibold text-gray-800">Persian Cat</p>
                  <p className="text-sm text-gray-500">12 weeks old</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center text-6xl">
                    🐈
                  </div>
                  <p className="mt-3 font-semibold text-gray-800">Maine Coon</p>
                  <p className="text-sm text-gray-500">10 weeks old</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
