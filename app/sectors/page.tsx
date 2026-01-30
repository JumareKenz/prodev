"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Scale,
  Leaf,
  Users,
  ArrowRight,
  Sparkles,
  Globe,
  Target,
} from "lucide-react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const viewportConfig = { once: true, margin: "-100px" as const };

const sectors = [
  {
    id: "health",
    icon: Heart,
    title: "Health Systems Strengthening",
    description:
      "Supporting robust health systems through strategic planning, quality improvement, and data-driven interventions.",
    challenges: [
      "Primary healthcare service delivery gaps",
      "Health information system strengthening",
      "Disease surveillance and response",
      "Health workforce development",
      "Supply chain and logistics optimization",
    ],
    href: "/sectors/health/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    stat: "50+ Health Facilities Supported",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Systems & Workforce",
    description:
      "Enhancing education quality through teacher development, curriculum design, and institutional capacity building.",
    challenges: [
      "Teacher training and professional development",
      "Learning outcome assessment and monitoring",
      "Education management information systems",
      "Inclusive education programming",
      "Technical and vocational skills development",
    ],
    href: "/sectors/education/",
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    stat: "200+ Schools Engaged",
  },
  {
    id: "governance",
    icon: Scale,
    title: "Governance & Accountability",
    description:
      "Strengthening public institutions, transparency mechanisms, and participatory governance processes.",
    challenges: [
      "Public financial management reform",
      "Anti-corruption and transparency initiatives",
      "Civic engagement and participation",
      "Decentralization and local governance",
      "Public service delivery improvement",
    ],
    href: "/sectors/governance/",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    stat: "15+ Governance Initiatives",
  },
  {
    id: "climate",
    icon: Leaf,
    title: "Climate Adaptation & Resilience",
    description:
      "Building community resilience through climate-smart programming and sustainable natural resource management.",
    challenges: [
      "Climate vulnerability assessments",
      "Adaptation strategy development",
      "Natural resource management",
      "Disaster risk reduction",
      "Green livelihoods and sustainability",
    ],
    href: "/sectors/climate/",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    stat: "20+ Communities Resilience-Ready",
  },
  {
    id: "livelihoods",
    icon: Users,
    title: "Livelihoods, Gender & Youth",
    description:
      "Promoting inclusive economic growth through skills development, enterprise support, and gender-responsive programming.",
    challenges: [
      "Youth employment and entrepreneurship",
      "Women's economic empowerment",
      "Agricultural value chain development",
      "Financial inclusion and access",
      "Social protection programming",
    ],
    href: "/sectors/livelihoods/",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    stat: "5,000+ Lives Impacted",
  },
];

export default function SectorsPage() {
  return (
    <main>
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
              <Globe className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Where We Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-lg font-bold text-neutral-900 mb-6"
            >
              Sectors We <span className="text-gradient">Serve</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-body-lg text-neutral-600 leading-relaxed"
            >
              We bring deep sector expertise and contextual understanding to development 
              challenges across health, education, governance, climate, and livelihoods 
              in Nigeria and Africa.
            </motion.p>
          </div>
        </div>
      </section>

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
            {sectors.map((sector) => (
              <motion.div
                key={sector.id}
                variants={fadeInUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-8 lg:p-10 rounded-3xl ${sector.bgColor} backdrop-blur-xl border ${sector.borderColor} overflow-hidden transition-all duration-500 hover:shadow-2xl`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sector.color}`} />
                
                <div className="grid lg:grid-cols-3 gap-8 relative">
                  <div className="lg:col-span-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <sector.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                      {sector.title}
                    </h2>
                    <div className={`inline-flex items-center px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border ${sector.borderColor} mb-4`}>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent`}>
                        {sector.stat}
                      </span>
                    </div>
                    <Link
                      href={sector.href}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                    >
                      Explore sector
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-neutral-600 mb-6 text-lg">{sector.description}</p>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-blue-500" />
                        Key challenges we address:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {sector.challenges.map((challenge) => (
                          <motion.span
                            key={challenge}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl text-sm text-neutral-700 hover:bg-white/80 transition-all"
                          >
                            {challenge}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-900 via-blue-950 to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMzQgMzZoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')]" />
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Sector-Specific Expertise
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              Our consultants bring deep sector knowledge and practical experience to every engagement, 
              ensuring contextually appropriate and technically sound solutions.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              Discuss Your Sector Needs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
