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
      <div className="flex flex-col justify-center h-[600px] text-center text-white intro-bg2">
        <h1 className="py-2 text-7xl paperlogy-ultra text-white">
          스무스 스크롤로 완성하는
          <br />
          매끄럽고 감각적인 UX·UI 제작합니다.
        </h1>
        <p className="py-2 text-xl">단순히 내려가는 스크롤이 아니라,</p>
        <p className="py-2 text-xl">
          흐르는 듯 자연스럽게 이어지는 스무스 스크롤을 구현합니다.
        </p>
        <p className="py-2 text-xl">감각적인 움직임을 더해,</p>
        <p className="py-2 text-xl">
          {" "}
          한 번 방문한 사용자가 기억하는 웹사이트를 만듭니다.
        </p>
      </div>
      {/* 갤러리 */}
      {/* 슬라이드 */}
    </main>
  );
}
