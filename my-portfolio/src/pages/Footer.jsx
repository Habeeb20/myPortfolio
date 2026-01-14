// components/Footer.jsx
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const services = [
  "Full-Stack Web Development",
  "Frontend & UI/UX Design",
  "Fintech & Payment Integration",
  "Real-time Applications (Chat, Tracking)",
  "Mobile-Responsive Web Apps",
  "Performance Optimization",
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-bg-dark to-black text-white pt-20 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-12">
        {/* Brand & About */}
        <div className="md:col-span-4">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
            Waliyu
          </h3>
          <p className="text-gray-400 mb-6 max-w-md">
            Crafting modern, scalable, and user-centered web applications that help businesses grow in the digital age.
          </p>
          <div className="flex gap-5">
            {/* Add your social icons here */}
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-4">
          <h4 className="text-xl font-bold mb-6">What I Offer</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
          <div className="space-y-5 text-gray-300">
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 hover:text-primary transition-colors">
              <EnvelopeIcon className="w-5 h-5" />
              your.email@example.com
            </a>
            <a href="tel:+234XXXXXXXXXX" className="flex items-center gap-3 hover:text-primary transition-colors">
              <PhoneIcon className="w-5 h-5" />
              +234 XXX XXX XXXX
            </a>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl transition-colors shadow-lg shadow-primary/20"
          >
            Let's Work Together →
          </motion.a>
        </div>
      </div>

      <div className="relative mt-16 pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Waliyu. Built with passion & code.</p>
      </div>
    </footer>
  );
}