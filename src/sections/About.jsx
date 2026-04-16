import aboutImg from "../assets/aboutus.jpg";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src={aboutImg}
            alt="About Vitalis AI"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <div className="inline-block px-5 py-1.5 mb-4 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full">
            About Us
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Built to Make Healthy Living Smarter
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Vitalis AI is designed to simplify everyday health decisions using intelligent technology.
            From scanning meals to analyzing groceries and medical reports, we help you understand
            what truly impacts your health.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Real-time AI health insights</li>
            <li>✔ Built for everyday life</li>
            <li>✔ Prevention-focused approach</li>
            <li>✔ Simple and intuitive design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}