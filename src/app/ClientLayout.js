"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import SmoothWrapper from "@/components/SmoothWrapper";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const shouldSkipSmoothWrapper = pathname?.includes("pj");

  return (
    <ThemeProvider
      attribute="class" // ✅ html/body에 class로 theme 붙임
      defaultTheme="dark" // ✅ 기본 다크
      enableSystem={false} // 시스템 모드 사용 안 함 (원하면 true)
      themes={["light", "dark"]} // ✅ 지원 테마 제한
    >
      {shouldSkipSmoothWrapper ? (
        children
      ) : (
        <>
          <ThemeSwitcher />
          <SmoothWrapper>{children}</SmoothWrapper>
        </>
      )}
    </ThemeProvider>
  );
}
