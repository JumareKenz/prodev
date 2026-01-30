import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ProDev Consulting Limited terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-primary-50 pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-bold text-neutral-900 mb-6">
              Terms of Service
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the website of ProDev Consulting Limited (the &quot;Site&quot;), 
              you agree to be bound by these Terms of Service. If you disagree with any part 
              of the terms, you may not access the Site.
            </p>

            <h2>Intellectual Property Rights</h2>
            <p>
              The Site and its original content, features, and functionality are owned by 
              ProDev Consulting Limited and are protected by international copyright, trademark, 
              patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly 
              display, publicly perform, republish, download, store, or transmit any of the 
              material on our Site without our prior written consent.
            </p>

            <h2>Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Infringe the rights of, restrict, or inhibit anyone else&apos;s use of the Site</li>
              <li>Be unlawful, harmful, threatening, abusive, harassing, defamatory, or obscene</li>
              <li>Violate any applicable local, national, or international law</li>
              <li>Impersonate any person or misrepresent your identity</li>
              <li>Transmit any malware, viruses, or other harmful code</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
            </ul>

            <h2>Proposals and Services</h2>
            <p>
              Submitting a proposal request through our Site does not create a binding contract. 
              All services are subject to the execution of a separate service agreement between 
              ProDev Consulting Limited and the client.
            </p>
            <p>
              Information provided on the Site about our services is for general informational 
              purposes only and does not constitute professional advice.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The Site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. 
              ProDev Consulting Limited makes no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, 
              or availability of the Site or the information contained on it.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall ProDev Consulting Limited, its directors, employees, or agents 
              be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible 
              losses, resulting from your access to or use of or inability to access or use the Site.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless ProDev Consulting Limited and its 
              affiliates from and against any claims, liabilities, damages, judgments, awards, 
              losses, costs, expenses, or fees arising out of or relating to your violation of 
              these Terms of Service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              Federal Republic of Nigeria, without regard to its conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide 
              notice of any changes by posting the new Terms on this page and updating the 
              &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>ProDev Consulting Limited</strong>
              <br />
              Email: info@prodevconsulting.ng
              <br />
              Address: Abuja, Nigeria
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
