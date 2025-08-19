import React from "react";
import img1 from "../assets/images/20.jpg";
import img2 from "../assets/images/22.jpg";
import img3 from "../assets/images/23.jpg";
import img4 from "../assets/images/24.jpg";

export default function ImageGallery() {
  const images = [img1, img2, img3, img4];

  return (
    <section className="py-12 px-4 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Explore Our Flower Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={src}
                alt={`Flower ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
