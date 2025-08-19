import { motion } from "framer-motion";
import Flower22 from "../assets/images/22.jpg"; 
export default function Hero() {
  return (
    <section className="relative w-full h-screen text-white">
      <div className="absolute inset-0">
        <img
          src={Flower22} 
          alt="Luxury Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Delivering Happiness <span className="text-yellow-400"> with Every Bloom</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4 max-w-2xl text-gray-200"
        >
          Discover the beauty of fresh flowers crafted with love for every occasion.
        </motion.p>

        <div className="mt-6 flex space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg">
                Shop Now
          </button>
          <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg">
            Our Collections
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="absolute bottom-8 w-[90%] md:w-auto bg-green-700/90 p-4 md:p-6 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-6 gap-3 text-gray-800"
        >
          <input type="date" className="px-3 py-2 rounded-md" />
          <input type="date" className="px-3 py-2 rounded-md" />
          <select className="px-3 py-2 rounded-md">
            <option>Room 1</option>
          </select>
          <select className="px-3 py-2 rounded-md">
            <option>Adults</option>
          </select>
          <select className="px-3 py-2 rounded-md">
            <option>Children</option>
          </select>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md">
            Check Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
