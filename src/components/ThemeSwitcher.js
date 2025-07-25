"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-[16px] top-[16px] p-6 border border-rose-500 dark:border-zinc-700 rounded-full bg-zinc-50 dark:bg-zinc-400/20 text-xs z-10 max-xl:top-auto max-xl:bottom-[16px]"
    >
      mode : ☀️ / 🌚
    </button>
  );
}
