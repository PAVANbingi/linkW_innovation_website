"use client";
//import Link from "next/link";

const productFeatures = [
  {
    title: "Functionality of Kisan Mithraa Mobile Starter: ",
    description: `The Kisan Mithraa Mobile  Starter revolutionizes farm operations with its seamless functionality. Farmers can operate motors through multiple modes—App, SMS, or IVRS—offering unmatched convenience and flexibility. Advanced features like motor status confirmation, transformer power alerts, and fuse protection ensure that you stay informed about your farm’s operations in real-time. The device also incorporates voltage safeguards and dry run detection to protect your motor from potential damage, making it a reliable partner for sustainable and efficient farming.`,
    youtubeUrl: "https://www.youtube.com/embed/iqHtS7Z1zEk?si=RIsK3fGgbLZVOHs7",
  },
  {
    title: "Installation of Kisan Mithraa Mobile Starter: ",
    description: `Installing the Kisan Mithraa Mobile  Starter is quick and straightforward, requiring minimal technical expertise. The compact device is designed for easy integration with existing motor systems, whether for a single motor or multiple motors and valves in the field. The included user manual and customer support ensure smooth setup and operation, allowing farmers to get started without delays. Within a few simple steps, the system will be operational, empowering you to take control of your farm with ease.`,
    youtubeUrl: "https://www.youtube.com/embed/fnHj-Nd_ORI?si=Uf5UCf1_St9jpWif",
  },
  {
    title: "Features of Kisan Mithraa Mobile Starter:",
    description: `Built to withstand harsh farming conditions, the Kisan Mithraa Mobile  Starter is engineered for durability and long life. Its robust design and advanced components ensure consistent performance over years of use. The product’s lifecycle is further enhanced by automatic software updates delivered over the internet, keeping the system up-to-date with the latest features and improvements. With minimal maintenance requirements, this device offers a cost-effective and reliable solution for modern farming needs.`,
    youtubeUrl: "https://www.youtube.com/embed/N9mOgxyFVzY?si=eJclczI5WGO2TL12",
  },
  {
    title: "Durability and Lifecycle of Kisan Mithraa Mobile Starter:",
    description: `The Kisan Mithraa Mobile Starter combines advanced features to deliver exceptional motor management, ensuring durability and a prolonged lifecycle. Its overload protection safeguards motors from excessive current, reducing maintenance costs and extending lifespan. High/low voltage detection continuously monitors power levels, automatically halting operation during unsafe fluctuations to protect motors and connected devices. Dry run prevention stops the motor during water flow interruptions, preventing overheating and damage. Additionally, a wire cut alert ensures timely intervention to avoid downtime or further issues. Together, these intelligent features guarantee seamless operation, enhanced safety, and optimal efficiency, making it a reliable choice for modern agricultural and industrial applications.`,
    youtubeUrl: "https://www.youtube.com/embed/qDwPcJSiRPU?si=U0L9H8DjZtFCQTc3",
  },
];

export default function ProductFeatures() {
  return (
    <section className="bg-slate-950 py-8">
      <div className="container mx-auto px-6 lg:px-16 space-y-12">
        <h2 className="text-4xl sm:text-6xl hover:text-rose-600 font-bold mb-6 text-white text-center">
        Unlock Smarter Farming with Kisan Mithraa
        </h2>
        {productFeatures.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-white mb-4 hover:text-rose-600 ">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {feature.description}
              </p>
              {/* <Link href="/contact">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all">
                  Connect with Us
                </button>
              </Link> */}
            </div>

            {/* Right Side - YouTube Video */}
            <div className="lg:w-1/2">
              <div className="relative w-full max-w-md h-64 mx-auto lg:mx-0">
                <iframe
                  src={feature.youtubeUrl}
                  title={`Feature Video - ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
