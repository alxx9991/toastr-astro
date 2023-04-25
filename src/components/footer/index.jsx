import Row from "../../layouts/Row";

const Footer = () => {
  return (
    <footer className="full-width-section pt-16 text-center" id="contact">
      <Row
        ss={1}
        es={7}
        className="mb-16 flex flex-col items-center gap-6 px-[10%] lg:mb-16"
      >
        <div className="flex w-[320px] animate-fadeFromBottom flex-col items-center gap-6 md:w-[600px]">
          <p className="max-w-[280px] text-body font-medium md:max-w-none">
            Get in touch to see if what we do is right for you
          </p>
          <h2>Let{"'"}s build your website</h2>
          <a
            href="https://calendly.com/toastrstudio/30min"
            target="_blank"
            className="button-large-text w-full rounded-3xl border-[2px] border-solid border-primary py-12 text-primary transition-colors hover:bg-primary hover:text-10 md:mt-6"
          >
            <button>Get started</button>
          </a>
        </div>
        <hr className="my-6 h-[1px] w-full border-none bg-80 opacity-50 md:mb-10 md:mt-12" />
        <div className="lg:flex lg:w-full lg:justify-between lg:text-left">
          <div>
            <a href="/" className="logo-text mb-4 lg:mb-2">
              Toastr
            </a>
            <p className="body lg:caption mt-3 hidden text-80 lg:block">
              Copyright 2022. Toastr. All rights reserved.
            </p>
          </div>
          <nav className="mt-4 flex flex-col gap-8 md:flex-row lg:mt-0">
            <a className="body" href="/how">
              How It Works
            </a>
            <a className="body" href="/why">
              Why Us
            </a>
            <a className="body" href="/about">
              About Us
            </a>
            <a className="body" href="/pricing">
              Pricing
            </a>
            <a className="body" href="/#contact">
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
