import React from "react";
import Link from "next/link";
const RightSideNav = ({ tag = [] }) => {
  return (
    <div className="fixed top-[10px] left-1/2 -translate-x-1/2 p-2 flex gap-2 text-xs z-40 bg-zinc-900/40 rounded-lg text-white">
      <span className="p-1 rounded-lg bg-zinc-950/50 border border-zinc-500 text-center hover:opacity-90">
        <Link href="/" className="flex gap-2 items-center">
          <svg
            width="10"
            height="10"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M16.5014 0L0 13.7473V33H10.9982V22H22.0018V33H33V13.7473L16.5014 0Z"
              fill="#fff"
            />
          </svg>
          HOME
        </Link>
      </span>
      {/* 동적으로 태그 출력 */}
      {tag.map((text, idx) => (
        <span
          key={idx}
          className="p-1 rounded-lg bg-zinc-950/50 border border-zinc-500 text-center hover:opacity-90"
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default RightSideNav;
