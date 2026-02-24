# README_AI.md — Claude Code 전용 구현 가이드

> 이 파일은 **Claude Code가 새 닮은꼴 AI 분석기 사이트를 처음부터 올바르게 구현**하기 위한 기술 참조 문서입니다.
> 이전 시행착오를 반복하지 않고, 현재 사이트 품질을 바로 구현하는 것이 목적입니다.

---

## 0. 핵심 원칙

1. **`site.config.js`가 단일 진실 공급원(SSOT)** — 모든 콘텐츠·색상·텍스트는 이 파일에서 관리. main.js/index.html은 거의 수정 불필요.
2. **이중 번역 시스템 존재** — index.html은 site.config.js의 `{ko,en}` 객체, 서브페이지는 i18n.js의 LANG_DATA. 두 시스템 모두 업데이트해야 함.
3. **HTML 폴백 텍스트 반드시 수정** — `data-i18n` 속성 있어도 태그 안 텍스트도 업데이트. 검색엔진 크롤링 + 초기 렌더 시 보임.
4. **콘텐츠 교체 시 전수 검색 필수** — 이전 작품명 단어로 grep 검색 후 0건 확인까지 작업 완료 아님.
5. **manifest.json은 자동 업데이트 안 됨** — 수동으로 반드시 교체.

---

## 1. 파일별 역할 및 수정 범위

### 수정 필요 파일

| 파일 | 수정 내용 | 주의사항 |
|------|-----------|----------|
| `site.config.js` | 전체 콘텐츠 (항상 전부 교체) | modelClass가 TM 클래스명과 정확히 일치해야 함 |
| `style.css` | `body background-image` 경로, `body::before` 색광 색상 | 콘텐츠 영역 요소 `z-index: 1` 이상 유지 |
| `i18n.js` | LANG_DATA.ko/en 전체 서브페이지 번역 | ko/en 양쪽 모두 업데이트 |
| `about.html` | `data-i18n` 태그 폴백 텍스트 | FAQ a5 특히 확인 (저작권자 이름) |
| `contact.html` | `data-i18n` 태그 폴백 텍스트 | FAQ a6 특히 확인 (저작권자 이름) |
| `privacy.html` | `data-i18n` 태그 폴백 텍스트 | s1.p-html 특히 확인 (서비스 이름) |
| `manifest.json` | name, short_name, description, screenshots label, theme_color | 자동화 없음, 수동 필수 |
| `index.html` | 트래킹 ID 4개 (GA, Clarity, Adsense × 2) | SVG eyeSymbol 초기값도 교체 |
| `about/contact/privacy.html` | 트래킹 ID 각각 | index.html과 별도 ID일 수 있음 |

### 수정 불필요 파일 (템플릿 공통)

| 파일 | 이유 |
|------|------|
| `main.js` | site.config.js 기반 완전 동적 렌더링, 로직 변경 없으면 수정 불필요 |
| `firebase.json` | 배포 설정, 무관 |
| `sitemap.xml`, `robots.txt` | URL만 교체 |

---

## 2. site.config.js 전체 구조 및 필드 설명

