





export default function Team() {
  const team = [
    {
      name: "Alice Johnson",
      role: "CEO",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Bob Williams",
      role: "CTO",
      img: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Sarah Brown",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "David Lee",
      role: "Lead Designer",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Emma Davis",
      role: "Marketing Head",
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "John Smith",
      role: "Backend Engineer",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="team" className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#312e81]">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={t.img}
                alt={t.name}
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#312e81]">{t.name}</h3>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
