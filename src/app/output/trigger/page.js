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
    <main className="py-12">
      {/* 인트로 */}
      <div className="flex flex-col justify-center h-[600px] text-center text-white intro-bg3">
        <h1 className="py-2 text-7xl paperlogy-ultra text-white">
          정적인 화면을 살아있는 경험으로 바꾸는
          <br />
          스크롤 트리거 애니메이션 효과를 적용합니다.
        </h1>
        <p className="py-2 text-xl">사용자의 시선을 이끌고, 중요한 메시지가</p>
        <p className="py-2 text-xl">더 강렬하게 전달되도록 설계합니다.</p>
      </div>
      {/* 갤러리 */}
      {/* 슬라이드 */}
    </main>
  );
}
