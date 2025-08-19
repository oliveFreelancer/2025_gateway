"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import "./globals.css";
import SmoothWrapper from "@/components/SmoothWrapper";
//components kym
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shouldSkipSmoothWrapper = pathname?.includes("pj");

  return (
    <html lang="ko">
      <body
        className="
          min-h-screen
          bg-gradient-to-b from-neutral-50 to-neutral-200
          text-neutral-700
          dark:from-neutral-800 dark:to-neutral-950 dark:text-neutral-200
          antialiased
          transition-colors duration-300
        "
        // z-shortcut-listen="true"
      >
        {isClient && (
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
        )}
      </body>
    </html>
  );
}
