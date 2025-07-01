


import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#111827] text-white shadow"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-3xl font-extrabold tracking-wide">GS3</div>

        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="hover:text-gray-300 transition">Services</a>
          <a href="#work" className="hover:text-gray-300 transition">Projects</a>
          <a href="#team" className="hover:text-gray-300 transition">Team</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden px-4 pb-4 space-y-2"
        >
          <a href="#services" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300">Services</a>
          <a href="#work" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300">Projects</a>
          <a href="#team" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300">Team</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-white hover:text-gray-300">Contact</a>
        </motion.div>
      )}
    </motion.header>
  );
}
