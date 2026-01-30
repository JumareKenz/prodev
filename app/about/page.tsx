"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  Shield,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
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

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const viewportConfig = { once: true, margin: "-100px" as const };

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of quality in everything we do, from analysis to deliverables.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We are honest, transparent, and ethical in our relationships with clients, partners, and communities.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously seek better ways to solve problems, embracing new methods and technologies where they add value.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work collaboratively with clients and communities, respecting local knowledge and building local capacity.",
    color: "from-purple-500 to-pink-500",
  },
];

const differentiators = [
  {
    title: "Delivery Excellence",
    description:
      "We combine technical expertise with practical implementation experience to deliver results that matter.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "MEL Expertise",
    description:
      "Our deep expertise in monitoring, evaluation, and learning ensures programs are informed by evidence and continuously improving.",
    icon: Target,
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Digital Solutions",
    description:
      "We leverage technology to enhance data systems, streamline operations, and generate actionable insights.",
    icon: Lightbulb,
    color: "from-violet-500 to-purple-500",
  },
];

const expertise = [
  "Health Systems & Policy",
  "Education & Workforce Development",
  "Governance & Public Administration",
  "Climate Change & Environment",
  "Economic Growth & Livelihoods",
  "Data Systems & Digital Transformation",
  "Research & Impact Evaluation",
  "Organizational Capacity Development",
];

const complianceItems = [
  "Adherence to professional ethics and standards",
  "Confidential handling of client information",
  "Conflict of interest disclosure and management",
  "Quality assurance and peer review processes",
  "Data protection and privacy compliance",
  "Anti-corruption and fraud prevention",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative pt-24 pb-16 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              About Our Firm
            </motion.span>
            <h1 className="text-display-lg font-bold text-neutral-900 mb-6">
              About <span className="text-gradient">ProDev Consulting</span>
            </h1>
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              We are a Nigeria-based consulting firm providing professional services 
              that enhance the design, delivery, monitoring, and evaluation of development 
              programs across public and private sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
        
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInLeftVariants} transition={{ duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To strengthen development outcomes through professional consulting services 
                that enhance program design, delivery, monitoring, and evaluation—building 
                local capacity and contributing to sustainable impact in Nigeria and Africa.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInRightVariants} transition={{ duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-purple-600 to-violet-700 text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-purple-100 text-lg leading-relaxed">
                To be the consulting partner of choice for organizations seeking to achieve 
                meaningful development impact—recognized for technical excellence, integrity, 
                and contribution to evidence-informed programming in Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced with animations */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
              What Guides Us
            </span>
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-neutral-600">
              These principles guide how we work and interact with our clients, partners, and communities.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={scaleInVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="relative p-8 bg-white rounded-2xl shadow-lg shadow-blue-500/5 border border-neutral-100 overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`} />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiators - Enhanced */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Our Strengths
            </span>
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              What Sets Us <span className="text-gradient-purple">Apart</span>
            </h2>
            <p className="text-neutral-600">
              Three core capabilities that differentiate our approach to development consulting.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                variants={fadeInUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${diff.color} flex items-center justify-center shadow-lg shadow-blue-500/20`}
                >
                  <diff.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-5xl font-bold text-neutral-100 mb-2">0{index + 1}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{diff.title}</h3>
                <p className="text-neutral-600">{diff.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Generic Professional Description */}
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
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-cyan-300 text-sm font-semibold rounded-full mb-4 border border-white/20">
              Our People
            </span>
            <h2 className="text-display-md font-bold mb-4">
              Expert Team, <span className="text-gradient">Exceptional Results</span>
            </h2>
            <p className="text-neutral-300 text-lg">
              Our team comprises seasoned professionals with deep expertise across multiple sectors 
              and functional areas, bringing together decades of combined experience in development consulting.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Briefcase,
                title: "Consulting Expertise",
                description: "Our consultants bring extensive experience from top-tier consulting firms, multilateral organizations, and leading NGOs, with proven track records in program design, implementation, and evaluation.",
              },
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                description: "Team members hold advanced degrees from prestigious institutions in fields including public health, education, economics, public policy, data science, and international development.",
              },
              {
                icon: Globe,
                title: "Local & Global Experience",
                description: "We combine deep contextual knowledge of Nigeria and Africa with international best practices, having worked across multiple countries and diverse development contexts.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Areas of <span className="text-cyan-400">Expertise</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {expertise.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  <span className="text-sm text-neutral-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality & Compliance - Enhanced */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
        
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInLeftVariants} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6">
                Our Standards
              </span>
              <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
                Quality & <span className="text-gradient">Compliance</span>
              </h2>
              <p className="text-neutral-600 mb-8 text-lg">
                We are committed to the highest standards of professional ethics and 
                quality assurance. Our practices ensure that our clients receive 
                reliable, credible, and actionable consulting services.
              </p>
              <ul className="space-y-4">
                {complianceItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInRightVariants} transition={{ duration: 0.7 }}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Our Commitment
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  We adhere to international standards for consulting practice and 
                  maintain rigorous internal quality assurance processes. All 
                  deliverables undergo peer review before submission to clients.
                </p>
                <Link
                  href="/policies/compliance/"
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 group"
                >
                  Read our Code of Conduct
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-blue-100 mb-8">
              Let&apos;s discuss how ProDev Consulting can support your organization&apos;s goals.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
