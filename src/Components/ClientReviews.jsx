


import { FaStar } from "react-icons/fa";

export default function ClientReviews() {
  const reviews = [
    {
      name: "John Doe",
      feedback: "GS3 transformed our digital strategy. Truly professional team!",
    },
    {
      name: "Jane Smith",
      feedback: "Reliable, innovative, and fast. Highly recommended for enterprises.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb] text-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Client Reviews</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded shadow hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4 text-[#facc15]">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-700 mb-4 italic">“{r.feedback}”</p>
              <h3 className="font-bold text-lg">{r.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





