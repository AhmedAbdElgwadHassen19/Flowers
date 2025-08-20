import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import flower13 from "../assets/images/13.jpg";
import flower14 from "../assets/images/14.jpg";

export default function FlowerExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <span className="text-green-600 text-xs font-semibold uppercase mb-3 inline-block">
            Our Flowers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Experience the Beauty of Fresh Flowers
          </h2>
          <p className="text-gray-600 mb-8">
            Discover the elegance and charm of our fresh flower arrangements,
            carefully crafted to brighten your day and special moments.
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Fresh Seasonal Bouquets",
              "Custom Floral Designs",
              "Eco-friendly Packaging",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-green-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Explore Our Flowers
          </button>
        </div>

        <div className="relative flex justify-center" data-aos="fade-left">
          <div className="relative w-full max-w-sm">
            <img
              src={flower13}
              alt="Flower Bouquet"
              className="rounded-lg shadow-md w-full h-64 sm:h-72 md:h-80 object-cover"
            />
            <img
              src={flower14}
              alt="Flower Arrangement"
              className="rounded-lg shadow-md w-32 sm:w-36 md:w-40 h-44 sm:h-52 md:h-56 object-cover absolute -top-6 -right-6"
            />
            <div className="absolute -bottom-6 left-4 bg-white rounded-lg p-3 shadow-md flex items-center gap-2">
              <span className="text-sm font-semibold">Happy Clients</span>
              <div className="flex -space-x-2">
                {[10, 11, 12, 13, 14].map((num) => (
                  <img
                    key={num}
                    src={`https://randomuser.me/api/portraits/thumb/women/${num}.jpg`}
                    alt="client"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
