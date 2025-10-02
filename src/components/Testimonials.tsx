import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      pet: 'Golden Retriever - Max',
      image: '👩',
      rating: 5,
      text: 'The adoption process was seamless! Max is healthy, happy, and has brought so much joy to our family. The team was incredibly supportive throughout.',
      date: '2 weeks ago',
    },
    {
      name: 'Michael Chen',
      pet: 'Persian Cat - Luna',
      image: '👨',
      rating: 5,
      text: 'I was worried about adopting online, but PawsHeaven exceeded all expectations. Luna came with complete health records and is the perfect addition to our home.',
      date: '1 month ago',
    },
    {
      name: 'Emily Rodriguez',
      pet: 'Cockatiel - Charlie',
      image: '👩',
      rating: 5,
      text: 'Amazing experience! Charlie is exactly as described, and the breeder was knowledgeable and caring. The support team answered all my questions promptly.',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Pet Parents Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-200" />

              <div className="flex items-center space-x-4 mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.pet}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by over 5,000 happy families</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              {['👨', '👩', '👴', '👵', '👨', '👩'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center border-2 border-white"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-gray-600 font-semibold">+5,000 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
