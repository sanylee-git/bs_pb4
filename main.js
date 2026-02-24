/* ================================================================
   main.js — 핵심 로직 + 템플릿 렌더링
   site.config.js 의 SITE_CONFIG 를 읽어 모든 콘텐츠를 자동 생성합니다
   ================================================================ */

/* ────────────────────────────────────────────────────────────────
   0. 테마 색상 즉시 적용 (깜박임 방지)
────────────────────────────────────────────────────────────────── */
(function applyThemeEarly() {
  if (!window.SITE_CONFIG) return;
  var t = SITE_CONFIG.theme;
  function hexRgb(h) {
    return parseInt(h.slice(1,3),16) + ', ' + parseInt(h.slice(3,5),16) + ', ' + parseInt(h.slice(5,7),16);
  }
  var r = document.documentElement.style;
  r.setProperty('--crimson',          t.primary);
  r.setProperty('--crimson-rgb',      hexRgb(t.primary));
  r.setProperty('--deep-crimson',     t.primaryDark);
  r.setProperty('--deep-crimson-rgb', hexRgb(t.primaryDark));
  r.setProperty('--gold',             t.gold);
  r.setProperty('--gold-rgb',         hexRgb(t.gold));
  r.setProperty('--gold-glow',        t.gold);
  r.setProperty('--purple',           t.accent);
  r.setProperty('--purple-rgb',       hexRgb(t.accent));
  r.setProperty('--dark-bg',          t.bg);
  r.setProperty('--card-bg',          t.cardBg);
})();


/* ────────────────────────────────────────────────────────────────
   1. 언어 유틸 (i18n)
────────────────────────────────────────────────────────────────── */
function getLang() {
  return localStorage.getItem('lang') || 'ko';
}
// setLang 은 i18n.js 에 정의됨. 언어 변경 시 rerenderForLang 이 자동 호출됨.

// config 의 {ko, en} 객체에서 현재 언어 텍스트 반환
function tr(obj) {
  if (!obj) return '';
  var lang = getLang();
  return obj[lang] || obj['ko'] || '';
}


/* ────────────────────────────────────────────────────────────────
   2. SEO 메타 태그 주입
────────────────────────────────────────────────────────────────── */
function injectMetaTags() {
  var s = SITE_CONFIG.seo;
  var c = SITE_CONFIG;

  document.title = s.pageTitle;

  function setMeta(selector, content) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute('content', content);
  }
  function setLink(selector, href) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute('href', href);
  }

  setMeta('meta[name="description"]',            s.description);
  setMeta('meta[name="keywords"]',               s.keywords);
  setMeta('meta[name="theme-color"]',            s.themeColor);
  setMeta('meta[name="apple-mobile-web-app-title"]', s.appName);

  setMeta('meta[property="og:title"]',           s.ogTitle);
  setMeta('meta[property="og:description"]',     s.ogDescription);
  setMeta('meta[property="og:url"]',             c.siteUrl);
  setMeta('meta[property="og:image"]',           s.ogImage);
  setMeta('meta[property="og:image:alt"]',       s.ogImageAlt);
  setMeta('meta[property="og:site_name"]',       c.siteName);

  setMeta('meta[name="twitter:title"]',          s.ogTitle);
  setMeta('meta[name="twitter:description"]',    s.ogDescription);
  setMeta('meta[name="twitter:image"]',          s.ogImage);
  setMeta('meta[name="twitter:image:alt"]',      s.ogImageAlt);

  setLink('link[rel="canonical"]',               c.siteUrl);

  // JSON-LD Schema 주입
  var existing = document.getElementById('schema-ld');
  if (existing) existing.remove();
  var script = document.createElement('script');
  script.id   = 'schema-ld';
  script.type = 'application/ld+json';
  script.textContent = buildSchemaJson();
  document.head.appendChild(script);
}

function buildSchemaJson() {
  var s = SITE_CONFIG.seo;
  var c = SITE_CONFIG;
  var faqEntities = (SITE_CONFIG.guide.faqItems || []).map(function(item) {
    return {
      '@type': 'Question',
      'name': item.q.ko,
      'acceptedAnswer': { '@type': 'Answer', 'text': item.a.ko.replace(/<[^>]+>/g, '') }
    };
  });
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': c.siteUrl + '#website',
        'name': c.siteName,
        'alternateName': s.appFullName,
        'url': c.siteUrl,
        'inLanguage': ['ko', 'en'],
      },
      {
        '@type': 'WebApplication',
        '@id': c.siteUrl + '#webapp',
        'name': s.ogTitle,
        'alternateName': s.appFullName,
        'url': c.siteUrl,
        'description': s.ogDescription,
        'applicationCategory': 'EntertainmentApplication',
        'operatingSystem': 'Chrome, Firefox, Safari, Edge',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'KRW' },
        'inLanguage': ['ko', 'en'],
        'image': s.ogImage,
        'datePublished': s.datePublished,
        'dateModified': s.dateModified,
        'featureList': s.appFeatures,
      },
      {
        '@type': 'FAQPage',
        'mainEntity': faqEntities,
      },
    ]
  });
}


