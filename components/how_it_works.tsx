import Image from "next/image";
import { IoCamera, IoShirt } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="px-8 md:px-24 py-16 bg-background">
      <h2 className="text-center mb-12">How It Works</h2>

      <div className="flex flex-col md:flex-row gap-12 items-start justify-center max-w-6xl mx-auto">
        {/* Step 1: Take a Selfie */}
        <div className="flex flex-col items-center gap-4 flex-1">
          <h3 className="text-center flex items-center gap-2 justify-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <IoCamera className="text-foreground text-base" />
            </div>
            Take a Selfie
          </h3>
          <div className="w-32 h-48 relative rounded-xl overflow-hidden shadow-lg border-2 border-hint/20">
            <Image
              src="/model.jpg"
              alt="Take a selfie"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center max-w-xs">
            Upload your photo or snap a quick selfie to get started
          </p>
        </div>

        {/* Step 2: Select an Outfit */}
        <div className="flex flex-col items-center gap-4 flex-1">
          <h3 className="text-center flex items-center gap-2 justify-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <IoShirt className="text-foreground text-base" />
            </div>
            Select an Outfit
          </h3>
          <div className="w-32 h-48 relative rounded-xl overflow-hidden shadow-lg border-2 border-hint/20">
            <Image
              src="/outfits/outfit1.jpg"
              alt="Choose outfit"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center max-w-xs">
            Browse our collection and pick any style you want to try
          </p>
        </div>

        {/* Step 3: Try It On */}
        <div className="flex flex-col items-center gap-4 flex-1">
          <h3 className="text-center flex items-center gap-2 justify-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <FaMagic className="text-foreground text-sm" />
            </div>
            Try It On
          </h3>
          <div className="w-32 h-48 relative rounded-xl overflow-hidden shadow-lg border-2 border-primary/50">
            <Image
              src="/results/result1.jpg"
              alt="See result"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center max-w-xs">
            See how the outfit looks on you instantly with AI magic
          </p>
        </div>
      </div>
    </section>
  );
}
