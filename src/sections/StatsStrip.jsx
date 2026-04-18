export default function StatsStrip() {
  return (
    <section className="px-4 mt-6 md:mt-8">
      
      <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-md 
        border border-white/40 rounded-3xl shadow-lg 
        px-6 py-6 md:px-10 md:py-8">

        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[var(--text)]">95%</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Documentation Accuracy
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[var(--text)]">10–15</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Minutes Saved Per Consultation
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[var(--text)]">100%</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Secure Clinical Data Storage
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[var(--text)]">95%</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Report Analysis Accuracy
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}