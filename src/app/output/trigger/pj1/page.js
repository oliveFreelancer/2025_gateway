"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//components kym
import RightSideNav from "@/components/RightSideNav";

export default function Home() {
  const animation1Ref = useRef(null);
  const animation2Ref = useRef(null);
  const animation3Ref = useRef(null);
  const animation4Ref = useRef(null);
  const animation5Ref = useRef(null);
  const animation6Ref = useRef(null);
  const maskRef = useRef(null);
  // const animation7Ref = useRef(null);
  // const animation8Ref = useRef(null);
  const animation9Ref = useRef(null);
  const animation10Ref = useRef(null);
  const animation11Ref = useRef(null);
  const animation12Ref = useRef(null);
  const animation13Ref = useRef(null);
  const animation14Ref = useRef(null);

  //애니메이션
  useEffect(() => {
    gsap.to(animation1Ref.current, {
      scale: 0.6,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation1Ref.current,
        start: "top center",
        end: "top center",
        // scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation2Ref.current, {
      left: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation2Ref.current,
        start: "top center",
        end: "top center",
        // scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation3Ref.current, {
      left: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation3Ref.current,
        start: "top center",
        end: "top center",
        // scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation4Ref.current, {
      width: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation4Ref.current,
        start: "top center",
        end: "top center",
        // scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation5Ref.current, {
      width: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation5Ref.current,
        start: "top center",
        end: "top center",
        // scrub: 0.5,
        // markers: true,
      },
    });

    const el6 = animation6Ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el6,
        start: "top bottom-=200",
        end: "bottom-=200 center",
        scrub: 0.5,
        // markers: true,
        // onLeave: () => {
        //   gsap.set(el6, { display: "none" });
        // },
        // onEnterBack: () => {
        //   gsap.set(el6, { display: "block" });
        // },
      },
    });

    tl.to(el6, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }).to(el6, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });

    gsap.to(
      { size: 50 },
      {
        size: 300,
        scrollTrigger: {
          trigger: maskRef.current,
          start: "top top+=200",
          end: "bottom center",
          scrub: 0.5,
          // markers: true,
          onLeave: () => {
            gsap.set(maskRef, { display: "none" });
          },
          onEnterBack: () => {
            gsap.set(maskRef, { display: "block" });
          },
        },
        onUpdate: function () {
          const size = this.targets()[0].size;
          const value = `${size}% ${size}%`;
          maskRef.current.style.maskSize = value;
          maskRef.current.style.webkitMaskSize = value;
        },
      }
    );

    gsap.to(animation9Ref.current, {
      scale: 7,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation9Ref.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation10Ref.current, {
      width: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation10Ref.current,
        start: "top bottom-=200",
        end: "top top+=200",
        scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation11Ref.current, {
      rotateX: -6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation11Ref.current,
        start: "top top+=200",
        end: "bottom top+=100",
        scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation12Ref.current, {
      rotateX: -6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation12Ref.current,
        start: "top top+=200",
        end: "bottom top+=100",
        scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation13Ref.current, {
      rotateX: -6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation13Ref.current,
        start: "top top+=200",
        end: "bottom top+=100",
        scrub: 0.5,
        // markers: true,
      },
    });
    gsap.to(animation14Ref.current, {
      rotateX: -6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animation14Ref.current,
        start: "top top+=200",
        end: "bottom top+=100",
        scrub: 0.5,
        // markers: true,
      },
    });
  }, []);

  return (
    <main className="paperlogy-reg bg-white text-black">
      <RightSideNav />
      <div className="p-4 flex items-center justify-between">
        <h1>
          <strong className="paperlogy-ultra text-gradient-1 text-gray-300 text-4xl">
            BlockRift
          </strong>
        </h1>
        <div>
          <button className="flex flex-col justify-center items-center w-[80px] h-[80px] rounded-xl border border-gray-200 shadow-xl">
            <svg
              width="23"
              height="36"
              viewBox="0 0 33 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9094 20.2995L0.909424 5.45075L6.24213 0.5L16.9094 10.3997L27.5767 0.5L32.9094 5.449L16.9094 20.2995ZM1.82209 35.5H31.993V28.5H1.82209V35.5Z"
                fill="black"
              />
            </svg>

            <span className="paperlogy-ref text-sm text-black leading-4 font-title">
              앱 다운로드
            </span>
          </button>
        </div>
      </div>
      <section>
        <div
          ref={animation1Ref}
          className="mt-[200px] paperlogy-reg text-8xl text-center leading-[1.2] max-lg:mt-[100px]"
        >
          당신의 비트코인, <br /> 더 똑똑하게 움직이는 <br />
          <strong className="paperlogy-ultra text-gradient-1">
            가벼운 투자 플랫폼
          </strong>
        </div>
        <div className="mx-auto flex justify-center gap-10 w-1/2">
          <div
            ref={animation2Ref}
            className="relative -left-[100px] p-4 w-[400px] border border-gray-300 bg-black rounded-xl shadow-xl scale-[0.7] opacity-0"
          >
            <div>
              <Image
                src="/images/trigger-img1.png"
                alt="이미지"
                width={0} // 동적으로 조정
                height={0}
                sizes="100%"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div
            ref={animation3Ref}
            className="relative left-[100px] p-4 w-[400px] border border-gray-300 bg-black rounded-xl shadow-xl scale-[0.7] opacity-0"
          >
            <div>
              <Image
                src="/images/trigger-img2.png"
                alt="이미지"
                width={0} // 동적으로 조정
                height={0}
                sizes="100%"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[300px] text-center">
        <div className="relative inline-block mb-6">
          <h2 className="paperlogy-reg text-6xl text-center whitespace-normal max-lg:text-4xl">
            투자자들이 가장 신뢰하는 핵심 기능들을 담았습니다.
          </h2>
          <div
            ref={animation4Ref}
            className="absolute top-0 right-0 w-full h-full bg-white z-20"
          ></div>
        </div>
        <br />
        <div className="relative inline-block mb-6">
          <h2 className="paperlogy-reg text-6xl text-center whitespace-normal max-lg:text-4xl">
            시세는 1초도 늦을 수 없죠!
          </h2>
          <div
            ref={animation5Ref}
            className="absolute top-0 right-0 w-full h-full bg-white z-20"
          ></div>
        </div>
        <div className="mx-auto relative w-[400px] h-[500px]">
          <svg
            width="345"
            height="344"
            viewBox="0 0 345 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="floating absolute left-1/2 -translate-x-1/2"
          >
            <g clipPath="url(#clip0_888_160)">
              <path
                d="M172.795 344C168.833 344 165.625 340.798 165.625 336.84V7.17047C165.625 3.21234 168.832 0 172.795 0C176.754 0 179.961 3.21234 179.961 7.17047V336.84C179.961 340.798 176.753 344 172.795 344Z"
                fill="#424953"
              />
              <path
                d="M273.131 322.499C245.457 322.499 222.96 300.003 222.96 272.34C222.96 244.678 245.457 222.17 273.131 222.17C300.781 222.17 323.29 244.678 323.29 272.34C323.29 300.003 300.781 322.499 273.131 322.499Z"
                fill="#FECD57"
              />
              <path
                d="M273.131 215C241.469 215 215.791 240.679 215.791 272.34C215.791 304.002 241.469 329.67 273.131 329.67C304.792 329.67 330.461 304.002 330.461 272.34C330.461 240.679 304.792 215 273.131 215ZM273.131 315.34C249.415 315.34 230.13 296.045 230.13 272.34C230.13 248.625 249.415 229.34 273.131 229.34C296.835 229.34 316.13 248.625 316.13 272.34C316.13 296.045 296.835 315.34 273.131 315.34Z"
                fill="#F5BA45"
              />
              <path
                d="M294.631 257.999C294.631 254.042 291.419 250.84 287.461 250.84H280.291C280.291 246.882 277.078 243.67 273.131 243.67C269.163 243.67 265.961 246.882 265.961 250.84H263.273C259.115 250.84 255.809 252.835 254.423 256.195C253.027 259.543 253.961 263.301 256.901 266.241L270.16 279.5H258.79C254.832 279.5 251.63 282.712 251.63 286.67C251.63 290.629 254.833 293.841 258.79 293.841H265.961C265.961 297.798 269.163 301 273.131 301C277.078 301 280.291 297.798 280.291 293.841H282.978C287.135 293.841 290.453 291.836 291.839 288.487C293.225 285.127 292.301 281.379 289.361 278.44L276.091 265.17H287.461C291.419 265.17 294.631 261.968 294.631 257.999Z"
                fill="#E8AA3D"
              />
              <path
                d="M72.4606 322.499C44.7979 322.499 22.2961 300.003 22.2961 272.34C22.2961 244.678 44.7979 222.17 72.4606 222.17C100.123 222.17 122.625 244.678 122.625 272.34C122.625 300.003 100.123 322.499 72.4606 322.499Z"
                fill="#FECD57"
              />
              <path
                d="M72.4605 215C40.7934 215 15.1256 240.679 15.1256 272.34C15.1256 304.002 40.7934 329.67 72.4605 329.67C104.123 329.67 129.795 304.002 129.795 272.34C129.795 240.679 104.123 215 72.4605 215ZM72.4605 315.34C48.7506 315.34 29.4605 296.045 29.4605 272.34C29.4605 248.625 48.7506 229.34 72.4605 229.34C96.1704 229.34 115.461 248.625 115.461 272.34C115.461 296.045 96.1704 315.34 72.4605 315.34Z"
                fill="#F5BA45"
              />
              <path
                d="M93.9605 257.999C93.9605 254.042 90.7535 250.84 86.7954 250.84H79.6256C79.6256 246.882 76.4186 243.67 72.4605 243.67C68.5023 243.67 65.296 246.882 65.296 250.84H62.6084C58.4507 250.84 55.139 252.835 53.7528 256.195C52.362 259.543 53.2859 263.301 56.2254 266.241L69.4893 279.5H58.1255C54.1674 279.5 50.9604 282.712 50.9604 286.67C50.9604 290.629 54.1674 293.841 58.1255 293.841H65.296C65.296 297.798 68.5023 301 72.4605 301C76.4186 301 79.6256 297.798 79.6256 293.841H82.3125C86.4702 293.841 89.7766 291.836 91.168 288.487C92.5589 285.127 91.6303 281.379 88.6955 278.44L75.4262 265.17H86.7954C90.7528 265.17 93.9605 261.968 93.9605 257.999Z"
                fill="#E8AA3D"
              />
              <path
                d="M172.79 28.6697C77.7987 28.6697 0.790039 105.684 0.790039 200.67V202.224C13.073 186.614 32.1373 176.588 53.5433 176.588C79.5 176.588 87.683 191.338 98.8318 212.912C109.986 191.338 146.834 176.588 172.795 176.588C198.752 176.588 235.6 191.338 246.759 212.912C257.909 191.338 266.087 176.588 292.048 176.588C313.443 176.588 332.508 186.614 344.79 202.224V200.67C344.79 105.684 267.787 28.6697 172.79 28.6697Z"
                fill="#DA4453"
              />
              <path
                d="M172.795 176.588C198.752 176.588 235.6 191.337 246.759 212.911C246.759 103.805 201.618 50.4431 184.296 29.048C180.496 28.8067 176.659 28.6697 172.79 28.6697C168.927 28.6697 165.089 28.8061 161.29 29.048C143.963 50.4431 98.8318 103.805 98.8318 212.911C109.985 191.337 146.834 176.588 172.795 176.588Z"
                fill="#ED5564"
              />
            </g>
            <defs>
              <clipPath id="clip0_888_160">
                <rect
                  width="344"
                  height="344"
                  fill="white"
                  transform="translate(0.790039)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sparkle-star absolute top-[30px] left-[12px]"
          >
            <path
              d="M11.8246 0.339964L17.3102 9.75683L27.9613 7.44967L20.7005 15.5768L26.1861 24.9936L16.213 20.5996L8.95223 28.7267L10.0494 17.8839L0.0763056 13.4899L10.7274 11.1827L11.8246 0.339964Z"
              fill="#FFCE2F"
            />
          </svg>
          <svg
            width="40"
            height="39"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sparkle-star absolute top-[250px] -right-[22px]"
          >
            <path
              d="M11.8246 0.339964L17.3102 9.75683L27.9613 7.44967L20.7005 15.5768L26.1861 24.9936L16.213 20.5996L8.95223 28.7267L10.0494 17.8839L0.0763056 13.4899L10.7274 11.1827L11.8246 0.339964Z"
              fill="#FFCE2F"
            />
          </svg>
        </div>
      </section>
      <section
        ref={animation6Ref}
        className="relative h-[2000px] opacity-0 bg-black"
      >
        <div
          ref={maskRef}
          className="sticky top-0 w-full h-screen mask-no-repeat mask-center mask-[url(/images/BLOCK.svg)] w-full h-full bg-black"
          style={{
            maskSize: "50% 50%",
            WebkitMaskSize: "50% 50%",
          }}
        >
          <Image
            src="/images/trigger-img4.jpg"
            alt="아이콘"
            width={0} // 동적으로 조정
            height={0}
            sizes="100%"
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="p-[200px] max-2xl:px-[100px]">
        <div className="flex items-center justify-between">
          <p className="flex-1 paperlogy-reg text-6xl text-left leading-[1.2] max-lg:text-4xl">
            <strong className="bg-blue-700 text-white paperlogy-bold">
              수천 명의 투자자들과 포지션 공유
            </strong>
            <br />
            실시간 전략 토론, 베스트 트레이더 <br />
            팔로우 기능까지.
            <br />
            비트코인은 개인의 자산이지만, <br />
            투자는
            <strong className="bg-blue-700 text-white paperlogy-bold">
              팀 스포츠
            </strong>
            입니다.
          </p>
          <svg
            width="345"
            height="344"
            viewBox="0 0 345 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-1 floating"
          >
            <g clipPath="url(#clip0_888_151)">
              <path
                d="M309.956 125.389C309.956 125.389 257.844 97.1593 220.44 110.418C197.512 118.544 185.503 143.707 193.596 166.646C201.753 189.552 226.928 201.531 249.866 193.405C287.26 180.146 309.956 125.389 309.956 125.389Z"
                fill="#A0D468"
              />
              <path
                d="M258.274 134.816C257.435 134.668 256.606 134.679 255.819 134.816C254.874 134.973 232.576 138.878 208.01 152.127C197.449 157.806 188.053 164.388 179.96 171.727V117.651H165.624V187.295C156.365 199.462 149.998 213.152 146.681 228.111L160.674 231.208C163.666 217.728 169.53 205.414 178.132 194.539H179.96V192.303C180.568 191.579 181.188 190.864 181.822 190.15C190.447 180.482 201.427 172 214.445 164.935C236.984 152.704 258.022 148.978 258.232 148.936C261.13 148.432 263.534 146.185 264.079 143.13C264.773 139.224 262.169 135.508 258.274 134.816Z"
                fill="#8CC153"
              />
              <path
                d="M73.5203 272.99C73.5203 272.99 125.811 186.812 172.79 186.329C219.768 185.836 272.059 272.99 272.059 272.99H73.5203Z"
                fill="#434A54"
              />
              <path
                d="M303.731 247.018C301.485 246.839 299.018 246.755 296.31 246.755C278.673 246.755 251.21 250.514 213.574 257.149C208.892 243.795 179.141 237.937 179.141 237.937C179.141 237.937 114.93 234.442 73.9457 232.206C71.3315 232.059 68.8014 231.996 66.3659 231.996C12.0754 231.986 0.790039 265.873 0.790039 265.873V300.979C0.810872 321.103 62.8384 330.971 63.0488 331.003C112.321 340.735 172.88 344 172.88 344C172.88 344 338.827 278.796 343.184 274.986C347.54 271.185 345.629 250.378 303.731 247.018Z"
                fill="#EAC6BB"
              />
              <path
                d="M260.081 249.769C247.042 251.501 231.842 253.937 214.467 256.992C212.251 257.979 209.974 258.986 207.632 259.984C162.092 279.415 129.885 283.489 110.889 283.489C106.931 283.489 103.723 286.701 103.723 290.659C103.723 294.617 106.93 297.819 110.889 297.819C140.524 297.819 175.042 289.494 213.48 273.075C236.723 263.133 254.065 253.306 260.081 249.769Z"
                fill="#DBADA2"
              />
              <path
                d="M218.119 50.1588C210.068 33.215 192.799 21.4995 172.79 21.4995C152.781 21.4995 135.506 33.2157 127.454 50.1588H122.625V71.659C122.625 99.3634 145.085 121.829 172.79 121.829C200.493 121.829 222.959 99.3627 222.959 71.659V50.1588H218.119Z"
                fill="#F6BB42"
              />
              <path
                d="M222.959 50.1589C222.959 77.8632 200.493 100.329 172.79 100.329C145.085 100.329 122.625 77.8626 122.625 50.1589C122.625 22.4552 145.085 0 172.79 0C200.493 0 222.959 22.4552 222.959 50.1589Z"
                fill="#FFCE54"
              />
              <path
                d="M179.96 35.8292H179.949C179.949 31.9449 176.857 28.7541 172.958 28.6594C168.999 28.5754 165.719 31.7037 165.625 35.6612C165.625 35.7137 165.63 35.7661 165.63 35.8292H165.625V64.4993H165.63C165.63 68.3736 168.722 71.565 172.622 71.6591C176.579 71.7539 179.86 68.6148 179.954 64.6566C179.954 64.6042 179.949 64.5517 179.949 64.4993H179.96V35.8292Z"
                fill="#E8AA3D"
              />
            </g>
            <defs>
              <clipPath id="clip0_888_151">
                <rect
                  width="344"
                  height="344"
                  fill="white"
                  transform="translate(0.790039)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
      <section>
        <div className="mx-auto flex flex-col justify-center w-1/2 h-[900px] text-center">
          <div className="relative inline-block mb-6">
            <h2 className="paperlogy-ultra text-8xl text-center whitespace-normal max-lg:text-4xl">
              당신에게 필요한 투자 서비스
            </h2>
            <div
              ref={animation10Ref}
              className="absolute top-0 right-0 w-full h-full bg-white z-20"
            ></div>
          </div>

          <p className="paperlogy-reg text-2xl">투자를 쉽게 만들어드립니다.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="relative py-12 perspective-normal mx-auto w-2/3 text-white max-lg:w-5/6">
          <div
            ref={animation11Ref}
            className="sticky top-[100px] p-12 w-full h-[400px] flex justify-between items-center origin-top rotate-x-0 rounded-xl text-left leading-[1.2] bg-blue-700  max-lg:flex-col max-lg:justify-center"
          >
            <p className="mb-10 paperlogy-bold text-6xl">앱에서 빠르게</p>
            <p className="text-xl">
              스마트폰만 있으면 어디서나 빠르게 계좌를 만들고, 그에 맞는 맞춤형
              혜택도 제안받으세요.
            </p>
          </div>
          <div
            ref={animation12Ref}
            className="sticky top-[120px] p-12 w-full h-[400px] flex justify-between items-center origin-top rotate-x-0 rounded-xl text-left leading-[1.2] bg-violet-600 max-lg:flex-col max-lg:justify-center"
          >
            <p className="mb-10 paperlogy-bold text-6xl">포트폴리오 분석</p>
            <p className="text-xl">
              투자자들이 가장 신뢰하는 핵심 기능들을 담았으니 쉽게 사용하세요.
            </p>
          </div>
          <div
            ref={animation13Ref}
            className="sticky top-[140px] p-12 w-full h-[400px] flex justify-between items-center origin-top rotate-x-0 rounded-xl text-left leading-[1.2] bg-orange-600 max-lg:flex-col max-lg:justify-center"
          >
            <p className="mb-10 paperlogy-bold text-6xl">
              당신의 손끝에서 움직이는 시장
            </p>
            <p className="text-xl">
              블록체인 기반의 빠른 데이터 피드로, 가격 변화에 즉각 대응할 수
              있게 설계했습니다.
            </p>
          </div>
          <div
            ref={animation14Ref}
            className="sticky top-[160px] p-12 w-full h-[400px] flex justify-between items-center origin-top rotate-x-0 rounded-xl text-left leading-[1.2] bg-indigo-600 max-lg:flex-col max-lg:justify-center"
          >
            <p className="mb-10 paperlogy-bold text-6xl">
              당신의 코인을 안전하게
            </p>
            <p className="text-xl">
              다중 인증 및 콜드 월렛 분산 보관. 당신의 코인을 안전하게 지키기
              위한 모든 준비를 했습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="text-deco-1">
          <div className="flex gap-4 max-lg:justify-center max-lg:items-end max-lg:gap-0">
            <h2 className="paperlogy-bold text-9xl max-lg:text-5xl">
              빠르게 시작하기
            </h2>
            <svg
              width="68"
              height="67"
              viewBox="0 0 68 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-lg:scale-50 "
            >
              <path
                d="M45.2133 22.2868L2.07974 65.4203"
                stroke="black"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
              <path
                d="M3.49395 21.5797H45.9204V64.0061"
                stroke="black"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </section>
      <footer>
        <div className="p-4">
          <div className="py-4 flex items-center gap-4 border-b border-gray-300">
            <h1>
              <strong className="paperlogy-ultra text-gradient-1 text-gray-300 text-4xl">
                BlockRift
              </strong>
            </h1>
            <div>
              <button></button>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <ul className="flex items-center gap-4">
              <li className="cursor-pointer hover:text-bold">
                개인정보 처리방침
              </li>
              <li>고객센터 123-4567</li>
            </ul>
            <span className="text-gray-500">
              2025 Ltd. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
