import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Clothes AI",
  description:
    "Learn how Clothes AI protects your privacy and handles your data. Our commitment to user privacy and data security.",
};

export default function Privacy() {
  return (
    <div className="w-full bg-background">
      <Navbar />
      <main className="px-4 md:px-8 py-16">
        <article className="max-w-4xl mx-auto space-y-8 text-foreground">
          <h2 className="text-center mb-12">Privacy Policy</h2>

          <p className="mb-6 !text-foreground">
            This Privacy Policy applies to the Clothes AI mobile application
            ("Clothes AI", "the App"), operated by Ryan Egbejule ("we", "us", or
            "our"), as listed on the Google Play Store. If you have any
            questions about this policy or our data practices, you may contact
            us at{" "}
            <a
              href="mailto:ryanegbejule@gmail.com"
              className="text-primary hover:underline"
            >
              ryanegbejule@gmail.com
            </a>
            .
          </p>

          <h3 className="mt-8 mb-4">1. Information We Collect</h3>

          <h4 className="mt-6 mb-3">a. Device Identifier (Non-Personal)</h4>
          <p className="!text-foreground">
            We may collect a unique device identifier to:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Track app usage</li>
            <li>Prevent abuse of the free tier</li>
            <li>Preserve try-on history on the same device</li>
          </ul>
          <p className="mb-4 !text-foreground">
            This ID does not identify you personally and is used solely for app
            functionality.
          </p>

          <h4 className="mt-6 mb-3">b. Uploaded Images</h4>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>
              The App allows you to upload images of clothing and yourself for
              AI processing.
            </li>
            <li>
              These images may be temporarily sent to our servers or AI
              providers for rendering try-on results.
            </li>
            <li>
              Images are not stored permanently unless necessary for feature
              delivery (e.g., try-on history).
            </li>
          </ul>

          <h4 className="mt-6 mb-3">c. Purchase Data</h4>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>
              We use RevenueCat and the Apple/Google billing system to process
              subscriptions and purchases.
            </li>
            <li>
              We do not collect or store credit card or billing information
              directly.
            </li>
          </ul>

          <h4 className="mt-6 mb-3">d. Crash & Usage Data</h4>
          <p className="mb-4 !text-foreground">
            We may collect anonymized usage data or crash reports via services
            like Firebase to improve app stability and user experience.
          </p>

          <h3 className="mt-8 mb-4">2. How We Use Your Information</h3>
          <p className="mb-2 !text-foreground">We use your data to:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Provide core app functionality (e.g., generate try-ons)</li>
            <li>Enforce limits on free usage</li>
            <li>Improve our service and user experience</li>
            <li>Fulfill purchases or subscriptions</li>
          </ul>

          <h3 className="mt-8 mb-4">3. Data Retention</h3>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>
              Device identifiers are stored for as long as needed to enforce
              usage limits or maintain your history
            </li>
            <li>
              Uploaded images are processed temporarily and deleted unless
              stored by a user-facing feature (like try-on history)
            </li>
          </ul>

          <h3 className="mt-8 mb-4">4. Third-Party Services</h3>
          <p>We may use the following third-party services:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Firebase (for analytics, crash reporting)</li>
            <li>
              RevenueCat (for managing in-app purchases and subscriptions)
            </li>
            <li>AI providers for image processing (if used)</li>
          </ul>
          <p className="mb-4 !text-foreground">
            Each of these services has their own privacy policies. We ensure
            that these providers handle data responsibly and securely.
          </p>

          <h3 className="mt-8 mb-4">5. Children's Privacy</h3>
          <p className="mb-4 !text-foreground">
            Clothes AI is not intended for users under the age of 13. We do not
            knowingly collect data from children.
          </p>

          <h3 className="mt-8 mb-4">6. Your Rights</h3>
          <p className="!text-foreground">
            Depending on your location, you may have the right to:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Request access or deletion of your data</li>
            <li>Opt-out of analytics or tracking</li>
            <li>Contact us to inquire about what we store and why</li>
          </ul>

          <h3 className="mt-8 mb-4">7. Data Security</h3>
          <p className="mb-4 !text-foreground">
            We take industry-standard measures to protect your data from
            unauthorized access, loss, or misuse.
          </p>

          <h3 className="mt-8 mb-4">8. Changes to This Policy</h3>
          <p className="mb-4 !text-foreground">
            We may update this Privacy Policy from time to time. Significant
            changes will be communicated via in-app notices or updates to this
            page.
          </p>

          <h3 className="mt-8 mb-4">9. Contact Us</h3>
          <p className="mb-4 !text-foreground">
            If you have any questions about this Privacy Policy or our data
            practices, contact us at:{" "}
            <a
              href="mailto:ryanegbejule@gmail.com"
              className="text-primary hover:underline"
            >
              ryanegbejule@gmail.com
            </a>
          </p>

          <p className="text-hint italic mt-8">Last Updated: May 2025</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
