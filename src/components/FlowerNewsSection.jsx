import { flowerNews } from "../data/flowerNewsData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FlowerNewsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="text-center mb-12">
        <span className="text-green-600 uppercase text-xs font-semibold">
          Flower News
        </span>
        <h2 className="text-3xl font-bold mt-2">
          Get The Latest Floral Updates
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {flowerNews.map(({ category, date, author, title, desc, img }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition duration-300"
            data-aos="fade-up"
          >
            <div className="overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                {category}
              </span>
              <div className="text-xs text-gray-500 mt-2 mb-3 flex items-center gap-2">
                <span>{date}</span> | <span>{author}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{desc}</p>
              <button className="text-green-600 font-semibold hover:underline text-sm">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
