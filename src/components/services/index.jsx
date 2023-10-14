import React from "react";
import Row from "../../layouts/Row";
import Service from "./service";

import googleBusinessSvgReference from "/icons/googleBusiness.svg";
import seoSvgReference from "/icons/seo.svg";
import developmentSvgReference from "/icons/development.svg";

import Button from "../ui/Button";

import { v4 as uuidv4 } from "uuid";

const Benefits = () => {
  const BENEFITS = [
    {
      heading: "Web Design and Development",
      content:
        "No Wix, Weebly or Wordpress templates. We custom design and hand-code a website tailored to your target customers.",
      icon: (
        <img src={developmentSvgReference} alt="web development service icon" />
      ),
    },
    {
      heading: "On-page SEO",
      content:
        "Get your website's content, performance, and keywords optimised to rank higher in search engine results, so more customers find you.",
      icon: <img src={seoSvgReference} alt="seo service icon" />,
    },
    {
      heading: "Google Business Management",
      content:
        "Have your Google profile managed and watch your business rank above competitors on Google Maps.",
      icon: (
        <img
          src={googleBusinessSvgReference}
          alt="google business service icon"
        />
      ),
    },
  ];

  const benefitElements = BENEFITS.map((benefit) => {
    return (
      <div className="flex justify-center">
        <Service
          heading={benefit.heading}
          content={benefit.content}
          icon={benefit.icon}
          key={uuidv4()}
        ></Service>
      </div>
    );
  });
  return (
    <div className="full-width-section bg-bg pb-16 pt-16" id="benefits">
      <Row
        ss={1}
        es={7}
        className={"mb-12 flex flex-col gap-4 px-12 text-center md:px-0"}
      >
        <p className="subtitle-bold">Services</p>
        <h2 className="mx-auto max-w-[600px]">
          Accelerate success with our tailored solutions
        </h2>
      </Row>
      <Row
        ss={1}
        es={7}
        sm={1}
        em={9}
        className="mx-auto flex max-w-[400px] flex-col justify-between gap-8 overflow-visible px-6 md:grid md:max-w-[1150px] md:grid-cols-3 md:grid-rows-1 md:gap-6 md:px-10 lg:overflow-visible  lg:px-0"
      >
        {benefitElements}
      </Row>
      <Row className={"mt-16 flex justify-center"}>
        <a href="#pricing">
          <Button>Book a free consult</Button>
        </a>
      </Row>
    </div>
  );
};

export default Benefits;
