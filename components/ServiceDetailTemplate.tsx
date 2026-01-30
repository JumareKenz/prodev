"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  FileCheck,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

interface ServiceDetailProps {
  title: string;
  iconName?: string;
  description: string;
  whatItIs: string;
  whoItIsFor: string[];
  deliverables: string[];
  approach: { title: string; description: string }[];
  outcomes: string[];
  relatedCaseStudies: { title: string; href: string; sector: string }[];
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const viewportConfig = { once: true };

export default function ServiceDetailTemplate({
  title,
  description,
  whatItIs,
  whoItIsFor,
  deliverables,
  approach,
  outcomes,
  relatedCaseStudies,
}: ServiceDetailProps) {
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
              href="/services/"
              className="inline-flex items-center text-primary-100 text-sm mb-6 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-display-md font-bold text-white">{title}</h1>
            </div>
            <p className="text-body-lg text-primary-100">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">What It Is</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">{whatItIs}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Who It&apos;s For</h2>
              </div>
              <ul className="space-y-3">
                {whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Key Deliverables</h2>
            </div>
            <p className="text-neutral-600">
              Depending on your specific needs, engagements may include the following outputs.
            </p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {deliverables.map((deliverable) => (
              <div
                key={deliverable}
                className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-700">{deliverable}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Our Approach</h2>
            </div>
            <p className="text-neutral-600">
              We follow a structured methodology tailored to each client&apos;s context and requirements.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="grid gap-6">
            {approach.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-6 p-6 bg-neutral-50 rounded-2xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Example Outcomes
            </h2>
            <p className="text-neutral-600">
              Qualitative outcomes achieved through our {title.toLowerCase()} services.
            </p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-neutral-700">{outcome}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Related Case Studies
              </h2>
              <p className="text-neutral-600">
                Explore how we&apos;ve applied {title.toLowerCase()} expertise in practice.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {relatedCaseStudies.map((study) => (
                <Link
                  key={study.title}
                  href={study.href}
                  className="group p-6 bg-neutral-50 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {study.sector}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {study.title}
                  </h3>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding-sm bg-neutral-900">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-neutral-400 mb-8">
              Let&apos;s discuss how our {title.toLowerCase()} services can support your program goals.
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
