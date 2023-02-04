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
    heading: "Request a free consultation",
    body: "We listen to your individual business needs to design your ideal website.",
    gridString: "lg:row-start-1 lg:col-start-1",
  },
  {
    icon: <img src={step2IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step2LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "Receive your free custom website design",
    body: "Unlimited revisions until you are 100% satisfied. No strings attached.",
    gridString: "lg:row-start-2 lg:col-start-2",
  },
  {
    icon: <img src={step3IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step3LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "40+ hours of coding & development",
    body: "100% hand-coded. Every line of code is written for maximum performance. No downpayment or deposit required.",
    gridString: "lg:row-start-3 lg:col-start-1",
  },
  {
    icon: <img src={step4IconReference} alt="decorative icon" loading="lazy" />,
    iconL: (
      <img src={step4LIconReference} alt="decorative icon" loading="lazy" />
    ),
    heading: "Make it live!",
    body: "Hosting, 24/7 technical support and unlimited content changes starting at $249/mo. Cancel or pause anytime.",
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
        ,
      </div>
    </div>,
    <div key={uuidv4()} className={`${connectorStyle} col-start-1 row-start-2`}>
      <div className="absolute translate-x-[5%] translate-y-[20%]">
        <img
          src={connector2IconReference}
          alt="dotted line decoration"
          loading="lazy"
        />
      </div>
    </div>,
    <div key={uuidv4()} className={`${connectorStyle} col-start-2 row-start-3`}>
      <div className="absolute translate-x-[-10%] translate-y-[12%]">
        <img
          src={connector3IconReference}
          alt="dotted line decoration"
          loading="lazy"
        />
      </div>
    </div>,
  ];

  return (
    <div className="full-width-section mb-24 pt-16 lg:pt-0" id="how">
      <Row className="mb-16 flex flex-col gap-4 text-center">
        <p className="subtitle-bold text-primary">How It Works</p>
        <h2>4 simple steps to build your dream website</h2>
      </Row>
      <Row
        className="mb-20 flex flex-col items-center gap-16 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-4 lg:gap-x-8"
        sl={3}
        el={13}
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
          <Button>Book a Free 30 Minute Consultation</Button>
        </a>
      </Row>
    </div>
  );
};

export default How;
