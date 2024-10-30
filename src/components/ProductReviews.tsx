function ProductReviews({
  text,
  author,
  stars,
  image,
}: {
  text: string;
  author: string;
  stars: number;
  image: string;
}) {
  return (
    <div className="flex h-[510px] min-w-[210px] flex-col justify-start rounded-md bg-white text-[#4D533C] shadow-[40px_50px_100px_-50px_#1f1f1f] md:h-[420px] md:min-w-[306px]">
      <img src={image} alt="" className="h-[210px]" />
      <div className="flex h-[300px] flex-col justify-between p-8 px-5 md:h-[210px]">
        <p className="italic">{text}</p>
        <div className="flex flex-col justify-between gap-1">
          <p className="font-bold">{author}</p>
          <div className="flex gap-2">
            {Array.from({ length: stars }).map((_, i) => (
              <img key={i} src="/images/star.png" alt="Vape Pen" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
