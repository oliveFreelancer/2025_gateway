"use client";

import Image from "next/image";
import Link from "next/link";

//components kym
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="py-12 ">
      {/* 인트로 */}
      <div className="flex flex-col justify-center h-[600px] text-center intro-bg1">
        <h1 className="py-2 text-7xl paperlogy-ultra">
          UXUI 웹 반응형 디자인·개발
          <br />
          제작 문의주세요
        </h1>
        <p className="py-2 text-xl">안녕하세요👋</p>
        <p className="py-2 text-xl">
          저는 2018년도부터 다양한 기업, 공기업, 브랜드와 함께 온라인과 이메일
          홍보를 위한 디자인 및 개발을 해왔습니다.
        </p>
        <p className="py-2 text-xl">
          UXUI 디자인과 반응형 퍼블리싱, 뉴스레터와 모션그래픽도 하고있어요.
        </p>
        <p className="py-2 text-xl">
          담당자, 기획자와 언제든 소통하며 성공적인 프로젝트 달성을 위해
          책임감을 갖고 일하고 있습니다.
        </p>
      </div>
      {/* 채팅입력창처럼 - 나한테 바로 이메일 오게 */}
      <div className="py-12 text-center">
        <h1 className="py-2 text-4xl paperlogy-ultra">
          원하는 것을 물어보세요.
        </h1>
        <div></div>
      </div>
      {/* 고객 슬라이드 */}
      <div className="py-12 text-center">
        <h1 className="py-2 text-4xl paperlogy-ultra">
          2018년부터 ... 저를 믿어주신 분들,
        </h1>
      </div>

      {/* 작업 범위 */}

      {/* 연락 */}
    </main>
  );
}
