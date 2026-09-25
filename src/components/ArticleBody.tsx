import { Fragment, type ReactNode } from "react";
import type { ContentBlock } from "@/lib/posts";

function renderBlock(block: ContentBlock, key: number): ReactNode {
  switch (block.type) {
    case "p":
      return <p key={key}>{block.text}</p>;
    case "h2":
      return (
        <h2 key={key} id={block.id}>
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 key={key}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={key}>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key}>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside key={key} className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 px-5 py-4 text-base leading-7">
          <p className="font-semibold text-navy-900">{block.title}</p>
          <p className="mt-1 text-slate-700">{block.text}</p>
        </aside>
      );
    case "quote":
      return (
        <figure key={key} className="border-l-4 border-navy-900 pl-5">
          <blockquote className="text-xl font-medium leading-8 text-navy-900">“{block.text}”</blockquote>
          {block.cite && <figcaption className="mt-2 text-sm text-slate-500">— {block.cite}</figcaption>}
        </figure>
      );
    case "table":
      return (
        <figure key={key} className="-mx-4 sm:mx-0">
          <div className="overflow-x-auto rounded-none border-y border-slate-200 sm:rounded-xl sm:border">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-navy-900">
                <tr>
                  {block.headers.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {block.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`px-4 py-3 ${ci === 0 ? "font-medium text-navy-900" : "text-slate-600"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <figcaption className="mt-2 px-4 text-sm text-slate-500 sm:px-0">{block.caption}</figcaption>}
        </figure>
      );
  }
}

/**
 * Renders article blocks. `insert` is injected (e.g. an in-article
 * ad) right before the (insertBeforeHeading + 1)-th h2, so ads sit between sections, never mid-paragraph.
 */
export function ArticleBody({
  blocks,
  insert,
  insertBeforeHeading = 2,
}: {
  blocks: ContentBlock[];
  insert?: ReactNode;
  insertBeforeHeading?: number;
}) {
  const headingIndexes = blocks.flatMap((b, i) => (b.type === "h2" ? [i] : []));
  const injectAt = headingIndexes[insertBeforeHeading] ?? -1;
  return (
    <div className="prose-content">
      {blocks.map((b, i) => {
        const injectHere = Boolean(insert) && i === injectAt;
        return (
          <Fragment key={i}>
            {injectHere && <div className="my-10">{insert}</div>}
            {renderBlock(b, i)}
          </Fragment>
        );
      })}
    </div>
  );
}
