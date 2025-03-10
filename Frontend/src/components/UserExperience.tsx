import React from 'react';
import { Star, Users } from 'lucide-react';

const UserExperience = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "Train2Gain revolutionized my fitness journey. The NFT rewards keep me motivated!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Professional Athlete",
      content: "The challenge verification system is seamless. Love earning while staying fit.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Yoga Instructor",
      content: "This platform brings together fitness and blockchain perfectly. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">User Experience</h2>
        <div className="flex items-center justify-center mb-8">
          <Users className="text-yellow-500 w-8 h-8 mr-2" />
          <p className="text-gray-600">Join our growing community of fitness enthusiasts</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserExperience;