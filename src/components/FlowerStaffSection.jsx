const staffData = [
  {
    name: "Layla Noor",
    role: "Bouquet Designer",
    img: "https://cdn.pixabay.com/photo/2023/03/02/19/11/woman-7826139_960_720.jpg",
  },
  {
    name: "Yousef Nabil",
    role: "Arrangement Expert",
    img: "https://cdn.pixabay.com/photo/2024/01/10/16/22/man-8499961_1280.jpg",
  },
  {
    name: "Sara Adel",
    role: "Packaging Specialist",
    img: "https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg",
  },
  {
    name: "Khaled Hassan",
    role: "Customer Care",
    img: "https://cdn.pixabay.com/photo/2015/01/13/13/20/guy-598180_1280.jpg",
  },
];

export default function FlowerStaffSection() {
  return (
    <section className="py-16 px-6 bg-green-600">
      <div className="text-center text-white mb-12 max-w-2xl mx-auto">
        <span className="text-sm uppercase tracking-wider font-semibold">
          Flower Staff
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-snug">
          Meet Our Expert Florists
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {staffData.map(({ name, role, img }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow text-center overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-60 sm:h-64 md:h-72 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500 mt-1">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
