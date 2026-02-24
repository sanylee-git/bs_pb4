# README_AI.md — Claude Code 전용 완전 구현 가이드

> **이 문서의 목적**: Claude Code가 이 템플릿을 사용해 새 닮은꼴 AI 분석기 사이트를 만들 때,
> 과거의 실수와 시행착오를 반복하지 않고 **처음부터 현재 수준의 완성도**를 바로 구현하기 위한 참조 문서.
>
> **전제**: 이 프로젝트 폴더를 새 폴더로 복사한 뒤 작업을 시작한다.
> 이 문서만으로 처음부터 빌드하는 것은 불가능하며, 반드시 기존 파일들(main.js, style.css 등)이 있어야 한다.

---

## 0. 핵심 원칙 (반드시 숙지)

1. **`site.config.js`가 단일 진실 공급원(SSOT)** — 모든 콘텐츠·색상·텍스트가 이 파일 하나에서 관리됨. main.js와 index.html은 이 파일을 읽어서 렌더링. 콘텐츠 변경은 항상 여기서.
2. **이중 번역 시스템** — index.html은 site.config.js의 `{ko,en}` 객체, 서브페이지(about/contact/privacy)는 i18n.js의 LANG_DATA. **두 시스템 모두** 업데이트 필수.
3. **HTML 폴백 텍스트 필수 수정** — `data-i18n` 속성이 있어도 태그 안 텍스트 자체도 수정해야 함. 미수정 시 구글이 구 텍스트를 인덱싱하고 JS 로드 전 잠깐 구 텍스트가 노출됨.
4. **전수 검색으로 마무리** — 이전 작품명 단어로 grep 검색해서 웹 파일에서 0건 확인 후에만 작업 완료로 간주.
5. **manifest.json은 자동 업데이트 안 됨** — site.config.js를 아무리 바꿔도 manifest.json은 연동 없음. 수동 필수.
6. **RGB 직접 입력** — `body::before`의 색광은 CSS 변수가 아닌 RGB 숫자값을 직접 넣어야 안전함.

---

## 1. 파일별 역할·수정 범위·수정 우선순위

### 수정 필요 파일 (전체)

| 파일 | 수정 내용 | 핵심 주의사항 |
|------|-----------|---------------|
| `site.config.js` | 전체 콘텐츠 교체 | `modelClass`가 TM 클래스명과 대소문자까지 정확히 일치 |
| `style.css` | body 배경 경로, body::before 색광 RGB | 콘텐츠 z-index 1 이상 유지 필수 |
| `i18n.js` | LANG_DATA ko/en 전체 서브페이지 번역 | ko와 en 양쪽 모두 수정 |
| `about.html` | data-i18n 폴백 텍스트, 트래킹 ID | faq.a5 저작권자 이름 특히 확인 |
| `contact.html` | data-i18n 폴백 텍스트, Formspree ID, 트래킹 ID | faq.a6 저작권자 이름 + Formspree action URL |
| `privacy.html` | data-i18n 폴백 텍스트, 트래킹 ID | s1.p-html 서비스명 특히 확인 |
| `index.html` | 트래킹 ID (GA·Clarity·Adsense), SVG eyeSymbol | Adsense ID는 meta + script 2곳 |
| `manifest.json` | name, short_name, description, theme_color, screenshots | 자동화 없음, 수동 필수 |
| `sitemap.xml` | 모든 URL (4개) + lastmod 날짜 | bs-pb2.pages.dev → 새 주소 |
| `robots.txt` | Sitemap URL | 마지막 줄 Sitemap: 주소 |
| `firebase.json` | ignore 목록의 이전 이미지 폴더명 | 이전 프로젝트 이미지 폴더명 교체 |
| `images/` | 캐릭터 이미지 + 배경 포스터 교체 | 파일명 대소문자, site.config.js 경로와 일치 |

### 수정 불필요 파일

| 파일 | 이유 |
|------|------|
| `main.js` | site.config.js 기반 완전 동적 렌더링. 로직·AI·카메라 등 변경 없으면 일절 수정 불필요 |
| `index.html` | 트래킹 ID와 SVG 초기값 외 수정 불필요. 콘텐츠는 JS가 동적으로 채움 |

---

## 2. site.config.js 전체 구조 — 필드별 상세 설명

