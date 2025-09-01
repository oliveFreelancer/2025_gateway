"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import SmoothWrapper from "@/components/SmoothWrapper";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const shouldSkipSmoothWrapper = pathname?.includes("pj");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
