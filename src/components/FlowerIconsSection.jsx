export default function FlowerIconsSection() {
  const icons = [
    { src: "🌹", label: "Roses" },
    { src: "🌷", label: "Tulips" },
    { src: "🌼", label: "Daisies" },
    { src: "🌻", label: "Sunflowers" },
    { src: "💐", label: "Bouquets" },
    { src: "🌸", label: "Cherry Blossom" },
  ];

  return (
    <section className="py-16 bg-white text-center px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {icons.map(({ src, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-gray-500 hover:text-green-600 transition duration-300"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl">{src}</div>
            <span className="text-sm sm:text-base mt-3 font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
