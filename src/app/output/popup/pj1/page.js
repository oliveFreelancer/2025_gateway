"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.5,
      smoothTouch: 0.1,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <main>
      <div className="fixed top-0 left-0 right-0 ">
        <nav>
          <ul>
            <li>혜택 소개</li>
            <li>신청 방법</li>
            <li>링크 공유</li>
          </ul>
        </nav>
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
