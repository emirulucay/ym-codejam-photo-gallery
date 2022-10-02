import HeroTitle from "./components/HeroTitle";
import Images from "./components/Images";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);

  const explore = () => {
    ref.current.scrollIntoView();
    console.log("asdasd");
  };

  return (
    <div className="container flex flex-col gap-10">
      <HeroTitle />
      <div onClick={() => explore()} className="flex items-center justify-center">
        <a className="text-white text-xl font-medium px-10 py-5 animate-explore transition-all duration-500 cursor-pointer rounded-lg">
          Explore
        </a>
      </div>
      <div ref={ref}>
        <Images />
      </div>
    </div>
  );
}
