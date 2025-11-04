import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Clothes AI",
  description:
    "Terms and conditions for using Clothes AI virtual try-on app. Read our user agreement and service policies.",
};

export default function Terms() {
  return (
    <div className="w-full bg-background">
      <Navbar />
      <main className="px-4 md:px-8 py-16">
        <article className="max-w-4xl mx-auto space-y-8 text-foreground">
          <h2 className="text-center mb-12">Terms of Service</h2>

          <h3 className="mt-8 mb-4">1. Acceptance of Terms</h3>
          <p className="mb-4 !text-foreground">
            By accessing and using Clothes AI's services, you agree to be bound
            by these Terms of Service. If you do not agree to these terms,
            please do not use our services.
          </p>

          <h3 className="mt-8 mb-4">2. Use of Service</h3>
          <p className="mb-4 !text-foreground">
            Clothes AI provides a virtual fitting room service that allows users
            to virtually try on clothing items. Users must be at least 13 years
            of age to use our services.
          </p>

          <h3 className="mt-8 mb-4">3. User Content</h3>
          <p className="mb-4 !text-foreground">
            By uploading photos or other content to Clothes AI, you grant us a
            non-exclusive license to use, modify, and display such content for
            the purpose of providing our services.
          </p>

          <p className="italic mt-8 text-center">Last Updated: May 2025</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
