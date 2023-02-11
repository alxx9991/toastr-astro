import { useState, useEffect } from "react";
import Row from "../../layouts/Row";
import hamburgerSvgReference from "/icons/hamburger.svg";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuShouldRender, setMobileMenuShouldRender] =
    useState(isMobileMenuOpen);

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
      <header className="full-width-section z-30 bg-bg" id="home">
        <Row className="relative mt-10 mb-4 flex flex-row justify-between px-4  md:mt-12 md:flex-col md:gap-8 md:px-0 md:text-center lg:my-14 lg:flex-row lg:items-center lg:justify-between">
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
            className={`absolute z-20 w-screen ${
              isMobileMenuOpen
                ? "animate-mobileMenuDrop"
                : "animate-mobileMenuWithdraw"
            } bg-10`}
            onAnimationEnd={onAnimationEnd}
            clickHandler={hamburgerClickHandler}
          ></MobileNav>
        </div>
      )}
    </>
  );
};

export default Header;
