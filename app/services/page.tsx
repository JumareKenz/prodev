"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ClipboardCheck,
  LineChart,
  BarChart3,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const viewportConfig = { once: true, margin: "-100px" as const };

const services = [
  {
    id: "program-design",
    icon: Lightbulb,
    title: "Program Design & Technical Advisory",
    shortDesc:
      "Strategic program design, technical assistance, and evidence-based advisory services for development initiatives.",
    features: [
      "Program strategy and theory of change development",
      "Technical assistance and policy advisory",
      "Feasibility studies and landscape analysis",
      "Results framework and indicator design",
      "Grant and proposal development support",
    ],
    href: "/services/program-design/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: "project-management",
    icon: ClipboardCheck,
    title: "Project Management & Implementation Support",
    shortDesc:
      "End-to-end project management support ensuring timely delivery, quality assurance, and stakeholder alignment.",
    features: [
      "Project planning and work plan development",
      "Implementation oversight and coordination",
      "Quality assurance and compliance monitoring",
      "Stakeholder engagement and communication",
      "Risk management and mitigation planning",
    ],
    href: "/services/project-management/",
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    id: "monitoring-evaluation",
    icon: LineChart,
    title: "Monitoring, Evaluation, Research & Learning (MEL/MERL)",
    shortDesc:
      "Comprehensive MEL frameworks, data quality assurance, and learning systems for informed decision-making.",
    features: [
      "MEL system design and implementation",
      "Baseline, midline, and endline studies",
      "Data quality assessments and audits",
      "Performance monitoring and reporting",
      "Organizational learning and adaptation",
    ],
    href: "/services/monitoring-evaluation/",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    id: "digital-transformation",
    icon: BarChart3,
    title: "Digital Transformation & Data Systems",
    shortDesc:
      "Technology solutions, data platforms, and digital tools to streamline operations and enhance program insights.",
    features: [
      "Digital data collection system design",
      "Dashboard and visualization development",
      "Database architecture and management",
      "Process automation and workflow optimization",
      "Technology needs assessments",
    ],
    href: "/services/digital-transformation/",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
  {
    id: "capacity-building",
    icon: GraduationCap,
    title: "Capacity Building & Training",
    shortDesc:
      "Customized training programs, institutional strengthening, and skills development for sustainable impact.",
    features: [
      "Training needs assessments",
      "Curriculum design and development",
      "Facilitation and workshop delivery",
      "Institutional capacity assessments",
      "Mentoring and coaching programs",
    ],
    href: "/services/capacity-building/",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section - Enhanced with glassmorphism */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <div className="container-wide relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-lg shadow-blue-500/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                What We Offer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-lg font-bold text-neutral-900 mb-6"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-body-lg text-neutral-600 leading-relaxed"
            >
              We offer comprehensive consulting services spanning the full program 
              lifecycle—from strategic design through implementation, monitoring, 
              evaluation, and continuous learning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced with glassmorphism */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-8 lg:p-10 rounded-3xl ${service.bgColor} backdrop-blur-xl border ${service.borderColor} overflow-hidden transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Gradient Line Top */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                
                <div className="grid lg:grid-cols-3 gap-8 relative">
                  <div className="lg:col-span-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                      {service.title}
                    </h2>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-neutral-600 mb-6 text-lg">{service.shortDesc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          className="flex items-start space-x-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:bg-white/80 transition-all"
                        >
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${service.color} rounded-full text-white p-0.5`} />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-blue-950 to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMzQgMzZoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')]" />
        
        <div className="container-wide relative">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-cyan-300 text-sm font-semibold rounded-full mb-4 border border-white/20">
              Our Approach
            </span>
            <h2 className="text-display-md font-bold text-white mb-4">
              Why Choose <span className="text-gradient">ProDev</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              We bring a unique combination of expertise, experience, and commitment to every engagement.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Results-Focused",
                description: "We measure success by the outcomes we help our clients achieve, not just deliverables completed.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Evidence-Based",
                description: "Our recommendations are grounded in data, research, and proven best practices from across the sector.",
                color: "from-cyan-500 to-teal-500",
              },
              {
                icon: Zap,
                title: "Adaptive & Agile",
                description: "We respond quickly to changing contexts and needs, ensuring our support remains relevant and effective.",
                color: "from-violet-500 to-purple-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUpVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                Need a Custom Solution?
              </h2>
              <p className="text-blue-100 text-lg">
                We tailor our services to meet your specific program needs and context.
              </p>
            </div>
            <Link
              href="/contact/?form=proposal"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