/* ────────────────────────────────────────────────────────────────
   3. 네비게이션 렌더링
────────────────────────────────────────────────────────────────── */
function renderNav() {
  var logo = document.getElementById('nav-logo');
  if (logo) logo.textContent = SITE_CONFIG.nav.logo;
}

function toggleNav() {
  document.getElementById('nav-mobile').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  if (!e.target.closest('.site-nav')) {
    var nm = document.getElementById('nav-mobile');
    if (nm) nm.classList.remove('open');
  }
});


/* ────────────────────────────────────────────────────────────────
   4. 헤더 렌더링
────────────────────────────────────────────────────────────────── */
function renderHeader() {
  var el = document.getElementById('site-header');
  if (!el) return;
  var h    = SITE_CONFIG.header;
  var lang = getLang();
  var titleLines = tr(h.titleJp).split('\n');

  el.innerHTML =
    '<div class="header-deco">' + h.deco + '</div>' +
    '<h1 class="title-jp">' + titleLines.join('<br>') + '</h1>' +
    '<p class="title-sub">' + tr(h.tagline) + '</p>' +
    '<div class="badge-row">' +
      h.badges.map(function(b) {
        return '<span class="badge">' + (b[lang] || b.ko) + '</span>';
      }).join('') +
    '</div>';
}


/* ────────────────────────────────────────────────────────────────
   5. 결과 섹션 레이블 업데이트
────────────────────────────────────────────────────────────────── */
function renderResultLabels() {
  var r = SITE_CONFIG.result;
  var eyeEl = document.getElementById('result-eye-symbol');
  if (eyeEl) eyeEl.textContent = r.eyeSymbol;
  var labelEl = document.querySelector('.result-label[data-result-label]');
  if (labelEl) labelEl.textContent = tr(r.label);
  var scoreEl = document.querySelector('.result-score-label[data-score-label]');
  if (scoreEl) scoreEl.textContent = tr(r.scoreLabel);
  var allEl = document.querySelector('h3[data-all-label]');
  if (allEl) allEl.textContent = tr(r.allLabel);
}


/* ────────────────────────────────────────────────────────────────
   6. 가이드 섹션 렌더링
────────────────────────────────────────────────────────────────── */
function renderGuide() {
  var el = document.getElementById('guide-section');
  if (!el) return;
  var g = SITE_CONFIG.guide;
  var html = '';

  /* 이용 방법 */
  html += '<div class="guide-card">' +
    '<h2>' + tr(g.howtoTitle) + '</h2>' +
    '<div class="how-to">' +
    g.howtoSteps.map(function(step, i) {
      return '<div class="how-step"><div class="step-num">' + (i + 1) + '</div>' +
             '<div class="step-text">' + tr(step) + '</div></div>';
    }).join('') +
    '</div></div>';

  /* 작품/애니 소개 */
  html += '<div class="guide-card">' +
    '<h2>' + tr(g.aboutTitle) + '</h2>' +
    g.aboutParas.map(function(p) { return '<p>' + tr(p) + '</p>'; }).join('') +
    '</div>';

  /* 캐릭터 카드 그리드 제목 */
  html += '<p class="guide-title" style="margin-top:8px;">' + tr(g.charGuideTitle) + '</p>';
  html += '<p class="guide-title-sub">' + tr(g.charGuideSubtitle) + '</p>';

  /* 캐릭터 카드 그리드 */
  html += '<div class="char-grid">';
  SITE_CONFIG.characterCards.forEach(function(char) {
    var webpTag = char.imageWebp
      ? '<source srcset="' + char.imageWebp + '" type="image/webp">'
      : '';
    html +=
      '<div class="guide-card">' +
        '<h2>' + tr(char.name) + ' <span class="rank-badge">' + tr(char.rank) + '</span></h2>' +
        '<div class="char-card-inner">' +
          '<div class="char-img-wrap">' +
            '<picture>' + webpTag +
              '<img src="' + char.image + '" alt="' + tr(char.name) + ' ' + tr(char.rank) + '" loading="lazy" width="200" height="240">' +
            '</picture>' +
          '</div>' +
          '<div class="char-card-text"><p>' + tr(char.cardDesc) + '</p></div>' +
        '</div>' +
      '</div>';
  });
  html += '</div>';

  /* AI 작동 원리 */
  html += '<div class="guide-card">' +
    '<h2>' + tr(g.aiTitle) + '</h2>' +
    g.aiParas.map(function(p) { return '<p>' + tr(p) + '</p>'; }).join('') +
    '</div>';

  /* FAQ */
  html += '<div class="guide-card">' +
    '<h2>' + tr(g.faqTitle) + '</h2>' +
    g.faqItems.map(function(item) {
      return '<div class="faq-item">' +
        '<p class="faq-q">' + tr(item.q) + '</p>' +
        '<p class="faq-a">' + tr(item.a) + '</p>' +
        '</div>';
    }).join('') +
    '</div>';

  /* 별점 평가 */
  html +=
    '<div class="guide-card" id="rating-card" style="text-align:center;">' +
      '<h2>' + tr(g.ratingTitle) + '</h2>' +
      '<p style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:18px;">' + tr(g.ratingSubtitle) + '</p>' +
      '<div id="star-row" style="font-size:40px;letter-spacing:6px;cursor:pointer;line-height:1;margin-bottom:12px;">' +
        [1,2,3,4,5].map(function(v) {
          return '<span class="star-el" data-v="' + v + '" style="color:rgba(255,255,255,0.2);transition:color .2s;">★</span>';
        }).join('') +
      '</div>' +
      '<p id="star-msg" style="font-size:13px;color:rgba(255,255,255,0.4);min-height:20px;"></p>' +
    '</div>';

  el.innerHTML = html;
  initStarRating();
}


