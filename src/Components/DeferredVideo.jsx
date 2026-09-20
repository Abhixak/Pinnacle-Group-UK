const DeferredVideo = ({
  src,
  poster,
  className,
  ariaLabel,
  playLabel = "Play video",
  posterAlt,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
}) => {
  return (
    <video
      src={src}
      className={className}
      autoPlay
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      preload="metadata"
      poster={poster}
      aria-label={ariaLabel || playLabel}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default DeferredVideo;