import { v4 as uuidv4 } from "uuid";

import Row from "../../layouts/Row";
import Step from "./Step";
import Button from "../ui/Button";

import step1IconReference from "/icons/step1.svg";
import step2IconReference from "/icons/step2.svg";
import step3IconReference from "/icons/step3.svg";
import step4IconReference from "/icons/step4.svg";

import step1LIconReference from "/icons/step1L.svg";
import step2LIconReference from "/icons/step2L.svg";
import step3LIconReference from "/icons/step3L.svg";
import step4LIconReference from "/icons/step4L.svg";

import connector1IconReference from "/icons/connector1.svg";
import connector2IconReference from "/icons/connector2.svg";
import connector3IconReference from "/icons/connector3.svg";

const steps = [
  {
    icon: <img src={step1IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step1LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "Book a free strategy consultation ",
    body: "We understand your business goals and needs, so we can discuss where we can help. It's completely free and there are no strings attached.",
    gridString: "lg:row-start-1 lg:col-start-1",
  },
  {
    icon: <img src={step2IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step2LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "Preview design",
    body: "Once we gather your website requirements, see the design come to life and get unlimited revisions until you’re 100% satisfied.",
    gridString: "lg:row-start-2 lg:col-start-2",
  },
  {
    icon: <img src={step3IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step3LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "80+ hours of coding & development",
    body: "100% hand-coded. Every line of code is written for maximum performance, to ensure the best customer experience and SEO.",
    gridString: "lg:row-start-3 lg:col-start-1",
  },
  {
    icon: <img src={step4IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step4LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "Launch!",
    body: "We host and maintain your website so you can focus on your business whilst ensuring your website will always be up to date. Call or text us any time to make design changes, or get technical support. Receive monthly analytics to view your website performance.",
    gridString: "lg:row-start-4 lg:col-start-2",
  },
];

const How = () => {
  const stepsElements = steps.map((step, index) => {
    return (
      <Step
        key={uuidv4()}
        icon={step.icon}
        iconL={step.iconL}
        number={index + 1}
        heading={step.heading}
        body={step.body}
        gridString={step.gridString}
      ></Step>
    );
  });

  const connectorStyle = "hidden lg:block relative";

  const connectorIcons = [
    <div key={uuidv4()} className={`${connectorStyle} col-start-2 row-start-1`}>
      <div className="absolute translate-x-[-10%] translate-y-[5%]">
        <img
          src={connector1IconReference}
          alt="dotted line decoration"
          loading="lazy"
        />
        <div className="absolute inset-0 h-full w-full animate-dottedLineRevealRight bg-10"></div>
      </div>
    </div>,
    <div key={uuidv4()} className={`${connectorStyle} col-start-1 row-start-2`}>
      <div className="absolute translate-x-[5%] translate-y-[20%]">
        <img
          src={connector2IconReference}
          alt="dotted line decoration"
          loading="lazy"
        />
        <div className="animate absolute inset-0 h-full w-full animate-dottedLineRevealLeft bg-10"></div>
      </div>
    </div>,
    <div key={uuidv4()} className={`${connectorStyle} col-start-2 row-start-3`}>
      <div className="absolute translate-x-[-10%] translate-y-[12%]">
        <img
          src={connector3IconReference}
          alt="dotted line decoration"
          loading="lazy"
        />
        <div className="absolute inset-0 h-full w-full animate-dottedLineRevealRight2 bg-10"></div>
      </div>
    </div>,
  ];

  return (
    <div className="full-width-section mb-16 pt-10 md:pt-20 lg:pt-16" id="how">
      <Row className="mb-16 flex animate-fadeFromBottom flex-col gap-4 text-center">
        <p className="subtitle-bold text-secondary">How We Jam</p>
        <h2>Building your website in 4 steps</h2>
      </Row>
      <Row
        ss={1}
        es={7}
        className="mb-8 flex max-w-[1000px] flex-col items-center gap-16 px-6 md:mb-16 md:px-0 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-4 lg:gap-x-8"
        sl={2}
        el={14}
      >
        {connectorIcons}
        {stepsElements}
      </Row>
      <Row className={"flex flex-col items-center gap-6 text-center"}>
        <a
          href="https://calendly.com/toastrstudio/30min"
          rel="noreferrer"
          target="_blank"
        >
          <Button>Book a Free Consult</Button>
        </a>
      </Row>
    </div>
  );
};

export default How;
