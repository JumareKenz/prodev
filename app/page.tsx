"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  ClipboardCheck,
  LineChart,
  GraduationCap,
  Search,
  Lightbulb,
  BarChart3,
  Shield,
  Award,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Play,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Enhanced animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Infinity },
  },
};

// Service pillars data
const services = [
  {
    icon: Lightbulb,
    title: "Program Design & Technical Advisory",
    description:
      "Strategic program design, technical assistance, and evidence-based advisory services for development initiatives.",
    href: "/services/program-design/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management & Implementation",
    description:
      "End-to-end project management support ensuring timely delivery, quality assurance, and stakeholder alignment.",
    href: "/services/project-management/",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: LineChart,
    title: "Monitoring, Evaluation & Learning",
    description:
      "Comprehensive MEL frameworks, data quality assurance, and learning systems for informed decision-making.",
    href: "/services/monitoring-evaluation/",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Digital Transformation & Data Systems",
    description:
      "Technology solutions, data platforms, and digital tools to streamline operations and enhance program insights.",
    href: "/services/digital-transformation/",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    description:
      "Customized training programs, institutional strengthening, and skills development for sustainable impact.",
    href: "/services/capacity-building/",
    color: "from-purple-500 to-pink-500",
  },
];

// How We Work steps
const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We conduct thorough assessments to understand your context, challenges, and opportunities for maximum impact.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop tailored solutions grounded in evidence, local context, and international best practices.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We implement with precision, maintaining quality standards, timeline integrity, and stakeholder engagement.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "We track outcomes, generate insights, and continuously refine approaches for sustained effectiveness.",
    icon: TrendingUp,
  },
];

// Featured case studies
const caseStudies = [
  {
    title: "Health Systems Strengthening Initiative",
    sector: "Health",
    service: "MEL & Implementation Support",
    description:
      "Supporting a state government to strengthen primary healthcare delivery through comprehensive MEL systems and capacity building.",
    href: "/case-studies/health-systems-initiative/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Education Workforce Development",
    sector: "Education",
    service: "Technical Advisory",
    description:
      "Technical assistance for teacher training program design and implementation monitoring across 50+ schools.",
    href: "/case-studies/education-workforce/",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Climate Resilience Assessment",
    sector: "Climate",
    service: "Research & Evaluation",
    description:
      "Baseline assessment and resilience framework development for a multi-state climate adaptation program.",
    href: "/case-studies/climate-resilience/",
    color: "from-emerald-500 to-green-500",
  },
];

