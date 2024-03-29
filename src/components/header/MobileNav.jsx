const MobileNav = ({ className, clickHandler, onAnimationEnd }) => {
  const linkStyle = "body font-medium";
  return (
    <div className={className} onAnimationEnd={onAnimationEnd}>
      <nav className="flex flex-col gap-8 px-6 py-5 shadow-md">
        <a onClick={clickHandler} className={linkStyle} href="/">
          Home
        </a>
        <a onClick={clickHandler} className={linkStyle} href="/how">
          How It Works
        </a>
        <a onClick={clickHandler} className={linkStyle} href="/why">
          Why Us
        </a>
        <a onClick={clickHandler} className={linkStyle} href="/about">
          About Us
        </a>
        <a onClick={clickHandler} className={linkStyle} href="/pricing">
          Pricing
        </a>
        <a onClick={clickHandler} className={linkStyle} href="/#contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileNav;
