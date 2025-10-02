import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Mail className="w-10 h-10 text-orange-500" />
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with PawsHeaven
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive access to new arrivals, adoption tips, and special offers delivered to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
            />
            <button
              type="submit"
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center whitespace-nowrap"
            >
              Subscribe Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>

          <p className="text-white/80 text-sm mt-6">
            Join 10,000+ pet lovers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
