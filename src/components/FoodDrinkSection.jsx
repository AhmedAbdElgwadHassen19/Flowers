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
    <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white">
      <div className="md:w-1/2" data-aos="fade-right">
        <span className="text-green-600 text-xs font-semibold uppercase mb-3 inline-block">
          OUR FLOWERS
        </span>
        <h2 className="text-3xl font-bold mb-6">
          Experience the Beauty of Fresh Flowers
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Discover the elegance and charm of our fresh flower arrangements, carefully crafted to brighten your day and special moments.
        </p>
        <ul className="space-y-4 text-gray-700 max-w-md">
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
        <button className="mt-8 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          Explore Our Flowers
        </button>
      </div>

      <div className="md:w-1/2 relative max-w-md mx-auto" data-aos="fade-left">
        <img
          src={flower13}
          alt="Flower Bouquet"
          className="rounded-lg shadow-md w-full h-64 object-cover"
        />
        <img
          src={flower14}
          alt="Flower Arrangement"
          className="rounded-lg shadow-md w-40 h-56 object-cover absolute top-0 right-0 translate-x-8"
        />
        <div className="absolute bottom-0 left-0 bg-white rounded-lg p-2 shadow-md flex items-center gap-2">
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
    </section>
  );
}
