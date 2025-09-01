"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

const SubClient = () => {
  return (
    <>
      <div className="py-12 text-center">
        <h3>Light House 웹 접근성 검사</h3>
        <div>
          <h2>Google Lighthouse</h2>
          <p>
            Lighthouse는 구글이 제공하는 오픈소스 웹 진단 도구로, 크롬
            DevTools나 CLI로 실행할 수 있습니다. 웹페이지의 성능(Performance),
            접근성(Accessibility), 최적화(SEO), 베스트 프랙티스(Best Practices)
            등을 종합 점수로 보여주며, 개선 방향도 알려줍니다.
          </p>
        </div>
        <div>
          <h2>진단 결과</h2>
          <p>
            해당 랜딩 페이지는 이미지 최적화, 메타데이터 설정, 접근성
            네임(Label) 처리, 반응형 CSS 적용 등이 잘 되어 있어 모든 항목에서
            높은 점수를 기록했습니다. 특히 aria-label과 텍스트 대체 속성(alt)
            처리를 통해 접근성 점수가 높게 나왔고, 메타 설명과 제목 태그가
            정확히 삽입되어 SEO 점수도 만점에 가까웠습니다.
          </p>
        </div>
      </div>
      <div className="py-12 text-center">
        <h3>openWAX 진단</h3>
        <div>
          <h2>오픈왁스 웹 접근성 자동 점검 도구</h2>
          <p>
            OpenWAX는 국내에서 많이 활용되는 자동화 웹 접근성 점검 툴입니다. W3C
            WCAG(웹 콘텐츠 접근성 지침)과 한국형 웹 접근성 지침(KWCAG)을
            기준으로 페이지의 접근성 위반 요소를 검사합니다
          </p>
        </div>
        <div>
          <h2>진단 결과</h2>
          <p>
            검사 결과 버튼 요소에 접근 가능한 이름이 정상적으로 부여되어 있고,
            이미지에도 대체 텍스트(alt)가 포함되어 있어 오류 없이 통과했습니다.
            텍스트 대비(명도 대비)와 구조적 시맨틱 태그도 적절히 사용되어 접근성
            높은 점수를 달성했습니다.
          </p>
        </div>
      </div>
      <div className="py-12">
        <button className="px-4 py-2 rounded-4xl text-sm bg-linear-to-r from-emerald-200 to-emerald-400 text-slate-900 paperlogy-bold">
          사이트 직접 보기
        </button>
      </div>
      <div className="py-12">
        <h2>페이지 구현 및 특징 설명</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-12 border border-emerald-400 to-50% rounded-2xl shadow-xl/10">
            <strong>히어로 섹션</strong>
            <p>
              상단에 “앱 다운로드” 버튼을 배치하여 CTA(Call To Action)를
              명확하게 강조.
            </p>
          </div>
          <div className="p-12 border border-emerald-400 to-50% rounded-2xl shadow-xl/10">
            <strong>차별화된 랜딩페이지</strong>
            <p>다양한 스크롤 애니메이션이 구현</p>
          </div>
          <div className="p-12 border border-emerald-400 to-50% rounded-2xl shadow-xl/10">
            <strong>핵심 기능 강조 섹션</strong>
            <p>핵심 메시지를 단계적으로 노출</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubClient;
