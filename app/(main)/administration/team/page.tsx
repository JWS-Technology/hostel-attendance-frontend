"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Mail, MapPin, ShieldCheck,
    Award, GraduationCap, History, ChevronRight, Users, Briefcase
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100 }
    }
};

const teamMembers = [
    { id: 1, name: "Rev. Fr. Assistant One", dept: "Student Welfare", qual: "M.A., M.Phil.", email: "asst1@shh.edu", office: "Block A, 102", image: "/images/sabari_sir.jpg", bio: "Focuses on maintaining a harmonious campus environment and addressing student grievances with a pastoral approach." },
    { id: 2, name: "Rev. Fr. Assistant Two", dept: "Infrastructure", qual: "M.Sc., (Ph.D)", email: "asst2@shh.edu", office: "Block B, 205", image: "/images/sabari_sir.jpg", bio: "Oversees the modernization of hostel facilities, ensuring high-speed connectivity and sustainable energy solutions." },
    { id: 3, name: "Prof. Assistant Three", dept: "Academic & Sports", qual: "M.P.Ed., Ph.D.", email: "asst3@shh.edu", office: "Sports Complex", image: "/images/sabari_sir.jpg", bio: "Dedicated to balancing student life through rigorous sports programs and organized study-hour monitoring." }
];

const historicalDirectors = [
    { year: "2025 - Present", name: "Rev. Dr. S. Samuel Jeyaseelan SJ", active: true },
    { year: "2023 - 2025", name: "Rev. Dr. V. Gilburt Camillus SJ" },
    { year: "2020 - 2022", name: "Rev. Dr. K Arockiam SJ" },
    { year: "2018 - 2020", name: "Rev Fr U Godwin Rufus SJ" },
    { year: "2017 - 2018", name: "Rev Dr S PAUL PRAGASH SJ" },
    { year: "2014 - 2017", name: "Rev Fr S Aruldoss SJ" },
    { year: "2013 - 2014", name: "Rev Fr S Arul Ravi SJ" },
    { year: "2012 - 2013", name: "Rev Dr M Arockiasamy Xavier SJ" },
    { year: "2011 - 2012", name: "Rev Fr Das R Jesu Michael SJ" },
    { year: "2010 - 11", name: "Rev Dr Mani Valan S SJ" },
    { year: "2009 - 10", name: "Rev Fr Sebasthi John Basker T SJ" },
    { year: "2009 - 09", name: "Rev Dr Sebastian Anand SJ" },
    { year: "2001 - 09", name: "Rev Fr M Elias SJ" },
    { year: "2k - 01", name: "Rev Fr M Devasagayam SJ" },
    { year: "1999 - 2k", name: "Rev Fr S Mani Valan SJ" },
    { year: "1997 - 99", name: "Rev Fr V Gilbert Camillus SJ" },
    { year: "1996 - 97", name: "Rev Fr M Elias SJ" },
    { year: "1993 - 96", name: "Rev Fr A Joseph SJ SJ" },
    { year: "1988 - 92", name: "Rev Fr A Sebastian SJ" },
    { year: "1986 - 88", name: "Rev Fr Ignacimuthu SJ" },
    { year: "1983 - 86", name: "Rev Fr Felix SJ" },
    { year: "1982 - 83", name: "Rev Fr J M Dhas SJ" },
    { year: "1981 - 82", name: "Rev Fr Leo Tagore SJ" },
    { year: "1979 - 81", name: "Rev Fr P Stanislaus SJ" },
    { year: "1975 - 79", name: "Rev Fr Leo Tagore SJ" },
    { year: "1972 - 75", name: "Rev Fr R George SJ" },
    { year: "1968 - 72", name: "Rev Fr M James SJ" },
    { year: "1965 - 68", name: "Rev Fr G Maliekal SJ" },
    { year: "1962 - 65", name: "Rev Fr R George SJ" },
    { year: "1960 - 62", name: "Rev Fr Ignatius Hirudayam SJ" },
    { year: "1957 - 60", name: "Rev Fr Micheal Raj SJ" },
    { year: "1954 - 57", name: "Rev Fr C V Mattam SJ" },
    { year: "1950 - 54", name: "Rev Fr Thamby SJ" },
    { year: "1946 - 50", name: "Rev Fr Santiago SJ" },
    { year: "1945 - 46", name: "Rev Fr Ignatius Hirudayam SJ" },
    { year: "1941 - 45", name: "Rev Fr X Vattathara SJ" },
];

