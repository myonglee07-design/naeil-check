var APP_VERSION = 'v1.2.0';
var DB_NAME = 'naeilcheck';
var DB_VER = 1;

var ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>',
  listCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><polyline points="3,6 4,7 6,5"/><polyline points="3,12 4,13 6,11"/><polyline points="3,18 4,19 6,17"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3,6 5,6 21,6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  rotateLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg>',
  archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21,8 21,21 3,21 3,8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  plusCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>'
};

var DEFAULT_TMPLS = [
  {name:'출근 준비', type:'fixed', items:['휴대폰','지갑','차키 / 집키','충전기 / 보조배터리','이어폰','물 / 텀블러','출근 복장 확인']},
  {name:'차량 점검', type:'fixed', items:['연료 확인','타이어 이상 확인','차량 경고등 확인','거치대 / 충전 연결','차량 서류 확인','실내 정리']},
  {name:'아이 외출 준비', type:'fixed', items:['물','휴지 / 물티슈','간식','여벌 옷','아이 신발 / 겉옷','장난감 / 심심풀이','상비약 / 밴드']},
  {name:'여행 준비', type:'oneTime', items:['신분증','휴대폰 / 충전기','지갑 / 카드','옷 / 속옷','세면도구','상비약','숙소 예약 확인','교통편 확인','집 잠금 / 가스 확인','보조배터리']},
  {name:'병원 방문 준비', type:'oneTime', items:['신분증','병원 예약 확인','진료 관련 서류','복용 중인 약 정보','결제 수단','휴대폰 충전','물','아이 동반 시 간식']}
];

var LIGHT_COLORS = ['#3B82F6','#10B981','#8B5CF6','#F59E0B','#EC4899','#EF4444','#06B6D4'];
var DARK_COLORS = ['#60A5FA','#34D399','#A78BFA','#FCD34D','#FB7185','#F87171','#22D3EE'];
var BG_LIGHT = ['','#FFF1F2','#FEF9C3','#DCFCE7','#DBEAFE','#F3E8FF','#FFF7ED','#E0F2FE'];
var BG_DARK = ['','#1A1A2E','#1B2A3D','#1A2E1A','#2D1B3E','#2A1F1F','#1F2A2A','#2A2519'];
var BG_LABELS = ['기본','로즈','레몬','민트','스카이','라벤더','피치','아이스'];
var FONT_SIZES = {sm: 14, md: 16, lg: 19, xl: 22};

var db = null;
var curTab = 'home';
var curSeg = 'fixed';
var curInst = null;
var swX = 0;
var swY = 0;
var _skipPop = false;
var cfg = {theme: 'light', fontSize: 'md', pointColor: '#3B82F6', bgColor: '', archiveDays: 30};

function ic(name) {
  return '<span style="display:inline-flex;width:1.1rem;height:1.1rem;align-items:center;flex-shrink:0">' + (ICONS[name] || '') + '</span>';
}

function uid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function toDay() { return new Date().toISOString().slice(0, 10); }

function todayLbl() {
  var days = ['일','월','화','수','목','금','토'];
  var d = new Date();
  return (d.getMonth()+1) + '월 ' + d.getDate() + '일 (' + days[d.getDay()] + ')';
}

function fmtDate(ts) {
  var d = new Date(ts);
  return (d.getMonth()+1) + '월 ' + d.getDate() + '일';
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function openDB() {
  return new Promise(function(res, rej) {
    var r = indexedDB.open(DB_NAME, DB_VER);
    r.onupgradeneeded = function(e) {
      var d = e.target.result;
      if (!d.objectStoreNames.contains('templates')) d.createObjectStore('templates', {keyPath: 'id'});
      if (!d.objectStoreNames.contains('instances')) {
        var s = d.createObjectStore('instances', {keyPath: 'id'});
        s.createIndex('date', 'date');
        s.createIndex('templateId', 'templateId');
      }
      if (!d.objectStoreNames.contains('settings')) d.createObjectStore('settings', {keyPath: 'key'});
    };
    r.onsuccess = function(e) { db = e.target.result; res(); };
    r.onerror = function() { rej(r.error); };
  });
}

function dAll(st) {
  return new Promise(function(res, rej) {
    var r = db.transaction(st, 'readonly').objectStore(st).getAll();
    r.onsuccess = function() { res(r.result); };
    r.onerror = function() { rej(r.error); };
  });
}

function dGet(st, k) {
  return new Promise(function(res, rej) {
    var r = db.transaction(st, 'readonly').objectStore(st).get(k);
    r.onsuccess = function() { res(r.result); };
    r.onerror = function() { rej(r.error); };
  });
}

function dPut(st, data) {
  return new Promise(function(res, rej) {
    var r = db.transaction(st, 'readwrite').objectStore(st).put(data);
    r.onsuccess = function() { res(r.result); };
    r.onerror = function() { rej(r.error); };
  });
}

function dDel(st, k) {
  return new Promise(function(res, rej) {
    var r = db.transaction(st, 'readwrite').objectStore(st).delete(k);
    r.onsuccess = function() { res(); };
    r.onerror = function() { rej(r.error); };
  });
}

function dIdx(st, idx, val) {
  return new Promise(function(res, rej) {
    var r = db.transaction(st, 'readonly').objectStore(st).index(idx).getAll(val);
    r.onsuccess = function() { res(r.result); };
    r.onerror = function() { rej(r.error); };
  });
}

function loadCfg() {
  return dAll('settings').then(function(all) {
    all.forEach(function(s) { cfg[s.key] = s.value; });
    applyCfg();
  });
}

function saveCfg(k, v) {
  cfg[k] = v;
  return dPut('settings', {key: k, value: v}).then(function() { applyCfg(); });
}

function applyCfg() {
  var root = document.documentElement;
  root.style.setProperty('--fs', FONT_SIZES[cfg.fontSize] + 'px');
  root.style.setProperty('--pr', cfg.pointColor);
  root.style.setProperty('--prl', cfg.pointColor + '22');
  if (cfg.theme === 'dark') document.body.classList.add('dk');
  else document.body.classList.remove('dk');
  if (cfg.bgColor) root.style.setProperty('--bg', cfg.bgColor);
  else root.style.removeProperty('--bg');
}

var toastTimer = null;
function toast(msg, dur) {
  dur = dur || 2500;
  var el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { el.classList.remove('on'); }, dur);
}