```javascript
const SITE_CONFIG = {

  /* ── 기본 정보 ── */
  siteUrl:  'https://your-domain.pages.dev/',  // 끝에 / 필수
  siteName: '사이트명',
  disqus:   'disqus-shortname',  // 댓글 비활성화 시 ''

  /* ── 테마 색상 ── */
  theme: {
    primary:     '#hex',  // CSS --crimson 변수로 매핑 (버튼, 테두리, 강조)
    primaryDark: '#hex',  // CSS --deep-crimson 변수로 매핑
    gold:        '#hex',  // CSS --gold 변수로 매핑 (점수, 별점, 특수 텍스트)
    accent:      '#hex',  // CSS --purple 변수로 매핑
    bg:          '#hex',  // CSS --dark-bg 변수로 매핑
    cardBg:      'rgba()',  // CSS --card-bg 변수로 매핑
  },

  /* ── AI 모델 ── */
  modelUrl: 'https://teachablemachine.withgoogle.com/models/XXXXXXXX/',  // 끝에 / 필수

  /* ── 네비게이션 ── */
  nav: {
    logo: '텍스트',  // 네비게이션 왼쪽 로고 텍스트 (일본어 원제 추천)
  },

  /* ── 헤더 ── */
  header: {
    deco:     '영문 서브텍스트',  // 제목 위 작은 장식 텍스트
    titleJp:  { ko: '한국어\n제목', en: 'English\nTitle' },  // \n으로 줄바꿈 가능
    tagline:  { ko: '서브타이틀', en: 'Subtitle' },
    badges:   [  // 헤더 아래 표시되는 캐릭터 배지 (6개 권장)
      { ko: '캐릭터1', en: 'Character1' },
      // ...
    ],
  },

  /* ── 결과 섹션 레이블 ── */
  result: {
    eyeSymbol:   'CSM',  // SVG 눈 안의 텍스트 (3-4자 권장)
    label:       { ko: '당신과 닮은 캐릭터', en: 'Your Lookalike' },
    scoreLabel:  { ko: '유사도', en: 'Similarity' },
    allLabel:    { ko: '전체 분석 결과', en: 'All Results' },
    unknownRank: { ko: '???', en: '???' },
    unknownDesc: { ko: '정체불명...', en: 'Unknown entity...' },
  },

  /* ── 캐릭터 DB (AI 결과 표시용) ── */
  // ⚠️ modelClass는 Teachable Machine 클래스명과 대소문자까지 정확히 일치해야 함
  characters: [
    {
      modelClass: 'ClassName',  // TM 클래스명
      name:  { ko: '한국어명', en: 'EnglishName' },
      rank:  { ko: '설명', en: 'Description' },
      desc:  { ko: '캐릭터 설명', en: 'Character description' },
    },
    // ...
  ],

  /* ── 캐릭터 카드 (가이드 섹션 표시용) ── */
  characterCards: [
    {
      id:       'filename',  // 이미지 파일명 기준 (확장자 제외)
      name:     { ko: '한국어명', en: 'EnglishName' },
      rank:     { ko: '직함', en: 'Rank' },
      image:    '/images/filename.png',     // 실제 파일 경로 (대소문자 주의)
      imageWebp: '/images/filename.webp',  // WebP 버전 (선택, 없으면 생략)
      cardDesc: { ko: '카드 설명', en: 'Card description' },
    },
    // ...
  ],

  /* ── SEO ── */
  seo: {
    pageTitle:      '페이지 제목 | 부제목',
    description:    '페이지 설명 (150자 이내)',
    keywords:       '키워드1, 키워드2, ...',
    ogTitle:        'SNS 공유 제목',
    ogDescription:  'SNS 공유 설명',
    ogImage:        'https://your-domain.pages.dev/images/og-image.png',
    themeColor:     '#hex',  // 모바일 브라우저 상단 색상
    datePublished:  '2026-01-01',
    dateModified:   '2026-01-01',
  },

  /* ── SNS 공유 ── */
  share: {
    hashtags: '#태그1 #태그2',
    resultText: function(name, rank, score, url) {
      return '공유 텍스트. ' + name + '(' + rank + ')와 ' + score + ' 닮았다!\n' + url;
    },
    defaultText: function(url) {
      return '기본 공유 텍스트\n' + url;
    },
    resultCardTitle:  '결과 카드 제목',
    resultCardFooter: '결과 카드 하단',
    scoreLabel: { ko: '유사도', en: 'Similarity' },
  },

  /* ── 가이드 섹션 ── */
  guide: {
    howtoTitle:    { ko: '⚡ 이용 방법', en: '⚡ How to Use' },
    howtoSteps:    [
      { ko: '<strong>1단계</strong> 설명', en: '<strong>Step 1</strong> description' },
      // 5개 권장
    ],
    aboutTitle:    { ko: '작품 소개 제목', en: 'About Title' },
    aboutParas:    [
      { ko: '<p>설명1</p>', en: '<p>Description1</p>' },
      // 3개 권장
    ],
    charGuideTitle:    { ko: '캐릭터 가이드', en: 'Character Guide' },
    charGuideSubtitle: { ko: '부제목', en: 'Subtitle' },
    aiTitle:    { ko: '🧠 AI 작동 원리', en: '🧠 How the AI Works' },
    aiParas:    [
      { ko: '<p>설명</p>', en: '<p>Description</p>' },
    ],
    faqTitle:   { ko: '❓ FAQ', en: '❓ FAQ' },
    faqItems:   [
      { q: { ko: 'Q. 질문?', en: 'Q. Question?' }, a: { ko: '답변', en: 'Answer' } },
      // 5개 권장
    ],
    ratingTitle:    { ko: '⭐ 평가 제목', en: '⭐ Rating Title' },
    ratingSubtitle: { ko: '부제목', en: 'Subtitle' },
    ratingLabels:   ['', { ko: '별로에요', en: 'Poor' }, { ko: '아쉬워요', en: 'Fair' },
                         { ko: '괜찮아요', en: 'Good' }, { ko: '좋아요!', en: 'Great!' },
                         { ko: '최고예요!🔥', en: 'Excellent!🔥' }],
  },

  /* ── 푸터 ── */
  footer: {
    mainText:   'SITE NAME · ANALYZER',
    copyright:  '작품명 © 원작자 / 출판사',
    poweredBy:  'Powered by Teachable Machine AI',
  },
};
```

