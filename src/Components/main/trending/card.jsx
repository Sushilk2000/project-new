function Card({ img, title, release_date }) {
  const base_url = "https://media.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div className="w-[150px] gap-5 cursor-pointer">
      <div className="w-full min-w-[150px]">
        <img
          src={`${base_url}${img}`}
          className="h-[225px] w-full rounded-md"
          alt=""
        />
      </div>
      <div className="pt-6 px-2">
        <div className="absolute -top-[17px] left-2.5">
          <div className="rounded-full w-[38px] h-[38px]"></div>
        </div>
        <p className="font-bold line-clamp-2">{title}</p>
        <p className="font-light">{release_date}</p>
      </div>
    </div>
  );
}

export default Card;
