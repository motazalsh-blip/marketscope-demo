import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

/** Layout for all public pages. The AdSense loader lives here only. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <AdSenseScript />
    </>
  );
}
