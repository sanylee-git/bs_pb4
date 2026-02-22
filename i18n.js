/* ================================================================
   i18n.js — 언어 전환 (KO / EN)
   모든 번역 사전 + applyLang / setLang / t 유틸
   ================================================================ */

const LANG_DATA = {

  /* ═══════════════════════════════════ 한국어 ═══════════════════════════════════ */
  ko: {
    /* ── 공통 Nav ── */
    'nav.home':       '홈',
    'nav.about':      '소개',
    'nav.contact':    '문의',
    'nav.privacy':    '개인정보',
    'nav.menu-aria':  '메뉴 열기',

    /* ── 공통 Footer ── */
    'footer.home':          '홈',
    'footer.about':         '소개',
    'footer.privacy-link':  '개인정보처리방침',
    'footer.contact-link':  '문의하기',
    'footer.copy2':         '본 서비스는 Teachable Machine AI를 사용합니다',

    /* ── index.html ── */
    'index.tagline':          '당신은 어떤 상현을 닮았을까?',
    'index.badge1': '상현 壱', 'index.badge2': '상현 弐', 'index.badge3': '상현 参',
    'index.badge4': '상현 肆', 'index.badge5': '상현 伍', 'index.badge6': '상현 陸',
    'index.tab.cam':          '📷 카메라',
    'index.tab.upload':       '🖼️ 이미지 업로드',
    'index.cam.placeholder':  '카메라를 시작하세요',
    'index.upload.click-html':'<strong>클릭</strong>하거나 이미지를 드래그 &amp; 드롭',
    'index.upload.types':     'JPG · PNG · WEBP 지원',
    'index.btn.start':        '⚡ 분석 시작',
    'index.btn.snap':         '📸 스냅샷 찍기',
    'index.btn.restart':      '⚡ 다시 시작',
    'index.loading':          '모델 불러오는 중...',
    'index.result.label':     '당신과 닮은 상현',
    'index.result.score-label':'유사도',
    'index.result.all':       '전체 분석 결과',
    'index.comments':         '💬 댓글 · Comments',
    /* 동적 상태 메시지 */
    'index.status.preparing': '모델을 준비 중입니다...',
    'index.status.loading':   'AI 모델을 로드하고 있습니다...',
    'index.status.ready':     '✅ 준비 완료 — 카메라를 시작하거나 이미지를 업로드하세요',
    'index.status.fail':      '❌ 모델 로드 실패. 네트워크 상태를 확인해주세요.',
    'index.status.retrying':  '⟳ 모델 재시도 중',
    'index.btn.retry':        '재시도',
    'index.status.cam-access':'카메라 접근 중...',
    'index.status.cam-fail':  '❌ 카메라를 사용할 수 없습니다. 이미지 업로드 탭을 이용해주세요.',
    'index.status.scanning':  '실시간 분석 중... 얼굴을 프레임에 맞춰주세요',
    'index.status.done':      '분석 완료!',
    'index.status.no-image':  '⚠️ 먼저 이미지를 선택해주세요',
    'index.status.img-ready': '이미지 선택 완료 — 분석 시작을 눌러주세요',
    'index.status.error-required': '⚠️ 이름, 이메일, 문의 내용을 모두 입력해주세요.',

    /* ── 가이드 — 이용 방법 ── */
    'guide.howto.h2': '⚡ 이용 방법',
    'guide.howto.s1-html': '<strong>카메라 탭</strong> 선택 후 \'분석 시작\'을 클릭하면 웹캠이 활성화됩니다. 브라우저의 카메라 접근 허용을 눌러주세요.',
    'guide.howto.s2-html': '얼굴이 <strong>프레임 중앙</strong>에 오도록 위치를 조절하세요. 밝은 조명이 있는 환경에서 더 정확한 결과를 얻을 수 있습니다.',
    'guide.howto.s3-html': '<strong>\'스냅샷 찍기\'</strong>를 누르면 해당 순간의 이미지를 AI가 분석합니다. 결과가 아래에 표시됩니다.',
    'guide.howto.s4-html': '<strong>이미지 업로드 탭</strong>에서는 사진 파일을 드래그&amp;드롭하거나 클릭하여 업로드할 수 있습니다. 모바일에서는 갤러리 사진을 바로 선택할 수 있습니다.',
    'guide.howto.s5-html': '분석 결과로 <strong>가장 닮은 상현 캐릭터</strong>와 각 캐릭터별 유사도 퍼센트가 표시됩니다. 결과를 스크린샷 찍어 친구와 공유해보세요!',

    /* ── 가이드 — 상현이란? ── */
    'guide.uppermoon.h2': '👁️ 상현(上弦)이란?',
    'guide.uppermoon.p1-html': '귀멸의 칼날에서 <strong>상현(上弦)</strong>은 귀신들의 왕 키부츠지 무잔의 친위대라 할 수 있는 최강의 귀신 집단이다. 상현 일(壱)부터 상현 육(陸)까지 총 6등급으로 이루어져 있으며, 숫자가 낮을수록 더 강력한 귀신임을 의미한다.',
    'guide.uppermoon.p2-html': '상현들은 일반 귀신과는 차원이 다른 전투력을 보유하고 있으며, 각자 고유한 <strong>혈귀술(血鬼術)</strong>이라 불리는 특수 능력을 구사한다. 이들은 수백 년에 걸쳐 인간의 피를 흡수하며 살아남은 존재들로, 인간의 감정과 기억, 과거의 상처를 여전히 안고 살아간다.',
    'guide.uppermoon.p3-html': '귀살대(鬼殺隊)의 핵심 전력인 기둥(柱)들도 상현과 맞붙으면 목숨을 잃을 수 있을 만큼 압도적인 강함을 자랑한다. 시리즈 전반에 걸쳐 최강의 빌런으로 군림하며 팬들에게 강렬한 인상을 남긴 귀멸의 칼날 최고 인기 캐릭터 그룹이기도 하다.',

    /* ── 가이드 — 캐릭터 카드 ── */
    'guide.char-title': '상현 캐릭터 가이드',
    'char.kokushibo.rank': '상현 壱',
    'char.douma.rank':     '상현 弐',
    'char.akaza.rank':     '상현 参',
    'char.hantengu.rank':  '상현 肆',
    'char.gyokko.rank':    '상현 伍',
    'char.dakigyutaro.rank': '상현 陸',
    'char.kokushibo.desc-html': '무잔을 제외한 <strong>귀신 중 최강</strong>의 존재. 본명은 미치카츠 츠기쿠니로, 귀살대 역사상 가장 위대한 검사 요리이치 츠기쿠니의 쌍둥이 형이다. 뛰어난 형에 대한 열등감으로 스스로 귀신이 되기를 선택한 비극적 인물. 스스로 창시한 <strong>달의 호흡(月の呼吸)</strong>과 여섯 개의 눈, 온몸에 돋아난 칼날이 특징으로, 세 명의 기둥이 합력해도 쉽게 쓰러뜨리기 어렵다.',
    'char.douma.desc-html': '무지개색 눈을 가진 미형의 귀신. 인간 시절부터 <strong>어떤 감정도 느끼지 못하는</strong> 공허한 영혼의 소유자로, 허무주의적 세계관을 가진다. 화려한 부채로 얼음과 냉기를 자유자재로 다루는 혈귀술을 구사한다. 겉으로는 온화하고 매력적이지만 인간을 단순한 식사로 여기는 잔혹한 본성을 지닌다. 카나오·이노스케가 합력하고 시노부의 희생으로 겨우 격파하는 역대급 강적.',
    'char.akaza.desc-html': '<strong>오로지 강자와의 싸움만을 추구</strong>하는 전투 귀신. 인간 시절 이름은 핫케이쥬로로, 아버지를 위해 도둑질을 하다 검사 도장에 입문한 불우한 과거를 가진다. 수련으로 쌓은 무술이 귀신의 힘과 결합한 파괴적 전투력의 소유자. 온몸에 새겨진 붉은 문신과 격렬한 전투 스타일로 팬들에게 강렬한 인상을 남겼다. 탄지로와의 격전에서 인간 시절 기억과 마주하며 스스로 붕괴한다.',
    'char.hantengu.desc-html': '극도의 겁쟁이 귀신이지만, <strong>두려움이라는 감정 자체가 강력한 분신을 탄생</strong>시킨다. 공포·기쁨·분노·슬픔 등 각각의 감정이 독립적인 귀신으로 분열되어 싸운다. 본체는 오히려 가장 약하지만 몸을 숨기며 분신들로 싸우는 전략을 구사한다. 극도의 겁쟁이라는 설정이 역설적으로 공략하기 가장 까다로운 상현 중 하나로 만들었다.',
    'char.gyokko.desc-html': '물고기 인간처럼 기이한 외모를 지닌 귀신으로, <strong>극도로 일그러진 미적 감각</strong>을 자랑한다. 거대한 항아리들을 근거지로 삼아 이동하며, 물고기 형태의 혈귀술 조각들로 공격한다. 자신의 작품에 극도로 집착하며 자기 도취적인 성격을 가진다. 무이치로 토키토와의 격전에서 쓰러지지만, 독특한 비주얼로 팬들에게 오래 기억되는 캐릭터다.',
    'char.dakigyutaro.desc-html': '<strong>오빠 규타로와 여동생 다키</strong>, 두 귀신이 하나의 육체를 공유하는 독특한 구조. 규타로는 독이 담긴 낫으로 잔혹하게 싸우며, 다키는 오비(帯)라 불리는 대형 띠를 이용한 현란한 공격을 펼친다. 남매는 인간 시절 유흥가에서 극도로 비참한 삶을 살았으며, 그 고통이 귀신이 된 후에도 강력한 유대감으로 이어진다. 탄지로·젠이츠·이노스케 셋이 힘을 합쳐 겨우 쓰러뜨리는 강적.',

    /* ── 가이드 — AI 원리 ── */
    'guide.ai.h2': '🧠 AI 작동 원리',
    'guide.ai.p1-html': '본 서비스는 <strong>Google Teachable Machine</strong>을 기반으로 학습된 딥러닝 이미지 분류 모델을 사용합니다. TensorFlow.js 라이브러리를 통해 브라우저 내에서 직접 AI 추론이 이루어지며, 사용자의 이미지는 외부 서버로 전송되지 않습니다.',
    'guide.ai.p2-html': '모든 처리는 사용자의 기기(브라우저) 안에서만 진행되므로 개인 정보가 외부로 유출될 위험이 없습니다. AI 모델은 얼굴 형태, 이목구비 비율 등의 특징을 분석하여 어떤 캐릭터와 가장 유사한 특징을 가지는지 수치화합니다. 결과는 <strong>재미로 즐기는 엔터테인먼트 콘텐츠</strong>이며, 진지한 생체인식 도구가 아닙니다.',

    /* ── 가이드 — FAQ ── */
    'guide.faq.h2': '❓ 자주 묻는 질문 (FAQ)',
    'guide.faq.q1': 'Q. 촬영된 이미지가 저장되나요?',
    'guide.faq.a1': '아닙니다. 모든 이미지 분석은 브라우저 내에서 실시간으로 처리되며, 서버나 외부에 저장되지 않습니다. 분석이 끝나는 즉시 데이터는 삭제됩니다.',
    'guide.faq.q2': 'Q. 분석 결과가 항상 정확한가요?',
    'guide.faq.a2': '본 서비스는 AI 딥러닝 모델을 기반으로 하지만, 순수한 엔터테인먼트 목적의 콘텐츠입니다. 결과는 참고용으로만 활용해주세요. 여러 번 시도하거나 다양한 사진으로 해보면 더 재미있게 즐길 수 있습니다.',
    'guide.faq.q3': 'Q. 모바일에서도 사용 가능한가요?',
    'guide.faq.a3': 'iOS Safari와 Android Chrome에서 이용 가능합니다. \'이미지 업로드\' 탭을 이용하면 갤러리 사진을 업로드하거나 카메라로 바로 촬영할 수 있습니다.',
    'guide.faq.q4': 'Q. 어떤 캐릭터가 분석 대상인가요?',
    'guide.faq.a4': '코쿠시보(상현 壱), 도우마(상현 弐), 아카자(상현 参), 한텐구(상현 肆), 교코(상현 伍), 규타로/다키(상현 陸) 총 상현 6등급의 캐릭터가 포함되어 있습니다.',
    'guide.faq.q5': 'Q. 카메라 권한을 거부했어요.',
    'guide.faq.a5-html': '카메라 탭 대신 \'이미지 업로드\' 탭을 이용해주세요. 사진 파일을 직접 선택하거나 드래그&amp;드롭하여 분석할 수 있습니다. 카메라 권한은 브라우저 설정에서 언제든지 변경 가능합니다.',

    /* ── about.html ── */
    'about.page-title': '서비스 소개',
    'about.page-sub':   '귀멸의 칼날 상현 닮은꼴 AI 분석기에 대해 알아보세요',
    'about.s1.h2': '🗡️ 이 서비스는 무엇인가요?',
    'about.s1.p1-html': '<strong>귀멸의 칼날 상현 닮은꼴 분석기</strong>는 인기 애니메이션 <em>귀멸의 칼날(鬼滅の刃)</em>에 등장하는 최강의 귀신 집단 \'상현(上弦)\' 캐릭터 중 당신과 가장 닮은 캐릭터를 AI로 분석해주는 엔터테인먼트 서비스입니다.',
    'about.s1.p2-html': '웹캠으로 실시간 촬영하거나 사진을 업로드하면, 브라우저 내에서 직접 AI 추론이 이루어져 코쿠시보·도우마·아카자·한텐구·교코·규타로/다키 중 어떤 캐릭터와 가장 유사한 특징을 가지는지 퍼센트로 보여줍니다. 결과는 재미로 즐기는 엔터테인먼트 콘텐츠이며, 진지한 분석 도구가 아닙니다.',
    'about.s1.p3': '이 서비스는 귀멸의 칼날 팬이라면 누구나 즐길 수 있도록 제작되었습니다. 친구와 함께 촬영해보고 결과를 공유하거나, SNS에 올려 누가 어떤 상현과 닮았는지 비교해보세요!',
    'about.s2.h2': '🤖 사용된 기술',
    'about.s2.tm-p-html': '본 서비스의 AI 모델은 Google이 제공하는 <strong>Teachable Machine</strong> 플랫폼으로 학습되었습니다. Teachable Machine은 누구나 쉽게 이미지·오디오·포즈 인식 모델을 학습할 수 있는 도구로, 복잡한 코딩 없이 머신러닝 모델을 제작·배포할 수 있습니다.',
    'about.s2.tf-p-html': '학습된 모델은 <strong>TensorFlow.js</strong>를 통해 브라우저 내에서 직접 실행됩니다. TensorFlow.js는 Google이 개발한 오픈소스 머신러닝 라이브러리로, JavaScript 환경에서 딥러닝 모델의 학습과 추론을 가능하게 합니다. 서버 전송 없이 사용자의 기기에서 모든 처리가 완료되므로 빠르고 안전합니다.',
    'about.s2.webrtc-h3': 'WebRTC 웹캠 API',
    'about.s2.webrtc-p-html': '실시간 카메라 기능은 브라우저 표준 기술인 <strong>WebRTC</strong>의 MediaDevices API를 사용합니다. 카메라 영상은 서버로 전송되지 않고 오직 브라우저 내에서만 처리됩니다.',
    'about.s3.h2': '🔒 개인정보 보호',
    'about.s3.p1-html': '이 서비스에서 웹캠으로 촬영하거나 업로드한 이미지는 <strong>서버로 전송되지 않습니다</strong>. 모든 AI 분석은 사용자의 브라우저(기기) 내에서만 처리되며, 이미지 데이터는 분석 즉시 폐기됩니다. 당사는 사용자의 얼굴 이미지를 수집·저장·학습에 사용하지 않습니다.',
    'about.s3.p2-html': '자세한 개인정보 처리 방침은 <a href="/privacy.html">개인정보처리방침 페이지</a>를 확인해주세요.',
    'about.s4.h2': '⚠️ 저작권 안내',
    'about.s4.p1-html': '귀멸의 칼날(鬼滅の刃)의 모든 저작권은 원작자 <strong>吾峠呼世晴</strong> 및 <strong>集英社(슈에이샤)</strong>에 귀속됩니다. 본 서비스는 팬이 만든 비상업적 엔터테인먼트 서비스로, 공식 귀멸의 칼날 제작사·배급사와 어떠한 공식적인 관계도 없습니다.',
    'about.s4.p2-html': '캐릭터 이름 및 설정에 관한 모든 권리는 해당 저작권자에게 있습니다. 만약 저작권 관련 문의 사항이 있으시면 <a href="/contact.html">문의 페이지</a>를 통해 연락해주세요.',
    'about.s5.h2': '📬 문의하기',
    'about.s5.p1': '서비스 이용 중 불편하신 점, 버그 신고, 개선 제안 등이 있으시면 언제든지 문의해주세요. 귀멸의 칼날 팬 여러분의 소중한 피드백으로 더 좋은 서비스를 만들어 나가겠습니다.',
    'about.s5.link-html': '→ <a href="/contact.html">문의 페이지로 이동하기</a>',

    /* ── privacy.html ── */
    'privacy.page-title': '개인정보처리방침',
    'privacy.page-sub':   '본 서비스가 수집·이용하는 정보에 대해 안내합니다',
    'privacy.date':       '최종 업데이트: 2026년 02월 20일',
    'privacy.s1.h2': '1. 개요',
    'privacy.s1.p-html': '귀멸의 칼날 상현 닮은꼴 서비스(이하 "본 서비스")는 사용자의 개인정보를 소중히 여기며, 관련 법령에 따라 적법하게 처리합니다. 본 방침은 본 서비스를 이용하는 과정에서 수집되는 정보의 종류, 이용 목적, 보관 방식을 설명합니다.',
    'privacy.s2.h2': '2. 수집하는 정보',
    'privacy.s2.h3-cam': '2-1. 카메라·이미지 데이터',
    'privacy.s2.cam-p-html': '본 서비스는 사용자가 <strong>카메라를 사용하거나 이미지를 업로드</strong>하는 경우에만 해당 영상·이미지 데이터를 처리합니다. 이 데이터는 사용자의 브라우저 내에서만 AI 분석에 사용되며, 당사 서버 또는 외부 서버로 전송되지 않습니다. 분석이 완료된 후 이미지 데이터는 즉시 삭제되며 어떠한 형태로도 저장·보관되지 않습니다.',
    'privacy.s2.h3-auto': '2-2. 자동 수집 정보 (쿠키 및 로그)',
    'privacy.s2.auto-p': '본 서비스 방문 시 아래와 같은 정보가 자동으로 수집될 수 있습니다.',
    'privacy.s2.li1': '브라우저 종류 및 버전',
    'privacy.s2.li2': '운영체제 정보',
    'privacy.s2.li3': '페이지 방문 시간 및 체류 시간',
    'privacy.s2.li4': '광고 서비스 제공을 위한 쿠키 (아래 광고 섹션 참고)',
    'privacy.s2.h3-comment': '2-3. 댓글 서비스',
    'privacy.s2.comment-p-html': '본 서비스는 Disqus 댓글 시스템을 사용합니다. 댓글 작성 시 Disqus의 개인정보처리방침이 적용되며, Disqus가 별도로 정보를 수집·처리합니다. 자세한 내용은 <a href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy" target="_blank" rel="noopener">Disqus 개인정보처리방침</a>을 참고해주세요.',
    'privacy.s2.h3-form': '2-4. 문의 양식',
    'privacy.s2.form-p': '문의 페이지의 양식을 통해 이름, 이메일 주소, 문의 내용을 제출할 경우, 해당 정보는 Formspree 서비스를 통해 전달됩니다. 수집된 정보는 문의 처리 목적으로만 사용됩니다.',
    'privacy.s3.h2': '3. Google AdSense 및 광고 쿠키',
    'privacy.s3.p1-html': '본 서비스는 <strong>Google AdSense</strong>를 통해 광고를 게재합니다. Google AdSense는 사용자에게 맞춤형 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.',
    'privacy.s3.p2': 'Google AdSense와 관련하여 다음 사항을 안내합니다:',
    'privacy.s3.li1-html': 'Google은 사용자의 방문 기록 등을 바탕으로 관심 기반 광고를 제공할 수 있습니다.',
    'privacy.s3.li2-html': '사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google 광고 설정</a>에서 맞춤 광고를 비활성화할 수 있습니다.',
    'privacy.s3.li3-html': 'Google의 개인정보 처리에 대한 자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google 개인정보처리방침</a>을 참고하세요.',
    'privacy.s3.li4-html': '제3자 광고 쿠키는 <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener">NAI 옵트아웃 페이지</a>에서 비활성화할 수 있습니다.',
    'privacy.s4.h2': '4. 정보 이용 목적',
    'privacy.s4.p': '수집된 정보는 다음 목적으로만 이용됩니다:',
    'privacy.s4.li1': 'AI 이미지 분석 서비스 제공 (이미지 데이터 — 브라우저 내 처리만)',
    'privacy.s4.li2': '서비스 품질 개선 및 오류 파악',
    'privacy.s4.li3': '사용자 문의 처리 및 답변',
    'privacy.s4.li4': '맞춤형 광고 제공 (Google AdSense 쿠키)',
    'privacy.s4.p2': '본 서비스는 수집한 정보를 제3자에게 판매하거나 마케팅 목적으로 활용하지 않습니다.',
    'privacy.s5.h2': '5. 쿠키 설정',
    'privacy.s5.p': '사용자는 브라우저 설정을 통해 쿠키를 거부하거나 삭제할 수 있습니다. 다만 쿠키를 비활성화할 경우 일부 서비스 기능이 정상적으로 동작하지 않을 수 있습니다.',
    'privacy.s5.li1': 'Chrome: 설정 → 개인정보 보호 및 보안 → 쿠키 및 기타 사이트 데이터',
    'privacy.s5.li2': 'Safari: 설정 → Safari → 개인정보 보호',
    'privacy.s5.li3': 'Firefox: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터',
    'privacy.s6.h2': '6. 만 14세 미만 이용자',
    'privacy.s6.p': '본 서비스는 만 14세 미만의 아동을 대상으로 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만의 이용자는 보호자의 동의 하에 서비스를 이용하시기 바랍니다. 만 14세 미만 아동의 개인정보가 수집된 사실을 알게 된 경우 즉시 삭제 조치합니다.',
    'privacy.s7.h2': '7. 방침 변경',
    'privacy.s7.p': '본 개인정보처리방침은 법령·서비스 변경에 따라 업데이트될 수 있습니다. 변경 시 본 페이지 상단의 \'최종 업데이트\' 날짜가 수정되며, 중요한 변경 사항은 서비스 내 공지를 통해 알려드립니다.',
    'privacy.s8.h2': '8. 문의',
    'privacy.s8.p': '개인정보 처리와 관련한 문의, 열람·정정·삭제 요청은 아래를 통해 연락해주세요.',
    'privacy.s8.link-html': '→ <a href="/contact.html">문의 페이지 바로가기</a>',

    /* ── contact.html ── */
    'contact.page-title': '문의하기',
    'contact.page-sub':   '버그 신고, 개선 제안, 개인정보 관련 문의를 자유롭게 보내주세요',
    'contact.form.h2':             '✉️ 문의 양식',
    'contact.form.name-label':     '이름 / 닉네임',
    'contact.form.name-ph':        '귀신 사냥꾼 탄지로...',
    'contact.form.email-label':    '이메일 주소',
    'contact.form.subject-label':  '문의 유형',
    'contact.form.subject-default':'문의 유형을 선택해주세요',
    'contact.form.opt-bug':        '🐛 버그 신고',
    'contact.form.opt-suggest':    '💡 개선 제안',
    'contact.form.opt-privacy':    '🔒 개인정보 관련',
    'contact.form.opt-copyright':  '⚖️ 저작권 관련',
    'contact.form.opt-other':      '📌 기타',
    'contact.form.msg-label':      '문의 내용',
    'contact.form.msg-ph':         '문의 내용을 자세히 적어주세요...',
    'contact.form.btn':            '🗡️ 문의 보내기',
    'contact.form.sending':        '전송 중...',
    'contact.form.sent':           '✅ 전송 완료',
    'contact.form.success':        '✅ 문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.',
    'contact.form.error':          '❌ 전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
    'contact.form.err-required':   '⚠️ 이름, 이메일, 문의 내용을 모두 입력해주세요.',
    'contact.form.err-email':      '⚠️ 올바른 이메일 주소를 입력해주세요.',
    'contact.faq.h2': '❓ 자주 묻는 질문',
    'contact.faq.q1': 'Q. 카메라로 찍은 사진이 저장되나요?',
    'contact.faq.a1': '아닙니다. 모든 이미지 처리는 사용자의 브라우저 내에서만 이루어지며, 사진은 외부 서버로 전송되거나 저장되지 않습니다. 분석이 완료되는 즉시 데이터는 폐기됩니다.',
    'contact.faq.q2': 'Q. 분석 결과가 정확한가요?',
    'contact.faq.a2': '본 서비스는 엔터테인먼트 목적으로 제작된 AI 분석 도구입니다. 결과는 재미로 즐기는 용도이며, 과학적·의학적 분석 도구가 아닙니다. 결과에 너무 진지하게 임하지 않아도 됩니다 😄',
    'contact.faq.q3': 'Q. 어떤 브라우저에서 사용할 수 있나요?',
    'contact.faq.a3': 'Chrome, Safari, Firefox, Edge 등 최신 버전의 브라우저에서 이용 가능합니다. 카메라 기능은 HTTPS 환경에서만 동작하며, 브라우저의 카메라 접근 허용이 필요합니다.',
    'contact.faq.q4': 'Q. 모바일에서도 되나요?',
    'contact.faq.a4': '네! iOS Safari, Android Chrome에서도 이용 가능합니다. 이미지 업로드 탭을 선택하면 앨범에서 사진을 직접 업로드하거나 카메라로 촬영할 수 있습니다.',
  },

  /* ═══════════════════════════════════ English ═══════════════════════════════════ */
  en: {
    /* ── Common Nav ── */
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.contact':    'Contact',
    'nav.privacy':    'Privacy',
    'nav.menu-aria':  'Open Menu',

    /* ── Common Footer ── */
    'footer.home':          'Home',
    'footer.about':         'About',
    'footer.privacy-link':  'Privacy Policy',
    'footer.contact-link':  'Contact Us',
    'footer.copy2':         'This service uses Teachable Machine AI',

    /* ── index.html ── */
    'index.tagline':          'Which Upper Moon are you most like?',
    'index.badge1': 'Upper Moon 壱', 'index.badge2': 'Upper Moon 弐', 'index.badge3': 'Upper Moon 参',
    'index.badge4': 'Upper Moon 肆', 'index.badge5': 'Upper Moon 伍', 'index.badge6': 'Upper Moon 陸',
    'index.tab.cam':          '📷 Camera',
    'index.tab.upload':       '🖼️ Upload Image',
    'index.cam.placeholder':  'Start the camera',
    'index.upload.click-html':'<strong>Click</strong> or drag &amp; drop an image',
    'index.upload.types':     'JPG · PNG · WEBP supported',
    'index.btn.start':        '⚡ Analyze',
    'index.btn.snap':         '📸 Take Snapshot',
    'index.btn.restart':      '⚡ Restart',
    'index.loading':          'Loading model...',
    'index.result.label':     'Your Upper Moon Match',
    'index.result.score-label':'Similarity',
    'index.result.all':       'All Analysis Results',
    'index.comments':         '💬 Comments',
    /* Dynamic status messages */
    'index.status.preparing': 'Preparing model...',
    'index.status.loading':   'Loading AI model...',
    'index.status.ready':     '✅ Ready — Start the camera or upload an image',
    'index.status.fail':      '❌ Failed to load model. Check your network connection.',
    'index.status.retrying':  '⟳ Retrying model load',
    'index.btn.retry':        'Retry',
    'index.status.cam-access':'Accessing camera...',
    'index.status.cam-fail':  '❌ Camera unavailable. Please use the Upload Image tab.',
    'index.status.scanning':  'Analyzing... Center your face in the frame',
    'index.status.done':      'Analysis complete!',
    'index.status.no-image':  '⚠️ Please select an image first',
    'index.status.img-ready': 'Image selected — press Analyze to start',

    /* ── Guide — How to Use ── */
    'guide.howto.h2': '⚡ How to Use',
    'guide.howto.s1-html': 'Select the <strong>Camera tab</strong> and click "Analyze" to activate your webcam. Allow camera access when prompted by your browser.',
    'guide.howto.s2-html': 'Position your face in the <strong>center of the frame</strong>. Good lighting will give you more accurate results.',
    'guide.howto.s3-html': 'Press <strong>"Take Snapshot"</strong> to capture the current frame for AI analysis. Results will appear below.',
    'guide.howto.s4-html': 'In the <strong>Upload Image tab</strong>, drag &amp; drop or click to upload a photo. On mobile, you can select directly from your gallery.',
    'guide.howto.s5-html': 'Your results show the <strong>closest matching Upper Moon character</strong> with similarity percentages. Screenshot and share with friends!',

    /* ── Guide — What is Upper Moon? ── */
    'guide.uppermoon.h2': '👁️ What is Upper Moon (上弦)?',
    'guide.uppermoon.p1-html': 'In Demon Slayer, the <strong>Upper Moons (上弦)</strong> are the most powerful demons serving as Muzan Kibutsuji\'s elite guard. Ranked from Upper Moon 壱 (one) to 陸 (six), lower numbers indicate greater strength.',
    'guide.uppermoon.p2-html': 'The Upper Moons possess combat abilities far beyond ordinary demons, each wielding a unique power called <strong>Blood Demon Art (血鬼術)</strong>. They have survived for centuries consuming human blood, yet still carry the emotions and wounds of their human past.',
    'guide.uppermoon.p3-html': 'Even the elite Pillars (柱) of the Demon Slayer Corps risk their lives against an Upper Moon. They reign as the most powerful villains throughout the series and remain among the most beloved characters in the entire franchise.',

    /* ── Guide — Character Cards ── */
    'guide.char-title': 'Upper Moon Character Guide',
    'char.kokushibo.rank': 'Upper Moon 壱',
    'char.douma.rank':     'Upper Moon 弐',
    'char.akaza.rank':     'Upper Moon 参',
    'char.hantengu.rank':  'Upper Moon 肆',
    'char.gyokko.rank':    'Upper Moon 伍',
    'char.dakigyutaro.rank': 'Upper Moon 陸',
    'char.kokushibo.desc-html': 'The <strong>strongest demon</strong> after Muzan himself. Born Michikatsu Tsugikuni, he is the twin brother of Yoriichi — the greatest swordsman in history. Driven by lifelong envy, he chose to become a demon. His self-created <strong>Moon Breathing (月の呼吸)</strong>, six eyes, and blade-covered body make him nearly undefeatable even by three Pillars combined.',
    'char.douma.desc-html': 'A beautiful demon with rainbow-colored eyes. Born <strong>incapable of feeling any emotion</strong>, he holds a hollow nihilistic worldview. He wields fans to unleash deadly ice-based Blood Demon Art. Outwardly charming, he views humans as mere food. It took Kanao, Inosuke, and Shinobu\'s sacrifice to finally defeat him.',
    'char.akaza.desc-html': 'A combat demon who <strong>lives only for battle against the strong</strong>. Once a human named Hakuji, his tragic past led him to master martial arts — now amplified by demonic power into devastating force. His red tattoos and ferocious style left a lasting impression on fans. In his final battle with Tanjiro, he faces his human memories and destroys himself.',
    'char.hantengu.desc-html': 'An extreme coward, yet his <strong>very fear spawns powerful demon clones</strong>. Each emotion — terror, joy, rage, sorrow — splits into an independent demon that fights in his place. His true body is the weakest, hiding while clones battle. This cowardly premise makes him paradoxically one of the hardest Upper Moons to defeat.',
    'char.gyokko.desc-html': 'A demon with a bizarre fish-like appearance and a <strong>grotesquely distorted sense of beauty</strong>. He travels inside giant pots and attacks with fish-shaped Blood Demon Art. Obsessively attached to his "art" and deeply narcissistic. Though defeated by Muichiro Tokito, his unforgettable design made him a fan favorite.',
    'char.dakigyutaro.desc-html': 'A <strong>brother-sister pair</strong> — Gyutaro and Daki — who share a single body. Gyutaro fights with venomous sickles, while Daki wields her powerful Obi sashes. Both endured a wretched life in the red-light district as humans, forging an unbreakable bond as demons. It took Tanjiro, Zenitsu, and Inosuke together to bring them down.',

    /* ── Guide — AI ── */
    'guide.ai.h2': '🧠 How the AI Works',
    'guide.ai.p1-html': 'This service uses a deep learning image classification model trained with <strong>Google Teachable Machine</strong>. AI inference runs entirely in your browser via TensorFlow.js — your image is never sent to any external server.',
    'guide.ai.p2-html': 'All processing happens on your own device, so there is zero risk of personal data leakage. The AI analyzes facial features to quantify which character you most resemble. Results are purely <strong>entertainment content</strong> and not a serious biometric tool.',

    /* ── Guide — FAQ ── */
    'guide.faq.h2': '❓ FAQ',
    'guide.faq.q1': 'Q. Are my photos saved?',
    'guide.faq.a1': 'No. All image analysis is processed in real time within your browser and is never stored on any server. Data is deleted immediately after analysis.',
    'guide.faq.q2': 'Q. Are the results accurate?',
    'guide.faq.a2': 'This is pure entertainment content based on an AI model. Results are for fun only. Try multiple times or different photos for the best experience!',
    'guide.faq.q3': 'Q. Can I use it on mobile?',
    'guide.faq.a3': 'Yes! Available on iOS Safari and Android Chrome. Use the "Upload Image" tab to select from your gallery or take a new photo.',
    'guide.faq.q4': 'Q. Which characters are included?',
    'guide.faq.a4': 'Kokushibo (Upper Moon 壱), Douma (Upper Moon 弐), Akaza (Upper Moon 参), Hantengu (Upper Moon 肆), Gyokko (Upper Moon 伍), Gyutaro/Daki (Upper Moon 陸) — all 6 Upper Moons.',
    'guide.faq.q5': 'Q. I denied camera permission.',
    'guide.faq.a5-html': 'Use the "Upload Image" tab instead. You can select a photo file directly or drag &amp; drop it. Camera permissions can be changed anytime in your browser settings.',

    /* ── about.html ── */
    'about.page-title': 'About This Service',
    'about.page-sub':   'Learn about the Demon Slayer Upper Moon AI Analyzer',
    'about.s1.h2': '🗡️ What is this service?',
    'about.s1.p1-html': 'The <strong>Demon Slayer Upper Moon Lookalike Analyzer</strong> is an entertainment service powered by AI that finds which character from the elite demon group "Upper Moon (上弦)" in the popular anime <em>Demon Slayer (鬼滅の刃)</em> resembles you the most.',
    'about.s1.p2-html': 'Take a live webcam shot or upload a photo, and AI inference runs directly in your browser — showing you a similarity percentage for Kokushibo, Douma, Akaza, Hantengu, Gyokko, and Daki/Gyutaro. Results are entertainment content, not a serious analysis tool.',
    'about.s1.p3': 'This service is designed for any Demon Slayer fan to enjoy. Try it with friends, share your results, or post to social media to compare who matches which Upper Moon!',
    'about.s2.h2': '🤖 Technology Used',
    'about.s2.tm-p-html': 'The AI model used in this service was trained on Google\'s <strong>Teachable Machine</strong> platform. Teachable Machine lets anyone easily train image, audio, and pose recognition models — no complex coding required, from training to deployment.',
    'about.s2.tf-p-html': 'The trained model runs directly in your browser via <strong>TensorFlow.js</strong>. TensorFlow.js is an open-source machine learning library by Google that enables deep learning inference in JavaScript. All processing completes on your own device with no server transmission — fast and private.',
    'about.s2.webrtc-h3': 'WebRTC Webcam API',
    'about.s2.webrtc-p-html': 'The real-time camera feature uses the <strong>WebRTC</strong> MediaDevices API — a browser standard. Camera footage is never sent to a server and is processed solely within your browser.',
    'about.s3.h2': '🔒 Privacy Protection',
    'about.s3.p1-html': 'Images captured via webcam or uploaded to this service are <strong>never transmitted to any server</strong>. All AI analysis is processed exclusively within your browser, and image data is discarded immediately after analysis. We do not collect, store, or use your facial images for training.',
    'about.s3.p2-html': 'For detailed information on privacy practices, please see our <a href="/privacy.html">Privacy Policy page</a>.',
    'about.s4.h2': '⚠️ Copyright Notice',
    'about.s4.p1-html': 'All rights to Demon Slayer (鬼滅の刃) belong to the original creator <strong>吾峠呼世晴</strong> and <strong>集英社 (Shueisha)</strong>. This service is a fan-made, non-commercial entertainment project with no official affiliation with Demon Slayer\'s production or distribution companies.',
    'about.s4.p2-html': 'All rights to character names and settings belong to their respective copyright holders. For copyright-related inquiries, please contact us via the <a href="/contact.html">Contact page</a>.',
    'about.s5.h2': '📬 Contact Us',
    'about.s5.p1': 'If you encounter any issues, want to report a bug, or have suggestions for improvement, please reach out anytime. Your feedback helps us make a better service for Demon Slayer fans everywhere.',
    'about.s5.link-html': '→ <a href="/contact.html">Go to Contact page</a>',

    /* ── privacy.html ── */
    'privacy.page-title': 'Privacy Policy',
    'privacy.page-sub':   'Information about the data this service collects and uses',
    'privacy.date':       'Last Updated: February 20, 2026',
    'privacy.s1.h2': '1. Overview',
    'privacy.s1.p-html': 'The Demon Slayer Upper Moon Lookalike service ("this Service") values your personal information and processes it lawfully in accordance with applicable regulations. This policy explains the types of information collected, the purposes of use, and how it is stored.',
    'privacy.s2.h2': '2. Information We Collect',
    'privacy.s2.h3-cam': '2-1. Camera & Image Data',
    'privacy.s2.cam-p-html': 'This Service processes camera/image data <strong>only when you use the camera or upload an image</strong>. This data is used solely for AI analysis within your browser and is never transmitted to our servers or any external servers. After analysis, image data is immediately deleted and not stored in any form.',
    'privacy.s2.h3-auto': '2-2. Automatically Collected Information (Cookies & Logs)',
    'privacy.s2.auto-p': 'The following information may be automatically collected when you visit this Service:',
    'privacy.s2.li1': 'Browser type and version',
    'privacy.s2.li2': 'Operating system information',
    'privacy.s2.li3': 'Page visit time and duration',
    'privacy.s2.li4': 'Cookies for advertising services (see Advertising section below)',
    'privacy.s2.h3-comment': '2-3. Comments Service',
    'privacy.s2.comment-p-html': 'This Service uses the Disqus comment system. When posting comments, Disqus\'s privacy policy applies and Disqus collects and processes information separately. For details, please refer to the <a href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy" target="_blank" rel="noopener">Disqus Privacy Policy</a>.',
    'privacy.s2.h3-form': '2-4. Contact Form',
    'privacy.s2.form-p': 'If you submit your name, email address, and message via the contact form, that information is delivered through the Formspree service. Collected information is used solely for responding to your inquiry.',
    'privacy.s3.h2': '3. Google AdSense & Advertising Cookies',
    'privacy.s3.p1-html': 'This Service displays ads through <strong>Google AdSense</strong>. Google AdSense may use cookies to provide personalized ads.',
    'privacy.s3.p2': 'Regarding Google AdSense:',
    'privacy.s3.li1-html': 'Google may provide interest-based ads based on your browsing history.',
    'privacy.s3.li2-html': 'You can disable personalized ads in <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ad Settings</a>.',
    'privacy.s3.li3-html': 'For details on Google\'s privacy practices, see the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.',
    'privacy.s3.li4-html': 'Third-party advertising cookies can be disabled at the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener">NAI opt-out page</a>.',
    'privacy.s4.h2': '4. Purpose of Use',
    'privacy.s4.p': 'Collected information is used only for the following purposes:',
    'privacy.s4.li1': 'Providing AI image analysis service (image data — browser-only processing)',
    'privacy.s4.li2': 'Improving service quality and identifying errors',
    'privacy.s4.li3': 'Processing and responding to user inquiries',
    'privacy.s4.li4': 'Providing personalized ads (Google AdSense cookies)',
    'privacy.s4.p2': 'This Service does not sell collected information to third parties or use it for marketing purposes.',
    'privacy.s5.h2': '5. Cookie Settings',
    'privacy.s5.p': 'You can refuse or delete cookies through your browser settings. Note that disabling cookies may prevent some service features from working properly.',
    'privacy.s5.li1': 'Chrome: Settings → Privacy and security → Cookies and other site data',
    'privacy.s5.li2': 'Safari: Settings → Safari → Privacy & Security',
    'privacy.s5.li3': 'Firefox: Settings → Privacy & Security → Cookies and Site Data',
    'privacy.s6.h2': '6. Children Under 14',
    'privacy.s6.p': 'This Service does not intentionally collect personal information from children under 14. Users under 14 should use this service with parental consent. If we become aware that personal information from a child under 14 has been collected, we will delete it immediately.',
    'privacy.s7.h2': '7. Policy Changes',
    'privacy.s7.p': 'This Privacy Policy may be updated due to changes in regulations or the service. When updated, the "Last Updated" date at the top of this page will be revised, and significant changes will be announced within the service.',
    'privacy.s8.h2': '8. Contact',
    'privacy.s8.p': 'For inquiries about personal data processing, or requests to view, correct, or delete your data, please contact us below.',
    'privacy.s8.link-html': '→ <a href="/contact.html">Go to Contact page</a>',

    /* ── contact.html ── */
    'contact.page-title': 'Contact Us',
    'contact.page-sub':   'Send us your bug reports, suggestions, or privacy-related inquiries',
    'contact.form.h2':             '✉️ Contact Form',
    'contact.form.name-label':     'Name / Nickname',
    'contact.form.name-ph':        'Demon Slayer Tanjiro...',
    'contact.form.email-label':    'Email Address',
    'contact.form.subject-label':  'Inquiry Type',
    'contact.form.subject-default':'Select an inquiry type',
    'contact.form.opt-bug':        '🐛 Bug Report',
    'contact.form.opt-suggest':    '💡 Suggestion',
    'contact.form.opt-privacy':    '🔒 Privacy Related',
    'contact.form.opt-copyright':  '⚖️ Copyright Related',
    'contact.form.opt-other':      '📌 Other',
    'contact.form.msg-label':      'Message',
    'contact.form.msg-ph':         'Please describe your inquiry in detail...',
    'contact.form.btn':            '🗡️ Send Message',
    'contact.form.sending':        'Sending...',
    'contact.form.sent':           '✅ Sent',
    'contact.form.success':        '✅ Your message was sent successfully! We\'ll get back to you as soon as possible.',
    'contact.form.error':          '❌ Failed to send. Please try again later.',
    'contact.form.err-required':   '⚠️ Please fill in your name, email, and message.',
    'contact.form.err-email':      '⚠️ Please enter a valid email address.',
    'contact.faq.h2': '❓ Frequently Asked Questions',
    'contact.faq.q1': 'Q. Are photos taken by the camera saved?',
    'contact.faq.a1': 'No. All image processing happens solely within your browser. Photos are never transmitted to or stored on external servers. Data is discarded immediately after analysis.',
    'contact.faq.q2': 'Q. Are the analysis results accurate?',
    'contact.faq.a2': 'This service is an AI analysis tool created for entertainment. Results are meant to be fun, not a scientific or medical tool. Don\'t take them too seriously 😄',
    'contact.faq.q3': 'Q. Which browsers are supported?',
    'contact.faq.a3': 'Available on the latest versions of Chrome, Safari, Firefox, Edge, and more. Camera functionality requires HTTPS and camera permission from your browser.',
    'contact.faq.q4': 'Q. Does it work on mobile?',
    'contact.faq.a4': 'Yes! Available on iOS Safari and Android Chrome. Select the Upload Image tab to upload directly from your album or take a photo with your camera.',
  }
};

