"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TryOnDisplay() {
  //outfits and results 1 - 6
  const oufits = [
    "/outfits/outfit1.jpg",
    "/outfits/outfit2.jpg",
    "/outfits/outfit3.jpg",
    "/outfits/outfit4.jpg",
    "/outfits/outfit5.jpg",
    "/outfits/outfit6.jpg",
  ];
  const results = [
    "/results/result1.jpg",
    "/results/result2.png",
    "/results/result3.png",
    "/results/result4.png",
    "/results/result5.png",
    "/results/result6.png",
  ];

  const model = "/model.jpg";

  const [currentTryonIndex, setCurrentTryonIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTryonIndex((prevIndex) =>
        prevIndex === 5 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      {/* Input Section */}
      <div className="flex flex-row md:flex-col gap-3 items-center">
        <div
          key={`outfit-${currentTryonIndex}`}
          className="w-[100px] h-[140px] md:w-[140px] md:h-[200px] relative rounded-xl overflow-hidden border-2 border-hint/30 shadow-lg animate-[slideIn_0.5s_ease-out]"
        >
          <Image
            src={oufits[currentTryonIndex]}
            alt="Outfit Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center text-foreground text-2xl font-bold">+</div>
        <div className="w-[100px] h-[140px] md:w-[140px] md:h-[200px] relative rounded-xl overflow-hidden border-2 border-hint/30 shadow-lg">
          <Image src={model} alt="Model Image" fill className="object-cover" />
        </div>
      </div>

      {/* Arrow */}
      <div className="text-5xl text-white animate-pulse rotate-90 md:rotate-0">
        →
      </div>

      {/* Result Section */}
      <div
        key={`result-${currentTryonIndex}`}
        className="w-[200px] h-[350px] md:w-[240px] md:h-[420px] relative rounded-2xl overflow-hidden shadow-2xl animate-[dropIn_0.6s_ease-out]"
      >
        <Image
          src={results[currentTryonIndex]}
          alt="Result Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
