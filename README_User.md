# 🎯 애니메이션 닮은꼴 AI 분석기 — 처음 하는 사람도 OK! 완전 가이드

> 코딩을 전혀 몰라도 괜찮아요!
> 이 가이드는 **초등학생도 따라할 수 있을 만큼** 쉽고 자세하게 쓰여 있습니다.
> 차근차근 따라오기만 하면 멋진 웹사이트를 만들 수 있어요! 💪

---

## 📚 목차

1. [이게 뭔가요? — 쉬운 설명](#1-이게-뭔가요--쉬운-설명)
2. [파일들이 하는 일 — 한눈에 보기](#2-파일들이-하는-일--한눈에-보기)
3. [새 사이트 만들기 — 딱 7단계](#3-새-사이트-만들기--딱-7단계)
4. [site.config.js 수정하기 — 핵심 작업](#4-siteconfigjs-수정하기--핵심-작업)
5. [배경 이미지 넣기 — 분위기 만들기](#5-배경-이미지-넣기--분위기-만들기)
6. [색상 테마 바꾸기 — 작품 분위기로](#6-색상-테마-바꾸기--작품-분위기로)
7. [캐릭터 이미지 — 모바일·PC 모두 예쁘게](#7-캐릭터-이미지--모바일pc-모두-예쁘게)
8. [한국어·영어 설정하기](#8-한국어영어-설정하기)
9. [AI 모델 연결하기 (Teachable Machine)](#9-ai-모델-연결하기-teachable-machine)
10. [문의 양식 이메일 설정 (Formspree)](#10-문의-양식-이메일-설정-formspree)
11. [방문자 분석 코드 넣기 (GA·Clarity·Adsense)](#11-방문자-분석-코드-넣기-gaclarityadsense)
12. [사이트맵·로봇 설정하기](#12-사이트맵로봇-설정하기)
13. [이전 내용이 안 남게 — 전체 점검 목록](#13-이전-내용이-안-남게--전체-점검-목록)
14. [배포하기 — 인터넷에 올리기](#14-배포하기--인터넷에-올리기)
15. [이런 문제가 생겼어요! — 해결 방법](#15-이런-문제가-생겼어요--해결-방법)
16. [디자인 팁 — 더 멋지게 만들기](#16-디자인-팁--더-멋지게-만들기)
17. [Claude Code에게 맡기는 법](#17-claude-code에게-맡기는-법)

---

## 1. 이게 뭔가요? — 쉬운 설명

### 🤔 한 줄 설명

**"카메라나 사진으로 얼굴을 찍으면 AI가 어떤 애니 캐릭터를 닮았는지 알려주는 웹사이트"**를 만드는 틀(템플릿)입니다.

### 💡 레고 블록으로 비유하면

> 이미 조립된 레고 모형이 있어요. 블록들을 다 바꿀 필요 없이, **색만 바꾸고 스티커만 교체**하면 완전히 다른 모형이 돼요!
>
> 이 템플릿도 마찬가지예요. 설정 파일 하나(`site.config.js`)의 내용만 바꾸면 새 사이트가 됩니다.

### ✨ 이 사이트에는 이런 기능이 있어요

| 기능 | 설명 |
|------|------|
| 📷 카메라 분석 | 웹캠으로 얼굴 촬영 → AI가 즉시 분석 |
| 🖼️ 사진 업로드 | 내 사진 파일을 올리면 분석 |
| 🇰🇷🇺🇸 한/영 전환 | 오른쪽 위 버튼으로 언어 바꾸기 |
| 📱 모바일 지원 | 스마트폰에서도 잘 보임 |
| 📤 SNS 공유 | 결과를 트위터, 페이스북 등에 공유 |
| 💬 댓글 | Disqus 댓글 시스템 (선택사항) |
| 🔒 개인정보 안전 | 사진이 서버로 전송되지 않음 |

### 🛠️ 새 사이트를 만들 때 뭘 바꾸나요?

```
바꿔야 하는 것           바꾸지 않아도 되는 것
─────────────────────   ─────────────────────────────
✏️ 캐릭터 이름·설명       ⚙️ main.js (사이트 작동 엔진)
🎨 색상·테마             ⚙️ index.html 구조 대부분
🖼️ 캐릭터 이미지·배경     ⚙️ 버튼·카메라 등 기본 기능
📝 소개글·FAQ 내용
🤖 AI 모델 주소
```

---

## 2. 파일들이 하는 일 — 한눈에 보기

```
📁 내 프로젝트 폴더/
│
├── 📄 site.config.js    ⭐ 가장 중요! 모든 내용이 여기에
│                           (캐릭터 이름, 색상, AI 모델 주소, 설명글 등)
│
├── 📄 index.html        메인 페이지 뼈대
│                           (내용은 거의 없고, JS가 채워넣음)
├── 📄 main.js           사이트의 두뇌
│                           (카메라, AI 분석, 결과 표시 등 모든 동작)
├── 📄 style.css         디자인 담당
│                           (색상, 폰트, 배치, 배경 이미지)
├── 📄 i18n.js           번역 담당
│                           (소개/문의/개인정보 페이지의 한/영 번역)
│
├── 📄 about.html        "이 서비스는?" 소개 페이지
├── 📄 contact.html      문의하기 페이지
├── 📄 privacy.html      개인정보처리방침 페이지
│
├── 📄 manifest.json     앱 정보
│                           (홈 화면에 추가할 때 보이는 이름·설명)
├── 📄 sitemap.xml       검색엔진 지도
│                           (구글이 어떤 페이지가 있는지 파악)
├── 📄 robots.txt        크롤러 안내판
│                           (구글봇·AI봇 등이 어디까지 들어올 수 있는지)
├── 📄 firebase.json     배포 설정
│                           (Firebase로 올릴 때 어떤 파일을 포함할지)
│
└── 📁 images/
    ├── 🖼️ 캐릭터1.png    캐릭터 이미지들
    ├── 🖼️ 캐릭터2.png
    └── 🖼️ 배경포스터.jpg  웹페이지 전체 배경 이미지
```

> 💡 **핵심 포인트**: `site.config.js` 하나를 잘 바꾸면 나머지가 자동으로 따라옵니다!

---

## 3. 새 사이트 만들기 — 딱 7단계

### 📋 전체 흐름 한눈에 보기

```
STEP 1 → STEP 2 → STEP 3 → STEP 4 → STEP 5 → STEP 6 → STEP 7
폴더복사  이미지   설정파일   번역     배경CSS   부수파일   배포
         교체     수정       수정     수정      수정
```

---

### STEP 1. 📁 폴더 통째로 복사

이 프로젝트 폴더를 새 폴더로 **전체 복사**합니다.

```
💡 예시:
원본: /projects/chainsaw-man/
복사: /projects/my-new-anime/
```

> ⚠️ 원본을 직접 수정하지 마세요! 복사본을 만들어서 작업하세요.

---

### STEP 2. 🖼️ 이미지 교체

`images/` 폴더 안에 있는 파일들을 새 것으로 바꿉니다.

**지워야 할 것:**
- 이전 캐릭터 이미지들 (예: denji.png, makima.png 등)
- 이전 배경 포스터 (예: reze-poster1.jpg)

**넣어야 할 것:**
- 새 캐릭터 이미지들 (PNG 권장)
- 새 배경 포스터 이미지 (JPG 권장, 가로 1920px 이상)

> 📌 파일 이름 정하는 팁: 영어 소문자로, 띄어쓰기 없이!
> - ✅ `goku.png`, `vegeta.png`, `dragon-poster.jpg`
> - ❌ `손오공.png`, `Goku Character.png`

---

### STEP 3. ✏️ site.config.js 수정

가장 중요한 단계! 이 파일 하나가 사이트의 모든 내용을 결정합니다.
(자세한 내용은 [4장](#4-siteconfigjs-수정하기--핵심-작업)에서!)

---

### STEP 4. 🌐 i18n.js 번역 수정

소개/문의/개인정보 페이지의 한국어·영어 텍스트를 수정합니다.
(자세한 내용은 [8장](#8-한국어영어-설정하기)에서!)

---

### STEP 5. 🎨 style.css 배경 이미지 수정

딱 한 줄만 수정합니다! `style.css` 파일에서:

```css
/* 이 부분 찾기 */
body {
  background-image: url('/images/reze-poster1.jpg');  /* ← 이것만 바꾸면 됨! */
```

`reze-poster1.jpg` 부분을 내 배경 이미지 파일명으로 교체.

---

### STEP 6. 📝 나머지 파일들 수정

- `manifest.json` — 앱 이름, 설명 변경
- `sitemap.xml` — 사이트 주소 변경
- `robots.txt` — 사이트 주소 변경
- `firebase.json` — 이전 이미지 폴더명 변경
- HTML 4개 파일 — 트래킹 ID 교체, 연락 폼 ID 교체

(자세한 내용은 [11~12장](#11-방문자-분석-코드-넣기-gaclarityadsense)에서!)

---

### STEP 7. 🚀 인터넷에 배포

Cloudflare Pages 또는 Firebase Hosting으로 올리기.
(자세한 내용은 [14장](#14-배포하기--인터넷에-올리기)에서!)

---

## 4. site.config.js 수정하기 — 핵심 작업

이 파일은 **레고 설계도**와 같아요. 여기에 있는 내용들이 사이트 전체에 자동으로 반영됩니다.

### 파일 열기

파일을 텍스트 편집기(VS Code 등)로 열면 이런 구조가 보입니다:

```javascript
const SITE_CONFIG = {
  // 여기서 부터 수정 시작!
  siteUrl: '....',
  theme: { ... },
  // 등등...
};
```

### 수정 순서 (위에서 아래로 차례차례)

#### 🔗 1) 사이트 주소

```javascript
siteUrl: 'https://내사이트주소.pages.dev/',
//                                        ↑ 끝에 / (슬래시) 꼭 있어야 해요!
```

#### 🎨 2) 색상 테마

```javascript
theme: {
  primary:     '#c0392b',  // 주요 색상 (버튼, 강조선 등)
  primaryDark: '#922b21',  // 위 색상보다 어두운 버전
  gold:        '#f1c40f',  // 포인트 색상 (점수, 별점)
  accent:      '#1a0505',  // 배경 보조 색상
  bg:          '#05050f',  // 가장 어두운 배경 색상
  cardBg:      'rgba(15,5,5,0.93)',  // 카드 배경색
},
```

> 🎨 색상 코드(#으로 시작하는 것)를 모르면?
> 구글에서 "color picker"라고 검색하면 색상을 골라서 코드를 알려줍니다!

#### 🤖 3) AI 모델 주소

```javascript
modelUrl: 'https://teachablemachine.withgoogle.com/models/여기에_모델ID/',
//                                                                      ↑ 끝에 / 꼭!
```

#### 🏠 4) 네비게이션 로고

```javascript
nav: {
  logo: 'ドラゴンボール',  // 상단 왼쪽에 보이는 로고 텍스트
},
```

#### 📢 5) 헤더 (메인 제목 부분)

```javascript
header: {
  deco:    'DRAGON BALL',  // 제목 위의 작은 영문 장식 텍스트
  titleJp: {
    ko: '드래곤볼\n닮은꼴',   // \n 은 "여기서 줄 바꿔주세요" 라는 뜻
    en: 'Dragon Ball\nLookalike'
  },
  tagline: {
    ko: '당신은 어떤 캐릭터를 닮았나요?',
    en: 'Which character are you?'
  },
  badges: [  // 헤더 아래 작은 이름표들 (보통 6개)
    { ko: '손오공', en: 'Goku' },
    { ko: '베지터', en: 'Vegeta' },
    // ... 계속
  ],
},
```

#### 👁️ 6) 결과 섹션 레이블

```javascript
result: {
  eyeSymbol:   'DBZ',  // 결과 화면의 눈 모양 안에 들어가는 텍스트 (3~4글자)
  label:       { ko: '당신과 닮은 캐릭터', en: 'Your Lookalike' },
  scoreLabel:  { ko: '유사도', en: 'Similarity' },
  allLabel:    { ko: '전체 분석 결과', en: 'All Results' },
  unknownRank: { ko: '???', en: '???' },
  unknownDesc: { ko: '정체불명...', en: 'Unknown...' },
},
```

#### 🧑‍🤝‍🧑 7) 캐릭터 목록 (AI 결과용)

> ⚠️ **중요!** `modelClass`는 Teachable Machine에서 설정한 클래스 이름과 **대소문자까지 완전히 똑같아야** 해요!

```javascript
characters: [
  {
    modelClass: 'Goku',  // ← Teachable Machine 클래스 이름 (정확히!)
    name:  { ko: '손오공', en: 'Goku' },
    rank:  { ko: '전사 · 초사이어인', en: 'Warrior · Super Saiyan' },
    desc:  {
      ko: '지구의 수호자이자 최강의 사이어인...',
      en: 'Earth\'s guardian and the most powerful Saiyan...'
    },
  },
  // 캐릭터 수는 Teachable Machine 클래스 수와 같아야 해요
],
```

#### 🃏 8) 캐릭터 카드 (가이드 섹션용)

```javascript
characterCards: [
  {
    id:       'goku',              // 이미지 파일명 (확장자 제외)
    name:     { ko: '손오공', en: 'Goku' },
    rank:     { ko: '초사이어인', en: 'Super Saiyan' },
    image:    '/images/goku.png',  // 실제 파일 경로 (대소문자 주의!)
    cardDesc: {
      ko: '손오공은 지구를 지키는...',
      en: 'Goku is the protector of Earth...'
    },
  },
],
```

> 📌 `imageWebp`는 선택사항이에요. `.webp` 형식의 이미지가 있으면 추가하면 더 빠르게 로딩되지만, 없어도 됩니다.

#### 🔍 9) SEO (검색엔진 최적화)

검색할 때 내 사이트가 나오게 하는 설정이에요.

```javascript
seo: {
  pageTitle:     '드래곤볼 닮은꼴 | 무료 AI 캐릭터 분석기',
  description:   '드래곤볼 캐릭터 닮은꼴 무료 AI 분석! 손오공·베지터 등 어떤 캐릭터와 닮았는지 즉시 확인',
  keywords:      '드래곤볼, 닮은꼴, AI, 손오공, 베지터, 캐릭터',
  ogTitle:       '드래곤볼 닮은꼴 AI',          // SNS 공유 시 보이는 제목
  ogDescription: '내 얼굴과 닮은 캐릭터는?',     // SNS 공유 시 보이는 설명
  ogImage:       'https://내사이트.pages.dev/images/goku.png',  // SNS 공유 시 미리보기 이미지
  themeColor:    '#05050f',                      // 모바일 브라우저 상단바 색상
  datePublished: '2026-01-01',
  dateModified:  '2026-01-01',
},
```

#### 📤 10) SNS 공유 텍스트

```javascript
share: {
  hashtags: '#드래곤볼 #드래곤볼닮은꼴 #AI분석',
  resultText: function(name, rank, score, url) {
    return '⚡ 드래곤볼 닮은꼴 테스트!\n나는 ' + name + '(' + rank + ')와 ' + score + ' 닮았어!\n' + url;
  },
  defaultText: function(url) {
    return '⚡ 드래곤볼 캐릭터 닮은꼴 AI 테스트!\n너는 어떤 캐릭터랑 닮았어? 👇\n' + url;
  },
  resultCardTitle:  '드래곤볼 닮은꼴 결과',
  resultCardFooter: 'by AI 닮은꼴 분석기',
  scoreLabel: { ko: '유사도', en: 'Similarity' },
},
```

#### 📖 11) 가이드 섹션 텍스트

```javascript
guide: {
  howtoTitle: { ko: '⚡ 이용 방법', en: '⚡ How to Use' },
  howtoSteps: [  // 5단계 설명
    { ko: '카메라 탭을 누르고...', en: 'Click the camera tab...' },
    // 5개 작성 권장
  ],
  aboutTitle: { ko: '🐉 드래곤볼이란?', en: '🐉 About Dragon Ball' },
  aboutParas: [  // 작품 소개 문단들
    { ko: '<p>드래곤볼은...</p>', en: '<p>Dragon Ball is...</p>' },
    // 3개 작성 권장
  ],
  // ... 나머지 항목들
},
```

#### 📌 12) 푸터 (맨 아래 저작권 표시)

```javascript
footer: {
  mainText:  'DRAGON BALL · CHARACTER ANALYZER',
  copyright: '드래곤볼 © 토리야마 아키라 / 集英社',  // 저작권자 정확히!
  poweredBy: 'Powered by Teachable Machine AI',
},
```

---

## 5. 배경 이미지 넣기 — 분위기 만들기

웹사이트 전체 배경에 포스터 이미지가 깔려요. 세 겹의 레이어가 겹쳐서 분위기를 만듭니다.

### 🍰 3층 케이크처럼 겹쳐요

```
╔══════════════════════════════════════╗
║  3층: 스캔라인 텍스처 (미세한 가로줄)  ║  ← 사이버펑크 질감 (그냥 두기!)
╠══════════════════════════════════════╣
║  2층: 어두운 덮개 + 색 빛              ║  ← 분위기 색상 (작품에 맞게 수정)
╠══════════════════════════════════════╣
║  1층: 포스터 이미지                   ║  ← 배경 사진 (수정!)
╚══════════════════════════════════════╝
```

### 1층 수정 — 이미지 파일 경로 바꾸기

`style.css` 파일에서 아래 부분을 찾아서 바꿔요:

```css
body {
  background-color: #05050f;
  background-image: url('/images/reze-poster1.jpg');  /* ← 여기! */
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}
```

`reze-poster1.jpg` → `내 포스터 파일명.jpg` 으로 교체.

### 2층 수정 — 색 빛(색광) 조절하기

같은 `style.css` 파일에서 `body::before` 부분을 찾아요:

```css
body::before {
  background:
    radial-gradient(ellipse at 15% 55%, rgba(빨강,초록,파랑, 0.14) 0%, transparent 55%),
    radial-gradient(ellipse at 85% 15%, rgba(빨강,초록,파랑, 0.09) 0%, transparent 50%),
    radial-gradient(ellipse at 55% 88%, rgba(빨강,초록,파랑, 0.16) 0%, transparent 48%),
    rgba(5, 2, 16, 0.88);  /* ← 마지막 숫자가 어두움 정도 (0.0~1.0) */
}
```

**색광 색상 바꾸는 방법:**

색상의 RGB 값을 넣으면 돼요.
예를 들어 빨간색은 `rgba(220, 38, 38, 0.14)`, 파란색은 `rgba(37, 99, 235, 0.14)`.

> 🔍 RGB 값 알아내기: 구글에 "색상이름 RGB" 검색 (예: "빨간색 RGB")

**어두움 정도 조절:**

```
rgba(5, 2, 16, 0.70)  → 70% 어둡게 → 이미지 잘 보임
rgba(5, 2, 16, 0.88)  → 88% 어둡게 → 현재 기본값
rgba(5, 2, 16, 0.95)  → 95% 어둡게 → 이미지 거의 안 보임
```

### 좋은 배경 이미지 고르는 방법

```
✅ 좋은 이미지:
   - 캐릭터가 한쪽에 있고 반대쪽에 여백이 많음
   - 전체적으로 어두운 분위기
   - 1920×1080px 이상 크기

❌ 피할 이미지:
   - 너무 밝거나 흰 배경
   - 텍스트가 이미 많이 들어간 이미지
   - 1000px 이하의 작은 이미지
```

---

## 6. 색상 테마 바꾸기 — 작품 분위기로

### 🖌️ 색상을 정하는 쉬운 방법

1. 작품에서 가장 자주 보이는 색이 뭔가요?
2. 그 색으로 `primary`를 설정해요
3. 그 색보다 조금 밝은 색으로 `gold`를 설정해요

### 🎨 작품별 추천 색상

| 작품 | primary (주색) | gold (강조색) | bg (배경) |
|------|----------------|---------------|-----------|
| 귀멸의 칼날 | `#c0392b` 진홍 | `#f1c40f` 금 | `#05050f` |
| 체인소맨 | `#8b5cf6` 보라 | `#22d3ee` 하늘 | `#050210` |
| 드래곤볼 | `#e67e22` 주황 | `#f1c40f` 금 | `#0a0500` |
| 나루토 | `#e67e22` 주황 | `#3b82f6` 파랑 | `#050510` |
| 블리치 | `#3b82f6` 파랑 | `#a78bfa` 연보라 | `#050510` |
| 원피스 | `#ef4444` 빨강 | `#fbbf24` 노랑 | `#050510` |
| 진격의 거인 | `#16a34a` 초록 | `#a3e635` 연초록 | `#050a05` |
| 헌터×헌터 | `#7c3aed` 보라 | `#60a5fa` 파랑 | `#050210` |
| 주술회전 | `#1d4ed8` 파랑 | `#a78bfa` 보라 | `#050510` |
| 페어리테일 | `#db2777` 분홍 | `#fbbf24` 금 | `#0a0510` |

> 💡 색상 코드가 뭔지 모르면? → 구글에서 "color picker" 검색 후 원하는 색 고르기!

### 색상이 적용되는 곳

`primary` 색상이 한 번에 적용되는 곳들:
- 버튼 테두리와 빛나는 효과
- 결과 창의 눈 모양 SVG
- 스캔 프레임 테두리
- 별점 강조 효과
- 캐릭터 카드 테두리

---

## 7. 캐릭터 이미지 — 모바일·PC 모두 예쁘게

### 📱💻 PC와 모바일에서 다르게 보여요

```
PC에서:
┌──────────┐
│  [이미지] │ ← 100×120px 상자에 꽉 채워 넣음
│  (잘림)  │   이미지가 상자보다 크면 위에서부터 잘림
└──────────┘

모바일에서:
┌───────────────────┐
│                   │
│    [이미지 전체]   │ ← 이미지 전체가 보임 (잘림 없음)
│                   │
└───────────────────┘
```

### 이미지 준비할 때 주의사항

**PC에서 잘 보이려면:**
- 캐릭터 **얼굴이 이미지 위쪽 1/3**에 위치해야 해요
- 전신 이미지면 PC에서 위에서 잘라내기 때문에 얼굴이 나와야 해요

```
좋은 이미지 예시:
┌──────┐
│ 😊  │  ← 얼굴이 위에 있음 → PC에서 얼굴 보임 ✅
│ 👔  │
│  👖  │
└──────┘

나쁜 이미지 예시:
┌──────┐
│  👔  │  ← PC에서 이 부분만 보임 → 얼굴 안 보임 ❌
│  👖  │
│ 😊  │  ← 얼굴이 아래에 있음
└──────┘
```

**권장 이미지 형식:**
- 파일 형식: PNG (배경 투명하면 더 좋음) 또는 JPG
- 크기: 400×500px 이상 (세로로 긴 것)
- 파일명: 영어 소문자만 사용

### 이미지가 잘려서 이상하면?

`style.css` 파일에서 이 부분을 찾아서:

```css
.char-img-wrap img {
  object-position: top center;  /* ← 이것을 수정 */
}
```

이렇게 바꿔보세요:
- 얼굴이 이미지 위에 있으면: `top center` (기본값)
- 얼굴이 이미지 가운데 있으면: `center center`
- 얼굴이 이미지 아래에 있으면: `bottom center`

---

## 8. 한국어·영어 설정하기

### 📝 두 가지 방법이 있어요

**메인 페이지(index.html):** `site.config.js`에서 설정
**나머지 페이지(about, contact, privacy):** `i18n.js`에서 설정

### site.config.js 방식 (메인 페이지)

이렇게 쌍으로 적어요:

```javascript
{ ko: '한국어 내용', en: 'English content' }
```

### i18n.js 방식 (서브 페이지)

`i18n.js` 파일에서 `ko` 부분과 `en` 부분을 **둘 다** 수정해야 해요.

```javascript
const LANG_DATA = {
  ko: {
    'about.faq.q5': 'Q. 이 서비스는 공식 드래곤볼 제품인가요?',
    'about.faq.a5': '비공식 팬 제작 서비스입니다...',
    // 이 안에 있는 텍스트들을 수정
  },
  en: {
    'about.faq.q5': 'Q. Is this an official Dragon Ball product?',
    'about.faq.a5': 'This is an unofficial fan-made service...',
    // 영어 버전도 반드시 수정!
  }
}
```

### ⚠️ 절대 잊으면 안 되는 것!

HTML 파일(about.html, contact.html, privacy.html)에도 같은 텍스트가 **폴백(fallback)**으로 적혀 있어요. 이것도 바꿔야 해요!

```html
<!-- ❌ 잘못된 예 -->
<!-- i18n.js는 드래곤볼로 바꿨는데, HTML은 그대로임 -->
<h3 data-i18n="about.faq.q5">Q. 이 서비스는 공식 귀멸의 칼날 제품인가요?</h3>

<!-- ✅ 올바른 예 -->
<!-- HTML도 같이 바꿈 -->
<h3 data-i18n="about.faq.q5">Q. 이 서비스는 공식 드래곤볼 제품인가요?</h3>
```

> 🤔 왜 두 군데에 있나요?
> JS가 실행되기 전 잠깐 동안, HTML에 적힌 내용이 먼저 보여요.
> 그리고 구글 같은 검색엔진은 HTML에 적힌 내용을 읽어요.
> 그래서 두 군데 모두 바꿔야 완벽해요!

---

## 9. AI 모델 연결하기 (Teachable Machine)

### 🧠 Teachable Machine이 뭔가요?

구글에서 만든 무료 AI 학습 도구예요.
캐릭터 사진을 많이 넣어주면 "이 얼굴은 이 캐릭터랑 비슷해!" 라고 판단하는 AI를 만들어줘요.

### AI 모델 만드는 방법

1. `teachablemachine.withgoogle.com` 접속
2. "Image Project" → "Standard image model" 선택
3. 각 캐릭터별로 클래스 만들고 이미지 추가
4. "Train Model" 클릭 (학습 시작)
5. 학습 완료 후 "Export Model" → "Upload" → 모델 URL 복사

### 모델 URL 설정

```javascript
modelUrl: 'https://teachablemachine.withgoogle.com/models/여기에복사한URL/',
//                                                                        ↑ / 꼭!
```

### ⚠️ 클래스 이름 정확히 맞추기

Teachable Machine에서 만든 클래스 이름과 `site.config.js`의 `modelClass`가 **완전히 똑같아야** 해요!

```
Teachable Machine에서: Goku, Vegeta, Piccolo ...
                             ↓ 완전히 똑같이!
site.config.js에서:    modelClass: 'Goku'
                       modelClass: 'Vegeta'
                       modelClass: 'Piccolo'
```

> ⚠️ 대소문자도 중요해요! `goku` ≠ `Goku` ≠ `GOKU`

### 좋은 AI 모델 만드는 팁

| 항목 | 권장 |
|------|------|
| 클래스당 이미지 수 | 최소 50장, 100장 이상이면 더 좋음 |
| 이미지 종류 | 다양한 각도, 표정, 장면 |
| 이미지 품질 | 얼굴이 명확하게 보이는 것 |
| 배경 | 단순한 것이 더 정확함 |

---

## 10. 문의 양식 이메일 설정 (Formspree)

`contact.html`에는 방문자가 문의를 보낼 수 있는 양식이 있어요.
이 양식의 내용을 **내 이메일로 받으려면** Formspree 설정이 필요해요.

### Formspree 설정하는 방법

1. `formspree.io`에 가입
2. 새 Form 만들기
3. 내 이메일 주소 입력
4. Form ID 복사 (예: `mreaaqaj`)

### contact.html에서 수정

파일을 열어서 이 부분을 찾아요:

```html
<form id="contact-form" action="https://formspree.io/f/mreaaqaj" method="POST" novalidate>
```

`mreaaqaj` 부분을 내 Form ID로 교체!

```html
<form id="contact-form" action="https://formspree.io/f/내FormID" method="POST" novalidate>
```

> 📌 Formspree를 안 쓰고 싶다면? 양식 전체를 삭제하고 이메일 주소만 표시해도 됩니다.

---

## 11. 방문자 분석 코드 넣기 (GA·Clarity·Adsense)

### 세 가지 서비스가 있어요

| 서비스 | 무료? | 역할 |
|--------|-------|------|
| Google Analytics | ✅ 무료 | 방문자 수, 어디서 왔는지 분석 |
| Microsoft Clarity | ✅ 무료 | 방문자가 어디를 클릭했는지 히트맵·영상 기록 |
| Google Adsense | 조건부 | 광고 넣어서 수익 내기 |

### 어디서 가입하나요?

- Google Analytics: `analytics.google.com`
- Microsoft Clarity: `clarity.microsoft.com`
- Google Adsense: `adsense.google.com`
- Disqus (댓글): `disqus.com`

### 4개 파일 모두 바꿔야 해요!

`index.html`, `about.html`, `contact.html`, `privacy.html` — 4개 파일 각각에 트래킹 코드가 들어있어요.

각 파일 상단에서 이런 부분들을 찾아서 내 ID로 교체:

```html
<!-- Google Analytics -->
<script async src="...gtag/js?id=G-XXXXXXXXXX"></script>
<!-- G-XXXXXXXXXX 부분을 내 GA ID로 -->

<!-- Microsoft Clarity -->
(function(c,l,a,r,i,t,y){...})(..., "clarity","script","XXXXXXXXX");
<!-- XXXXXXXXX 부분을 내 Clarity ID로 -->

<!-- Google Adsense -->
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXXXX">
<!-- ca-pub-... 부분을 내 Adsense ID로 -->
```

> 💡 Disqus 댓글을 사용하려면 `site.config.js`의 `disqus:` 에 내 Disqus 쇼트네임 입력!

---

## 12. 사이트맵·로봇 설정하기

### sitemap.xml — 구글에게 지도 알려주기

`sitemap.xml` 파일에서 **모든 URL**을 내 사이트 주소로 바꿔요:

```xml
<!-- 이전 주소 → 새 주소로 모두 교체 -->
<loc>https://이전주소.pages.dev/</loc>
↓
<loc>https://내새주소.pages.dev/</loc>
```

4개 URL을 모두 바꿔야 해요 (/, about.html, contact.html, privacy.html).

`lastmod` 날짜도 오늘 날짜로 바꾸면 좋아요:
```xml
<lastmod>2026-03-01</lastmod>
```

### robots.txt — 검색봇 안내판

`robots.txt` 파일 맨 아래에 있는 Sitemap 주소를 바꿔요:

```
Sitemap: https://내새주소.pages.dev/sitemap.xml
```

> 💡 이 파일의 AI 크롤러 허용 설정(GPTBot, ClaudeBot 등)은 그대로 두는 게 좋아요. ChatGPT나 Claude 같은 AI 서비스에서 내 사이트를 노출시켜주는 GEO(생성형 AI 최적화) 효과가 있어요!

### firebase.json — 배포 설정

Firebase를 사용하면 이 파일이 필요해요.
"이미지 원본 폴더"를 배포에서 제외하는 설정입니다:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "GEMINI.md",
      "README.md",
      "상현캐릭터이미지/**"   ← 이전 작품 이미지 폴더명, 새 것으로 교체!
    ]
  }
}
```

---

## 13. 이전 내용이 안 남게 — 전체 점검 목록

새 사이트를 만들 때 가장 자주 실수하는 게 이전 작품 이름이 **어딘가에 숨어있는 것**이에요!
아래 목록을 하나씩 체크하세요. ✅

### 📋 파일별 점검 목록

#### site.config.js
- [ ] `siteUrl` → 새 주소
- [ ] `theme` → 새 색상
- [ ] `modelUrl` → 새 AI 모델 URL
- [ ] `nav.logo` → 새 작품명
- [ ] `header.deco`, `titleJp`, `tagline` → 새 작품명
- [ ] `header.badges` → 새 캐릭터 이름들
- [ ] `result.eyeSymbol` → 새 심볼 (3~4글자)
- [ ] `characters[]` 전체 → 새 캐릭터들 (modelClass 포함!)
- [ ] `characterCards[]` 전체 → 새 캐릭터들 + 이미지 경로
- [ ] `seo` 전체 → 새 작품명으로
- [ ] `share.hashtags` → 새 해시태그
- [ ] `share.resultText`, `defaultText` → 새 작품명
- [ ] `guide.aboutTitle`, `aboutParas` → 새 작품 소개
- [ ] `guide.faqItems` → 새 내용 (이전 작품명 없는지 확인!)
- [ ] `footer.copyright` → 새 저작권자 이름!

#### style.css
- [ ] `body background-image` → 새 포스터 이미지 경로
- [ ] `body::before` 색광 RGB 값 → 새 테마 색에 맞게

#### i18n.js (ko/en 둘 다!)
- [ ] `privacy.s1.p-html` (ko + en) → 새 서비스명
- [ ] `about.faq.q5`, `a5` (ko + en) → 새 작품명, 저작권자
- [ ] `contact.faq.a6` (ko + en) → 새 작품명, 저작권자
- [ ] `guide.uppermoon.h2` ~ `p3-html` (ko + en) → 새 작품 소개
- [ ] `guide.char-title` (ko + en) → 새 캐릭터 가이드 제목
- [ ] `char.*.rank`, `char.*.desc-html` (ko + en) → 새 캐릭터 설명
- [ ] `index.tagline` (ko + en) → 새 서브타이틀
- [ ] `index.badge1~6` (ko + en) → 새 캐릭터 이름

#### about.html
- [ ] `about.faq.q5` 태그 안 텍스트 → 새 작품명
- [ ] `about.faq.a5` 태그 안 텍스트 → 새 저작권자 이름
- [ ] Google Analytics ID
- [ ] Microsoft Clarity ID

#### contact.html
- [ ] `contact.faq.a6` 태그 안 텍스트 → 새 작품명, 저작권자
- [ ] Formspree Form ID
- [ ] Google Analytics ID
- [ ] Microsoft Clarity ID

#### privacy.html
- [ ] `privacy.s1.p-html` 태그 안 텍스트 → 새 서비스명
- [ ] Google Analytics ID
- [ ] Microsoft Clarity ID

#### index.html
- [ ] Google Analytics ID
- [ ] Microsoft Clarity ID
- [ ] Google Adsense ID (2곳: meta 태그 + script 태그)
- [ ] SVG 눈 심볼 초기값 (`上弦` 같은 이전 것 없는지 확인)

#### manifest.json
- [ ] `name` → 새 사이트 이름
- [ ] `short_name` → 짧은 이름
- [ ] `description` → 새 설명
- [ ] `theme_color` → 새 테마 색
- [ ] `screenshots[0].src` → 새 이미지 경로
- [ ] `screenshots[0].label` → 새 이름

#### sitemap.xml
- [ ] 모든 URL → 새 사이트 주소로

#### robots.txt
- [ ] Sitemap URL → 새 사이트 주소로

#### firebase.json
- [ ] ignore 목록의 이전 이미지 폴더명 → 새 이름으로

#### images/ 폴더
- [ ] 이전 캐릭터 이미지 모두 삭제
- [ ] 이전 배경 포스터 삭제
- [ ] 새 이미지 파일명이 site.config.js 경로와 일치 확인

### 🕵️ 숨은 이전 내용 찾기 — Claude Code 활용

Claude Code에게 이렇게 부탁하세요:

```
"이 프로젝트에서 '이전작품명' 또는 '이전캐릭터명'이 들어간 모든 부분을
찾아서 '새작품명' 관련 내용으로 수정해줘.
수정 후 검색해서 0건 나올 때까지 확인해줘."
```

---

## 14. 배포하기 — 인터넷에 올리기

### 옵션 1: Cloudflare Pages (추천! 🌟)

무료이고 빠르며 설정이 간단해요.

1. `cloudflare.com` 가입
2. "Pages" → "새 프로젝트"
3. GitHub 저장소 연결 또는 파일 직접 업로드
4. 자동으로 HTTPS 적용됨!

### 옵션 2: Firebase Hosting

Google의 배포 서비스. 이 프로젝트에 `firebase.json` 설정 파일이 있어요.

1. `firebase.google.com` 가입
2. 터미널에서: `firebase deploy`
3. 자동으로 HTTPS 적용됨!

### ⚠️ HTTPS가 꼭 필요한 이유

```
HTTP 사이트:  카메라 기능 ❌ (브라우저가 차단함)
HTTPS 사이트: 카메라 기능 ✅
```

Cloudflare Pages와 Firebase Hosting은 모두 자동으로 HTTPS를 제공해요.

---

## 15. 이런 문제가 생겼어요! — 해결 방법

### ❓ 배경 이미지가 안 보여요

**원인 1:** 파일 경로가 틀림
- `style.css`에 적은 파일명과 실제 파일명이 다름
- 대소문자 확인! `poster.jpg` ≠ `Poster.jpg`

**원인 2:** 오버레이가 너무 어두움
- `body::before`의 `rgba(5, 2, 16, 0.88)` 에서 `0.88`을 `0.60`으로 낮춰보기

---

### ❓ 캐릭터 이미지에서 얼굴이 잘려요 (PC)

**원인:** `object-position: top center`로 설정되어 있는데 이미지에서 얼굴이 아래쪽에 있음

**해결:** `style.css`에서
```css
object-position: center center;  /* 또는 bottom center */
```

---

### ❓ AI 분석 결과에 캐릭터 이름이 안 나와요

**원인:** `site.config.js`의 `modelClass`가 Teachable Machine 클래스 이름과 다름

**해결:**
1. Teachable Machine 모델 페이지에서 클래스 이름 확인
2. `site.config.js`의 `modelClass`와 정확히 일치시키기

---

### ❓ 언어 전환해도 일부 텍스트가 안 바뀌어요

**원인:** `i18n.js`는 수정했는데 HTML 파일의 폴백 텍스트를 안 바꿨음

**해결:** `about.html`, `contact.html`, `privacy.html`에서 `data-i18n` 속성이 있는 태그의 내용도 직접 수정

---

### ❓ 모바일에서 카메라가 안 켜져요

**원인:** `http://` 로 시작하는 주소에서는 카메라 API가 막힘

**해결:** `https://` 주소에서만 서비스 (Cloudflare Pages, Firebase는 자동 HTTPS)

---

### ❓ 이전 작품명이 어딘가에 계속 나와요

**원인:** 파일이 여러 개이고 중복으로 저장된 내용이 있음

**해결:** Claude Code에게 전체 검색 요청:
```
"이 프로젝트에서 '이전작품명'이 들어간 모든 웹파일을 찾아서 보여줘"
```

---

### ❓ 문의 양식을 보냈는데 이메일이 안 와요

**원인:** `contact.html`의 Formspree ID가 이전 것 그대로임

**해결:** `formspree.io`에서 내 계정의 Form ID로 교체

---

### ❓ 구글 검색에 이전 사이트 내용이 나와요

**원인:** `sitemap.xml`의 URL이 아직 이전 주소임 / 또는 캐시

**해결:**
1. `sitemap.xml`의 모든 URL을 새 주소로 변경
2. Google Search Console에서 크롤링 재요청

---

### ❓ AI 모델 로딩이 안 돼요

**원인:** 모델 URL 오류 또는 네트워크 문제

**해결:**
1. `modelUrl` 끝에 `/` (슬래시) 있는지 확인
2. Teachable Machine 모델이 "공개(Public)" 상태인지 확인

---

## 16. 디자인 팁 — 더 멋지게 만들기

### 🎨 작품 분위기를 색상에 담는 법

```
귀멸의 칼날 → 피의 진홍 + 달의 금색
체인소맨   → 어둠의 보라 + 전기의 하늘색
드래곤볼   → 불꽃의 주황 + 기(氣)의 금색
나루토     → 에너지의 주황 + 하늘의 파랑
진격의 거인 → 심연의 갈색 + 군복의 초록
주술회전   → 저주의 남색 + 보라
```

### 🖼️ 배경 이미지 잘 고르는 법

좋은 배경 이미지의 조건:
1. **어두운 분위기** → 텍스트가 잘 보임
2. **한쪽에 인물, 반대쪽에 여백** → 글자 공간 확보
3. **세로로 긴 장면** → 스크롤할 때 자연스럽게 보임
4. **고해상도** → 모든 화면에서 선명하게

### 🔤 폰트 선택

현재 폰트: **Noto Sans KR** (본문) + **Orbitron** (영문 강조)

다른 분위기로 바꾸고 싶다면 (Google Fonts 무료):

| 분위기 | 영문 폰트 |
|--------|-----------|
| 미래/SF | **Orbitron**, **Space Grotesk** |
| 판타지/중세 | **Cinzel**, **MedievalSharp** |
| 귀엽고 캐주얼 | **Nunito**, **Quicksand** |
| 클래식/우아 | **Playfair Display**, **Cormorant** |
| 강렬/배틀 | **Bebas Neue**, **Anton** |

폰트 바꾸는 방법:
1. `index.html`의 Google Fonts `<link>` 태그 수정
2. `style.css`의 `.hero-deco`, `.hero-title` 등의 `font-family` 수정

---

## 17. Claude Code에게 맡기는 법

Claude Code가 있으면 복잡한 작업을 대신 해줄 수 있어요!

### 효과적인 요청 방법

**전체 교체 작업 시:**
```
"이 프로젝트를 [새 작품명] 닮은꼴 사이트로 바꿔줘.
README_AI.md 파일을 먼저 읽고, 거기 있는 체크리스트대로 진행해줘.
작업 후에는 [이전 작품명] 단어가 남아있는지 전체 검색해서 확인해줘."
```

**특정 문제 해결 시:**
```
"privacy.html을 영어로 전환했을 때 '귀멸의 칼날'이 나오는데 고쳐줘"
"캐릭터 이미지가 PC에서 얼굴이 잘려보여, object-position 수정해줘"
```

**검사 요청 시:**
```
"이 프로젝트 전체에서 [이전 작품명] 단어 있는 곳 모두 찾아줘"
```

---

*이 가이드는 실제 제작하면서 겪은 모든 시행착오를 담았습니다.*
*모르는 게 있으면 Claude Code에게 이 가이드를 보여주면서 도움을 요청하세요!*
