import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Universities = () => {
  const universities = [
    {
      name: "Amity University",
      location: "Multiple Locations",
      image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
      ranking: "#1 Engineering University in India"
    },
    {
      name: "Bennett University",
      location: "Greater Noida, India",
      image: "https://www.mycampusreview.com/assest/front/images/fb/bennut.jpg",
      ranking: "Top University in India"
    },
    {
      name: "Chandigarh University",
      location: "Chandigarh, India",
      image: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchandigarh-university%2Fhero-image%2Fchandigarhuniversitybanner.webp&w=1200&q=75",
      ranking: "QS World Rankings: Top 500"
    },
    {
      name: "Dehradun Institute of Technology University",
      location: "Dehradun, India",
      image: "https://www.dituniversity.edu.in/uploads/album/1697633898_a50fb86d864091b23666.webp",
      ranking: "Leading Research University"
    },
    {
      name: "Lovely Professional University",
      location: "Jalandhar, India",
      image: "https://distanceeducation360.com/wp-content/uploads/2017/05/Lovely-Professional-University.jpg",
      ranking: "Leading Research University"
    },
    {
      name: "SRM University",
      location: "Multiple Locations",
      image: "https://mdmsenquiry.com/wp-content/uploads/2017/09/srm-university.jpg",
      ranking: "Leading Research University"
    },
    {
      name: "Symboisis University",
      location: "Multiple Locations",
      image: "https://www.symbiosis.ac.in/images/about-us/Symbiosis-International-University.jpg",
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