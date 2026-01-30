import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ProDev Consulting Limited cookie policy and tracking technologies.",
};

export default function CookiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-primary-50 pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-bold text-neutral-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-body-lg text-neutral-600">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-prose">
          <div className="prose prose-neutral max-w-none">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently and 
              provide information to the website owners.
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility. You may not 
              opt-out of these cookies.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors interact with our website. 
              This helps us improve our website and services. These cookies collect information 
              in an anonymous form.
            </p>

            <h3>Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering 
              your preferences and choices.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              We may use third-party services that place cookies on your device. These include:
            </p>
            <ul>
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Social media platforms</li>
              <li>Embedded content providers</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul>
              <li>View cookies stored on your device</li>
              <li>Delete cookies</li>
              <li>Block cookies from particular sites</li>
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
            </ul>
            <p>
              Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any 
              changes by posting the new policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p>
              <strong>ProDev Consulting Limited</strong>
              <br />
              Email: info@prodevconsulting.ng
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
