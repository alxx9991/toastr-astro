const Button = ({ children, full, secondary }) => {
  return (
    <button
      className={`button-large-text rounded-xl border-2 border-primary py-4 hover:-translate-y-[0.25rem] ${
        secondary
          ? "bg-white text-primary hover:border-primary hover:bg-primary hover:text-10"
          : "bg-primary text-10 hover:border-primary hover:bg-10 hover:text-primary"
      } px-6 transition-all ${full && "w-full"}`}
    >
      {children}
    </button>
  );
};

export default Button;
