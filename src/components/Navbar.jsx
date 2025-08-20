import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-xl font-bold text-black ">🌸Flowers</span>

        <ul className="hidden md:flex space-x-8 text-black  font-bold">
          {["Home", "Pages", "Flowers", "Blog", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button className="text-white hidden md:block">
            <Search size={22} />
          </button>

          <button
            className="text-black md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-md shadow-md hidden md:block">
            Order Now →
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 absolute top-16 left-0 w-full">
          {["Home", "Pages", "Flowers", "Blog", "Contact"].map((item) => (
            <div key={item} className="hover:text-yellow-400 cursor-pointer">
              {item}
            </div>
          ))}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-md shadow-md w-full">
            Order Now →
          </button>
        </div>
      )}
    </nav>
  );
}
