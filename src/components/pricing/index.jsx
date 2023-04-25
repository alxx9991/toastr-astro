import Row from "../../layouts/Row";
import tickSvgReference from "/icons/tick.svg";
import plusSvgReference from "/icons/plus.svg";
import Button from "../ui/Button";
import { useState } from "preact/hooks";

import { v4 } from "uuid";

const PLANS = [
  {
    title: "Starters",
    content:
      "We tailor your business brand to a predesigned custom website template",
    price: "A$220",
    upfrontPrice: "A$3,000",
    addOnPrice: "A$30",
    features: [
      "Responsive templated website design",
      "Up to 4-page static website",
      "Google Business profile setup",
      "Website hosting",
      "Unlimited content changes",
      "Google Business profile management",
      "24/7 Customer support",
    ],
    upfrontFeatures: [
      "Responsive templated website design",
      "Up to 4-page static website",
      "Google Business profile setup",
      "Website hosting",
    ],
    upfrontSupport: [
      "Unlimited content changes",
      "Google Business profile management",
      "24/7 Customer support",
    ],
  },
  {
    title: "Sourdough Deluxe",
    content:
      "We design your site from the ground up, to your exact business needs",
    price: "A$279",
    upfrontPrice: "A$3,499",
    addOnPrice: "A$50",
    features: [
      "Responsive custom website design",
      "Up to 4-page static website",
      "Google Business profile setup",
      "Website hosting",
      "Social Media Integration",
      "Unlimited content + design changes",
      "Google Business profile management",
      "24/7 Customer support",
      "Analytics reports and updates",
    ],
    upfrontFeatures: [
      "Responsive custom website design",
      "Up to 4-page static website",
      "Google Business profile setup",
      "Website hosting",
      "Social Media Integration",
    ],
    upfrontSupport: [
      "Unlimited content + design changes",
      "Google Business profile management",
      "24/7 Customer support",
      "Analytics reports and updates",
    ],
  },
  {
    title: "Artisan Package",
    content:
      "Tailored custom solutions. Send us your project details for an exact quote.",
    price: "Custom Pricing",
    upfrontPrice: "Custom Pricing",
    addOnPrice: "Custom Pricing",
    features: [
      "All features of Sourdough Deluxe package",
      "Custom features (eg. e-commerce, blog posts) ",
      "Google Business profile setup",
      "Maintenance for custom features",
    ],
    upfrontFeatures: [
      "All features of Sourdough Deluxe package",
      "Custom features (eg. e-commerce, blog posts) ",
      "Google Business profile setup",
    ],
    upfrontSupport: [
      "All ongoing support from Sourdough Deluxe package",
      "Maintenance for custom features",
    ],
  },
];

