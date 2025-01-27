import Image from "next/image";

const useCases = [
  {
    icon: "/motorwed.png",
    title: "Advanced safeguards prevent motor winding failures, enhancing durability and minimizing maintenance costs.",
  },
  {
    icon: "/fphone.png",
    title: "Easily control your motor from anywhere with mobile connectivity, adding convenience and flexibility to your farming tasks.",
  },
  {
    icon: "/fmsg.png",
    title: "Stay informed with real-time message alerts directly on your mobile device, notifying you about the motor's status, power issues, or any operational updates.",
  },
  {
    icon: "/elepol.png",
    title: "Built-in safety measures protect users from electric shocks, ensuring a safe and secure farming environment.",
  },
  // {
  //   icon: "/output-onlinepngtools (8).png",
  //   title: "Control Lighting Easily Through the Mobile Phone",
  // },
  {
    icon: "/guat.png",
    title: "Enjoy worry-free usage with a 1-year guarantee, ensuring quality, reliability, and customer satisfaction.",
  },
  {
    icon: "/servicegirl.png",
    title: "24/7 Service support ensures your calls are never missed, and any issues are resolved promptly, keeping your farming uninterrupted.",
  },
  {
    icon: "/coste.png",
    title: "Effectively reduces energy consumption and manual work, offering significant savings and ease of use for farmers.",
  },
  {
    icon: "/timee.png",
    title: "Automated operations reduce manual intervention, helping you focus on other important tasks while saving time.",
  },
  {
    icon: "/agwa.png",
    title: "Easily program the timer to control water flow in your farm, ensuring optimal irrigation for up to your desired duration.",
  },
  {
    icon: "/bestp.png",
    title: "Get exceptional value with a product designed to deliver top-notch performance at an affordable price, perfect for every farmer.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Use Cases List */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover: bg-opacity-20 backdrop-blur-md hover:bg-yellow-700"
            >
              <div className="w-20 h-20 flex-shrink-0 relative">
                {/* Icon Animation */}
                <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-0 blur-lg group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                <Image
                  src={useCase.icon}
                  alt={useCase.title}
                  width={120}
                  height={120}
                  className="object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>

              {/* Title with Animation */}
              <div className="flex flex-col justify-center">
                <p className="text-black text-base font-medium leading-relaxed group-hover:text-white group-hover:translate-x-1 group-hover:transition-all group-hover:duration-300">
                  {useCase.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: GIF Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/FEATURES (6).gif" // Replace with the correct GIF path
            alt="Product Demo"
            width={500}
            height={500}
            // className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