var _dlgResolve = null;
function dlg(title, msg, btns) {
  return new Promise(function(res) {
    _dlgResolve = res;
    document.getElementById('dt').textContent = title;
    document.getElementById('dm').textContent = msg;
    var c = document.getElementById('dbs');
    c.innerHTML = '';
    btns.forEach(function(b) {
      var btn = document.createElement('button');
      btn.textContent = b.label;
      btn.className = b.cls || 'bc';
      btn.onclick = function() { closeDlg(); _skipPop = true; history.back(); res(b.val); };
      c.appendChild(btn);
    });
    document.getElementById('do').classList.add('on');
    history.pushState({layer: 'dlg'}, '');
  });
}

function closeDlg() {
  var el = document.getElementById('do');
  if (!el.classList.contains('on')) return;
  el.classList.remove('on');
  if (_dlgResolve) { var fn = _dlgResolve; _dlgResolve = null; fn(null); }
}

function closeDlgAndBack() {
  closeDlg();
  _skipPop = true;
  history.back();
}

function isSheetOpen() { return document.getElementById('mo').classList.contains('on'); }
function isDlgOpen() { return document.getElementById('do').classList.contains('on'); }
function isCheckOpen() { return document.getElementById('cs').classList.contains('on'); }

function openSheet(html) {
  document.getElementById('mc').innerHTML = html;
  document.getElementById('mo').classList.add('on');
  history.pushState({layer: 'sheet'}, '');
}

function closeSheet() {
  var el = document.getElementById('mo');
  if (!el.classList.contains('on')) return;
  el.classList.remove('on');
}

function closeSheetAndBack() {
  closeSheet();
  _skipPop = true;
  history.back();
}

function seedDefaults() {
  return dAll('templates').then(function(existing) {
    if (existing.length > 0) return Promise.resolve();
    var p = Promise.resolve();
    DEFAULT_TMPLS.forEach(function(t, i) {
      p = p.then(function() {
        return dPut('templates', {
          id: uid(),
          name: t.name,
          type: t.type,
          items: t.items.map(function(tx, j) { return {id: uid(), text: tx, sortOrder: j}; }),
          sortOrder: i,
          createdAt: Date.now()
        });
      });
    });
    return p;
  });
}

function seedToday() {
  return dAll('templates').then(function(tmpls) {
    var fixed = tmpls.filter(function(t) { return t.type === 'fixed'; });
    return dIdx('instances', 'date', toDay()).then(function(todayInsts) {
      var existIds = todayInsts.map(function(i) { return i.templateId; });
      var p = Promise.resolve();
      fixed.forEach(function(t) {
        if (existIds.indexOf(t.id) >= 0) return;
        p = p.then(function() {
          return dPut('instances', {
            id: uid(),
            templateId: t.id,
            name: t.name,
            type: 'fixed',
            date: toDay(),
            items: t.items.map(function(it) { return {id: it.id, text: it.text, sortOrder: it.sortOrder, checked: false}; }),
            isCompleted: false,
            completedAt: null,
            createdAt: Date.now()
          });
        });
      });
      return p;
    });
  });
}

function cleanup() {
  return dAll('instances').then(function(insts) {
    var cutoff = Date.now() - (Number(cfg.archiveDays) * 86400000);
    var p = Promise.resolve();
    insts.forEach(function(inst) {
      if (inst.isCompleted && inst.completedAt && inst.completedAt < cutoff) {
        p = p.then(function() { return dDel('instances', inst.id); });
      }
    });
    return p;
  });
}

function greeting() {
  var h = new Date().getHours();
  if (h < 6) return '새벽이네요, 화이팅!';
  if (h < 12) return '좋은 아침이에요!';
  if (h < 18) return '오후도 힘내세요!';
  return '내일 준비, 시작!';
}

