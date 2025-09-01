import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description:
    "퍼블리셔 프리랜서 포트폴리오 샘플로 제작한 앱 다운로드 홍보 원페이지입니다. 스크롤 애니메이션 효과 구현, 작업 문의 및 협업 제안 환영합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className="
          min-h-screen
          bg-gradient-to-b from-neutral-50 to-neutral-200
          text-neutral-700
          dark:from-neutral-800 dark:to-neutral-950 dark:text-neutral-200
          antialiased
          transition-colors duration-300
        "
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
