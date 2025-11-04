import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000A14] px-8 md:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Clothes AI" width={32} height={32} />
            <span className="text-xl font-bold text-foreground">
              Clothes AI
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 justify-center">
            <Link
              href="/privacy"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-foreground/20 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-foreground/60 text-sm">
          © 2025 Clothes AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
