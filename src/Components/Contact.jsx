


export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-[#312e81] via-[#7c3aed] to-[#312e81] text-white"
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded text-gray-900"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded text-gray-900"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded text-gray-900"
          ></textarea>
          <button
            type="submit"
            className="bg-[#facc15] hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded shadow transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
