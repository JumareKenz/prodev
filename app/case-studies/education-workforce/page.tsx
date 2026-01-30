import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Education Workforce Development Program",
  description:
    "Technical assistance for teacher training program design and implementation monitoring across 50+ schools.",
};

const caseStudyData = {
  title: "Education Workforce Development Program",
  sector: "Education",
  service: "Technical Advisory & MEL",
  clientType: "NGO",
  timeline: "24 months",
  context:
    "An international NGO was launching a new teacher professional development program targeting rural primary schools in three states. The program aimed to improve literacy and numeracy outcomes through enhanced teaching quality, but needed rigorous design and monitoring systems to ensure effectiveness and demonstrate results to donors.",
  challenge:
    "The program needed to balance international best practices in teacher professional development with local context and constraints. Existing teacher support systems were under-resourced and inconsistent. The NGO required a clear theory of change, practical monitoring tools, and evidence-based training content adapted to low-resource rural settings. Additionally, they needed to establish partnerships with state education authorities to ensure sustainability.",
  approach:
    "We began with a comprehensive needs assessment including classroom observations, teacher surveys, and stakeholder consultations across the target states. We facilitated a theory of change workshop with program staff and partners to align on outcomes and assumptions. Based on evidence reviews and the needs assessment, we developed a detailed program design including training curricula, coaching protocols, and materials adapted for the local context. We created a monitoring framework tracking both implementation fidelity and learning outcomes, with tools for regular data collection and review.",
  deliverables: [
    "Program theory of change and results framework",
    "Detailed program design document",
    "Training curriculum and facilitator guides",
    "Classroom observation protocols",
    "MEL framework and data collection tools",
    "Teacher competency assessment instruments",
    "Partnership agreements with state authorities",
    "Learning briefs and progress reports",
  ],
  results: [
    "Evidence-based program design aligned with curriculum standards",
    "Functional monitoring system tracking teacher attendance and gains",
    "Training materials adapted for low-resource rural settings",
    "Established government partnerships for sustainability",
  ],
};

export default function EducationWorkforceCaseStudyPage() {
  return <CaseStudyTemplate {...caseStudyData} />;
}
