//components kym
export const metadata = {
  title: "Block",
  description:
    "앱 홍보 랜딩 웹페이지 제작에 관한 상세페이지 입니다. 디자인, 코딩, 퍼블리싱, UIUX 디자인코딩 프리랜서 문의바랍니다.",
};

import SubClient from "./SubClient"; // 클라이언트 컴포넌트

export default function Home() {
  return (
    <main className="py-12 mx-auto w-1/2">
      <SubClient />
    </main>
  );
}