---

## 3. 렌더링 플로우 (main.js)

```
DOMContentLoaded
  └── applyThemeEarly()          // CSS 변수 즉시 적용 (FOUC 방지)
  └── initParticles()            // 배경 파티클 시작
  └── setLang(localStorage)      // 언어 초기화
  └── injectMetaTags()           // SEO 메타 태그 주입
  └── renderNav()                // 네비게이션 로고
  └── renderHeader()             // 헤더 (제목, 배지)
  └── renderResultLabels()       // 결과 섹션 레이블
  └── renderGuide()              // 가이드 섹션 전체
      ├── 이용 방법
      ├── 작품 소개
      ├── 캐릭터 카드 그리드
      ├── AI 원리
      ├── FAQ
      └── 별점 평가
  └── renderFooter()             // 푸터
  └── renderStaticUIText()       // 탭, 버튼, 상태 메시지
  └── loadModel()                // Teachable Machine 모델 로드 (비동기, 최대 3회 재시도)

언어 전환 시 (setLang → applyLang + window.rerenderForLang):
  └── applyLang()                // data-i18n 요소 업데이트 (i18n.js)
  └── rerenderAll()              // site.config.js 기반 요소 재렌더 (main.js)
```

---

## 4. i18n 이중 시스템 — 반드시 이해해야 할 핵심

### 시스템 A: site.config.js (index.html 전용)

main.js의 `tr(obj)` 함수가 `{ko, en}` 객체에서 현재 언어 선택.

```javascript
// site.config.js에서
header: { titleJp: { ko: '체인소맨 닮은꼴', en: 'Chainsaw Man Lookalike' } }

// main.js에서 자동 처리
document.querySelector('.hero-title').textContent = tr(SITE_CONFIG.header.titleJp);
```

### 시스템 B: i18n.js (서브페이지 전용: about, privacy, contact)

`LANG_DATA.ko` / `LANG_DATA.en` 딕셔너리 + HTML의 `data-i18n` 속성.

```javascript
// i18n.js에서
LANG_DATA.ko['about.faq.q5'] = 'Q. 공식 제품인가요?';
LANG_DATA.en['about.faq.q5'] = 'Q. Is this official?';

// HTML에서
<h3 data-i18n="about.faq.q5">Q. 공식 제품인가요?</h3>
//                             ↑ 이 폴백 텍스트도 반드시 수정!
```

### ⚠️ 흔한 실수: HTML 폴백 텍스트 미수정