/* ────────────────────────────────────────────────────────────────
   7. 푸터 렌더링
────────────────────────────────────────────────────────────────── */
function renderFooter() {
  var el = document.getElementById('site-footer');
  if (!el) return;
  var f    = SITE_CONFIG.footer;
  var lang = getLang();
  el.innerHTML =
    '<div class="footer-links">' +
      '<a href="/">'             + (lang === 'ko' ? '홈'              : 'Home')    + '</a>' +
      '<a href="/about.html">'   + (lang === 'ko' ? '소개'            : 'About')   + '</a>' +
      '<a href="/privacy.html">' + (lang === 'ko' ? '개인정보처리방침' : 'Privacy') + '</a>' +
      '<a href="/contact.html">' + (lang === 'ko' ? '문의하기'         : 'Contact') + '</a>' +
    '</div>' +
    '<div class="footer-copy">' +
      f.mainText + '<br>' +
      tr(f.poweredBy) + '<br>' +
      f.copyright +
    '</div>';
}


/* ────────────────────────────────────────────────────────────────
   8. UI 텍스트 업데이트 (고정 HTML 요소들)
────────────────────────────────────────────────────────────────── */
function renderStaticUIText() {
  var lang = getLang();
  // 탭 버튼
  var tabCam    = document.getElementById('tab-cam');
  var tabUpload = document.getElementById('tab-upload');
  if (tabCam)    tabCam.textContent    = lang === 'ko' ? '📷 카메라'      : '📷 Camera';
  if (tabUpload) tabUpload.textContent = lang === 'ko' ? '🖼️ 이미지 업로드' : '🖼️ Upload Image';
  // 업로드 텍스트
  var uploadText = document.getElementById('upload-hint');
  if (uploadText) uploadText.innerHTML = lang === 'ko'
    ? '<strong>클릭</strong>하거나 이미지를 드래그 &amp; 드롭'
    : '<strong>Click</strong> or drag &amp; drop an image';
  var uploadTypes = document.getElementById('upload-types');
  if (uploadTypes) uploadTypes.textContent = 'JPG · PNG · WEBP';
  // 카메라 플레이스홀더
  var camPH = document.getElementById('cam-placeholder-text');
  if (camPH) camPH.textContent = lang === 'ko' ? '카메라를 시작하세요' : 'Start camera';
  // 모델 로딩 텍스트
  var loadingText = document.querySelector('.loading-text');
  if (loadingText) loadingText.textContent = lang === 'ko' ? '모델 불러오는 중...' : 'Loading model...';
  // 결과 레이블
  renderResultLabels();
  // SNS 해시태그
  var hashEl = document.querySelector('.share-hashtags');
  if (hashEl) hashEl.textContent = SITE_CONFIG.share.hashtags;
  // 댓글 제목
  var disqusTitle = document.querySelector('.disqus-title');
  if (disqusTitle) disqusTitle.textContent = lang === 'ko' ? '💬 댓글 · Comments' : '💬 Comments';
  // 시작 버튼 텍스트
  var startBtn = document.getElementById('start-btn');
  if (startBtn) {
    if (isRunning) {
      startBtn.textContent = lang === 'ko' ? '📸 스냅샷 찍기' : '📸 Take Snapshot';
    } else {
      startBtn.textContent = lang === 'ko' ? '⚡ 분석 시작' : '⚡ Start Analysis';
    }
  }
}


/* ────────────────────────────────────────────────────────────────
   9. 전체 재렌더 (언어 변경 시 호출)
────────────────────────────────────────────────────────────────── */
function rerenderAll() {
  renderHeader();
  renderStaticUIText();
  renderGuide();
  renderFooter();
}
window.rerenderForLang = rerenderAll;


