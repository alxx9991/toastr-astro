import logoSvgReference from "/icons/logo.svg";

const Nav = () => {
  const linkContainerStyle =
    "px-6 py-3 rounded-full flex items-center hover:bg-bg";

  return (
    <>
      {/* MOBILE */}
      <nav className="button-text z-20 hidden items-stretch justify-between gap-1 rounded-full bg-10 px-1 py-1 shadow-lg md:flex lg:hidden">
        <a href="#home" className={linkContainerStyle} aria-label="Toastr Logo">
          <img src={logoSvgReference} alt="toastr logo" />
        </a>
        <a href="#how" className={linkContainerStyle}>
          How It Works
        </a>
        <a href="#why" className={linkContainerStyle}>
          Why Us
        </a>
        <a href="#about" className={linkContainerStyle}>
          About Us
        </a>
        <a href="#pricing" className={linkContainerStyle}>
          Pricing
        </a>
        <a href="#contact" className={linkContainerStyle}>
          Contact
        </a>
      </nav>

      {/* DESKTOP */}
      <nav className="button-text z-60 hidden min-w-[42rem] items-stretch justify-between gap-1 rounded-full bg-10 px-1 py-1 shadow-lg lg:fixed lg:left-[50%] lg:flex lg:translate-x-[-50%]">
        <a href="#home" className={linkContainerStyle} aria-label="Toastr Logo">
          <img src={logoSvgReference} alt="toastr logo" />
        </a>
        <a href="#how" className={linkContainerStyle}>
          How It Works
        </a>
        <a href="#why" className={linkContainerStyle}>
          Why Us
        </a>
        <a href="#about" className={linkContainerStyle}>
          About Us
        </a>
        <a href="#pricing" className={linkContainerStyle}>
          Pricing
        </a>
        <a href="#contact" className={linkContainerStyle}>
          Contact
        </a>
      </nav>
    </>
  );
};

export default Nav;
