import { useState } from "react";
import Row from "../../layouts/Row";
import hamburgerSvgReference from "/icons/hamburger.svg";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerClickHandler = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="full-width-section z-30 bg-bg" id="home">
        <Row className="relative mt-10 mb-4 flex flex-row justify-between px-4  md:mt-12 md:flex-col md:gap-8 md:px-0 md:text-center lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
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
      <div className="md:hidden">
        <MobileNav
          className={"absolute z-20 w-screen bg-10"}
          clickHandler={hamburgerClickHandler}
          isMobileMenuOpen={isMobileMenuOpen}
        ></MobileNav>
      </div>
    </>
  );
};

export default Header;
