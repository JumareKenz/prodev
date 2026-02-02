import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Program Design & Technical Advisory",
  description:
    "Strategic program design, technical assistance, and evidence-based advisory services for development initiatives.",
};

const serviceData = {
  title: "Program Design & Technical Advisory",
  description:
    "We help organizations design effective development programs grounded in evidence, local context, and international best practices. Our advisory services span the entire program lifecycle.",
  whatItIs:
    "Program Design & Technical Advisory involves working closely with clients to conceptualize, plan, and structure development initiatives that are feasible, impactful, and aligned with stakeholder goals. We bring expertise in results-based management, theory of change development, and evidence synthesis to ensure programs are built on solid foundations.",
  whoItIsFor: [
    "Government agencies developing sector strategies",
    "International NGOs launching new initiatives",
    "Donor organizations designing funding mechanisms",
    "Private sector CSR/ESG teams",
    "Multi-stakeholder partnerships and consortia",
  ],
  deliverables: [
    "Program strategy documents and theories of change",
    "Results frameworks with SMART indicators",
    "Feasibility studies and market assessments",
    "Policy briefs and technical recommendations",
    "Grant proposals and funding applications",
    "Landscape analyses and evidence reviews",
    "Stakeholder engagement plans",
    "Risk assessment matrices",
  ],
  approach: [
    {
      title: "Discovery & Context Analysis",
      description:
        "We conduct thorough desk reviews, stakeholder consultations, and context analysis to understand the operating environment, existing evidence, and key challenges.",
    },
    {
      title: "Evidence Synthesis",
      description:
        "We review relevant literature, program evaluations, and best practices to inform program design decisions and avoid reinventing approaches with proven limitations.",
    },
    {
      title: "Co-Design Workshops",
      description:
        "We facilitate participatory workshops with stakeholders to develop theories of change, define target outcomes, and align on program priorities.",
    },
    {
      title: "Documentation & Validation",
      description:
        "We produce comprehensive design documents and facilitate validation sessions to ensure stakeholder buy-in and clarity on implementation pathways.",
    },
  ],
  outcomes: [
    "Programs designed with clear, measurable outcomes and realistic implementation pathways",
    "Increased stakeholder alignment and shared understanding of program goals",
    "Evidence-based interventions that build on proven approaches and local knowledge",
    "Stronger funding applications with compelling theories of change",
    "Enhanced organizational capacity for program design and strategic planning",
  ],
  relatedCaseStudies: [
    {
      title: "State Health Sector Strategy Development",
      href: "/coming-soon/",
      sector: "Health",
    },
    {
      title: "Education Program Design for Rural Communities",
      href: "/coming-soon/",
      sector: "Education",
    },
  ],
};

export default function ProgramDesignPage() {
  return <ServiceDetailTemplate {...serviceData} />;
}
