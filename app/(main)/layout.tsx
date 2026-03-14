"use client";

// import Navigation from "../components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col min-h-screen bg-white selection:bg-[#D32F2F]/10 selection:text-[#D32F2F]">
            {/* 1. Global Navigation */}
            {/* <Navigation /> */}

            {/* 2. Page Content with Entrance Animation */}
            <main className="flex-grow w-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* You can drop your Footer here later */}
        </div>
    );
}