"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Calendar, Clock, Lightbulb } from "lucide-react";
import { formatDate } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const insights = [
  {
    id: "program-design-best-practices",
    title: "Five Principles for Effective Program Design",
    excerpt: "Drawing from our experience across multiple sectors, we outline key principles for program success.",
    category: "Program Design",
    date: "2024-01-15",
    readTime: "6 min read",
    href: "/insights/program-design-best-practices/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mel-data-quality",
    title: "Ensuring Data Quality in MEL Systems",
    excerpt: "Data quality is the foundation of evidence-based decision making. This article explores practical approaches.",
    category: "MEL/Data Quality",
    date: "2024-01-08",
    readTime: "8 min read",
    href: "/insights/mel-data-quality/",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "digital-transformation-ngos",
    title: "Digital Transformation for NGOs: Where to Start",
    excerpt: "Many organizations recognize the need for digital transformation but struggle with where to begin.",
    category: "Digital Transformation",
    date: "2023-12-20",
    readTime: "5 min read",
    href: "/insights/digital-transformation-ngos/",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "governance-delivery",
    title: "Bridging Governance Reform and Service Delivery",
    excerpt: "How can governance reforms translate into tangible improvements in public services?",
    category: "Governance & Delivery",
    date: "2023-12-12",
    readTime: "7 min read",
    href: "/insights/governance-delivery/",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "donor-reporting",
    title: "Effective Grant Reporting: Beyond Compliance",
    excerpt: "Grant reporting is often seen as a compliance burden, but it can be a valuable learning tool.",
    category: "Grants/Donor Reporting",
    date: "2023-11-28",
    readTime: "6 min read",
    href: "/insights/donor-reporting/",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "community-engagement",
    title: "Meaningful Community Engagement",
    excerpt: "True community engagement goes beyond consultation. We explore participatory approaches.",
    category: "Program Design",
    date: "2023-11-15",
    readTime: "9 min read",
    href: "/insights/community-engagement/",
    color: "from-orange-500 to-amber-500",
  },
];

const categories = ["All", "Program Design", "MEL/Data Quality", "Digital Transformation", "Governance & Delivery", "Grants/Donor Reporting"];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter((insight) => {
    const matchesCategory = selectedCategory === "All" || insight.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              <span className="text-gradient">Insights</span> & Perspectives
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-body-lg text-neutral-600"
            >
              Perspectives on development consulting, MEL best practices, and lessons learned.
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
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-white border border-neutral-200 text-neutral-700 hover:border-blue-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInsights.map((insight) => (
              <motion.article
                key={insight.id}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-xl transition-all flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${insight.color}`} />
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${insight.color} flex items-center justify-center`}>
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${insight.color} text-white`}>
                      {insight.category}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(insight.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{insight.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">{insight.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-neutral-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {insight.readTime}
                    </span>
                    <Link
                      href={insight.href}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
