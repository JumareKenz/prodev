import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Climate Resilience Baseline Assessment",
  description:
    "Baseline assessment and resilience framework development for a multi-state climate adaptation program.",
};

const caseStudyData = {
  title: "Climate Resilience Baseline Assessment",
  sector: "Climate",
  service: "Research & Evaluation",
  clientType: "Donor",
  timeline: "6 months",
  context:
    "A bilateral donor commissioned a baseline study to inform the design of a new climate adaptation program across six states in Northern Nigeria. The program aimed to build community resilience to climate change through sustainable natural resource management and livelihood diversification.",
  challenge:
    "The assessment needed to capture complex vulnerability dynamics across diverse agro-ecological zones, understand existing community adaptation practices, and assess institutional capacity for climate response. The study required balancing rigorous methodology with practical constraints of access and security in some target areas. Results needed to inform program design while being accessible to diverse stakeholders including government, communities, and implementing partners.",
  approach:
    "We employed a mixed-methods approach combining quantitative and qualitative data collection. Climate data analysis provided historical context on temperature and rainfall patterns. Household surveys captured socioeconomic conditions and coping strategies across representative samples. Key informant interviews with government officials, traditional leaders, and technical experts provided institutional perspectives. Participatory community assessments engaged local stakeholders in vulnerability mapping and adaptation priority-setting. We synthesized findings through collaborative analysis workshops with the donor and partners.",
  deliverables: [
    "Comprehensive baseline assessment report",
    "Climate vulnerability profiles by state and community",
    "Institutional capacity assessment findings",
    "Community adaptation practice inventory",
    "GIS vulnerability maps",
    "Program design recommendations",
    "Stakeholder validation workshop report",
    "Policy brief for government engagement",
  ],
  results: [
    "Comprehensive vulnerability profiles for target communities",
    "Identified locally-appropriate adaptation strategies",
    "Assessed institutional capacity for climate response",
    "Informed evidence-based program design",
  ],
};

export default function ClimateResilienceCaseStudyPage() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
