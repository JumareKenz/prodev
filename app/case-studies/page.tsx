"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Filter, Building2, ClipboardList, Calendar } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const caseStudies = [
  {
    id: "health-systems-initiative",
    title: "State Health Systems Strengthening Initiative",
    sector: "Health",
    service: "MEL & Implementation",
    clientType: "Government",
    description:
      "Supporting a state government to strengthen primary healthcare delivery through comprehensive MEL systems and capacity building.",
    href: "/case-studies/health-systems-initiative/",
    color: "from-blue-500 to-cyan-500",
    duration: "18 months",
    impact: "20 LGAs Covered",
  },
  {
    id: "education-workforce",
    title: "Education Workforce Development Program",
    sector: "Education",
    service: "Technical Advisory",
    clientType: "NGO",
    description:
      "Technical assistance for teacher training program design and implementation monitoring across 50+ schools.",
    href: "/case-studies/education-workforce/",
    color: "from-cyan-500 to-teal-500",
    duration: "24 months",
    impact: "50+ Schools",
  },
  {
    id: "climate-resilience",
    title: "Climate Resilience Baseline Assessment",
    sector: "Climate",
    service: "Research & Evaluation",
    clientType: "Donor",
    description:
      "Baseline assessment and resilience framework development for a multi-state climate adaptation program.",
    href: "/case-studies/climate-resilience/",
    color: "from-emerald-500 to-green-500",
    duration: "6 months",
    impact: "6 States Assessed",
  },
];

const sectors = ["All", "Health", "Education", "Climate"];
const services = ["All", "MEL & Implementation", "Technical Advisory", "Research & Evaluation"];
const clientTypes = ["All", "Government", "NGO", "Donor"];

export default function CaseStudiesPage() {
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [selectedClientType, setSelectedClientType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSector = selectedSector === "All" || study.sector === selectedSector;
    const matchesService = selectedService === "All" || study.service === selectedService;
    const matchesClientType = selectedClientType === "All" || study.clientType === selectedClientType;
    const matchesSearch =
      searchQuery === "" ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesService && matchesClientType && matchesSearch;
  });

  return (
    <main>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-display-lg font-bold text-neutral-900 mb-6"
            >
              Case <span className="text-gradient">Studies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-body-lg text-neutral-600"
            >
              Evidence of our impact across sectors and service areas.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white/80 backdrop-blur-xl border-y border-blue-100 sticky top-20 lg:top-24 z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>{s === "All" ? "All Sectors" : s}</option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s === "All" ? "All Services" : s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container-wide">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <ClipboardList className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900">No case studies found</h3>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCaseStudies.map((study) => (
                <motion.article
                  key={study.id}
                  variants={fadeInUp}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-xl transition-all"
                >
                  <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                  <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${study.color} text-white`}>
                        {study.sector}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{study.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{study.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-xs text-neutral-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {study.duration}
                      </div>
                      <span className="text-xs font-semibold text-blue-600">{study.impact}</span>
                    </div>
                    <Link
                      href={study.href}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Want to See More?</h2>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
