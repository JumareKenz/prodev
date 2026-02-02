import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Capacity Building & Training",
  description:
    "Customized training programs, institutional strengthening, and skills development for sustainable impact.",
};

const serviceData = {
  title: "Capacity Building & Training",
  description:
    "We design and deliver targeted capacity building interventions that strengthen organizational capabilities and individual skills for sustained program success.",
  whatItIs:
    "Capacity Building & Training encompasses the assessment, design, and delivery of learning interventions that enhance the knowledge, skills, and institutional capabilities of organizations and their staff. Our approach goes beyond one-off training to include mentoring, coaching, and institutional strengthening.",
  whoItIsFor: [
    "Organizations seeking to strengthen internal MEL capabilities",
    "Government agencies building technical skills",
    "NGOs developing training programs for beneficiaries",
    "Project teams requiring specialized technical training",
    "Institutions undergoing organizational development",
  ],
  deliverables: [
    "Training needs assessment reports",
    "Customized curriculum and training materials",
    "Facilitator guides and participant handbooks",
    "Pre and post-training assessments",
    "Training completion certificates",
    "Institutional capacity assessment reports",
    "Mentoring and coaching frameworks",
    "Knowledge products and toolkits",
  ],
  approach: [
    {
      title: "Needs Assessment",
      description:
        "We assess current capabilities, identify gaps, and understand organizational context to design targeted interventions.",
    },
    {
      title: "Curriculum Design",
      description:
        "We develop customized learning curricula that blend theoretical knowledge with practical application and adult learning principles.",
    },
    {
      title: "Delivery & Facilitation",
      description:
        "We deliver engaging training sessions using participatory methods, ensuring knowledge transfer and skill practice.",
    },
    {
      title: "Follow-up & Support",
      description:
        "We provide post-training support, mentoring, and coaching to ensure learning is applied and sustained over time.",
    },
  ],
  outcomes: [
    "Enhanced technical skills and knowledge among staff and partners",
    "Stronger organizational systems and processes",
    "Improved program implementation quality",
    "Increased self-reliance and reduced external dependency",
    "Sustained capacity for continuous learning and improvement",
  ],
  relatedCaseStudies: [
    {
      title: "Government M&E Officer Training Program",
      href: "/coming-soon/",
      sector: "Health",
    },
    {
      title: "NGO Institutional Strengthening Initiative",
      href: "/coming-soon/",
      sector: "Education",
    },
  ],
};

export default function CapacityBuildingPage() {
  return <ServiceDetailTemplate {...serviceData} />;
}
