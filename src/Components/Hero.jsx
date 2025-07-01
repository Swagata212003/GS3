

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#312e81] via-[#7c3aed] to-[#312e81] text-white py-24 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Empowering Global Businesses
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-lg mx-auto lg:mx-0">
            GS3 partners with enterprises to deliver cutting-edge technology solutions that scale.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#facc15] hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded shadow transition"
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Corporate Team"
            className="rounded shadow w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
