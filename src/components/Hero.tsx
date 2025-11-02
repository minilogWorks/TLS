function Hero() {
  return (
    <div className="w-full md:h-[60vh] overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero_img_thumbnail.jpg"
        className="w-full h-full"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