```javascript
const SITE_CONFIG = {

  /* ────────────────────────────────────────
     기본 정보
  ──────────────────────────────────────── */
  siteUrl:  'https://your-domain.pages.dev/',
  // ⚠️ 끝에 / 필수. SNS 공유 URL, SEO 등 전체에서 사용됨

  siteName: '사이트명',
  // nav, footer 등에 사용

  disqus: 'disqus-shortname',
  // Disqus 댓글 쇼트네임. 미사용 시 '' (빈 문자열)

  /* ────────────────────────────────────────
     테마 색상 — CSS 변수로 자동 변환됨
  ──────────────────────────────────────── */
  theme: {
    primary:     '#hex',
    // → CSS --crimson, --crimson-rgb 생성
    // 사용처: 버튼 테두리, 스캔 프레임, 결과 눈 SVG, 카드 테두리, 애니메이션 빛

    primaryDark: '#hex',
    // → CSS --deep-crimson, --deep-crimson-rgb 생성
    // 사용처: 버튼 hover, 그래디언트 어두운 끝

    gold:        '#hex',
    // → CSS --gold, --gold-rgb 생성
    // 사용처: 결과 점수, 별점, 1위 예측바 그래디언트, 특수 강조 텍스트

    accent:      '#hex',
    // → CSS --purple, --purple-rgb 생성
    // 사용처: 서브 배경, 그래디언트 보조

    bg:          '#hex',
    // → CSS --dark-bg 생성
    // 사용처: body background-color(이미지 로드 전 폴백), card 배경 기반

    cardBg:      'rgba(R,G,B,A)',
    // → CSS --card-bg 생성
    // 사용처: .guide-card, .result-hero 등 카드 배경색
    // 투명도 0.90~0.95 권장
  },

  /* ────────────────────────────────────────
     AI 모델
  ──────────────────────────────────────── */
  modelUrl: 'https://teachablemachine.withgoogle.com/models/XXXXXXXX/',
  // ⚠️ 끝에 / 필수
  // 이 URL에 model.json, metadata.json이 자동으로 붙어서 로드됨
  // loadModel()이 최대 3회 재시도 후 실패 시 "재시도" 버튼 표시

  /* ────────────────────────────────────────
     네비게이션
  ──────────────────────────────────────── */
  nav: {
    logo: '텍스트',
    // 상단 왼쪽 로고. 일본어 원제(カタカナ) 권장
  },

  /* ────────────────────────────────────────
     헤더
  ──────────────────────────────────────── */
  header: {
    deco:    '영문 텍스트',
    // 제목 위 작은 장식 텍스트. 대문자 영문 권장 (CSS letter-spacing 적용)

    titleJp: { ko: '한국어\n제목', en: 'English\nTitle' },
    // \n으로 줄바꿈. main.js가 split('\n')으로 처리

    tagline: { ko: '서브타이틀', en: 'Subtitle' },

    badges: [
      { ko: '이름1', en: 'Name1' },
      // 헤더 하단 캐릭터 배지. 6개 권장 (CSS 레이아웃 기준)
    ],
  },

  /* ────────────────────────────────────────
     결과 섹션
  ──────────────────────────────────────── */
  result: {
    eyeSymbol:   'ABC',
    // SVG 눈 안의 텍스트. 3~4글자 권장 (font-size: 5, viewBox 60×60 기준)
    // HTML 초기값(index.html #result-eye-symbol)도 이것과 맞춰야 함

    label:       { ko: '당신과 닮은 캐릭터', en: 'Your Lookalike' },
    scoreLabel:  { ko: '유사도', en: 'Similarity' },
    allLabel:    { ko: '전체 분석 결과', en: 'All Results' },
    unknownRank: { ko: '???', en: '???' },
    unknownDesc: { ko: '정체불명...', en: 'Unknown entity...' },
    // ↑ TM 클래스명이 characters[]에 없을 때 표시되는 폴백
  },

  /* ────────────────────────────────────────
     캐릭터 DB — AI 결과 표시용
     ⚠️ modelClass는 TM 클래스명과 대소문자까지 100% 일치해야 함
     ⚠️ 캐릭터 수 = TM 모델의 클래스 수
  ──────────────────────────────────────── */
  characters: [
    {
      modelClass: 'ClassName',  // TM metadata.json의 labels 배열 값과 동일
      name:  { ko: '한국어명', en: 'EnglishName' },
      rank:  { ko: '직함/설명', en: 'Rank/Description' },
      desc:  { ko: '상세 설명 문장', en: 'Detailed description' },
    },
    // 필요한 만큼 반복
  ],

  /* ────────────────────────────────────────
     캐릭터 카드 — 가이드 섹션 표시용
     characters[]와 별도로 관리 (표시 순서, 설명 길이 등 다를 수 있음)
  ──────────────────────────────────────── */
  characterCards: [
    {
      id:        'filename',              // 파일명 기반 식별자 (확장자 제외)
      name:      { ko: '이름', en: 'Name' },
      rank:      { ko: '직함', en: 'Rank' },
      image:     '/images/filename.png',  // ⚠️ 대소문자 정확히. 실제 파일 존재 확인
      imageWebp: '/images/filename.webp', // 선택사항. 없으면 이 줄 삭제
      cardDesc:  { ko: '카드 설명', en: 'Card description' },
    },
  ],

  /* ────────────────────────────────────────
     SEO — main.js injectMetaTags()가 동적으로 주입
  ──────────────────────────────────────── */
  seo: {
    pageTitle:     '페이지 제목 | 부제목',  // <title> 태그
    description:   '150자 이내 설명',       // meta description
    keywords:      '키1, 키2, 키3',
    ogTitle:       'OG 제목',
    ogDescription: 'OG 설명',
    ogImage:       'https://도메인/images/og.png',  // 절대 URL 필수
    themeColor:    '#hex',                  // 모바일 브라우저 상단 색상
    datePublished: 'YYYY-MM-DD',
    dateModified:  'YYYY-MM-DD',
  },

  /* ────────────────────────────────────────
     SNS 공유
  ──────────────────────────────────────── */
  share: {
    hashtags: '#태그1 #태그2 #태그3',
    // Twitter, Threads 공유 시 텍스트에 붙음

    resultText: function(name, rank, score, url) {
      // AI 결과가 있을 때 공유 텍스트
      return '공유 문구 ' + name + '(' + rank + ')와 ' + score + ' 닮았다!\n' + url;
    },

    defaultText: function(url) {
      // 결과 없을 때 기본 공유 텍스트
      return '기본 공유 문구\n' + url;
    },

    resultCardTitle:  '결과 카드 제목 텍스트',
    resultCardFooter: '결과 카드 하단 텍스트',
    // downloadResultCard() 함수가 Canvas로 그릴 때 사용

    scoreLabel: { ko: '유사도', en: 'Similarity' },
  },

  /* ────────────────────────────────────────
     가이드 섹션 — renderGuide()가 동적 생성
  ──────────────────────────────────────── */
  guide: {
    howtoTitle: { ko: '⚡ 이용 방법', en: '⚡ How to Use' },
    howtoSteps: [
      { ko: '<strong>1단계</strong> 설명 (HTML 사용 가능)', en: '<strong>Step 1</strong> desc' },
      // 5개 권장
    ],

    aboutTitle: { ko: '작품 소개 제목', en: 'About Title' },
    aboutParas: [
      { ko: '<p>소개 문단 (HTML 사용 가능)</p>', en: '<p>Intro paragraph</p>' },
      // 3개 권장
    ],

    charGuideTitle:    { ko: '캐릭터 가이드', en: 'Character Guide' },
    charGuideSubtitle: { ko: '부제목 영문', en: 'Subtitle' },

    aiTitle: { ko: '🧠 AI 작동 원리', en: '🧠 How the AI Works' },
    aiParas: [
      { ko: '<p>AI 설명 (HTML 사용 가능)</p>', en: '<p>AI explanation</p>' },
      // 2개 권장
    ],

    faqTitle: { ko: '❓ 자주 묻는 질문', en: '❓ FAQ' },
    faqItems: [
      {
        q: { ko: 'Q. 질문?', en: 'Q. Question?' },
        a: { ko: '답변 (HTML 사용 가능)', en: 'Answer' }
      },
      // 5개 권장
    ],

    ratingTitle:    { ko: '⭐ 평가 제목', en: '⭐ Rating Title' },
    ratingSubtitle: { ko: '부제목', en: 'Subtitle' },
    ratingLabels: [
      '',  // index 0 (미사용)
      { ko: '별로에요',   en: 'Poor' },
      { ko: '아쉬워요',   en: 'Fair' },
      { ko: '괜찮아요',   en: 'Good' },
      { ko: '좋아요!',    en: 'Great!' },
      { ko: '최고예요!🔥', en: 'Excellent!🔥' },
    ],
    // localStorage 키: 'geo_rating', GA 이벤트: 'service_rating'
  },

  /* ────────────────────────────────────────
     푸터
  ──────────────────────────────────────── */
  footer: {
    mainText:  'SITE NAME · ANALYZER',   // 대문자 영문 권장
    copyright: '작품명 © 원작자 / 출판사',
    poweredBy: 'Powered by Teachable Machine AI',
  },
};
```