/* ────────────────────────────────────────────────────────────────
   10. 캐릭터 검색 (AI 예측 결과 → 표시 정보)
────────────────────────────────────────────────────────────────── */
function getCharInfo(className) {
  var lang = getLang();
  var chars = SITE_CONFIG.characters;
  for (var i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (className.includes(c.modelClass) || c.modelClass.includes(className)) {
      return {
        name: c.name[lang] || c.name.ko,
        rank: c.rank[lang] || c.rank.ko,
        desc: c.desc[lang] || c.desc.ko,
      };
    }
  }
  var r = SITE_CONFIG.result;
  return {
    name: className,
    rank: r.unknownRank[lang] || r.unknownRank.ko,
    desc: r.unknownDesc[lang] || r.unknownDesc.ko,
  };
}


/* ────────────────────────────────────────────────────────────────
   11. 모델 로드
────────────────────────────────────────────────────────────────── */
var model = null, webcam = null;
var isRunning = false, currentTab = 'cam', uploadedImage = null;

async function loadModel() {
  model = null;
  document.getElementById('start-btn').disabled = true;
  showLoading(true);
  setStatus(getLang() === 'ko' ? 'AI 모델을 로드하고 있습니다...' : 'Loading AI model...');
  var MAX_RETRY = 3;
  for (var attempt = 1; attempt <= MAX_RETRY; attempt++) {
    try {
      if (typeof tmImage === 'undefined') throw new Error('TeachableMachine 라이브러리 로드 실패.');
      model = await tmImage.load(SITE_CONFIG.modelUrl + 'model.json', SITE_CONFIG.modelUrl + 'metadata.json');
      setStatus(getLang() === 'ko' ? '✅ 준비 완료 — 카메라를 시작하거나 이미지를 업로드하세요' : '✅ Ready — start camera or upload an image');
      document.getElementById('start-btn').disabled = false;
      showLoading(false);
      return;
    } catch (e) {
      console.error('[닮은꼴] loadModel 오류 (' + attempt + '/' + MAX_RETRY + '):', e);
      if (attempt < MAX_RETRY) {
        setStatus((getLang() === 'ko' ? '⟳ 모델 재시도 중' : '⟳ Retrying model') + ' (' + attempt + '/' + MAX_RETRY + ')...');
        await new Promise(function(res) { setTimeout(res, 1500 * attempt); });
      }
    }
  }
  showLoading(false);
  var retryLabel = getLang() === 'ko' ? '재시도' : 'Retry';
  document.getElementById('status-msg').innerHTML =
    (getLang() === 'ko' ? '❌ 모델 로드 실패. 네트워크 상태를 확인해주세요.' : '❌ Model load failed. Check your network.') +
    ' <button onclick="loadModel()" style="background:none;border:1px solid rgba(255,255,255,0.35);color:rgba(255,255,255,0.55);cursor:pointer;padding:2px 10px;border-radius:4px;font-size:11px;margin-left:8px;letter-spacing:1px;">' +
    retryLabel + '</button>';
}


/* ────────────────────────────────────────────────────────────────
   12. 탭 전환
────────────────────────────────────────────────────────────────── */
function switchTab(tab) {
  currentTab = tab;
  document.getElementById('tab-cam').classList.toggle('active', tab === 'cam');
  document.getElementById('tab-upload').classList.toggle('active', tab === 'upload');
  document.getElementById('scan-frame').style.display = tab === 'cam' ? 'block' : 'none';
  document.getElementById('upload-area').classList.toggle('active-tab', tab === 'upload');
  resetAll(false);
}


/* ────────────────────────────────────────────────────────────────
   13. 시작 버튼
────────────────────────────────────────────────────────────────── */
async function handleStart() {
  if (!model) return;
  if (currentTab === 'cam') await startWebcam();
  else await analyzeUploadedImage();
}


/* ────────────────────────────────────────────────────────────────
   14. 웹캠
────────────────────────────────────────────────────────────────── */
async function startWebcam() {
  if (isRunning) { await snapAndPredict(); return; }
  try {
    setStatus(getLang() === 'ko' ? '카메라 접근 중...' : 'Accessing camera...');
    webcam = new tmImage.Webcam(220, 220, true);
    await webcam.setup();
    await webcam.play();
    var container = document.getElementById('webcam-container');
    var ph = document.getElementById('cam-placeholder');
    if (ph) ph.remove();
    container.appendChild(webcam.canvas);
    isRunning = true;
    setScanAnimation(true);
    document.getElementById('start-btn').textContent = getLang() === 'ko' ? '📸 스냅샷 찍기' : '📸 Take Snapshot';
    setStatus(getLang() === 'ko' ? '실시간 분석 중... 얼굴을 프레임에 맞춰주세요' : 'Analyzing live... align your face with the frame');
    loop();
  } catch (e) {
    setStatus(getLang() === 'ko' ? '❌ 카메라를 사용할 수 없습니다. 이미지 업로드 탭을 이용해주세요.' : '❌ Camera unavailable. Please use the upload tab.');
    console.error(e);
  }
}

