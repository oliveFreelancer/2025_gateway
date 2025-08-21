"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: "웹 UXUI",
      icon: "/images/right_arrow.svg",
      link: "/output/smooth",
      content: [
        "스크롤 트리거 애니메이션 효과",
        "부드러운 스크롤 효과",
        "반응형",
        "웹앱",
        "데이터 대시보드",
        "기업 홈페이지",
        "랜딩페이지",
      ],
    },
    {
      label: "콘텐츠 디자인",
      icon: "/images/right_arrow.svg",
      link: "/output/smooth",
      content: [
        "발표안 PPT",
        "제안서 PPT",
        "이메일 디자인",
        "웹디자인",
        "뉴스레터 디자인",
      ],
    },
    {
      label: "뉴스레터 eDM",
      icon: "/images/right_arrow.svg",
      link: "/output/newletter",
      content: [
        "뉴스레터 디자인 제작",
        "발송용 이메일 코드 개발",
        "이메일 대량발송대행",
      ],
    },
    {
      label: "2D 애니메이션 영상",
      icon: "/images/right_arrow.svg",
      link: "/output/motionmv",
      content: [
        "모션그래픽",
        "홍보영상제작",
        "관공서 홍보 동영상",
        "기업 홍보 영상",
      ],
    },
  ];
  return (
    <main className="py-12">
      {/* 탭 */}
      <div className="mx-auto py-[100px] w-2/3">
        <div className="flex gap-6 h-[500px]">
          {/* Tab content */}
          <div className="flex-1 p-12 bg-linear-to-t from-neutral-900/50 to-neutral-800/50 rounded-2xl border border-neutral-700/20">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col items-start gap-4">
                <strong className="text-4xl paperlogy-ultra text-emerald-300">
                  {tabData[activeTab].label}
                </strong>
                <button className="px-6 py-4 rounded-4xl text-lg bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
                  <Link href={tabData[activeTab].link}> VIEW </Link>
                </button>
              </div>
              <ul className="flex flex-wrap gap-2">
                {tabData[activeTab].content.map((tag, id) => {
                  return (
                    <li
                      key={id}
                      className="p-4 bg-white/20 rounded-2xl border border-neutral-50/20 text-white paperlogy-bold"
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Tab buttons */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`w-full h-full bg-neutral-800 paperlogy-ultra transition-colors rounded-2xl ${
                  activeTab === index
                    ? "border border-emerald-200 text-emerald-300"
                    : "text-neutral-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
