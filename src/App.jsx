import HeroTitle from "./components/HeroTitle";
import Images from "./components/Images";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);

  const explore = () => {
    ref.current.scrollIntoView();
  };

  return (
    <div className="container flex flex-col gap-6">
      {/* hero title */}
      <HeroTitle />
      {/* explore button */}
      <div className="flex items-center justify-center">
        <a
          onClick={() => explore()}
          className="text-white text-lg lg:text-xl font-medium px-6 py-4 lg:px-10 lg:py-4 animate-explore transition-all duration-500 cursor-pointer rounded-lg">
          Explore
        </a>
      </div>
      {/* photos */}
      <div ref={ref}>
        <Images />
      </div>
      {/* signature */}
      <h5 className="text-gray-400 text-lg text-center mb-4">
        created with ❤️ by{" "}
        <a
          className="text-white hover:border-b-[1.5px] border-white leading-[1.2]"
          href="https://emirulucay.com"
          target="_blank"
          rel="noopener noreferrer">
          emir
        </a>
      </h5>
    </div>
  );
}
