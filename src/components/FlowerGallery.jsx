import galleryImg from "../assets/images/18.jpg"; 

export default function FlowerGallery() {
  return (
    <section className="relative">
      <div className="relative">
        <img
          src={galleryImg}
          alt="Flower Gallery"
          className="w-full h-[500px] object-cover filter brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <span className="text-green-700 font-semibold">
              Explore Our Flowers World
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
