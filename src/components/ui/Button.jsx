const Button = ({ children, full }) => {
  return (
    <button
      className={`button-large-text h-14 rounded-xl border-2 border-primary bg-primary px-10 text-10 ${
        full && "w-full"
      } hover:bg-10 hover:text-primary`}
    >
      {children}
    </button>
  );
};

export default Button;