function ringSvg(pct) {
  var r = 27;
  var c = Math.PI * 2 * r;
  var offset = c - (c * pct / 100);
  var color = pct >= 100 ? 'var(--ok)' : 'var(--pr)';
  return '<div class="dcard-ring">' +
    '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="' + r + '" fill="none" stroke="var(--sf2)" stroke-width="6"/>' +
    '<circle cx="32" cy="32" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + offset + '"/></svg>' +
    '<div class="dcard-ring-pct">' + pct + '%</div></div>';
}

function calcStreak() {
  return dAll('instances').then(function(all) {
    var dateSet = {};
    all.forEach(function(inst) {
      if (inst.isCompleted && inst.date) dateSet[inst.date] = true;
    });
    var streak = 0;
    var d = new Date();
    var today = toDay();
    if (!dateSet[today]) {
      d.setDate(d.getDate() - 1);
    }
    for (var i = 0; i < 3650; i++) {
      var ds = d.toISOString().slice(0, 10);
      if (dateSet[ds]) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  });
}

function renderHome() {
  return seedToday().then(function() {
    return dIdx('instances', 'date', toDay());
  }).then(function(insts) {
    var el = document.getElementById('hcnt');
    var pending = insts.filter(function(i) { return !i.isCompleted; });
    var done = insts.filter(function(i) { return i.isCompleted; });

    var totalItems = 0;
    var checkedItems = 0;
    insts.forEach(function(inst) {
      totalItems += inst.items.length;
      inst.items.forEach(function(it) { if (it.checked) checkedItems++; });
    });
    var remaining = totalItems - checkedItems;
    var pct = totalItems > 0 ? Math.round(checkedItems / totalItems * 100) : 0;

    var onceCount = 0;
    insts.forEach(function(inst) {
      if (inst.type === 'oneTime') onceCount++;
    });

    var h = '<div class="dth"><h2>' + todayLbl() + '</h2><p>오늘 챙길 것들을 확인하세요</p></div>';

    h += '<div class="dash">';

    if (remaining > 0) {
      h += '<div class="dcard"><div class="dcard-label">남은 준비물</div>' +
        '<div class="dcard-val">' + remaining + '개</div>' +
        '<div class="dcard-sub">총 ' + totalItems + '개 중</div></div>';
    } else if (totalItems > 0) {
      h += '<div class="dcard"><div class="dcard-label">남은 준비물</div>' +
        '<div class="dcard-val dcard-zero">완료!</div>' +
        '<div class="dcard-sub">모두 챙겼어요</div></div>';
    } else {
      h += '<div class="dcard"><div class="dcard-label">남은 준비물</div>' +
        '<div class="dcard-val" style="color:var(--tx2)">—</div>' +
        '<div class="dcard-sub">리스트를 추가하세요</div></div>';
    }

    if (onceCount > 0) {
      h += '<div class="dcard"><div class="dcard-label">오늘 추가 준비물</div>' +
        '<div class="dcard-val" style="color:#EA580C">' + onceCount + '개</div>' +
        '<div class="dcard-sub">일회성 리스트</div></div>';
    } else {
      h += '<div class="dcard"><div class="dcard-label">오늘 추가 준비물</div>' +
        '<div class="dcard-val" style="font-size:1.1rem;color:var(--tx2)">추가 없음</div>' +
        '<div class="dcard-sub">고정 리스트만</div></div>';
    }

    h += '<div class="dcard" style="align-items:center;text-align:center">' +
      '<div class="dcard-label">오늘 진행률</div>' +
      ringSvg(pct) +
      '<div class="dcard-sub">' + checkedItems + '/' + totalItems + ' 완료</div></div>';

    h += '<div class="dcard"><div class="dcard-label">오늘</div>' +
      '<div class="dcard-val" style="font-size:1.1rem">' + todayLbl() + '</div>' +
      '<div class="dcard-msg">' + greeting() + '</div></div>';

    h += '</div>';

    if (!insts.length) {
      h += '<div class="empty"><div class="empty-ico">' + ICONS.clipboard + '</div><p>오늘 사용할 리스트가 없어요<br>+ 버튼을 눌러 추가해보세요</p></div>';
    } else {
      if (pending.length) {
        h += '<div class="stn">미완료</div><div class="lc">';
        pending.forEach(function(inst) {
          var tot = inst.items.length;
          var dn = inst.items.filter(function(i) { return i.checked; }).length;
          var pc = tot > 0 ? Math.round(dn / tot * 100) : 0;
          var tag = inst.type === 'fixed' ? '<span class="bdg bdg-fixed">고정</span>' : '<span class="bdg bdg-once">일회성</span>';
          h += '<div class="hcard" data-id="' + inst.id + '">' +
            '<div class="hcard-head"><h3>' + esc(inst.name) + '</h3>' + tag + '</div>' +
            '<div class="hcard-meta">' + dn + '/' + tot + ' 완료</div>' +
            '<div class="pbar"><div class="pfill" style="width:' + pc + '%"></div></div></div>';
        });
        h += '</div>';
      }
      if (done.length) {
        h += '<div class="stn" style="display:flex;align-items:center;padding-bottom:0">' +
          '<button class="tog-row" id="togBtn"><span class="tog-ico" id="togIco">' + ICONS.chevronRight + '</span>완료된 리스트 ' + done.length + '개</button></div>' +
          '<div id="doneList" style="display:none"><div class="lc">';
        done.forEach(function(inst) {
          h += '<div class="hcard done" data-id="' + inst.id + '">' +
            '<div class="hcard-head"><h3>' + esc(inst.name) + '</h3><span class="bdg bdg-done">완료</span></div>' +
            '<div class="hcard-meta">' + inst.items.length + '/' + inst.items.length + ' 완료</div>' +
            '<div class="pbar"><div class="pfill" style="width:100%"></div></div></div>';
        });
        h += '</div></div>';
      }
    }
    el.innerHTML = h;

    el.querySelectorAll('.hcard').forEach(function(c) {
      c.addEventListener('click', function() {
        dGet('instances', c.dataset.id).then(function(inst) {
          if (inst) openCheck(inst);
        });
      });
    });

    var togBtn = document.getElementById('togBtn');
    if (togBtn) {
      togBtn.addEventListener('click', function() {
        var dl = document.getElementById('doneList');
        var ico = document.getElementById('togIco');
        var isOpen = dl.style.display !== 'none';
        dl.style.display = isOpen ? 'none' : 'block';
        ico.classList.toggle('open', !isOpen);
      });
    }
    updateFab();
  });
}

function renderList() {
  var el = document.getElementById('lcnt');

  if (curSeg === 'archive') {
    return dAll('instances').then(function(insts) {
      var arch = insts.filter(function(i) { return i.isCompleted; }).sort(function(a, b) { return b.completedAt - a.completedAt; });
      if (!arch.length) {
        el.innerHTML = '<div class="empty"><div class="empty-ico">' + ICONS.archive + '</div><p>완료된 리스트가 없어요</p></div>';
      } else {
        var h = '<div class="lc">';
        arch.forEach(function(i) {
          h += '<div class="arch-card"><div class="arch-head"><h3>' + esc(i.name) + '</h3><span class="bdg bdg-done">완료</span></div>' +
            '<div class="arch-meta">' + fmtDate(i.completedAt) + ' · ' + i.items.length + '개 항목</div></div>';
        });
        el.innerHTML = h + '</div>';
      }
      updateFab();
    });
  }

  return dAll('templates').then(function(tmpls) {
    var filtered = tmpls.filter(function(t) { return t.type === curSeg; }).sort(function(a, b) { return a.sortOrder - b.sortOrder; });
    if (!filtered.length) {
      el.innerHTML = '<div class="empty"><div class="empty-ico">' + ICONS.plusCircle + '</div><p>리스트가 없어요<br>+ 버튼으로 추가해보세요</p></div>';
    } else {
      var h = '<div class="lc">';
      filtered.forEach(function(t) {
        var typeLabel = t.type === 'fixed' ? '매일 반복' : '일회성';
        h += '<div class="tmpl-card"><div class="tmpl-head"><h3>' + esc(t.name) + '</h3>' +
          '<div class="acts"><button class="ib etb" data-id="' + t.id + '">' + ic('pen') + '</button>' +
          '<button class="ib dtb" data-id="' + t.id + '">' + ic('trash') + '</button></div></div>' +
          '<div class="tmpl-meta">' + t.items.length + '개 항목 · ' + typeLabel + '</div></div>';
      });
      el.innerHTML = h + '</div>';
    }

    el.querySelectorAll('.etb').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        dGet('templates', btn.dataset.id).then(function(t) {
          if (t) showTmplEditor(t);
        });
      });
    });

    el.querySelectorAll('.dtb').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        dlg('리스트 삭제', '이 리스트를 삭제할까요?', [
          {label: '취소', val: false, cls: 'bc'},
          {label: '삭제', val: true, cls: 'bd2'}
        ]).then(function(ok) {
          if (ok) {
            dDel('templates', btn.dataset.id).then(function() {
              toast('삭제됐습니다');
              renderList();
            });
          }
        });
      });
    });
    updateFab();
  });
}

