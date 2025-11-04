import StoreButton from "./store_button";
import TryOnDisplay from "./tryon_display";

export default function Hero() {
  return (
    <section className="px-8 md:px-24 py-8 flex flex-col md:flex-row items-center gap-12 md:gap-32">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="text-center md:text-left">
          Your Wardrobe, <br /> Reimagined by AI
        </h1>
        <p className="text-center md:text-left">
          Instantly see yourself in any outfit. Transform your style with the
          magic of AI, no dressing room needed.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 py-6 ">
          <StoreButton />
        </div>
      </div>
      <TryOnDisplay />
    </section>
  );
}
