import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-between gap-6 mx-8 p-10 bg-amber-50 rounded-3xl">

      {/* Left Side */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-black leading-tight mb-5">
          Find trusted professionals
          <br />
          for any home service
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          From cleaning to repairs, book verified experts in your area at
          transparent prices.
        </p>

        <div className="flex bg-[#f6eade] p-2 rounded-xl shadow-md max-w-lg">

          <input
            type="text"
            placeholder="What services do you need?"
            className="flex-1 border-r border-gray-200 outline-none px-3 py-2 text-sm bg-transparent"
          />

          <input
            type="text"
            placeholder="Location"
            className="flex-1 outline-none px-3 py-2 text-sm bg-transparent"
          />

          <button className="bg-[#312a7d] text-white px-5 py-2 rounded-lg text-sm">
            Search
          </button>

        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/3">
       <Image
  src="https://tse4.mm.bing.net/th/id/OIP.k_iUFAw2YEQ87XbngYyd-wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  alt="Home Service"
  width={500}
  height={400}
  priority
  className="w-full h-80 object-cover rounded-2xl"
/>
      </div>

    </section>
  );
}