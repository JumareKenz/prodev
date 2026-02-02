import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/SectorDetailTemplate";

export const metadata: Metadata = {
  title: "Health Systems Strengthening",
  description:
    "Supporting robust health systems through strategic planning, quality improvement, and data-driven interventions.",
};

const sectorData = {
  title: "Health Systems Strengthening",
  description:
    "We support the development of resilient, equitable, and high-performing health systems through technical assistance, capacity building, and evidence-based interventions at all levels of care.",
  challenges: [
    "Primary healthcare service delivery gaps",
    "Health information system strengthening",
    "Disease surveillance and response capacity",
    "Health workforce development and retention",
    "Supply chain and logistics optimization",
    "Quality of care improvement",
    "Health financing and resource mobilization",
    "Community health system integration",
  ],
  services: [
    {
      title: "Program Design & Technical Advisory",
      description:
        "Health sector strategy development, policy advisory, and program design for disease control, maternal health, and primary care.",
      href: "/services/program-design/",
    },
    {
      title: "Project Management & Implementation",
      description:
        "Coordination support for multi-partner health initiatives, implementation oversight, and quality assurance.",
      href: "/services/project-management/",
    },
    {
      title: "MEL & Research",
      description:
        "Health information system strengthening, routine monitoring, and impact evaluations of health interventions.",
      href: "/services/monitoring-evaluation/",
    },
    {
      title: "Digital Transformation",
      description:
        "Electronic medical records, mobile health platforms, and health data analytics systems.",
      href: "/services/digital-transformation/",
    },
    {
      title: "Capacity Building",
      description:
        "Training for health workers, managers, and policymakers on evidence-based practices and quality improvement.",
      href: "/services/capacity-building/",
    },
  ],
  interventions: [
    "Health facility assessments and quality improvement initiatives",
    "Community health worker program design and training",
    "Health management information system strengthening",
    "Disease surveillance and outbreak response planning",
    "Health supply chain assessments and optimization",
    "Health financing and resource mapping exercises",
    "Maternal and child health program evaluations",
    "Health worker competency assessments and training",
  ],
  melApproach:
    "Our MEL approach in health emphasizes the integration of routine monitoring with periodic evaluations to track both service delivery outputs and health outcomes. We work with government health information systems to strengthen data quality and use, while supporting learning systems that enable rapid adaptation of programs based on emerging evidence. Our evaluations employ mixed-methods approaches that capture both quantitative health indicators and qualitative insights into implementation barriers and enablers.",
  relatedCaseStudies: [
    {
      title: "State Primary Healthcare MEL System",
      href: "/coming-soon/",
      service: "MEL & Digital Systems",
    },
  ],
  relatedInsights: [
    {
      title: "Strengthening Health Data Quality at Facility Level",
      href: "/coming-soon/",
      category: "MEL/Data Quality",
    },
    {
      title: "Community Health Worker Program Best Practices",
      href: "/coming-soon/",
      category: "Program Design",
    },
  ],
};

export default function HealthSectorPage() {
  return <SectorDetailTemplate {...sectorData} />;
}
