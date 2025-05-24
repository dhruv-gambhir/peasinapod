"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();
    return (
        <main className="fixed flex flex-col h-screen items-center bg-[#2E8B57] w-1/6">
            <div className="flex h-1/6 items-center justify-center">
                <div className="flex items-center justify-center w-3/4 rounded-full bg-[#F0F0F0]">
                    <img src="/logo.png" alt="Logo" className="w-1/2" />
                </div>
            </div>
            <div className="flex flex-col h-5/6 w-full items-center justify-center gap-[20px]">
                <button
                    className="w-3/4 h-1/12 rounded-[10px] border-none"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Home
                </button>
                <button
                    className="w-3/4 h-1/12 rounded-[10px] border-none"
                    onClick={() => {
                        router.push("create");
                    }}
                >
                    Create
                </button>
                <button
                    className="w-3/4 h-1/12 rounded-[10px] border-none"
                    onClick={() => {
                        router.push("friends");
                    }}
                >
                    Friends
                </button>
                <button
                    className="w-3/4 h-1/12 rounded-[10px] border-none"
                    onClick={() => {
                        router.push("settings");
                    }}
                >
                    Settings
                </button>
            </div>
        </main>
    );
}
