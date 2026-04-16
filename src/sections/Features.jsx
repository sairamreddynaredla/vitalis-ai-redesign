import {
  CheckCircle,
  ShoppingCart,
  AlertTriangle,
  Utensils,
  Clock,
  Bell,
} from "lucide-react";

import foodImg from "../assets/food.jpg";
import medicalImg from "../assets/medical.jpg";

export default function FeatureSection() {
  return (
    <section id="features" className="scroll-mt-24 px-6 py-20 bg-gradient-to-b from-[#eef3ea] to-[#f7f5f2]">
      {/* ===================== HEADER ===================== */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        
        {/* Section Badge */}
        <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
          Features
        </div>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Everything you need to manage your health
        </h2>

        {/* Section Description */}
        <p className="mt-4 text-gray-500">
          Scan food, plan meals, track habits, and understand your body — all powered by AI.
        </p>
      </div>

      {/* ===================== FEATURE HIGHLIGHT (FOOD SCANNER) ===================== */}
      <div className="max-w-6xl mx-auto mb-20 grid items-center gap-10 p-8 md:p-12 bg-white rounded-3xl shadow-md md:grid-cols-2">
        
        {/* Content */}
        <div>
          <h3 className="mb-4 text-3xl font-semibold text-gray-800">
            Snap your meal. <br /> Know everything.
          </h3>

          <p className="mb-6 text-gray-500">
            Take a photo of your food and instantly get calories, protein, carbs,
            and nutrition insights — no typing needed.
          </p>

          {/* Feature List */}
          <ul className="space-y-3">
            {[
              "Instant calorie detection",
              "Portion size estimation",
              "Smart nutrition insights",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={foodImg}
            alt="Food Scanner"
            className="w-[280px] md:w-[320px] rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* ===================== FEATURE GRID ===================== */}
      <div className="max-w-6xl mx-auto mb-20 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Meal Planner",
            icon: <Utensils className="text-green-600" />,
          },
          {
            title: "Grocery Scanner",
            icon: <ShoppingCart className="text-green-600" />,
          },
          {
            title: "Food Risk Scanner",
            icon: <AlertTriangle className="text-yellow-500" />,
          },
          {
            title: "AI Menu Analyzer",
            icon: <Utensils className="text-green-600" />,
          },
          {
            title: "Intermittent Fasting",
            icon: <Clock className="text-green-600" />,
          },
          {
            title: "Smart Reminders",
            icon: <Bell className="text-green-600" />,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 transition bg-white rounded-2xl shadow-sm hover:shadow-md"
          >
            <div className="mb-3">{feature.icon}</div>

            <h4 className="mb-1 text-lg font-semibold text-gray-800">
              {feature.title}
            </h4>

            <p className="text-sm text-gray-500">
              AI-powered feature to improve your health tracking experience.
            </p>
          </div>
        ))}
      </div>

      {/* ===================== MEDICAL ANALYZER ===================== */}
      <div className="max-w-6xl mx-auto grid items-center gap-10 p-8 md:p-12 bg-white rounded-3xl shadow-md md:grid-cols-2">
        
        {/* Content */}
        <div>
          <h3 className="mb-4 text-3xl font-semibold text-gray-800">
            Medical Analyzer
          </h3>

          <p className="text-gray-500">
            Scan doctor prescriptions and get simple explanations in your language.
            No confusion. Just clarity.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={medicalImg}
            alt="Medical Analyzer"
            className="w-[280px] md:w-[320px] rounded-2xl shadow-lg"
          />
        </div>
      </div>

    </section>
  );
}