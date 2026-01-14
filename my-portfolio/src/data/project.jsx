

// data/projects.js
import screenshot from "../assets/screenshot.jpeg";
import expense1 from "../assets/expense1.png";
import expense2 from "../assets/expense2.png";
import chowdeck from "../assets/chowdeck1.png";
import chowdeck2 from "../assets/chowdeck2.png";
import flexipay from "../assets/flexpay1.png";
import flexipay2 from "../assets/flexipay2.png"; // ← assuming you have two different images
import wheelitin from "../assets/wheelitin.png";
import ejob from "../assets/ejob2.png";
import hr from "../assets/hrImage.jpeg";           // ← added .png (most likely)
import bluewave from "../assets/bluewaves.png";
import bluewave2 from "../assets/bluewaves2.png";
import edrive from "../assets/edrive.png";
import edrivers from "../assets/edrivers.png";     // not used yet, but imported
import edrivers2 from "../assets/edrivers2.png";   // not used yet
import ecars from "../assets/ecars.png"
import ecars2 from "../assets/ecars2.png"
export const projects = [
  {
    id: 1,
    title: "Run-tinz (Food & Logistics)",
    description:
      "A comprehensive microservices-based real-time food and item delivery platform inspired by Chowdeck. Connects customers with restaurants/vendors and empowers riders. Features include menu browsing, cart, secure checkout, vendor dashboard, rider real-time tracking, analytics, Socket.IO notifications, JWT multi-role auth (customer/vendor/rider), and QR code scanning.",
    shortDesc: "Real-time food delivery platform with customer, vendor & rider dashboards + live tracking",
    image: chowdeck,
    image2: chowdeck2,
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "Paystack", "Framer Motion", "QR Scanner"],
    live: "https://logistics-restorant.edrive.ng/",
    github: "#",
  },
  {
    id: 2,
    title: "FlexiPay",
    description:
      "Full-stack fintech platform enabling mobile recharge, airtime top-up, cable TV subscriptions, electricity bill payments, and peer-to-peer transfers. Secure, fast, and user-friendly financial services.",
    shortDesc: "All-in-one bill payment and money transfer fintech app",
    image: flexipay,
    image2: flexipay2,
    tech: ["React", "Node.js", "MongoDB", "Paystack", "Socket.IO", "Framer Motion", "QR Scanner"],
    live: "https://flexipay.taskflow.com.ng/",
    github: "#",
  },
  {
    id: 3,
    title: "HR Management System",
    description:
      "Complete HR solution allowing admins to manage employees, auto-generate unique staff IDs, and enable employees to view profiles, receive updates, request leaves (with auto-generated letters), and more.",
    shortDesc: "Employee management system with auto ID generation and leave requests",
    image: hr,
    image2: hr,
    tech: ["React", "Node.js", "MongoDB", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Bluewaves Travel & Tours",
    description:
      "Full-stack travel agency website allowing users to book appointments, travel processing, seminars, tours, and more with a modern interface.",
    shortDesc: "Travel booking and appointment platform",
    image: bluewave,
    image2: bluewave2,
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://bluewavestravelsandtours.com/",
    github: "#",
  },
  {
    id: 5,
    title: "NairaWise",
    description:
      "Privacy-first personal finance tracker built for Nigerians. Track expenses/income, manage budgets, monitor net worth, voice command entry, AI transaction predictions, and AI chat — all data stored locally with zero cloud uploads.",
    shortDesc: "Offline-first finance tracker with voice input & AI insights",
    image: expense1,
    image2: expense2,
    tech: ["React", "TypeScript", "Framer Motion", "Speech Recognition", "LocalStorage"],
    live: "https://nairawise.codequor.com/",
    github: "#",
  },
  {
    id: 6,
    title: "E-Job",
    description:
      "Full-featured job marketplace with employer job posting, applicant tracking, virtual interviews (video call), digital staff ID cards, job application tracking, and employer staff management.",
    shortDesc: "Job board with virtual interviews and digital ID cards",
    image: screenshot,
    image2: ejob,
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "WebRTC", "Framer Motion", "QR Code"],
    live: "https://ejobs.com.ng/",
    github: "#",
  },
  {
    id: 7,
    title: "Wheel It In",
    description:
      "UK-based platform connecting car owners with nearby auto specialists. Book urgent or scheduled repairs, chat with mechanics, and manage appointments.",
    shortDesc: "UK based Car repair booking & mechanic connection platform",
    image: wheelitin,
    image2: wheelitin,
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    live: "https://wheelitin.com/",
    github: "#",
  },
  {
    id: 8,
    title: "E-Drive (Ride Hailing)",
    description:
      "Ride-hailing app where users can order rides, suggest prices, negotiate with drivers in real-time chat, hire drivers, rent vehicles, and send deliveries.",
    shortDesc: "Flexible ride-hailing with price negotiation & delivery",
    image: edrive,
    image2: edrive,
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Socket.IO"],
    live: "https://edrive.ng/",
    github: "#",
  },
  {
    id: 8,
   title: "E-Cars",
    description:
      "it is a platform meant for car dealers to connect with buyers, it  allows the users to value their assets, connect with verified car part sellers, report a stolen vehicle, report a stolen vehicles, compare car features, and also allows car auctioning",
    shortDesc: "a platform for car dealers to connect with buyers",
    image: ecars,
    image2: ecars2,
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Socket.IO"],
    live: "https://ecars.ng/",
    github: "#",
  },

];