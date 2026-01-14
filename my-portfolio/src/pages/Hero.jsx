// import { motion } from "framer-motion";
// import im from "../assets/myImage.jpeg"
// import { ArrowDownIcon } from "@heroicons/react/24/outline";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background decoration */}
//       <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//         {/* Text Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: { staggerChildren: 0.15 },
//             },
//           }}
//         >
//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="text-primary font-semibold mb-3"
//           >
//             Hello, I’m
//           </motion.p>

//           <motion.h1
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
//           >
//             Habeeb Waliyu <br />
//             <span className="text-primary-dark dark:text-primary-soft">
//               Full-Stack Developer
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="mt-6 text-text-muted max-w-lg"
//           >
//             I build modern, scalable, and user-focused web applications and mobile applications using
//             React, React native, Node.js, Typescript and clean UI principles.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="mt-8 flex gap-4 flex-wrap"
//           >
//             <a
//               href="#projects"
//               className="px-6 py-3 rounded-xl bg-primary text-white font-medium
//                          hover:bg-primary-dark transition shadow-lg"
//             >
//               View Projects
//             </a>

//             <a
//               href="#footer"
//               className="px-6 py-3 rounded-xl border border-border-light
//                          dark:border-border-dark font-medium
//                          hover:bg-primary-soft dark:hover:bg-border-dark transition"
//             >
//               Contact Me
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative flex justify-center"
//         >
//           {/* Glow */}
//           <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110" />

//           <motion.img
//             src={im} 
//             alt="Habeeb"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 120 }}
//             className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full
//                        border-4 border-bg-cardLight dark:border-bg-cardDark shadow-xl"
//           />
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.8 }}
//         className="absolute bottom-8 text-text-muted"
//       >
//         <ArrowDownIcon className="w-6 h-6" />
//       </motion.div>
//     </section>
//   );
// }





import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import im from "../assets/myImage.jpeg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectDescription: "",
    budget: "",
  });
  const [status, setStatus] = useState(""); // success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! I'll get back to you soon.");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          projectDescription: "",
          budget: "",
        });
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setStatus(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-primary font-semibold mb-3"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Habeeb Waliyu <br />
            <span className="text-primary-dark dark:text-primary-soft">
              Full-Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 text-text-muted max-w-lg"
          >
            I build modern, scalable, and user-focused web applications and mobile applications using
            React, React native, Node.js, Typescript and clean UI principles.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition shadow-lg"
            >
              View Projects
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl border border-border-light dark:border-border-dark font-medium hover:bg-primary-soft dark:hover:bg-border-dark transition"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110" />
          <motion.img
            src={im}
            alt="Habeeb"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-bg-cardLight dark:border-bg-cardDark shadow-xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 text-text-muted"
      >
        <ArrowDownIcon className="w-6 h-6" />
      </motion.div>

      {/* ====================== CONTACT MODAL ====================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              className="relative bg-bg-cardLight dark:bg-bg-cardDark rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                <h3 className="text-2xl font-bold text-primary">Let's Work Together</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (WhatsApp preferred)"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary"
                />

                <textarea
                  name="projectDescription"
                  placeholder="Project Description (tell me about your idea)"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary resize-none"
                />

                <input
                  type="text"
                  name="budget"
                  placeholder="Estimated Budget (₦ or $)"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition shadow-lg mt-2"
                >
                  Send Message
                </button>

                {status && (
                  <p
                    className={`text-center mt-2 text-sm ${
                      status.includes("success") ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}