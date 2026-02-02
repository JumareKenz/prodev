import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Digital Transformation & Data Systems",
  description:
    "Technology solutions, data platforms, and digital tools to streamline operations and enhance program insights.",
};

const serviceData = {
  title: "Digital Transformation & Data Systems",
  description:
    "We help organizations leverage technology to improve data management, streamline operations, and generate actionable insights through custom digital solutions.",
  whatItIs:
    "Digital Transformation & Data Systems services encompass the design, development, and implementation of technology solutions that enhance program management and decision-making. From mobile data collection to dashboards and database systems, we help organizations harness the power of digital tools.",
  whoItIsFor: [
    "Organizations seeking to modernize data collection processes",
    "Programs requiring custom dashboard solutions",
    "Government agencies digitizing monitoring systems",
    "NGOs implementing mobile data collection",
    "Teams needing database architecture and management",
  ],
  deliverables: [
    "Digital data collection system specifications",
    "Custom dashboard designs and implementations",
    "Database architecture documentation",
    "Mobile application requirements and testing",
    "Data visualization and reporting tools",
    "System integration plans",
    "User training materials",
    "Technology needs assessment reports",
  ],
  approach: [
    {
      title: "Needs Assessment",
      description:
        "We assess current technology infrastructure, data workflows, and user requirements to identify opportunities for digital enhancement.",
    },
    {
      title: "Solution Design",
      description:
        "We design appropriate technology solutions considering user capacity, connectivity constraints, and data security requirements.",
    },
    {
      title: "Implementation & Integration",
      description:
        "We support the deployment of digital tools, integration with existing systems, and configuration for specific use cases.",
    },
    {
      title: "Training & Support",
      description:
        "We provide comprehensive user training, documentation, and ongoing technical support to ensure successful adoption.",
    },
  ],
  outcomes: [
    "Faster, more accurate data collection through digital tools",
    "Real-time visibility into program performance via dashboards",
    "Reduced manual data processing and error rates",
    "Improved data security and access controls",
    "Enhanced decision-making through better data accessibility",
  ],
  relatedCaseStudies: [
    {
      title: "Health Information System Digitization",
      href: "/coming-soon/",
      sector: "Health",
    },
    {
      title: "Education Data Dashboard Development",
      href: "/coming-soon/",
      sector: "Education",
    },
  ],
};

export default function DigitalTransformationPage() {
  return <ServiceDetailTemplate {...serviceData} />;
}
