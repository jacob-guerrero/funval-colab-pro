import React from 'react';

export default function ImagePlato({ src, alt }) {
  if (!src) return null;

  return (
    <div className="w-full flex justify-center items-center p-4">
      <img
        src={src}
        alt={alt}
        className="
          rounded-lg shadow-lg 
          w-[300px] md:w-[350px] lg:w-[400px]
          h-[200px] md:h-[230px] lg:h-[250px]
          object-cover
        "
      />
    </div>
  );
}
