function Ratings({
  text,
  author,
  stars,
}: {
  text: string;
  author: string;
  stars: number;
}) {
  return (
    <div className="flex h-[300px] min-w-[200px] flex-col justify-between rounded-md bg-[#FBF9F2] p-8 px-5 text-[#4D533C] md:h-[202px] md:min-w-[306px]">
      <p className="italic">{text}</p>
      <div className="flex flex-col justify-between gap-1">
        <p className="font-bold">{author}</p>
        <div className="flex gap-2">
          {Array.from({ length: stars }).map((_, i) => (
            <img key={i} src="/images/star.png" alt="Green Star" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ratings;