i18n.js를 수정해도 HTML 태그 안의 텍스트를 수정하지 않으면:
- 페이지 초기 로드 시 잠깐 구 텍스트가 보임
- 검색엔진이 구 텍스트를 인덱싱함
- 반드시 두 곳 모두 수정해야 함

### i18n.js에서 반드시 교체해야 할 키

```
# 작품명이 직접 언급되는 키 (이전 → 새 작품명)
privacy.s1.p-html      (ko + en)  — "The [작품명] Lookalike service..."
about.faq.q5           (ko + en)  — "이 서비스는 공식 [작품명] 제품인가요?"
about.faq.a5           (ko + en)  — "[작품명]의 모든 저작권은..."
contact.faq.a6         (ko + en)  — "[작품명] 이미지·콘텐츠 관련..."
guide.uppermoon.h2     (ko + en)  — 작품 소개 섹션 제목
guide.uppermoon.p1-html~p3-html (ko + en)  — 작품 설명 3개 문단
guide.char-title       (ko + en)  — "캐릭터 가이드" 섹션 제목
char.*.rank            (ko + en)  — 각 캐릭터 랭크/직함 (이전 캐릭터 설명 잔존 주의)
char.*.desc-html       (ko + en)  — 각 캐릭터 설명 (이전 캐릭터 설명 잔존 주의)

# 인덱스 번역 (index.tagline, index.badge1~6, index.result.label)
index.tagline          (ko + en)
index.badge1~6         (ko + en)  — 헤더 배지 (6개)
index.result.label     (ko + en)  — "당신과 닮은 [작품명 캐릭터]"
guide.howto.s5-html    (ko + en)  — "가장 닮은 [작품명] 캐릭터"
```

---

## 5. CSS 변수 시스템

### 변수 생성 로직 (main.js applyThemeEarly)

