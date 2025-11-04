import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-24  py-4 w-full">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Clothes AI" width={32} height={32} />
        <span className="text-xl font-[700]">Clothes AI</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="primary-rounded-button">
          Download App
        </Link>
      </div>
    </nav>
  );
}