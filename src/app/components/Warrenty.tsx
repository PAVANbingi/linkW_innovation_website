import Image from "next/image";

const warrantyItems = [
  {
    icon: "/w1.png", // Replace with the path to your "2 Years Warranty" icon
    title: "1 Years Warranty",
  },
  {
    icon: "/w2.png", // Replace with the path to your "Assurance of Safety" icon
    title: "Assurance of Safety",
  },
  {
    icon: "/w3.png", // Replace with the path to your "Free Home Service" icon
    title: "Free Home Service",
  },
];

export default function Warranty() {
  return (
    <section className="bg-blue-600 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {warrantyItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={58}
                  height={58}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
