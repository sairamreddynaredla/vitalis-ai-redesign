import React from "react";
import scanImg from "../assets/howitworks-scan.jpg";
import trackImg from "../assets/howitworks-tracking.jpg";

const steps = [
  {
    id: 1,
    title: (
      <>
        Scan Anything<span className="text-red-600">—</span>Food or Label
      </>
    ),
    desc: (
      <>
        Point your camera at a meal or food label.
        <br />
        Works at restaurants, home, or while shopping.
      </>
    ),
    badges: [
      { label: "≡ At Store", filled: true },
      { label: "⟳ At Table", filled: false },
    ],
    image: scanImg, // ✅ FIXED
  },
  {
    id: 2,
    title: "AI Breaks Down Ingredients & Nutrition",
    desc: (
      <>
        Instantly understand calories, protein, carbs, and hidden ingredients.
        <br />
        No searching. No confusion.
      </>
    ),
    image: null,
  },
  {
    id: 3,
    title: "Know What's Right for YOU",
    desc:
      "Get personalized insights based on your goals — muscle gain, weight loss, diabetes, or allergies.",
    image: trackImg, // ✅ FIXED
  },
  {
    id: 4,
    title: (
      <>
        Track Automatically<span className="text-red-600">—</span>No Manual Logs
      </>
    ),
    desc: (
      <>
        Everything is saved instantly.
        <br />
        Monitor your daily intake, calories, and progress effortlessly.
      </>
    ),
    image: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#f0f5ee] py-20 md:py-28 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 
        bg-clip-text text-transparent inline-block">
          How It Works
        </h1>

        <p className="text-base font-semibold text-[#3a7a3a] mb-1">
          From Scan → Insight → Better Choices
        </p>

        <p className="text-sm text-gray-500">
          Understand your food instantly. No guessing. No manual tracking.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-2xl mx-auto flex flex-col">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex gap-4">

            {/* Left number */}
            <div className="flex flex-col items-center w-9 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#3a7a3a] text-white font-bold text-sm flex items-center justify-center z-10">
                {step.id}
              </div>

              {idx < steps.length - 1 && (
                <div
                  className="flex-1 w-0.5 mt-1"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, #b0c8b0 0px, #b0c8b0 6px, transparent 6px, transparent 12px)",
                  }}
                />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 bg-white rounded-2xl p-4 flex items-center gap-4 mb-3">

              {/* Text */}
              <div className="flex-1">
                <h2 className="text-base font-bold mb-2 leading-snug 
                bg-gradient-to-r from-gray-900 to-gray-700 
                bg-clip-text text-transparent inline-block">
                  {step.title}
                </h2>

                <p className="text-[13px] text-gray-500 leading-relaxed mb-2">
                  {step.desc}
                </p>

                {step.badges && (
                  <div className="flex gap-2 flex-wrap">
                    {step.badges.map((b) =>
                      b.filled ? (
                        <span
                          key={b.label}
                          className="bg-[#3a7a3a] text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {b.label}
                        </span>
                      ) : (
                        <span
                          key={b.label}
                          className="border border-[#3a7a3a] text-[#3a7a3a] text-xs font-semibold px-3 py-1 rounded-full">
                          {b.label}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Image */}
              {step.image && (
                <div className="w-[130px] h-[220px] flex-shrink-0">
                  <img
                    src={step.image}
                    alt="how it works"
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}