# 애니메이션 닮은꼴 AI 분석기 — 사용자 가이드

> 이 문서는 이 템플릿으로 **새로운 닮은꼴 분석 웹페이지를 만들 때** 필요한 모든 것을 담았습니다.
> 코딩을 잘 몰라도 이 가이드만 따라 하면 완성도 높은 웹페이지를 만들 수 있습니다.

---

## 목차

1. [이 템플릿이 뭔가요?](#1-이-템플릿이-뭔가요)
2. [파일 구조 한눈에 보기](#2-파일-구조-한눈에-보기)
3. [새 프로젝트 시작하기 — 단계별 가이드](#3-새-프로젝트-시작하기--단계별-가이드)
4. [배경 이미지 삽입하기](#4-배경-이미지-삽입하기)
5. [테마 색상 바꾸기](#5-테마-색상-바꾸기)
6. [캐릭터 이미지 — 모바일·PC 모두 잘 나오게](#6-캐릭터-이미지--모바일pc-모두-잘-나오게)
7. [한국어·영어 번역 설정하기](#7-한국어영어-번역-설정하기)
8. [이전 컨텐츠가 남아있지 않게 — 최종 체크리스트](#8-이전-컨텐츠가-남아있지-않게--최종-체크리스트)
9. [Teachable Machine AI 모델 연결하기](#9-teachable-machine-ai-모델-연결하기)
10. [트래킹 코드 교체하기 (GA, Clarity, Adsense)](#10-트래킹-코드-교체하기-ga-clarity-adsense)
11. [배포 전 최종 점검](#11-배포-전-최종-점검)
12. [자주 하는 실수와 해결법](#12-자주-하는-실수와-해결법)
13. [디자인 팁 — 콘텐츠 분위기에 맞게 꾸미기](#13-디자인-팁--콘텐츠-분위기에-맞게-꾸미기)

---

## 1. 이 템플릿이 뭔가요?

사용자의 얼굴 사진을 찍거나 업로드하면 **"당신은 어떤 캐릭터와 닮았나요?"** 라고 AI가 분석해주는 웹페이지 템플릿입니다.

**핵심 특징:**
- 카메라/이미지 업로드 → AI 분석 → 결과 표시
- 한국어·영어 전환 버튼
- SNS 공유 기능
- 모바일·PC 모두 지원
- 개인정보 안전 (사진이 서버에 전송되지 않음)

**무엇을 바꾸면 새 사이트가 되나요?**
> `site.config.js` 파일 하나만 수정하면 됩니다. 나머지 파일(main.js, style.css, index.html)은 건드리지 않아도 됩니다.

---

## 2. 파일 구조 한눈에 보기

```
프로젝트 폴더/
│
├── site.config.js    ← ★ 이 파일만 수정하면 됩니다!
│
├── index.html        ← 메인 페이지 (뼈대만, 내용은 JS가 채움)
├── main.js           ← 모든 동작 로직 (건드리지 않아도 됨)
├── style.css         ← 디자인 (배경 이미지 경로만 수정)
├── i18n.js           ← 한/영 번역 데이터 (서브페이지용)
│
├── about.html        ← 소개 페이지
├── contact.html      ← 문의 페이지
├── privacy.html      ← 개인정보처리방침
│
├── manifest.json     ← PWA 앱 정보
├── firebase.json     ← 배포 설정
│
└── images/
    ├── 캐릭터1.png
    ├── 캐릭터2.png
    └── 배경포스터.jpg    ← 웹페이지 배경 이미지
```

---

## 3. 새 프로젝트 시작하기 — 단계별 가이드

### Step 1. 이 프로젝트 폴더를 통째로 복사

새 폴더에 모든 파일을 복사합니다.

### Step 2. `images/` 폴더 교체

- 기존 캐릭터 이미지 삭제
- 새 캐릭터 이미지 넣기 (권장: PNG, 정사각형 또는 세로형)
- 배경으로 쓸 포스터 이미지 넣기 (권장: JPG, 1920×1080 이상)

### Step 3. `site.config.js` 수정

아래 순서대로 수정합니다:

```
1) siteUrl       → 내 사이트 주소
2) theme         → 색상 (아래 '테마 색상 바꾸기' 참고)
3) modelUrl      → Teachable Machine 모델 URL
4) nav.logo      → 네비게이션 로고 텍스트
5) header        → 제목, 서브타이틀, 배지 이름
6) characters[]  → 캐릭터 정보 (AI 클래스명 필수!)
7) characterCards[] → 캐릭터 카드 상세 정보
8) seo           → 검색 최적화 정보
9) share         → SNS 공유 텍스트
10) guide        → 이용방법, 작품소개, FAQ 텍스트
11) footer       → 저작권 정보
```

### Step 4. `style.css` 배경 이미지 경로 수정

```css
body {
  background-image: url('/images/여기를_포스터파일명.jpg');
}
```

### Step 5. `i18n.js` 서브페이지 번역 수정

about.html, privacy.html, contact.html에 표시되는 텍스트를 수정합니다.
(자세한 내용은 [7장 참고](#7-한국어영어-번역-설정하기))

### Step 6. `manifest.json` 수정

```json
{
  "name": "새 사이트 이름",
  "short_name": "짧은이름",
  "description": "설명"
}
```

### Step 7. HTML 파일 트래킹 ID 교체

- `index.html`, `about.html`, `contact.html`, `privacy.html`에서
  Google Analytics ID, Clarity ID, Adsense ID를 내 것으로 교체

---

## 4. 배경 이미지 삽입하기

웹페이지 전체 배경에 포스터 이미지를 넣는 방법입니다. 단순히 이미지를 배경으로 넣는 것이 아니라 **3개의 레이어**가 겹쳐서 분위기를 만듭니다.

### 레이어 구조 설명

```
┌──────────────────────────────────────┐
│  Layer 3: 스캔라인 (아주 미세한 가로줄) │  ← 사이버펑크 질감
├──────────────────────────────────────┤
│  Layer 2: 어두운 오버레이 + 색광      │  ← 분위기 조성
├──────────────────────────────────────┤
│  Layer 1: 포스터 이미지               │  ← 배경 사진
└──────────────────────────────────────┘
```

### style.css 수정 위치

**Layer 1 — 배경 이미지** (`body` 스타일):
```css
body {
  background-image: url('/images/포스터파일명.jpg');  /* ← 이것만 바꾸면 됨 */
  background-size: cover;           /* 화면에 꽉 차게 */
  background-position: center top;  /* 이미지 상단 기준 배치 */
  background-attachment: fixed;     /* 스크롤해도 배경 고정 */
}
```

**Layer 2 — 오버레이 + 색광** (`body::before` 스타일):
```css
body::before {
  background:
    radial-gradient(ellipse at 15% 55%, rgba(R,G,B, 0.14) 0%, transparent 55%), /* 색광 1 */
    radial-gradient(ellipse at 85% 15%, rgba(R,G,B, 0.09) 0%, transparent 50%), /* 색광 2 */
    radial-gradient(ellipse at 55% 88%, rgba(R,G,B, 0.16) 0%, transparent 48%), /* 색광 3 */
    rgba(5, 2, 16, 0.88);  /* ← 전체 어두운 덮개 (숫자 높을수록 더 어둡게) */
}
```

**색광 커스터마이징 방법:**
- `rgba(R,G,B, 농도)` — R,G,B는 색상의 RGB 값, 농도는 0~1 사이
- 분위기에 맞게 색광 색상을 테마 색과 맞추면 좋습니다
- 예시: 빨간 테마라면 `rgba(220, 38, 38, 0.15)` (빨간 색광)

**오버레이 농도 조절:**
```css
rgba(5, 2, 16, 0.88)  /* 0.88 → 88% 어두움 */
rgba(5, 2, 16, 0.75)  /* 0.75 → 75% 어두움 (이미지 더 잘 보임) */
rgba(5, 2, 16, 0.95)  /* 0.95 → 95% 어두움 (이미지 거의 안 보임) */
```

**Layer 3 — 스캔라인** (`body::after` 스타일):
```css
body::after {
  background: repeating-linear-gradient(
    0deg,
    transparent 0px, transparent 2px,
    rgba(0,0,0,0.022) 2px, rgba(0,0,0,0.022) 4px
  );
}
```
> 이 레이어는 건드리지 않아도 됩니다. 미세한 가로줄 텍스처로 사이버펑크 느낌을 줍니다.

### 배경 이미지 선택 팁

- **좋은 이미지**: 인물이 한쪽에 치우쳐 있고, 다른 쪽은 어두운 배경인 포스터
- **피해야 할 이미지**: 너무 밝거나 알록달록한 이미지 (텍스트가 안 보임)
- **권장 크기**: 1920×1080px 이상
- 오버레이 농도(`0.88`)를 조절해서 이미지와 텍스트의 균형을 맞추세요

---

## 5. 테마 색상 바꾸기

`site.config.js`의 `theme` 섹션에서 색상을 설정합니다.

```javascript
theme: {
  primary:     '#8b5cf6',           // 주요 강조색 (버튼, 테두리, 하이라이트)
  primaryDark: '#5b21b6',           // 주요 강조색 어두운 버전
  gold:        '#22d3ee',           // 보조 강조색 (점수, 별점, 특수 텍스트)
  accent:      '#0d0520',           // 배경 악센트 색
  bg:          '#050210',           // 페이지 전체 배경색 (가장 어두운 색)
  cardBg:      'rgba(10,4,28,0.93)' // 카드 배경색 (약간 투명)
}
```

### 작품 분위기별 색상 예시

| 분위기 | primary | gold | bg |
|--------|---------|------|-----|
| 귀멸의 칼날 (진홍) | `#c0392b` | `#f1c40f` | `#05050f` |
| 체인소맨 (퍼플/시안) | `#8b5cf6` | `#22d3ee` | `#050210` |
| 나루토 (주황) | `#e67e22` | `#f39c12` | `#0f0800` |
| 블리치 (흑백/파랑) | `#3b82f6` | `#93c5fd` | `#050510` |
| 진격의 거인 (갈색/초록) | `#16a34a` | `#a3e635` | `#050a05` |

### 색상 적용 원리

설정한 색상은 자동으로 CSS 변수로 변환됩니다:
- `primary` → `--crimson` (버튼 색상, 테두리 등)
- `gold` → `--gold` (점수, 강조 텍스트 등)
- CSS에서 `rgba(var(--crimson-rgb), 0.3)` 처럼 투명도와 함께 사용됨

> 색상 하나 바꾸면 사이트 전체 분위기가 바뀝니다!

---

## 6. 캐릭터 이미지 — 모바일·PC 모두 잘 나오게

캐릭터 이미지 설정에서 가장 많이 실수하는 부분입니다.

### 이미지 표시 방식

캐릭터 카드의 이미지는 **고정된 박스 안에 이미지를 끼워 넣는 방식**입니다.

```
PC: [100px × 120px 박스] → 이미지가 박스에 맞게 잘림 (object-fit: cover)
모바일: [전체너비 × 180px 박스] → 이미지 전체가 보임 (object-fit: contain)
```

### 이미지 준비 가이드

**권장 이미지 규격:**
- 파일 형식: PNG (배경 투명 가능) 또는 JPG
- 크기: 최소 400×500px 이상 (세로형)
- 캐릭터 위치: **상단 중앙** (PC에서 위에서부터 잘리기 때문)

**잘되는 이미지 vs 잘 안 되는 이미지:**
```
✅ 좋음: 캐릭터 얼굴이 이미지 상단에 위치
         배경이 단순함
         세로로 긴 이미지

❌ 나쁨: 캐릭터 전신이 이미지 하단에 위치 (PC에서 발만 나옴)
         배경이 복잡함
         가로로 넓은 이미지
```

### CSS 확인 포인트

`style.css`에서 아래 부분을 찾아 조정:
```css
.char-img-wrap img {
  object-fit: cover;
  object-position: top center;  /* 이미지를 위에서부터 자름 */
}
```

얼굴이 중간에 있는 이미지라면:
```css
object-position: center center;  /* 이미지를 가운데서 자름 */
```

얼굴이 아래에 있는 이미지라면:
```css
object-position: bottom center;  /* 이미지를 아래서부터 자름 */
```

### site.config.js 이미지 경로 설정

```javascript
characterCards: [
  {
    id: 'denji',
    name: { ko: '덴지', en: 'Denji' },
    image: '/images/denji.png',      // ← 실제 파일명과 일치해야 함
    // imageWebp: '/images/denji.webp',  // WebP 버전 있으면 추가 (선택)
    ...
  }
]
```

> **주의**: 파일명 대소문자를 정확히 맞춰야 합니다. `Denji.png` ≠ `denji.png`

---

## 7. 한국어·영어 번역 설정하기

이 템플릿은 **두 가지 방식**으로 번역이 관리됩니다.

### 방식 1: `site.config.js` — 메인 페이지(index.html)

`{ko: '한국어', en: 'English'}` 형태로 작성합니다.

```javascript
header: {
  titleJp: { ko: '체인소맨\n캐릭터 닮은꼴', en: 'Chainsaw Man\nLookalike' },
  tagline: { ko: '당신은 어떤 캐릭터를 닮았을까?', en: 'Which character are you?' },
}
```

언어 버튼을 클릭하면 자동으로 해당 언어의 텍스트가 표시됩니다.

### 방식 2: `i18n.js` — 서브페이지(about, privacy, contact)

`LANG_DATA.ko`와 `LANG_DATA.en` 안에 키-값으로 작성합니다.

```javascript
const LANG_DATA = {
  ko: {
    'about.faq.q5': 'Q. 이 서비스는 공식 체인소맨 제품인가요?',
    // ...
  },
  en: {
    'about.faq.q5': 'Q. Is this an official Chainsaw Man product?',
    // ...
  }
}
```

HTML 파일에서는 `data-i18n` 속성으로 연결:
```html
<h3 data-i18n="about.faq.q5">Q. 이 서비스는 공식 체인소맨 제품인가요?</h3>
```

### ⚠️ 중요: HTML 파일의 폴백 텍스트도 수정해야 함!

`data-i18n` 속성이 있어도 **HTML 태그 안의 텍스트도 직접 수정**해야 합니다.
페이지가 처음 로드될 때 JS가 실행되기 전 잠깐 보이거나, 검색엔진이 이 텍스트를 읽기 때문입니다.

```html
<!-- ❌ 잘못된 예: i18n.js만 수정하고 HTML 내용은 안 바꾼 경우 -->
<h3 data-i18n="about.faq.q5">Q. 이 서비스는 공식 귀멸의 칼날 제품인가요?</h3>

<!-- ✅ 올바른 예: HTML 내용도 같이 수정 -->
<h3 data-i18n="about.faq.q5">Q. 이 서비스는 공식 체인소맨 제품인가요?</h3>
```

---

## 8. 이전 컨텐츠가 남아있지 않게 — 최종 체크리스트

새 사이트를 만들 때 **이전 작품 이름이나 캐릭터 이름이 어딘가에 숨어있는 경우**가 매우 흔합니다.
아래 체크리스트를 모두 확인하세요.

### 파일별 확인 목록

**`site.config.js`**
- [ ] `siteUrl` 새 주소로 변경
- [ ] `theme` 색상 변경
- [ ] `modelUrl` 새 모델 URL로 변경
- [ ] `nav.logo` 변경
- [ ] `header` 제목/서브타이틀/배지 전체 변경
- [ ] `characters[]` 모든 캐릭터 정보 변경 (modelClass 포함!)
- [ ] `characterCards[]` 모든 카드 정보와 이미지 경로 변경
- [ ] `seo.pageTitle` 변경
- [ ] `seo.description` 변경
- [ ] `seo.keywords` 변경
- [ ] `seo.ogTitle`, `seo.ogDescription` 변경
- [ ] `seo.ogImage` 변경 (새 캐릭터 이미지 URL)
- [ ] `share.hashtags` 변경
- [ ] `share.resultText` 변경 (작품명 포함 여부 확인)
- [ ] `guide` 섹션 전체 확인 (howtoTitle, aboutTitle, FAQ 등)
- [ ] `footer.copyright` 변경 (저작권자 이름!)

**`style.css`**
- [ ] `body background-image` 새 포스터 이미지로 변경
- [ ] `body::before` 색광 색상이 새 테마에 맞는지 확인

**`manifest.json`**
- [ ] `name` 변경
- [ ] `short_name` 변경
- [ ] `description` 변경
- [ ] `screenshots[0].label` 변경
- [ ] `screenshots[0].src` → 새 스크린샷 이미지로 변경
- [ ] `theme_color` 새 테마 색으로 변경

**`index.html`**
- [ ] Google Analytics ID 변경 (`G-XXXXXXXXXX`)
- [ ] Microsoft Clarity ID 변경
- [ ] Google Adsense ID 변경
- [ ] SVG 눈 심볼 텍스트 확인 (초기값, site.config.js `result.eyeSymbol`로 자동 교체됨)

**`about.html`, `contact.html`, `privacy.html`**
- [ ] Google Analytics ID 변경
- [ ] Microsoft Clarity ID 변경
- [ ] `data-i18n` 있는 태그들의 HTML 폴백 텍스트 변경
- [ ] 저작권자 이름/출판사 확인 (이전 작품 저작권자 이름이 남아있기 쉬움!)
- [ ] FAQ 내용에서 이전 작품명 확인

**`i18n.js`**
- [ ] `privacy.s1.p-html` (ko, en) — 서비스 이름
- [ ] `about.faq.q5`, `about.faq.a5` — 공식 제품 여부 질문
- [ ] `contact.faq.a6` — 저작권 관련 답변
- [ ] `guide.uppermoon.*` — 작품 소개 섹션
- [ ] `guide.char-title` — 캐릭터 가이드 제목
- [ ] 모든 `char.*.rank`, `char.*.desc-html` — 캐릭터 설명

**`images/` 폴더**
- [ ] 이전 작품 캐릭터 이미지 모두 삭제
- [ ] 이전 배경 포스터 삭제 (또는 덮어쓰기)
- [ ] 새 이미지 파일명이 site.config.js의 경로와 일치하는지 확인

### 숨어있기 쉬운 곳 BEST 5

1. **`contact.html`의 저작권 FAQ 답변** — "귀멸의 칼날 이미지 관련 저작권..."
2. **`about.html`의 공식 제품 여부 FAQ** — "귀멸의 칼날의 모든 저작권은..."
3. **`manifest.json`의 screenshots label** — "귀멸의 칼날 상현 닮은꼴 AI 분석기"
4. **`i18n.js`의 캐릭터 설명** — 이전 캐릭터 설명이 남아있는 경우
5. **`site.config.js`의 footer.copyright** — 이전 작품 저작권자 이름

---

## 9. Teachable Machine AI 모델 연결하기

### 모델 URL 구조

Teachable Machine에서 모델을 학습시키고 배포하면 이런 URL이 생깁니다:
```
https://teachablemachine.withgoogle.com/models/r86spDTR3/
```

이 URL을 `site.config.js`에 넣으세요:
```javascript
modelUrl: 'https://teachablemachine.withgoogle.com/models/r86spDTR3/',
```

> **주의**: URL 끝에 `/` (슬래시)가 있어야 합니다!

### 클래스명 맞추기

Teachable Machine에서 학습시킬 때 설정한 **클래스 이름**을 site.config.js의 `characters[]`에서 `modelClass` 값으로 정확히 입력해야 합니다.

```javascript
characters: [
  {
    modelClass: 'Denji',   // ← Teachable Machine에서 설정한 클래스 이름과 정확히 일치!
    name: { ko: '덴지', en: 'Denji' },
    ...
  }
]
```

클래스 이름이 다르면 AI 결과가 표시되지 않습니다.

### 좋은 AI 모델 만드는 팁

- 클래스당 이미지 최소 50장 이상
- 다양한 각도/표정의 이미지 포함
- 캐릭터 얼굴이 명확하게 보이는 이미지 사용
- 배경이 단순한 이미지가 더 좋은 결과

---

## 10. 트래킹 코드 교체하기 (GA, Clarity, Adsense)

각 HTML 파일 상단에 있는 트래킹 코드를 내 계정 ID로 교체합니다.

### 교체해야 할 ID 위치

| 파일 | GA ID | Clarity ID | Adsense |
|------|-------|------------|---------|
| index.html | `G-XXXXXXXXXX` | `xxxxxxxxx` | `ca-pub-XXXXXXXXXX` |
| about.html | `G-XXXXXXXXXX` | `xxxxxxxxx` | `ca-pub-XXXXXXXXXX` |
| contact.html | `G-XXXXXXXXXX` | `xxxxxxxxx` | `ca-pub-XXXXXXXXXX` |
| privacy.html | `G-XXXXXXXXXX` | `xxxxxxxxx` | `ca-pub-XXXXXXXXXX` |

> **팁**: 4개 파일 모두 교체해야 합니다. 서브페이지(about 등)에만 방문해도 트래킹이 되려면 모든 파일에 넣어야 합니다.

### 각 서비스 가입 방법

- **Google Analytics**: analytics.google.com
- **Microsoft Clarity**: clarity.microsoft.com (무료 히트맵/세션 녹화)
- **Google Adsense**: adsense.google.com (광고 수익)
- **Disqus**: disqus.com (댓글 시스템, 무료)

---

## 11. 배포 전 최종 점검

### 기능 테스트

- [ ] 웹캠 탭: 카메라 시작 → 스냅샷 → 결과 표시
- [ ] 업로드 탭: 이미지 드래그앤드롭 또는 클릭 업로드 → 결과 표시
- [ ] 결과 표시 후 SNS 공유 버튼 동작
- [ ] 한국어/영어 전환 버튼 동작
- [ ] 모바일에서 카메라 동작 (HTTPS 환경 필수!)

### 시각 점검

- [ ] 배경 이미지가 잘 보이고 텍스트와 겹치지 않음
- [ ] 캐릭터 이미지가 잘림 없이 표시됨
- [ ] 모바일에서 레이아웃 깨지지 않음
- [ ] 색상이 전체적으로 통일감 있음

### SEO/메타 점검

- [ ] og:title, og:description, og:image 설정 확인
- [ ] 사이트맵/robots.txt의 URL이 새 주소로 변경됨

---

## 12. 자주 하는 실수와 해결법

### ❌ 실수 1: 캐릭터 이미지가 PC에서 얼굴이 잘림

**원인**: 이미지에서 얼굴이 중앙 아래에 있는데 `object-position: top center`로 설정됨

**해결**: `style.css`에서 해당 캐릭터 이미지의 `object-position`을 `center center`로 변경

---

### ❌ 실수 2: 언어 전환해도 일부 텍스트가 안 바뀜

**원인**: `i18n.js`만 수정하고 HTML 파일의 폴백 텍스트는 안 바꾼 경우
또는 `site.config.js`에 `{ko:'...', en:'...'}` 형태로 안 쓴 경우

**해결**: HTML 파일의 `data-i18n` 태그 안 텍스트도 함께 수정

---

### ❌ 실수 3: AI 분석 결과에 이름이 안 나옴

**원인**: `characters[]`의 `modelClass`가 Teachable Machine 클래스명과 다름

**해결**: Teachable Machine 모델의 metadata.json 파일을 열어 클래스명을 복사해서 정확히 입력

---

### ❌ 실수 4: 모바일에서 카메라가 안 됨

**원인**: HTTP 환경에서는 카메라 API가 차단됨

**해결**: 반드시 HTTPS 도메인에서 서비스해야 함 (Cloudflare Pages, Firebase Hosting 등은 자동 HTTPS)

---

### ❌ 실수 5: 배경 이미지가 안 보임

**원인**: 파일 경로 오류, 또는 오버레이가 너무 어두움

**해결**:
1. 이미지 파일명과 CSS 경로가 정확히 일치하는지 확인
2. `rgba(5, 2, 16, 0.88)`의 `0.88`을 `0.70`으로 낮춰 이미지가 더 보이게 조정

---

### ❌ 실수 6: 이전 작품명이 어딘가에 계속 나옴

**원인**: 파일이 여러 개이고 같은 내용이 중복으로 저장되기 때문

**해결**: Claude Code에게 `"이전 작품명(예: 귀멸의 칼날)이라는 단어가 있는 모든 파일 찾아서 다 바꿔줘"` 요청

---

## 13. 디자인 팁 — 콘텐츠 분위기에 맞게 꾸미기

### 작품 분위기를 색상에 담기

색상을 정할 때 단순히 좋아하는 색보다 **작품의 분위기와 주요 색상**을 참고하면 좋습니다.

```
귀멸의 칼날 → 귀신의 눈색인 진홍 + 달빛의 금색
체인소맨   → 악마와 어둠의 퍼플 + 기계의 시안
진격의 거인 → 진지함의 갈색 + 거인의 피 빨간색
원피스     → 바다의 파란색 + 루피의 빨간색
나루토     → 에너지의 주황 + 닌자의 파란색
```

### 배경 이미지와 오버레이 색광 맞추기

배경 포스터에 이미 특정 색이 강하게 있다면, `body::before`의 색광도 그 색과 맞춰줍니다:
- 포스터가 빨간 분위기 → 색광을 빨간색 계열로
- 포스터가 파란 분위기 → 색광을 파란색 계열로
- 오버레이와 테마 색을 일치시키면 자연스러운 통일감이 생깁니다

### 폰트 선택

현재 사용 중인 폰트: **Noto Sans KR** (본문) + **Orbitron** (영문 강조)

Orbitron은 사이버펑크 느낌의 폰트라 체인소맨에 잘 맞습니다.
다른 분위기라면 Google Fonts에서 교체 가능:
- 판타지/중세 → **Cinzel**
- 귀여운/팝 → **Nunito**
- 모던/미래 → **Space Grotesk**

`index.html`의 `<link>` 태그와 `style.css`의 `font-family` 두 곳을 같이 바꾸면 됩니다.

---

*이 가이드는 실제 제작 과정에서 겪은 시행착오를 바탕으로 작성되었습니다.*
*Claude Code에게 작업을 요청할 때는 함께 있는 `README_AI.md`를 참고하도록 하세요.*