function showTmplEditor(tmpl) {
  var isEdit = !!tmpl;
  var nm = tmpl ? tmpl.name : '';
  var tp = tmpl ? tmpl.type : curSeg;
  var its = tmpl ? tmpl.items.map(function(i) { return i.text; }).join('\n') : '';

  openSheet(
    '<div class="stl">' + (isEdit ? '리스트 수정' : '리스트 추가') + '</div>' +
    '<div class="fg"><label class="fl">리스트 이름</label><input class="ti" id="eNm" value="' + esc(nm) + '" placeholder="예: 출근 준비"></div>' +
    '<div class="fg"><label class="fl">타입</label><select class="sei" id="eTp">' +
    '<option value="fixed" ' + (tp === 'fixed' ? 'selected' : '') + '>고정 (매일 반복)</option>' +
    '<option value="oneTime" ' + (tp === 'oneTime' ? 'selected' : '') + '>일회성 (특정 상황)</option></select></div>' +
    '<div class="fg"><label class="fl">항목 목록</label><div class="ia"><textarea id="eIt" placeholder="항목을 한 줄씩 입력하세요&#10;예:&#10;휴대폰&#10;지갑&#10;차키">' + esc(its) + '</textarea></div>' +
    '<p class="hint">한 줄 = 하나의 항목. 줄바꿈으로 여러 항목을 입력할 수 있어요.</p></div>' +
    '<button class="btn btp" id="eSave">' + (isEdit ? '저장' : '추가') + '</button>' +
    (isEdit ? '<button class="btn bte" id="eAddToday" style="margin-top:8px">오늘에 추가</button>' : '') +
    '<div style="height:8px"></div>'
  );

  document.getElementById('eSave').addEventListener('click', function() {
    var nm2 = document.getElementById('eNm').value.trim();
    var tp2 = document.getElementById('eTp').value;
    var raw = document.getElementById('eIt').value.trim();
    if (!nm2) { toast('이름을 입력해주세요', 3000); return; }
    if (!raw) { toast('항목을 입력해주세요', 3000); return; }
    var its2 = raw.split('\n').map(function(s) { return s.trim(); }).filter(Boolean)
      .map(function(tx, i) { return {id: uid(), text: tx, sortOrder: i}; });
    dPut('templates', {
      id: isEdit ? tmpl.id : uid(),
      name: nm2,
      type: tp2,
      items: its2,
      sortOrder: isEdit ? tmpl.sortOrder : Date.now(),
      createdAt: isEdit ? tmpl.createdAt : Date.now()
    }).then(function() {
      closeSheetAndBack();
      toast(isEdit ? '저장됐습니다' : '추가됐습니다');
      renderList();
      if (curTab === 'home') renderHome();
    });
  });

  if (isEdit) {
    document.getElementById('eAddToday').addEventListener('click', function() {
      addInst(tmpl.id).then(function() {
        closeSheetAndBack();
        switchTab('home');
        toast('오늘 리스트에 추가됐습니다');
      });
    });
  }
}

