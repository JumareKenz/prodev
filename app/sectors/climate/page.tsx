import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/SectorDetailTemplate";

export const metadata: Metadata = {
  title: "Climate Adaptation & Resilience",
  description:
    "Building community resilience through climate-smart programming and sustainable natural resource management.",
};

const sectorData = {
  title: "Climate Adaptation & Resilience",
  description:
    "We support communities and institutions to adapt to climate change, build resilience, and manage natural resources sustainably through evidence-based interventions and capacity building.",
  challenges: [
    "Climate vulnerability assessments and mapping",
    "Adaptation strategy development",
    "Natural resource management",
    "Disaster risk reduction and preparedness",
    "Green livelihoods and sustainability",
    "Climate finance access and management",
    "Ecosystem restoration and conservation",
    "Climate information and early warning systems",
  ],
  services: [
    {
      title: "Program Design & Technical Advisory",
      description:
        "Climate adaptation strategy, resilience planning, and nature-based solution design for communities and institutions.",
      href: "/services/program-design/",
    },
    {
      title: "Project Management & Implementation",
      description:
        "Coordination of climate programs, resilience initiative implementation, and multi-stakeholder engagement.",
      href: "/services/project-management/",
    },
    {
      title: "MEL & Research",
      description:
        "Climate vulnerability assessments, resilience monitoring frameworks, and adaptation outcome evaluations.",
      href: "/services/monitoring-evaluation/",
    },
    {
      title: "Digital Transformation",
      description:
        "Climate data platforms, early warning systems, and natural resource monitoring technologies.",
      href: "/services/digital-transformation/",
    },
    {
      title: "Capacity Building",
      description:
        "Training on climate adaptation, sustainable resource management, and resilience planning for communities and officials.",
      href: "/services/capacity-building/",
    },
  ],
  interventions: [
    "Community vulnerability and capacity assessments",
    "Climate adaptation planning and strategy development",
    "Natural resource governance strengthening",
    "Disaster risk reduction program design",
    "Sustainable agriculture and livelihoods assessments",
    "Ecosystem restoration initiative evaluations",
    "Climate finance proposal development",
    "Early warning system strengthening",
  ],
  melApproach:
    "Our climate MEL approach recognizes the long-term nature of resilience building and combines indicators of immediate adaptive capacity with measures of sustained resilience. We employ participatory vulnerability assessments that capture local knowledge alongside technical climate data. Our evaluations consider both intended and unintended consequences of interventions, recognizing the complex socio-ecological systems within which climate adaptation occurs.",
  relatedCaseStudies: [
    {
      title: "Climate Resilience Assessment",
      href: "/case-studies/climate-resilience/",
      service: "Research & Evaluation",
    },
  ],
  relatedInsights: [
    {
      title: "Community-Based Adaptation Lessons Learned",
      href: "/insights/",
      category: "Program Design",
    },
  ],
};

export default function ClimateSectorPage() {
  return <SectorDetailTemplate {...sectorData} />;
}
