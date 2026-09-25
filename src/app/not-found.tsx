import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 items-center">
        <div className="container-page py-24 text-center">
          <p className="font-mono text-sm font-semibold text-emerald-600">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">Back to home</Link>
            <Link href="/blog" className="btn-secondary">Browse the blog</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