---

## 3. 렌더링 플로우 (main.js 963줄)

```
페이지 로드
  └── applyThemeEarly()
      ├── site.config.js theme 읽기
      ├── hex → RGB 변환 (hexRgb 함수)
      └── document.documentElement에 8개 CSS 변수 set
          (FOUC 방지: DOMContentLoaded 전에 실행)

DOMContentLoaded
  ├── initParticles()          110개 파티클 애니메이션 (bg-canvas)
  ├── setLang(저장된 언어)      localStorage 'lang' 키, 기본값 'ko'
  ├── injectMetaTags()         title, description, og:*, twitter:*, JSON-LD 주입
  ├── renderNav()              #nav-logo 텍스트
  ├── renderHeader()           헤더 deco, 제목(\n 줄바꿈), tagline, 배지
  ├── renderResultLabels()     #result-eye-symbol, .result-label, .result-score-label, h3[data-all-label]
  ├── renderGuide()
  │   ├── 이용방법 (howtoSteps × 5)
  │   ├── 작품소개 (aboutParas × 3)
  │   ├── 캐릭터 카드 그리드 (characterCards, picture>source+img)
  │   ├── AI 작동 원리 (aiParas × 2)
  │   ├── FAQ (faqItems × 5)
  │   └── 별점 (ratingLabels × 5, initStarRating 호출)
  ├── renderFooter()           #site-footer 링크 + 저작권
  ├── renderStaticUIText()     탭, 버튼, placeholder, 상태메시지, 해시태그, Disqus
  └── loadModel()              비동기, 최대 3회 재시도, 1.5초 간격

언어 전환 (KO ↔ EN 버튼):
  setLang(lang)
    ├── localStorage 저장
    ├── applyLang(lang) [i18n.js]
    │   ├── [data-i18n] textContent 업데이트
    │   ├── [data-i18n-html] innerHTML 업데이트
    │   ├── [data-i18n-placeholder] placeholder 업데이트
    │   └── [data-i18n-aria] aria-label 업데이트
    └── window.rerenderForLang() → rerenderAll() [main.js]
        ├── renderHeader()
        ├── renderResultLabels()
        ├── renderGuide()
        ├── renderFooter()
        └── renderStaticUIText()
```

