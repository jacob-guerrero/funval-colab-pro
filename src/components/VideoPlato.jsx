import React from 'react';

export default function VideoPlato({ youtubeUrl }) {
  if (!youtubeUrl) return null;

  const embedUrl = youtubeUrl.replace('watch?v=', 'embed/');

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="
        w-[300px] md:w-[350px] lg:w-[400px]
        h-[170px] md:h-[200px] lg:h-[225px]
        rounded-lg overflow-hidden shadow-lg
      ">
        <iframe
          src={embedUrl}
          title="Video de preparación"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
