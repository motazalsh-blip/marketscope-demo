import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms and conditions that apply when you access and use the MarketScope website and its content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The rules that apply when you access and use this website."
      updated="2026-09-25"
    >
      <h2 id="acceptance">1. Acceptance of terms</h2>
      <p>
        By accessing this website you agree to these Terms of Use. If you do not agree, please do not use the site.{" "}
        {siteConfig.name} is a fictional brand used for a portfolio demonstration.
      </p>

      <h2 id="content">2. Informational content only</h2>
      <p>
        Articles and figures on this website are sample content provided for general information and illustration. They
        are not financial, investment, legal or tax advice. Always seek advice from a qualified professional before
        making decisions.
      </p>

      <h2 id="ip">3. Intellectual property</h2>
      <p>
        Unless stated otherwise, the design, text and graphics on this website are owned by the site operator. You may
        share links to articles and quote short excerpts with attribution, but you may not republish full articles
        without permission.
      </p>

      <h2 id="acceptable-use">4. Acceptable use</h2>
      <ul>
        <li>Do not attempt to disrupt, overload or gain unauthorised access to the website.</li>
        <li>Do not use automated tools to scrape content at a rate that affects site performance.</li>
        <li>Do not submit false, unlawful or abusive information through forms.</li>
      </ul>

      <h2 id="third-party">5. Third-party links and advertising</h2>
      <p>
        The website may contain links to third-party websites and may display advertisements served by third parties
        such as Google AdSense. We are not responsible for the content, products or practices of those third parties.
        See our <Link href="/privacy">Privacy Policy</Link> for details on advertising cookies.
      </p>

      <h2 id="liability">6. Disclaimer and limitation of liability</h2>
      <p>
        The website is provided &quot;as is&quot; without warranties of any kind. To the fullest extent permitted by law,
        we are not liable for any loss arising from your use of, or reliance on, the website or its content.
      </p>

      <h2 id="changes">7. Changes</h2>
      <p>We may update these terms at any time. Continued use of the website after changes means you accept the revised terms.</p>

      <h2 id="contact">8. Contact</h2>
      <p>
        Questions about these terms? Visit our <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
