import { motion } from "framer-motion";

const features = [
  {
    title: "Fast & Easy Scanning",
    desc: "Scan meals instantly with camera recognition",
    img: "/scan.jpg",
  },
  {
    title: "Personalized Insights",
    desc: "Get tailored health data and analytics",
    img: "/insights.jpg",
  },
  {
    title: "AI & Science Powered",
    desc: "Smart recommendations backed by AI",
    img: "/ai.jpg",
  },
  {
    title: "Comprehensive Tracking",
    desc: "Track calories, activity, and progress",
    img: "/tracking.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-24 py-32 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-4xl font-semibold mb-3 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 
        bg-clip-text text-transparent inline-block">
          Why Vitalis AI is Different
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-12 max-w-xl mx-auto">
          Powerful AI tools designed for real-life health needs
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 
              shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
              </div>

              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}