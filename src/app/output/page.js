"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//components kym
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto w-2/3">
      <section className="pt-[200px] relative text-center">아웃풋 모음</section>

      <Footer />
    </main>
  );
}
