import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { formatDate } from "@/lib/posts";

export function LegalPage({
  title,
  description,
  updated,
  children,
}: {
  title: string;
  description: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} description={description} crumbs={[{ href: "/", label: "Home" }, { label: title }]}>
        <p className="mt-6 text-sm text-slate-400">
          Last updated: <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
      </PageHeader>
      <div className="container-page py-14 sm:py-16">
        <div className="max-w-3xl">
          <p
            role="note"
            className="mb-10 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
          >
            <strong>Template notice:</strong> this is sample legal text for a portfolio demo. Have a qualified
            professional review and adapt it before using it on a live website.
          </p>
          <div className="prose-content">{children}</div>
        </div>
      </div>
    </>
  );
}
