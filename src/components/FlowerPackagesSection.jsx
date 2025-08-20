import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import flowerPackages from "../data/flowerPackages";

export default function FlowerPackagesSlider() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-gray-100">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">
        Discover Our Premium Floral Packages
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },       
          640: { slidesPerView: 2 },     
          1024: { slidesPerView: 3 },    
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-7xl mx-auto"
      >
        {flowerPackages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-green-600 font-semibold mb-2">
                  {item.size} · {item.flowers}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Beautifully arranged fresh flowers, perfect for any occasion.
                </p>
                <div className="text-yellow-500 font-semibold mb-3">
                  {item.price}
                </div>
                <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
