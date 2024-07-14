"use client";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
