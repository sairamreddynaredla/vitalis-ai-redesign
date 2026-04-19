import React from "react";

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
    phone: "phone1",
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
    phone: null,
  },
  {
    id: 3,
    title: "Know What's Right for YOU",
    desc: "Get personalized insights based on your goals — muscle gain, weight loss, diabetes, or allergies.",
    phone: "phone2",
  },
  {
    id: 4,
    title: (
      <>
        Track Automatically<span className="text-red-600">—</span>No Manual
        Logs
      </>
    ),
    desc: (
      <>
        Everything is saved instantly.
        <br />
        Monitor your daily intake, calories, and progress effortlessly.
      </>
    ),
    phone: null,
  },
];

function Phone1() {
  return (
    <div className="w-[130px] flex-shrink-0">
      <div className="bg-black rounded-[22px] p-1.5 shadow-xl">
        <div className="w-12 h-2.5 bg-black rounded-md mx-auto mb-1" />
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* food image placeholder */}
          <div className="w-full h-20 bg-gradient-to-br from-amber-700 to-yellow-900 flex items-center justify-center text-3xl">
            🍗
          </div>
          {/* stats row */}
          <div className="flex justify-between px-2 pt-2 pb-1">
            {[["27g", "Protein"], ["23g", "Carbs"], ["355", "Cal"]].map(
              ([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-[13px] font-bold text-gray-900">{v}</div>
                  <div className="text-[8px] text-gray-500">{l}</div>
                </div>
              )
            )}
          </div>
          {/* bars */}
          <div className="px-2 pb-2 flex flex-col gap-1">
            {[
              ["Lemon", "75%", "#f4c430"],
              ["Sauce", "60%", "#ff7043"],
              ["Protein", "85%", "#4caf50"],
            ].map(([name, w, color]) => (
              <div key={name} className="flex items-center gap-1">
                <span className="text-[8px] text-gray-500 w-10">{name}</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: w, background: color }}
                  />
                </div>
                <span className="text-[8px] text-gray-500 w-5 text-right">
                  63g
                </span>
              </div>
            ))}
          </div>
          {/* button */}
          <div className="mx-2 mb-2 bg-[#3a7a3a] text-white text-[10px] font-semibold py-1 rounded-xl text-center">
            At Store
          </div>
        </div>
      </div>
    </div>
  );
}

function Phone2() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const nums = [8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="w-[130px] flex-shrink-0">
      <div className="bg-black rounded-[22px] p-1.5 shadow-xl">
        <div className="w-12 h-2.5 bg-black rounded-md mx-auto mb-1" />
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* header */}
          <div className="px-2 pt-2 pb-1 border-b border-gray-100">
            <div className="text-[11px] font-semibold text-gray-900">
              📅 July 1
            </div>
            <div className="flex gap-0.5 mt-1">
              {days.map((d, i) => (
                <div key={i} className="flex-1 text-center">
                  <div className="text-[7px] text-gray-400">{d}</div>
                  {nums[i] === 10 ? (
                    <div className="w-4 h-4 rounded-full bg-[#3a7a3a] text-white text-[7px] font-bold flex items-center justify-center mx-auto mt-0.5">
                      {nums[i]}
                    </div>
                  ) : (
                    <div className="text-[7px] text-gray-500 mt-0.5">
                      {nums[i]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* macros */}
          <div className="px-2 py-2 flex flex-col gap-2">
            {[
              ["Protein", "590 kcal", "72%", "#4caf50"],
              ["Carbs", "91 kcal", "35%", "#f4c430"],
            ].map(([name, kcal, w, color]) => (
              <div key={name}>
                <div className="flex justify-between mb-0.5">
                  <span className="text-[9px] text-gray-700">{name}</span>
                  <span className="text-[9px] font-semibold text-gray-700">
                    {kcal}
                  </span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: w, background: color }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* circle row */}
          <div className="flex items-center gap-2 px-2 pb-2">
            <div className="w-11 h-11 rounded-full border-4 border-[#3a7a3a] flex items-center justify-center text-[14px] font-bold text-[#3a7a3a]">
              43
            </div>
            <div className="flex-1">
              <div className="text-[9px] font-semibold text-gray-700">
                885 kcal
              </div>
              <div className="text-[9px] text-gray-500">176 kcal</div>
              <div className="flex gap-1 mt-1">
                {["Protein", "Carbs", "Macros"].map((t) => (
                  <span
                    key={t}
                    className="text-[6px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            {/* Left: number + dashed line */}
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
            <div className="flex-1 bg-white rounded-2xl p-4 flex items-start gap-3 mb-3">
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
                          className="bg-[#3a7a3a] text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {b.label}
                        </span>
                      ) : (
                        <span
                          key={b.label}
                          className="border border-[#3a7a3a] text-[#3a7a3a] text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {b.label}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
              {step.phone === "phone1" && <Phone1 />}
              {step.phone === "phone2" && <Phone2 />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}