import React from "react";

export default function MainTitle() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      {/* aşağıdaki h1 büyük olan yazıları içeriyor. bu yazıların renk değiştirmesi için ayrı olarak beforeları var. 
      onları global.css dosyasında yazdım  */}
      <h1 className="flex flex-col items-center justify-center">
        <span className="relative">
          <span className=" text-white text-5xl lg:text-9xl font-extrabold tracking-tight text-center greenText transition-all duration-200">
            Awesome
          </span>
        </span>
        <span className="relative">
          <span className=" text-white text-5xl lg:text-9xl font-extrabold tracking-tight text-center orangeText transition-all duration-200">
            Photo Gallery
          </span>
        </span>
      </h1>
      {/* kısa ve basit bir açıklama içeren text ve projenin bana ait olduğunu söyleyen ve siteme yönlendiren bir link */}
      <div className="flex flex-col mt-8">
        <h4 className="text-gray-200 font-medium text-2xl text-center">Simple and creative photo gallery</h4>
        <h5 className="text-gray-400 text-lg text-center">
          created by{" "}
          <a
            className="text-white hover:border-b-[1.5px] border-white leading-[1.2]"
            href="https://emirulucay.com"
            target="_blank"
            rel="noopener noreferrer">
            emir
          </a>
        </h5>
      </div>
    </div>
  );
}
