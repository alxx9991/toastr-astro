const stepAnimations = [
  "animate-fadeFromLeft2",
  "animate-fadeFromRight2",
  "animate-fadeFromLeft3",
  "animate-fadeFromRight3",
];

const Step = ({ icon, iconL, number, heading, body, gridString }) => {
  const className = `${gridString} ${
    stepAnimations[number - 1]
  } shadow-sm relative text-left px-6 md:px-10 pb-8 pt-8 bg-bg rounded-xl flex flex-col gap-2 justify-start max-w-[400px] md:max-w-[488px] md:gap-2 md:py-8 lg:max-h-[250px]`;
  return (
    <div className={className}>
      <div className="absolute translate-x-[-50%] translate-y-[-140%] md:hidden md:translate-y-0">
        {icon}
      </div>
      <div className="absolute hidden translate-x-[-50%] translate-y-[-140%] md:block md:translate-y-0 md:translate-x-[-130%] lg:right-0 lg:translate-x-[-40%] lg:translate-y-[-100%]">
        {iconL}
      </div>
      <div className="aspect-square w-max rounded-lg bg-tertiary p-2 text-center text-primary">
        {number}
      </div>
      <p className="subtitle-bold">{heading}</p>
      <p className="body">{body}</p>
    </div>
  );
};

export default Step;
