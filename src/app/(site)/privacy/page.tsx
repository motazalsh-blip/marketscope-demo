import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How MarketScope collects, uses and protects information, including cookies and third-party advertising such as Google AdSense.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use and protect information when you visit this website."
      updated="2026-09-25"
    >
      <h2 id="overview">1. Overview</h2>
      <p>
        This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) handles information when you
        visit this website. {siteConfig.name} is a demonstration project; the practices below describe how a production
        version of the site would operate.
      </p>

      <h2 id="information">2. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> details you enter in the contact form, such as your name, email
          address and message. On this demo site the form does not transmit or store any data.
        </li>
        <li>
          <strong>Usage data:</strong> standard technical information such as browser type, device, pages visited and
          referring URL, collected through server logs or analytics tools.
        </li>
        <li>
          <strong>Cookies:</strong> small files stored on your device to remember preferences and measure site usage.
        </li>
      </ul>

      <h2 id="advertising">3. Advertising and cookies</h2>
      <p>
        This website is prepared to display advertising through Google AdSense. When advertising is enabled:
      </p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.</li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visits to this
          and/or other sites on the internet.
        </li>
        <li>
          You may opt out of personalised advertising by visiting{" "}
          <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">Google Ads Settings</a>, or opt
          out of some third-party vendors&apos; use of cookies at{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">aboutads.info</a>.
        </li>
        <li>
          Learn more in{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            How Google uses information from sites that use its services
          </a>
          .
        </li>
      </ul>
      <p>
        Where required by law (for example in the EEA, UK or Switzerland), a certified consent management platform
        should be used to collect consent before personalised ads are shown.
      </p>

      <h2 id="use">4. How we use information</h2>
      <ul>
        <li>To respond to enquiries sent through the contact form.</li>
        <li>To operate, secure and improve the website.</li>
        <li>To understand which content is most useful to readers.</li>
        <li>To display advertising that helps fund free content.</li>
      </ul>

      <h2 id="sharing">5. Sharing</h2>
      <p>
        We do not sell personal information. We share data only with service providers that help us run the website
        (such as hosting, analytics and advertising partners), or when required by law.
      </p>

      <h2 id="rights">6. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct or delete your personal information, and
        to object to or restrict certain processing. To make a request, please <Link href="/contact">contact us</Link>.
      </p>

      <h2 id="retention">7. Data retention and security</h2>
      <p>
        We keep personal information only as long as needed for the purposes above and use reasonable technical and
        organisational measures to protect it.
      </p>

      <h2 id="children">8. Children</h2>
      <p>This website is not directed to children under 16, and we do not knowingly collect their personal information.</p>

      <h2 id="changes">9. Changes to this policy</h2>
      <p>We may update this policy from time to time. The &quot;Last updated&quot; date above shows the latest version.</p>

      <h2 id="contact">10. Contact</h2>
      <p>
        Questions about this policy can be sent to <strong>{siteConfig.email}</strong> (placeholder address) or through
        our <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
