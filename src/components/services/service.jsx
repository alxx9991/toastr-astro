import React from "react";

const Service = ({ icon, heading, content }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 rounded-xl bg-10 px-6 pb-10 pt-14 text-left shadow-sm md:px-[8%] lg:px-5">
      {icon}
      <p className="subtitle-bold">{heading}</p>
      <p className="body">{content}</p>
    </div>
  );
};

export default Service;