async function loop() {
  if (!isRunning) return;
  webcam.update();
  await predict(webcam.canvas);
  requestAnimationFrame(loop);
}

async function snapAndPredict() {
  setScanAnimation(false);
  isRunning = false;
  if (webcam) { webcam.stop(); webcam = null; }
  document.getElementById('start-btn').textContent = getLang() === 'ko' ? '⚡ 다시 시작' : '⚡ Restart';
  setStatus(getLang() === 'ko' ? '분석 완료!' : 'Analysis complete!');
}


/* ────────────────────────────────────────────────────────────────
   15. 이미지 업로드
────────────────────────────────────────────────────────────────── */
function onFileSelect(e) {
  var file = (e.target && e.target.files) ? e.target.files[0] : e;
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(ev) {
    uploadedImage = new Image();
    uploadedImage.onload = function() {
      var prev = document.getElementById('preview-img');
      prev.src = ev.target.result;
      prev.style.display = 'block';
      setStatus(getLang() === 'ko' ? '이미지 선택 완료 — 분석 시작을 눌러주세요' : 'Image selected — press Start Analysis');
    };
    uploadedImage.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

(function initUploadDragDrop() {
  var uploadArea = document.getElementById('upload-area');
  if (!uploadArea) return;
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--gold)';
  });
  uploadArea.addEventListener('dragleave', function() {
    uploadArea.style.borderColor = '';
  });
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    var file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) onFileSelect({ target: { files: [file] } });
  });
})();

async function analyzeUploadedImage() {
  if (!uploadedImage) {
    setStatus(getLang() === 'ko' ? '⚠️ 먼저 이미지를 선택해주세요' : '⚠️ Please select an image first');
    return;
  }
  setScanAnimation(true);
  await predict(uploadedImage);
  setScanAnimation(false);
}


/* ────────────────────────────────────────────────────────────────
   16. AI 예측
────────────────────────────────────────────────────────────────── */
async function predict(imageEl) {
  if (!model) return;
  var predictions = await model.predict(imageEl);
  predictions.sort(function(a, b) { return b.probability - a.probability; });
  var top      = predictions[0];
  var charInfo = getCharInfo(top.className);

  document.getElementById('result-name').textContent = charInfo.name;
  document.getElementById('result-rank').textContent = charInfo.rank;
  document.getElementById('result-desc').textContent = charInfo.desc;
  animateScore(Math.round(top.probability * 100));
  renderAllPredictions(predictions);

  var sec = document.getElementById('result-section');
  sec.style.display = 'block';
  sec.classList.add('show');

  // 플로팅 공유 버튼 표시
  document.getElementById('share-float').style.display = 'flex';
}

function animateScore(target) {
  var el  = document.getElementById('result-score');
  var cur = 0, step = target / 40;
  var timer = setInterval(function() {
    cur = Math.min(cur + step, target);
    el.textContent = Math.round(cur) + '%';
    if (cur >= target) clearInterval(timer);
  }, 20);
}

function renderAllPredictions(predictions) {
  var container = document.getElementById('label-container');
  container.innerHTML = '';
  predictions.forEach(function(p, i) {
    var pct  = (p.probability * 100).toFixed(1);
    var row  = document.createElement('div');  row.className = 'pred-row';
    var ns   = document.createElement('span'); ns.className  = 'pred-name'; ns.textContent = getCharInfo(p.className).name;
    var bw   = document.createElement('div');  bw.className  = 'pred-bar-wrap';
    var bar  = document.createElement('div');  bar.className = 'pred-bar ' + (i === 0 ? 'top' : 'other');
    bar.dataset.pct = p.probability * 100;
    bw.appendChild(bar);
    var ps   = document.createElement('span'); ps.className  = 'pred-pct' + (i === 0 ? ' top' : ''); ps.textContent = pct + '%';
    row.appendChild(ns); row.appendChild(bw); row.appendChild(ps);
    container.appendChild(row);
  });
  requestAnimationFrame(function() {
    document.querySelectorAll('.pred-bar').forEach(function(b) { b.style.width = b.dataset.pct + '%'; });
  });
}


