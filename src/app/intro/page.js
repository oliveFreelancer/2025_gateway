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
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const trigger1 = useRef(null);
  const trigger2 = useRef(null);
  const trigger3 = useRef(null);
  const logo1 = useRef(null);
  const logo2 = useRef(null);
  const logo3 = useRef(null);
  const logo4 = useRef(null);

  useEffect(() => {
    // 타이틀 애니메이션
    gsap.to(title1Ref.current, {
      top: "0",
      opacity: 1,
      duration: 0.4,
      ease: "ease-in-out",
    });

    gsap.to(title2Ref.current, {
      top: "0",
      opacity: 1,
      duration: 0.4,
      delay: 0.2,
      ease: "ease-in-out",
    });

    gsap.to(title3Ref.current, {
      top: "0",
      opacity: 1,
      duration: 0.4,
      delay: 0.4,
      ease: "ease-in-out",
    });

    //스크롤 트리거

    gsap.to(trigger1.current, {
      y: -20,
      opacity: 1,
      duration: 1.2,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: trigger1.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(trigger2.current, {
      y: -100,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(trigger2.current, {
      y: -400,
      delay: 0.6,
      ease: "none",
      scrollTrigger: {
        trigger: trigger2.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(trigger3.current, {
      y: -100,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(trigger3.current, {
      y: -400,
      delay: 0.6,
      ease: "none",
      scrollTrigger: {
        trigger: trigger3.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    //스크롤 트리거 : 클라이언트
    gsap.to(logo1.current, {
      scale: 2,
      ease: "none",
      scrollTrigger: {
        trigger: logo1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(logo2.current, {
      scale: 0.9,
      y: -13,
      x: -13,
      ease: "none",
      scrollTrigger: {
        trigger: logo2.current,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to(logo3.current, {
      scale: 0.9,
      y: 5,
      x: -13,
      ease: "none",
      scrollTrigger: {
        trigger: logo3.current,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to(logo4.current, {
      scale: 0.9,
      y: -5,
      x: -13,
      ease: "none",
      scrollTrigger: {
        trigger: logo4.current,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <main className="mx-auto w-2/3 max-2xl:w-[90%]">
      <div className="py-6 fixed top-0 left-1/2 -translate-x-1/2 flex items-center w-1/2 z-10 max-xl:px-12 max-xl:w-full">
        <h1 className="shrink-0">
          <Link href="/">OLIVE</Link>
        </h1>
        <nav className="absolute left-1/2 -translate-x-1/2 w-1/2 max-md:w-2/3">
          <ul className=" flex items-center text-center">
            <li className="flex-1">소개</li>
            <li className="flex-1">클라이언트</li>
            <li className="flex-1">프로젝트 순서</li>
            <li className="flex-1">연락</li>
          </ul>
        </nav>
      </div>
      <section className="pt-[200px] relative text-center">
        <span className="mx-auto rounded-full py-2 px-4 text-rose-500 dark:text-white bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-200/80 dark:to-neutral-800/50 border border-zinc-100 dark:border-zinc-800 inline-block">
          Introdution
        </span>
        <div className="px-16 py-12 flex items-start gap-10 max-xl:px-0 max-xl:flex-col max-xl:items-center ">
          <div
            ref={trigger2}
            className="relative top-[250px]  flex-1 bg-linear-to-t from-zinc-50 dark:from-zinc-950 to-neutral-200/50 dark:to-neutral-800/50 rounded-xl opacity-0 max-xl:order-2 max-xl:static max-xl:top-0"
          >
            <div className="p-10">
              <h1 className="text-xl font-title gradient-text text-shadow-sky-300 text-left">
                부드러운 스크롤,
                <br />
                스크롤 기반 애니메이션 트리거 효과 제공
              </h1>
              <p className="text-xs text-left text-zinc-500 leading-7">
                흐르듯이 이동하는 스크롤과 특별한 트리거 애니메이션 효과를
                제공합니다.
              </p>
            </div>
            <div className="absolute bottom-[20px] -left-[30px] flex flex-col gap-8 w-full">
              <div className="p-4 flex items-center gap-8 w-1/2 rounded-xl border bg-linear-to-r from-rose-50 dark:from-zinc-950 to-rose-500/80 dark:to-neutral-800/50 border border-rose-300 dark:border-zinc-800 text-xs text-left">
                <span className="text-rose-600">01</span>
                <p className="font-bold glow-text text-black dark:text-white">
                  텍스트 슬라이드
                </p>
              </div>
              <div className="ml-12 p-4 flex items-center gap-8 w-1/2 rounded-xl border bg-linear-to-r from-rose-50 dark:from-zinc-950 to-rose-500/80 dark:to-neutral-800/50 border border-rose-300 dark:border-zinc-800 text-xs text-left">
                <span className="text-rose-600">02</span>
                <p className="font-bold glow-text text-black dark:text-white">
                  스무스한 스크롤 효과
                </p>
              </div>
              <div className="p-4 flex items-center gap-8 w-1/2 rounded-xl border bg-linear-to-r from-rose-50 dark:from-zinc-950 to-rose-500/80 dark:to-neutral-800/50 border border-rose-300 dark:border-zinc-800 text-xs text-left">
                <span className="text-rose-600">03</span>
                <p className="font-bold glow-text text-black dark:text-white">
                  움직이는 효과
                </p>
              </div>
              <div className="ml-12 p-4 flex items-center gap-8 w-1/2 rounded-xl border bg-linear-to-r from-rose-50 dark:from-zinc-950 to-rose-500/80 dark:to-neutral-800/50 border border-rose-300 dark:border-zinc-800 text-xs text-left">
                <span className="text-rose-600">04</span>
                <p className="font-bold glow-text text-black dark:text-white">
                  크기 변경 효과
                </p>
              </div>
              <div className="p-4 flex items-center gap-8 w-1/2 rounded-xl border bg-linear-to-r from-rose-50 dark:from-zinc-950 to-rose-500/80 dark:to-neutral-800/50 border border-rose-300 dark:border-zinc-800 text-xs text-left">
                <span className="text-rose-600">05</span>
                <p className="font-bold glow-text text-black dark:text-white">
                  타이핑 효과
                </p>
              </div>
            </div>
            <div className="flex w-full h-[380px] rounded-xl overflow-hidden text-ellipsis whitespace-nowrap">
              <div className="w-2/3 -bg-conic-45 from-rose-500/20 dark:from-zinc-950 to-rose-500 dark:to-neutral-800/50"></div>
              <div className="flex flex-col justify-center w-1/3 bg-conic-180 from-zinc-600 dark:from-rose-300 dark:to-rose-500">
                <div className="flex flex-col justify-center gap-16 items-center">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 51 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.75 30.5L30.125 2"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M39.5 5.16669L48.875 16.25L39.5 27.3334"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.375 5.16669L2 16.25L11.375 27.3334"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 34.5C27.2246 34.5 34.5 27.2246 34.5 18.25C34.5 9.27537 27.2246 2 18.25 2C9.27537 2 2 9.27537 2 18.25C2 27.2246 9.27537 34.5 18.25 34.5Z"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <mask id="path-2-inside-1_859_3" fill="white">
                      <path d="M41.116 42.884C41.6042 43.372 42.3957 43.372 42.884 42.884C43.372 42.3958 43.372 41.6043 42.884 41.116L41.116 42.884ZM42.884 41.116L30.384 28.616L28.616 30.384L41.116 42.884L42.884 41.116Z" />
                    </mask>
                    <path
                      d="M41.116 42.884C41.6042 43.372 42.3957 43.372 42.884 42.884C43.372 42.3958 43.372 41.6043 42.884 41.116L41.116 42.884ZM42.884 41.116L30.384 28.616L28.616 30.384L41.116 42.884L42.884 41.116Z"
                      fill="white"
                    />
                    <path
                      d="M42.884 41.116L42.0001 40.2321L40.2321 42.0001L41.116 42.884L41.9999 43.7679L43.7678 41.9999L42.884 41.116ZM41.116 42.884L39.3482 44.6518L39.3487 44.6522L41.116 42.884ZM42.884 42.884L44.6513 44.6522L44.6522 44.6513L42.884 42.884ZM42.884 41.116L44.6522 39.3487L44.6517 39.3483L42.884 41.116ZM30.384 28.616L32.1517 26.8483L30.384 25.0805L28.6162 26.8483L30.384 28.616ZM28.616 30.384L26.8482 28.6163L25.0804 30.384L26.8482 32.1518L28.616 30.384ZM41.116 42.884L39.3487 44.6522C40.8131 46.116 43.1868 46.116 44.6513 44.6522L42.884 42.884L41.1167 41.1158C41.6046 40.6281 42.3953 40.6281 42.8833 41.1158L41.116 42.884ZM42.884 42.884L44.6522 44.6513C46.1159 43.1869 46.1159 40.8132 44.6522 39.3487L42.884 41.116L41.1157 42.8833C40.628 42.3954 40.628 41.6047 41.1157 41.1167L42.884 42.884ZM42.884 41.116L44.6517 39.3483L32.1517 26.8483L30.384 28.616L28.6162 30.3838L41.1162 42.8838L42.884 41.116ZM30.384 28.616L28.6162 26.8483L26.8482 28.6163L28.616 30.384L30.3837 32.1518L32.1517 30.3838L30.384 28.616ZM28.616 30.384L26.8482 32.1518L39.3482 44.6518L41.116 42.884L42.8837 41.1163L30.3837 28.6163L28.616 30.384Z"
                      fill="white"
                      mask="url(#path-2-inside-1_859_3)"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 44 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3333 41H4.22222C2.99493 41 2 40.0071 2 38.7823V21.9593C2 21.3711 2.23413 20.807 2.65087 20.3911L20.4287 2.64956C21.2964 1.78348 22.7036 1.78348 23.5713 2.64956L41.3491 20.3911C41.7658 20.807 42 21.3711 42 21.9593V38.7823C42 40.0071 41.0051 41 39.7778 41H28.6667M15.3333 41H28.6667M15.3333 41V27.6938C15.3333 26.469 16.3283 25.4761 17.5556 25.4761H26.4444C27.6718 25.4761 28.6667 26.469 28.6667 27.6938V41"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.7559 2.09375C31.7691 2.13035 31.7812 2.18243 31.7812 2.25C31.7812 2.31757 31.7691 2.36965 31.7559 2.40625H5.24414C5.23086 2.36964 5.21875 2.31756 5.21875 2.25C5.21875 2.18244 5.23086 2.13036 5.24414 2.09375H31.7559Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M1.625 13.3438H35.375C35.4613 13.3438 35.5312 13.4137 35.5312 13.5C35.5312 13.5863 35.4613 13.6562 35.375 13.6562H1.625C1.53872 13.6562 1.46875 13.5863 1.46875 13.5C1.46875 13.4137 1.53872 13.3438 1.625 13.3438Z"
                      fill="#BFBFBF"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M31.7559 24.5938C31.7691 24.6304 31.7812 24.6824 31.7812 24.75C31.7812 24.8176 31.7691 24.8696 31.7559 24.9062H5.24414C5.23086 24.8696 5.21875 24.8176 5.21875 24.75C5.21875 24.6824 5.23086 24.6304 5.24414 24.5938H31.7559Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={title1Ref}
            className="flex-1 relative top-[100px] opacity-0 max-lg:order-1"
          >
            <p className="relative top-[30px] text-7xl font-title text-center">
              Web Flow
            </p>
            <p className="relative top-[30px] text-7xl font-title text-center">
              UXUI
            </p>
            <p className="relative top-[30px] text-7xl font-title text-center">
              DEVELOPER
            </p>
            <div className="absolute top-[120px] w-full z-50">
              <Image
                src="/images/imf22.avif"
                alt="아이콘"
                width={0} // 동적으로 조정
                height={0}
                sizes="100%"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-[250px] mx-auto w-2/3 text-xs text-center leading-7">
              안녕하세요
              <br />
              2018년도부터 UX/UI 디자인, 개발과 뉴스레터,
              <br />
              모션그래픽을 맡고있는 김유미입니다.
              <br />
              전화 상담이 실시간으로 어려울 수 있으니
              <br />
              문자나 이메일을 남겨주시면 빠르게 답변드리겠습니다.
              <br />
              오늘도 행복한 하루되세요☺️
            </p>
            <button className="mt-[50px] p-4 rounded-xl text-white bg-rose-500 dark:bg-white dark:text-rose-500 text-xs z-10">
              kakao talk
            </button>
          </div>
          <div
            ref={trigger3}
            className="relative top-[380px]  flex-1 bg-linear-to-t from-zinc-50 dark:from-zinc-950 to-neutral-200/50 dark:to-neutral-800/50 rounded-xl overflow-hidden opacity-0 max-xl:order-3 max-xl:static max-xl:top-0"
          >
            <div className="p-10">
              <h1 className="text-xl font-title gradient-text text-shadow-sky-300 text-left">
                복잡한 데이터를
                <br />
                쉽게 전달하는 대시보드
              </h1>
              <p className="text-xs text-left text-zinc-500 leading-7">
                데이터를 보기 쉽게, 인터랙션은 감각적인 웹 사이트를 제작합니다.
              </p>
            </div>

            <div className="relative flex w-full h-[300px]">
              <div className="w-full -bg-conic-240 from-zinc-500 dark:from-zinc-950 dark:to-neutral-800/50"></div>
              <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-2/3 px-5 py-4 flex items-center gap-8 rounded-xl bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-100 dark:to-neutral-800/50 border border-zinc-300 dark:border-zinc-800 text-xs text-left z-10 max-xl:w-[90%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0ZM5.33333 12.4444H3.55556V6.22222H5.33333V12.4444ZM8.88889 12.4444H7.11111V3.55556H8.88889V12.4444ZM12.4444 12.4444H10.6667V8.88889H12.4444V12.4444Z"
                    fill="#FF2056"
                  />
                </svg>

                <div className="flex flex-col gap-2">
                  <strong className="text-base">Spittly Fire economy</strong>
                  <span>베스트</span>
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                  <span>You will get</span>
                  <strong className="text-base">0.577 ETF</strong>
                </div>
              </div>

              <div className="absolute top-[90px] left-1/2 -translate-x-1/2 scale-90 w-2/3 p-3 flex items-center gap-8 rounded-xl border bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-100/90 dark:to-neutral-800/50 border border-zinc-300 dark:border-zinc-800 text-xs text-left z-5 max-xl:w-[80%]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.06419 0C8.90392 0 8.77368 0.130234 8.77368 0.290725C8.77368 0.305634 8.78004 0.318569 8.78223 0.33304H8.77368V7.2258C8.77368 7.38629 8.90392 7.51653 9.06419 7.51653H15.9567V7.50798C15.9712 7.51017 15.9841 7.51653 15.9993 7.51653C16.1595 7.51653 16.2898 7.38629 16.2898 7.2258C16.2486 3.253 13.037 0.0414381 9.06419 0Z"
                    fill="#FF2056"
                  />
                  <path
                    d="M14.6095 8.89933C14.6095 8.73884 14.4795 8.60861 14.319 8.60861H7.98287C7.82238 8.60861 7.69237 8.47838 7.69237 8.31788V2.00504H7.68381C7.68601 1.99057 7.69237 1.97763 7.69237 1.96272C7.69237 1.80201 7.56213 1.672 7.40164 1.672C7.39463 1.672 7.38892 1.6755 7.38213 1.67594V1.67397C7.35626 1.67375 7.3306 1.672 7.30473 1.672C3.27054 1.672 0 4.94254 0 8.97673C0 13.0109 3.27054 16.2815 7.30473 16.2815C11.3389 16.2815 14.6095 13.0109 14.6095 8.97673C14.6095 8.95349 14.6084 8.93047 14.6079 8.90701C14.6079 8.90416 14.6095 8.90196 14.6095 8.89933Z"
                    fill="#FF2056"
                  />
                </svg>

                <div className="flex flex-col gap-2">
                  <strong className="text-base">Spittly Fire economy</strong>
                  <span>베스트</span>
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                  <span>You will get</span>
                  <strong className="text-base">0.577 ETF</strong>
                </div>
              </div>
              <div className="absolute top-[140px] left-1/2 -translate-x-1/2 scale-75 w-2/3 mx-auto p-3 flex items-center gap-8 rounded-xl border bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-100/90 dark:to-neutral-800/50 border border-zinc-300 dark:border-zinc-800 text-xs text-left max-xl:w-[80%]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35905 10.0001H5.5433C5.76857 10.0001 5.95117 9.78512 5.95117 9.51995V6.48017C5.95117 6.215 5.76857 6.00006 5.5433 6.00006H4.35905C4.13377 6.00006 3.95117 6.215 3.95117 6.48017V9.51995C3.95117 9.78512 4.13377 10.0001 4.35905 10.0001Z"
                    fill="#FF2056"
                  />
                  <path
                    d="M8.35905 10.0001H9.5433C9.76857 10.0001 9.95117 9.76201 9.95117 9.46831V4.53181C9.95117 4.23812 9.76857 4.00006 9.5433 4.00006H8.35905C8.13377 4.00006 7.95117 4.23812 7.95117 4.53181V9.46837C7.95117 9.76201 8.13377 10.0001 8.35905 10.0001Z"
                    fill="#FF2056"
                  />
                  <path
                    d="M12.359 10.0001H13.5433C13.7686 10.0001 13.9512 9.77736 13.9512 9.50261V8.49751C13.9512 8.22276 13.7686 8.00006 13.5433 8.00006H12.359C12.1338 8.00006 11.9512 8.22276 11.9512 8.49751V9.50261C11.9512 9.77736 12.1338 10.0001 12.359 10.0001Z"
                    fill="#FF2056"
                  />
                  <path
                    d="M16.4364 1.26913H9.76381V0.836115C9.76381 0.37439 9.39996 6.10352e-05 8.95117 6.10352e-05C8.50238 6.10352e-05 8.13853 0.37439 8.13853 0.836115V1.26913H1.46584C1.18158 1.26913 0.951172 1.50618 0.951172 1.79864V12.6673C0.951172 12.9598 1.18158 13.1968 1.46584 13.1968H8.13853V14.3516L5.95242 15.4069C5.5461 15.6031 5.37123 16.1008 5.56187 16.5189C5.75246 16.9369 6.23641 17.1168 6.64273 16.9207L8.1732 16.1819C8.27386 16.5261 8.58391 16.7769 8.95117 16.7769C9.31843 16.7769 9.62848 16.5261 9.72914 16.182L11.2596 16.9207C11.6663 17.1169 12.15 16.9366 12.3405 16.5189C12.5311 16.1009 12.3562 15.6031 11.9499 15.4069L9.76381 14.3517V13.1969H16.4365C16.7208 13.1969 16.9512 12.9598 16.9512 12.6674V1.79869C16.9511 1.50618 16.7207 1.26913 16.4364 1.26913ZM15.3258 11.5247H2.57645V2.94124H15.3258V11.5247Z"
                    fill="#FF2056"
                  />
                </svg>

                <div className="flex flex-col gap-2">
                  <strong className="text-base">Spittly Fire economy</strong>
                  <span>베스트</span>
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                  <span>You will get</span>
                  <strong className="text-base">0.577 ETF</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[200px] relative text-center">
        <span className="mx-auto mb-12 rounded-full py-2 px-4 text-rose-500 dark:text-white bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-200/80 dark:to-neutral-800/50 border border-zinc-100 dark:border-zinc-800 inline-block">
          Clients
        </span>
        <h3 className="text-5xl max-md:text-2xl">
          <div className="mb-6 flex items-center justify-center gap-6 max-md:flex-col max-md:gap-2 max-md:mb-2">
            <p className="font-title">2018년도부터</p>
            <span className="inline-block w-[100px] h-[5px] bg-linear-to-r from-rose-500 to-rose-500/10 glow-shadow"></span>
            <p className="font-title">협업한</p>
          </div>
          <p className="font-title">기업과 기관, 클라이언트 분들</p>
          <div className="py-6 relative h-[680px]">
            <div className="absolute left-[148px] top-[100px] flex flex-col justify-center w-[89px] h-[89px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden">
              <Image
                src="/images/client24.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-auto h-auto"
              />
            </div>
            <div
              ref={logo2}
              className="absolute left-[80px] flex flex-col justify-center w-[70px] h-[70px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden"
            >
              <Image
                src="/images/client18.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-auto h-auto"
              />
            </div>
            <div
              ref={logo3}
              className="absolute left-[180px] bottom-[38px] flex flex-col justify-center w-[120px] h-[120px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden"
            >
              <Image
                src="/images/client3.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={logo4}
              className="absolute left-[383px] top-[122px] flex flex-col justify-center w-[112px] h-[112px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden"
            >
              <Image
                src="/images/client4.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div
              ref={logo1}
              className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col justify-center w-[200px] h-[200px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden"
            >
              <Image
                src="/images/client1.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-[180px] right-[20px] flex flex-col justify-center w-[70px] h-[70px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden">
              <Image
                src="/images/client13.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-[480px] right-[20px] flex flex-col justify-center w-[90px] h-[90px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden">
              <Image
                src="/images/client2.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-[480px] right-[220px] flex flex-col justify-center w-[170px] h-[170px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden">
              <Image
                src="/images/client6.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-[80px] right-[293px] flex flex-col justify-center w-[140px] h-[140px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden">
              <Image
                src="/images/client7.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-[220px] right-[113px] flex flex-col justify-center w-[80px] h-[80px] bg-white rounded-xl border border-zinc-200 dark:border-rose-500 overflow-hidden">
              <Image
                src="/images/client9.png"
                alt="협력사로고"
                width={0} // 동적으로 조정
                height={0}
                sizes="50%"
                className="w-full h-auto"
              />
            </div>
          </div>
        </h3>
      </section>
      <section className="pt-[200px] max-lg:flex max-lg:flex-col max-lg:justify-center">
        <span className="mx-auto mb-12 rounded-full py-2 px-4 text-rose-500 dark:text-white bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-neutral-200/80 dark:to-neutral-800/50 border border-zinc-100 dark:border-zinc-800 inline-block">
          프로젝트 순서
        </span>
        <div className="mb-12 flex items-center justify-between max-lg:flex-col max-lg:gap-6">
          <h3 className="text-5xl dark:text-zinc-500 font-title  max-md:text-2xl">
            원하시는
            <strong className="text-zinc-500 dark:text-white">
              샘플 혹은 레퍼런스
            </strong>
            를 보내주세요
          </h3>
          <button className="p-4 rounded-xl text-white bg-rose-500 dark:bg-white dark:text-rose-500 text-xs z-10">
            <Link href="/output">아웃풋 보기</Link>
          </button>
        </div>
        <div className="flex gap-6 max-md:flex-col">
          <div className="p-12 flex-1 flex flex-col items-center justify-center text-center bg-linear-to-t border border-zinc-200 dark:border-none from-zinc-50 dark:from-zinc-950 to-neutral-100/20 dark:to-neutral-950/20 rounded-xl">
            <span className="mb-16">
              <svg
                width="28"
                height="28"
                viewBox="0 0 53 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.875 0H5.625C2.4375 0 0 2.4375 0 5.625V39.375C0 42.5625 2.4375 45 5.625 45H46.875C50.0625 45 52.5 42.5625 52.5 39.375V5.625C52.5 2.4375 50.0625 0 46.875 0ZM18.9375 6.75C19.125 6.5625 19.125 6.375 19.3125 6.1875C20.0625 5.4375 21.1875 5.4375 21.9375 6.1875C22.125 6.375 22.3125 6.5625 22.3125 6.75C22.5 6.9375 22.5 7.3125 22.5 7.5C22.5 7.6875 22.5 8.0625 22.3125 8.25C22.125 8.4375 22.125 8.625 21.9375 8.8125C21.5625 9.1875 21.1875 9.375 20.625 9.375C20.4375 9.375 20.0625 9.375 19.875 9.1875C19.6875 9 19.5 9 19.3125 8.8125C19.125 8.625 18.9375 8.4375 18.9375 8.25C18.75 8.0625 18.75 7.6875 18.75 7.5C18.75 7.3125 18.75 6.9375 18.9375 6.75ZM13.3125 6.75C13.5 6.5625 13.5 6.375 13.6875 6.1875C13.875 6 14.0625 5.8125 14.25 5.8125C15 5.4375 15.75 5.625 16.3125 6.1875C16.5 6.375 16.6875 6.5625 16.6875 6.75C16.875 6.9375 16.875 7.3125 16.875 7.5C16.875 8.0625 16.6875 8.4375 16.3125 8.8125C15.9375 9.1875 15.5625 9.375 15 9.375C14.4375 9.375 14.0625 9.1875 13.6875 8.8125C13.3125 8.4375 13.125 8.0625 13.125 7.5C13.125 7.3125 13.125 6.9375 13.3125 6.75ZM8.0625 6.1875L8.25 6C8.4375 6 8.4375 5.8125 8.625 5.8125C8.8125 5.625 8.8125 5.625 9 5.625C9.1875 5.625 9.5625 5.625 9.75 5.625C9.9375 5.625 9.9375 5.625 10.125 5.8125C10.3125 5.8125 10.3125 6 10.5 6L10.6875 6.1875C10.875 6.375 11.0625 6.5625 11.0625 6.75C11.25 6.9375 11.25 7.3125 11.25 7.5C11.25 7.6875 11.25 8.0625 11.0625 8.25C11.0625 8.4375 10.875 8.625 10.6875 8.8125C10.3125 9.1875 9.9375 9.375 9.375 9.375C8.8125 9.375 8.4375 9.1875 8.0625 8.8125C7.6875 8.4375 7.5 8.0625 7.5 7.5C7.5 6.9375 7.6875 6.5625 8.0625 6.1875ZM28.125 35.625C28.125 36.75 27.375 37.5 26.25 37.5H7.5C6.375 37.5 5.625 36.75 5.625 35.625V34.125L18.5625 28.3125L28.125 34.6875V35.625ZM28.125 30.1875L19.875 24.5625C19.3125 24.1875 18.75 24.1875 18 24.375L5.625 30V16.875C5.625 15.75 6.375 15 7.5 15H26.25C27.375 15 28.125 15.75 28.125 16.875V30.1875ZM46.875 35.625C46.875 36.75 46.125 37.5 45 37.5H33.75C32.625 37.5 31.875 36.75 31.875 35.625V30C31.875 28.875 32.625 28.125 33.75 28.125H45C46.125 28.125 46.875 28.875 46.875 30V35.625ZM45 26.25H39.375C38.25 26.25 37.5 25.5 37.5 24.375C37.5 23.25 38.25 22.5 39.375 22.5H45C46.125 22.5 46.875 23.25 46.875 24.375C46.875 25.5 46.125 26.25 45 26.25ZM45 20.625H33.75C32.625 20.625 31.875 19.875 31.875 18.75C31.875 17.625 32.625 16.875 33.75 16.875H45C46.125 16.875 46.875 17.625 46.875 18.75C46.875 19.875 46.125 20.625 45 20.625Z"
                  fill="#FF2056"
                />
              </svg>
            </span>
            <h4 className="mb-4 text-xl font-title">웹 기획 및 디자인</h4>
            <ul className="text-xs leading-7 dark:text-zinc-300">
              <li>- 전체 사이트/앱의 메뉴 구조, 페이지 흐름도 제작</li>
              <li>- 와이어프레임 제작, UI 배치</li>
              <li>- 피그마 디자인 시스템 제작, 확정</li>
            </ul>
          </div>
          <div className="p-12 flex-1 flex flex-col items-center justify-center text-center bg-linear-to-t border border-zinc-200 dark:border-none from-zinc-50 dark:from-zinc-950 to-neutral-100/20 dark:to-neutral-950/20 rounded-xl">
            <span className="mb-16">
              <svg
                width="28"
                height="28"
                viewBox="0 0 51 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 5.5H13C10.2386 5.5 8 7.73857 8 10.5V33H43V21.75"
                  stroke="#FF2056"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33 3L28 8L33 13"
                  stroke="#FF2056"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43 3L48 8L43 13"
                  stroke="#FF2056"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 33H48V35.5C48 38.2615 45.7615 40.5 43 40.5H8C5.23857 40.5 3 38.2615 3 35.5V33Z"
                  stroke="#FF2056"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h4 className="mb-4 text-xl font-title">UXUI 화면 개발</h4>
            <ul className="text-xs leading-7 dark:text-zinc-300">
              <li>- 디자인을 실제 코드로 구현</li>
              <li>- 인터랙티브 기능 구현</li>
              <li>- 접근성 고려 (웹 표준, 반응형, 키보드 네비게이션 등)</li>
            </ul>
          </div>
          <div className="p-12 flex-1 flex flex-col items-center justify-center text-center bg-linear-to-t border border-zinc-200 dark:border-none from-zinc-50 dark:from-zinc-950 to-neutral-100/20 dark:to-neutral-950/20 rounded-xl">
            <span className="mb-16">
              <svg
                width="28"
                height="27"
                viewBox="0 0 47 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.6595 0H2.34045C1.04997 0 0 1.04997 0 2.34045V39.9786C0 41.2692 1.04997 42.3191 2.34045 42.3191H44.6595C45.95 42.3191 47 41.2692 47 39.9786V2.34045C47 1.04997 45.95 0 44.6595 0ZM38.9756 4.72864C40.4265 4.72864 41.6026 5.90483 41.6026 7.35568C41.6026 8.80662 40.4265 9.98273 38.9756 9.98273C37.5247 9.98273 36.3485 8.80662 36.3485 7.35568C36.3486 5.90483 37.5247 4.72864 38.9756 4.72864ZM30.6647 4.72864C32.1155 4.72864 33.2917 5.90483 33.2917 7.35568C33.2917 8.80662 32.1155 9.98273 30.6647 9.98273C29.2138 9.98273 28.0376 8.80662 28.0376 7.35568C28.0376 5.90483 29.2138 4.72864 30.6647 4.72864ZM22.3536 4.72864C23.8046 4.72864 24.9807 5.90483 24.9807 7.35568C24.9807 8.80662 23.8046 9.98273 22.3536 9.98273C20.9028 9.98273 19.7266 8.80662 19.7266 7.35568C19.7266 5.90483 20.9028 4.72864 22.3536 4.72864ZM43.0833 38.4025H3.9167V13.7083H43.0833V38.4025Z"
                  fill="#FF2056"
                />
                <path
                  d="M28.8018 17.8325H8.02441V22.0194H28.8018V17.8325Z"
                  fill="#FF2056"
                />
                <path
                  d="M38.9756 26.2389H8.02441V30.4257H38.9756V26.2389Z"
                  fill="#FF2056"
                />
              </svg>
            </span>
            <h4 className="mb-4 text-xl font-title">QA 및 실서버 배포</h4>
            <ul className="text-xs leading-7 dark:text-zinc-300">
              <li>- 디자인 일치, 기능 동작, 반응형 여부 확인</li>
              <li>- 버그 리포트/수정 리스트 주고받기</li>
              <li>- 클라이언트 전달 / 최종 버전 공유</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
