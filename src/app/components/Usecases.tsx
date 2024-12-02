import Image from "next/image";

const useCases = [
    {
      icon: "/mobile_app.png",
      title: "Track Utilization & Access Detailed Reports via Mobile App",
    },
    {
      icon: "/theft_alert.png",
      title: "Real-Time Theft Alerts for Enhanced Security",
    },
    {
      icon: "/safegaurds.png",
      title: "Protects Motors from Voltage Fluctuations & Dry Runs",
    },
    {
      icon: "/support.png",
      title: "Available in Multiple Indian Languages",
    },
    {
      icon: "/light.png",
      title: "Control Lighting Easily Through the Mobile App",
    },
    {
      icon: "/electric-shocks.png",
      title: "Ensures Safety by Preventing Electric Shocks",
    },
    {
      icon: "/sim_cost.png",
      title: "Reduces SIM Costs by Up to 60%",
    },
    {
      icon: "/save_time.png",
      title: "Optimized to Save Time and Effort",
    },
    {
      icon: "/motor_control.png",
      title: "Control Motor via Call, SMS, or Mobile App",
    },
    {
      icon: "/rank.png",
      title: "1-Year Warranty with Comprehensive Support Services",
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
              className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={useCase.icon}
                  alt={useCase.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-base font-medium leading-relaxed">
                {useCase.title}
              </p>
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
