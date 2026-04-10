const Wrapper = ({
  children,
  className = "",
  size = "default",
}) => {
  const sizes = {
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    narrow: "max-w-5xl",
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;