
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
    <section className="py-20 bg-white text-center">
      <div className="flex justify-center gap-16 flex-wrap max-w-6xl mx-auto">
        {icons.map(({ src, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-gray-500 hover:text-green-600 transition duration-300"
          >
            <div className="text-[80px] grayscale">{src}</div> {/* تكبير + أبيض وأسود */}
            <span className="text-base mt-4 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
