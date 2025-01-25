import Image from "next/image";

const warrantyItems = [
  {
    icon: "/output-onlinepngtools (20).png", // Replace with the path to your "2 Years Warranty" icon
    title: "1 Year Guarantee ",
  },
  {
    icon: "/output-onlinepngtools (22).png", // Replace with the path to your "Assurance of Safety" icon
    title: "Assurance of Safety",
  },
  // {
  //   icon: "/w3.png", // Replace with the path to your "Free Home Service" icon
  //   title: "Free Home Service",
  // },
  {
    icon: "/output-onlinepngtools (21).png", // Replace with the path to your "Free Home Service" icon
    title: "Made in india",
  },
];

export default function Warranty() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {warrantyItems.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center text-yellow-600"
            >
              {/* Icon */}
              <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-yellow-600 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-yellow-700">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
