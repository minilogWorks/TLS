function Hero() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        preload="metadata"
        poster="/images/hero_img_thumbnail.jpg"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
