import scanImg from "../assets/workflow-sec-scan.jpg";
import insightsImg from "../assets/workflow-sec-insights.jpg";

export default function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f5ef] py-24 px-6">

      {/* 🔥 TOP WAVE */}
      <div className="absolute top-0 left-0 w-full h-[220px] bg-[#dfe8d5] rounded-b-[50%]" />

      {/* 🔥 BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full h-[260px] bg-[#dfe8d5] rounded-t-[50%]" />

      {/* 🔥 HEADER */}
      <div className="relative text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f3e2f]">
          How Vitalis Workflow Works
        </h2>
        <p className="mt-3 text-[#5c6b5c] text-lg">
          Your Journey to Healthier Habits
        </p>
      </div>

      {/* 🔥 FLOW CONTAINER */}
      <div className="relative max-w-6xl mx-auto flex flex-col gap-10 md:block">

        {/* STEP 1 */}
        <div className="relative md:absolute md:left-0 md:top-0 
                        bg-white p-5 rounded-2xl shadow-lg 
                        w-full max-w-[260px] mx-auto">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                          md:left-3 md:translate-x-0 
                          bg-[#9fb37a] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
            1
          </div>

          <img
            src={scanImg}
            alt="scan"
            className="rounded-xl mb-3 object-cover h-[140px] w-full"
          />

          <h3 className="font-semibold text-[#2f3e2f]">
            1. Capture Your Plate
          </h3>
          <p className="text-sm text-[#5c6b5c] mt-1">
            Snap a photo of your meal using our app.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="relative w-full max-w-[260px] mx-auto
                        md:absolute md:left-1/2 md:-translate-x-1/2 md:top-20
                        bg-white p-5 rounded-2xl shadow-lg">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                          md:left-3 md:translate-x-0 
                          bg-[#9fb37a] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
            2
          </div>

          <div className="h-[140px] flex items-center justify-center bg-gray-100 rounded-xl mb-3">
            <span className="text-sm text-gray-500">
              We’re processing your dish
            </span>
          </div>

          <h3 className="font-semibold text-[#2f3e2f]">
            2. Instant Analysis
          </h3>
          <p className="text-sm text-[#5c6b5c] mt-1">
            Get nutritional analysis in seconds.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="relative md:absolute md:right-0 md:top-40 
                        bg-white p-5 rounded-2xl shadow-lg 
                        w-full max-w-[260px] mx-auto">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                          md:left-3 md:translate-x-0 
                          bg-[#9fb37a] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
            3
          </div>

          <img
            src={insightsImg}
            alt="insights"
            className="rounded-xl mb-3 object-cover h-[140px] w-full"
          />

          <h3 className="font-semibold text-[#2f3e2f]">
            3. View Detailed Insights
          </h3>
          <p className="text-sm text-[#5c6b5c] mt-1">
            See your meal’s macros, nutrition tips, and suggestions.
          </p>
        </div>

        {/* 🔥 SVG CURVED ARROWS (desktop only) */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 400"
        >
          <path
            d="M200 120 C350 50, 450 150, 500 130"
            stroke="#9fb37a"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          <path
            d="M520 180 C700 250, 780 180, 820 200"
            stroke="#9fb37a"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />

          <defs>
            <marker
              id="arrow"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#9fb37a" />
            </marker>
          </defs>
        </svg>
      </div>

    
      <div className="hidden md:block h-[420px]" />

    </section>
  );
}