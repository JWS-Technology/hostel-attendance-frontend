"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    UserCheck,
    Users,
    ClipboardCheck,
    History,
    AlertTriangle,
    ChevronRight
} from 'lucide-react';

const AdmissionProcess = () => {
    const steps = [
        {
            icon: <UserCheck size={22} />,
            title: "College Admission",
            desc: "Mandatory prerequisite: You must secure your college seat before applying for the hostel.",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Users size={22} />,
            title: "Director Interview",
            desc: "A personal meeting with the Director. Presence of at least one parent is mandatory.",
            color: "from-[#D32F2F] to-[#b71c1c]"
        },
        {
            icon: <ClipboardCheck size={22} />,
            title: "Required Documents",
            desc: "Prescribed form + Certificate from Parish Priest (Catholics) or previous institution head.",
            color: "from-[#F9A825] to-[#f57f17]"
        },
        {
            icon: <History size={22} />,
            title: "Annual Tenure",
            desc: "Membership is valid for one year. Seniors must undergo the same process for readmission.",
            color: "from-slate-700 to-slate-900"
        }
    ];

    return (
        <section id="admission" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* --- SECTION HEADER --- */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-10 bg-[#D32F2F]" />
                        <span className="text-[#D32F2F] font-bold text-xs uppercase tracking-[0.3em]">Enrolment Phase</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
                        Admission <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#F9A825]">
                            Protocol
                        </span>
                    </h2>
                </div>

                {/* --- ADMISSION STEPS (MOBILE RESPONSIVE GRID) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            <div className="flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-3 italic uppercase tracking-tight">
                                    {step.title}
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                                <div className="mt-auto pt-6 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-[#D32F2F] transition-colors">
                                    Phase {i + 1} <ChevronRight size={12} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- CRITICAL POLICIES CARD (THE "IMPORTANT" SECTION) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[2.5rem] md:rounded-[4rem] bg-slate-950 p-8 md:p-16 overflow-hidden"
                >
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[#D32F2F]/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
                        <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                            <AlertTriangle className="text-[#F9A825]" size={48} />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-white text-2xl md:text-4xl font-black tracking-tighter uppercase italic mb-6">
                                Critical <span className="text-[#D32F2F]">Eligibility</span> Rules
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="text-[#D32F2F] font-black">01</span>
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                            <strong className="text-white uppercase text-xs block mb-1 tracking-widest">Academic Standing</strong>
                                            Renewal is denied for consistent examination failure or lack of academic improvement.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="text-[#D32F2F] font-black">02</span>
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                            <strong className="text-white uppercase text-xs block mb-1 tracking-widest">Linked Discipline</strong>
                                            Dismissal or suspension from the College involves <span className="text-white underline decoration-[#D32F2F] underline-offset-4">automatic dismissal</span> from the Hostel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AdmissionProcess;