/* ── 번역 헬퍼 ── */
function t(key) {
  const lang = localStorage.getItem('lang') || 'ko';
  const dict = LANG_DATA[lang] || LANG_DATA.ko;
  return (dict[key] !== undefined) ? dict[key] : (LANG_DATA.ko[key] !== undefined ? LANG_DATA.ko[key] : key);
}

/* ── 언어 적용 ── */
function applyLang(lang) {
  if (!LANG_DATA[lang]) lang = 'ko';
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'ko';

  const dict = LANG_DATA[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = dict[el.dataset.i18n] !== undefined ? dict[el.dataset.i18n] : LANG_DATA.ko[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = dict[el.dataset.i18nHtml] !== undefined ? dict[el.dataset.i18nHtml] : LANG_DATA.ko[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = dict[el.dataset.i18nPlaceholder] !== undefined ? dict[el.dataset.i18nPlaceholder] : LANG_DATA.ko[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = dict[el.dataset.i18nAria] !== undefined ? dict[el.dataset.i18nAria] : LANG_DATA.ko[el.dataset.i18nAria];
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  /* 활성 버튼 표시 */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── 공개 API ── */
function setLang(lang) {
  applyLang(lang);
}

/* ── 페이지 로드 시 자동 적용 ── */
document.addEventListener('DOMContentLoaded', function() {
  applyLang(localStorage.getItem('lang') || 'ko');
});
