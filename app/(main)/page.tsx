"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import InfoCards from "../components/InfoCards";
// import Announcements from "../components/Announcements";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <main className="relative">
      {/* 1. Navigation Bar */}
      <Navigation />

      {/* 2. Hero Section (Includes Background Image & Branding) */}
      <Hero />

      {/* 3. Transition Section with Floating Header */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-1 shadow-2xl"
          >
            {/* 4. Quick Info Cards (Injected into the glass container) */}
            <div className="bg-slate-950/50 rounded-[2.3rem] overflow-hidden">
              <InfoCards />
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Announcements /> */}

    </main>
  );
}