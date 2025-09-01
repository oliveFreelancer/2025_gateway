"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
        <p className="py-2 text-xl">감각적인 움직임을 더해,</p>
        <p className="py-2 text-xl">
          한 번 방문한 사용자가 기억하는 웹사이트를 만듭니다.
        </p>
      </div>
      {/* 갤러리 */}
      <div className="mx-auto py-[100px] w-2/3 flex gap-4 auto-rows-max">
        <div className="flex-1 transition-all duration-300 hover:basis-[20%] rounded-2xl shadow-xl/10">
          <div className="relative w-full h-[292px] overflow-hidden rounded-2xl">
            <Image
              src="/images/pj_thumb1.png"
              alt="이미지"
              width={0} // 동적으로 조정
              height={0}
              sizes="100%"
              className="absolute w-full h-auto"
            />
            <p className="absolute top-6 left-4 p-4 rounded-xl bg-emerald-500">
              UXUI DESIGN
            </p>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <h3 className="text-2xl paperlogy-bold text-center">
              앱 다운로드 홍보페이지
            </h3>
            <div className="px-4">
              <button className="w-full py-6 rounded-4xl text-sm bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
                <Link href="/output/trigger/pj1">사이트 보기</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 transition-all duration-300 hover:basis-[20%] rounded-2xl shadow-xl/10">
          <div className="relative w-full h-[292px] overflow-hidden rounded-2xl">
            <Image
              src="/images/pj_thumb1.png"
              alt="이미지"
              width={0} // 동적으로 조정
              height={0}
              sizes="100%"
              className="absolute w-full h-auto"
            />
            <p className="absolute top-6 left-4 p-4 rounded-xl bg-emerald-500">
              UXUI DESIGN
            </p>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <h3 className="text-2xl paperlogy-bold text-center">
              앱 다운로드 홍보페이지
            </h3>
            <div className="px-4">
              <button className="w-full py-6 rounded-4xl text-sm bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
                <Link href="">사이트 보기</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 transition-all duration-300 hover:basis-[20%] rounded-2xl shadow-xl/10">
          <div className="relative w-full h-[292px] overflow-hidden rounded-2xl">
            <Image
              src="/images/pj_thumb1.png"
              alt="이미지"
              width={0} // 동적으로 조정
              height={0}
              sizes="100%"
              className="absolute w-full h-auto"
            />
            <p className="absolute top-6 left-4 p-4 rounded-xl bg-emerald-500">
              UXUI DESIGN
            </p>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <h3 className="text-2xl paperlogy-bold text-center">
              앱 다운로드 홍보페이지
            </h3>
            <div className="px-4">
              <button className="w-full py-6 rounded-4xl text-sm bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
                <Link href="">사이트 보기</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 슬라이드 */}
    </main>
  );
}
