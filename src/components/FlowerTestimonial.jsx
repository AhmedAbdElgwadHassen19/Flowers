import flower14 from "../assets/images/14.jpg";
import flower15 from "../assets/images/15.jpg";

export default function FlowerTestimonial() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white">
      <div className="relative md:w-1/2 w-full">
        <img
          src={flower14}
          alt="Flower Shop Interior"
          className="rounded-xl w-full h-72 md:h-96 object-cover shadow-md"
        />
        <img
          src={flower15}
          alt="Flower Garden"
          className="absolute bottom-4 right-4 w-32 sm:w-40 h-24 sm:h-28 object-cover rounded-lg shadow-lg border-4 border-white"
        />
      </div>

      <div className="md:w-1/2 w-full">
        <span className="text-green-600 text-xs font-semibold uppercase mb-3 inline-block">
          Testimonial
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
          Wonderful Words from Our Clients
        </h2>

        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
          <div className="text-yellow-400 mb-3 text-lg">★★★★★</div>
          <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
            "I ordered a bouquet for my anniversary, and it was absolutely stunning! 
            Fresh, fragrant, and beautifully arranged. Highly recommend FlowerLand!"
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2023/03/02/19/11/woman-7826139_960_720.jpg"
              alt="Client"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Sara Bloom</p>
              <p className="text-xs text-gray-500">Flower Lover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
