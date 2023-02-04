const Gallery = () => {
  return (
    <div className="-mb-96 hidden flex-row gap-4 lg:flex">
      <div>
        <img
          height="742px"
          width="668px"
          src={"/images/gallery1.webp"}
          alt="Example website - physiotherapy clinic"
          className="animate-fadeFromBottom1"
        />
      </div>
      <div>
        <img
          height="742px"
          width="668px"
          src={"/images/gallery2.webp"}
          alt="Example website - cafe"
          className="animate-fadeFromBottom2"
        />
      </div>
      <div>
        <img
          height="742px"
          width="668px"
          src={"/images/gallery3.webp"}
          alt="Example website - coffee shop"
          className="animate-fadeFromBottom3"
        />
      </div>
    </div>
  );
};

export default Gallery;
