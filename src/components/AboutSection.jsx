import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import flowerImg22 from "../assets/images/22.jpg";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-green-50 py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* Left Side - Flower Image */}
        <div
          data-aos="fade-right"
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={flowerImg22}
            alt="Beautiful Flowers"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white border-4 border-green-600 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-[11px] font-bold text-green-700 text-center leading-tight px-2">
              30 YEARS OF FLOWERS
            </span>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="bg-white rounded-xl p-8 lg:p-10 shadow-xl text-gray-900 mb-40"
        >
          <span className="text-xs uppercase font-semibold text-green-600 mb-2 block">
            About Our Flowers
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6 text-gray-800">
            Fresh & Premium Flowers For Every Occasion
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We provide a wide range of fresh flowers perfect for weddings,
            birthdays, anniversaries and all special moments. Our flowers are
            handpicked to bring beauty and fragrance into your life.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-gray-700">
            {[
              "Same-Day Flower Delivery",
              "Fragrant & Fresh Bouquets",
              "Custom Floral Arrangements",
              "Over 30 Years of Experience",
              "Affordable Packages",
              "Seasonal & Rare Flowers",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 w-full z-0 space-y-2">
        <div className="rotate-[-4deg] bg-green-600 text-white py-3 px-6 text-sm md:text-lg font-bold tracking-wider flex flex-wrap justify-center shadow-md gap-4 md:gap-12">
          <span>Fresh Roses</span>
          <span>Seasonal Flower Boxes</span>
          <span>Wedding Bouquets</span>
        </div>
        <div className="rotate-[5deg] bg-black text-white py-3 px-6 text-sm md:text-lg font-bold tracking-wider flex flex-wrap justify-center shadow-md gap-4 md:gap-12">
          <span>Elegant Tulips</span>
          <span>Orchid Specials</span>
          <span>Luxury Floral Gifts</span>
        </div>
      </div>
    </section>
  );
}