const Pricing = () => {
  const pricingCardStyle =
    "bg-10 px-8 md:px-[8%] px-8 pt-12 pb-10 rounded-xl shadow-sm bg-bg max-w-[360px] mx-auto h-full flex flex-col";
  const [isMonthly, setIsMonthly] = useState(true);

  const Plan = ({
    title,
    content,
    price,
    features,
    className,
    upfrontPrice,
    addOnPrice,
    upfrontFeatures,
    upfrontSupport,
    isMonthly,
  }) => {
    const featureList = features.map((feature) => {
      return (
        <div className="flex items-center gap-4" key={v4()}>
          <img src={tickSvgReference} alt="tick icon" />
          <p className="body2">{feature}</p>
        </div>
      );
    });

    const upfrontFeatureList = upfrontFeatures.map((feature) => {
      return (
        <div className="flex items-center gap-4" key={v4()}>
          <img src={tickSvgReference} alt="tick icon" />
          <p className="body2">{feature}</p>
        </div>
      );
    });

    const upfrontSupportList = upfrontSupport.map((feature) => {
      return (
        <div className="flex items-center gap-4" key={v4()}>
          <img src={tickSvgReference} alt="tick icon" />
          <p className="body2">{feature}</p>
        </div>
      );
    });

    const addPageUpfront = () => (
      <div className="flex items-center gap-4" key={v4()}>
        <img src={plusSvgReference} alt="plus icon" />
        <p className="body2">Additional static pages A$100 per page</p>
      </div>
    );

    upfrontFeatureList.push(addPageUpfront());

    const addPageMonthly = () => (
      <div className="flex items-center gap-4" key={v4()}>
        <img src={plusSvgReference} alt="plus icon" />
        <p className="body2">Additional static pages A$10/mth per page</p>
      </div>
    );

    featureList.push(addPageMonthly());

    return (
      <div className="row-span-2 w-full justify-center ">
        <div className={`${pricingCardStyle} ${className}`}>
          <p className="subtitle-bold mb-2">{title}</p>
          <div className="flex flex-col gap-6">
            <p className="body2 text-80">{content}</p>
            <div className="flex flex-col gap-2">
              <p className="subtitle font-medium">
                {isMonthly ? price : upfrontPrice}
                {isMonthly && <span className="ml-1 text-caption">/mth</span>}
              </p>
              <p className="caption text-80">
                {isMonthly
                  ? "Cancel or pause anytime."
                  : "Upfront cost. 3-month guarantee."}
              </p>
            </div>
          </div>
          <div
            className={`mt-6 flex flex-col gap-[0.6rem] ${
              !isMonthly ? "mb-8 min-h-[180px]" : "mb-12"
            }`}
          >
            {isMonthly ? featureList : upfrontFeatureList}
          </div>
          {!isMonthly && (
            <div className="mb-10 flex flex-col">
              <hr className="mb-10 opacity-10" />
              <p className="mb-2 text-caption text-80">Add on support</p>
              <p className="subtitle font-medium">
                {addOnPrice}
                <span className="ml-1 text-caption">/mth</span>
              </p>
              <div className="mt-6 mb-10 flex flex-col gap-[0.6rem]">
                {upfrontSupportList}
              </div>
            </div>
          )}
          <div className="mb-12 mt-auto w-full lg:mb-4">
            <a
              href="https://calendly.com/toastrstudio/30min"
              target="_blank"
              rel="noreferrer"
            >
              <Button full>Book a call</Button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="full-width-section bg-10 pt-8 pb-0 md:pt-20 lg:pt-16"
      id="pricing"
    >
      <Row className="mb-8 flex animate-fadeFromBottom flex-col gap-2 px-6 text-center md:px-0">
        <p className="subtitle-bold ">Pricing</p>
        <h2>Choose a plan that works for you</h2>
      </Row>
      <Row>
        <div className="mx-auto mb-8 flex w-max animate-fadeFromBottom1 flex-row rounded-3xl bg-10 py-2 px-2 shadow-md">
          <button
            className={`rounded-3xl  py-2 px-4 ${
              !isMonthly ? "bg-10 text-secondary" : "bg-secondary text-10"
            }`}
            onClick={() => {
              setIsMonthly(true);
            }}
          >
            Monthly
          </button>
          <button
            className={`rounded-3xl ${
              isMonthly ? "bg-10 text-secondary" : "bg-secondary text-10"
            }  py-2 px-4 `}
            onClick={() => {
              setIsMonthly(false);
            }}
          >
            Upfront
          </button>
        </div>
      </Row>
      <Row
        sm={1}
        em={9}
        className={
          "flex grid-cols-2 flex-col items-center gap-8 px-6 text-left md:grid md:grid-cols-3 md:items-stretch lg:px-0 "
        }
      >
        <Plan
          {...PLANS[0]}
          isMonthly={isMonthly}
          className="row-span-2 animate-fadeFromBottom"
        ></Plan>
        <Plan
          {...PLANS[1]}
          isMonthly={isMonthly}
          className="row-span-2 animate-fadeFromBottom1"
        ></Plan>
        <Plan
          {...PLANS[2]}
          isMonthly={isMonthly}
          className="row-span-2 animate-fadeFromBottom2"
        ></Plan>
      </Row>
    </div>
  );
};

export default Pricing;
