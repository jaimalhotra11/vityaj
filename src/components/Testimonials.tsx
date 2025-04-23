import React from 'react';
import { Quote, Star, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "MBBS Student",
      country: "Nigeria",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Choosing Vityaz Global was the best decision for my medical education. Their guidance throughout the admission process was invaluable.",
      rating: 5,
      university: "All India Institute of Medical Sciences"
    },
    {
      name: "Mohammed Al-Sayed",
      role: "MD Student",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The support from Vityaz Global made my transition to studying in India seamless. They helped with everything from admission to accommodation.",
      rating: 5,
      university: "Christian Medical College"
    },
    {
      name: "Grace Muthoni",
      role: "MBBS Student",
      country: "Kenya",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The quality of education and cultural experience has exceeded my expectations. Vityaz Global's ongoing support is commendable.",
      rating: 5,
      university: "Armed Forces Medical College"
    },
    {
      name: "John Smith",
      role: "Medical Student",
      country: "South Africa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "From application to enrollment, Vityaz Global provided expert guidance. Their team is professional and dedicated.",
      rating: 5,
      university: "Masaryk University"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from our students about their journey with Vityaz Global
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {testimonial.country}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-8 h-8 text-rose-600 mb-2" />
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Join our community of successful students from around the world
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;