/* ────────────────────────────────────────────────────────────────
   17. 초기화
────────────────────────────────────────────────────────────────── */
function resetAll(showMsg) {
  if (showMsg === undefined) showMsg = true;
  if (webcam) { try { webcam.stop(); } catch(e){} webcam = null; }
  isRunning = false;
  setScanAnimation(false);

  var container = document.getElementById('webcam-container');
  container.innerHTML = '';
  if (currentTab === 'cam') {
    container.innerHTML =
      '<div class="cam-placeholder" id="cam-placeholder">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
          '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>' +
          '<circle cx="12" cy="13" r="4"/>' +
        '</svg>' +
        '<span id="cam-placeholder-text">' + (getLang() === 'ko' ? '카메라를 시작하세요' : 'Start camera') + '</span>' +
      '</div>';
  }

  uploadedImage = null;
  var prev = document.getElementById('preview-img');
  prev.src = ''; prev.style.display = 'none';
  document.getElementById('file-input').value = '';

  var sec = document.getElementById('result-section');
  sec.classList.remove('show'); sec.style.display = 'none';
  document.getElementById('label-container').innerHTML = '';

  document.getElementById('start-btn').textContent = getLang() === 'ko' ? '⚡ 분석 시작' : '⚡ Start Analysis';
  if (showMsg) setStatus(model ? (getLang() === 'ko' ? '✅ 준비 완료 — 카메라를 시작하거나 이미지를 업로드하세요' : '✅ Ready') : (getLang() === 'ko' ? '모델을 준비 중입니다...' : 'Preparing model...'));
}


/* ────────────────────────────────────────────────────────────────
   18. 유틸 함수들
────────────────────────────────────────────────────────────────── */
function setStatus(msg) {
  var el = document.getElementById('status-msg');
  if (el) el.textContent = msg;
}

function showLoading(show) {
  var el = document.getElementById('loading-overlay');
  if (el) el.classList.toggle('show', show);
}

function setScanAnimation(on) {
  var sf = document.getElementById('scan-frame');
  if (sf) sf.classList.toggle('scanning', on);
}


/* ────────────────────────────────────────────────────────────────
   19. 배경 파티클
────────────────────────────────────────────────────────────────── */
(function initParticles() {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H, particles = [];
  // 파티클 색상은 CSS 변수에서 가져옴
  var t = SITE_CONFIG.theme;

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  function Particle() { this.reset(true); }
  Particle.prototype.reset = function(init) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    // 스파크: 소형 + 가끔 밝은 스파크
    var isSpark = Math.random() > 0.7;
    this.size   = isSpark ? Math.random() * 1 + 0.3 : Math.random() * 1.5 + 0.5;
    this.speedY = isSpark ? -(Math.random() * 1.2 + 0.5) : -(Math.random() * 0.5 + 0.15);
    this.speedX = (Math.random() - 0.5) * (isSpark ? 0.8 : 0.25);
    this.opacity = isSpark ? Math.random() * 0.7 + 0.2 : Math.random() * 0.35 + 0.08;
    this.color = Math.random() > 0.5
      ? 'rgba(var(--crimson-rgb),' + this.opacity + ')'
      : 'rgba(var(--gold-rgb),' + (this.opacity * 0.6) + ')';
  };
  Particle.prototype.update = function() {
    this.x += this.speedX; this.y += this.speedY;
    if (this.y < -10) this.reset();
  };
  Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // rgba(var(...)) 는 canvas 2d 에서 동작 안 하므로 config 값 직접 사용
    var rgb = SITE_CONFIG.theme.primary;
    ctx.fillStyle = Math.random() > 0.5
      ? hexWithAlpha(SITE_CONFIG.theme.primary, this.opacity)
      : hexWithAlpha(SITE_CONFIG.theme.gold,    this.opacity * 0.6);
    ctx.fill();
  };

  function hexWithAlpha(hex, alpha) {
    var r = parseInt(hex.slice(1,3),16);
    var g = parseInt(hex.slice(3,5),16);
    var b = parseInt(hex.slice(5,7),16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha.toFixed(2) + ')';
  }

  for (var i = 0; i < 110; i++) particles.push(new Particle());
  (function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function(p) { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  })();
})();


/* ────────────────────────────────────────────────────────────────
   20. SNS 공유
────────────────────────────────────────────────────────────────── */
var _sfOpen = false;

function getShareText() {
  var sh  = SITE_CONFIG.share;
  var url = SITE_CONFIG.siteUrl;
  var tags = '\n' + sh.hashtags;
  var hasResult = document.getElementById('result-section').classList.contains('show');
  if (hasResult) {
    var name  = (document.getElementById('result-name').textContent  || '').trim();
    var rank  = (document.getElementById('result-rank').textContent  || '').trim();
    var score = (document.getElementById('result-score').textContent || '').trim();
    if (name && name !== '—') return sh.resultText(name, rank, score, url) + tags;
  }
  return sh.defaultText(url) + tags;
}

