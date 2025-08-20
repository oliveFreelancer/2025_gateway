"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

//components kym
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="py-12">
      {/* 인트로 */}
      <div className="flex flex-col justify-center h-[600px] text-center text-white intro-bg1">
        <h1 className="py-2 text-7xl paperlogy-ultra text-white">
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
        <h1 className="pb-6  text-4xl paperlogy-ultra">
          원하는 것을 물어보세요.
        </h1>
        <div></div>
      </div>
      {/* 고객 슬라이드 */}
      <div className="py-12 text-center">
        <h1 className="text-4xl paperlogy-ultra">
          2018년부터 ... 저를 믿어주신 30여개의 고객사들,
        </h1>
        <div className="py-6 mx-auto w-2/3">
          <Swiper
            speed={10000}
            direction="horizontal"
            slidesPerView={7}
            autoplay={{
              delay: 0,
            }}
            pagination={{
              clickable: true,
            }}
            freeMode
            loop={true}
            className="mySwiper"
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client1.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client2.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client3.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client4.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client6.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client7.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client8.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client9.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client10.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client11.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client13.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client15.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client18.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client19.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client20.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client21.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client22.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client23.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client24.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client25.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client26.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client27.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client28.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client29.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client30.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4 flex flex-col justify-center w-full h-[100px] bg-white border border-zinc-200 rounded-4xl overflow-hidden">
                <Image
                  src="/images/client33.png"
                  alt="고객사"
                  width={0} // 동적으로 조정
                  height={0}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* 작업 범위 */}

      {/* 연락 */}
    </main>
  );
}
