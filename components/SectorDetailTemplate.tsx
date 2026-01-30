"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  FileText,
  BookOpen,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";

interface SectorDetailProps {
  title: string;
  iconName?: string;
  description: string;
  challenges: string[];
  services: { title: string; description: string; href: string }[];
  interventions: string[];
  melApproach: string;
  relatedInsights: { title: string; href: string; category: string }[];
  relatedCaseStudies: { title: string; href: string; service: string }[];
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const viewportConfig = { once: true };

export default function SectorDetailTemplate({
  title,
  description,
  challenges,
  services,
  interventions,
  melApproach,
  relatedInsights,
  relatedCaseStudies,
}: SectorDetailProps) {
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
              href="/sectors/"
              className="inline-flex items-center text-primary-100 text-sm mb-6 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Sectors
            </Link>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-display-md font-bold text-white">{title}</h1>
            </div>
            <p className="text-body-lg text-primary-100">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Sector Challenges We Solve
              </h2>
            </div>
            <p className="text-neutral-600 mb-8">
              We work with clients to address critical challenges in the {title.toLowerCase()} space:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge}
                  className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{challenge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Mapped Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Our Services in This Sector
              </h2>
            </div>
            <p className="text-neutral-600">
              How we apply our core consulting services to {title.toLowerCase()} challenges.
            </p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary-600">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Typical Interventions Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Typical Interventions
              </h2>
            </div>
            <p className="text-neutral-600 mb-8">
              Examples of the types of interventions we support in {title}:
            </p>
            <div className="grid gap-4">
              {interventions.map((intervention, index) => (
                <div
                  key={intervention}
                  className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-neutral-700 pt-1">{intervention}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEL Approach Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                MEL Approach in {title}
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm"
          >
            <p className="text-neutral-600 leading-relaxed">{melApproach}</p>
          </motion.div>
        </div>
      </section>

      {/* Related Content */}
      {(relatedCaseStudies.length > 0 || relatedInsights.length > 0) && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Related Case Studies */}
              {relatedCaseStudies.length > 0 && (
                <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}>
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">
                    Related Case Studies
                  </h2>
                  <div className="space-y-4">
                    {relatedCaseStudies.map((study) => (
                      <Link
                        key={study.title}
                        href={study.href}
                        className="group flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div>
                          <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {study.title}
                          </h3>
                          <span className="text-sm text-neutral-500">
                            {study.service}
                          </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Related Insights */}
              {relatedInsights.length > 0 && (
                <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}>
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">
                    Related Insights
                  </h2>
                  <div className="space-y-4">
                    {relatedInsights.map((insight) => (
                      <Link
                        key={insight.title}
                        href={insight.href}
                        className="group flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <div>
                          <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {insight.title}
                          </h3>
                          <span className="text-sm text-neutral-500">
                            {insight.category}
                          </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
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
              Discuss a {title} Program
            </h2>
            <p className="text-neutral-400 mb-8">
              Let&apos;s explore how our sector expertise can support your {title.toLowerCase()} initiatives.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
