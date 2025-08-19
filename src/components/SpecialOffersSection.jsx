import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import flower15 from "../assets/images/15.jpg";
import flower16 from "../assets/images/16.jpg";

export default function FlowerSpecialOffersSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const offers = [
    {
      title: "Get 30% Off on Deluxe Flower Bouquets",
      discount: "30% OFF",
      img: flower15,
    },
    {
      title: "35% Discount on Seasonal Flower Arrangements",
      discount: "35% OFF",
      img: flower16,
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-green-50 rounded-lg">
      <span className="text-green-600 text-xs font-semibold uppercase mb-3 inline-block">
        SPECIAL OFFERS
      </span>
      <h2 className="text-3xl font-bold mb-12 text-center">
        Exclusive Discounts on Flower Packages
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {offers.map(({ title, discount, img }, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
              <span className="bg-green-600 px-2 py-1 rounded w-max mb-2 text-xs font-semibold">
                {discount}
              </span>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <button className="bg-white text-green-700 font-semibold px-4 py-2 rounded hover:bg-green-100 transition w-max flex items-center gap-2">
                Order Now <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