---

## 4. i18n 이중 시스템 — 상세 동작

### 시스템 A: site.config.js + main.js tr() (index.html 전용)

```javascript
// main.js
function tr(obj) {
  var lang = getLang();  // localStorage 'lang' 값
  return (obj && obj[lang]) ? obj[lang] : (obj && obj.ko ? obj.ko : '');
}

// 사용
document.querySelector('.hero-title').textContent = tr(SITE_CONFIG.header.titleJp);
// → SITE_CONFIG.header.titleJp.ko 또는 .en
```

**특징**: 언어 전환 시 rerenderAll()이 전체를 다시 그림. DOM 요소 전체 재생성.

### 시스템 B: i18n.js LANG_DATA + data-i18n (서브페이지 전용)

```javascript
// i18n.js
function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    var key = el.getAttribute('data-i18n');
    var text = LANG_DATA[lang] && LANG_DATA[lang][key];
    if (text) el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    var key = el.getAttribute('data-i18n-html');
    var html = LANG_DATA[lang] && LANG_DATA[lang][key];
    if (html) el.innerHTML = html;
  });
  // + data-i18n-placeholder, data-i18n-aria 처리
}
```

**특징**: DOM 요소는 그대로, 텍스트 내용만 교체.

### 반드시 수정해야 하는 i18n.js 키 목록

```
# 작품명이 직접 언급되는 키 (ko + en 양쪽 필수)

[공통 네비/푸터]
footer.copy1            서비스 이름 포함 여부 확인

[index.html 관련]
index.tagline           "당신은 어떤 [작품명] 캐릭터를 닮았을까?"
index.badge1 ~ badge6   캐릭터 이름 6개
index.result.label      "당신과 닮은 [작품명] 캐릭터"
guide.howto.s5-html     "가장 닮은 [작품명] 캐릭터"

[작품 소개]
guide.uppermoon.h2      섹션 제목 (예: "⚡ 체인소맨 캐릭터 소개")
guide.uppermoon.p1-html ~ p3-html   작품 소개 3문단

[캐릭터 가이드]
guide.char-title        "체인소맨 캐릭터 가이드" 등
char.*.rank             각 캐릭터 랭크 (이전 캐릭터 내용 잔존 주의)
char.*.desc-html        각 캐릭터 설명 (이전 캐릭터 내용 잔존 주의)

[about.html]
about.s1.p1-html        서비스 소개 (작품명 포함)
about.s1.p2-html        캐릭터 이름 나열
about.faq.a1            캐릭터 이름 나열
about.faq.a5            "[작품명]의 모든 저작권은 [저작권자]에 귀속"
about.faq.q5            "공식 [작품명] 제품인가요?"
about.s4.p1-html        저작권자 이름 (원작자 + 출판사)

[privacy.html]
privacy.s1.p-html       "The [작품명] Lookalike service..."

[contact.html]
contact.faq.a6          "[작품명] 이미지·콘텐츠...저작권자([이름]/[출판사])"
```

### ⚠️ HTML 폴백 텍스트 미수정 — 가장 흔한 버그

아래 3개 파일의 태그 안 텍스트도 반드시 수정:

```
about.html:   data-i18n="about.faq.q5"  태그 안 텍스트
              data-i18n="about.faq.a5"  태그 안 텍스트

contact.html: data-i18n="contact.faq.a6"  태그 안 텍스트

privacy.html: data-i18n-html="privacy.s1.p-html" 태그 안 텍스트
```

---

## 5. CSS 변수 시스템

### 변수 생성 로직 (main.js, DOMContentLoaded 전 실행)