site.config.js `theme.primary` (#hex) → CSS `--crimson` + `--crimson-rgb` 자동 생성

```javascript
function hexRgb(h) {
  return parseInt(h.slice(1,3),16) + ', ' + parseInt(h.slice(3,5),16) + ', ' + parseInt(h.slice(5,7),16);
}
// #8b5cf6 → "139, 92, 246"
```

### 전체 CSS 변수 목록

```css
--crimson          /* theme.primary */
--crimson-rgb      /* theme.primary를 "R, G, B" 형식으로 */
--deep-crimson     /* theme.primaryDark */
--deep-crimson-rgb
--gold             /* theme.gold */
--gold-rgb
--purple           /* theme.accent */
--purple-rgb
--dark-bg          /* theme.bg */
--card-bg          /* theme.cardBg */
```

### CSS에서 사용 예시

```css
/* 고정 색상 */
color: var(--gold);
background: var(--crimson);

/* 투명도 적용 (rgba 필요) */
border: 1px solid rgba(var(--crimson-rgb), 0.5);
background: rgba(var(--gold-rgb), 0.1);
```

---

## 6. 배경 레이어 구조

```
z-index 999  │ nav (position: fixed)
             │
z-index 200  │ .share-float (플로팅 공유)
             │
z-index  1   │ .wrapper, .guide-section 등 콘텐츠
             │    ↑ 반드시 z-index: 1 이상, position: relative
             │
z-index  0   │ body::before (그래디언트 오버레이 + 색광)
             │ body::after  (스캔라인 텍스처)
             │ #bg-canvas   (파티클)
             │
(없음)        │ body background-image (포스터 이미지)
```

### 배경 수정 시 주의

`body::before` 그래디언트의 색광 색상을 테마 색상(`--crimson`, `--gold`)과 맞출 것:
```css
body::before {
  background:
    radial-gradient(ellipse at 15% 55%, rgba(/* --crimson-rgb */,0.14) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 15%, rgba(/* --gold-rgb */, 0.09)   0%, transparent 50%),
    radial-gradient(ellipse at 55% 88%, rgba(/* --crimson-rgb */,0.16) 0%, transparent 48%),
    rgba(/* 배경색 R,G,B */, 0.88);
}
```

---

## 7. 캐릭터 이미지 크롭 시스템

### 데스크탑 (기본)

```css
.char-img-wrap {
  width: 100px;
  height: 120px;
  overflow: hidden;
}
.char-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;  /* 기본: 상단 중앙 */
}
```

### 모바일 (max-width: 420px)

```css
@media (max-width: 420px) {
  .char-img-wrap {
    width: 100%;
    height: 180px;
  }
  .char-img-wrap img {
    object-fit: contain;      /* 잘리지 않고 전체 표시 */
    object-position: center;
  }
}
```

### 이미지 준비 기준

- 권장: 세로형 이미지, 얼굴이 상단 1/3 위치
- `object-position`은 이미지에 따라 `top center` / `center center` / `bottom center` 조정
- 모바일에서는 `contain`으로 전체 표시하므로 크롭 문제 없음

---

## 8. 스크립트 로딩 순서 (변경 불가)

```html
<!-- index.html body 하단 -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/..."></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.5/..."></script>
<script src="/site.config.js"></script>   <!-- SITE_CONFIG 전역 변수 -->
<script src="/i18n.js"></script>          <!-- LANG_DATA, setLang, applyLang 전역 함수 -->
<script src="/main.js"></script>          <!-- 모든 로직 (위 3개 의존) -->
```

순서 변경 시 `SITE_CONFIG is not defined` 또는 `tmImage is not defined` 오류 발생.

---

## 9. 콘텐츠 교체 후 검증 절차

### Step 1. 전수 검색으로 잔존 콘텐츠 확인

```bash
# 이전 작품명으로 검색 (예: 귀멸의 칼날 → 체인소맨 교체 시)
grep -ri "귀멸\|鬼滅\|상현\|Upper Moon\|Demon Slayer\|吾峠\|코쿠시보\|도우마\|아카자" \
  --include="*.html" --include="*.js" --include="*.json" --include="*.css" .

# 결과: 0건이어야 함 (.claude/ 디렉토리 제외)
```

### Step 2. 확인 파일 목록

```
✅ site.config.js   — characters, characterCards, guide, footer
✅ i18n.js          — ko/en 양쪽 모두 (특히 char.*, guide.uppermoon.*, about.faq.a5, contact.faq.a6)
✅ about.html       — data-i18n 폴백 텍스트 (q5, a5)
✅ contact.html     — data-i18n 폴백 텍스트 (a6)
✅ privacy.html     — data-i18n 폴백 텍스트 (s1.p-html)
✅ manifest.json    — name, short_name, description, screenshots.label
✅ index.html       — SVG #result-eye-symbol 초기값
```

### Step 3. 기능 검증

```
✅ 웹캠 탭 동작 (start → snap → 결과 표시)
✅ 업로드 탭 동작 (파일 선택 → 결과 표시)
✅ 언어 전환 (KO ↔ EN) — 모든 텍스트 바뀌는지
✅ SNS 공유 버튼 동작
✅ 모바일 레이아웃 (Chrome DevTools)
```

---

## 10. 시행착오에서 배운 교훈

### 교훈 1: manifest.json은 절대 자동 업데이트 안 됨

site.config.js 수정이 manifest.json에 반영되지 않음. 매 프로젝트마다 수동 수정 필수.
특히 `screenshots[0].src`와 `screenshots[0].label`을 놓치기 쉬움.

### 교훈 2: i18n.js ko/en 양쪽 모두 업데이트

한국어만 수정하고 영어를 놓치는 경우가 많음. 영어 모드로 전환해서 반드시 확인.
반대로 영어만 수정하고 한국어를 놓치는 경우도 있음.

### 교훈 3: about.html의 FAQ a5 / contact.html의 FAQ a6

이 두 곳은 거의 모든 프로젝트에서 이전 작품명이 남아 있음.
- about.html a5: `"[작품명]의 모든 저작권은 원작자 [이름] 및 [출판사]에 귀속됩니다"`
- contact.html a6: `"[작품명] 이미지·콘텐츠 관련 저작권 문제...공식 저작권자([이름]/[출판사])"`

### 교훈 4: privacy.html의 s1.p-html

영어 버전(`privacy.s1.p-html` EN)에 "The **[작품명]** Lookalike service..." 가 있음.
i18n.js에서 EN 섹션까지 수정 확인 필요.

### 교훈 5: 캐릭터 이미지 모바일 크롭

데스크탑에서만 테스트하면 모바일에서 이미지가 잘려 보일 수 있음.
모바일(`max-width: 420px`)에서는 `object-fit: contain`이므로 전체가 보임.
데스크탑에서는 `object-fit: cover` + `object-position: top center`로 상단 기준 크롭.

### 교훈 6: index.html SVG 눈 심볼

HTML에 초기값으로 `上弦` 같은 이전 작품 기호가 하드코딩될 수 있음.
`main.js`의 `renderResultLabels()`가 `site.config.js`의 `result.eyeSymbol`로 덮어쓰지만,
HTML 초기값도 맞춰놓는 것이 올바름.

### 교훈 7: body::before 색광은 RGB 값 직접 입력

CSS 변수를 `body::before`에 사용할 수 없는 경우가 있음 (pseudo-element + CSS variable 충돌).
색광 `rgba()` 안에 RGB 값을 직접 넣어야 함:
```css
/* ❌ 동작 안 할 수 있음 */
rgba(var(--crimson-rgb), 0.14)

/* ✅ 안전한 방법 */
rgba(139, 92, 246, 0.14)
```

---

## 11. 새 프로젝트 시작 체크리스트 (AI용)

작업 시작 시 이 순서대로 진행:

```
[ ] 1. site.config.js 전체 교체 (새 콘텐츠로)
[ ] 2. images/ 폴더 교체 (새 캐릭터 이미지 + 배경 포스터)
[ ] 3. style.css body background-image 경로 수정
[ ] 4. style.css body::before 색광 색상을 새 테마에 맞게 수정
[ ] 5. i18n.js LANG_DATA.ko + LANG_DATA.en 전체 교체
[ ] 6. about.html data-i18n 폴백 텍스트 수정 (faq.q5, faq.a5 집중 확인)
[ ] 7. contact.html data-i18n 폴백 텍스트 수정 (faq.a6 집중 확인)
[ ] 8. privacy.html data-i18n 폴백 텍스트 수정 (s1.p-html 집중 확인)
[ ] 9. manifest.json 수정 (name, short_name, description, screenshots, theme_color)
[ ] 10. index.html SVG #result-eye-symbol 초기값 수정
[ ] 11. 모든 HTML 파일 트래킹 ID 교체 (GA, Clarity, Adsense)
[ ] 12. 전수 검색: 이전 작품명 0건 확인
[ ] 13. ko/en 양쪽 언어 모드에서 텍스트 확인
```

---

## 12. 자주 사용하는 검색 패턴

### 잔존 콘텐츠 검색

```bash
# 특정 단어 전체 검색
grep -rn "찾을단어" --include="*.js" --include="*.html" --include="*.json" .

# 여러 패턴 동시 검색
grep -rni "귀멸\|demon.slayer\|상현\|上弦" --include="*.html" --include="*.js" .

# .claude 디렉토리 제외
grep -rni "검색어" --exclude-dir=".claude" --include="*.html" --include="*.js" .
```

### 특정 파일에서 수정 위치 찾기

```bash
# i18n.js에서 특정 키 찾기
grep -n "about.faq.a5" i18n.js

# manifest.json 내용 확인
cat manifest.json
```

---

*이 문서는 `/home/user/bspb4` 프로젝트(체인소맨 닮은꼴 분석기)의 실제 구현을 기반으로 작성되었습니다.*
*새 프로젝트 시작 전 반드시 이 문서를 먼저 읽고 체크리스트를 따르세요.*
