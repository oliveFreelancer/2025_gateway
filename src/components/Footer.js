import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-[200px] text-center">
      <span className="mx-auto mb-12 rounded-full py-2 px-4 text-rose-500 dark:text-white bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-200/80 dark:to-neutral-800/50 border border-zinc-100 dark:border-zinc-800 inline-block">
        Contact
      </span>
      <h2 className="pt-[100px] tracking-[10px] text-left max-2xl:pt-[50px] max-md:pt-0">
        <Link href="/">OLIVE</Link>
      </h2>
      <div className="flex justify-between text-left max-xl:flex-col max-xl:gap-10">
        <div className="flex flex-col gap-8 items-start">
          <h3 className="text-5xl text-gray-400 dark:text-zinc-500 leading-16  max-md:text-2xl  max-md:leading-10">
            <strong className="text-black dark:text-white">인터랙티브</strong>
            하며
            <br />
            <strong className="text-black dark:text-white">
              깔끔한 웹 제작
            </strong>
            이 필요하신가요?
          </h3>
          <p className="leading-7">
            Who We Are - Discover Your Possibilities
            <br />
            빠르게 문의하실수록 프로젝트를 순서대로 신속히 착수합니다.
          </p>

          <button className="p-4 rounded-xl text-white bg-rose-500 dark:bg-white dark:text-rose-500 text-xs z-10">
            kakao talk 문의하기
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            <h5 className="">Quick Links Portfolio Web</h5>
            <ul className="flex flex-col gap-6 text-gray-800 dark:text-zinc-400">
              <li className="hover:opacity-60">
                <Link href="/output/trigger">스크롤 트리거 기반 웹</Link>
              </li>
              <li className="hover:opacity-60">
                <Link href="/output/smooth">부드러운 스크롤 기반 웹</Link>
              </li>
              <li className="hover:opacity-60">
                <Link href="/output/dashboard">
                  데이터 대시보드 UXUI 디자인 개발
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5>Contact Me</h5>
            <ul className="flex flex-col gap-6 text-gray-800 dark:text-zinc-400">
              <li className="hover:opacity-60">yellomobile123@naver.com</li>
              <li className="hover:opacity-60">
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
