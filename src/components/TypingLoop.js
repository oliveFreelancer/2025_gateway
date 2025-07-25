"use client";

import { useEffect, useState } from "react";

export default function TypingLoop({
  text = "데이터를 보기 쉽게, 인터랙션은 감각적으로",
  speed = 100,
  pause = 1500,
}) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // 타이핑 단계
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // 지우기 단계
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // 다 쳤으면 잠시 대기 후 삭제 모드로
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && index === 0) {
      // 다 지웠으면 타이핑 모드로 전환
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse"> | </span>
    </span>
  );
}
