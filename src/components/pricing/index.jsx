import Row from "../../layouts/Row";
import tickSvgReference from "/icons/tick.svg";
import Button from "../ui/Button";

import { v4 } from "uuid";

const PLANS = [
  {
    title: "Monthly Plan",
    content: "No minimum commitment or up-front fees. Paid monthly.",
    price: "A$249/month",
    caption: "Pause or cancel anytime",
    features: [
      "5-page static website",
      "Unlimited design revisions",
      "Unlimited feedback changes",
      "Responsive website design",
      "Website hosting",
      "Social Media Integration",
      "24/7 Customer Support",
    ],
  },
  {
    title: "One Time Payment",
    content: "If you prefer the traditional way, just pay once and that's it",
    price: "A$3499",
    caption: "3-month guarantee",
    features: [
      "All monthly plan features",
      "12 months customer support",
      "Ownership of codebase",
      "Ownership of design files",
    ],
  },
];

const EXTRAS = [
  {
    title: "Add Ons",
    content:
      "Looking to add-on extra features? Send us your project details and budget to enquire.",
    cta: "Book a call >",
  },
  {
    title: "Refer a friend and earn",
    content:
      "Earn 10% off your monthly recurring plan for each referral. Did we mention it stacks too?",
    cta: "Refer a friend >",
  },
];

const Pricing = () => {
  const pricingCardStyle =
    "bg-10 px-10 pt-12 pb-10 rounded-xl shadow-lg max-w-[384px] h-full";

  const Plan = ({ title, content, price, caption, features, className }) => {
    const featureList = features.map((feature) => {
      return (
        <div className="flex items-center gap-4" key={v4()}>
          <img src={tickSvgReference} alt="tick icon" />
          <p className="body2">{feature}</p>
        </div>
      );
    });

    return (
      <div className="row-span-2 w-full justify-center">
        <div className={`${pricingCardStyle} ${className}`}>
          <p className="subtitle-bold mb-2">{title}</p>
          <div className="flex flex-col gap-6">
            <p className="body2 text-80">{content}</p>
            <div className="flex flex-col gap-2">
              <p className="subtitle">{price}</p>
              <p className="caption text-80">{caption}</p>
            </div>
          </div>
          <div className="mt-8 mb-12 w-full lg:my-8">
            <a
              href="https://calendly.com/toastrstudio/30min"
              target="_blank"
              rel="noreferrer"
            >
              <Button full>Book a call</Button>
            </a>
          </div>
          <hr className="h-[1px] border-none bg-80 opacity-50" />
          <div className="mt-6 flex flex-col gap-[0.4rem]">{featureList}</div>
        </div>
      </div>
    );
  };

  const Extra = ({ title, content, cta, className }) => {
    return (
      <div className="flex w-full justify-center">
        <div className={`${pricingCardStyle} ${className}`}>
          <p className="subtitle-bold ">{title}</p>
          <p className="body2 mt-4 text-80">{content}</p>
          <p className="button-large-text mt-12 -ml-4 w-max rounded-lg px-4 py-2 text-primary hover:bg-bg hover:underline">
            <a
              href="https://calendly.com/toastrstudio/30min"
              target="_blank"
              rel="noreferrer"
            >
              {cta}
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="full-width-section bg-bg pt-12 pb-20" id="pricing">
      <Row className="mb-12 flex animate-fadeFromBottom flex-col gap-2 px-6 text-center md:px-0">
        <p className="subtitle-bold text-primary">Pricing</p>
        <h2>Choose a plan that works for you</h2>
      </Row>
      <Row
        className={
          "flex grid-cols-2 flex-col items-center gap-8 px-6 text-left md:grid md:items-stretch md:px-0 lg:grid-cols-3 lg:grid-rows-2"
        }
      >
        <Plan
          {...PLANS[0]}
          className="row-span-2 animate-fadeFromBottom2"
        ></Plan>
        <Plan
          {...PLANS[1]}
          className="row-span-2 animate-fadeFromBottom4"
        ></Plan>
        <Extra {...EXTRAS[0]} className="animate-fadeFromBottom6"></Extra>
        <Extra {...EXTRAS[1]} className="animate-fadeFromBottom7"></Extra>
      </Row>
    </div>
  );
};

export default Pricing;
