import Row from "../../layouts/Row";

const Footer = () => {
  return (
    <footer
      className="full-width-section lg:pt-22 pt-20 text-center"
      id="contact"
    >
      <Row className="mb-16 flex flex-col items-center gap-6 px-8 lg:mb-16">
        <div className="flex flex-col items-center gap-6">
          <h2>Level up your business today</h2>
          <p className="subtitle">
            Get in touch and see if we're right for you
          </p>
          <a
            href="https://calendly.com/toastrstudio/30min"
            target="_blank"
            className="button-large-text w-full max-w-[600px] rounded-3xl border-[2px] border-solid border-primary py-12 text-primary md:mt-6 lg:max-w-[800px]"
          >
            <button>Get started</button>
          </a>
        </div>
        <hr className="my-6 h-[1px] w-full border-none bg-80 opacity-50 md:mb-10 md:mt-12" />
        <div className="lg:flex lg:w-full lg:justify-between lg:text-left">
          <div>
            <a href="#home" className="logo-text mb-4 lg:mb-2">
              Toastr
            </a>
            <p className="body lg:caption mt-3 hidden text-80 lg:block">
              Copyright 2022. Toastr. All rights reserved.
            </p>
          </div>
          <nav className="mt-4 flex flex-col gap-8 lg:mt-0 lg:flex-row">
            <a className="body" href="#how">
              How It Works
            </a>
            <a className="body" href="#why">
              Why Us
            </a>
            <a className="body" href="#about">
              About Us
            </a>
            <a className="body" href="#pricing">
              Pricing
            </a>
            <a className="body" href="#contact">
              Contact
            </a>
          </nav>
        </div>
        <p className="body2 mt-4 text-80 lg:hidden">
          Copyright 2022. Toastr. All rights reserved.
        </p>
      </Row>
    </footer>
  );
};

export default Footer;
