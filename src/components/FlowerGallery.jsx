import galleryImg from "../assets/images/18.jpg";

export default function FlowerGallery() {
  return (
    <section className="relative w-full">
      <div className="relative">
        <img
          src={galleryImg}
          alt="Flower Gallery"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white py-4 px-6 rounded-full shadow-lg text-center max-w-xs">
            <span className="text-green-700 font-semibold text-base sm:text-lg md:text-xl">
              Explore Our Flowers World
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
