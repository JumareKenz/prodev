"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  FileText,
  MessageSquare,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";

const fadeInUpVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeftVariants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
};

const projectTypes = [
  "Program Design & Technical Advisory",
  "Project Management Support",
  "MEL/MERL Services",
  "Digital Transformation",
  "Capacity Building & Training",
  "Research & Evaluation",
  "Other",
];

const sectors = [
  "Health",
  "Education",
  "Governance",
  "Climate & Environment",
  "Livelihoods & Economic Development",
  "Multi-sector",
  "Other",
];

const timelines = [
  "Immediate (within 1 month)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term (6+ months)",
  "Not sure",
];

const budgetRanges = [
  "Under $50,000",
  "$50,000 - $100,000",
  "$100,000 - $500,000",
  "$500,000 - $1,000,000",
  "Over $1,000,000",
  "Prefer not to disclose",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Abuja, Nigeria",
    description: "Our headquarters",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "support@prodevconsults.org",
    description: "We reply within 24 hours",
    color: "from-cyan-500 to-teal-500",
    href: "mailto:support@prodevconsults.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+234 909 921 4425",
    description: "Mon-Fri, 9am-5pm WAT",
    color: "from-violet-500 to-purple-500",
    href: "tel:+2349099214425",
  },
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialForm = searchParams.get("form") === "proposal" ? "proposal" : "general";
  const [activeForm, setActiveForm] = useState<"proposal" | "general">(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    contactRole: "",
    email: "",
    phone: "",
    projectType: "",
    sector: "",
    timeline: "",
    budget: "",
    location: "",
    notes: "",
    honeypot: "",
    name: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (activeForm === "proposal") {
      if (!formData.orgName.trim()) newErrors.orgName = "Organization name is required";
      if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required";
      if (!formData.contactRole.trim()) newErrors.contactRole = "Role is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.projectType) newErrors.projectType = "Project type is required";
      if (!formData.sector) newErrors.sector = "Sector is required";
    } else {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.subject.trim()) newErrors.subject = "Subject is required";
      if (!formData.message.trim()) newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validateForm()) return;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-blue-500/10 text-center border border-neutral-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h2>
        <p className="text-neutral-600 mb-6">
          Your {activeForm === "proposal" ? "proposal request" : "message"} has been received.
          We will get back to you within 2 business days.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              orgName: "", contactName: "", contactRole: "", email: "", phone: "",
              projectType: "", sector: "", timeline: "", budget: "", location: "",
              notes: "", honeypot: "", name: "", subject: "", message: "",
            });
          }}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
        >
          Submit Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-blue-500/10 border border-neutral-100 overflow-hidden">
      <div className="flex border-b border-neutral-200">
        <button
          onClick={() => setActiveForm("proposal")}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-all flex items-center justify-center gap-2 ${activeForm === "proposal"
              ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border-b-2 border-blue-500"
              : "text-neutral-600 hover:bg-neutral-50"
            }`}
        >
          <FileText className="w-4 h-4" />
          Request a Proposal
        </button>
        <button
          onClick={() => setActiveForm("general")}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-all flex items-center justify-center gap-2 ${activeForm === "general"
              ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border-b-2 border-blue-500"
              : "text-neutral-600 hover:bg-neutral-50"
            }`}
        >
          <MessageSquare className="w-4 h-4" />
          General Contact
        </button>
      </div>

      <div className="p-8 lg:p-10">
        {activeForm === "proposal" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.orgName ? "border-red-300" : "border-neutral-200"
                    }`}
                  placeholder="Your organization"
                />
                {errors.orgName && <p className="mt-1 text-sm text-red-600">{errors.orgName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.contactName ? "border-red-300" : "border-neutral-200"
                    }`}
                  placeholder="Your full name"
                />
                {errors.contactName && <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactRole"
                  value={formData.contactRole}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.contactRole ? "border-red-300" : "border-neutral-200"
                    }`}
                  placeholder="e.g., Program Director"
                />
                {errors.contactRole && <p className="mt-1 text-sm text-red-600">{errors.contactRole}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.email ? "border-red-300" : "border-neutral-200"
                    }`}
                  placeholder="you@organization.org"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Project Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="State/Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.projectType ? "border-red-300" : "border-neutral-200"
                    }`}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Sector <span className="text-red-500">*</span>
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.sector ? "border-red-300" : "border-neutral-200"
                    }`}
                >
                  <option value="">Select sector</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                {errors.sector && <p className="mt-1 text-sm text-red-600">{errors.sector}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Expected Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Budget Range (Optional)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Project Description</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                placeholder="Briefly describe your project needs..."
              />
            </div>

            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Proposal Request
            </motion.button>

            <p className="text-xs text-neutral-500 text-center">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.name ? "border-red-300" : "border-neutral-200"
                    }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.email ? "border-red-300" : "border-neutral-200"
                    }`}
                  placeholder="you@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.subject ? "border-red-300" : "border-neutral-200"
                  }`}
                placeholder="How can we help?"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none ${errors.message ? "border-red-300" : "border-neutral-200"
                  }`}
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>

            <p className="text-xs text-neutral-500 text-center">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
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
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-lg font-bold text-neutral-900 mb-6"
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-body-lg text-neutral-600 leading-relaxed"
            >
              Ready to discuss your project? Have a question about our services?
              We&apos;d love to hear from you. Choose the option that best fits your needs.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl" />

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div variants={fadeInLeftVariants} initial="initial" animate="animate" className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-6 bg-white rounded-2xl shadow-lg shadow-blue-500/5 border border-neutral-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-1">{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-neutral-900">{info.content}</p>
                    )}
                    <p className="text-sm text-neutral-500 mt-1">{info.description}</p>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Clock size={18} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900">Response Time</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    We typically respond to inquiries within 2 business days. For urgent matters, please call us directly.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Shield size={18} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900">Your Privacy</h3>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Your information is secure with us. Read our{" "}
                    <Link href="/policies/privacy/" className="text-blue-600 hover:underline">Privacy Policy</Link>{" "}
                    for details.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-2">
              <Suspense fallback={<div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100">Loading...</div>}>
                <ContactFormContent />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
        <div className="container-wide relative">
          <motion.div variants={fadeInUpVariants} initial="initial" animate="animate" className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-neutral-600">Quick answers to common questions about working with us.</p>
          </motion.div>

          <motion.div
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {[
              {
                q: "What types of organizations do you work with?",
                a: "We work with government agencies, international NGOs, donor organizations, private sector CSR/ESG teams, and multi-stakeholder partnerships across Nigeria and Africa.",
              },
              {
                q: "How do you price your services?",
                a: "Our pricing depends on the scope, complexity, and duration of the engagement. We provide detailed proposals with transparent cost breakdowns after understanding your specific needs.",
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope. Short-term assignments may take 2-4 weeks, while comprehensive programs can span 6-18 months. We work with clients to establish realistic timelines.",
              },
              {
                q: "Do you work outside Nigeria?",
                a: "While we are Nigeria-based, we have experience working across Africa and can support programs in other countries, particularly in West and East Africa.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="p-6 bg-white rounded-2xl shadow-lg shadow-blue-500/5 border border-neutral-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-start">
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.q}
                </h3>
                <p className="text-neutral-600 text-sm pl-9">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