function addInst(tmplId) {
  return dGet('templates', tmplId).then(function(t) {
    if (!t) return;
    return dPut('instances', {
      id: uid(),
      templateId: t.id,
      name: t.name,
      type: t.type,
      date: toDay(),
      items: t.items.map(function(it) { return {id: it.id, text: it.text, sortOrder: it.sortOrder, checked: false}; }),
      isCompleted: false,
      completedAt: null,
      createdAt: Date.now()
    });
  });
}

function openCheck(inst) {
  curInst = inst;
  document.getElementById('cstl').textContent = inst.name;
  document.getElementById('cs').classList.add('on');
  history.pushState({layer: 'check'}, '');
  drawCheck();
}

function closeCheck() {
  var el = document.getElementById('cs');
  if (!el.classList.contains('on')) return;
  el.classList.remove('on');
  curInst = null;
  renderHome();
}

function closeCheckAndBack() {
  closeCheck();
  _skipPop = true;
  history.back();
}

function drawCheck() {
  if (!curInst) return;
  var inst = curInst;
  var tot = inst.items.length;
  var dn = inst.items.filter(function(i) { return i.checked; }).length;
  var pc = tot > 0 ? Math.round(dn / tot * 100) : 0;

  document.getElementById('cspr').textContent = dn + '/' + tot;

  var h = '<div class="cs-pbar"><div class="pbar"><div class="pfill" style="width:' + pc + '%"></div></div></div>';
  var sorted = inst.items.slice().sort(function(a, b) { return a.sortOrder - b.sortOrder; });
  sorted.forEach(function(item) {
    h += '<div class="ci ' + (item.checked ? 'ck' : '') + '" data-id="' + item.id + '">' +
      '<div class="ci-circ"></div><span class="ci-txt">' + esc(item.text) + '</span></div>';
  });

  var csb = document.getElementById('csb');
  csb.innerHTML = h;
  csb.querySelectorAll('.ci').forEach(function(c) {
    c.addEventListener('click', function() { toggleItem(c.dataset.id); });
  });

  var qBtn = document.getElementById('csqck');
  if (qBtn) {
    var next = nextUnchecked();
    if (next) {
      qBtn.disabled = false;
      qBtn.textContent = '✓  ' + next.text;
    } else {
      qBtn.disabled = true;
      qBtn.textContent = '모두 완료!';
    }
  }
}

function nextUnchecked() {
  if (!curInst) return null;
  var sorted = curInst.items.slice().sort(function(a, b) { return a.sortOrder - b.sortOrder; });
  for (var i = 0; i < sorted.length; i++) {
    if (!sorted[i].checked) return sorted[i];
  }
  return null;
}

function quickCheck() {
  var item = nextUnchecked();
  if (item) toggleItem(item.id);
}

function toggleItem(itemId) {
  if (!curInst) return;
  var item = null;
  for (var i = 0; i < curInst.items.length; i++) {
    if (curInst.items[i].id === itemId) { item = curInst.items[i]; break; }
  }
  if (!item) return;
  item.checked = !item.checked;

  var allDone = curInst.items.every(function(i) { return i.checked; });
  if (allDone) {
    curInst.isCompleted = true;
    curInst.completedAt = Date.now();
  } else {
    curInst.isCompleted = false;
    curInst.completedAt = null;
  }

  dPut('instances', curInst).then(function() {
    if (allDone) {
      drawCheck();
      setTimeout(showDone, 280);
    } else {
      drawCheck();
      if (navigator.vibrate) navigator.vibrate(25);
    }
  });
}

