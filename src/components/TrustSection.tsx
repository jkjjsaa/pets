import { Shield, Award, Heart, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: 'Safe Adoption',
      description: 'Every pet is health-checked and vaccinated before adoption',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Verified Breeders',
      description: 'All breeders are licensed, certified, and regularly inspected',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Heart,
      title: 'Health Guarantee',
      description: '30-day health guarantee and lifetime support for your pet',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: CheckCircle,
      title: 'Full Documentation',
      description: 'Complete medical records and certification included',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose PawsHeaven?
          </h2>
          <p className="text-lg text-gray-600">
            Your pet's wellbeing is our top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Adoption Success Stories
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over 5,000 pets have found their forever homes through PawsHeaven.
                Join thousands of happy pet parents who trusted us with their adoption journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">100% Satisfaction Rate</p>
                    <p className="text-sm text-gray-500">Based on 5,000+ reviews</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">24/7 Support Available</p>
                    <p className="text-sm text-gray-500">We're here whenever you need us</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Trusted by Veterinarians</p>
                    <p className="text-sm text-gray-500">Recommended by pet professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-4 h-32 flex items-center justify-center text-5xl">
                  🐕
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-4 h-40 flex items-center justify-center text-6xl">
                  🐈
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-4 h-40 flex items-center justify-center text-6xl">
                  🐕
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-4 h-32 flex items-center justify-center text-5xl">
                  🐈
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
