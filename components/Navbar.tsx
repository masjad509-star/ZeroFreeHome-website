export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-5">
      <div className="font-bold text-lg">
        ZeroFee Homes
      </div>

      <nav className="flex gap-6">
        <a href="#services" className="text-gray-600 text-sm hover:text-black">
          Services
        </a>

        <a href="#about" className="text-gray-600 text-sm hover:text-black">
          About
        </a>

        <a href="#reviews" className="text-gray-600 text-sm hover:text-black">
          Reviews
        </a>
      </nav>

      <div className="flex items-center gap-5">
        <button className="text-gray-800 text-sm">
          Sign In
        </button>

        <button className="bg-[#312a7d] text-white px-5 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </header>
  );
}