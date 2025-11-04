import StoreButton from "./store_button";

export default function CallToAction() {
  return (
    <section className="px-8 md:px-24 py-16 bg-background">
      <div className="flex flex-col gap-6 items-center text-center max-w-2xl mx-auto">
        <h2>Ready to Transform Your Style?</h2>
        <p className="text-lg">
          Join thousands using AI to discover their perfect look. Download now
          and start your style journey today!
        </p>
        <div className="pt-4">
          <StoreButton />
        </div>
      </div>
    </section>
  );
}
