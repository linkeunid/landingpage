import { Explore } from "@/components/layout/explore";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { ListArticle } from "@/components/layout/list-article";
import { Navbar } from "@/components/ui/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-nunito-sans)]">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Explore />
        <ListArticle />
      </main>
      <Footer />
    </div>
  );
}
