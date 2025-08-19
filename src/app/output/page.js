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
      <section className="pt-[200px] pb-[100px] relative text-center">
        <span className="mx-auto mb-12 rounded-full py-2 px-4 text-rose-500 dark:text-white bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-200/80 dark:to-neutral-800/50 border border-zinc-100 dark:border-zinc-800 inline-block">
          모든 프로젝트 모음
        </span>
      </section>
      <section>
        <ul className="grid grid-cols-4 gap-12">
          <li>
            <div>
              <Link
                href="/output/trigger/pj1"
                className="cursor-pointer hover:opacity-90 hover:text-rose-500"
              >
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="/images/pj_thumb1.png"
                    alt="이미지"
                    width={0} // 동적으로 조정
                    height={0}
                    sizes="100%"
                    className="w-full h-auto"
                  />
                </div>
                <div className="py-2 flex items-center justify-between">
                  <strong className="text-2xl text-bold">BlockRift</strong>
                  <p className="text-xl text-zinc-400">앱 홍보 웹페이지</p>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link
                href="/output/trigger/pj1"
                className="cursor-pointer hover:opacity-90 hover:text-rose-500"
              >
                <div className="rounded-md overflow-hidden">
                  <Image
                    src="/images/pj_thumb1.png"
                    alt="이미지"
                    width={0} // 동적으로 조정
                    height={0}
                    sizes="100%"
                    className="w-full h-auto"
                  />
                </div>
                <div className="py-2 flex items-center justify-between">
                  <strong className="text-2xl text-bold">BlockRift</strong>
                  <p className="text-xl text-zinc-400">앱 홍보 웹페이지</p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
