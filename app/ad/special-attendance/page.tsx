"use client";
import React, { useEffect, useState } from "react";
import "../../styles/attendance.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

type Student = {
    _id: string;
    name: string;
    dNo: string;
    accNo: number;
    roomNo: string;
};

type StudentData = {
    [room: string]: Student[];
};

const Page = () => {
    const router = useRouter();

    const [statusMap, setStatusMap] = useState<Record<number, string>>({});
    const [datetime, setDatetime] = useState<Date | null>(null);
    const [studentData, setStudentData] = useState<StudentData>({});
    const [loadingCircle, setloadingCircle] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        (async () => {
            try {

                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/attendance/christian`,
                    { withCredentials: true }
                );

                const grouped = response.data?.students;
                setStudentData(grouped && typeof grouped === "object" ? grouped : {});
                setloadingCircle(false);

            } catch (error) {
                router.push("/login");
            }
        })();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setDatetime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const handleStatusChange = (accNo: number, status: string) => {
        setStatusMap((prev) => ({ ...prev, [accNo]: status }));
    };

    const getSummary = () => {
        let present = 0;
        let absent = 0;

        Object.values(studentData).forEach((students) => {
            students.forEach((student) => {
                const status = statusMap[student.accNo] || "present";

                if (status === "present") present++;
                else if (status === "absent") absent++;
            });
        });

        return { present, absent };
    };

    const { present, absent } = getSummary();

    const handleSave = async () => {
        if (saving) return;
        setSaving(true);

        const formattedRecords = Object.entries(studentData).flatMap(([_, students]) =>
            students.map((student) => ({
                roomNo: student.roomNo,
                accountNumber: student.accNo,
                name: student.name,
                status: statusMap[student.accNo] || "present",
            }))
        );

        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/attendance/mark`,
                {
                    type: "special",
                    records: formattedRecords,
                },
                { withCredentials: true }
            );

            router.push("/ad/attendance-records");

        } catch (err: any) {
            const message = err.response?.data?.error || "❌ Failed to save attendance.";
            alert(message);
            setSaving(false);
        }
    };

    return (
        <>
            {loadingCircle ? (
                <div className="h-screen w-screen bg-blue-300">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="w-screen flex justify-center mt-5">
                        <div className="w-[90vw] flex flex-col justify-center">

                            <header className="mb-5">
                                <div className="header-left">
                                    <img src="/logo.png" alt="Logo" />
                                    <h1 className="text-3xl font-bold">✝ Special Attendance</h1>
                                </div>

                                <div id="datetime">
                                    {datetime &&
                                        datetime.toLocaleString("en-GB", {
                                            weekday: "short",
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                            second: "numeric",
                                            hour12: true,
                                        })}
                                </div>
                            </header>

                            <button
                                onClick={() => router.push("/ad/dashboard")}
                                className="mb-4 px-4 py-2 rounded-lg border font-mono border-black bg-white text-black font-semibold transition hover:scale-105"
                            >
                                🔙 Back to Dashboard
                            </button>

                            <div id="attendance-container">

                                {Object.entries(studentData)
                                    .sort(([roomA], [roomB]) => {
                                        const [blockA, roomNoA] = roomA.split("-");
                                        const [blockB, roomNoB] = roomB.split("-");

                                        if (blockA < blockB) return -1;
                                        if (blockA > blockB) return 1;

                                        return Number(roomNoA) - Number(roomNoB);
                                    })
                                    .map(([room, students]) => {

                                        const [block, roomNo] = room.split("-");

                                        return (
                                            <div className="room-card" key={room}>

                                                <div className="room-title">
                                                    Block {block}, Room {roomNo}
                                                </div>

                                                <div className="student-list">

                                                    {students.map((student) => (

                                                        <div className="student-card" key={student.accNo}>

                                                            <div className="student-name">
                                                                {student.name} ({student.dNo})
                                                            </div>

                                                            <div className="status-buttons">

                                                                <button
                                                                    className={`status-btn present ${statusMap[student.accNo] === "present"
                                                                            ? "active"
                                                                            : ""
                                                                        }`}
                                                                    onClick={() =>
                                                                        handleStatusChange(student.accNo, "present")
                                                                    }
                                                                >
                                                                    P
                                                                </button>

                                                                <button
                                                                    className={`status-btn absent ${statusMap[student.accNo] === "absent"
                                                                            ? "active"
                                                                            : ""
                                                                        }`}
                                                                    onClick={() =>
                                                                        handleStatusChange(student.accNo, "absent")
                                                                    }
                                                                >
                                                                    A
                                                                </button>

                                                            </div>

                                                        </div>
                                                    ))}

                                                </div>

                                            </div>
                                        );
                                    })}

                            </div>

                            <button
                                id="saveBtn"
                                disabled={saving}
                                className={`px-4 py-2 rounded-lg font-semibold ${saving
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-green-500 hover:scale-105"
                                    }`}
                                onClick={async () => {
                                    const confirmSave = window.confirm(
                                        "Do you want to save the attendance?"
                                    );
                                    if (confirmSave) {
                                        await handleSave();
                                    }
                                }}
                            >
                                {saving ? "⏳ Saving..." : "✅ Save Attendance"}
                            </button>

                            <div id="summary">
                                Total Present: {present} | Total Absent: {absent}
                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Page;