import Navigation from "../components/Navigation";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Navigation stays on top */}
            <Navigation />

            {/* Page content */}
            <main className="flex-grow w-full relative">
                {children}
            </main>
        </>
    );
}