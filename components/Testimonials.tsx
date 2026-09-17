import Image from "next/image";

const testimonials = [
  {
    name: "Sophia Moore",
    role: "CEO at Mark Time",
    image:
      "https://tse1.explicit.bing.net/th/id/OIP.yAU_NOgkXBwmme4A3dEjaAHaHv?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Adam Smith",
    role: "Webflow Developer",
    image:
      "https://th.bing.com/th/id/OIP.LGUmUpJKXgkLewB-C6nawAHaH_?w=153&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    name: "Mike Warren",
    role: "Developer at BRIX Templates",
    image:
      "https://th.bing.com/th/id/OIP.9_MptOLxjJEGSGukPt9FWQHaHa?w=198&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-amber-50 rounded-3xl mx-8 my-5 px-8 py-16"
      id="reviews"
    >
      <h2 className="text-3xl font-bold mb-2">
        Trusted by thousands
      </h2>

      <p className="text-gray-500 mb-8">
        See what our customers have to say about their experience
      </p>

      <div className="flex flex-col md:flex-row gap-5">
        {testimonials.map((person, index) => (
          <div
            key={index}
            className="bg-white flex-1 p-8 rounded-2xl"
          >
            <h3 className="font-semibold mb-4">
              "The best service ever"
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex items-center gap-3">
              <Image
                src={person.image}
                alt={person.name}
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10"
              />

              <div>
                <h4 className="text-sm font-medium">
                  {person.name}
                </h4>

                <span className="text-xs text-gray-500">
                  {person.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}