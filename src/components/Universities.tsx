import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Universities = () => {
  const universities = [
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "#1 Medical University in India"
    },
    {
      name: "Charles University",
      location: "Prague, Czech Republic",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Top Medical University in Europe"
    },
    {
      name: "University of Delhi",
      location: "Delhi, India",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "QS World Rankings: Top 500"
    },
    {
      name: "Masaryk University",
      location: "Brno, Czech Republic",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      ranking: "Leading Research University"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Universities</h2>
          <p className="text-xl text-gray-600">Excellence in Education Across Borders</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
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
          {universities.map((university, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${university.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                  <p className="text-gray-600 mb-2">{university.location}</p>
                  <p className="text-rose-600 font-medium">{university.ranking}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Universities;