```javascript
function applyThemeEarly() {
  var t = SITE_CONFIG.theme;
  var r = document.documentElement.style;

  function hexRgb(h) {
    return parseInt(h.slice(1,3),16) + ', '
         + parseInt(h.slice(3,5),16) + ', '
         + parseInt(h.slice(5,7),16);
  }

  r.setProperty('--crimson',          t.primary);
  r.setProperty('--crimson-rgb',      hexRgb(t.primary));
  r.setProperty('--deep-crimson',     t.primaryDark);
  r.setProperty('--deep-crimson-rgb', hexRgb(t.primaryDark));
  r.setProperty('--gold',             t.gold);
  r.setProperty('--gold-rgb',         hexRgb(t.gold));
  r.setProperty('--purple',           t.accent);
  r.setProperty('--purple-rgb',       hexRgb(t.accent));
  r.setProperty('--dark-bg',          t.bg);
  r.setProperty('--card-bg',          t.cardBg);
}
```

### 전체 CSS 변수 → 사용 위치

| 변수 | config 소스 | 주요 사용 위치 |
|------|-------------|---------------|
| `--crimson` | theme.primary | 버튼 테두리, 스캔 프레임, 결과 눈 SVG 홍채, 카드 테두리 |
| `--crimson-rgb` | theme.primary (RGB) | `rgba(var(--crimson-rgb), 0.3)` 등 투명도 사용 시 |
| `--deep-crimson` | theme.primaryDark | 그래디언트 어두운 끝, hover 색상 |
| `--gold` | theme.gold | 1위 예측바 그래디언트, 결과 점수, 별점, 눈 심볼 텍스트 |
| `--gold-rgb` | theme.gold (RGB) | 투명도 사용 |
| `--purple` | theme.accent | 서브 배경, 특수 요소 배경 |
| `--dark-bg` | theme.bg | body background-color 폴백 |
| `--card-bg` | theme.cardBg | .guide-card, .result-hero, .ai-card 배경 |

### CSS에서 올바른 사용법

```css
/* ✅ 단색 사용 */
color: var(--gold);
background: var(--crimson);

/* ✅ 투명도 적용 */
border-color: rgba(var(--crimson-rgb), 0.5);
background: rgba(var(--gold-rgb), 0.1);

/* ❌ body::before에서 CSS 변수 사용 — 안전하지 않음 */
/* pseudo-element에서 CSS 변수가 적용 안 될 수 있음 */
/* 반드시 RGB 숫자값 직접 입력 */
```

---

## 6. 배경 레이어 시스템

### z-index 전체 계층

```
z-index 999+  nav.site-nav (position: fixed)
z-index 300   #copy-toast
z-index 200   .share-float
z-index  10   .loading-overlay
z-index   1   .wrapper, .guide-section, .disqus-wrap, footer
              ↑ 콘텐츠는 모두 z-index: 1 이상, position: relative
z-index   0   body::before (그래디언트+오버레이)
              body::after  (스캔라인)
              #bg-canvas   (파티클)
(z-index 없음) body background-image (포스터)
```

### 배경 수정 규칙

**body (1층 — 포스터 이미지):**
```css
body {
  background-color: var(--dark-bg);            /* 이미지 로드 전 폴백 */
  background-image: url('/images/poster.jpg'); /* ← 경로만 교체 */
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
```

**body::before (2층 — 오버레이 + 색광):**
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    /* 색광 위치는 at X% Y% 로 조정 (포스터 인물 반대편에 색광 배치 권장) */
    radial-gradient(ellipse at 15% 55%, rgba(R1,G1,B1, 0.14) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 15%, rgba(R2,G2,B2, 0.09) 0%, transparent 50%),
    radial-gradient(ellipse at 55% 88%, rgba(R3,G3,B3, 0.16) 0%, transparent 48%),
    rgba(배경R,배경G,배경B, 0.88);  /* 마지막: 전체 어두운 오버레이 */
  z-index: 0;
  pointer-events: none;
}
```

**색광 색상은 theme 색상의 RGB 값으로 설정:**
```
theme.primary = '#8b5cf6' → rgba(139, 92, 246, 0.14)
theme.gold    = '#22d3ee' → rgba( 34,211, 238, 0.09)
```

**body::after (3층 — 스캔라인, 수정 불필요):**
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(0,0,0,0.022) 2px,
    rgba(0,0,0,0.022) 4px
  );
  z-index: 0;
  pointer-events: none;
}
```

---

## 7. 캐릭터 이미지 크롭 시스템

### 데스크탑 CSS (기본)

```css
.char-img-wrap {
  width: 100px;
  height: 120px;
  overflow: hidden;
  border-radius: 12px;
}
.char-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;  /* 상단 기준 크롭 */
}
```

### 모바일 CSS (max-width: 420px)

```css
@media (max-width: 420px) {
  .char-img-wrap {
    width: 100%;
    height: 180px;
  }
  .char-img-wrap img {
    object-fit: contain;     /* 전체 표시, 잘림 없음 */
    object-position: center;
  }
}
```

### 이미지 준비 기준

