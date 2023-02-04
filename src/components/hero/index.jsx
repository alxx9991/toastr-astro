import Row from "../../layouts/Row";
import Button from "../ui/Button";
import Gallery from "./gallery";
import leftThingSvgReference from "/icons/left-thing.svg";
import rightThingSvgReference from "/icons/right-thing.svg";
import leftThingMobileSvgReference from "/icons/left-thing-mobile.svg";
import rightThingMobileSvgReference from "/icons/right-thing-mobile.svg";

const Hero = () => {
  return (
    <>
      <div className="full-width-section bg-bg pt-16 text-center md:pt-32 lg:mb-48 lg:pt-24">
        <Row className="relative mb-16 flex flex-col gap-16 md:mb-12 md:gap-20 md:px-16 lg:gap-8">
          <div className="absolute inset-0 hidden -translate-x-20 translate-y-20 md:block">
            <img src={leftThingSvgReference} alt="left decoration" />
          </div>
          <div className="absolute left-0 bottom-0 block -translate-y-16 md:hidden">
            <img
              src={leftThingMobileSvgReference}
              alt="left decoration mobile"
            />
          </div>
          <div className="absolute right-0 top-0 hidden translate-x-20 -translate-y-24 md:block">
            <img src={rightThingSvgReference} alt="right decoration" />
          </div>
          <div className="absolute right-0 top-0 block translate-x-1 -translate-y-14 overflow-x-visible md:hidden">
            <img
              src={rightThingMobileSvgReference}
              alt="right decoration mobile"
            ></img>
          </div>
          <div className="relative z-10 flex flex-col px-6 md:gap-2 md:px-0 lg:gap-2">
            <h1>Your One Stop Shop for</h1>
            <h1 className="text-primary">Web Design and Development</h1>
          </div>
          <p className="body lg:subtitle z-10 px-6 md:px-0">
            Beautiful, modern, 100% hand-coded websites for service based
            businesses starting at $249/mo.
          </p>
        </Row>
        <Row className="mb-20 lg:mb-16">
          <a href="#pricing">
            <Button>See Plans</Button>
          </a>
        </Row>
        <Row>
          <Gallery></Gallery>
        </Row>
      </div>
      <div
        className={
          "full-width-section -z-10 -mt-48 mb-16 hidden min-h-[350px] lg:block"
        }
      >
        <div className="wave-container"></div>
      </div>
    </>
  );
};

export default Hero;
