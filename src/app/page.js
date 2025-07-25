"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//api
import { getWeather } from "@/lib/api/getWeather";

export default function Home() {
  const [weather, setWeather] = useState([]);

  // 오늘 날짜를 YYYYMMDD 형식으로 변환
  const today = new Date();
  const baseDate = today.toISOString().slice(0, 10).replace(/-/g, "");
  const baseTime = "0600";
  const nx = 55;
  const ny = 127;

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
      const todayWeatherList = filteredList.slice(0, 72); //현재 날짜 ~24시까지
      console.log(todayWeatherList);
      setWeather(todayWeatherList);
    } else {
      console.error("날씨 데이터가 없습니다.");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  //날씨 데이터 객체 3개씩 묶는 함수
  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  return (
    <main className="pt-[200px] mx-auto w-2/3 flex gap-6 max-xl:pt-20 max-xl:w-[90%] max-xl:flex-col max-xl:gap-16">
      <div className="flex-1 overflow-hidden">
        <div>
          <div className="pb-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-zinc-800 dark:text-rose-500">
              오늘 날씨
            </h2>
            <span className="text-xs text-zinc-400">
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
          <div className="w-full overflow-hidden">
            <div className="pb-4 flex gap-6 overflow-x-scroll">
              {weather.length > 0
                ? chunkArray(weather, 4).map((group, index) => {
                    console.log(group);
                    return (
                      <>
                        <div
                          key={index}
                          className="p-4 w-[80px] flex-shrink-0 flex flex-col gap-4 justify-between items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl text-center"
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
                          <p className="flex flex-col justify-center items-center">
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
                      </>
                    );
                  })
                : "now loading ..."}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 max-lg:pb-16">
        <div className="card text-white">
          <p className="mb-4 dark:text-gray-500 text-xs">키워드</p>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full px-4 py-2 text-center text-xs border border-rose-300 dark:border-rose-500 dark:text-zinc-500">
              UXUI 디자이너
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              UXUI 개발
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              퍼블리싱
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              웹사이트 디자인 프리랜서
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              웹사이트 코딩 프리랜서
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              홈페이지 제작 프리랜서
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              회사 웹사이트 제작
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              스크롤 트리거 애니메이션 효과
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              부드럽게 스크롤
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              홈페이지 동영상 백그라운드
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              뉴스레터 제작
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              eDM 제작
            </li>
            <li className="rounded-full px-4 py-2 text-center text-xs border border-zinc-300 dark:border-rose-500 dark:text-zinc-500">
              이메일 대량발송 대행
            </li>
          </ul>
        </div>
        <div className="card">
          <ul className="flex flex-col">
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in1.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      작업자 소개
                    </h2>
                    <span className="text-sm text-notice">
                      웹사이트, 홈페이지, 대시보드, UXUI 디자인 및 개발합니다
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in2.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      웹 UXUI 구축 프로젝트 모아보기
                    </h2>
                    <span className="text-sm text-notice">
                      직접 개발한 UXUI 프로젝트 갤러리입니다.
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in3.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">협력사</h2>
                    <span className="text-sm text-notice">
                      다양한 분야의 기업들과 협력하며, 그들의 비즈니스 목표를
                      실현하는 Web Flow를 실현하였습니다.
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in4.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      스크롤 트리거 UXUI
                    </h2>
                    <span className="text-sm text-notice">
                      사용자가 스크롤을 내리면 일정 시점에서 애니메이션이
                      트리거되는 효과입니다.
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in6.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      스무스 스크롤 웹 제작
                    </h2>
                    <span className="text-sm text-notice">
                      스크롤이 부드럽게 내려가는 웹 사이트 제작
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in5.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      데이터 대시보드 UXUI 디자인 개발
                    </h2>
                    <span className="text-sm text-notice">
                      복잡한 데이터를 대시보드 형태로 제작합니다.
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in7.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      뉴스레터, 이메일 제작 개발
                    </h2>
                    <span className="text-sm text-notice">
                      이메일 마케팅을 위한 뉴스레터 디자인 및 코드 개발을
                      진행합니다.
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="py-4 border-b border-rose-400 dark:border-zinc-200">
              <Link href="/intro">
                <div className="flex items-center gap-4 hover:opacity-75">
                  <div className="rounded-full w-[50px] y-[50px] overflow-hidden">
                    <Image
                      src="/images/in8.png"
                      alt="아이콘"
                      width={0} // 동적으로 조정
                      height={0}
                      sizes="50%"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-title">
                      2D 모션그래픽 홍보영상 제작
                    </h2>
                    <span className="text-sm text-notice">
                      2D 모션그래픽 홍보영상을 제작합니다.
                    </span>
                  </div>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto stroke-white dark:stroke-rose-500"
                  >
                    <path d="M1 13L7 7L1 1" />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
