// components/Experience.jsx
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Essentials",
    period: " Jul 2024 - present",
    description:
      "Built and delivered 10+ production-grade web applications including fintech, food delivery, ride-hailing, and job marketplaces. Focused on real-time features, secure payments (Paystack), and responsive UI/UX.",
    achievements: [
      "Processed over ₦50M+ in transactions via Paystack integrations",
      "Developed multi-role real-time systems using Socket.IO",
      "Improved user engagement through Framer Motion animations & modern UX",
      "Built scalable microservices architecture that handled 10,000+ concurrent users during peak hours",

  "Delivered 12+ production-ready full-stack applications from concept to deployment within tight deadlines",
  "Created responsive, mobile-first interfaces that achieved 95+ Lighthouse performance scores across projects",
  "Integrated QR code scanning and digital ID generation, streamlining onboarding by 60% for users and staff",
  "Led end-to-end development of fintech features including bill payments, transfers & wallet management",
  "Optimized database queries and API responses, reducing average server response time from 800ms to 180ms",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Ntech systems",
    period: " Jan 2023 - Jul 2024 ",
    description:
      "Built and delivered 8 production-grade web applications. Focused on real-time features, and responsive UI/UX.",
    achievements: [
          "Reduced application load time by 45% through code optimization, lazy loading, and image compression",
  "Implemented secure JWT multi-role authentication system supporting 4+ user types with zero security incidents",
  "Designed and integrated real-time chat & notification features, increasing user retention by 35%",
      "Processed over ₦50M+ in transactions via Paystack integrations",
      "Developed multi-role real-time systems using Socket.IO",
      "Improved user engagement through Framer Motion animations & modern UX",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tech Internship / Side Projects",
    period: "Sept 2022 – Dec 2022",
    description:
      "Collaborated on multiple client projects, modernized legacy interfaces, and built responsive dashboards with React & Tailwind CSS.",
    achievements: [
      "Reduced page load time by ~40% through optimization techniques",
      "Implemented dark mode and accessibility improvements",
    ],
  },
 
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-bg-light dark:bg-bg-dark">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Turning ideas into production-ready products that solve real problems
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative pl-10 md:pl-16 pb-10 border-l-2 border-primary/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 md:-left-4 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <BriefcaseIcon className="w-3.5 h-3.5 text-white" />
                </div>

                <div className="bg-bg-cardLight dark:bg-bg-cardDark rounded-2xl p-7 md:p-9 shadow-xl border border-border-light dark:border-border-dark hover:border-primary/50 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium text-text-muted mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary-dark text-sm font-medium">
                      <CalendarIcon className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-text-muted leading-relaxed mb-6">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}