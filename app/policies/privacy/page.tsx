import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ProDev Consulting Limited privacy policy and data protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-primary-50 pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-bold text-neutral-900 mb-6">
              Privacy Policy
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
            <h2>Introduction</h2>
            <p>
              ProDev Consulting Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <h3>Personal Data</h3>
            <p>
              When you contact us, request a proposal, or subscribe to our newsletter, we may collect 
              personally identifiable information, such as your:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization name</li>
              <li>Job title</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              We may also collect information about how you access and use our website, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide our services</li>
              <li>Process and manage proposal requests</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>
            <ul>
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe disclosure is necessary 
                to comply with legal obligations or protect our rights and safety.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with 
                third parties that perform services for us, such as email delivery or website hosting.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we merge with or are acquired by another company.
              </li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your 
              personal information. While we have taken reasonable steps to secure the personal 
              information you provide, please be aware that no security measures are perfect or 
              impenetrable, and no method of data transmission can be guaranteed against any 
              interception or other type of misuse.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>ProDev Consulting Limited</strong>
              <br />
              Email: info@prodevconsulting.ng
              <br />
              Address: Abuja, Nigeria
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
