import { adsTxtPublisherId } from "@/lib/adsense";

/**
 * Serves /ads.txt.
 * - With NEXT_PUBLIC_ADSENSE_PUBLISHER_ID set, outputs the standard Google line.
 * - Without it, outputs a commented example so no fake seller is declared.
 * See public/ads.txt.example for the reference format.
 */
export const dynamic = "force-static";

export function GET() {
  const pubId = adsTxtPublisherId();

  const body = pubId
    ? `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
    : [
        "# ads.txt — not active yet.",
        "# Set NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX and redeploy.",
        "# The generated line will look like:",
        "# google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0",
        "",
      ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
