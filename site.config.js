/* ================================================================
   site.config.js — 새 애니메이션 사이트 만들 때 이 파일만 수정하세요!
   ================================================================

   ▶ 새 프로젝트 체크리스트:
   1. 이 파일의 모든 값을 새 애니메이션에 맞게 변경
   2. /images/ 폴더에 캐릭터 이미지 추가 (PNG + WEBP 권장)
   3. Google Teachable Machine 모델 URL 교체 (modelUrl)
   4. index.html <head> 상단의 트래킹 ID 교체
      - Google Analytics: G-XXXXXXXXXX
      - Microsoft Clarity: xxxxxxxxxx
      - AdSense: ca-pub-XXXXXXXXXXXXXXXXX
   5. manifest.json, sitemap.xml, robots.txt 의 URL/이름 교체
   6. 완성!

   ================================================================ */

var SITE_CONFIG = {

  /* ──────────────────────────────────────────────────────────────
     🌐 기본 사이트 정보
  ────────────────────────────────────────────────────────────── */
  siteUrl:  'https://bs-pb2.pages.dev/',
  siteName: '귀멸의 칼날 상현 닮은꼴',
  disqus:   'sanylee',   // Disqus 쇼트네임 (댓글 사용 안 하면 '' 로 설정)


  /* ──────────────────────────────────────────────────────────────
     🎨 테마 색상  ← 여기서 전체 배색이 결정됩니다
     CSS 변수로 자동 주입되므로 여기만 바꾸면 전체 색상이 바뀝니다
  ────────────────────────────────────────────────────────────── */
  theme: {
    primary:     '#c0392b',          // 주요 색상 (테두리, 버튼, 강조)
    primaryDark: '#7b1010',          // 어두운 주요 색상
    gold:        '#f0c040',          // 포인트 색상 (로고, 결과 강조)
    accent:      '#5c0a8a',          // 악센트 색상 (그라디언트 배경)
    bg:          '#05050f',          // 페이지 배경
    cardBg:      'rgba(10,5,25,0.85)', // 카드 배경
  },


  /* ──────────────────────────────────────────────────────────────
     🤖 딥러닝 모델 (Google Teachable Machine)
  ────────────────────────────────────────────────────────────── */
  modelUrl: 'https://teachablemachine.withgoogle.com/models/vlj9htQzg/',


  /* ──────────────────────────────────────────────────────────────
     🏠 네비게이션 & 헤더
  ────────────────────────────────────────────────────────────── */
  nav: {
    logo: '鬼滅 上弦',   // 좌측 상단 로고 텍스트
  },

  header: {
    deco:    'Demon Slayer · Upper Moon',     // 타이틀 위 작은 장식 텍스트
    titleJp: '鬼滅の刃\n상현 닮은꼴',          // \n 으로 줄바꿈 가능
    tagline: {
      ko: '당신은 어떤 상현을 닮았을까?',
      en: 'Which Upper Moon are you?',
    },
    badges: [                                 // 헤더 아래 배지 목록
      { ko: '상현 壱', en: 'Upper Moon I'   },
      { ko: '상현 弐', en: 'Upper Moon II'  },
      { ko: '상현 参', en: 'Upper Moon III' },
      { ko: '상현 肆', en: 'Upper Moon IV'  },
      { ko: '상현 伍', en: 'Upper Moon V'   },
      { ko: '상현 陸', en: 'Upper Moon VI'  },
    ],
  },


  /* ──────────────────────────────────────────────────────────────
     🎴 결과 섹션 레이블
  ────────────────────────────────────────────────────────────── */
  result: {
    eyeSymbol:   '上弦',                          // 결과 눈 아이콘 안 텍스트
    label:       { ko: '당신과 닮은 상현',         en: 'Your Upper Moon match' },
    scoreLabel:  { ko: '유사도',                   en: 'Similarity' },
    allLabel:    { ko: '전체 분석 결과',            en: 'Full Analysis Results' },
    unknownRank: { ko: '상현 · ???',               en: 'Upper Moon · ???' },
    unknownDesc: {
      ko: '알 수 없는 상현의 기운이 느껴집니다...',
      en: 'An unknown Upper Moon presence is felt...',
    },
  },


  /* ──────────────────────────────────────────────────────────────
     👥 캐릭터 DB — AI 모델 클래스 → 표시 정보 매핑
     modelClass: Teachable Machine 모델이 반환하는 클래스 이름 (정확히 일치)
  ────────────────────────────────────────────────────────────── */
  characters: [
    {
      modelClass: '코쿠시보',
      name:  { ko: '코쿠시보',    en: 'Kokushibo' },
      rank:  { ko: '상현 壱',     en: 'Upper Moon 壱' },
      desc:  {
        ko: '최강의 귀신. 달의 호흡을 구사하는 절대자. 여섯 개의 눈과 온몸의 칼날이 특징.',
        en: 'The strongest demon. Master of Moon Breathing with six eyes and blades all over.',
      },
    },
    {
      modelClass: '도우마',
      name:  { ko: '도우마',      en: 'Douma' },
      rank:  { ko: '상현 弐',     en: 'Upper Moon 弐' },
      desc:  {
        ko: '냉혹한 미소의 허무주의자. 팬을 이용한 냉기 혈귀술의 사용자.',
        en: 'Nihilistic with a cold smile. Wields ice-based Blood Demon Art with fans.',
      },
    },
    {
      modelClass: '아카자',
      name:  { ko: '아카자',      en: 'Akaza' },
      rank:  { ko: '상현 参',     en: 'Upper Moon 参' },
      desc:  {
        ko: '파괴살의 달인. 강자와의 전투를 갈망하는 전투 귀신.',
        en: 'Master of destructive combat. Craves battle against the strong.',
      },
    },
    {
      modelClass: '한텐구',
      name:  { ko: '한텐구',      en: 'Hantengu' },
      rank:  { ko: '상현 肆',     en: 'Upper Moon 肆' },
      desc:  {
        ko: '두려움으로 분신을 만드는 귀신. 겁쟁이의 공포가 강력한 분신들을 탄생시킨다.',
        en: 'A coward whose fear spawns powerful demon clones.',
      },
    },
    {
      modelClass: '교코',
      name:  { ko: '교코',        en: 'Gyokko' },
      rank:  { ko: '상현 伍',     en: 'Upper Moon 伍' },
      desc:  {
        ko: '항아리 속에 거주하는 기이한 귀신. 독특한 미적 감각과 물고기 혈귀술의 소유자.',
        en: 'Bizarre demon living in pots. Wields fish-shaped Blood Demon Art sculptures.',
      },
    },
    {
      modelClass: '규타로',
      name:  { ko: '규타로',      en: 'Gyutaro' },
      rank:  { ko: '상현 陸 · 오빠',  en: 'Upper Moon 陸 · Brother' },
      desc:  {
        ko: '다키와 육체를 공유하는 상현. 독이 담긴 낫을 휘두르는 잔혹한 전투자.',
        en: 'Shares a body with Daki. Wields venomous sickles with brutal combat style.',
      },
    },
    {
      modelClass: '다키',
      name:  { ko: '다키',        en: 'Daki' },
      rank:  { ko: '상현 陸 · 여동생', en: 'Upper Moon 陸 · Sister' },
      desc:  {
        ko: '규타로와 육체를 공유하는 상현. 오비라 불리는 대형 띠를 이용한 현란한 술식의 사용자.',
        en: 'Shares a body with Gyutaro. Fights with powerful Obi sashes in dazzling techniques.',
      },
    },
  ],


  /* ──────────────────────────────────────────────────────────────
     🗂️ 캐릭터 카드 — 가이드 섹션에 표시되는 카드 목록
     characters 와 별도: 여러 클래스를 하나의 카드로 합칠 수 있음
  ────────────────────────────────────────────────────────────── */
  characterCards: [
    {
      id:       'kokushibo',
      name:     { ko: '코쿠시보',          en: 'Kokushibo' },
      rank:     { ko: '상현 壱',           en: 'Upper Moon 壱' },
      image:    '/images/kokushibo.png',
      imageWebp:'/images/kokushibo.webp',
      cardDesc: {
        ko: '무잔을 제외한 <strong>귀신 중 최강</strong>의 존재. 본명은 미치카츠 츠기쿠니로, 귀살대 역사상 가장 위대한 검사 요리이치 츠기쿠니의 쌍둥이 형이다. 뛰어난 형에 대한 열등감으로 스스로 귀신이 되기를 선택한 비극적 인물. 스스로 창시한 <strong>달의 호흡(月の呼吸)</strong>과 여섯 개의 눈, 온몸에 돋아난 칼날이 특징으로, 세 명의 기둥이 합력해도 쉽게 쓰러뜨리기 어렵다.',
        en: 'The <strong>most powerful demon</strong> aside from Muzan. Born as Michikatsu Tsugikuni, twin brother of Yoriichi, the greatest swordsman in history. Chose to become a demon out of jealousy. Known for his self-created <strong>Moon Breathing</strong>, six eyes, and blades all over his body.',
      },
    },
    {
      id:       'douma',
      name:     { ko: '도우마',            en: 'Douma' },
      rank:     { ko: '상현 弐',           en: 'Upper Moon 弐' },
      image:    '/images/douma.png',
      imageWebp:'/images/douma.webp',
      cardDesc: {
        ko: '무지개색 눈을 가진 미형의 귀신. 인간 시절부터 <strong>어떤 감정도 느끼지 못하는</strong> 공허한 영혼의 소유자로, 허무주의적 세계관을 가진다. 화려한 부채로 얼음과 냉기를 자유자재로 다루는 혈귀술을 구사한다. 카나오·이노스케가 합력하고 시노부의 희생으로 겨우 격파하는 역대급 강적.',
        en: 'A beautiful demon with rainbow eyes. <strong>Incapable of feeling any emotion</strong> since birth. Wields ice and cold air with ornate fans. Required the sacrifice of Shinobu and combined efforts of Kanao and Inosuke to defeat.',
      },
    },
    {
      id:       'akaza',
      name:     { ko: '아카자',            en: 'Akaza' },
      rank:     { ko: '상현 参',           en: 'Upper Moon 参' },
      image:    '/images/akaza.png',
      imageWebp:'/images/akaza.webp',
      cardDesc: {
        ko: '<strong>오로지 강자와의 싸움만을 추구</strong>하는 전투 귀신. 인간 시절 이름은 핫케이쥬로로, 불우한 과거를 가진다. 수련으로 쌓은 무술이 귀신의 힘과 결합한 파괴적 전투력의 소유자. 탄지로와의 격전에서 인간 시절 기억과 마주하며 스스로 붕괴한다.',
        en: 'A battle demon who <strong>seeks only to fight the strong</strong>. Known as Hakuji in human life. Devastating combat power combining martial arts and demonic strength. Collapses when facing human memories during battle with Tanjiro.',
      },
    },
    {
      id:       'hantengu',
      name:     { ko: '한텐구',            en: 'Hantengu' },
      rank:     { ko: '상현 肆',           en: 'Upper Moon 肆' },
      image:    '/images/hantengu.png',
      imageWebp:'/images/hantengu.webp',
      cardDesc: {
        ko: '극도의 겁쟁이 귀신이지만, <strong>두려움이라는 감정 자체가 강력한 분신을 탄생</strong>시킨다. 공포·기쁨·분노·슬픔 등 각각의 감정이 독립적인 귀신으로 분열되어 싸운다. 극도의 겁쟁이라는 설정이 역설적으로 공략하기 가장 까다로운 상현 중 하나로 만들었다.',
        en: 'An extremely cowardly demon whose <strong>very fear spawns powerful clones</strong>. Fear, joy, anger, and sorrow each split into independent demons. His cowardice paradoxically makes him one of the hardest Upper Moons to defeat.',
      },
    },
    {
      id:       'gyokko',
      name:     { ko: '교코',              en: 'Gyokko' },
      rank:     { ko: '상현 伍',           en: 'Upper Moon 伍' },
      image:    '/images/gyokko.png',
      imageWebp:'/images/gyokko.webp',
      cardDesc: {
        ko: '물고기 인간처럼 기이한 외모를 지닌 귀신으로, <strong>극도로 일그러진 미적 감각</strong>을 자랑한다. 거대한 항아리들을 근거지로 삼아 이동하며, 물고기 형태의 혈귀술 조각들로 공격한다. 무이치로 토키토와의 격전에서 쓰러지는 강적.',
        en: 'A bizarre fish-human demon boasting an <strong>extremely distorted aesthetic sense</strong>. Travels using giant pots as bases and attacks with fish-shaped Blood Demon Art. Falls to Muichiro Tokito in battle.',
      },
    },
    {
      id:       'daki-gyutaro',
      name:     { ko: '규타로 & 다키',     en: 'Gyutaro & Daki' },
      rank:     { ko: '상현 陸',           en: 'Upper Moon 陸' },
      image:    '/images/daki-gyutaro.png',
      imageWebp:'/images/daki-gyutaro.webp',
      cardDesc: {
        ko: '<strong>오빠 규타로와 여동생 다키</strong>, 두 귀신이 하나의 육체를 공유하는 독특한 구조. 규타로는 독이 담긴 낫으로 잔혹하게 싸우며, 다키는 오비(帯)를 이용한 현란한 공격을 펼친다. 탄지로·젠이츠·이노스케 셋이 힘을 합쳐 겨우 쓰러뜨리는 강적.',
        en: '<strong>Brother Gyutaro and sister Daki</strong> sharing one body. Gyutaro fights brutally with venomous sickles; Daki unleashes dazzling Obi sash attacks. It takes Tanjiro, Zenitsu, and Inosuke combined to barely defeat them.',
      },
    },
  ],


  /* ──────────────────────────────────────────────────────────────
     🔍 SEO  ← 이 내용이 검색엔진, SNS 미리보기에 표시됩니다
  ────────────────────────────────────────────────────────────── */
  seo: {
    pageTitle:    '상현 닮은꼴 찾기 | 귀멸의 칼날 AI 분석기',
    description:  '귀멸의 칼날 상현 닮은꼴 AI 분석기! 내 얼굴이 코쿠시보·도우마·아카자 등 어떤 상현 귀신과 닮았는지 AI로 분석해보세요. 웹캠 또는 사진 업로드 지원.',
    keywords:     '귀멸의 칼날, 상현, 닮은꼴, AI 분석, 코쿠시보, 도우마, 아카자, 한텐구, 교코, 다키, 규타로, 鬼滅の刃, demon slayer, upper moon, lookalike, face analysis',
    ogTitle:      '귀멸의 칼날 상현 닮은꼴 AI 분석기',
    ogDescription:'귀멸의 칼날 상현 닮은꼴 무료 AI 분석기! 코쿠시보·도우마·아카자·한텐구·교코·다키 중 내 얼굴과 가장 닮은 상현 귀신을 AI로 즉시 분석해보세요.',
    ogImage:      'https://bs-pb2.pages.dev/images/douma.png',
    ogImageAlt:   '귀멸의 칼날 상현 닮은꼴 AI 분석기',
    appName:      '상현닮은꼴',       // apple-mobile-web-app-title / manifest short_name
    appFullName:  'Demon Slayer Upper Moon Lookalike Analyzer',
    themeColor:   '#05050f',
    datePublished:'2026-02-20',
    dateModified: '2026-02-21',
    appFeatures:  ['AI 얼굴 분석', '닮은꼴 매칭', '웹캠 지원', '사진 업로드', '무료 이용'],
  },


  /* ──────────────────────────────────────────────────────────────
     📱 SNS 공유 텍스트
  ────────────────────────────────────────────────────────────── */
  share: {
    hashtags:   '#귀멸의칼날 #상현닮은꼴 #귀멸AI #DemonSlayer',
    shareTitle: '귀멸의 칼날 상현 닮은꼴 AI 분석기',
    // 결과 있을 때 공유 텍스트 (name, rank, score, url 을 받음)
    resultText: function(name, rank, score, url) {
      return '🔥 귀멸의 칼날 상현 닮은꼴 테스트!\n나는 ' + name + '(' + rank + ')와 ' + score + ' 닮았다!\n너는 어떤 상현이랑 닮았어? 👇\n' + url;
    },
    // 결과 없을 때 기본 공유 텍스트
    defaultText: function(url) {
      return '👁️ 귀멸의 칼날 상현 닮은꼴 AI 분석기\n내 얼굴이 어떤 상현 귀신과 닮았는지 무료로 바로 분석!\n' + url;
    },
    // 결과 이미지 저장 시 카드 상단 텍스트
    resultCardTitle:  '귀멸의 칼날 상현 닮은꼴 AI 분석 결과',
    resultCardFooter: function(url, hashtags) { return url + '  |  ' + hashtags; },
    resultCardFilename: function(name, score) { return '상현닮은꼴_' + name + '_' + score + '.png'; },
    scoreLabel: '유사도',
  },


  /* ──────────────────────────────────────────────────────────────
     📖 가이드 섹션 콘텐츠
     모든 텍스트는 { ko: '...', en: '...' } 형식
  ────────────────────────────────────────────────────────────── */
  guide: {

    /* 이용 방법 */
    howtoTitle: { ko: '⚡ 이용 방법', en: '⚡ How to Use' },
    howtoSteps: [
      {
        ko: '<strong>카메라 탭</strong> 선택 후 \'분석 시작\'을 클릭하면 웹캠이 활성화됩니다. 브라우저의 카메라 접근 허용을 눌러주세요.',
        en: 'Select the <strong>Camera tab</strong> and click \'Start Analysis\' to activate your webcam. Allow camera access in the browser prompt.',
      },
      {
        ko: '얼굴이 <strong>프레임 중앙</strong>에 오도록 위치를 조절하세요. 밝은 조명이 있는 환경에서 더 정확한 결과를 얻을 수 있습니다.',
        en: 'Position your face at the <strong>center of the frame</strong>. Good lighting improves accuracy.',
      },
      {
        ko: '<strong>\'스냅샷 찍기\'</strong>를 누르면 해당 순간의 이미지를 AI가 분석합니다. 결과가 아래에 표시됩니다.',
        en: 'Press <strong>\'Take Snapshot\'</strong> to have the AI analyze your face. Results appear below.',
      },
      {
        ko: '<strong>이미지 업로드 탭</strong>에서는 사진 파일을 드래그&amp;드롭하거나 클릭하여 업로드할 수 있습니다. 모바일에서는 갤러리 사진을 바로 선택할 수 있습니다.',
        en: 'In the <strong>Upload tab</strong>, drag &amp; drop or click to upload a photo. On mobile, select directly from your gallery.',
      },
      {
        ko: '분석 결과로 <strong>가장 닮은 캐릭터</strong>와 각 캐릭터별 유사도 퍼센트가 표시됩니다. 결과를 스크린샷 찍어 친구와 공유해보세요!',
        en: 'Results show your <strong>closest character match</strong> and similarity percentages for all characters. Screenshot and share with friends!',
      },
    ],

    /* 애니메이션/작품 소개 */
    aboutTitle: { ko: '👁️ 상현(上弦)이란?', en: '👁️ What is Upper Moon?' },
    aboutParas: [
      {
        ko: '귀멸의 칼날에서 <strong>상현(上弦)</strong>은 귀신들의 왕 키부츠지 무잔의 친위대라 할 수 있는 최강의 귀신 집단이다. 상현 일(壱)부터 상현 육(陸)까지 총 6등급으로 이루어져 있으며, 숫자가 낮을수록 더 강력한 귀신임을 의미한다.',
        en: 'In Demon Slayer, the <strong>Upper Moons</strong> are the elite guard of demon king Kibutsuji Muzan — the most powerful demon group. Ranked from Upper Moon One (壱) to Upper Moon Six (陸), lower numbers indicating greater power.',
      },
      {
        ko: '상현들은 일반 귀신과는 차원이 다른 전투력을 보유하고 있으며, 각자 고유한 <strong>혈귀술(血鬼術)</strong>이라 불리는 특수 능력을 구사한다. 이들은 수백 년에 걸쳐 인간의 피를 흡수하며 살아남은 존재들로, 인간의 감정과 기억, 과거의 상처를 여전히 안고 살아간다.',
        en: 'Upper Moons possess combat power far beyond ordinary demons, each wielding unique <strong>Blood Demon Arts</strong>. Having absorbed human blood over centuries, they still carry human emotions, memories, and past wounds.',
      },
      {
        ko: '귀살대(鬼殺隊)의 핵심 전력인 기둥(柱)들도 상현과 맞붙으면 목숨을 잃을 수 있을 만큼 압도적인 강함을 자랑한다. 시리즈 전반에 걸쳐 최강의 빌런으로 군림하며 팬들에게 강렬한 인상을 남긴 귀멸의 칼날 최고 인기 캐릭터 그룹이기도 하다.',
        en: 'Even the Hashira (Pillars) of the Demon Slayer Corps risk their lives against Upper Moons. Reigning as the series\' most powerful villains, they remain the most beloved character group in Demon Slayer fandom.',
      },
    ],

    /* 캐릭터 가이드 섹션 제목 */
    charGuideTitle:    { ko: '캐릭터 가이드',                   en: 'Character Guide' },
    charGuideSubtitle: { ko: 'Upper Moon Character Encyclopedia', en: 'Upper Moon Character Encyclopedia' },

    /* AI 작동 원리 */
    aiTitle: { ko: '🧠 AI 작동 원리', en: '🧠 How the AI Works' },
    aiParas: [
      {
        ko: '본 서비스는 <strong>Google Teachable Machine</strong>을 기반으로 학습된 딥러닝 이미지 분류 모델을 사용합니다. TensorFlow.js 라이브러리를 통해 브라우저 내에서 직접 AI 추론이 이루어지며, 사용자의 이미지는 외부 서버로 전송되지 않습니다.',
        en: 'This service uses a deep learning model trained on <strong>Google Teachable Machine</strong>. AI inference runs directly in your browser via TensorFlow.js — your images are never sent to any external server.',
      },
      {
        ko: '모든 처리는 사용자의 기기(브라우저) 안에서만 진행되므로 개인 정보 유출 위험이 없습니다. AI 모델은 얼굴 형태, 이목구비 비율 등의 특징을 분석하여 어떤 캐릭터와 가장 유사한지 수치화합니다. 결과는 <strong>재미로 즐기는 엔터테인먼트 콘텐츠</strong>이며, 진지한 생체인식 도구가 아닙니다.',
        en: 'All processing happens only on your device, so there\'s zero risk of data leakage. The AI analyzes facial features and proportions to calculate character similarity scores. Results are <strong>entertainment content for fun</strong>, not a serious biometric tool.',
      },
    ],

    /* FAQ */
    faqTitle: { ko: '❓ 자주 묻는 질문 (FAQ)', en: '❓ Frequently Asked Questions' },
    faqItems: [
      {
        q: { ko: 'Q. 촬영된 이미지가 저장되나요?',           en: 'Q. Are my images saved?' },
        a: { ko: '아닙니다. 모든 이미지 분석은 브라우저 내에서 실시간으로 처리되며, 서버나 외부에 저장되지 않습니다. 분석이 끝나는 즉시 데이터는 삭제됩니다.',
             en: 'No. All analysis is processed in real-time within your browser and never saved to any server. Data is deleted immediately after analysis.' },
      },
      {
        q: { ko: 'Q. 분석 결과가 항상 정확한가요?',          en: 'Q. Are results always accurate?' },
        a: { ko: '본 서비스는 AI 딥러닝 모델 기반이지만, 순수한 엔터테인먼트 목적의 콘텐츠입니다. 결과는 참고용으로만 활용해주세요. 여러 번 시도하거나 다양한 사진으로 해보면 더 재미있게 즐길 수 있습니다.',
             en: 'This is purely entertainment content. Use results for fun only. Try multiple times or different photos for more variety!' },
      },
      {
        q: { ko: 'Q. 모바일에서도 사용 가능한가요?',         en: 'Q. Does it work on mobile?' },
        a: { ko: 'iOS Safari와 Android Chrome에서 이용 가능합니다. \'이미지 업로드\' 탭을 이용하면 갤러리 사진을 업로드하거나 카메라로 바로 촬영할 수 있습니다.',
             en: 'Yes, works on iOS Safari and Android Chrome. Use the Upload tab to select gallery photos or take a photo directly.' },
      },
      {
        q: { ko: 'Q. 카메라 권한을 거부했어요.',             en: 'Q. I denied camera permission.' },
        a: { ko: '카메라 탭 대신 \'이미지 업로드\' 탭을 이용해주세요. 카메라 권한은 브라우저 주소창 자물쇠 아이콘에서 언제든 변경 가능합니다.',
             en: 'Use the Upload tab instead. You can change camera permissions anytime via the lock icon in your browser\'s address bar.' },
      },
      {
        q: { ko: 'Q. 분석에 얼마나 걸리나요?',              en: 'Q. How long does analysis take?' },
        a: { ko: '이미지 분석 자체는 <strong>1~3초</strong> 내에 완료됩니다. 첫 접속 시 AI 모델 파일(약 5~15MB)을 로드하는 데 5~15초가 소요될 수 있습니다.',
             en: 'Image analysis completes within <strong>1-3 seconds</strong>. On first load, the AI model file (~5-15MB) may take 5-15 seconds to load.' },
      },
      {
        q: { ko: 'Q. 이 서비스는 무료인가요?',              en: 'Q. Is this service free?' },
        a: { ko: '네, <strong>완전 무료 서비스</strong>입니다. 회원 가입·로그인·결제가 일절 필요 없습니다.',
             en: 'Yes, it\'s <strong>completely free</strong>. No sign-up, login, or payment required.' },
      },
      {
        q: { ko: 'Q. 개인 얼굴 데이터가 유출될 위험이 있나요?', en: 'Q. Is there a risk my face data will be leaked?' },
        a: { ko: '유출 위험이 <strong>전혀 없습니다</strong>. TensorFlow.js를 통해 모든 AI 추론이 사용자의 브라우저 내에서만 처리되므로 이미지 데이터가 어떤 서버에도 전송되지 않습니다.',
             en: '<strong>Zero risk.</strong> All AI inference happens only within your browser via TensorFlow.js. Image data is never sent to any server.' },
      },
    ],

    /* 별점 평가 */
    ratingTitle:    '⭐ 서비스를 평가해주세요',
    ratingSubtitle: {
      ko: '귀멸의 칼날 상현 닮은꼴 AI 분석기, 어떠셨나요?',
      en: 'How was the Demon Slayer Upper Moon Analyzer?',
    },
    ratingLabels:   ['', '별로에요', '아쉬워요', '괜찮아요', '좋아요!', '최고예요! 🔥'],

  }, // end guide


  /* ──────────────────────────────────────────────────────────────
     🦶 푸터
  ────────────────────────────────────────────────────────────── */
  footer: {
    mainText:  'DEMON SLAYER · UPPER MOON ANALYZER',
    copyright: '귀멸의 칼날 © 吾峠呼世晴 / 集英社',
    poweredBy: {
      ko: '본 서비스는 Teachable Machine AI를 사용합니다',
      en: 'Powered by Teachable Machine AI',
    },
  },

}; // end SITE_CONFIG
