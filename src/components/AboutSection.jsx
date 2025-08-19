import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import flowerImg22 from "../assets/images/22.jpg";
import flowerImg23 from "../assets/images/23.jpg";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-green-50 py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 mb-25">
        <div
          data-aos="fade-right"
          className="md:w-1/2 relative rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={flowerImg22}
            alt="Flower Experience"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white border-4 border-green-600 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-[11px] font-bold text-green-700 text-center leading-tight px-2">
              30 YEARS OF EXPERIENCE
            </span>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="md:w-1/2 bg-white rounded-xl p-10 shadow-xl text-gray-900"
        >
          <span className="text-xs uppercase font-semibold text-green-600 mb-2 inline-block">
            About Fixyland
          </span>
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
            Premium Floral Arrangements Delivered Near You
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We offer a variety of fresh flowers tailored to every special
            moment, arranged with love by expert florists.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-700">
            {[
              "Same-Day Flower Delivery",
              "Fragrant & Fresh Bouquets",
              "Personalized Flower Designs",
              "Over 30 Years in Floral Artistry",
              "Affordable Packages for Every Occasion",
              "Free Event Flower Consultation",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <img
              src={flowerImg23}
              alt="CEO"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                Robert L. Robinson
              </h3>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 w-full z-0">
        <div className="rotate-[-4deg] bg-green-600 text-white py-3 px-6 text-lg font-bold tracking-wider flex gap-15 justify-center shadow-md">
          <span>Elegant Floral Gifts</span>
          <span>Seasonal Flower Boxes</span>
          <span>Holiday Flower Specials</span>
        </div>
        <div className="rotate-[5deg] bg-black text-white py-3 px-6 text-lg font-bold tracking-wider flex gap-12 justify-center shadow-md mt-2">
          <span>Elegant Floral Gifts</span>
          <span>Seasonal Flower Boxes</span>
          <span>Holiday Flower Specials</span>
        </div>
      </div>
    </section>
  );
}
