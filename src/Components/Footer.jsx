

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] text-gray-400 py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GS3. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
