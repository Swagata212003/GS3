


export default function Technologies() {
  const techs = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      title: "Docker",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      title: "PostgreSQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      title: "GitHub",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb] text-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Technologies We Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={tech.src}
                alt={tech.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#3b82f6]">
                {tech.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