- 권장: 세로형(portrait), 얼굴이 이미지 상단 1/3 위치
- 데스크탑에서 얼굴 위치에 따라 `object-position` 조정:
  - 얼굴 상단: `top center` (기본)
  - 얼굴 중앙: `center center`
  - 얼굴 하단: `bottom center`
- 모바일은 `contain`이므로 크롭 문제 없음

### HTML 구조 (main.js renderGuide에서 생성)

```html
<picture>
  <source srcset="/images/char.webp" type="image/webp">  <!-- WebP 있을 때만 -->
  <img src="/images/char.png" alt="캐릭터명" loading="lazy" width="200" height="240">
</picture>
```

---

## 8. contact.html — Formspree 연동

### Form action URL 위치

```html
<!-- contact.html 약 175번째 줄 -->
<form id="contact-form" action="https://formspree.io/f/FORM_ID" method="POST" novalidate>
```

### FORM_ID 교체

`formspree.io` 가입 → 새 Form 생성 → Form ID 복사 → `FORM_ID` 교체.

### Form 제출 로직 (contact.html 내 인라인 스크립트)

```javascript
// AJAX 제출 (fetch API 사용)
// 유효성 검사: 이름/이메일/메시지 필수
// 이메일 정규식: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// 스팸 방지: input name="_gotcha" 허니팟 포함
// 성공 시: form 초기화 + 성공 메시지
// 실패 시: 오류 메시지
```

---

## 9. manifest.json — 전체 교체 필드

```json
{
  "name": "새 사이트 전체 이름",
  "short_name": "짧은이름",
  "description": "설명 (짧게)",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#05050f",    ← theme.bg와 맞춤
  "theme_color": "#새테마색",        ← theme.primary와 맞춤
  "orientation": "portrait-primary",
  "lang": "ko",
  "categories": ["entertainment", "games"],
  "icons": [
    { "src": "/favicon.ico", "sizes": "64x64", "type": "image/x-icon" }
  ],
  "screenshots": [
    {
      "src": "/images/새캐릭터이미지.png",   ← 실제 존재하는 이미지로
      "sizes": "1200x630",
      "type": "image/png",
      "label": "새 사이트 이름"
    }
  ]
}
```

---

## 10. sitemap.xml — 전체 교체 패턴

`bs-pb2.pages.dev` → `새도메인.pages.dev` 전체 치환 (8군데).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://새도메인.pages.dev/</loc>
    <lastmod>YYYY-MM-DD</lastmod>                   ← 오늘 날짜
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ko" href="https://새도메인.pages.dev/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://새도메인.pages.dev/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://새도메인.pages.dev/"/>
  </url>
  <!-- about.html, contact.html, privacy.html 동일 패턴 -->
</urlset>
```

---

## 11. robots.txt — 교체 포인트

```
# 마지막 줄만 교체
Sitemap: https://새도메인.pages.dev/sitemap.xml
```

**AI 크롤러 허용 설정은 유지** (GEO 최적화 목적):
```
User-agent: GPTBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
```

---

## 12. firebase.json — ignore 목록 업데이트

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "firebase-debug.log",
      "GEMINI.md",
      "README.md",
      "README_User.md",
      "README_AI.md",
      "이전작품캐릭터이미지/**"   ← 이전 이미지 원본 폴더명 교체
    ]
  }
}
```

---

## 13. 트래킹 코드 위치 — 4개 파일 모두

### index.html (head 상단)

```html
<!-- 1. Google Analytics (약 8번째 줄) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
  // AI 레퍼럴 추적 로직도 있음 (수정 불필요)
</script>

<!-- 2. Microsoft Clarity (약 31번째 줄) -->
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){...})(window,document,"clarity","script","CLARITY_ID");
</script>

<!-- 3. Google Adsense (약 77번째 줄, 2곳) -->
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXXXX">
<script async src="...adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

### about.html, contact.html, privacy.html

동일하게 GA ID, Clarity ID 교체. Adsense도 있으면 교체.
index.html과 같은 ID 사용하거나 서브페이지 전용 별도 ID 사용 가능.

---

## 14. 스크립트 로딩 순서 (index.html body 하단)

```html
<!-- 1. TensorFlow.js — tmImage가 의존 -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js"></script>

<!-- 2. Teachable Machine Image — site.config.js 로드 전에 필요 -->
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.5/dist/teachablemachine-image.min.js"></script>

<!-- 3. site.config.js — SITE_CONFIG 전역 변수 정의 -->
<script src="/site.config.js"></script>

<!-- 4. i18n.js — LANG_DATA, setLang, applyLang 전역 함수 정의 -->
<script src="/i18n.js"></script>

