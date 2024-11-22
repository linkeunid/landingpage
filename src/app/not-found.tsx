import { Footer } from "@/components/layout/footer";
import { NotFound } from "@/components/layout/not-found";
import { Navbar } from "@/components/ui/navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-nunito-sans)]">
      <header>
        <Navbar />
      </header>
      <main className="pt-44">
        <NotFound />
      </main>
      <Footer />
    </div>
  );
}
