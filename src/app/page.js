"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Sortable from "sortablejs";
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

export default function Home() {
  const router = useRouter();
  //검색
  const [query, setQuery] = useState("");
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  // 메뉴 카드
  const initialItems = [
    {
      id: 1,
      name: "제작자 소개",
      imageSrc: "/images/menumain1.png",
      link: "/intro",
    },
    {
      id: 2,
      name: "부드러운 스크롤 웹 제작",
      imageSrc: "/images/menumain2.png",
      link: "/output/smooth",
    },
    {
      id: 3,
      name: "스크롤 트리거 웹 제작",
      imageSrc: "/images/menumain3.png",
      link: "/output/trigger",
    },
    {
      id: 4,
      name: "대시보드 UXUI 디자인 퍼블리싱",
      imageSrc: "/images/menumain4.png",
      link: "/output/dashboard",
    },
    {
      id: 5,
      name: "이벤트 및 팝업 페이지",
      imageSrc: "/images/menumain2.png",
      link: "/output/popup",
    },
    {
      id: 6,
      name: "뉴스레터, 소식지, 이메일 디자인 개발",
      imageSrc: "/images/menumain5.png",
      link: "/output/newletter",
    },
    {
      id: 7,
      name: "2D 모션그래픽 홍보영상 애니메이션 제작",
      imageSrc: "/images/menumain6.png",
      link: "/output/motionmv",
    },
    {
      id: 8,
      name: "모든 프로젝트 보기",
      imageSrc: "/images/menumain8.png",
      link: "/output",
    },
    {
      id: 9,
      name: "문의하기",
      imageSrc: "/images/menumain7.png",
      link: "/",
    },
  ];
  const [items, setItems] = useState(initialItems);

  const gridRef = useRef(null);
  const sortableRef = useRef(null); // StrictMode 중복 초기화 방지

  useEffect(() => {
    let cleanup = () => {};
    const init = async () => {
      if (!gridRef.current || sortableRef.current) return;

      const Sortable = (await import("sortablejs")).default;
      sortableRef.current = new Sortable(gridRef.current, {
        animation: 150,
        handle: ".handle",
        ghostClass: "card-ghost",
        chosenClass: "card-chosen",
        dragClass: "card-drag",
        onEnd: () => {
          const newOrder = Array.from(gridRef.current.children).map(
            (el) => el.dataset.id
          );
          setItems((prev) => {
            const map = new Map(prev.map((it) => [String(it.id), it]));
            return newOrder.map((id) => map.get(id));
          });
        },
      });
      cleanup = () => sortableRef.current?.destroy();
    };
    init();
    return () => cleanup();
  }, []);

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
    <main className="py-12 mx-auto w-1/2 flex flex-col gap-6 max-xl:pt-20 max-xl:w-[90%] max-xl:flex-col max-xl:gap-16">
      {/* 업데이트 */}
      {/* 검색 */}
      <div className="py-12 text-center">
        <input
          id="search"
          type="text"
          className="p-4 w-2/3 outline-none bg-zinc-100 rounded-full border border-zinc-200 dark:text-black"
          placeholder="검색어를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={true}
          aria-controls="search-suggestions"
          aria-autocomplete="list"
        />
      </div>
      {/* 메뉴 */}
      <div>
        <ul ref={gridRef} className="grid grid-cols-4 gap-4 select-none">
          {items.map((item) => (
            <li
              key={item.id}
              className="transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Link href={item.link} className="block w-full h-full">
                <div
                  aria-label="drag handle"
                  className="handle relative w-full h-[160px] rounded-3xl touch-none overflow-hidden"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.name || "이미지"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="py-3 block mx-auto text-xs text-center w-2/3">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* 날씨 */}
      {/* 뉴스 */}
      {/* 업데이트 */}

      <div className="flex-1 overflow-hidden">
        <div>
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
    </main>
  );
}
