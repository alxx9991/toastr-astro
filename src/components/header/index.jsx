import { useState, useEffect } from "preact/hooks";
import Row from "../../layouts/Row";
import hamburgerSvgReference from "/icons/hamburger.svg";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = ({ page }) => {
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
        className={`md:full-width-section fixed z-40 w-full  ${
          page === "home" ? "bg-bg" : "bg-bg md:bg-10"
        } px-[10%] transition-all md:relative ${
          scrollPosition !== 0 && !mobileMenuShouldRender ? "shadow-md " : ""
        } md:relative md:px-0 md:shadow-none`}
        id="home"
      >
        {page === "home" && (
          <div class="absolute inset-0 hidden h-full w-full px-3 pt-3 transition-all md:block md:px-4 md:pt-4">
            <div class="h-full w-full rounded-t-2xl bg-bg md:rounded-t-3xl"></div>
          </div>
        )}
        {page === "home" && scrollPosition === 0 && (
          <div class="absolute inset-0 h-full w-full px-3 pt-3 transition-all md:hidden md:px-4 md:pt-4">
            <div class="h-full w-full rounded-t-2xl bg-bg md:rounded-t-3xl"></div>
          </div>
        )}
        {/* Desktop */}
        <Row className="relative my-8 flex flex-row justify-between px-4  md:-mb-8 md:mt-12 md:flex-col md:gap-4 md:px-0 md:text-center lg:mb-0 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="logo-text cursor-pointer">
            <a href="/">
              Toastr<span className=" text-primary">.</span>
            </a>
          </p>
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
      {/* Mobile */}
      <header
        className="full-width-section invisible z-40 w-full bg-bg md:hidden"
        id="home"
      >
        <Row className="relative my-8 flex flex-row justify-between px-4  md:mb-4 md:mt-12 md:flex-col md:gap-8 md:px-0 md:text-center lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <p className="logo-text">
            Toastr<span className="text-primary">.</span>
          </p>
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
        <div className="">
          <MobileNav
            className={`z-30 w-full ${
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
