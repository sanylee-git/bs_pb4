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
    'index.tagline':          '당신은 어떤 체인소맨 캐릭터를 닮았을까?',
    'index.badge1': '덴지', 'index.badge2': '마키마', 'index.badge3': '아키',
    'index.badge4': '레제', 'index.badge5': '키시베', 'index.badge6': '히메노',
    'index.tab.cam':          '📷 카메라',
    'index.tab.upload':       '🖼️ 이미지 업로드',
    'index.cam.placeholder':  '카메라를 시작하세요',
    'index.upload.click-html':'<strong>클릭</strong>하거나 이미지를 드래그 &amp; 드롭',
    'index.upload.types':     'JPG · PNG · WEBP 지원',
    'index.btn.start':        '⚡ 분석 시작',
    'index.btn.snap':         '📸 스냅샷 찍기',
    'index.btn.restart':      '⚡ 다시 시작',
    'index.loading':          '모델 불러오는 중...',
    'index.result.label':     '당신과 닮은 캐릭터',
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
    'guide.howto.s5-html': '분석 결과로 <strong>가장 닮은 체인소맨 캐릭터</strong>와 각 캐릭터별 유사도 퍼센트가 표시됩니다. 결과를 스크린샷 찍어 친구와 공유해보세요!',

    /* ── 가이드 — 체인소맨 캐릭터란? ── */
    'guide.uppermoon.h2': '⚡ 체인소맨 캐릭터 소개',
    'guide.uppermoon.p1-html': '<strong>체인소맨(チェンソーマン)</strong>은 후지모토 타츠키 원작의 인기 만화·애니메이션으로, 악마(Devil)와 인간, 데빌 헌터가 공존하는 세계를 배경으로 합니다. 주인공 덴지를 비롯한 개성 넘치는 캐릭터들이 강렬한 매력과 스토리로 전 세계 팬들을 사로잡고 있습니다.',
    'guide.uppermoon.p2-html': '덴지, 마키마, 아키, 레제, 파워 등 다양한 캐릭터들이 각자의 <strong>악마 계약(Devil Contract)</strong> 능력과 독특한 개성으로 활약합니다. 이들은 평범한 듯 보이지만 그 안에 복잡한 감정과 욕망, 상처를 품고 있습니다.',
    'guide.uppermoon.p3-html': '체인소맨 캐릭터들은 강렬한 개성과 예측 불가능한 전개로 팬들에게 깊은 인상을 남겼습니다. 당신은 어떤 체인소맨 캐릭터와 닮았을까요? AI 분석으로 확인해보세요!',

    /* ── 가이드 — 캐릭터 카드 ── */
    'guide.char-title': '체인소맨 캐릭터 가이드',
    'char.kokushibo.rank': '주인공',
    'char.douma.rank':     '통제부 과장',
    'char.akaza.rank':     '공안 데빌 헌터',
    'char.hantengu.rank':  '개조 인간',
    'char.gyokko.rank':    '데빌 헌터 사수',
    'char.dakigyutaro.rank': '공안 데빌 헌터',
    'char.kokushibo.desc-html': '포치타와 계약한 <strong>체인소맨</strong>. 평범한 삶을 꿈꾸는 소년이지만, 포치타의 심장을 이식받아 악마와 인간의 경계에 선 존재가 된다. 체인소맨으로 변신하면 몸 곳곳에서 전기톱이 솟아나 압도적인 전투력을 발휘한다. 단순하고 직설적인 성격이지만, 그 안에 강렬한 열망을 품고 있다.',
    'char.douma.desc-html': '공공 안전 데빌 헌터 1과의 <strong>통제 마왕</strong>. 사람들을 지배하고 통제하려는 강렬한 욕망을 지닌 수수께끼의 인물. 압도적인 카리스마와 미모, 그리고 누구도 예측할 수 없는 목적으로 덴지를 이용한다. 그 정체와 진짜 목적은 시리즈의 핵심 미스터리 중 하나다.',
    'char.akaza.desc-html': '공안 데빌 헌터로 활동하는 <strong>아키 하야카와</strong>. 여우 악마와 미래 악마와 계약을 맺은 실력파 헌터. 냉정하고 진지한 성격이지만 동료를 소중히 여기는 따뜻한 면도 있다. 자신이 사랑하는 사람들을 지키기 위해 무거운 운명을 받아들이는 비극적인 영웅.',
    'char.hantengu.desc-html': '폭탄 악마와 계약한 <strong>레제</strong>. 처음에는 평범한 소녀처럼 보이지만, 실은 소련의 비밀 무기로 만들어진 개조 인간이다. 덴지와의 만남에서 진짜 감정을 처음으로 경험하며 복잡한 내면을 드러낸다. 강렬하고 격정적인 전투 스타일이 인상적인 캐릭터.',
    'char.gyokko.desc-html': '덴지의 사수로 등장하는 <strong>키시베</strong>. 고양이 악마와 계약을 맺은 베테랑 헌터로, 냉혹하고 실용적인 교육 방식으로 덴지를 훈련시킨다. 오랜 경험에서 나온 노련함과 숨겨진 과거를 지닌 인물. 악마와의 싸움에서 살아남기 위한 냉정한 철학을 가지고 있다.',
    'char.dakigyutaro.desc-html': '공안 데빌 헌터 4과 소속의 <strong>히메노</strong>. 유령 악마와 계약한 선배 헌터로, 아키의 선배로서 그를 챙기는 따뜻한 면을 지닌다. 겉으로는 쾌활하고 털털하지만, 데빌 헌터로서의 냉혹한 현실과 싸우며 감춰진 상처를 안고 살아간다.',

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
    'guide.faq.a4': '덴지, 마키마, 아키 하야카와, 레제, 키시베, 히메노, 천사의 악마, 포치타, 코베니, 요시다 총 10명의 체인소맨 캐릭터가 포함되어 있습니다.',
    'guide.faq.q5': 'Q. 카메라 권한을 거부했어요.',
    'guide.faq.a5-html': '카메라 탭 대신 \'이미지 업로드\' 탭을 이용해주세요. 사진 파일을 직접 선택하거나 드래그&amp;드롭하여 분석할 수 있습니다. 카메라 권한은 브라우저 설정에서 언제든지 변경 가능합니다.',

    /* ── about.html ── */
    'about.page-title': '서비스 소개',
    'about.page-sub':   '체인소맨 닮은꼴 AI 분석기에 대해 알아보세요',
    'about.s1.h2': '⚡ 이 서비스는 무엇인가요?',
    'about.s1.p1-html': '<strong>체인소맨 닮은꼴 분석기</strong>는 인기 애니메이션 <em>체인소맨(チェンソーマン)</em>에 등장하는 개성 넘치는 캐릭터 중 당신과 가장 닮은 캐릭터를 AI로 분석해주는 엔터테인먼트 서비스입니다.',
    'about.s1.p2-html': '웹캠으로 실시간 촬영하거나 사진을 업로드하면, 브라우저 내에서 직접 AI 추론이 이루어져 덴지·마키마·아키·레제·키시베·히메노 등 어떤 캐릭터와 가장 유사한 특징을 가지는지 퍼센트로 보여줍니다. 결과는 재미로 즐기는 엔터테인먼트 콘텐츠이며, 진지한 분석 도구가 아닙니다.',
    'about.s1.p3': '이 서비스는 체인소맨 팬이라면 누구나 즐길 수 있도록 제작되었습니다. 친구와 함께 촬영해보고 결과를 공유하거나, SNS에 올려 누가 어떤 캐릭터와 닮았는지 비교해보세요!',
    'about.s2.h2': '🤖 사용된 기술',
    'about.s2.tm-p-html': '본 서비스의 AI 모델은 Google이 제공하는 <strong>Teachable Machine</strong> 플랫폼으로 학습되었습니다. Teachable Machine은 누구나 쉽게 이미지·오디오·포즈 인식 모델을 학습할 수 있는 도구로, 복잡한 코딩 없이 머신러닝 모델을 제작·배포할 수 있습니다.',
    'about.s2.tf-p-html': '학습된 모델은 <strong>TensorFlow.js</strong>를 통해 브라우저 내에서 직접 실행됩니다. TensorFlow.js는 Google이 개발한 오픈소스 머신러닝 라이브러리로, JavaScript 환경에서 딥러닝 모델의 학습과 추론을 가능하게 합니다. 서버 전송 없이 사용자의 기기에서 모든 처리가 완료되므로 빠르고 안전합니다.',
    'about.s2.webrtc-h3': 'WebRTC 웹캠 API',
    'about.s2.webrtc-p-html': '실시간 카메라 기능은 브라우저 표준 기술인 <strong>WebRTC</strong>의 MediaDevices API를 사용합니다. 카메라 영상은 서버로 전송되지 않고 오직 브라우저 내에서만 처리됩니다.',
    'about.s3.h2': '🔒 개인정보 보호',
    'about.s3.p1-html': '이 서비스에서 웹캠으로 촬영하거나 업로드한 이미지는 <strong>서버로 전송되지 않습니다</strong>. 모든 AI 분석은 사용자의 브라우저(기기) 내에서만 처리되며, 이미지 데이터는 분석 즉시 폐기됩니다. 당사는 사용자의 얼굴 이미지를 수집·저장·학습에 사용하지 않습니다.',
    'about.s3.p2-html': '자세한 개인정보 처리 방침은 <a href="/privacy.html">개인정보처리방침 페이지</a>를 확인해주세요.',
    'about.s4.h2': '⚠️ 저작권 안내',
    'about.s4.p1-html': '체인소맨(チェンソーマン)의 모든 저작권은 원작자 <strong>후지모토 타츠키</strong> 및 <strong>集英社(슈에이샤)</strong>에 귀속됩니다. 본 서비스는 팬이 만든 비상업적 엔터테인먼트 서비스로, 공식 체인소맨 제작사·배급사와 어떠한 공식적인 관계도 없습니다.',
    'about.s4.p2-html': '캐릭터 이름 및 설정에 관한 모든 권리는 해당 저작권자에게 있습니다. 만약 저작권 관련 문의 사항이 있으시면 <a href="/contact.html">문의 페이지</a>를 통해 연락해주세요.',
    'about.s5.h2': '📬 문의하기',
    'about.s5.p1': '서비스 이용 중 불편하신 점, 버그 신고, 개선 제안 등이 있으시면 언제든지 문의해주세요. 체인소맨 팬 여러분의 소중한 피드백으로 더 좋은 서비스를 만들어 나가겠습니다.',
    'about.s5.link-html': '→ <a href="/contact.html">문의 페이지로 이동하기</a>',

    /* ── about.html — FAQ ── */
    'about.faq.h2': '❓ 자주 묻는 질문 (Q&A)',
    'about.faq.q1': 'Q. 이 서비스는 어떻게 작동하나요?',
    'about.faq.a1': '웹캠 또는 이미지를 업로드하면, 브라우저 내 TensorFlow.js 기반 AI 모델이 얼굴 특징을 분석합니다. 결과는 덴지·마키마·아키·레제·키시베·히메노 등 체인소맨 캐릭터와의 유사도 퍼센트로 즉시 표시됩니다. 서버 전송 없이 모든 처리가 기기 내에서 완결됩니다.',
    'about.faq.q2': 'Q. 이 서비스는 왜 개인정보가 안전한가요?',
    'about.faq.a2': '모든 이미지 처리가 사용자의 브라우저에서만 완결되기 때문입니다. TensorFlow.js를 이용한 클라이언트-사이드 AI 추론 방식으로, 얼굴 데이터는 어떤 외부 서버에도 전송되지 않습니다. 분석 완료 즉시 메모리에서 삭제됩니다.',
    'about.faq.q3': 'Q. AI 모델은 어떻게 학습되었나요?',
    'about.faq.a3': '구글의 Teachable Machine 플랫폼으로 체인소맨 캐릭터 이미지를 학습시킨 딥러닝 이미지 분류 모델입니다. 각 캐릭터별 이미지 데이터를 수집해 얼굴 특징 기반 분류 모델을 훈련했습니다. 모델은 Teachable Machine 공개 인프라에서 호스팅됩니다.',
    'about.faq.q4': 'Q. 어떤 기기와 브라우저에서 사용할 수 있나요?',
    'about.faq.a4': 'PC(Windows/Mac)와 모바일(iOS/Android) 모두에서 이용 가능합니다. Chrome, Safari, Firefox, Edge 최신 버전을 지원합니다. 카메라 기능은 HTTPS 환경에서만 동작하며, 이미지 업로드 기능은 모든 환경에서 사용 가능합니다.',
    'about.faq.q5': 'Q. 이 서비스는 공식 체인소맨 제품인가요?',
    'about.faq.a5': '비공식 팬 제작 엔터테인먼트 서비스입니다. 체인소맨의 모든 저작권은 원작자 후지모토 타츠키 및 集英社에 귀속됩니다. 본 서비스는 공식 제작사·배급사와 무관한 팬 제작 비상업적 엔터테인먼트 콘텐츠입니다.',

    /* ── privacy.html ── */
    'privacy.page-title': '개인정보처리방침',
    'privacy.page-sub':   '본 서비스가 수집·이용하는 정보에 대해 안내합니다',
    'privacy.date':       '최종 업데이트: 2026년 02월 20일',
    'privacy.s1.h2': '1. 개요',
    'privacy.s1.p-html': '체인소맨 닮은꼴 서비스(이하 "본 서비스")는 사용자의 개인정보를 소중히 여기며, 관련 법령에 따라 적법하게 처리합니다. 본 방침은 본 서비스를 이용하는 과정에서 수집되는 정보의 종류, 이용 목적, 보관 방식을 설명합니다.',
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
    'contact.form.name-ph':        '체인소맨 덴지...',
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
    'contact.form.btn':            '⚡ 문의 보내기',
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
    'contact.faq.q5': 'Q. 문의 답변까지 얼마나 걸리나요?',
    'contact.faq.a5': '보통 1~3 영업일 내로 답변 드립니다. 문의량에 따라 차이가 있을 수 있으나, 접수된 모든 문의에 성실히 답변하겠습니다. 빠른 확인을 위해 문의 유형을 정확히 선택해 주시면 도움이 됩니다.',
    'contact.faq.q6': 'Q. 저작권 관련 문의는 어떻게 하나요?',
    'contact.faq.a6': "문의 양식에서 '저작권 관련'을 선택하고 내용을 기재해 주세요. 체인소맨 이미지·콘텐츠 관련 저작권 문제를 발견하셨다면 즉시 처리하겠습니다. 공식 저작권자(후지모토 타츠키/集英社) 측의 요청은 최우선으로 처리됩니다.",

    /* ── privacy.html — FAQ ── */
    'privacy.faq.h2': '❓ 개인정보 관련 자주 묻는 질문',
    'privacy.faq.q1': 'Q. 카메라로 촬영한 데이터가 서버에 저장되나요?',
    'privacy.faq.a1': '아닙니다. 카메라 데이터는 서버에 전혀 저장되지 않습니다. 모든 이미지 처리는 사용자의 브라우저 내에서만 이루어지며, AI 분석 완료 즉시 메모리에서 삭제됩니다. 외부 서버 전송 없이 100% 로컬 처리됩니다.',
    'privacy.faq.q2': 'Q. 쿠키를 차단하면 서비스를 이용할 수 없나요?',
    'privacy.faq.a2': 'AI 분석 핵심 기능은 쿠키 없이도 정상 이용 가능합니다. 쿠키를 차단하면 Google AdSense 맞춤 광고가 표시되지 않고, Disqus 댓글 기능이 제한될 수 있습니다. 기본 기능에는 영향이 없습니다.',
    'privacy.faq.q3': 'Q. Google AdSense 맞춤 광고를 거부할 수 있나요?',
    'privacy.faq.a3-html': '네, <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google 광고 설정</a>에서 맞춤 광고를 언제든지 비활성화할 수 있습니다. <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener">NAI 옵트아웃 페이지</a>에서도 제3자 광고 쿠키를 일괄 차단할 수 있습니다.',
    'privacy.faq.q4': 'Q. 만 14세 미만 어린이도 이용 가능한가요?',
    'privacy.faq.a4': '만 14세 미만 이용자는 반드시 보호자의 동의 하에 서비스를 이용해야 합니다. 본 서비스는 아동의 개인정보를 의도적으로 수집하지 않으며, 해당 사실이 확인될 경우 즉시 삭제 조치합니다.',
    'privacy.faq.q5': 'Q. 개인정보 열람·수정·삭제를 요청할 수 있나요?',
    'privacy.faq.a5-html': '네, <a href="/contact.html">문의 페이지</a>를 통해 개인정보 관련 요청을 하실 수 있습니다. 카메라·이미지 데이터는 분석 즉시 자동 삭제되어 별도 보관되지 않습니다. 문의 양식 제출 시 수집된 이메일 등 정보는 요청 시 삭제해 드립니다.',
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
    'index.tagline':          'Which Chainsaw Man character are you most like?',
    'index.badge1': 'Denji', 'index.badge2': 'Makima', 'index.badge3': 'Aki',
    'index.badge4': 'Reze', 'index.badge5': 'Kishibe', 'index.badge6': 'Himeno',
    'index.tab.cam':          '📷 Camera',
    'index.tab.upload':       '🖼️ Upload Image',
    'index.cam.placeholder':  'Start the camera',
    'index.upload.click-html':'<strong>Click</strong> or drag &amp; drop an image',
    'index.upload.types':     'JPG · PNG · WEBP supported',
    'index.btn.start':        '⚡ Analyze',
    'index.btn.snap':         '📸 Take Snapshot',
    'index.btn.restart':      '⚡ Restart',
    'index.loading':          'Loading model...',
    'index.result.label':     'Your Chainsaw Man Character Match',
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
    'guide.howto.s5-html': 'Your results show the <strong>closest matching Chainsaw Man character</strong> with similarity percentages. Screenshot and share with friends!',

    /* ── Guide — About Chainsaw Man Characters ── */
    'guide.uppermoon.h2': '⚡ About Chainsaw Man Characters',
    'guide.uppermoon.p1-html': '<strong>Chainsaw Man (チェンソーマン)</strong> is a popular manga and anime by Tatsuki Fujimoto, set in a world where Devils and humans coexist alongside Devil Hunters. The main character Denji and a cast of unforgettable characters captivate fans worldwide with their intense personalities and story.',
    'guide.uppermoon.p2-html': 'Denji, Makima, Aki, Reze, Power and more each bring their own <strong>Devil Contract</strong> abilities and unique personalities to the story. Beneath their outward appearances lie complex emotions, desires, and wounds.',
    'guide.uppermoon.p3-html': 'Chainsaw Man characters have left a powerful impression on fans with their fierce personalities and unpredictable twists. Which Chainsaw Man character do you resemble? Find out with AI analysis!',

    /* ── Guide — Character Cards ── */
    'guide.char-title': 'Chainsaw Man Character Guide',
    'char.kokushibo.rank': 'Protagonist',
    'char.douma.rank':     'Control Devil',
    'char.akaza.rank':     'Public Safety Devil Hunter',
    'char.hantengu.rank':  'Hybrid Human',
    'char.gyokko.rank':    'Devil Hunter (Mentor)',
    'char.dakigyutaro.rank': 'Public Safety Devil Hunter',
    'char.kokushibo.desc-html': 'The boy who merged with Pochita to become <strong>Chainsaw Man</strong>. He dreams of a simple life, but after receiving Pochita\'s heart, he walks the line between human and devil. When he transforms, chainsaws burst from his body to unleash overwhelming combat power. He is simple and blunt, but burns with an intense desire to live.',
    'char.douma.desc-html': 'The <strong>enigmatic Control Devil</strong> of Public Safety Division 1. She holds an intense drive to control and dominate others, and manipulates Denji for purposes no one can predict. Her overwhelming charisma, beauty, and true motives remain one of the series\' central mysteries.',
    'char.akaza.desc-html': '<strong>Aki Hayakawa</strong>, a Public Safety Devil Hunter who has made contracts with the Fox Devil and Future Devil. Calm and serious, he deeply cares for his teammates. He accepts a heavy fate in order to protect those he loves, making him a tragic hero.',
    'char.hantengu.desc-html': '<strong>Reze</strong>, who has a contract with the Bomb Devil. She initially appears to be an ordinary girl, but is in fact a Soviet-made modified human weapon. Her encounter with Denji leads her to experience genuine emotions for the first time, revealing her complex inner world. Known for her intense and explosive fighting style.',
    'char.gyokko.desc-html': '<strong>Kishibe</strong>, Denji\'s assigned mentor. A veteran Devil Hunter with a contract with the Cat Devil, he trains Denji with a ruthless, pragmatic style. A figure of seasoned experience and a hidden past, he holds a cold philosophy for surviving battles against devils.',
    'char.dakigyutaro.desc-html': '<strong>Himeno</strong>, a Public Safety Division 4 Devil Hunter with a contract with the Ghost Devil. As Aki\'s senior, she looks out for him with genuine warmth. Outwardly cheerful and easygoing, she carries hidden wounds from the brutal reality of being a Devil Hunter.',

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
    'guide.faq.a4': 'Denji, Makima, Aki Hayakawa, Reze, Kishibe, Himeno, Angel Devil, Pochita, Kobeni, and Yoshida — all 10 Chainsaw Man characters.',
    'guide.faq.q5': 'Q. I denied camera permission.',
    'guide.faq.a5-html': 'Use the "Upload Image" tab instead. You can select a photo file directly or drag &amp; drop it. Camera permissions can be changed anytime in your browser settings.',

    /* ── about.html ── */
    'about.page-title': 'About This Service',
    'about.page-sub':   'Learn about the Chainsaw Man AI Analyzer',
    'about.s1.h2': '⚡ What is this service?',
    'about.s1.p1-html': 'The <strong>Chainsaw Man Lookalike Analyzer</strong> is an entertainment service powered by AI that finds which character from the popular anime and manga <em>Chainsaw Man (チェンソーマン)</em> resembles you the most.',
    'about.s1.p2-html': 'Take a live webcam shot or upload a photo, and AI inference runs directly in your browser — showing you a similarity percentage for Denji, Makima, Aki, Reze, Kishibe, Himeno and more. Results are entertainment content, not a serious analysis tool.',
    'about.s1.p3': 'This service is designed for any Chainsaw Man fan to enjoy. Try it with friends, share your results, or post to social media to compare who matches which character!',
    'about.s2.h2': '🤖 Technology Used',
    'about.s2.tm-p-html': 'The AI model used in this service was trained on Google\'s <strong>Teachable Machine</strong> platform. Teachable Machine lets anyone easily train image, audio, and pose recognition models — no complex coding required, from training to deployment.',
    'about.s2.tf-p-html': 'The trained model runs directly in your browser via <strong>TensorFlow.js</strong>. TensorFlow.js is an open-source machine learning library by Google that enables deep learning inference in JavaScript. All processing completes on your own device with no server transmission — fast and private.',
    'about.s2.webrtc-h3': 'WebRTC Webcam API',
    'about.s2.webrtc-p-html': 'The real-time camera feature uses the <strong>WebRTC</strong> MediaDevices API — a browser standard. Camera footage is never sent to a server and is processed solely within your browser.',
    'about.s3.h2': '🔒 Privacy Protection',
    'about.s3.p1-html': 'Images captured via webcam or uploaded to this service are <strong>never transmitted to any server</strong>. All AI analysis is processed exclusively within your browser, and image data is discarded immediately after analysis. We do not collect, store, or use your facial images for training.',
    'about.s3.p2-html': 'For detailed information on privacy practices, please see our <a href="/privacy.html">Privacy Policy page</a>.',
    'about.s4.h2': '⚠️ Copyright Notice',
    'about.s4.p1-html': 'All rights to Chainsaw Man (チェンソーマン) belong to the original creator <strong>Tatsuki Fujimoto</strong> and <strong>集英社 (Shueisha)</strong>. This service is a fan-made, non-commercial entertainment project with no official affiliation with Chainsaw Man\'s production or distribution companies.',
    'about.s4.p2-html': 'All rights to character names and settings belong to their respective copyright holders. For copyright-related inquiries, please contact us via the <a href="/contact.html">Contact page</a>.',
    'about.s5.h2': '📬 Contact Us',
    'about.s5.p1': 'If you encounter any issues, want to report a bug, or have suggestions for improvement, please reach out anytime. Your feedback helps us make a better service for Chainsaw Man fans everywhere.',
    'about.s5.link-html': '→ <a href="/contact.html">Go to Contact page</a>',

    /* ── about.html — FAQ ── */
    'about.faq.h2': '❓ FAQ (Q&A)',
    'about.faq.q1': 'Q. How does this service work?',
    'about.faq.a1': 'Upload a webcam shot or image and the TensorFlow.js-based AI model runs directly in your browser to analyze facial features. Results show similarity percentages for Denji, Makima, Aki, Reze, Kishibe, Himeno and more instantly. All processing happens on your device with no server transmission.',
    'about.faq.q2': 'Q. Why is my personal information safe?',
    'about.faq.a2': 'Because all image processing is completed only within your browser. Using client-side AI inference with TensorFlow.js, facial data is never transmitted to any external server. Data is deleted from memory immediately after analysis.',
    'about.faq.q3': 'Q. How was the AI model trained?',
    'about.faq.a3': 'It is a deep learning image classification model trained on Chainsaw Man character images using Google\'s Teachable Machine platform. Image data for each character was collected to train a facial feature-based classification model. The model is hosted on Teachable Machine\'s public infrastructure.',
    'about.faq.q4': 'Q. Which devices and browsers are supported?',
    'about.faq.a4': 'Available on both PC (Windows/Mac) and mobile (iOS/Android). Supports the latest versions of Chrome, Safari, Firefox, and Edge. Camera functionality requires HTTPS, while image upload works in all environments.',
    'about.faq.q5': 'Q. Is this an official Chainsaw Man product?',
    'about.faq.a5': 'This is an unofficial fan-made entertainment service. All rights to Chainsaw Man belong to the original creator Tatsuki Fujimoto and 集英社 (Shueisha). This service is non-commercial fan content with no affiliation to the official production or distribution companies.',

    /* ── privacy.html ── */
    'privacy.page-title': 'Privacy Policy',
    'privacy.page-sub':   'Information about the data this service collects and uses',
    'privacy.date':       'Last Updated: February 20, 2026',
    'privacy.s1.h2': '1. Overview',
    'privacy.s1.p-html': 'The Chainsaw Man Lookalike service ("this Service") values your personal information and processes it lawfully in accordance with applicable regulations. This policy explains the types of information collected, the purposes of use, and how it is stored.',
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
    'contact.form.name-ph':        'Chainsaw Man Denji...',
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
    'contact.form.btn':            '⚡ Send Message',
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
    'contact.faq.q5': 'Q. How long does a reply take?',
    'contact.faq.a5': 'We typically respond within 1–3 business days. Response times may vary depending on inquiry volume, but we will respond to every inquiry. Selecting the correct inquiry type will help us process your request faster.',
    'contact.faq.q6': 'Q. How do I contact you about copyright?',
    'contact.faq.a6': 'Select "Copyright Related" in the inquiry form and describe the issue. If you\'ve found a copyright issue with Chainsaw Man images or content, we\'ll address it immediately. Requests from official rights holders (Tatsuki Fujimoto/集英社) are prioritized.',

    /* ── privacy.html — FAQ ── */
    'privacy.faq.h2': '❓ Privacy FAQ',
    'privacy.faq.q1': 'Q. Is camera data stored on the server?',
    'privacy.faq.a1': 'No. Camera data is never stored on any server. All image processing happens solely within your browser and is deleted from memory immediately after AI analysis is complete. 100% local processing with no external server transmission.',
    'privacy.faq.q2': 'Q. Can I use the service if I block cookies?',
    'privacy.faq.a2': 'The core AI analysis feature works fine without cookies. Blocking cookies means Google AdSense personalized ads won\'t show, and Disqus comments may be limited. Core functionality is not affected.',
    'privacy.faq.q3': 'Q. Can I opt out of Google AdSense personalized ads?',
    'privacy.faq.a3-html': 'Yes, you can disable personalized ads anytime in <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ad Settings</a>. You can also block third-party advertising cookies on the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener">NAI opt-out page</a>.',
    'privacy.faq.q4': 'Q. Can children under 14 use this service?',
    'privacy.faq.a4': 'Users under 14 must use this service with parental consent. This service does not intentionally collect personal information from children, and if we become aware such data has been collected, it will be deleted immediately.',
    'privacy.faq.q5': 'Q. Can I request access, correction, or deletion of my data?',
    'privacy.faq.a5-html': 'Yes, you can make privacy-related requests via our <a href="/contact.html">Contact page</a>. Camera/image data is automatically deleted after analysis and not stored separately. Information collected through the contact form (such as email) will be deleted upon request.',
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
// index.html : main.js 가 rerenderForLang 을 등록하면 그것도 호출
// sub-pages  : applyLang 만 실행 (data-i18n 방식 유지)
function setLang(lang) {
  applyLang(lang);
  if (typeof window.rerenderForLang === 'function') window.rerenderForLang(lang);
}

/* ── 페이지 로드 시 자동 적용 ── */
document.addEventListener('DOMContentLoaded', function() {
  applyLang(localStorage.getItem('lang') || 'ko');
});