function showDone() {
  if (navigator.vibrate) navigator.vibrate([60, 40, 100]);
  var ov = document.getElementById('cov');
  ov.classList.add('on');
  calcStreak().then(function(streak) {
    var streakEl = document.getElementById('covStreak');
    if (streakEl && streak > 1) {
      streakEl.textContent = '연속 ' + streak + '일째 완료!';
      streakEl.style.display = 'block';
    }
  });
  setTimeout(function() {
    ov.classList.remove('on');
    var se = document.getElementById('covStreak');
    if (se) { se.style.display = 'none'; se.textContent = ''; }
    closeCheckAndBack();
  }, 2500);
}

function renderSettings() {
  var isDk = cfg.theme === 'dark';
  var colors = isDk ? DARK_COLORS : LIGHT_COLORS;

  var cdots = colors.map(function(c) {
    return '<div class="cdot ' + (cfg.pointColor === c ? 'on' : '') + '" style="background:' + c + '" data-c="' + c + '"></div>';
  }).join('');

  var fbtns = Object.keys(FONT_SIZES).map(function(k) {
    return '<button class="fsbtn ' + (cfg.fontSize === k ? 'on' : '') + '" data-sz="' + k + '">' + k.toUpperCase() + '</button>';
  }).join('');

  var bgColors = isDk ? BG_DARK : BG_LIGHT;
  var bgdots = bgColors.map(function(c, i) {
    var active = cfg.bgColor === c ? 'on' : '';
    var bg = c || (isDk ? '#0F172A' : '#F8FAFC');
    return '<div class="bgdot ' + active + '" style="background:' + bg + ';border:2.5px solid ' + (active ? 'var(--tx)' : 'var(--bd)') + '" data-bg="' + c + '" title="' + BG_LABELS[i] + '"></div>';
  }).join('');

  document.getElementById('scnt').innerHTML =
    '<div class="sgrp"><div class="sgrp-title">테마</div><div class="sgrp-body">' +
    '<div class="srow"><div class="srow-lbl">다크 모드</div><button class="tgl ' + (isDk ? 'on' : '') + '" id="tgBtn"></button></div></div></div>' +
    '<div class="sgrp"><div class="sgrp-title">글씨 크기</div><div class="sgrp-body">' +
    '<div class="srow"><div class="fsbtns">' + fbtns + '</div></div></div></div>' +
    '<div class="sgrp"><div class="sgrp-title">포인트 색상</div><div class="sgrp-body">' +
    '<div class="srow"><div class="cpal">' + cdots + '</div></div></div></div>' +
    '<div class="sgrp"><div class="sgrp-title">배경색</div><div class="sgrp-body">' +
    '<div class="srow"><div class="bgpal">' + bgdots + '</div></div></div></div>' +
    '<div class="sgrp"><div class="sgrp-title">보관 기간</div><div class="sgrp-body">' +
    '<div class="srow"><div class="srow-lbl">완료 리스트 보관</div>' +
    '<select class="sei seln" id="adSel">' +
    '<option value="7" ' + (cfg.archiveDays == 7 ? 'selected' : '') + '>7일</option>' +
    '<option value="30" ' + (cfg.archiveDays == 30 ? 'selected' : '') + '>30일</option>' +
    '<option value="90" ' + (cfg.archiveDays == 90 ? 'selected' : '') + '>90일</option>' +
    '<option value="9999" ' + (cfg.archiveDays == 9999 ? 'selected' : '') + '>무제한</option>' +
    '</select></div></div></div>' +
    '<div class="sgrp"><div class="sgrp-title">백업 &amp; 복원</div><div class="sgrp-body">' +
    '<div class="srow" id="expBtn" style="cursor:pointer"><div class="srow-lbl">내보내기 (ZIP)<span>모든 데이터를 파일로 저장</span></div>' +
    '<span style="display:inline-flex;width:1rem;height:1rem;color:var(--tx2)">' + ICONS.download + '</span></div>' +
    '<div class="srow" id="impBtn" style="cursor:pointer"><div class="srow-lbl">가져오기<span>백업 파일에서 복원</span></div>' +
    '<span style="display:inline-flex;width:1rem;height:1rem;color:var(--tx2)">' + ICONS.upload + '</span></div>' +
    '<div class="srow" id="rstBtn" style="cursor:pointer"><div class="srow-lbl" style="color:var(--dg)">전체 초기화<span style="color:var(--tx2)">모든 데이터 삭제</span></div>' +
    '<span style="display:inline-flex;width:1rem;height:1rem;color:var(--dg)">' + ICONS.trash + '</span></div></div></div>' +
    '<div class="ver">내일체크 ' + APP_VERSION + '</div>';

  document.getElementById('tgBtn').addEventListener('click', function() {
    var next = cfg.theme === 'dark' ? 'light' : 'dark';
    saveCfg('theme', next).then(function() {
      return saveCfg('pointColor', next === 'dark' ? DARK_COLORS[0] : LIGHT_COLORS[0]);
    }).then(function() { renderSettings(); });
  });

  document.querySelectorAll('.fsbtn').forEach(function(b) {
    b.addEventListener('click', function() {
      saveCfg('fontSize', b.dataset.sz).then(function() { renderSettings(); });
    });
  });

  document.querySelectorAll('.cdot').forEach(function(d) {
    d.addEventListener('click', function() {
      saveCfg('pointColor', d.dataset.c).then(function() { renderSettings(); });
    });
  });

  document.querySelectorAll('.bgdot').forEach(function(d) {
    d.addEventListener('click', function() {
      saveCfg('bgColor', d.dataset.bg).then(function() {
        renderSettings();
      });
    });
  });

  document.getElementById('adSel').addEventListener('change', function(e) {
    saveCfg('archiveDays', parseInt(e.target.value)).then(function() { toast('저장됐습니다'); });
  });

  document.getElementById('expBtn').addEventListener('click', expData);

  document.getElementById('impBtn').addEventListener('click', function() {
    var inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.zip';
    inp.onchange = function(e) { impData(e.target.files[0]); };
    inp.click();
  });

  document.getElementById('rstBtn').addEventListener('click', function() {
    dlg('전체 초기화', '모든 리스트와 설정이 삭제됩니다.\n정말 초기화하시겠습니까?', [
      {label: '취소', val: false, cls: 'bc'},
      {label: '초기화', val: true, cls: 'bd2'}
    ]).then(function(ok) {
      if (ok) {
        resetAll().then(function() {
          toast('초기화됐습니다');
          renderHome();
          renderSettings();
        });
      }
    });
  });
}

