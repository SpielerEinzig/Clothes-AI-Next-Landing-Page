"use client";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

export default function StoreButton() {
  const appStoreLink = "https://apps.apple.com/us/app/outfit-maker-clothes-ai/id6745129239?ct=clothesai.app&mt=8";
  const googlePlayLink = "https://play.google.com/store/apps/details?id=tech.withryan.clothesai&referrer=utm_source%3Dclothesai.app";

  return (
    <div className="flex rounded-full overflow-hidden border-2 border-primary">
      {/* App Store Side */}
      <a
        href={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-primary text-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
      >
        <span className="w-6 h-6 flex items-center justify-center text-xl">
          <IoLogoApple />
        </span>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[0.65rem] opacity-80">Get it on</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      </a>

      {/* Divider */}
      <div className="w-[2px] bg-foreground/20"></div>

      {/* Play Store Side */}
      <a
        href={googlePlayLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-primary text-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
      >
        <span className="w-6 h-6 flex items-center justify-center text-xl">
          <IoLogoGooglePlaystore />
        </span>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[0.65rem] opacity-80">Get it on</span>
          <span className="text-sm font-semibold">Play Store</span>
        </div>
      </a>
    </div>
  );
}
