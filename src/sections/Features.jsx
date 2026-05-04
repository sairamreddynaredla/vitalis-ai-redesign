import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import React from "react";
import snapMeal from "../assets/snap-meal-new.jpg";
import mealPlanner from "../assets/meal-planner-new.jpg";
import grocery from "../assets/grocery-new.jpg";
import expiry from "../assets/risk-new.jpg";
import menu from "../assets/menu-new.jpg";
import fasting from "../assets/fasting-new.jpg";

const features = [
  {
    tag: "Scan 🍽️",
    title: "Snap Your Meal",
    desc: "Take a photo of your plate and instantly get calories, macros, and smart eating guidance powered by AI.",
    points: [
      "Per-item calorie detection",
      "Smart eat/skip suggestions",
      "Full macro breakdown",
    ],
    image: snapMeal,
  },
  {
    tag: "AI Plan 🧠",
    title: "AI Meal Planner",
    desc: "Get fully personalized meal plans based on your goals like weight loss, muscle gain, or health conditions.",
    points: [
      "Goal-based planning",
      "Kitchen-first approach",
      "Daily meal optimization",
    ],
    image: mealPlanner,
  },
  {
    tag: "Scan 🛒",
    title: "AI Grocery Scanner",
    desc: "Scan product labels and instantly detect hidden sugars, additives, and get a complete health score.",
    points: [
      "500+ harmful compounds detection",
      "Hidden sugar analysis",
      "Health score (0–100)",
    ],
    image: grocery,
  },
  {
    tag: "Safety ⚠️",
    title: "Food Expiry & Risk Scanner",
    desc: "Detect spoilage, mold, and food quality issues using AI vision before you consume anything risky.",
    points: [
      "Mold & fungus detection",
      "Spoilage pattern analysis",
      "Safety verdict system",
    ],
    image: expiry,
  },
  {
    tag: "Analyze 📋",
    title: "AI Menu Analyzer",
    desc: "Upload menu or food photo and get the best eating plan with calories and health recommendations.",
    points: [
      "Menu upload or scan",
      "Health-based suggestions",
      "Calorie estimation",
    ],
    image: menu,
  },
  {
    tag: "Fast ⏱️",
    title: "Intermittent Fasting",
    desc: "Track fasting progress with live timers, autophagy phases, and AI-powered coaching.",
    points: [
      "Live countdown timer",
      "Autophagy tracking",
      "AI fasting coach",
    ],
    image: fasting,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-4 md:px-10 bg-[#eef7f2]">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold mb-3 tracking-wide text-sm">
          FEATURES
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Everything you need to{" "}
          <span className="text-black">manage</span>{" "}
          <span className="text-black">your health</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          From scanning meals to tracking habits — your complete AI health assistant.
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">

                {/* TEXT */}
                <div className="flex-1">
                  <p className="text-green-600 font-semibold mb-2 text-sm">
                    {item.tag}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                  <ul className="space-y-3">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 text-[15px]"
                      >
                        <span className="mt-2 w-2 h-2 bg-green-500 rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE (NO CUT + PERFECT FIT) */}
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-[520px] aspect-[4/3] flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}