function shareSNS(type) {
  var text = getShareText();
  var url  = SITE_CONFIG.siteUrl;
  var sh   = SITE_CONFIG.share;
  if (type === 'native') {
    if (navigator.share) {
      navigator.share({ title: sh.shareTitle, text: text, url: url }).catch(function(){});
    } else { shareSNS('copy'); }
  } else if (type === 'twitter') {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text), '_blank', 'width=600,height=440,noopener');
  } else if (type === 'facebook') {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&quote=' + encodeURIComponent(text.split('\n')[0]), '_blank', 'width=600,height=440,noopener');
  } else if (type === 'threads') {
    window.open('https://www.threads.net/intent/post?text=' + encodeURIComponent(text), '_blank', 'width=600,height=440,noopener');
  } else if (type === 'copy') {
    var btn = document.getElementById('share-copy-btn');
    var copied = getLang() === 'ko' ? '✅ 복사됨' : '✅ Copied';
    var orig   = '🔗 ' + (getLang() === 'ko' ? '링크 복사' : 'Copy Link');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        showCopyToast();
        if (btn) { btn.textContent = copied; setTimeout(function() { btn.textContent = orig; }, 2200); }
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
      showCopyToast();
      if (btn) { btn.textContent = copied; setTimeout(function() { btn.textContent = orig; }, 2200); }
    }
  }
  if (typeof gtag !== 'undefined') gtag('event', 'share', { event_category: 'SNS', event_label: type });
}

function showCopyToast() {
  var el = document.getElementById('copy-toast');
  if (!el) return;
  el.style.opacity = '1';
  setTimeout(function() { el.style.opacity = '0'; }, 2500);
}

function toggleShareFloat() {
  _sfOpen = !_sfOpen;
  document.getElementById('sf-items').classList.toggle('open', _sfOpen);
  document.getElementById('sf-main-btn').textContent = _sfOpen ? '✕' : '↗';
}

document.addEventListener('click', function(e) {
  if (_sfOpen && !e.target.closest('.share-float')) {
    _sfOpen = false;
    document.getElementById('sf-items').classList.remove('open');
    document.getElementById('sf-main-btn').textContent = '↗';
  }
});

