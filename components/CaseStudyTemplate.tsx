"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  Target,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

interface CaseStudyProps {
  title: string;
  sector: string;
  service: string;
  clientType: string;
  context: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  results: string[];
  timeline: string;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const viewportConfig = { once: true };

export default function CaseStudyTemplate({
  title,
  sector,
  service,
  clientType,
  context,
  challenge,
  approach,
  deliverables,
  results,
  timeline,
}: CaseStudyProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 pt-24 pb-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              href="/case-studies/"
              className="inline-flex items-center text-primary-100 text-sm mb-6 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
                {sector}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
                {service}
              </span>
            </div>
            <h1 className="text-display-md font-bold text-white mb-4">{title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-100 text-sm">
              <span className="flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                {clientType}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {timeline}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="lg:col-span-2 space-y-12">
              {/* Context */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Context</h2>
                </div>
                <p className="text-neutral-600 leading-relaxed">{context}</p>
              </div>

              {/* Challenge */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Challenge</h2>
                </div>
                <p className="text-neutral-600 leading-relaxed">{challenge}</p>
              </div>

              {/* Approach */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Our Approach</h2>
                </div>
                <p className="text-neutral-600 leading-relaxed">{approach}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="space-y-8">
              {/* Deliverables */}
              <div className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Key Deliverables
                </h3>
                <ul className="space-y-3">
                  {deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Explore More
                </h3>
                <div className="space-y-2">
                  <Link
                    href={`/sectors/${sector.toLowerCase()}/`}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    <span className="text-sm font-medium text-neutral-900">
                      {sector} Sector
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-600" />
                  </Link>
                  <Link
                    href="/services/"
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    <span className="text-sm font-medium text-neutral-900">
                      Our Services
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-600" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Results</h2>
            <p className="text-neutral-600">
              Outcomes achieved through this engagement.
            </p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {results.map((result, index) => (
              <div
                key={result}
                className="p-6 bg-white rounded-2xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-neutral-700 text-sm">{result}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-neutral-500">
              <strong>Note:</strong> This case study is provided as a sample/template 
              to illustrate our approach and capabilities. Specific details, metrics, 
              and outcomes are representative examples.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-neutral-900">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Similar Challenge?
            </h2>
            <p className="text-neutral-400 mb-8">
              Let&apos;s discuss how we can support your {sector.toLowerCase()} program goals.
            </p>
            <Link
              href="/contact/?form=proposal"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Request a Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
