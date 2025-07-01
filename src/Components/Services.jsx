
import {
  FaCloud,
  FaMobileAlt,
  FaLock,
  FaChartLine,
  FaRobot,
  FaLaptopCode,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCloud className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "Cloud Services",
      desc: "Modern cloud infrastructure & deployment.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "Mobile Development",
      desc: "iOS & Android enterprise apps.",
    },
    {
      icon: <FaLock className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "Cybersecurity",
      desc: "Securing digital assets globally.",
    },
    {
      icon: <FaChartLine className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "Analytics",
      desc: "Data-driven insights for growth.",
    },
    {
      icon: <FaRobot className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "AI Solutions",
      desc: "Intelligent systems and automation.",
    },
    {
      icon: <FaLaptopCode className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "Web Development",
      desc: "Responsive, high-performance websites.",
    },
    {
      icon: <FaTools className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "DevOps Consulting",
      desc: "Faster delivery with reliable pipelines.",
    },
    {
      icon: <FaHeadset className="text-5xl text-[#3b82f6] mx-auto" />,
      title: "IT Support",
      desc: "Reliable enterprise IT support.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#312e81]">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              {s.icon}
              <h3 className="mt-4 text-xl font-semibold text-[#312e81]">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




