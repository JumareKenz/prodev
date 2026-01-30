"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Tag,
  Calendar,
  Clock,
  User,
  ArrowUpRight,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface InsightTemplateProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: React.ReactNode;
  relatedInsights: { title: string; href: string; category: string }[];
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const viewportConfig = { once: true };

export default function InsightTemplate({
  title,
  category,
  date,
  readTime,
  author,
  content,
  relatedInsights,
}: InsightTemplateProps) {
  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-neutral-50 to-primary-50 pt-24 pb-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/insights/"
              className="inline-flex items-center text-neutral-500 text-sm mb-6 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                {category}
              </span>
            </div>
            <h1 className="text-display-md font-bold text-neutral-900 mb-6">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(date)}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-prose">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg prose-neutral max-w-none"
          >
            {content}
          </motion.div>
        </div>
      </article>

      {/* CTA Block */}
      <section className="py-12 bg-primary-50">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl font-bold text-neutral-900 mb-4">
              Want to Discuss This Topic?
            </h2>
            <p className="text-neutral-600 mb-6">
              Our team is available to explore how these insights apply to your specific context.
            </p>
            <Link
              href="/contact/?form=proposal"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }} className="mb-8">
              <h2 className="text-xl font-bold text-neutral-900">Related Insights</h2>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUpVariants} transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {relatedInsights.map((insight) => (
                <Link
                  key={insight.title}
                  href={insight.href}
                  className="group p-6 bg-neutral-50 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {insight.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {insight.title}
                  </h3>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