export default function AdministrationPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#F9A825] selection:text-white">
            {/* --- ELEGANT NAV --- */}
            <nav className="bg-white/70 backdrop-blur-2xl border-b border-[#E5E4E2] sticky top-0 z-50 h-20 flex items-center px-6 md:px-16 justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#D32F2F] transition-all duration-300">
                        <ArrowLeft size={22} className="text-white" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-[0.2em]">Back</span>
                </Link>
                <div className="hidden lg:flex items-center gap-4">
                    <div className="h-10 w-[1px] bg-slate-200" />
                    <ShieldCheck size={20} className="text-[#F9A825]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Leadership</span>
                </div>
            </nav>

            <div className="max-w-[1500px] mx-auto p-6 md:p-16">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-start">

                    {/* --- LEFT: ASSISTANT DIRECTORS --- */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="xl:col-span-7 space-y-12"
                    >
                        <header className="relative">
                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-3 mb-6">
                                <span className="w-12 h-[2px] bg-[#D32F2F]" />
                                <span className="text-[#D32F2F] font-black text-xs uppercase tracking-[0.4em]">Current Office</span>
                            </motion.div>
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
                                Assistant <br /> <span className="text-[#F9A825] drop-shadow-sm">Directors.</span>
                            </h1>
                            <p className="text-slate-500 font-medium max-w-lg text-lg">
                                Facilitating campus excellence through strategic governance and student-centric support systems.
                            </p>
                        </header>

                        <div className="space-y-8">
                            {teamMembers.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className={`group rounded-[3.5rem] border-2 transition-all duration-500 ${expandedId === member.id
                                        ? 'bg-[#1A1A1A] border-[#1A1A1A] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]'
                                        : 'bg-white border-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:border-[#F9A825]'
                                        }`}
                                >
                                    <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
                                        <div className="relative w-40 h-40 flex-shrink-0">
                                            <div className={`absolute inset-0 rounded-[2.5rem] border-4 transition-transform duration-700 ${expandedId === member.id ? 'border-[#F9A825] rotate-12' : 'border-[#FAF9F6] rotate-0'}`} />
                                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                                                <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                            </div>
                                        </div>

                                        <div className="flex-grow text-center md:text-left">
                                            <h3 className={`text-3xl md:text-4xl font-black uppercase italic leading-tight mb-2 ${expandedId === member.id ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                                {member.name}
                                            </h3>
                                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${expandedId === member.id ? 'bg-[#F9A825] text-black' : 'bg-[#D32F2F]/10 text-[#D32F2F]'}`}>
                                                    {member.dept}
                                                </span>
                                            </div>
                                            <div className={`flex items-center justify-center md:justify-start gap-2 font-bold text-xs uppercase tracking-[0.2em] ${expandedId === member.id ? 'text-slate-400' : 'text-slate-400'}`}>
                                                <GraduationCap size={18} className="text-[#F9A825]" /> {member.qual}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                                            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${expandedId === member.id ? 'bg-[#F9A825] text-black rotate-90' : 'bg-[#1A1A1A] text-white hover:bg-[#D32F2F]'
                                                }`}
                                        >
                                            <ChevronRight size={28} />
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {expandedId === member.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-10 pb-10 overflow-hidden"
                                            >
                                                <div className="pt-8 border-t border-white/10">
                                                    <p className="text-lg text-slate-300 font-medium italic mb-8 leading-relaxed italic">
                                                        "{member.bio}"
                                                    </p>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <a href={`mailto:${member.email}`} className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                                                            <div className="w-12 h-12 rounded-2xl bg-[#D32F2F] flex items-center justify-center text-white"><Mail size={20} /></div>
                                                            <span className="text-xs font-black uppercase tracking-widest text-white">{member.email}</span>
                                                        </a>
                                                        <div className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl">
                                                            <div className="w-12 h-12 rounded-2xl bg-[#F9A825] flex items-center justify-center text-black"><MapPin size={20} /></div>
                                                            <span className="text-xs font-black uppercase tracking-widest text-white">{member.office}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* --- RIGHT: LEGACY LEDGER (STICKY) --- */}
                    <section className="xl:col-span-5 xl:sticky xl:top-32 pb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[4rem] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-[1.5rem] bg-[#1A1A1A] flex items-center justify-center text-white shadow-xl">
                                        <History size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#1A1A1A]">Legacy <span className="text-[#D32F2F]">Ledger</span></h2>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Established 1941</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar px-2">
                                {historicalDirectors.map((dir, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.4,
                                            delay: i % 10 * 0.05, // Stagger effect for the first few visible items
                                            type: "spring",
                                            damping: 20
                                        }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className={`flex items-center justify-between p-5 rounded-[2.2rem] border-2 transition-all duration-500 group relative overflow-hidden ${dir.active
                                            ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]'
                                            : 'bg-white border-slate-100 hover:border-[#F9A825] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
                                            }`}
                                    >
                                        {/* Subtle Gradient Background for non-active items */}
                                        {!dir.active && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF9F6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        )}

                                        <div className="flex-1 relative z-10">
                                            <div className="flex items-center gap-3 mb-2">
                                                <p className={`text-[11px] font-black uppercase tracking-[0.25em] px-2 py-0.5 rounded ${dir.active
                                                    ? 'bg-[#F9A825] text-black'
                                                    : 'bg-slate-900 text-white'
                                                    }`}>
                                                    {dir.year}
                                                </p>
                                                {dir.active && (
                                                    <span className="flex h-2 w-2 rounded-full bg-[#F9A825] animate-ping" />
                                                )}
                                            </div>

                                            <h4 className={`text-base md:text-lg font-black uppercase tracking-tight leading-tight ${dir.active ? 'text-white' : 'text-[#1A1A1A]'
                                                }`}>
                                                {dir.name}
                                            </h4>
                                        </div>

                                        <div className={`relative z-10 p-3 rounded-2xl transition-colors duration-300 ${dir.active ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-[#F9A825]/10'
                                            }`}>
                                            {dir.active ? (
                                                <Users size={22} className="text-[#F9A825]" />
                                            ) : (
                                                <Award size={20} className="text-[#1A1A1A] group-hover:text-[#F9A825] transition-colors" />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 flex items-center justify-center opacity-40">
                                <div className="flex items-center gap-4 py-3 px-6 rounded-full border border-slate-200">
                                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Historical Archive</span>
                                    <span className="w-2 h-2 rounded-full bg-[#F9A825]" />
                                </div>
                            </div>
                        </motion.div>
                    </section>

                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 20px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #F9A825; }
                
                /* Smooth Scroll behavior for the whole page */
                html { scroll-behavior: smooth; }
            `}</style>
        </main>
    );
}