<!-- 5. main.js — 위 4개 모두 의존, 마지막에 로드 -->
<script src="/main.js"></script>
```

**순서 변경 시 오류**: `SITE_CONFIG is not defined`, `tmImage is not defined`, `t is not defined`

---

## 15. 시행착오에서 배운 모든 교훈

### 교훈 1: manifest.json은 절대 자동 업데이트 안 됨

site.config.js를 아무리 바꿔도 manifest.json은 연동 없음.
특히 놓치기 쉬운 필드:
- `screenshots[0].src` — 이전 캐릭터 이미지 경로 잔존
- `screenshots[0].label` — "귀멸의 칼날 상현 닮은꼴 AI 분석기" 잔존
- `theme_color` — 이전 테마 색 잔존
- `short_name` — "상현닮은꼴" 잔존

### 교훈 2: i18n.js에서 ko만 수정하고 en 누락

한국어만 수정하고 영어 모드로 전환하면 이전 내용이 나옴.
**반드시 `LANG_DATA.ko`와 `LANG_DATA.en` 양쪽 모두 수정**.

### 교훈 3: about.html FAQ a5 / contact.html FAQ a6 — 최다 누락 지점

이 두 곳은 저작권자 이름이 명시되어 있어 이전 작품명이 가장 오래 남음.
```
about.html a5:    "[이전작품명]의 모든 저작권은 [이전저작권자] 및 [출판사]에 귀속"
contact.html a6:  "[이전작품명] 이미지·콘텐츠...저작권자([이전저작권자]/[출판사])"
```
i18n.js만 고치고 HTML 폴백 텍스트 안 고치는 경우도 흔함.

### 교훈 4: privacy.html EN 버전 누락

i18n.js의 EN 섹션 `privacy.s1.p-html`에 "The **[이전작품명]** Lookalike service..." 잔존.
한국어는 고치고 영어를 놓치는 패턴.

### 교훈 5: index.html SVG 눈 심볼 초기값

```html
<text ... id="result-eye-symbol">上弦</text>
```
main.js가 `renderResultLabels()`에서 `result.eyeSymbol` 값으로 덮어쓰지만,
JS 로드 전 잠깐 `上弦`이 보일 수 있음. HTML 초기값도 수정 권장.

### 교훈 6: body::before 색광에 CSS 변수 사용 불가

```css
/* ❌ 안전하지 않음 — pseudo-element에서 var() 미동작 케이스 있음 */
radial-gradient(..., rgba(var(--crimson-rgb), 0.14) ...)

