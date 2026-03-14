"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Mail, Phone, MapPin,
    ShieldCheck, Award, GraduationCap, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
    {
        id: 1,
        name: "Rev. Fr. Assistant One",
        role: "Assistant Director",
        dept: "Student Welfare & Discipline",
        qual: "M.A., M.Phil.",
        email: "asst1@shh.edu",
        office: "Block A, Room 102",
        image: "/images/asst1.jpg",
        bio: "Focuses on maintaining a harmonious campus environment and addressing student grievances with a pastoral approach."
    },
    {
        id: 2,
        name: "Rev. Fr. Assistant Two",
        role: "Assistant Director",
        dept: "Infrastructure & Amenities",
        qual: "M.Sc., (Ph.D)",
        email: "asst2@shh.edu",
        office: "Block B, Room 205",
        image: "/images/asst2.jpg",
        bio: "Oversees the modernization of hostel facilities, ensuring high-speed connectivity and sustainable energy solutions."
    },
    {
        id: 3,
        name: "Prof. Assistant Three",
        role: "Assistant Director",
        dept: "Academic & Sports",
        qual: "M.P.Ed., Ph.D.",
        email: "asst3@shh.edu",
        office: "Sports Complex, Office 1",
        image: "/images/asst3.jpg",
        bio: "Dedicated to balancing student life through rigorous sports programs and organized study-hour monitoring."
    }
];

export default function AssistantDirectorsPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-slate-50">
            {/* --- PRESTIGIOUS HEADER --- */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group text-[#1A1A1A] hover:text-[#D32F2F] transition-colors">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-black text-[10px] uppercase tracking-widest">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F9A825]/10 flex items-center justify-center text-[#F9A825]">
                            <ShieldCheck size={18} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Sacred Heart Administration</span>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[#D32F2F] font-black text-xs uppercase tracking-[0.5em] block mb-4"
                    >
                        Management Team
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter mb-6 uppercase">
                        Assistant <span className="text-[#F9A825]">Directors.</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                        Our dedicated team of Assistant Directors works tirelessly to ensure the smooth operation of student life and campus excellence.
                    </p>
                </div>
            </section>

            {/* --- DETAILED TEAM LIST --- */}
            <section className="pb-32 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="p-6 md:p-10">
                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                    {/* Portrait */}
                                    <div className="relative w-32 h-32 md:w-44 md:h-44 flex-shrink-0">
                                        <div className="absolute inset-0 rounded-full border-4 border-[#F9A825]/20 animate-pulse" />
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                                        </div>
                                    </div>

                                    {/* Core Info */}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                            <span className="px-4 py-1 rounded-full bg-slate-100 text-[#1A1A1A] font-black text-[9px] uppercase tracking-widest">{member.dept}</span>
                                            <span className="px-4 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] font-black text-[9px] uppercase tracking-widest">Office of AD</span>
                                        </div>
                                        <h2 className="text-3xl font-black text-[#1A1A1A] mb-2">{member.name}</h2>
                                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">
                                            <GraduationCap size={16} className="text-[#F9A825]" /> {member.qual}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 text-sm">
                                                <Mail size={16} className="text-[#D32F2F]" /> {member.email}
                                            </div>
                                            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 text-sm">
                                                <MapPin size={16} className="text-[#D32F2F]" /> {member.office}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed View Toggle */}
                                    <button
                                        onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                                        className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all"
                                    >
                                        <motion.div animate={{ rotate: expandedId === member.id ? 90 : 0 }}>
                                            <ChevronRight size={24} />
                                        </motion.div>
                                    </button>
                                </div>

                                {/* --- EXPANDABLE BIO --- */}
                                <AnimatePresence>
                                    {expandedId === member.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-8 pt-8 border-t border-slate-100">
                                                <h4 className="text-[10px] font-black text-[#D32F2F] uppercase tracking-[0.3em] mb-4">Professional Profile</h4>
                                                <p className="text-slate-600 leading-relaxed font-medium">
                                                    {member.bio}
                                                </p>
                                                <div className="mt-6 p-4 bg-slate-50 rounded-2xl inline-flex items-center gap-3">
                                                    <Award size={18} className="text-[#F9A825]" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Certified Academic Advisor</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}