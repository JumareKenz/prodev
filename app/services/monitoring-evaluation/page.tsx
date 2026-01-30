import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Monitoring, Evaluation, Research & Learning (MEL/MERL)",
  description:
    "Comprehensive MEL frameworks, data quality assurance, and learning systems for informed decision-making.",
};

const serviceData = {
  title: "Monitoring, Evaluation, Research & Learning (MEL/MERL)",
  description:
    "We design and implement robust MEL systems that generate actionable insights, ensure data quality, and foster a culture of continuous learning and improvement.",
  whatItIs:
    "Monitoring, Evaluation, Research & Learning (MEL/MERL) encompasses the systematic collection, analysis, and use of data to track program performance, evaluate effectiveness, generate evidence, and inform decision-making. Our services range from designing MEL frameworks to conducting complex evaluations and facilitating learning processes.",
  whoItIsFor: [
    "Programs requiring comprehensive MEL system design",
    "Organizations preparing for mid-term or final evaluations",
    "Donors seeking independent evaluation services",
    "Government agencies establishing monitoring systems",
    "Research partnerships and learning initiatives",
  ],
  deliverables: [
    "MEL frameworks and implementation plans",
    "Data collection tools and instruments",
    "Baseline, midline, and endline reports",
    "Performance monitoring dashboards",
    "Evaluation reports with actionable recommendations",
    "Learning briefs and evidence summaries",
    "Data quality assessment reports",
    "MEL training materials and guides",
  ],
  approach: [
    {
      title: "Framework Development",
      description:
        "We design tailored MEL frameworks aligned with program logic, defining key indicators, data sources, and reporting structures.",
    },
    {
      title: "Data Systems Setup",
      description:
        "We establish data collection workflows, quality assurance protocols, and management information systems to ensure reliable data.",
    },
    {
      title: "Implementation Support",
      description:
        "We provide ongoing support for data collection, analysis, and reporting, including training and troubleshooting.",
    },
    {
      title: "Evaluation & Learning",
      description:
        "We conduct rigorous evaluations, facilitate learning sessions, and support evidence-based decision-making processes.",
    },
  ],
  outcomes: [
    "Robust MEL systems that generate timely, reliable data for decision-making",
    "Improved program performance through evidence-based adaptations",
    "Stronger accountability to stakeholders and donors",
    "Enhanced organizational capacity for self-monitoring and evaluation",
    "Actionable learning that informs future program design",
  ],
  relatedCaseStudies: [
    {
      title: "State-Level Health MEL System Strengthening",
      href: "/case-studies/health-systems-initiative/",
      sector: "Health",
    },
    {
      title: "Education Program Impact Evaluation",
      href: "/case-studies/education-workforce/",
      sector: "Education",
    },
  ],
};

export default function MonitoringEvaluationPage() {
  return <ServiceDetailTemplate {...serviceData} />;
}
