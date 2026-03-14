"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import InfoCards from "../components/InfoCards";
import About from "../components/About";
import Facilities from "../components/Facilities";
import Administration from "../components/Administration";
import AdmissionProcess from "../components/AdmissionProcess";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-[#ECE7D1] overflow-x-hidden">
      {/* 1. INJECTED CSS: Handles smooth scroll & offsets without touching globals.css */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth !important;
        }
        /* Offset for the sticky header when clicking nav links */
        #about, #facilities, #administration {
          scroll-margin-top: 120px;
        }
      `}</style>

      {/* --- BACKGROUND STAGE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#D32F2F]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#F9A825]/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* HERO */}
        <Hero />

        {/* INFO CARDS (The Glass Transition) */}
        <section className="relative z-30 -mt-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D32F2F]/20 to-[#F9A825]/20 rounded-[2.6rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] p-1 shadow-2xl">
                <div className="bg-slate-950/[0.85] rounded-[2.3rem] overflow-hidden border border-white/10">
                  <InfoCards />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- NAVIGATION REDIRECTION TARGETS --- */}

        <section id="about">
          <About />
        </section>

        <section id="administration">
          <Administration />
        </section>

        <section id="facilities">
          <Facilities />
        </section>
        <section id="admission-process">
          <AdmissionProcess />
        </section>

      </div>
    </main>
  );
}