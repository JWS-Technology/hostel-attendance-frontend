"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wifi, BookOpen, Utensils, Wind, Bike,
    ShieldCheck, Tv, ThermometerSun, Activity,
} from 'lucide-react';

type Facility = {
    name: string;
    icon: React.ReactElement;
    desc: string;
    img: string;
};

const facilities: Facility[] = [
    { name: "High-Speed WiFi", icon: <Wifi />, desc: "24/7 Fiber Connectivity throughout the campus.", img: "/images/sh.jpg" },
    { name: "Study Hall", icon: <BookOpen />, desc: "Silent Academic Zones with ergonomic furniture.", img: "/images/sh.jpg" },
    { name: "Dining Hall", icon: <Utensils />, desc: "Hygienic Kitchen serving balanced nutrition.", img: "/images/sh.jpg" },
    { name: "Laundry", icon: <Wind />, desc: "Automated Washing & Drying Systems.", img: "/images/sh.jpg" },
    { name: "Sports Area", icon: <Bike />, desc: "Indoor & Outdoor Courts for student fitness.", img: "/images/sh.jpg" },
    { name: "Medical Support", icon: <Activity />, desc: "On-call Doctor and 24/7 Emergency support.", img: "/images/sh.jpg" },
    { name: "24/7 Security", icon: <ShieldCheck />, desc: "Biometric Entry and CCTV Surveillance.", img: "/images/sh.jpg" },
    { name: "Recreation", icon: <Tv />, desc: "Satellite TV Lounge for student relaxation.", img: "/images/recreation.jpg" },
    { name: "Hot Water", icon: <ThermometerSun />, desc: "Solar Water Supply available 24 hours.", img: "/images/water.jpg" },
];

const Facilities = () => {
    const [activeItem, setActiveItem] = useState(facilities[0]);
    const [isManual, setIsManual] = useState(false);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const detectCenter = () => {
            if (!marqueeRef.current || isManual) {
                animationRef.current = requestAnimationFrame(detectCenter);
                return;
            }
            const centerX = window.innerWidth / 2;
            const cards = marqueeRef.current.querySelectorAll('.facility-card');
            let closest = facilities[0];
            let minDistance = Infinity;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;
                const distance = Math.abs(centerX - cardCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closest = facilities[index % facilities.length];
                }
            });

            if (closest.name !== activeItem.name) {
                setActiveItem(closest);
            }
            animationRef.current = requestAnimationFrame(detectCenter);
        };
        animationRef.current = requestAnimationFrame(detectCenter);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [activeItem, isManual]);

    const handleManualClick = (item: typeof facilities[0]) => {
        setIsManual(true);
        setActiveItem(item);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsManual(false), 4000);
    };

    return (
        <section id="facilities" className="py-12 md:py-24 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-4xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter uppercase">
                        SH <span className="text-[#F9A825]">Facilities</span>
                    </h2>
                </div>

                <div className="flex flex-col items-center">
                    {/* TOP IMAGE STAGE - Responsive Aspect Ratios */}
                    <div className="w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] mb-8 md:mb-12 relative group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.name}
                                initial={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative w-full h-full rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white ring-1 ring-slate-100"
                            >
                                <img src={activeItem.img} className="w-full h-full object-cover" alt={activeItem.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-16">
                                    <motion.h3 className="text-white text-2xl md:text-6xl font-black tracking-tighter uppercase italic mb-1 md:mb-2 leading-none">
                                        {activeItem.name}
                                    </motion.h3>
                                    <p className="text-[#F9A825] font-bold text-xs md:text-lg max-w-xl opacity-90">
                                        {activeItem.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* CENTER ACTIVE INDICATOR */}
                    <div className="flex flex-col items-center mb-2 md:mb-4 z-20">
                        <motion.div
                            animate={{
                                width: [30, 80, 30],
                                backgroundColor: ["#D32F2F", "#F9A825", "#D32F2F"]
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="h-[3px] md:h-[4px] rounded-full shadow-[0_0_15px_#D32F2F]"
                        />
                    </div>

                    {/* MOVING MARQUEE - Adjusted Sizes for Mobile */}
                    <div className="w-full overflow-hidden py-6 md:py-10">
                        <motion.div
                            ref={marqueeRef}
                            className="flex gap-4 md:gap-8"
                            animate={{ x: [0, -3200] }}
                            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                            style={{ width: 'max-content' }}
                        >
                            {[...facilities, ...facilities, ...facilities].map((item, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => handleManualClick(item)}
                                    className={`facility-card flex-shrink-0 w-36 md:w-64 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] cursor-pointer border transition-all duration-500
                                    ${activeItem.name === item.name
                                            ? 'bg-[#D32F2F] border-[#D32F2F] shadow-xl -translate-y-4 md:-translate-y-8 scale-105 md:scale-110 z-10'
                                            : 'bg-slate-50 border-slate-200 opacity-60 grayscale-[0.3]'
                                        }`}
                                >
                                    <div className={`mb-3 md:mb-6 transition-colors duration-500 ${activeItem.name === item.name ? 'text-white' : 'text-[#F9A825]'}`}>
                                        {React.cloneElement(item.icon as React.ReactElement<any>, {
                                            size: activeItem.name === item.name ? 32 : 24,
                                            color: activeItem.name === item.name ? "#fff" : "#F9A825",
                                            strokeWidth: 2.5
                                        })}
                                    </div>
                                    <h4 className={`text-[10px] md:text-[12px] font-black uppercase tracking-widest leading-tight transition-colors duration-500 ${activeItem.name === item.name ? 'text-white' : 'text-slate-800'}`}>
                                        {item.name}
                                    </h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;