import useTypewriter from "react-typewriter-hook";
import { useState, useEffect, useRef } from "react";

const MagicOcean = ["designer", "bingebonge ", "example", "whyxample"];
let index = 0;

export default function Intro() {
  const [magicName, setMagicName] = useState("software developer");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 3000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return (
    <div className=" mx-auto max-w-screen-xl px-4  sm:px-6  ">
      <div className="text-center">
        <h2 className="pt-4 pb-4 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-1xl sm:leading-none md:text-6xl">
          Hi, I'm Kevin, and I am a {name}
        </h2>
      </div>
    </div>
  );
}