window.addEventListener('scroll', function() {
  var sf = document.getElementById('share-float');
  if (sf) sf.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

if (!navigator.share) {
  var nb = document.getElementById('share-native-btn');
  if (nb) nb.style.display = 'none';
}


/* ────────────────────────────────────────────────────────────────
   21. 결과 이미지 저장 (Canvas)
────────────────────────────────────────────────────────────────── */
function downloadResultCard() {
  var sh    = SITE_CONFIG.share;
  var name  = (document.getElementById('result-name').textContent  || '').trim();
  var rank  = (document.getElementById('result-rank').textContent  || '').trim();
  var score = (document.getElementById('result-score').textContent || '').trim();
  if (!name || name === '—') {
    setStatus(getLang() === 'ko' ? '분석 결과가 없습니다. 먼저 분석을 진행해주세요.' : 'No results yet. Please run analysis first.');
    return;
  }
  var cW = 600, cH = 380;
  var cv = document.createElement('canvas');
  cv.width = cW; cv.height = cH;
  var c = cv.getContext('2d');
  var t = SITE_CONFIG.theme;

  function hex2rgb(h) {
    return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
  }
  var pr = hex2rgb(t.primary), gr = hex2rgb(t.gold), ar = hex2rgb(t.accent);

  // 배경
  c.fillStyle = t.bg; c.fillRect(0, 0, cW, cH);
  var bg = c.createRadialGradient(cW/2, cH/2, 0, cW/2, cH/2, cW * 0.7);
  bg.addColorStop(0, 'rgba(' + ar.join(',') + ',0.25)');
  bg.addColorStop(1, 'rgba(' + pr.join(',') + ',0.12)');
  c.fillStyle = bg; c.fillRect(0, 0, cW, cH);

  // 테두리
  c.strokeStyle = 'rgba(' + pr.join(',') + ',0.6)'; c.lineWidth = 2; c.strokeRect(10, 10, cW-20, cH-20);
  c.strokeStyle = 'rgba(' + gr.join(',') + ',0.15)'; c.lineWidth = 1; c.strokeRect(16, 16, cW-32, cH-32);

  // 상단 레이블
  c.fillStyle = 'rgba(' + gr.join(',') + ',0.7)';
  c.font = 'bold 11px sans-serif'; c.textAlign = 'center';
  c.fillText(sh.resultCardTitle, cW/2, 48);

  // 구분선
  c.strokeStyle = 'rgba(' + pr.join(',') + ',0.4)'; c.lineWidth = 1;
  c.beginPath(); c.moveTo(80, 60); c.lineTo(cW-80, 60); c.stroke();

  // 캐릭터 이름
  c.fillStyle = '#ffffff'; c.font = 'bold 62px sans-serif';
  c.fillText(name, cW/2, 160);

  // 랭크
  c.fillStyle = t.primary; c.font = 'bold 18px sans-serif';
  c.fillText(rank, cW/2, 192);

  // 구분선2
  c.strokeStyle = 'rgba(' + gr.join(',') + ',0.2)'; c.lineWidth = 1;
  c.beginPath(); c.moveTo(180, 210); c.lineTo(cW-180, 210); c.stroke();

  // 유사도 점수
  c.fillStyle = t.gold; c.font = 'bold 80px sans-serif';
  c.fillText(score, cW/2, 300);
  c.fillStyle = 'rgba(255,255,255,0.3)'; c.font = '13px sans-serif';
  c.fillText(sh.scoreLabel || '유사도', cW/2, 322);

  // 하단 URL + 해시태그
  c.fillStyle = 'rgba(255,255,255,0.2)'; c.font = '11px sans-serif';
  c.fillText(sh.resultCardFooter(SITE_CONFIG.siteUrl, sh.hashtags), cW/2, 358);

  var link = document.createElement('a');
  link.download = sh.resultCardFilename(name, score);
  link.href = cv.toDataURL('image/png');
  link.click();

  if (typeof gtag !== 'undefined') gtag('event', 'share', { event_category: 'SNS', event_label: 'image_save' });
}


/* ────────────────────────────────────────────────────────────────
   22. 별점 평가
────────────────────────────────────────────────────────────────── */
function initStarRating() {
  var stars  = document.querySelectorAll('.star-el');
  var msgEl  = document.getElementById('star-msg');
  if (!stars.length || !msgEl) return;
  var lang     = getLang();
  var rawLabels = SITE_CONFIG.guide.ratingLabels || ['','별로에요','아쉬워요','괜찮아요','좋아요!','최고예요! 🔥'];
  var labels   = rawLabels.map(function(l) { return l && typeof l === 'object' ? (l[lang] || l.ko) : (l || ''); });
  var thanksMsg = lang === 'ko' ? '평가해주셔서 감사합니다!' : 'Thanks for rating!';
  var saved    = localStorage.getItem('geo_rating');

  function paint(n) {
    stars.forEach(function(s) {
      s.style.color = parseInt(s.dataset.v) <= n ? 'var(--gold)' : 'rgba(255,255,255,0.2)';
    });
  }
  if (saved) { paint(+saved); msgEl.textContent = thanksMsg + ' (' + saved + '/5)'; }

  stars.forEach(function(s) {
    s.addEventListener('mouseenter', function() { paint(+this.dataset.v); msgEl.textContent = labels[+this.dataset.v] || ''; });
    s.addEventListener('mouseleave', function() {
      var sv = localStorage.getItem('geo_rating');
      paint(sv ? +sv : 0);
      msgEl.textContent = sv ? thanksMsg + ' (' + sv + '/5)' : '';
    });
    s.addEventListener('click', function() {
      var v = +this.dataset.v;
      localStorage.setItem('geo_rating', v);
      paint(v); msgEl.textContent = thanksMsg + ' (' + v + '/5) 🙏';
      if (typeof gtag !== 'undefined') gtag('event', 'service_rating', { event_category: 'GEO', event_label: 'star_' + v, value: v });
    });
  });
}


/* ────────────────────────────────────────────────────────────────
   23. Disqus 초기화
────────────────────────────────────────────────────────────────── */
function initDisqus() {
  if (!SITE_CONFIG.disqus) return;
  window.disqus_config = function() {
    this.page.url = window.location.href;
    this.page.identifier = window.location.pathname;
  };
  var d = document, s = d.createElement('script');
  s.src = 'https://' + SITE_CONFIG.disqus + '.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
}


/* ────────────────────────────────────────────────────────────────
   24. 글로벌 에러 핸들러
────────────────────────────────────────────────────────────────── */
window.addEventListener('error', function(e) {
  if (e.message === 'Script error.' || e.filename === '') return;
  console.warn('[닮은꼴] 에러:', e.message, '|', e.filename, ':', e.lineno);
});
window.addEventListener('unhandledrejection', function(e) {
  console.warn('[닮은꼴] 미처리 Promise:', e.reason);
});


/* ────────────────────────────────────────────────────────────────
   25. 초기화 실행
────────────────────────────────────────────────────────────────── */
(function init() {
  // 현재 언어 버튼 활성화
  var lang = getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // SEO 메타 태그 주입
  injectMetaTags();

  // 네비게이션
  renderNav();

  // 헤더 & UI 텍스트
  renderHeader();
  renderStaticUIText();

  // 가이드 섹션 (캐릭터 카드, FAQ 등)
  renderGuide();

  // 푸터
  renderFooter();

  // scan-frame 보이기, 모델 로드 시작
  document.getElementById('scan-frame').style.display = 'block';
  loadModel();

  // Disqus
  initDisqus();
})();
