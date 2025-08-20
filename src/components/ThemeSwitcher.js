"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
//api
import { getWeather } from "@/lib/api/getWeather";
const REGION_COORDS = {
  서울: { nx: 60, ny: 127 },
  경기: { nx: 60, ny: 120 },
  부산: { nx: 98, ny: 76 },
  대구: { nx: 89, ny: 90 },
  인천: { nx: 55, ny: 124 },
  광주: { nx: 58, ny: 74 },
  대전: { nx: 67, ny: 100 },
  울산: { nx: 102, ny: 84 },
  세종: { nx: 69, ny: 107 },
  충북: { nx: 60, ny: 120 },
  충남: { nx: 68, ny: 100 },
  전북: { nx: 63, ny: 89 },
  전남: { nx: 51, ny: 67 },
  경북: { nx: 87, ny: 106 },
  경남: { nx: 91, ny: 77 },
  강원도: { nx: 73, ny: 134 },
  제주: { nx: 52, ny: 38 },
};

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  //우측 설정 패널
  const [openMenu, setOpenMenu] = useState(false);
  //좌측 퀵 페이지
  const [openLeftIntro, setOpenLeftIntro] = useState(false);
  const [openLeftWeather, setOpenLeftWeather] = useState(false);
  const [openLeftSlider, setOpenLeftSlider] = useState(false);
  //날씨
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const [weather, setWeather] = useState([]);

  const today = new Date();
  const baseDate = today.toISOString().slice(0, 10).replace(/-/g, "");
  const baseTime = "0600";
  const { nx, ny } = REGION_COORDS[selectedRegion];

  const fetchWeather = async () => {
    const result = await getWeather({ baseDate, baseTime, nx, ny });

    if (result?.response?.body?.items?.item) {
      const filteredList = result.response.body.items.item.filter(
        (obj) =>
          ![
            "PTY",
            "PCP",
            "SNO",
            "UUU",
            "VVV",
            "WAV",
            "VEC",
            "WSD",
            "TMX",
          ].includes(obj.category)
      );
      const todayWeatherList = filteredList.slice(0, 72);
      console.log(todayWeatherList);
      setWeather(todayWeatherList);
    } else {
      console.error("날씨 데이터가 없습니다.");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [selectedRegion]);

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
  };

  return (
    <>
      {/* 상단 */}
      <div className="p-2 fixed left-[60px] top-0 right-0 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
        <div className="p-2 flex items-center gap-2 w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-800">
          <div>
            <p>환영합니다</p>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="cursor-pointer">
              <svg
                width="22"
                height="21"
                viewBox="0 0 50 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 20C12.5 18.6193 13.6193 17.5 15 17.5H15.025C16.4057 17.5 17.525 18.6193 17.525 20C17.525 21.3808 16.4057 22.5 15.025 22.5H15C13.6193 22.5 12.5 21.3808 12.5 20ZM22.5 20C22.5 18.6193 23.6193 17.5 25 17.5H25.025C26.4058 17.5 27.525 18.6193 27.525 20C27.525 21.3808 26.4058 22.5 25.025 22.5H25C23.6193 22.5 22.5 21.3808 22.5 20ZM35 17.5C33.6193 17.5 32.5 18.6193 32.5 20C32.5 21.3808 33.6193 22.5 35 22.5H35.025C36.4058 22.5 37.525 21.3808 37.525 20C37.525 18.6193 36.4058 17.5 35.025 17.5H35ZM12.3354 6.11789e-06C12.3901 6.11789e-06 12.445 6.11789e-06 12.5 6.11789e-06H37.6645C39.8808 -0.000118882 41.7903 -0.000218935 43.3195 0.205381C44.9583 0.425706 46.5293 0.922556 47.8033 2.19671C49.0775 3.47088 49.5743 5.04176 49.7948 6.68053C50.0003 8.20971 50.0003 10.1193 50 12.3355V27.6645C50.0003 29.8808 50.0003 31.7903 49.7948 33.3195C49.5743 34.9583 49.0775 36.5293 47.8033 37.8033C46.5293 39.0775 44.9583 39.5743 43.3195 39.7948C41.7903 40.0003 39.8808 40.0003 37.6645 40H30C29.716 40 29.4393 40.09 29.2095 40.257L18.1892 48.2718C15.8215 49.9938 12.5 48.3025 12.5 45.3748V40C10.5651 40 8.60296 40.0533 6.68053 39.7948C5.04176 39.5743 3.47088 39.0775 2.19671 37.8033C0.922556 36.5293 0.425706 34.9583 0.205381 33.3195C-0.000218935 31.7903 -0.000118882 29.8808 6.11789e-06 27.6645V12.5C6.11789e-06 12.445 6.11789e-06 12.3901 6.11789e-06 12.3354C-0.000118882 10.1192 -0.000218935 8.20968 0.205381 6.68053C0.425706 5.04176 0.922556 3.47088 2.19671 2.19671C3.47088 0.922556 5.04176 0.425706 6.68053 0.205381C8.20968 -0.000218935 10.1192 -0.000118882 12.3354 6.11789e-06Z"
                  fill={theme === "dark" ? "white" : "#454545"}
                />
              </svg>
            </button>
            <button
              className="cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <svg
                width="20"
                height="8"
                viewBox="0 0 45 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M10 5C10 7.7615 7.76143 10 5 10C2.23857 10 0 7.7615 0 5C0 2.2385 2.23857 0 5 0C7.76143 0 10 2.2385 10 5Z"
                  fill={theme === "dark" ? "white" : "#454545"}
                />
                <path
                  d="M27.5 5C27.5 7.7615 25.2615 10 22.5 10C19.7385 10 17.5 7.7615 17.5 5C17.5 2.2385 19.7385 0 22.5 0C25.2615 0 27.5 2.2385 27.5 5Z"
                  fill={theme === "dark" ? "white" : "#454545"}
                />
                <path
                  d="M45 5C45 7.7615 42.7615 10 40 10C37.2385 10 35 7.7615 35 5C35 2.2385 37.2385 0 40 0C42.7615 0 45 2.2385 45 5Z"
                  fill={theme === "dark" ? "white" : "#454545"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 좌측 */}
      <div className="p-2 fixed top-0 left-0 flex gap-1 h-screen z-10 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
        <div className="p-2 flex flex-col items-center gap-2 w-[50px] h-full bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-800">
          <button className="cursor-pointer">
            <Link href="/">
              <svg
                width="16"
                height="16"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M16.5014 0L0 13.7473V33H10.9982V22H22.0018V33H33V13.7473L16.5014 0Z"
                  fill={theme === "dark" ? "white" : "#454545"}
                />
              </svg>
            </Link>
          </button>
          <div className="mt-auto mb-auto flex flex-col gap-2">
            <button
              onClick={() => setOpenLeftIntro(!openLeftIntro)}
              className="p-1 cursor-pointer rounded-lg bg-radial-[at_50%_75%] from-slate-600 via-slate-700 to-slate-200 to-90%"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6002 0.930768C15.7171 0.23808 19.4983 0 24 0C28.5017 0 32.2829 0.23808 35.3998 0.930768C38.544 1.62953 41.1571 2.8224 43.1674 4.83259C45.1776 6.84278 46.3704 9.45605 47.0693 12.6002C47.7619 15.7171 48 19.4983 48 24C48 28.5017 47.7619 32.2829 47.0693 35.3998C46.3704 38.544 45.1776 41.1571 43.1674 43.1674C41.1571 45.1776 38.544 46.3704 35.3998 47.0693C32.2829 47.7619 28.5017 48 24 48C19.4983 48 15.7171 47.7619 12.6002 47.0693C9.45605 46.3704 6.84278 45.1776 4.83259 43.1674C2.8224 41.1571 1.62953 38.544 0.930768 35.3998C0.23808 32.2829 0 28.5017 0 24C0 19.4983 0.23808 15.7171 0.930768 12.6002C1.62953 9.45605 2.8224 6.84278 4.83259 4.83259C6.84278 2.8224 9.45605 1.62953 12.6002 0.930768ZM24 9.6C18.6981 9.6 14.4 13.8981 14.4 19.2C14.4 24.5018 18.6981 28.8 24 28.8C29.3018 28.8 33.6 24.5018 33.6 19.2C33.6 13.8981 29.3018 9.6 24 9.6ZM39.306 36.7061C40.1527 38.0868 39.8532 39.912 38.4886 40.7844C37.2478 41.5778 35.7979 42.0636 34.3582 42.3835C31.7573 42.9614 28.3918 43.2 23.9995 43.2C19.6075 43.2 16.2419 42.9614 13.6411 42.3835C12.2284 42.0696 10.8049 41.5966 9.57914 40.8288C8.18993 39.9588 7.88455 38.1086 8.75218 36.7178C9.75127 35.1163 11.1282 33.858 12.9812 32.9626C15.7925 31.6042 19.4777 31.2 23.999 31.2C28.505 31.2 32.1862 31.5715 34.9937 32.8913C36.8945 33.7848 38.2973 35.0614 39.306 36.7061Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={() => setOpenLeftWeather(!openLeftWeather)}
              className="p-1 cursor-pointer rounded-lg bg-radial-[at_50%_75%] from-cyan-400 via-sky-600 to-cyan-200 to-90%"
            >
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M27 10.8281C26.3162 10.8281 25.6605 10.5565 25.177 10.073C24.6935 9.58952 24.4219 8.93376 24.4219 8.25V2.625C24.4219 1.94124 24.6935 1.28548 25.177 0.80199C25.6605 0.318498 26.3162 0.046875 27 0.046875C27.6838 0.046875 28.3395 0.318498 28.823 0.80199C29.3065 1.28548 29.5781 1.94124 29.5781 2.625V8.25C29.5781 8.93376 29.3065 9.58952 28.823 10.073C28.3395 10.5565 27.6838 10.8281 27 10.8281Z"
                  fill="white"
                />
                <path
                  d="M27 53.9531C26.3162 53.9531 25.6605 53.6815 25.177 53.198C24.6935 52.7145 24.4219 52.0588 24.4219 51.375V45.75C24.4219 45.0662 24.6935 44.4105 25.177 43.927C25.6605 43.4435 26.3162 43.1719 27 43.1719C27.6838 43.1719 28.3395 43.4435 28.823 43.927C29.3065 44.4105 29.5781 45.0662 29.5781 45.75V51.375C29.5781 52.0588 29.3065 52.7145 28.823 53.198C28.3395 53.6815 27.6838 53.9531 27 53.9531Z"
                  fill="white"
                />
                <path
                  d="M40.2586 16.3196C39.7488 16.3195 39.2505 16.1683 38.8266 15.8851C38.4027 15.6019 38.0723 15.1993 37.8772 14.7284C37.682 14.2574 37.6309 13.7392 37.7302 13.2392C37.8295 12.7392 38.0748 12.2798 38.4352 11.9192L42.4125 7.94184C42.8981 7.46886 43.5505 7.20616 44.2283 7.21063C44.9062 7.21509 45.555 7.48635 46.0344 7.96569C46.5137 8.44502 46.785 9.09385 46.7894 9.77172C46.7939 10.4496 46.5312 11.1019 46.0582 11.5875L42.0809 15.5649C41.8418 15.8045 41.5577 15.9945 41.245 16.124C40.9323 16.2535 40.5971 16.32 40.2586 16.3196Z"
                  fill="white"
                />
                <path
                  d="M9.76409 46.8141C9.25416 46.814 8.7557 46.6627 8.33175 46.3794C7.9078 46.096 7.57741 45.6933 7.38235 45.2221C7.18729 44.751 7.13634 44.2326 7.23592 43.7325C7.33551 43.2323 7.58117 42.773 7.94182 42.4125L11.9192 38.4352C12.1574 38.1906 12.4418 37.9958 12.7559 37.862C13.0701 37.7282 13.4076 37.6582 13.7491 37.6559C14.0905 37.6537 14.4289 37.7193 14.7448 37.8489C15.0606 37.9785 15.3476 38.1696 15.589 38.411C15.8305 38.6524 16.0215 38.9394 16.1511 39.2553C16.2808 39.5711 16.3463 39.9096 16.3441 40.251C16.3418 40.5924 16.2718 40.93 16.138 41.2441C16.0043 41.5582 15.8095 41.8426 15.5649 42.0809L11.5875 46.0582C11.3484 46.2981 11.0642 46.4884 10.7512 46.6181C10.4383 46.7478 10.1028 46.8144 9.76409 46.8141Z"
                  fill="white"
                />
                <path
                  d="M51.375 29.5781H45.75C45.0662 29.5781 44.4105 29.3065 43.927 28.823C43.4435 28.3395 43.1719 27.6838 43.1719 27C43.1719 26.3162 43.4435 25.6605 43.927 25.177C44.4105 24.6935 45.0662 24.4219 45.75 24.4219H51.375C52.0588 24.4219 52.7145 24.6935 53.198 25.177C53.6815 25.6605 53.9531 26.3162 53.9531 27C53.9531 27.6838 53.6815 28.3395 53.198 28.823C52.7145 29.3065 52.0588 29.5781 51.375 29.5781Z"
                  fill="white"
                />
                <path
                  d="M8.25 29.5781H2.625C1.94124 29.5781 1.28548 29.3065 0.80199 28.823C0.318498 28.3395 0.046875 27.6838 0.046875 27C0.046875 26.3162 0.318498 25.6605 0.80199 25.177C1.28548 24.6935 1.94124 24.4219 2.625 24.4219H8.25C8.93376 24.4219 9.58952 24.6935 10.073 25.177C10.5565 25.6605 10.8281 26.3162 10.8281 27C10.8281 27.6838 10.5565 28.3395 10.073 28.823C9.58952 29.3065 8.93376 29.5781 8.25 29.5781Z"
                  fill="white"
                />
                <path
                  d="M44.236 46.814C43.8972 46.8144 43.5617 46.7478 43.2488 46.6181C42.9359 46.4883 42.6517 46.2981 42.4125 46.0582L38.4352 42.0808C37.9622 41.5952 37.6995 40.9429 37.704 40.265C37.7084 39.5871 37.9797 38.9383 38.459 38.459C38.9384 37.9796 39.5872 37.7084 40.2651 37.7039C40.9429 37.6994 41.5953 37.9621 42.0809 38.4351L46.0582 42.4125C46.4189 42.773 46.6645 43.2323 46.7641 43.7324C46.8637 44.2325 46.8128 44.7509 46.6177 45.2221C46.4226 45.6932 46.0922 46.096 45.6683 46.3793C45.2444 46.6627 44.7459 46.814 44.236 46.814Z"
                  fill="white"
                />
                <path
                  d="M13.7414 16.3196C13.4029 16.3202 13.0676 16.2539 12.7548 16.1244C12.4421 15.9948 12.158 15.8047 11.9191 15.5649L7.94177 11.5875C7.4688 11.1019 7.2061 10.4496 7.21057 9.77172C7.21503 9.09385 7.48629 8.44502 7.96563 7.96569C8.44496 7.48635 9.09379 7.21509 9.77166 7.21063C10.4495 7.20616 11.1019 7.46886 11.5875 7.94184L15.5648 11.9192C15.9251 12.2798 16.1705 12.7392 16.2698 13.2392C16.3691 13.7392 16.318 14.2574 16.1228 14.7284C15.9277 15.1993 15.5973 15.6019 15.1734 15.8851C14.7495 16.1683 14.2512 16.3195 13.7414 16.3196Z"
                  fill="white"
                />
                <path
                  d="M27 38.9531C24.6359 38.9531 22.3249 38.2521 20.3592 36.9387C18.3935 35.6252 16.8615 33.7584 15.9568 31.5743C15.0521 29.3901 14.8153 26.9867 15.2766 24.6681C15.7378 22.3494 16.8762 20.2195 18.5479 18.5479C20.2195 16.8762 22.3494 15.7378 24.6681 15.2766C26.9867 14.8153 29.3901 15.0521 31.5743 15.9568C33.7584 16.8615 35.6252 18.3935 36.9387 20.3592C38.2521 22.3249 38.9531 24.6359 38.9531 27C38.9494 30.169 37.6889 33.2072 35.448 35.448C33.2072 37.6889 30.169 38.9494 27 38.9531Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={() => setOpenLeftSlider(!openLeftSlider)}
              className="p-1 cursor-pointer rounded-lg bg-radial-[at_50%_75%] from-violet-400 via-indigo-600 to-indigo-400 to-90%"
            >
              <svg
                width="15"
                height="15"
                viewBox="-10 -8 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M0 21H21V0H0V21ZM27 0V21H48V0H27ZM0 48H21V27H0V48ZM27 48H48V27H27V48Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* 좌측 퀵 인트로페이지*/}
        <div
          className={`w-[400px] h-full p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-800 ${
            openLeftIntro ? "block" : "hidden"
          } `}
        >
          <div className="relative p-6 h-[300px] rounded-xl overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/videos/bg_video1.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="relative flex flex-col text-lg z-10">
              <h3 className="paperlogy-bold">안녕하세요👋</h3>
              <h3 className="paperlogy-bold">
                제 사이트를 방문해주셔서 반갑습니다.
              </h3>
              <h4 className="paperlogy-reg">
                저는 웹 UX/UI 디자인부터 반응형 퍼블리싱, 그리고 프론트엔드
                개발까지 함께하는 프리랜서입니다.
              </h4>
            </div>
            <div className="absolute inset-0 bg-black/60 z-0" />
          </div>
          <p className="py-2">
            React · Next.js · Tailwind CSS 같은 최신 라이브러리를 활용해 사용자
            친화적인 웹사이트를 제작하며, 스크롤 트리거 애니메이션이나 부드러운
            스크롤 효과를 적용해 더욱 생동감 있고 매끄러운 인터랙션을
            구현합니다.
          </p>
          <p className="py-2">
            또한 관리 편리한 대시보드 퍼블리싱도 가능하여, 단순한 웹사이트를
            넘어 직관적인 서비스 환경을 구축할 수 있습니다.
          </p>
          <ul className="py-2">
            <li>📐 UXUI 디자인</li>
            <li>💻 반응형 UXUI 개발</li>
            <li>⚡ React · Next.js · Tailwind · JS · css</li>
          </ul>
          <p className="py-2">
            친근하지만 꼼꼼하게, 여러분의 💡아이디어가
            <br />
            화면 위에서 빛날 수 있도록 함께하겠습니다.
          </p>
          <p>당신의 아이디어 성공을 웹으로 구현합니다!</p>
          <button className="my-4 px-4 py-2 rounded-4xl text-sm bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
            <Link href="/intro">작업자 소개</Link>
          </button>
        </div>
        {/* 좌측 퀵 날씨*/}
        <div
          className={`w-[400px] h-full p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-800 ${
            openLeftWeather ? "block" : "hidden"
          } `}
        >
          <div className="overflow-hidden">
            <div className="pb-4 flex items-start justify-between">
              <div>
                <h2 className="text-4xl paperlogy-reg text-neutral-800 dark:text-emerald-500">
                  오늘 날씨
                </h2>
                <span className="text-neutral-400">
                  {weather.length > 0
                    ? `${weather[0].fcstDate.slice(
                        0,
                        4
                      )} - ${weather[0].fcstDate.slice(
                        4,
                        6
                      )} - ${weather[0].fcstDate.slice(6, 8)}`
                    : ""}
                </span>
              </div>
              <div>
                <label htmlFor="select-region" className="sr-only">
                  지역 선택
                </label>
                <select
                  id="select-region"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  className="p-4 border border-neutral-300 dark:border-neutral-800 rounded-md"
                >
                  {Object.keys(REGION_COORDS).map((region) => (
                    <option
                      key={region}
                      value={region}
                      className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800"
                    >
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <div className="pb-4 flex gap-6 overflow-x-scroll">
                {weather.length > 0
                  ? chunkArray(weather, 4).map((group, index) => {
                      console.log(group);
                      return (
                        <div
                          key={index}
                          className="p-4 w-[80px] flex-shrink-0 flex flex-col gap-4 justify-between items-center bg-linear-to-b from-zinc-100 to-zinc-200 dark:from-neutral-800 dark:to-neutral-950 dark:text-white block rounded-xl text-center text-xs"
                        >
                          <p className="text-xs text-zinc-400">
                            {group[0]
                              ? `${group[0].fcstTime.slice(0, 2)}시`
                              : "정보 없음"}
                          </p>
                          <p>
                            ☔<br />
                            <span className="text-xs text-zinc-50">
                              {group[2] ? group[2].fcstValue : "-"}%
                            </span>
                          </p>
                          <p className="flex flex-col justify-center items-center text-xs">
                            {group[1] ? (
                              group[1].fcstValue === "1" ||
                              group[1].fcstValue === 1 ? (
                                <span>
                                  ☀️
                                  <br />
                                  맑음
                                </span>
                              ) : group[1].fcstValue === "3" ||
                                group[1].fcstValue === 3 ? (
                                <span>
                                  ⛅
                                  <br />
                                  구름 많음
                                </span>
                              ) : group[1].fcstValue === "4" ||
                                group[1].fcstValue === 4 ? (
                                <span>
                                  🌥
                                  <br />
                                  흐림
                                </span>
                              ) : (
                                "❓"
                              )
                            ) : (
                              "-"
                            )}
                          </p>
                          <p>
                            💧
                            <br />
                            {group[3] ? group[3].fcstValue : "-"} %
                          </p>
                          <p>
                            🌡️
                            <br />
                            {group[0] ? group[0].fcstValue : "-"} &deg;
                          </p>
                        </div>
                      );
                    })
                  : "now loading ..."}
              </div>
            </div>
            <p className="py-3 text-sm text-right">출처: 공공데이터포털 </p>
          </div>
        </div>
        {/* 좌측 퀵 프로젝트 슬라이드*/}
        <div
          className={`w-[400px] h-full p-2 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-800 ${
            openLeftSlider ? "block" : "hidden"
          } `}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative h-[600px]">
                <Image
                  src="/images/sideSlide2.png"
                  alt="아이콘"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="absolute w-auto h-full"
                />
                <div className="absolute bg-black/70 top-0 left-0 bottom-0 right-0"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full text-white text-center text-lg">
                  기업 홈페이지 맞춤 제작
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[600px]">
                <Image
                  src="/images/sideSlide2.png"
                  alt="아이콘"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="absolute w-auto h-full"
                />
                <div className="absolute bg-black/70 top-0 left-0 bottom-0 right-0"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full text-white text-center text-lg">
                  앱 홍보 랜딩페이지 맞춤 제작
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[600px]">
                <Image
                  src="/images/sideSlide2.png"
                  alt="아이콘"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="absolute w-auto h-full"
                />
                <div className="absolute bg-black/70 top-0 left-0 bottom-0 right-0"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full text-white text-center text-lg">
                  소식지, 뉴스레터 제작 개발
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[600px]">
                <Image
                  src="/images/sideSlide2.png"
                  alt="아이콘"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="absolute w-auto h-full"
                />
                <div className="absolute bg-black/70 top-0 left-0 bottom-0 right-0"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full text-white text-center text-lg">
                  기업 제안서, PPT 디자인 제작
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* 우측 설정 패널 */}
      <div
        className={`fixed top-0 bottom-0 right-0 p-8 w-[400px] rounded-l-4xl border border-zinc-200 dark:border-zinc-700 fixed-layout transition-opacity duration-300 bg-linear-to-r from-zinc-50 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 dark:text-white ${
          openMenu ? "block" : "hidden"
        } `}
      >
        <div className="pb-6 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700">
          <p className="text-lg paperlogy-bold">테마 설정</p>
          <button
            className="p-2 w-[40px] h-[40px] cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M8.3999 51.168L51.5999 7.96802"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.3999 7.96802L51.5999 51.168"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="py-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p>페이지에 다크 모드 적용</p>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-4 py-2 rounded-4xl text-sm bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold"
            >
              {theme === "dark" ? "활성" : "비활성"}
            </button>
          </div>
        </div>
        <div className="pb-6 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700">
          <p className="text-lg paperlogy-bold">메뉴</p>
        </div>
        <ul className="py-4 flex flex-col gap-3">
          <li>
            <Link href="/intro" className="hover:text-emerald-300">
              작업자 소개
            </Link>
          </li>
          <li>
            <Link href="/output/smooth" className="hover:text-emerald-300">
              부드러운 스크롤 홈페이지 UXUI 제작
            </Link>
          </li>
          <li>
            <Link href="/output/trigger" className="hover:text-emerald-300">
              스크롤 트리거 애니메이션 웹UXUI 제작
            </Link>
          </li>
          <li>
            <Link href="/output/dashboard" className="hover:text-emerald-300">
              대시보드 웹 UIUX 제작
            </Link>
          </li>
          <li>
            <Link href="/output/newletter" className="hover:text-emerald-300">
              이메일, 소식지, 뉴스레터 제작
            </Link>
          </li>
          <li>
            <Link href="/output/motionmv" className="hover:text-emerald-300">
              2D 모션그래픽 동영상 제작
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
