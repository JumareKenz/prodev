import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "State Health Systems Strengthening Initiative",
  description:
    "Supporting a state government to strengthen primary healthcare delivery through comprehensive MEL systems and capacity building.",
};

const caseStudyData = {
  title: "State Health Systems Strengthening Initiative",
  sector: "Health",
  service: "MEL & Implementation Support",
  clientType: "Government",
  timeline: "18 months",
  context:
    "The State Ministry of Health sought to improve primary healthcare service delivery across 20 local government areas with limited visibility into facility performance and patient outcomes. The state had invested significantly in infrastructure but lacked the systems to track service quality and inform resource allocation decisions.",
  challenge:
    "Fragmented data systems across different health programs created silos of information that were difficult to consolidate. Health facility staff had limited training in data collection and management, resulting in incomplete and delayed reporting. Decision-makers lacked timely, reliable data to identify gaps, track performance, or adjust strategies. The Ministry needed a comprehensive MEL system that could integrate existing data sources while building sustainable capacity for ongoing monitoring.",
  approach:
    "We adopted a participatory approach that engaged Ministry staff throughout the design and implementation process. We began with a comprehensive assessment of existing data systems, workflows, and capacity gaps. Working with a technical working group, we designed an integrated MEL framework aligned with national health information standards. We deployed digital data collection tools using mobile devices, established automated dashboards for real-time monitoring, and conducted comprehensive training for 150+ health workers and managers. We also provided ongoing mentoring and troubleshooting support to ensure system adoption and use.",
  deliverables: [
    "Comprehensive MEL framework document",
    "Integrated health information database",
    "Digital data collection tools and workflows",
    "Real-time performance dashboards",
    "Training curriculum and materials",
    "Standard operating procedures manual",
    "Data quality assessment reports",
    "Quarterly performance reports",
  ],
  results: [
    "Established functional MEL system integrated with national HMIS",
    "Improved data completeness from sample baseline to sample target",
    "Trained 150+ health workers in data collection and use",
    "Enabled data-driven resource allocation decisions",
  ],
};

export default function HealthSystemsCaseStudyPage() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
