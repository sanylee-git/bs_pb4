/* ================================================================
   site.config.js — 체인소맨 버전
   ================================================================

   ▶ 새 프로젝트 체크리스트:
   1. 이 파일의 값들을 확인/수정
   2. /images/ 폴더에 캐릭터 이미지 추가 (PNG + WEBP 권장)
      - denji.png / makima.png / aki.png / reze.png / kishibe.png
      - himeno.png / angel-devil.png / pochita.png / kobeni.png / yoshida.png
   3. index.html <head> 상단의 트래킹 ID 교체 (GA, Clarity, Adsense)
   4. siteUrl, manifest.json, sitemap.xml 도메인 교체
   5. 완성!

   ================================================================ */

var SITE_CONFIG = {

  /* ──────────────────────────────────────────────────────────────
     🌐 기본 사이트 정보
  ────────────────────────────────────────────────────────────── */
  siteUrl:  'https://your-domain.pages.dev/',   // ← 실제 배포 URL 로 교체
  siteName: '체인소맨 캐릭터닮은꼴',
  disqus:   '',   // Disqus 쇼트네임 (미사용 시 '' 로 유지)


  /* ──────────────────────────────────────────────────────────────
     🎨 테마 색상  ← 체인소맨 : 혈흑 + 카멜레온 오렌지 테마
  ────────────────────────────────────────────────────────────── */
  theme: {
    primary:     '#8b5cf6',           // 바이올렛 퍼플 — 레제 꽃밭 포스터
    primaryDark: '#5b21b6',           // 딥 퍼플
    gold:        '#22d3ee',           // 시안 틸 — 레제 오션 포스터
    accent:      '#0d0520',           // 극한 다크 퍼플
    bg:          '#050210',           // 퍼플 블랙
    cardBg:      'rgba(10,4,28,0.93)',// 다크 퍼플 카드
  },


  /* ──────────────────────────────────────────────────────────────
     🤖 딥러닝 모델
  ────────────────────────────────────────────────────────────── */
  modelUrl: 'https://teachablemachine.withgoogle.com/models/r86spDTR3/',


  /* ──────────────────────────────────────────────────────────────
     🏠 네비게이션 & 헤더
  ────────────────────────────────────────────────────────────── */
  nav: {
    logo: 'チェンソーマン',
  },

  header: {
    deco:    'Chainsaw Man',
    titleJp: 'チェンソーマン\n캐릭터닮은꼴',
    tagline: {
      ko: '당신은 어떤 체인소맨 캐릭터를 닮았을까?',
      en: 'Which Chainsaw Man character are you?',
    },
    badges: [
      { ko: '덴지',     en: 'Denji'   },
      { ko: '마키마',   en: 'Makima'  },
      { ko: '아키',     en: 'Aki'     },
      { ko: '파워',     en: 'Power'   },
      { ko: '포치타',   en: 'Pochita' },
      { ko: '레제',     en: 'Reze'    },
    ],
  },


  /* ──────────────────────────────────────────────────────────────
     🎴 결과 섹션 레이블
  ────────────────────────────────────────────────────────────── */
  result: {
    eyeSymbol:   'CSM',
    label:       { ko: '당신과 닮은 캐릭터',    en: 'Your Chainsaw Man match' },
    scoreLabel:  { ko: '유사도',                en: 'Similarity' },
    allLabel:    { ko: '전체 분석 결과',         en: 'Full Analysis Results' },
    unknownRank: { ko: '공안 · ???',             en: 'Public Safety · ???' },
    unknownDesc: {
      ko: '정체불명의 기운이 느껴집니다...',
      en: 'An unknown presence is felt...',
    },
  },


  /* ──────────────────────────────────────────────────────────────
     👥 캐릭터 DB — AI 모델 클래스 → 표시 정보 매핑
     modelClass: Teachable Machine 모델의 실제 클래스 이름
  ────────────────────────────────────────────────────────────── */
  characters: [
    {
      modelClass: '덴지',
      name:  { ko: '덴지',          en: 'Denji' },
      rank:  { ko: '공안 특무 · 체인소 하이브리드', en: 'Public Safety · Chainsaw Hybrid' },
      desc:  {
        ko: '포치타와 합체한 체인소 악마 하이브리드. 단순하지만 순수한 욕망으로 살아가는 주인공.',
        en: 'Chainsaw Devil hybrid merged with Pochita. Protagonist driven by simple but pure desires.',
      },
    },
    {
      modelClass: '레제',
      name:  { ko: '레제',          en: 'Reze' },
      rank:  { ko: '폭탄 하이브리드 · 소련 스파이', en: 'Bomb Hybrid · Soviet Spy' },
      desc:  {
        ko: '소련이 보낸 폭탄 악마 하이브리드. 덴지의 가장 비극적인 인연.',
        en: 'Bomb Devil hybrid sent by the Soviet Union. Denji\'s most tragic connection.',
      },
    },
    {
      modelClass: '마키마',
      name:  { ko: '마키마',        en: 'Makima' },
      rank:  { ko: '지배의 악마 · 공안 통제관', en: 'Control Devil · Public Safety' },
      desc:  {
        ko: '지배의 악마. 1부 최대의 빌런이자 덴지의 집착 대상. 카리스마 넘치는 공안 통제관.',
        en: 'The Control Devil. The greatest villain of Part 1 and Denji\'s obsession.',
      },
    },
    {
      modelClass: '아키 하야카와',
      name:  { ko: '아키 하야카와', en: 'Aki Hayakawa' },
      rank:  { ko: '공안 특무 · 총의 악마', en: 'Public Safety · Gun Fiend' },
      desc:  {
        ko: '여우·미래 악마와 계약한 공안 사냥꾼. 덴지의 롤모델이자 비극적 동료.',
        en: 'Devil hunter contracted with Fox and Future Devil. Denji\'s role model and tragic comrade.',
      },
    },
    {
      modelClass: '키시베',
      name:  { ko: '키시베',        en: 'Kishibe' },
      rank:  { ko: '최강의 공안 사냥꾼', en: 'Strongest Public Safety Hunter' },
      desc:  {
        ko: '공안 최강의 베테랑 사냥꾼. 덴지와 파워를 혹독하게 훈련시킨 냉철한 인물.',
        en: 'The strongest veteran devil hunter. Mercilessly trains Denji and Power with cold pragmatism.',
      },
    },
    {
      modelClass: '히메노',
      name:  { ko: '히메노',        en: 'Himeno' },
      rank:  { ko: '공안 특무 · 유령 계약자', en: 'Public Safety · Ghost Devil Contractor' },
      desc:  {
        ko: '유령 악마와 계약한 공안 사냥꾼. 아키를 걱정하며 덴지에게도 마음을 열었던 인물.',
        en: 'Ghost Devil contractor in Public Safety. Cared for Aki and opened her heart to Denji.',
      },
    },
    {
      modelClass: '천사의 악마',
      name:  { ko: '천사의 악마',   en: 'Angel Devil' },
      rank:  { ko: '공안 특무 · 악마', en: 'Public Safety · Devil' },
      desc:  {
        ko: '인간을 싫어하지만 공안에서 일하는 천사 모습의 악마. 수명을 흡수해 무기를 만드는 능력 보유.',
        en: 'An angel-shaped devil who hates humans yet works for Public Safety. Can absorb life spans to create weapons.',
      },
    },
    {
      modelClass: '포치타',
      name:  { ko: '포치타',        en: 'Pochita' },
      rank:  { ko: '체인소의 악마 · 덴지의 심장', en: 'Chainsaw Devil · Denji\'s Heart' },
      desc:  {
        ko: '체인소의 악마의 진정한 모습. 강아지 형태로 덴지와 계약하고 그의 심장이 된 존재.',
        en: 'The true form of the Chainsaw Devil. Became Denji\'s heart after contracting with him as a dog.',
      },
    },
    {
      modelClass: '코베니 히가시야마',
      name:  { ko: '코베니',        en: 'Kobeni' },
      rank:  { ko: '공안 특무 · 미공개 계약', en: 'Public Safety · Undisclosed Contract' },
      desc:  {
        ko: '늘 불운하지만 위기 상황에서 놀라운 생존 본능을 발휘하는 공안 사냥꾼.',
        en: 'Always unlucky, but displays astonishing survival instincts in crisis situations.',
      },
    },
    {
      modelClass: '요시다 히로후미',
      name:  { ko: '요시다',        en: 'Yoshida' },
      rank:  { ko: 'G기관 · 문어 악마 계약자', en: 'G-Organization · Octopus Devil Contractor' },
      desc:  {
        ko: 'G기관 소속. 문어 악마와 계약한 미스터리한 청년. 덴지를 감시하는 임무를 맡음.',
        en: 'Works for G-Organization. A mysterious young man contracted with the Octopus Devil. Tasked with monitoring Denji.',
      },
    },
  ],


  /* ──────────────────────────────────────────────────────────────
     🗂️ 캐릭터 카드 — 가이드 섹션에 표시되는 카드 목록
  ────────────────────────────────────────────────────────────── */
  characterCards: [
    {
      id:       'denji',
      name:     { ko: '덴지',          en: 'Denji' },
      rank:     { ko: '체인소 하이브리드', en: 'Chainsaw Hybrid' },
      image:    '/images/denji.png',
      cardDesc: {
        ko: '포치타와 계약한 <strong>체인소의 악마 하이브리드</strong>. 빚쟁이 야쿠자에 쫓기며 살다가 공안 특무에 합류한다. 빵과 여자친구를 꿈꾸는 단순하지만 순수한 욕망의 소유자. 마키마에 대한 맹목적인 감정으로 이용당하면서도 끝까지 살아남는 <strong>처절한 생존력</strong>의 주인공.',
        en: 'A <strong>Chainsaw Devil hybrid</strong> contracted with Pochita. Joins Public Safety after living as a yakuza debt slave. Driven by simple desires — bread and a girlfriend. Though manipulated by blind feelings for Makima, he survives to the end through sheer <strong>desperate tenacity</strong>.',
      },
    },
    {
      id:       'makima',
      name:     { ko: '마키마',        en: 'Makima' },
      rank:     { ko: '지배의 악마',   en: 'Control Devil' },
      image:    '/images/makima.png',
      cardDesc: {
        ko: '공안 정보 총무부 통제관. 실체는 <strong>지배의 악마</strong>로, 1부 최대 빌런. 압도적 카리스마와 미소 뒤에 모든 생명을 지배하려는 냉혹한 의지를 숨기고 있다. 덴지에게는 이상적인 존재였지만, 결국 가장 깊이 상처를 준 인물. <strong>공포 없이는 지배 불가능</strong>이라는 철칙을 가진다.',
        en: 'Public Safety Information Division controller. True identity: the <strong>Control Devil</strong>, the main villain of Part 1. Hides cold ambition to dominate all life behind overwhelming charisma. Denji\'s ideal figure who ultimately hurt him the deepest. Lives by the belief that <strong>domination requires fear</strong>.',
      },
    },
    {
      id:       'aki',
      name:     { ko: '아키 하야카와', en: 'Aki Hayakawa' },
      rank:     { ko: '공안 특무',     en: 'Public Safety Special Forces' },
      image:    '/images/aki.png',
      cardDesc: {
        ko: '<strong>여우 악마, 미래 악마, 저주의 검</strong>을 다루는 공안 특무 요원. 가족을 죽인 총의 악마에 복수하기 위해 목숨을 담보로 계약을 맺었다. 냉소적이지만 동료를 깊이 아끼며, 덴지에게 무뚝뚝하지만 진심으로 걱정하는 형 같은 존재. 비극적인 결말이 더욱 그를 기억하게 만든다.',
        en: 'Public Safety agent wielding <strong>Fox Devil, Future Devil, and a Cursed Sword</strong>. Made life-staking contracts to avenge his family killed by the Gun Devil. Cold on the surface but deeply protective of comrades — a gruff older-brother figure to Denji. His tragic end only makes him more memorable.',
      },
    },
    {
      id:       'reze',
      name:     { ko: '레제',          en: 'Reze' },
      rank:     { ko: '폭탄 하이브리드', en: 'Bomb Hybrid' },
      image:    '/images/reze.png',
      cardDesc: {
        ko: '<strong>소련이 창조한 폭탄 악마 하이브리드</strong>. 덴지의 체인소 심장을 탈취하는 임무를 띠고 접근했지만, 순수한 덴지에게 진짜 감정이 싹튼 비극적 인물. 폭발을 자유자재로 조종하는 압도적 전투력을 지녔으며, 체인소맨 1부에서 가장 강렬한 인상을 남긴 <strong>히로인이자 적</strong>.',
        en: 'A <strong>Bomb Devil hybrid created by the Soviet Union</strong>. Approached Denji to steal his Chainsaw heart, but developed real feelings for his pure nature — making her a tragic figure. Possesses overwhelming combat power through explosive mastery, and left the strongest impression in Part 1 as both <strong>heroine and enemy</strong>.',
      },
    },
    {
      id:       'kishibe',
      name:     { ko: '키시베',        en: 'Kishibe' },
      rank:     { ko: '공안 최강 사냥꾼', en: 'Strongest Hunter' },
      image:    '/images/kishibe.png',
      cardDesc: {
        ko: '공안 특무에서 <strong>가장 강한 인간 사냥꾼</strong>. 세 마리의 악마와 계약하고, 사랑했던 동료들을 모두 잃은 경험으로 인해 감정을 버린 살상 기계가 됐다. 덴지와 파워를 혹독하게 훈련시키지만, 인류를 지키려는 신념만큼은 흔들리지 않는다. <strong>체인소맨 세계관에서 가장 냉혹한 합리주의자</strong>.',
        en: 'The <strong>strongest human hunter</strong> in Public Safety. After contracting with three devils and losing all the comrades he loved, he became an emotionless killing machine. Trains Denji and Power mercilessly, yet his conviction to protect humanity never wavers. <strong>The most cold-blooded pragmatist in the Chainsaw Man universe</strong>.',
      },
    },
    {
      id:       'himeno',
      name:     { ko: '히메노',        en: 'Himeno' },
      rank:     { ko: '공안 특무',     en: 'Public Safety Special Forces' },
      image:    '/images/himeno.png',
      cardDesc: {
        ko: '<strong>유령 악마</strong>와 계약해 오른눈을 대가로 바친 공안 특무 요원. 지금까지 파트너를 모두 잃은 죄책감을 안고, 아키가 살아남기를 누구보다 바랐다. 겉으로는 쿨한 선배처럼 보이지만 내면엔 깊은 상처를 숨긴 캐릭터. 덴지에게 솔직한 감정을 드러낸 <strong>따뜻하고 슬픈 인물</strong>.',
        en: 'A Public Safety agent contracted with the <strong>Ghost Devil</strong>, having sacrificed her right eye. Carries guilt from losing every previous partner, and wishes for Aki\'s survival more than anything. Appears cool on the surface but hides deep wounds — a <strong>warm yet tragic character</strong> who showed genuine feelings for Denji.',
      },
    },
    {
      id:       'angel-devil',
      name:     { ko: '천사의 악마',   en: 'Angel Devil' },
      rank:     { ko: '공안 특무 · 악마', en: 'Public Safety · Devil' },
      image:    '/images/angel-devil.png',
      cardDesc: {
        ko: '천사의 모습을 한 악마로, <strong>접촉만으로 인간의 수명을 흡수</strong>하는 능력을 가진다. 흡수한 수명으로 무기를 창조할 수 있어 전투력이 막강하다. 인간을 혐오하지만 공안에서 일하는 아이러니한 존재. 키시베의 말에 따르면 악마들 중에서도 <strong>상위권 전투력</strong>을 가진다.',
        en: 'A devil in the form of an angel who <strong>absorbs human life spans through touch</strong>. Can forge powerful weapons from absorbed lifespans. An ironic existence who hates humans yet works for Public Safety. According to Kishibe, possesses <strong>top-tier combat power</strong> among all devils.',
      },
    },
    {
      id:       'pochita',
      name:     { ko: '포치타',        en: 'Pochita' },
      rank:     { ko: '체인소의 악마', en: 'Chainsaw Devil' },
      image:    '/images/pochita.png',
      cardDesc: {
        ko: '체인소의 악마의 진짜 모습. 다른 악마들에게 쫓기다 덴지를 만나 <strong>강아지 형태로 계약</strong>을 맺은 뒤 그의 심장이 됐다. 자신에게 상냥하게 대해준 덴지를 지키기 위해 스스로를 희생한 존재. 체인소맨 악마들 중에서도 <strong>역대급 두려움의 대상</strong>으로 알려진 존재.',
        en: 'The true form of the Chainsaw Devil. Pursued by other devils, met Denji and <strong>contracted in dog form</strong>, becoming his heart. Sacrificed himself to protect Denji who had been kind to him. Among all Chainsaw Man devils, known as an <strong>object of legendary fear</strong>.',
      },
    },
    {
      id:       'kobeni',
      name:     { ko: '코베니',        en: 'Kobeni' },
      rank:     { ko: '공안 특무',     en: 'Public Safety Special Forces' },
      image:    '/images/kobeni.png',
      cardDesc: {
        ko: '항상 불운하고 겁이 많아 보이지만, 공안 특무 중에서도 <strong>손에 꼽히는 전투 실력</strong>을 갖고 있다. 8형제의 학비를 벌기 위해 공안에 입사한 현실적인 인물. 악마와의 계약 내용을 끝까지 공개하지 않는 미스터리한 면이 있다. <strong>위기에서 돌변하는 반전 매력</strong>이 팬들에게 큰 사랑을 받는 캐릭터.',
        en: 'Always seems unlucky and cowardly, yet possesses <strong>top-tier combat skill</strong> among all Public Safety agents. Joined Public Safety to pay tuition for eight siblings — grounded in real-world motivations. Maintains mystery by never revealing her devil contract. A fan-favorite for her <strong>surprising reversal charm in crisis situations</strong>.',
      },
    },
    {
      id:       'yoshida',
      name:     { ko: '요시다',        en: 'Yoshida' },
      rank:     { ko: 'G기관 소속',    en: 'G-Organization' },
      image:    '/images/yoshida.png',
      cardDesc: {
        ko: 'G기관(정부 비밀 조직) 소속으로 <strong>문어 악마와 계약</strong>한 미스터리한 청년. 덴지를 겉으로는 친구처럼 대하지만, 실제 목적은 체인소맨을 감시·통제하는 것이다. 감정을 거의 드러내지 않으면서도 뛰어난 전투력을 가진 <strong>베일에 싸인 강자</strong>.',
        en: 'A mysterious young man from G-Organization (a secret government agency), <strong>contracted with the Octopus Devil</strong>. Treats Denji as a friend on the surface, but his true purpose is to monitor and control Chainsaw Man. An <strong>enigmatic powerhouse</strong> who rarely shows emotion but possesses exceptional combat ability.',
      },
    },
  ],


  /* ──────────────────────────────────────────────────────────────
     🔍 SEO
  ────────────────────────────────────────────────────────────── */
  seo: {
    pageTitle:    '체인소맨 캐릭터닮은꼴 | AI 캐릭터 분석기',
    description:  '체인소맨 캐릭터닮은꼴 AI 분석기! 내 얼굴이 덴지·마키마·아키·레제 중 어떤 캐릭터와 닮았는지 AI로 바로 분석. 웹캠 또는 사진 업로드 지원. 무료.',
    keywords:     '체인소맨, 덴지, 마키마, 아키, 레제, 포치타, 코베니, 히메노, 캐릭터닮은꼴, AI 분석, Chainsaw Man, CSM, lookalike, face analysis',
    ogTitle:      '체인소맨 캐릭터닮은꼴 AI 분석기',
    ogDescription:'체인소맨 캐릭터닮은꼴 무료 AI 분석기! 덴지·마키마·아키·레제·키시베·히메노·천사의 악마·포치타·코베니·요시다 중 내 얼굴과 가장 닮은 캐릭터를 즉시 분석.',
    ogImage:      'https://your-domain.pages.dev/images/reze.png',  // ← 교체 필요
    ogImageAlt:   '체인소맨 캐릭터닮은꼴 AI 분석기',
    appName:      '체인소맨캐릭터닮은꼴',
    appFullName:  'Chainsaw Man Character Lookalike AI Analyzer',
    themeColor:   '#030810',
    datePublished:'2026-02-23',
    dateModified: '2026-02-23',
    appFeatures:  ['AI 얼굴 분석', '캐릭터 닮은꼴 매칭', '웹캠 지원', '사진 업로드', '무료 이용'],
  },


  /* ──────────────────────────────────────────────────────────────
     📱 SNS 공유
  ────────────────────────────────────────────────────────────── */
  share: {
    hashtags:   '#체인소맨 #체인소맨닮은꼴 #ChainsawMan #체인소맨AI',
    shareTitle: '체인소맨 캐릭터닮은꼴 AI 분석기',
    resultText: function(name, rank, score, url) {
      return '⛓️ 체인소맨 닮은꼴 테스트!\n나는 ' + name + '(' + rank + ')와 ' + score + ' 닮았다!\n너는 어떤 캐릭터랑 닮았어? 👇\n' + url;
    },
    defaultText: function(url) {
      return '⛓️ 체인소맨 닮은꼴 AI 분석기\n내 얼굴이 어떤 체인소맨 캐릭터와 닮았는지 무료로 바로 분석!\n' + url;
    },
    resultCardTitle:    '체인소맨 캐릭터닮은꼴 AI 분석 결과',
    resultCardFooter:   function(url, hashtags) { return url + '  |  ' + hashtags; },
    resultCardFilename: function(name, score) { return '체인소맨닮은꼴_' + name + '_' + score + '.png'; },
    scoreLabel: '유사도',
  },


  /* ──────────────────────────────────────────────────────────────
     📖 가이드 섹션 콘텐츠
  ────────────────────────────────────────────────────────────── */
  guide: {

    howtoTitle: { ko: '⚡ 이용 방법', en: '⚡ How to Use' },
    howtoSteps: [
      {
        ko: '<strong>카메라 탭</strong> 선택 후 \'분석 시작\'을 클릭하면 웹캠이 활성화됩니다. 브라우저의 카메라 접근 허용을 눌러주세요.',
        en: 'Select the <strong>Camera tab</strong> and click \'Start Analysis\' to activate your webcam. Allow camera access in the browser prompt.',
      },
      {
        ko: '얼굴이 <strong>프레임 중앙</strong>에 오도록 위치를 조절하세요. 밝은 조명에서 더 정확한 결과를 얻을 수 있습니다.',
        en: 'Position your face at the <strong>center of the frame</strong>. Good lighting improves accuracy significantly.',
      },
      {
        ko: '<strong>\'스냅샷 찍기\'</strong>를 누르면 해당 순간의 이미지를 AI가 분석합니다.',
        en: 'Press <strong>\'Take Snapshot\'</strong> to have the AI analyze your face instantly.',
      },
      {
        ko: '<strong>이미지 업로드 탭</strong>에서 사진 파일을 드래그&amp;드롭하거나 클릭해 업로드할 수 있습니다. 모바일에서는 갤러리 사진도 바로 선택 가능.',
        en: 'In the <strong>Upload tab</strong>, drag &amp; drop or click to upload a photo. On mobile, select directly from your gallery.',
      },
      {
        ko: '결과로 <strong>가장 닮은 체인소맨 캐릭터</strong>와 각 캐릭터별 유사도 퍼센트가 표시됩니다. 친구와 공유해보세요!',
        en: 'Results show your <strong>closest Chainsaw Man match</strong> and similarity percentages. Share with friends!',
      },
    ],

    aboutTitle: { ko: '⛓️ 체인소맨(チェンソーマン)이란?', en: '⛓️ What is Chainsaw Man?' },
    aboutParas: [
      {
        ko: '<strong>체인소맨(チェンソーマン)</strong>은 후지모토 타츠키의 만화로, <em>주간 소년 점프</em>에서 2018년부터 2020년까지 연재된 1부와 2020년부터 연재 중인 2부로 구성된 다크 액션 만화다. 체인소 악마와 합체한 소년 <strong>덴지</strong>가 공안 특무부에서 악마를 사냥하는 이야기를 담고 있다.',
        en: '<strong>Chainsaw Man</strong> (チェンソーマン) is a dark action manga by Tatsuki Fujimoto, serialized in Weekly Shonen Jump. Part 1 ran from 2018 to 2020, with Part 2 ongoing since then. It follows <strong>Denji</strong>, a boy who merges with the Chainsaw Devil and hunts demons for Public Safety.',
      },
      {
        ko: '악마들이 넘치는 세계에서 사람들의 <strong>공포</strong>로 악마가 탄생하고, 체인소맨의 세계에서는 두려움이 곧 힘의 원천이다. 공안 특무부는 악마를 이용하거나 악마와 계약한 사냥꾼들로 이루어지며, 이들이 더 강한 악마에 맞서 싸우는 구조를 가진다.',
        en: 'In a world teeming with devils, <strong>fear</strong> is what births them — making terror the source of power. The Public Safety Special Forces consists of hunters who use or contract with devils, battling against even more powerful ones.',
      },
      {
        ko: '탁월한 연출과 예측 불가능한 전개, 캐릭터의 허망한 죽음들이 독자에게 강렬한 인상을 남기며 <strong>현세대 최고의 다크 액션 만화</strong>로 평가받는다. 애니메이션은 MAPPA 스튜디오가 제작해 2022년에 방영됐다.',
        en: 'Celebrated for its brilliant direction, unpredictable plot, and gut-punch character deaths, it\'s regarded as <strong>the defining dark action manga of its generation</strong>. The anime adaptation by MAPPA studio aired in 2022.',
      },
    ],

    charGuideTitle:    { ko: '체인소맨 캐릭터 가이드', en: 'Chainsaw Man Character Guide' },
    charGuideSubtitle: { ko: 'Chainsaw Man — Character Encyclopedia', en: 'Chainsaw Man — Character Encyclopedia' },

    aiTitle: { ko: '🧠 AI 작동 원리', en: '🧠 How the AI Works' },
    aiParas: [
      {
        ko: '본 서비스는 <strong>Google Teachable Machine</strong>으로 학습된 딥러닝 이미지 분류 모델을 사용합니다. TensorFlow.js를 통해 브라우저 내에서 직접 추론이 이루어지며, 사용자의 이미지는 어떤 서버에도 전송되지 않습니다.',
        en: 'This service uses a deep learning model trained with <strong>Google Teachable Machine</strong>. AI inference runs directly in your browser via TensorFlow.js — your images are never sent to any server.',
      },
      {
        ko: '모든 처리는 사용자의 기기(브라우저) 안에서만 진행되므로 개인 정보 유출 위험이 없습니다. 결과는 <strong>재미로 즐기는 엔터테인먼트 콘텐츠</strong>이며, 진지한 생체인식 도구가 아닙니다.',
        en: 'All processing happens only within your device. Results are <strong>entertainment content for fun</strong>, not a serious biometric tool.',
      },
    ],

    faqTitle: { ko: '❓ 자주 묻는 질문 (FAQ)', en: '❓ FAQ' },
    faqItems: [
      {
        q: { ko: 'Q. 사진이 저장되나요?',                      en: 'Q. Are my photos saved?' },
        a: { ko: '아닙니다. 모든 분석은 브라우저 내에서 실시간 처리되며, 서버로 전송되거나 저장되지 않습니다. 분석 즉시 데이터는 삭제됩니다.',
             en: 'No. All analysis is processed in real-time within your browser and never sent to any server. Data is deleted immediately after analysis.' },
      },
      {
        q: { ko: 'Q. 결과가 정확한가요?',                      en: 'Q. Are results accurate?' },
        a: { ko: '순수 엔터테인먼트 목적의 AI 서비스입니다. 여러 번 시도하거나 다양한 사진으로 해보면 더 재미있게 즐길 수 있습니다.',
             en: 'This is purely entertainment. Try multiple times or different photos for more fun!' },
      },
      {
        q: { ko: 'Q. 모바일에서도 되나요?',                    en: 'Q. Does it work on mobile?' },
        a: { ko: 'iOS Safari, Android Chrome 모두 지원합니다. 이미지 업로드 탭으로 갤러리 사진을 사용하거나 카메라로 바로 촬영할 수 있습니다.',
             en: 'Yes, works on iOS Safari and Android Chrome. Use the upload tab for gallery photos or direct camera.' },
      },
      {
        q: { ko: 'Q. 카메라 권한을 거부했어요.',                 en: 'Q. I denied camera permission.' },
        a: { ko: '이미지 업로드 탭을 이용해주세요. 브라우저 주소창 자물쇠 아이콘에서 권한을 다시 허용할 수 있습니다.',
             en: 'Use the upload tab instead. You can re-enable camera permission via the lock icon in your browser\'s address bar.' },
      },
      {
        q: { ko: 'Q. 분석 시간이 얼마나 걸리나요?',              en: 'Q. How long does analysis take?' },
        a: { ko: '분석 자체는 <strong>1~3초</strong>면 됩니다. 첫 접속 시 AI 모델(약 5~15MB) 로드에 5~15초가 소요될 수 있습니다.',
             en: 'Analysis itself takes <strong>1-3 seconds</strong>. Initial model loading (~5-15MB) may take 5-15 seconds on first visit.' },
      },
      {
        q: { ko: 'Q. 무료인가요?',                              en: 'Q. Is it free?' },
        a: { ko: '<strong>완전 무료</strong>입니다. 회원가입·로그인·결제 없이 바로 사용할 수 있습니다.',
             en: '<strong>Completely free.</strong> No sign-up, login, or payment required.' },
      },
    ],

    ratingTitle:    '⭐ 서비스를 평가해주세요',
    ratingSubtitle: {
      ko: '체인소맨 캐릭터닮은꼴 AI 분석기, 어떠셨나요?',
      en: 'How was the Chainsaw Man Character Lookalike Analyzer?',
    },
    ratingLabels: ['', '별로에요', '아쉬워요', '괜찮아요', '좋아요!', '최고예요! 🔥'],

  }, // end guide


  /* ──────────────────────────────────────────────────────────────
     🦶 푸터
  ────────────────────────────────────────────────────────────── */
  footer: {
    mainText:  'CHAINSAW MAN · CHARACTER ANALYZER',
    copyright: '체인소맨 © 후지모토 타츠키 / 集英社',
    poweredBy: {
      ko: '본 서비스는 Teachable Machine AI를 사용합니다',
      en: 'Powered by Teachable Machine AI',
    },
  },

}; // end SITE_CONFIG
