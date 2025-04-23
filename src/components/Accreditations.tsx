import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';

const Accreditations = () => {
  const accreditations = [
    {
      name: "WHO",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "World Health Organization Recognition"
    },
    {
      name: "MCI",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Medical Council of India Approved"
    },
    {
      name: "UGC",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "University Grants Commission Certified"
    },
    {
      name: "NAAC",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "National Assessment and Accreditation Council"
    },
    {
      name: "WFME",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "World Federation for Medical Education"
    },
    {
      name: "ECFMG",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Educational Commission for Foreign Medical Graduates"
    },
    {
      name: "IMED",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "International Medical Education Directory"
    },
    {
      name: "FAIMER",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Foundation for Advancement of International Medical Education and Research"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Accreditations</h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mb-12"
        >
          {accreditations.map((accreditation, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-rose-100 dark:border-rose-900">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{accreditation.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {accreditation.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;