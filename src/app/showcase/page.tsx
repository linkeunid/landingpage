import { Footer } from "@/components/layout/footer";
import { Showcase } from "@/components/layout/showcase";
import { Navbar } from "@/components/ui/navbar";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-nunito-sans)]">
      <header>
        <Navbar />
      </header>
      <main className="pt-44">
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