// Sectors data
const sectors = [
  {
    title: "Health Systems Strengthening",
    description:
      "Supporting robust health systems through strategic planning, quality improvement, and data-driven interventions.",
    href: "/sectors/health/",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Education Systems & Workforce",
    description:
      "Enhancing education quality through teacher development, curriculum design, and institutional capacity building.",
    href: "/sectors/education/",
    icon: GraduationCap,
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Governance & Accountability",
    description:
      "Strengthening public institutions, transparency mechanisms, and participatory governance processes.",
    href: "/sectors/governance/",
    icon: Building2,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Climate Adaptation & Resilience",
    description:
      "Building community resilience through climate-smart programming and sustainable natural resource management.",
    href: "/sectors/climate/",
    icon: Sparkles,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Livelihoods, Gender & Youth",
    description:
      "Promoting inclusive economic growth through skills development, enterprise support, and gender-responsive programming.",
    href: "/sectors/livelihoods/",
    icon: Users,
    color: "from-orange-500 to-amber-500",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Enhanced with vibrant gradient and animations */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-gradient opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50" />

        {/* Floating Orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl"
        />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-lg shadow-blue-500/10"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Trusted by Government, Donors & NGOs
                </span>
              </motion.div>

              <h1 className="text-display-lg lg:text-display-xl font-bold leading-tight">
                <span className="text-neutral-900">Professional Consulting for</span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gradient"
                >
                  Development Impact
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-body-lg text-neutral-600 max-w-xl leading-relaxed"
              >
                We provide expert consulting and project management services that enhance
                program design, delivery, monitoring, and evaluation across public and
                private sectors in Nigeria and Africa.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact/?form=proposal" className="btn-primary group">
                  <span className="relative z-10 flex items-center">
                    Request a Proposal
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/case-studies/" className="btn-outline group">
                  View Case Studies
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center space-x-8 pt-4"
              >
                {[
                  { label: "Projects Delivered", value: "20+" },
                  { label: "Expert Consultants", value: "25+" },
                  { label: "Years Combined Experience", value: "40+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-neutral-500 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block perspective-1000"
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotateZ: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/50">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                    <div className="text-center p-8 relative z-10">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-3xl mx-auto mb-6 flex items-center justify-center border border-white/30 shadow-2xl"
                      >
                        <Building2 className="w-16 h-16 text-white" />
                      </motion.div>
                      <p className="text-white/90 font-medium text-lg">Professional Excellence</p>
                      <p className="text-white/70 text-sm mt-2">Delivering Impact Across Africa</p>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-blue-500/10 p-4 border border-blue-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">Certified Excellence</p>
                      <p className="text-xs text-neutral-500">ISO Quality Standards</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl shadow-purple-500/10 p-4 border border-purple-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">Results Driven</p>
                      <p className="text-xs text-neutral-500">Measurable Impact</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip - Enhanced */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMzQgMzZoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')]" />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center space-x-2 text-white">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Trusted by Leading Organizations:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {["Government Agencies", "International Donors", "NGOs", "CSR/ESG Teams"].map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-2 text-white/90"
                >
                  <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">{client}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Enhanced with vibrant cards */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full blur-3xl" />

        <div className="container-wide relative">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-body-lg text-neutral-600">
              Comprehensive consulting services spanning the full program lifecycle,
              from initial design through implementation, evaluation, and learning.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="feature-card group"
              >
                <div className="icon-container mb-6">
                  <service.icon className="w-8 h-8 text-blue-600 relative z-10 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link href="/services/" className="btn-secondary">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section - Enhanced with step connectors */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide relative">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              How We <span className="text-gradient-blue">Work</span>
            </h2>
            <p className="text-body-lg text-neutral-600">
              A systematic approach that ensures quality, accountability, and measurable
              results at every stage of engagement.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 rounded-full" />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/5 border border-neutral-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 h-full">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' :
                          index === 1 ? 'from-cyan-500 to-cyan-600' :
                            index === 2 ? 'from-teal-500 to-teal-600' :
                              'from-purple-500 to-purple-600'
                        } flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-neutral-400 shadow-md">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - Enhanced */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />

        <div className="container-wide relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div {...fadeInLeft} className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                Case Studies
              </span>
              <h2 className="text-display-md font-bold text-neutral-900 mb-4">
                Featured <span className="text-gradient-purple">Success Stories</span>
              </h2>
              <p className="text-body-lg text-neutral-600">
                Evidence of our impact across sectors and service areas.
              </p>
            </motion.div>
            <motion.div {...fadeInRight}>
              <Link href="/case-studies/" className="btn-outline">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-blue-500/5 border border-neutral-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.4 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center"
                  >
                    <Search className="w-10 h-10 text-blue-500" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge-primary">{study.sector}</span>
                    <span className="px-3 py-1 text-xs font-semibold text-neutral-600 bg-neutral-100 rounded-full">
                      {study.service}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{study.description}</p>
                  <Link
                    href={study.href}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                  >
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sectors We Serve - Enhanced with icons */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 via-blue-950 to-purple-950 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMzQgMzZoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')]" />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="container-wide relative">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-cyan-300 text-sm font-semibold rounded-full mb-4 border border-white/20">
              Expertise Areas
            </span>
            <h2 className="text-display-md font-bold mb-4">
              Sectors We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-body-lg text-neutral-300">
              Deep expertise across key development sectors in Nigeria and Africa.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{sector.description}</p>
                <Link
                  href={sector.href}
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                >
                  Explore sector
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}

            {/* View All Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col justify-center items-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">All Sectors</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Discover our full range of sector expertise and capabilities.
                </p>
                <Link href="/sectors/" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors">
                  View All Sectors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Trust Section - Enhanced with animated stats */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

        <div className="container-wide relative">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Quality & <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-body-lg text-neutral-600">
              Our commitment to excellence is backed by rigorous quality assurance
              and internationally recognized methodologies.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Shield, title: "Quality Assurance", desc: "ISO-aligned processes & peer review" },
              { icon: Award, title: "MEL Standards", desc: "Best practice frameworks" },
              { icon: Users, title: "Expert Network", desc: "Seasoned consultants" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="stat-card"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-bold text-neutral-900 mb-1">{item.title}</p>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            {...fadeInUp}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
            <div className="relative p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: "20+", label: "Programs Supported" },
                  { value: "5,000+", label: "Stakeholders Trained" },
                  { value: "15+", label: "States Covered" },
                  { value: "1M+", label: "Data Points Analyzed" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.p
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      className="text-4xl lg:text-5xl font-bold text-white mb-1"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-blue-100 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section - COMMENTED OUT
      <section className="section-padding-sm bg-neutral-50 relative overflow-hidden">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
              Partnerships & <span className="text-gradient">Collaborations</span>
            </h2>
            <p className="text-neutral-600">
              We collaborate with leading organizations to deliver comprehensive solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-32 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-neutral-400 text-sm font-medium border border-neutral-200 hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                Partner {i}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}

      {/* Final CTA Section - Enhanced */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-display-md font-bold text-white mb-6">
              Ready to Enhance Your Program Impact?
            </h2>
            <p className="text-body-lg text-blue-100 mb-10">
              Let&apos;s discuss how ProDev Consulting can support your organization&apos;s
              goals with expert consulting, implementation support, and MEL services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/?form=proposal"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
              >
                Request a Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
