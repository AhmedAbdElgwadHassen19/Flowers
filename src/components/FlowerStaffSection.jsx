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
    <section className="py-16 bg-green-600">
      <div className="text-center text-white mb-12">
        <span className="text-sm uppercase tracking-wider font-semibold">Flower Staff</span>
        <h2 className="text-3xl font-bold mt-2">Meet Our Expert Florists</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {staffData.map(({ name, role, img }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow text-center overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