function expData() {
  Promise.all([dAll('templates'), dAll('instances'), dAll('settings')]).then(function(results) {
    var data = {
      version: APP_VERSION,
      exportedAt: new Date().toISOString(),
      templates: results[0],
      instances: results[1],
      settings: results[2]
    };
    var zip = new JSZip();
    zip.file('data.json', JSON.stringify(data, null, 2));
    return zip.generateAsync({type: 'blob'});
  }).then(function(blob) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '내일체크_' + toDay() + '.zip';
    a.click();
    toast('내보내기 완료');
  }).catch(function() {
    toast('내보내기 실패', 4000);
  });
}

function impData(file) {
  if (!file) return;
  JSZip.loadAsync(file).then(function(zip) {
    return zip.file('data.json').async('string');
  }).then(function(jsonStr) {
    var data = JSON.parse(jsonStr);
    return dlg('복원 방식', '기존 데이터를 어떻게 처리할까요?', [
      {label: '취소', val: null, cls: 'bc'},
      {label: '병합', val: 'merge', cls: 'bk'},
      {label: '덮어쓰기', val: 'replace', cls: 'bd2'}
    ]).then(function(choice) {
      if (!choice) return;
      var p = Promise.resolve();
      if (choice === 'replace') p = resetAll(false);
      return p.then(function() {
        var q = Promise.resolve();
        (data.templates || []).forEach(function(t) { q = q.then(function() { return dPut('templates', t); }); });
        (data.instances || []).forEach(function(i) { q = q.then(function() { return dPut('instances', i); }); });
        (data.settings || []).forEach(function(s) { q = q.then(function() { return dPut('settings', s); }); });
        return q;
      }).then(function() {
        return loadCfg();
      }).then(function() {
        toast('가져오기 완료');
        renderHome();
        renderSettings();
      });
    });
  }).catch(function() {
    toast('가져오기 실패 — 올바른 파일인지 확인해주세요', 4000);
  });
}

function resetAll(seed) {
  if (seed === undefined) seed = true;
  return Promise.all([dAll('templates'), dAll('instances'), dAll('settings')]).then(function(results) {
    var p = Promise.resolve();
    results[0].forEach(function(t) { p = p.then(function() { return dDel('templates', t.id); }); });
    results[1].forEach(function(i) { p = p.then(function() { return dDel('instances', i.id); }); });
    results[2].forEach(function(s) { p = p.then(function() { return dDel('settings', s.key); }); });
    return p;
  }).then(function() {
    cfg = {theme: 'light', fontSize: 'md', pointColor: '#3B82F6', bgColor: '', archiveDays: 30};
    applyCfg();
    if (seed) return seedDefaults();
  });
}

