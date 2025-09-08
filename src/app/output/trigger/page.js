"use client";
import Image from "next/image";
import Link from "next/link";

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
        <p className="py-2 text-xl">
          사용자의 시선을 이끌고, 중요한 메시지가
          <br />더 강렬하게 전달되도록 설계합니다.
        </p>
      </div>
      {/* 갤러리 */}
      <div className="mx-auto py-[100px] w-2/3 flex gap-4 auto-rows-max">
        <div className="basis-1/3 flex-1 transition-all duration-300 hover:basis-[20%] rounded-2xl ">
          <div className="relative w-full h-[292px] overflow-hidden rounded-2xl">
            <Link href="/description/trigger1/">
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
            </Link>
          </div>
          <div className="py-4 flex flex-col items-center gap-4">
            <h3 className="text-2xl paperlogy-bold text-center">
              앱 다운로드 홍보페이지
            </h3>
            <div className="px-4">
              <button className="px-12 py-4 rounded-4xl text-xl bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
                <Link href="/output/trigger/pj1" className="paperlogy-bold">
                  사이트 보기
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 슬라이드 */}
    </main>
  );
}
