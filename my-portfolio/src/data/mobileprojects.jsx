// src/data/mobileProjects.js
// Unzip mobile-shots.zip into src/assets/mobile/ (so the files sit directly in that folder)

import nwWelcome from "../assets/mobile/nairawise-welcome.jpeg";
import nwHome from "../assets/mobile/nairawise-home-dark.jpeg";
import nwTxDark from "../assets/mobile/nairawise-transactions-dark.jpeg";
import nwTxLight from "../assets/mobile/nairawise-transactions-light.jpeg";
// import nwCalendar from "../assets/mobile/nairawise-calendar.jpeg"; // optional

import phDashboard from "../assets/mobile/pinnacle-dashboard.jpeg";
import phAI from "../assets/mobile/pinnacle-ai.jpeg";
import phCBT from "../assets/mobile/pinnacle-cbt.jpeg";
import phPayroll from "../assets/mobile/pinnacle-payroll.jpeg";

import lmStart from "../assets/mobile/letsmeet-start.jpeg";
import lmReal from "../assets/mobile/letsmeet-real-people.jpeg";
import lmMatches from "../assets/mobile/letsmeet-matches.jpeg";
import lmEmail from "../assets/mobile/letsmeet-email.jpeg";
import lmLogin from "../assets/mobile/letsmeet-login.jpeg";
import job from "../assets/mobile/joblink03.jpeg"
import jobprofile from "../assets/mobile/joblink02.jpeg"
import jobSettings from "../assets/mobile/joblink01.jpeg"

import jlMessages from "../assets/mobile/joblink-messages.jpeg";
import jlAccount from "../assets/mobile/joblink-account.jpeg";

export const mobileApps = [
  {
    id: "nairawise",
    name: "NairaWise",
    tagline: "A money app that talks back.",
    accent: "#10b981",
    onAccent: "#04251a",
    platforms: ["Android", "iOS"],
    description:
      "A personal finance tracker built for Nigerians. Log income and expenses in seconds, see exactly where your naira goes, and switch between a polished dark and light theme.",
    ai: "Ask the built-in AI assistant about your spending, get predictions for upcoming transactions, and add entries by speaking.",
    features: [
      "Voice command transaction entry",
      "Spend rate and category breakdown",
      "Budgets, to-dos and calendar in one place",
      "Dark and light themes",
    ],
    tech: ["React Native", "Expo", "AI Assistant", "Speech Recognition"],
    web: "https://nairawise.codequor.com/",
    screens: [
      { src: nwWelcome, label: "Welcome" },
      { src: nwHome, label: "Home" },
      { src: nwTxDark, label: "Transactions (dark)" },
      { src: nwTxLight, label: "Transactions (light)" },
    ],
  },
  {
    id: "pinnaclehub",
    name: "PinnacleHub",
    tagline: "The whole school, in a teacher's pocket.",
    accent: "#d4af37",
    onAccent: "#1a1405",
    platforms: ["Android", "iOS"],
    description:
      "The mobile companion to the PinnacleHub school-management platform. Teachers, staff and students each get a dashboard made for their role.",
    ai: "PinnacleHub AI answers how-to questions on the spot, such as adding a student, checking subscription status, building a timetable or tracking fees.",
    features: [
      "Role-based dashboards with live class and score stats",
      "Create computer-based tests (CBT) for selected classes",
      "Staff payroll history with PDF download and print",
      "Average score charts by subject",
    ],
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "AI Assistant"],
    web: null,
    screens: [
      { src: phDashboard, label: "Teacher dashboard" },
      { src: phAI, label: "PinnacleHub AI" },
      { src: phCBT, label: "Create CBT" },
      { src: phPayroll, label: "Payroll" },
    ],
  },
  {
    id: "letsmeet",
    name: "Let's Meet",
    tagline: "Dating with real people, not bots.",
    accent: "#ff4d6d",
    onAccent: "#ffffff",
    platforms: ["Android", "iOS"],
    description:
      "A dating app where every profile goes through a vetting process, so you always match with someone real. Matches are based on shared interests, not just location.",
    ai: "AI-assisted matching surfaces people who share your interests.", // edit to match what your AI does
    features: [
      "Vetted profiles",
      "Interest-based matching",
      "Passwordless email code sign-in",
      "Swipeable onboarding",
    ],
    tech: ["React Native", "Expo", "Node.js", "Email Verification", "AI Matching"],
    web: null,
    screens: [
      { src: lmStart, label: "Find your match" },
      { src: lmReal, label: "Real people" },
      { src: lmMatches, label: "Matches that make sense" },
      { src: lmEmail, label: "Sign up" },
      { src: lmLogin, label: "Welcome back" },
    ],
  },
  {
    id: "flexipay",
    name: "FlexiPay",
    tagline: "Bills, airtime and transfers without the queue.",
    accent: "#16a34a",
    onAccent: "#ffffff",
    platforms: ["Android", "iOS"],
    description:
      "The mobile version of the FlexiPay fintech platform: airtime and data top-ups, cable TV, electricity bills and peer-to-peer transfers.",
    ai: "An AI assistant helps you pay bills and understand your spending.", // edit to match what your AI does
    features: [
      "Airtime and data top-up",
      "Cable TV and electricity payments",
      "Peer-to-peer transfers",
      "Paystack-powered funding",
    ],
    tech: ["React Native", "Expo", "Node.js", "Paystack", "AI Assistant"],
    web: "https://wallet-system-8hui.vercel.app/",
    screens: [], // add screenshots later: { src: import, label: "..." }
  },
  {
    id: "joblink",
    name: "Job Link",
    tagline: "Find work, hear back, get hired.",
    accent: "#00843d",
    onAccent: "#ffffff",
    platforms: ["Android", "iOS"],
    description:
      "The mobile app for Joblink.ng. Browse jobs, keep your profile current, message employers and set your service location to see relevant opportunities.",
    ai: null,
    features: [
      "Job discovery near your service location",
      "Employer messages inbox",
      "Fast Track and Employer Access options",
      "Payment verification by reference",
    ],
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    web: "https://joblink.ng/",
    screens: [
      { src: job, label: "Jobs" },
      { src: jlMessages, label: "Messages" },
      { src: jlAccount, label: "Account centre" },
      { src: jobprofile, label: "Job seeker profile" },
      { src: jobSettings, label: "Settings" },
    ],
  },
];