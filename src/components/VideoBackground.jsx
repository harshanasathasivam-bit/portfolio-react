import React from "react";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover -z-20 opacity-50"
    >
      <source src="/bgvideo.mp4" type="video/mp4" />
    </video>
  );
}