/* ✅ 안전한 방법 — RGB 숫자 직접 */
radial-gradient(..., rgba(139, 92, 246, 0.14) ...)
```

### 교훈 7: 캐릭터 이미지 크롭 데스크탑만 테스트

데스크탑에서 이미지가 잘 보여도 모바일에서 `contain`이므로 여백이 생길 수 있음.
반대로 데스크탑에서 `object-position: top center`인데 이미지 얼굴이 아래에 있으면 얼굴이 잘림.
이미지별로 `object-position` 값을 개별 조정하는 것이 가장 확실함.

### 교훈 8: Formspree ID 교체 누락

contact.html의 form action URL에 이전 Formspree ID가 그대로 남아 있으면,
방문자 문의가 이전 사이트 주인의 이메일로 감.

### 교훈 9: sitemap.xml URL 미교체

배포 후 구글 검색에서 이전 사이트 URL로 연결되거나 인덱싱 오류 발생.

### 교훈 10: firebase.json ignore 목록 이전 폴더명

이전 프로젝트의 이미지 원본 폴더(예: `상현캐릭터이미지/**`)가 그대로 남아 있으면
새 프로젝트에서 없는 폴더를 ignore하려 해서 오류는 없지만 혼동 발생.
새 프로젝트 이미지 원본 폴더명으로 교체.

### 교훈 11: modelClass 대소문자 불일치

Teachable Machine 클래스 이름이 'Denji'인데 site.config.js에 'denji'로 입력하면
AI 결과에 unknownRank/unknownDesc가 표시됨.
TM 모델의 metadata.json을 직접 열어 labels 배열을 확인하고 복사해서 사용.

### 교훈 12: modelUrl 끝 슬래시 누락

```javascript
// ❌ 오류 발생
modelUrl: 'https://teachablemachine.withgoogle.com/models/XXXXXXXX'

// ✅ 정상
modelUrl: 'https://teachablemachine.withgoogle.com/models/XXXXXXXX/'
```
`model.json`이 `modelUrl + 'model.json'`으로 붙기 때문에 슬래시 필수.

### 교훈 13: siteUrl 끝 슬래시 누락

SNS 공유 URL, JSON-LD 스키마 등 전체에서 사용되므로 동일하게 `/` 필수.

---

## 16. 새 프로젝트 시작 체크리스트 (순서대로 실행)

```
작업 전 준비
[ ] 1. 이 프로젝트 폴더를 새 폴더로 복사
[ ] 2. 새 캐릭터 이미지 + 배경 포스터를 images/ 폴더에 복사
[ ] 3. Teachable Machine 모델 학습 완료 + URL 준비
[ ] 4. Formspree 새 Form ID 준비
[ ] 5. GA/Clarity/Adsense ID 준비

핵심 파일 수정
[ ] 6. site.config.js — 전체 교체 (siteUrl부터 footer까지)
[ ] 7. style.css — body background-image 경로 수정
[ ] 8. style.css — body::before 색광 RGB 값 수정 (theme 색에 맞게)

서브페이지 번역
[ ] 9. i18n.js — LANG_DATA.ko 전체 교체
[ ] 10. i18n.js — LANG_DATA.en 전체 교체 (ko와 별개로 반드시!)

HTML 폴백 텍스트
[ ] 11. about.html — faq.q5, faq.a5 태그 안 텍스트 수정
[ ] 12. contact.html — faq.a6 태그 안 텍스트 수정
[ ] 13. contact.html — Formspree action URL 교체
[ ] 14. privacy.html — privacy.s1.p-html 태그 안 텍스트 수정

트래킹 코드
[ ] 15. index.html — GA ID, Clarity ID, Adsense ID(2곳) 교체
[ ] 16. about.html — GA ID, Clarity ID 교체
[ ] 17. contact.html — GA ID, Clarity ID 교체
[ ] 18. privacy.html — GA ID, Clarity ID 교체

부수 파일
[ ] 19. manifest.json — name, short_name, description, theme_color, screenshots 전체 교체
[ ] 20. index.html — SVG #result-eye-symbol 초기값 교체
[ ] 21. sitemap.xml — 모든 URL(8곳) + lastmod 날짜 교체
[ ] 22. robots.txt — Sitemap URL 교체
[ ] 23. firebase.json — ignore 목록의 이전 폴더명 교체

이전 이미지 정리
[ ] 24. images/ — 이전 캐릭터 이미지 삭제
[ ] 25. images/ — 이전 배경 포스터 삭제

검증
[ ] 26. 전수 검색: 이전 작품명으로 grep, 웹 파일에서 0건 확인
[ ] 27. ko/en 양쪽 언어 전환해서 모든 텍스트 확인
[ ] 28. 모바일 레이아웃 확인 (Chrome DevTools 375px)
[ ] 29. 카메라·업로드 기능 테스트
[ ] 30. AI 결과에 캐릭터 이름 정상 표시 확인
```

---

## 17. 검증용 grep 패턴

### 이전 작품 잔존 콘텐츠 전수 검색

```bash
# 패턴을 이전 작품명으로 교체해서 실행
grep -rni \
  "귀멸\|鬼滅\|상현\|Upper.Moon\|Demon.Slayer\|吾峠\|코쿠시보\|도우마\|아카자\|한텐구" \
  --exclude-dir=".claude" \
  --exclude-dir=".git" \
  --include="*.html" \
  --include="*.js" \
  --include="*.json" \
  --include="*.css" \
  --include="*.xml" \
  --include="*.txt" \
  .

# 결과 0건이어야 완료
```

### 특정 파일에서 키 위치 확인

```bash
grep -n "privacy.s1.p-html" i18n.js    # ko/en 두 줄 모두 나와야 함
grep -n "about.faq.a5" i18n.js          # ko/en 두 줄
grep -n "contact.faq.a6" i18n.js        # ko/en 두 줄
grep -n "formspree.io" contact.html     # form action URL
grep -n "result-eye-symbol" index.html  # SVG 초기값
```

### manifest.json 빠른 확인

```bash
cat manifest.json  # 이전 name/description/screenshots 잔존 여부 확인
```

---

## 18. 주요 함수 참조

| 함수 | 위치 | 역할 |
|------|------|------|
| `applyThemeEarly()` | main.js | CSS 변수 주입, DOMContentLoaded 전 실행 |
| `tr(obj)` | main.js | {ko,en} 객체에서 현재 언어 텍스트 반환 |
| `getLang()` | main.js | localStorage 'lang' 값, 기본 'ko' |
| `injectMetaTags()` | main.js | title, meta, og, JSON-LD 동적 주입 |
| `renderGuide()` | main.js | 가이드 섹션 전체 DOM 생성 |
| `loadModel()` | main.js | TM 모델 로드, 최대 3회 재시도 |
| `predict(imageEl)` | main.js | AI 추론, 결과 렌더링 |
| `downloadResultCard()` | main.js | Canvas 600×380 결과 카드 PNG 저장 |
| `initStarRating()` | main.js | 별점 이벤트, localStorage geo_rating |
| `applyLang(lang)` | i18n.js | data-i18n 요소 텍스트 교체 |
| `setLang(lang)` | i18n.js | applyLang + window.rerenderForLang 호출 |
| `window.rerenderForLang` | main.js → i18n.js 연결 | rerenderAll() 함수에 연결됨 |

---

*이 문서는 `/home/user/bspb4` 체인소맨 닮은꼴 분석기 프로젝트의 실제 구현 및 시행착오를 기반으로 작성됨.*
*새 프로젝트 시작 시 섹션 16의 체크리스트를 순서대로 실행할 것.*
