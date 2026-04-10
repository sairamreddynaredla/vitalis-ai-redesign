import { useState } from "react";
import { useToast } from "../hooks/useToast";

const PRODUCTS = [
  { name: "Almond Milk", cal: 30, protein: "1g", sugar: "2g", rating: "✅ Healthy" },
  { name: "Dark Chocolate", cal: 170, protein: "2g", sugar: "10g", rating: "⚠️ Moderate" },
  { name: "Energy Drink", cal: 110, protein: "0g", sugar: "27g", rating: "❌ Avoid" },
  { name: "Peanut Butter", cal: 188, protein: "8g", sugar: "3g", rating: "✅ Good" },
  { name: "Salad Mix", cal: 15, protein: "1g", sugar: "1g", rating: "✅ Excellent" },
  { name: "Oats", cal: 150, protein: "5g", sugar: "1g", rating: "✅ Healthy" },
];

export default function Scanners() {
  const { showToast } = useToast();
  const [idx, setIdx] = useState(0);
  const product = PRODUCTS[idx];

  return (
    <section className="p-6 md:p-8">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xl">📷</span>
        <h3 className="font-head text-lg text-[var(--text)]">
          Smart Scanner
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {/* SCANNER */}
        <div className="border border-[var(--border)] rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">📦</div>

          <h4 className="font-head text-sm text-[var(--text)] mb-1">
            Grocery Scanner
          </h4>

          <p className="text-xs text-[var(--muted)] mb-4">
            Tap to scan next product
          </p>

          <div className="bg-white/5 border border-[var(--border)] rounded-xl p-4 mb-4">
            <div className="font-head text-lg text-[var(--text)] mb-3">
              {product.name}
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "Cal", v: product.cal },
                { l: "Protein", v: product.protein },
                { l: "Sugar", v: product.sugar },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div className="text-[10px] text-[var(--muted)]">{m.l}</div>
                  <div className="text-sm font-bold text-[var(--text)]">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-3 text-xs font-semibold ${
                product.rating.includes("✅")
                  ? "text-green-400"
                  : product.rating.includes("⚠️")
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {product.rating}
            </div>
          </div>

          <button
            onClick={() => {
              const n = (idx + 1) % PRODUCTS.length;
              setIdx(n);
              showToast(`Scanned: ${PRODUCTS[n].name}`);
            }}
            className="w-full btn-primary justify-center"
          >
            Scan Next →
          </button>
        </div>

        {/* EXPIRY TRACKER */}
        <div className="border border-[var(--border)] rounded-2xl p-5">
          <div className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-4">
            Expiry Tracker
          </div>

          {[
            { item: "Milk", status: "Expired", color: "text-red-400" },
            { item: "Cheese", status: "3 days left", color: "text-yellow-400" },
            { item: "Eggs", status: "6 days left", color: "text-yellow-400" },
            { item: "Butter", status: "Fresh", color: "text-green-400" },
            { item: "Yogurt", status: "2 days left", color: "text-red-400" },
          ].map((item) => (
            <div
              key={item.item}
              onClick={() => showToast(`${item.item}: ${item.status}`)}
              className="flex justify-between items-center px-4 py-2 border border-[var(--border)] rounded-xl mb-2 cursor-pointer transition hover:bg-white/5"
            >
              <span className="text-sm text-[var(--text)]">
                {item.item}
              </span>
              <span className={`text-xs font-bold ${item.color}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}