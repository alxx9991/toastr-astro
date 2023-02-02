const Gallery = () => {
  return (
    <div className="-mb-96 hidden flex-row gap-4 lg:flex">
      <div>
        <img
          src={"/images/gallery1.webp"}
          alt="Example website - physiotherapy clinic"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src={"/images/gallery2.webp"}
          alt="Example website - cafe"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src={"/images/gallery3.webp"}
          alt="Example website - coffee shop"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Gallery;
