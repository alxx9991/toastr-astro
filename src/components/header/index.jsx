import { useState, useEffect } from "react";
import Row from "../../layouts/Row";
import hamburgerSvgReference from "/icons/hamburger.svg";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuShouldRender, setMobileMenuShouldRender] =
    useState(isMobileMenuOpen);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setMobileMenuShouldRender(true);
    }
  }, [isMobileMenuOpen]);

  const hamburgerClickHandler = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const onAnimationEnd = () => {
    if (!isMobileMenuOpen) setMobileMenuShouldRender(false);
  };

  return (
    <>
      <header
        className={`md:full-width-section fixed z-30 w-full bg-bg px-[10%] ${
          scrollPosition !== 0 && !mobileMenuShouldRender ? "shadow-md" : ""
        } md:relative md:px-0 md:shadow-none`}
        id="home"
      >
        <Row className="relative my-8 flex flex-row justify-between px-4  md:-mb-8 md:mt-12 md:flex-col md:gap-8 md:px-0 md:text-center lg:mb-0 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <p className="logo-text">Toastr</p>
          <button
            className="md:hidden"
            onClick={hamburgerClickHandler}
            aria-label="menu toggle"
          >
            <img src={hamburgerSvgReference} alt="hamburger menu icon" />
          </button>
          <Nav></Nav>
        </Row>
      </header>
      <header
        className="full-width-section invisible z-30 w-full bg-bg md:hidden"
        id="home"
      >
        <Row className="relative my-8 flex flex-row justify-between px-4  md:mb-4 md:mt-12 md:flex-col md:gap-8 md:px-0 md:text-center lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <p className="logo-text">Toastr</p>
          <button
            className="md:hidden"
            onClick={hamburgerClickHandler}
            aria-label="menu toggle"
          >
            <img src={hamburgerSvgReference} alt="hamburger menu icon" />
          </button>
          <Nav></Nav>
        </Row>
      </header>
      {mobileMenuShouldRender && (
        <div>
          <MobileNav
            className={`z-20 w-screen ${
              isMobileMenuOpen
                ? "animate-mobileMenuDrop"
                : "animate-mobileMenuWithdraw"
            } fixed bg-10`}
            onAnimationEnd={onAnimationEnd}
            clickHandler={hamburgerClickHandler}
          ></MobileNav>
        </div>
      )}
    </>
  );
};

export default Header;
