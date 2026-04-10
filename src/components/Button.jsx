export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  icon = null,
  className = "",
  ...props
}) {
  // Base styles
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  // Variants
  const variants = {
    primary:
      "bg-black text-white hover:scale-105 hover:-translate-y-1",
    outline:
      "border border-gray-300 hover:bg-gray-100 hover:scale-105",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  return (
    <button
      type="button"
      disabled={loading}
      className={`${base} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {/* Icon */}
      {!loading && icon && <span>{icon}</span>}

      {/* Text */}
      <span>{children}</span>
    </button>
  );
}