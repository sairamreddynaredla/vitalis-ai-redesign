import { useToast } from '../hooks/useToast'

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

export default function MealPlanner() {
  const { showToast } = useToast()

  const meals = DAYS.map(() => ({
    b: 'Oatmeal',
    l: 'Grilled Chicken',
    d: 'Salmon'
  }))

  return (
    <section className="p-6 md:p-8">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xl">🍽️</span>
        <h3 className="font-head text-lg text-[var(--text)]">
          Meal Planner
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {/* WEEKLY PLAN */}
        <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--border)] text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
            Weekly Plan
          </div>

          {DAYS.map((day, i) => (
            <div
              key={day}
              onClick={() =>
                showToast(`${day}: ${meals[i].b}, ${meals[i].l}, ${meals[i].d}`)
              }
              className="flex justify-between items-center px-4 py-2 border-b border-white/5 cursor-pointer transition hover:bg-white/5"
            >
              <span className="text-xs font-semibold text-[var(--muted)] w-7">
                {day}
              </span>

              <div className="flex gap-2 flex-wrap">
                {[meals[i].b, meals[i].l, meals[i].d].map((m) => (
                  <span
                    key={m}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-[var(--accent)] border border-blue-500/20"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI SUGGESTIONS */}
        <div className="border border-[var(--border)] rounded-2xl p-4">
          <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-4">
            AI Suggestions
          </div>

          {[
            '🐟 Salmon Bowl',
            '🥛 Greek Yogurt',
            '🥗 Quinoa Salad',
            '🥦 Broccoli Stir Fry'
          ].map((item) => (
            <div
              key={item}
              onClick={() => showToast(`${item} added to plan`)}
              className="flex justify-between items-center px-4 py-2 border border-[var(--border)] rounded-xl mb-3 cursor-pointer transition hover:bg-blue-500/10 hover:border-blue-500/30"
            >
              <span className="text-sm text-[var(--text)]">{item}</span>
              <span className="text-[var(--accent)] font-bold text-lg">+</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}