export default function FlowerServices() {
  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase text-green-600 font-semibold tracking-wide">
            Flower Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Get The Best Flower Arranging Services
          </h2>
          <p className="text-gray-600 mb-6">
            Discover beautifully curated flower arrangements, custom bouquets,
            and seasonal floral decor crafted with passion and elegance.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Custom Bouquets",
              desc: "Tailored flower sets for any occasion with personal touch.",
              icon: "💐",
              active: true,
            },
            {
              title: "Floral Decor",
              desc: "Event and venue decoration with vibrant floral designs.",
              icon: "🌸",
            },
            {
              title: "Gift Wrapping",
              desc: "Elegant wrapping and presentation for your bouquets.",
              icon: "🎁",
            },
            {
              title: "Flower Subscriptions",
              desc: "Weekly fresh flowers delivered to your door.",
              icon: "📦",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md transition-all ${
                card.active
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500">
        Call us Today: (123) 456-7890 &nbsp; OR &nbsp; Email: info@flowershop.com
      </div>
    </section>
  );
}
