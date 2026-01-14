// import { motion } from "framer-motion";
// import { skills } from "../data/skills";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const tag = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 120 },
//   },
// };

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative py-28 bg-bg-light dark:bg-bg-dark overflow-hidden"
//     >
//       {/* Background glow */}
//       <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-3xl" />

//       <div className="relative max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
//             Skills & Technologies
//           </h2>
//           <p className="text-text-muted max-w-xl mx-auto">
//             Tools and technologies I use to build scalable, maintainable, and
//             high-quality applications.
//           </p>
//         </motion.div>

//         {/* Skill Groups */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-10"
//         >
//           {skills.map((group) => (
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               key={group.category}
//               variants={card}
//               whileHover={{ y: -6 }}
//               className="relative rounded-3xl p-8
//                          bg-bg-cardLight dark:bg-bg-cardDark
//                          border border-border-light dark:border-border-dark
//                          shadow-xl transition"
//             >
//               {/* Card glow */}
//               <div
//                 className="absolute inset-0 opacity-0 hover:opacity-100
//                            bg-gradient-to-br from-primary/20 via-transparent to-primary-dark/20
//                            transition duration-500 rounded-3xl"
//               />

//               <h3 className="relative text-xl font-semibold mb-6">
//                 {group.category}
//               </h3>

//               <motion.div
//                 variants={container}
//                 className="relative flex flex-wrap gap-3"
//               >
//                 {group.items.map((skill) => (
//                   <motion.span
//                     key={skill}
//                     variants={tag}
//                     whileHover={{
//                       scale: 1.1,
//                       y: -3,
//                     }}
//                     className="px-4 py-2 rounded-full text-sm font-medium
//                                bg-primary-soft text-primary-dark
//                                dark:bg-border-dark dark:text-text-dark
//                                shadow-sm cursor-default"
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// Updated Skills.jsx
import { motion } from "framer-motion";
import { skills } from "../data/skills"; // assume same data structure

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const card = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const tag = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 140 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-bg-light dark:bg-bg-dark overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-5">
            Tech Stack & Skills
          </h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto">
            The tools I use daily to build fast, beautiful, and scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl p-8 bg-bg-cardLight dark:bg-bg-cardDark border border-border-light dark:border-border-dark shadow-xl backdrop-blur-sm transition-all duration-400"
            >
              {/* Subtle gradient hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="relative text-2xl font-bold mb-7 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tag}
                    whileHover={{ scale: 1.12, y: -3 }}
                    className="px-5 py-2.5 rounded-full text-sm font-medium
                               bg-gradient-to-r from-primary/15 to-primary/5
                               dark:from-primary/25 dark:to-primary/10
                               border border-primary/20
                               backdrop-blur-sm shadow-sm
                               text-primary-dark dark:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}