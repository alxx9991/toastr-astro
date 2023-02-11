const Reason = ({ icon, heading, content }) => {
  return (
    <div className="flex h-[260px] w-[300px] flex-col items-center justify-center gap-2 rounded-xl bg-10 px-4 text-center shadow-lg hover:scale-50 md:h-[250px] md:w-[300px] lg:px-5">
      {icon}
      <p className="subtitle-bold mt-4 text-primary">{heading}</p>
      <p className="body">{content}</p>
    </div>
  );
};

export default Reason;
