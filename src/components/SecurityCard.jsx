export default function SecurityCard({
  title,
  items,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 ${className}`}
    >
      {/* Title */}
      <h3 className="font-semibold text-lg mb-4 text-gray-800">
        {title}
      </h3>

      {/* Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-600"
          >
            <span>{item}</span>

            <span
              className="text-green-500 font-bold"
              aria-label="secured"
              role="img"
            >
              ✔
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}