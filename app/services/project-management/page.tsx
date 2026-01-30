import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Project Management & Implementation Support",
  description:
    "End-to-end project management support ensuring timely delivery, quality assurance, and stakeholder alignment.",
};

const serviceData = {
  title: "Project Management & Implementation Support",
  description:
    "We provide comprehensive project management services that ensure development programs are implemented efficiently, meet quality standards, and achieve their intended outcomes.",
  whatItIs:
    "Project Management & Implementation Support encompasses planning, coordination, monitoring, and quality assurance throughout the program implementation phase. We work as an extension of your team or as independent advisors to ensure projects stay on track, within budget, and aligned with objectives.",
  whoItIsFor: [
    "Organizations managing complex multi-partner programs",
    "Government agencies implementing sector reforms",
    "NGOs requiring additional management capacity",
    "Donors overseeing grantee implementation",
    "Consortia needing neutral coordination support",
  ],
  deliverables: [
    "Detailed work plans and implementation schedules",
    "Project management toolkits and templates",
    "Progress reports and dashboards",
    "Risk registers and mitigation plans",
    "Stakeholder communication plans",
    "Quality assurance frameworks",
    "Issue logs and resolution trackers",
    "Budget monitoring reports",
  ],
  approach: [
    {
      title: "Planning & Setup",
      description:
        "We establish project governance structures, develop detailed work plans, define roles and responsibilities, and set up monitoring systems.",
    },
    {
      title: "Implementation Oversight",
      description:
        "We provide ongoing oversight of implementation activities, track progress against milestones, and facilitate regular coordination meetings.",
    },
    {
      title: "Quality Assurance",
      description:
        "We implement quality checks at key milestones, review deliverables for compliance, and ensure adherence to organizational standards.",
    },
    {
      title: "Adaptive Management",
      description:
        "We support teams to respond to emerging challenges, adjust plans as needed, and incorporate learning into ongoing implementation.",
    },
  ],
  outcomes: [
    "Projects delivered on time, within scope, and on budget",
    "Improved coordination among multiple stakeholders and partners",
    "Enhanced quality of program outputs and activities",
    "Reduced implementation risks through proactive management",
    "Stronger organizational project management capabilities",
  ],
  relatedCaseStudies: [
    {
      title: "Multi-State Health Program Coordination",
      href: "/case-studies/health-systems-initiative/",
      sector: "Health",
    },
    {
      title: "Education Intervention Implementation Support",
      href: "/case-studies/education-workforce/",
      sector: "Education",
    },
  ],
};

export default function ProjectManagementPage() {
  return <ServiceDetailTemplate {...serviceData} />;
}
