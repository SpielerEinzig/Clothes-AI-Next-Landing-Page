import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { IoMail } from "react-icons/io5";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Clothes AI",
  description:
    "Get in touch with the Clothes AI team. Have questions or feedback? We're here to help.",
};

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen">
      <Navbar />
      <main className="px-4 md:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-12 text-foreground">Contact Us</h2>

          <div className="bg-[#000A14] rounded-2xl p-12 flex flex-col items-center gap-6 shadow-xl">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <IoMail className="text-primary text-4xl" />
            </div>

            <p className="text-foreground text-center text-lg">
              For any inquiries, please email us at:
            </p>

            <a
              href="mailto:ryanegbejule@gmail.com"
              className="text-primary text-xl font-medium hover:underline transition-all"
            >
              ryanegbejule@gmail.com
            </a>

            <p className="text-foreground text-center">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
