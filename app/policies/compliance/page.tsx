import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "ProDev Consulting Limited code of conduct and professional ethics.",
};

export default function CompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-primary-50 pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-bold text-neutral-900 mb-6">
              Code of Conduct
            </h1>
            <p className="text-body-lg text-neutral-600">
              Our commitment to professional excellence and ethical conduct.
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
              ProDev Consulting Limited is committed to the highest standards of professional 
              conduct and ethics. This Code of Conduct sets out the principles and standards 
              that guide our work and our relationships with clients, partners, and communities.
            </p>

            <h2>Professional Integrity</h2>
            <p>We commit to:</p>
            <ul>
              <li>Honesty and accuracy in all our professional activities</li>
              <li>Maintaining competence in our areas of practice</li>
              <li>Delivering work of the highest quality within agreed parameters</li>
              <li>Acknowledging limitations and seeking assistance when needed</li>
              <li>Respecting intellectual property and giving credit where due</li>
            </ul>

            <h2>Client Relationships</h2>
            <p>In our relationships with clients, we will:</p>
            <ul>
              <li>Act in the best interests of our clients within the bounds of professional integrity</li>
              <li>Maintain confidentiality of client information</li>
              <li>Disclose any conflicts of interest</li>
              <li>Provide clear and accurate information about our services and fees</li>
              <li>Meet agreed deadlines and communicate proactively about challenges</li>
              <li>Respect the autonomy and decision-making authority of our clients</li>
            </ul>

            <h2>Conflict of Interest</h2>
            <p>
              We recognize and manage conflicts of interest that may arise in our work. We will:
            </p>
            <ul>
              <li>Disclose any actual or potential conflicts of interest to affected parties</li>
              <li>Decline engagements where conflicts cannot be appropriately managed</li>
              <li>Ensure that personal interests do not influence professional judgments</li>
              <li>Maintain independence in our analysis and recommendations</li>
            </ul>

            <h2>Anti-Corruption</h2>
            <p>We have zero tolerance for corruption in any form. We will:</p>
            <ul>
              <li>Not offer, pay, or accept bribes</li>
              <li>Not engage in fraudulent practices</li>
              <li>Comply with applicable anti-corruption laws and regulations</li>
              <li>Report concerns about corrupt practices appropriately</li>
            </ul>

            <h2>Respect and Non-Discrimination</h2>
            <p>We are committed to:</p>
            <ul>
              <li>Treating all individuals with respect and dignity</li>
              <li>Not discriminating on the basis of race, ethnicity, gender, religion, age, 
                  disability, or any other protected characteristic</li>
              <li>Creating inclusive environments in our work</li>
              <li>Respecting local cultures and customs</li>
            </ul>

            <h2>Data Protection and Privacy</h2>
            <p>We commit to:</p>
            <ul>
              <li>Protecting the privacy and confidentiality of personal data</li>
              <li>Collecting and using data only for legitimate purposes</li>
              <li>Implementing appropriate security measures</li>
              <li>Complying with applicable data protection laws</li>
            </ul>

            <h2>Quality Assurance</h2>
            <p>We maintain quality through:</p>
            <ul>
              <li>Rigorous internal review processes</li>
              <li>Peer review of deliverables</li>
              <li>Continuous professional development</li>
              <li>Learning from feedback and experience</li>
              <li>Adherence to professional standards and best practices</li>
            </ul>

            <h2>Environmental and Social Responsibility</h2>
            <p>We strive to:</p>
            <ul>
              <li>Minimize the environmental impact of our operations</li>
              <li>Consider social impacts in our recommendations</li>
              <li>Promote sustainable development practices</li>
              <li>Respect the rights of communities affected by programs we support</li>
            </ul>

            <h2>Reporting Concerns</h2>
            <p>
              If you have concerns about potential violations of this Code of Conduct, please 
              contact us at:
            </p>
            <p>
              <strong>ProDev Consulting Limited</strong>
              <br />
              Email: info@prodevconsulting.ng
            </p>
            <p>
              We take all concerns seriously and will investigate reports appropriately while 
              protecting the confidentiality of those who raise concerns.
            </p>

            <h2>Amendments</h2>
            <p>
              This Code of Conduct may be updated periodically to reflect changes in our 
              practices or applicable laws. The current version will always be available on 
              our website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
