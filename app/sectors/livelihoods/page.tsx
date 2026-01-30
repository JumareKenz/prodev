import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/SectorDetailTemplate";

export const metadata: Metadata = {
  title: "Livelihoods, Gender & Youth",
  description:
    "Promoting inclusive economic growth through skills development, enterprise support, and gender-responsive programming.",
};

const sectorData = {
  title: "Livelihoods, Gender & Youth",
  description:
    "We support inclusive economic development through interventions that empower women, engage youth, and strengthen livelihoods across agricultural and non-farm sectors.",
  challenges: [
    "Youth employment and entrepreneurship",
    "Women's economic empowerment",
    "Agricultural value chain development",
    "Financial inclusion and access",
    "Social protection programming",
    "Skills development and vocational training",
    "Enterprise development and MSME support",
    "Gender-based violence prevention and response",
  ],
  services: [
    {
      title: "Program Design & Technical Advisory",
      description:
        "Livelihood strategy, value chain analysis, and gender-responsive program design for economic empowerment.",
      href: "/services/program-design/",
    },
    {
      title: "Project Management & Implementation",
      description:
        "Coordination of livelihood programs, value chain initiative implementation, and partnership management.",
      href: "/services/project-management/",
    },
    {
      title: "MEL & Research",
      description:
        "Livelihood impact assessments, market analysis, and gender-disaggregated outcome monitoring.",
      href: "/services/monitoring-evaluation/",
    },
    {
      title: "Digital Transformation",
      description:
        "Digital financial services platforms, agricultural information systems, and market linkage technologies.",
      href: "/services/digital-transformation/",
    },
    {
      title: "Capacity Building",
      description:
        "Skills training, entrepreneurship development, and gender mainstreaming for organizations and beneficiaries.",
      href: "/services/capacity-building/",
    },
  ],
  interventions: [
    "Value chain assessments and upgrading strategies",
    "Youth employment program design and evaluation",
    "Women's economic empowerment initiative support",
    "Skills gap assessments and training program design",
    "Financial inclusion and literacy programs",
    "Agricultural extension system strengthening",
    "MSME development and business advisory services",
    "Social protection program assessments",
  ],
  melApproach:
    "Our livelihoods MEL approach emphasizes market systems and recognizes that sustainable impact requires changes in market relationships, not just individual beneficiary outcomes. We use gender-disaggregated indicators throughout and employ mixed-methods approaches that capture both quantitative economic indicators and qualitative dimensions of empowerment. Our evaluations assess sustainability by examining changes in market systems and institutional practices beyond program timelines.",
  relatedCaseStudies: [
    {
      title: "Youth Skills Development Program",
      href: "/case-studies/",
      service: "Training & MEL",
    },
  ],
  relatedInsights: [
    {
      title: "Market Systems Approaches in Practice",
      href: "/insights/",
      category: "Program Design",
    },
  ],
};

export default function LivelihoodsSectorPage() {
  return <SectorDetailTemplate {...sectorData} />;
}
