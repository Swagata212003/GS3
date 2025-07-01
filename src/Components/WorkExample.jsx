


export default function WorkExample() {
  const works = [
    {
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Enterprise App",
      desc: "A global solution for enterprise clients.",
    },
    {
      img: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Analytics Dashboard",
      desc: "Visual insights for business data.",
    },
  ];

  return (
    <section
      id="work"
      className="py-20 bg-gradient-to-r from-[#312e81] via-[#7c3aed] to-[#312e81] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {works.map((w, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#facc15] mb-2">
                  {w.title}
                </h3>
                <p className="text-gray-200">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





