import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/SectorDetailTemplate";

export const metadata: Metadata = {
  title: "Governance & Accountability",
  description:
    "Strengthening public institutions, transparency mechanisms, and participatory governance processes.",
};

const sectorData = {
  title: "Governance & Accountability",
  description:
    "We support governance reforms that enhance transparency, accountability, and effectiveness of public institutions, fostering citizen engagement and improved service delivery.",
  challenges: [
    "Public financial management reform",
    "Anti-corruption and transparency initiatives",
    "Civic engagement and participation",
    "Decentralization and local governance",
    "Public service delivery improvement",
    "Institutional capacity development",
    "Policy implementation and coordination",
    "Legislative and oversight strengthening",
  ],
  services: [
    {
      title: "Program Design & Technical Advisory",
      description:
        "Governance reform strategy, policy analysis, and institutional design for transparency and accountability initiatives.",
      href: "/services/program-design/",
    },
    {
      title: "Project Management & Implementation",
      description:
        "Coordination of multi-stakeholder governance programs, reform implementation support, and change management.",
      href: "/services/project-management/",
    },
    {
      title: "MEL & Research",
      description:
        "Governance indicators, accountability mechanism assessments, and citizen feedback systems.",
      href: "/services/monitoring-evaluation/",
    },
    {
      title: "Digital Transformation",
      description:
        "E-governance platforms, transparency portals, and digital service delivery solutions.",
      href: "/services/digital-transformation/",
    },
    {
      title: "Capacity Building",
      description:
        "Training for public officials, civil society, and citizens on governance, accountability, and advocacy.",
      href: "/services/capacity-building/",
    },
  ],
  interventions: [
    "Public financial management system assessments",
    "Civic engagement and participation mechanisms",
    "Anti-corruption strategy development and implementation",
    "Local government capacity assessments",
    "Service delivery monitoring and citizen feedback systems",
    "Policy implementation tracking and evaluation",
    "Institutional governance audits",
    "Parliamentary oversight strengthening support",
  ],
  melApproach:
    "Our governance MEL approach recognizes the political nature of reform and employs context-sensitive methods to track changes in institutional practice, transparency, and accountability relationships. We combine quantitative indicators of service delivery with qualitative assessments of institutional culture and citizen perceptions. Our evaluations employ politically aware approaches that understand the incentives and power dynamics influencing governance outcomes.",
  relatedCaseStudies: [
    {
      title: "Local Government Transparency Initiative",
      href: "/coming-soon/",
      service: "MEL & Capacity Building",
    },
  ],
  relatedInsights: [
    {
      title: "Measuring Governance Outcomes in Complex Contexts",
      href: "/coming-soon/",
      category: "Governance & Delivery",
    },
  ],
};

export default function GovernanceSectorPage() {
  return <SectorDetailTemplate {...sectorData} />;
}
