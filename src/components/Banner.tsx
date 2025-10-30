function Banner() {
  return (
    <div className="bg-[#b69121] py-2.5">
      <div className="sm:w-[90%] lg:w-[75%] mx-auto flex justify-center md:justify-between">
        <div className="hidden md:block space-x-4 text-white text-lg">
          <i className="ri-youtube-fill"></i>
          <i className="ri-facebook-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-twitter-x-fill"></i>
        </div>
        <div className="text-white ">
          <div className="space-x-2">
            <i className="ri-play-large-fill"></i>
            <span>Watch Live Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