function showAddTodaySheet() {
  dAll('templates').then(function(tmpls) {
    if (!tmpls.length) {
      toast('리스트 탭에서 먼저 리스트를 만들어주세요', 3000);
      return;
    }
    return dIdx('instances', 'date', toDay()).then(function(todayInsts) {
      var todayFixedIds = todayInsts.filter(function(i) { return i.type === 'fixed'; }).map(function(i) { return i.templateId; });
      var avail = tmpls.filter(function(t) { return t.type === 'oneTime' || todayFixedIds.indexOf(t.id) < 0; });
      if (!avail.length) {
        toast('추가할 수 있는 리스트가 없어요', 3000);
        return;
      }
      var h = '<div class="stl">오늘 리스트에 추가</div>';
      avail.forEach(function(t) {
        var tag = t.type === 'fixed' ? '<span class="bdg bdg-fixed">고정</span>' : '<span class="bdg bdg-once">일회성</span>';
        h += '<div class="add-row" data-tid="' + t.id + '"><div class="add-row-info">' +
          '<div class="add-row-name">' + esc(t.name) + '</div>' +
          '<div class="add-row-sub">' + t.items.length + '개 항목</div></div>' + tag + '</div>';
      });
      h += '<div style="height:4px"></div>';
      openSheet(h);

      document.querySelectorAll('.add-row').forEach(function(el) {
        el.addEventListener('click', function() {
          addInst(el.dataset.tid).then(function() {
            closeSheetAndBack();
            renderHome();
            toast('추가됐습니다');
          });
        });
      });
    });
  });
}

function updateFab() {
  var fab = document.getElementById('fab');
  if (curTab === 'settings') { fab.style.display = 'none'; return; }
  if (curTab === 'list' && curSeg === 'archive') { fab.style.display = 'none'; return; }
  fab.style.display = 'flex';
}

function switchTab(tab) {
  document.querySelectorAll('.tp').forEach(function(p) { p.classList.remove('on'); });
  document.querySelectorAll('.tbb').forEach(function(b) { b.classList.remove('on'); });
  document.getElementById(tab + 'Tab').classList.add('on');
  document.querySelector('.tbb[data-tab="' + tab + '"]').classList.add('on');
  curTab = tab;
  if (tab === 'home') renderHome();
  else if (tab === 'list') renderList();
  else renderSettings();
}

function bindEvents() {
  document.querySelectorAll('.tbb').forEach(function(b) {
    b.addEventListener('click', function() { switchTab(b.dataset.tab); });
  });

  document.querySelectorAll('.sb').forEach(function(b) {
    b.addEventListener('click', function() {
      document.querySelectorAll('.sb').forEach(function(x) { x.classList.remove('on'); });
      b.classList.add('on');
      curSeg = b.dataset.seg;
      renderList();
    });
  });

  document.getElementById('fab').addEventListener('click', function() {
    if (curTab === 'home') showAddTodaySheet();
    else if (curTab === 'list') showTmplEditor(null);
  });

  document.getElementById('mo').addEventListener('click', function(e) {
    if (e.target === document.getElementById('mo')) {
      closeSheet();
      _skipPop = true;
      history.back();
    }
  });

  document.getElementById('csbk').addEventListener('click', function() {
    closeCheckAndBack();
  });

  document.getElementById('csqck').addEventListener('click', function() {
    quickCheck();
  });

  document.getElementById('csrst').addEventListener('click', function() {
    if (!curInst) return;
    dlg('초기화', '모든 체크를 초기화할까요?', [
      {label: '취소', val: false, cls: 'bc'},
      {label: '초기화', val: true, cls: 'bk'}
    ]).then(function(ok) {
      if (ok) {
        curInst.items.forEach(function(i) { i.checked = false; });
        curInst.isCompleted = false;
        curInst.completedAt = null;
        dPut('instances', curInst).then(function() {
          drawCheck();
          toast('초기화됐습니다');
        });
      }
    });
  });

  window.addEventListener('popstate', function() {
    if (_skipPop) { _skipPop = false; return; }
    if (isDlgOpen()) { closeDlg(); return; }
    if (isSheetOpen()) { closeSheet(); return; }
    if (isCheckOpen()) { closeCheck(); return; }
    if (curTab !== 'home') { switchTab('home'); return; }
  });

  var tc = document.getElementById('tc');
  tc.addEventListener('touchstart', function(e) {
    swX = e.touches[0].clientX;
    swY = e.touches[0].clientY;
  }, {passive: true});

  tc.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - swX;
    var dy = e.changedTouches[0].clientY - swY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      var tabs = ['home', 'list', 'settings'];
      var idx = tabs.indexOf(curTab);
      if (dx < 0 && idx < 2) switchTab(tabs[idx + 1]);
      if (dx > 0 && idx > 0) switchTab(tabs[idx - 1]);
    }
  }, {passive: true});
}

function injectTabIcons() {
  document.querySelector('#tbHome .tbi').innerHTML = ICONS.home;
  document.querySelector('#tbList .tbi').innerHTML = ICONS.listCheck;
  document.querySelector('#tbSets .tbi').innerHTML = ICONS.gear;
  document.getElementById('csbk').innerHTML = ICONS.arrowLeft;
  document.querySelector('.fab').innerHTML = ICONS.plus;
  document.getElementById('csrst').innerHTML = ic('rotateLeft') + ' 초기화';
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(function() {});
  }
}

function boot() {
  registerSW();
  openDB().then(function() {
    return loadCfg();
  }).then(function() {
    return seedDefaults();
  }).then(function() {
    return cleanup();
  }).then(function() {
    injectTabIcons();
    bindEvents();
    history.replaceState({base: true}, '');
    renderHome();
  });
}

document.addEventListener('DOMContentLoaded', boot);
