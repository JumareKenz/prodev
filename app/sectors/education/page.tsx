import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/SectorDetailTemplate";

export const metadata: Metadata = {
  title: "Education Systems & Workforce",
  description:
    "Enhancing education quality through teacher development, curriculum design, and institutional capacity building.",
};

const sectorData = {
  title: "Education Systems & Workforce",
  description:
    "We support education system improvement through technical assistance in curriculum, assessment, teacher development, and education management to improve learning outcomes at all levels.",
  challenges: [
    "Teacher training and professional development gaps",
    "Learning outcome assessment and monitoring",
    "Education management information systems",
    "Inclusive education programming",
    "Technical and vocational skills development",
    "Early childhood education access and quality",
    "Education sector planning and policy",
    "School management and leadership",
  ],
  services: [
    {
      title: "Program Design & Technical Advisory",
      description:
        "Education sector analysis, curriculum review, and program design for literacy, numeracy, and skills development initiatives.",
      href: "/services/program-design/",
    },
    {
      title: "Project Management & Implementation",
      description:
        "Support for education intervention rollouts, school improvement programs, and multi-partner coordination.",
      href: "/services/project-management/",
    },
    {
      title: "MEL & Research",
      description:
        "Learning assessment design, education outcome evaluations, and education management information systems.",
      href: "/services/monitoring-evaluation/",
    },
    {
      title: "Digital Transformation",
      description:
        "Education technology platforms, student information systems, and digital learning solutions.",
      href: "/services/digital-transformation/",
    },
    {
      title: "Capacity Building",
      description:
        "Teacher training, school leadership development, and education official capacity strengthening.",
      href: "/services/capacity-building/",
    },
  ],
  interventions: [
    "Teacher professional development program design",
    "School quality assessment and improvement planning",
    "Literacy and numeracy intervention evaluations",
    "Education data system strengthening",
    "Curriculum alignment and material development support",
    "School management committee training",
    "Inclusive education policy and practice reviews",
    "Vocational skills program assessments",
  ],
  melApproach:
    "Our education MEL approach focuses on measuring both access and learning outcomes, recognizing that enrollment alone does not guarantee educational quality. We employ a range of assessment tools from standardized tests to classroom observation protocols, combined with systems strengthening support to improve data use for decision-making. Our evaluations consider the complex ecosystem of factors influencing learning, including teacher quality, materials availability, school leadership, and community engagement.",
  relatedCaseStudies: [
    {
      title: "Teacher Training Program Impact Evaluation",
      href: "/coming-soon/",
      service: "MEL & Training",
    },
  ],
  relatedInsights: [
    {
      title: "Measuring Learning Outcomes in Low-Resource Settings",
      href: "/coming-soon/",
      category: "MEL/Data Quality",
    },
    {
      title: "Effective Teacher Professional Development Models",
      href: "/coming-soon/",
      category: "Capacity Building",
    },
  ],
};

export default function EducationSectorPage() {
  return <SectorDetailTemplate {...sectorData} />;
}
