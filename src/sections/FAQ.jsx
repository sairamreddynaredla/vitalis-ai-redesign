import { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";

/**
 * FAQ section component
 * Handles accordion-style expand/collapse for questions
 */
export default function FAQ() {
  // Tracks currently opened FAQ index
  const [openIndex, setOpenIndex] = useState(null);

  // Stores dynamic height references for smooth animation
  const contentRefs = useRef([]);

  /**
   * FAQ data
   * Keeping content separate improves maintainability
   */
  const faqs = [
    {
      question: "What is Vitalis AI?",
      answer:
        "Vitalis AI is an AI-powered health assistant helping you make smarter food and lifestyle decisions.",
    },
    {
      question: "What services does Vitalis AI offer?",
      answer:
        "AI fasting tracking, calorie tracking, hydration reminders, and personalized health insights.",
    },
    {
      question: "How do intelligent reminders work?",
      answer:
        "They adapt to your routine and guide you based on fasting cycles and hydration needs.",
    },
    {
      question: "How secure is my health data?",
      answer:
        "Your data is encrypted and protected with high-level security standards.",
    },
    {
      question: "Can I track calories automatically?",
      answer:
        "Yes, using AI food recognition or manual tracking for accuracy.",
    },
  ];

  /**
   * Toggle FAQ open/close
   * Ensures only one item is expanded at a time
   */
  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    // Section wrapper with vertical centering
    <section className="px-4 py-20 md:py-28 bg-gradient-to-b from-[#f6fbf8] to-[#eef7f3]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">

        {/* Label */}
        <div className="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 mb-3">
          FAQ
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
  Smarter Health Starts{" "}
  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
    Here
  </span>
</h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 text-xs md:text-sm">
          Explore how Vitalis AI helps you make better health decisions.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto w-full space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`group cursor-pointer rounded-xl px-5 py-4 transition-all duration-300
              ${
                isOpen
                  ? "bg-white shadow-md"
                  : "bg-white/70 hover:bg-white shadow-sm"
              }`}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-base font-medium text-gray-800">
                  {faq.question}
                </h3>

                {/* Toggle Icon */}
                <div className="text-green-600">
                  {isOpen ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Answer (Animated Height) */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  height: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
                }}
                className="overflow-hidden transition-all duration-300"
              >
                <p className="text-gray-600 text-xs mt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}