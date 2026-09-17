const services = [
  {
    icon: "🧹",
    title: "Home Cleaning",
    description: "Choose from our wide range of verified services",
    price: "₹499",
  },
  {
    icon: "🔧",
    title: "Plumbing",
    description: "Professional plumbing repair and installation",
    price: "₹499",
  },
  {
    icon: "⚡",
    title: "Electrical",
    description: "Expert electrical repair services",
    price: "₹499",
  },
  {
    icon: "🎨",
    title: "Painting",
    description: "Interior & exterior painting services",
    price: "₹499",
  },
  {
    icon: "🪵",
    title: "Carpentry",
    description: "Furniture, doors & custom woodwork",
    price: "₹499",
  },
  {
    icon: "❄️",
    title: "AC & Appliance",
    description: "Repair & maintenance services",
    price: "₹499",
  },
];

export default function Services() {
  return (
    <section className="px-8 py-16" id="services">

      <h2 className="text-3xl font-bold mb-2">
        Popular Services
      </h2>

      <p className="text-gray-500 mb-8">
        Choose from our wide range of verified services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <div className="text-2xl bg-orange-50 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
              {service.icon}
            </div>

            <h3 className="font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-700 text-sm mb-4">
              {service.description}
            </p>

            <p className="text-gray-600 text-sm mb-5">
              ⭐ 4.8 (3,240)
            </p>

            <div className="flex justify-between items-center">
              <span>
                From <b>{service.price}</b>
              </span>

              <button className="bg-[#312a7d] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#231d5c] transition">
                Book Now
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}