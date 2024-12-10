import Image from "next/image";

const useCases = [
  {
    icon: "/mobileTrack.png",
    title: "Track Utilization of motor & Access Detailed Reports via Mobile Phone",
  },
  // {
  //   icon: "/msg_alert.png",
  //   title: "Real-Time Theft Alerts for Enhanced Security",
  // },
  {
    icon: "/verified_Icon.png",
    title: "Protects Motors from Voltage Fluctuations & Dry Runs",
  },
  {
    icon: "/serviceIcon.png",
    title: "Available in Multiple Indian Languages",
  },
  {
    icon: "/lightIcon.png",
    title: "Control Lighting Easily Through the Mobile Phone",
  },
  {
    icon: "/safetyIcon.png",
    title: "Ensures Safety by Preventing Electric Shocks",
  },
  {
    icon: "/coinCost.png",
    title: "Cost-efficient and delivers exceptional value for money.",
  },
  {
    icon: "/saveTime.png",
    title: "Optimized to Save Time and Effort",
  },
  {
    icon: "/mobileControl.png",
    title: "Control Motor via Call, SMS, or Mobile Phone",
  },
  {
    icon: "/warrentyIcon.png",
    title: "1-Year Warranty with Comprehensive Support Services",
  },
];

export default function UseCases() {
  return (
    <section className="bg-slate-950 py-12">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Use Cases List */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-gray-700"
            >
              <div className="w-12 h-12 flex-shrink-0 relative">
                {/* Icon Animation */}
                <div className="absolute inset-0 bg-rose-600 rounded-full opacity-0 blur-lg group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                <Image
                  src={useCase.icon}
                  alt={useCase.title}
                  width={48}
                  height={48}
                  className="object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>

              {/* Title with Animation */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 text-base font-medium leading-relaxed group-hover:text-rose-600 group-hover:translate-x-1 group-hover:transition-all group-hover:duration-300">
                  {useCase.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: GIF Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/linkW_motor.gif" // Replace with the correct GIF path
            alt="Product Demo"
            width={500}
            height={500}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
