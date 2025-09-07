// ==UserScript==
// @name         Custom UI by liliwi
// @namespace    http://tampermonkey.net/
// @version      1.31
// @description  just a ui
// @author       liliwi
// @discord      liliwi
// @match        https://gota.io/web/*
// @match        https://play.gota.io/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/liliwi/Gota.io-Custom-UI/main/Custom%20UI%20by%20liliwi-1.3.user.js
// @downloadURL  https://raw.githubusercontent.com/liliwi/Gota.io-Custom-UI/main/Custom%20UI%20by%20liliwi-1.3.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .main-panel,
        #main-right,
        #mainPanel,
        #leaderboard,
        #chat,
        #map,
        div#main-panel-wrapper {
            background: transparent !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            box-shadow: none !important;
             background: rgba(0, 0, 0, 0.3) !important;
        }

        div#party-panel.ui-pane.interface-color.hud-panel {
            padding-bottom: 10px; }

        .main-panel {
            height: auto !important;
            min-height: unset !important;
            padding-bottom: 15px !important;
            border: groove !important;
            border-color: grey !important;
        }

        div.options-container {
        background: transparent !important;
        height: 458px !important;
        }

        .main-bottom-stats,
        div.main-bottom-links,
        div.policyLinks.interface-color,
        div#main-rb.main-panel,
        #statsBox,
        thead,
        .main-bottom-left,
        .main-bottom-right,
        .main-bottom.interface-color,
        li#menu-block.contest-action,
        li#menu-block,
        li#server-tab-ap.server-tab{
            display: none !important;
        }

        .main-input-btns {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 8px !important;
        }

        #btn-play,
        .gota-menu-btn,
        button.gota-btn.bottom-btn {
            width: 270px !important;
            height: 35px !important;
            border-radius: 10px !important;
            background: rgba(20, 20, 20, 0.6) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            color: #fff !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            transition: background 0.2s ease !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 0 auto !important;
        }

        #btn-play:hover,
        .gota-btn:hover,
        button.gota-btn.bottom-btn:hover {
            background: rgba(40,40,40,0.7) !important;
        }

       .play-spec-wrapper #btn-play,
       .play-spec-wrapper #btn-spec {
       height: 50px !important;
       width: 130px !important;
       margin-top: 10px !important;

    }

        div#popup-profile.popup-panel { background: transparent !important; }
        button#profile-close-btn.gota-btn { background: transparent !important; }

        #account-actions .gota-btn {
            width: 50px !important;
            height: 30px;
            border-radius: 10px !important;
            background: rgba(20,20,20,0.6) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            color: #fff !important;
            font-size: 14px !important;
            transition: background 0.2s ease !important;
        }

        button#btn-updateSP.gota-btn {
            border: 1px solid rgba(255,255,255,0.08) !important;
            background: rgba(20,20,20,0.6) !important;
        }

        input[type="text"], input[type="password"], textarea, select {
            background: rgba(20,20,20,0.4) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            border-radius: 8px !important;
            color: #fff !important;
        }

        #main-right th {
            background: transparent !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            font-size: 12px !important;
        }

        #main-right td {
            padding: 6px !important;
        }

        #main-right tr:hover {
            background: rgba(255,255,255,0.08) !important;
        }

        li.server-active
            background: rgba(80,80,80,0.5) !important;
            font-weight: bold !important;
        }

        div#main-subpanel.main-right-panel {
        background: transparent !important;
        }

        tbody#servers-body-na {
        background: transparent !important;
        }
     div.server-container {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 8px !important;

      height: auto !important;
      min-height: 0 !important;
      margin: 0 auto !important;
      padding: 0 !important;
    }


     ul.context-list {
    background: rgba(22,22,22,0.8) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border-radius: 14px !important;
    border: 1px solid rgba(255,255,255,0.05) !important;
    box-shadow: none !important;

    /* hidden by default */
    pointer-events: none;
    transition: opacity 0.25s ease;
    }

    ul.context-list.active {
    /* visible when active */
    opacity: 1;
    pointer-events: auto;
    }
    .server-table tbody {
    overflow: unset !important;
    }

    li#server-tab-eu.server-tab,
    li#server-tab-na.server-tab {
    width: auto !important;
    min-width: 90px !important;
    padding: 6px 12px !important;
    margin: 0 4px !important;
    display: inline-block !important;
    text-align: center !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    transition: background 0.2s ease !important;
}

    li#server-tab-eu.server-tab:hover,
    li#server-tab-na.server-tab:hover {
    background: rgba(255,255,255,0.1) !important;
}

ul#server-tabs {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 4px !important;
    margin: 0 auto !important;
    width: fit-content !important;

}

        .x-show {
        margin-top: 100px !important;
        }

        div#main-right.main-divider.main-panel {
        height: 500px !important;

        border: groove !important;
        border-color: grey !important;
        }

        div#main-scrimmage.main-panel.interface-color {
        height: 470px !ortant;
        }


        div.main-mid.menu-sub-bg {
        background: transparent !important;
        }

        div.title-text.menu-title {
        background: transparent !important;
        }

        div#server-content {
        height: 429px !important;
        background: transparent !important;

        div#main.main {
        margin-top: 200px !important;
        }

        }
        tbody#servers-body-eu {
        background: transparent !important;
        }
        .context-list li {
            padding: 6px 10px !important;
            border-radius: 6px !important;
            transition: background 0.2s ease !important;
        }

        .context-list li:hover {
            background: rgba(255, 255, 255, 0.08) !important;
        }
.x-small-btn {
  width: auto !important;
  min-width: 65px !important;
  height: 22px !important;
  border-radius: 6px !important;
  font-size: 12px !important;
  padding: 0 6px !important;
  background: rgba(20,20,20,0.6) !important;
  border: 1px solid rgba(255,255,255,0.08) !important;
  color: #fff !important;
  cursor: pointer !important;
  transition: background 0.2s ease !important;
  flex: none !important;
}
.x-small-btn:hover {
  background: rgba(40,40,40,0.7) !important;
}
.x-small-del {
  background: rgba(120,0,0,0.6) !important;
}
.x-small-del:hover {
  background: rgba(160,0,0,0.7) !important;
}

        div#main-options.main-right-panel {
        background: transparent !important;
        }

        table.options-container {
        background: transparent !important;
        }
        #leaderboard {
            font-size: 13px !important;
            color: #fff !important;
        }

        table.chat-table {
            font-size: 13px !important;
            color: #fff !important;
            background: transparent !important;
        }

        #map { background: rgba(25,25,25,0.3) !important; }



  #minimap-canvas {
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    background: url("") no-repeat center center;
    background-size: cover;
  }




    `);
         let otherTabId = null;


    const extraBtns = ["#btn-servers", "#btn-options", "#btn-hotkeys", "#btn-themes", "#btn-cellpanel"];
    function moveButtons() {
        const container = document.querySelector(".main-input-btns");
        if (container) {
            extraBtns.forEach(sel => {
                const btn = document.querySelector(sel);
                if (btn) container.appendChild(btn);
            });
        }
    }
    moveButtons();
    setTimeout(moveButtons, 1000);

(function addCustomMenuOnce() {
    if (document.getElementById("x-custom-tab")) return;
    const sidebar = document.querySelector("div.main-left.main-divider");
    const main = document.querySelector("div.main-panel-wrapper");
    if (!sidebar || !main) return;

    if (!document.getElementById("x-fade-styles")) {
        const style = document.createElement("style");
        style.id = "x-fade-styles";
        style.textContent = `
          .x-fader { transition: opacity 300ms ease; }
          .x-show  { opacity: 1; pointer-events: auto; }
          .x-hide  { opacity: 0; pointer-events: none; }
          #x-custom-panel { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 9999; }
          #x-custom-card { background: rgba(20,20,20,0.3); color: #fff; border:groove; border-color: grey; margin-bottom: 136px; border-radius: 14px; padding: 20px; min-width: 300px; max-width: 90vw; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,.5); transition: transform 300ms ease, opacity 300ms ease; transform: translateY(10px); opacity: .9; }
          .x-show #x-custom-card { transform: translateY(0); opacity: 1; }
          #x-return-btn { margin-top: 14px; padding: 8px 14px; border: 0; border-radius: 8px; cursor: pointer; background: #444; color: #fff; display: block; margin: auto; }
          #x-hotkey-input { margin-top: 10px; padding: 6px; border-radius: 6px; border: none; text-align: center; font-size: 14px; margin-bottom: 20px; }
        `;
        document.head.appendChild(style);
    }

    main.classList.add("x-fader", "x-show");

    const tab = document.createElement("div");
    tab.id = "x-custom-tab";
    tab.textContent = "Custom Features";
    Object.assign(tab.style, {
        cursor: "pointer", textAlign: "center", padding: "10px",
        marginTop: "10px", border: "groove", borderColor: "grey",
        borderRadius: "6px", color: "white", userSelect: "none", background: "rgba(0, 0, 0, 0.3)"
    });
    sidebar.appendChild(tab);

    const panel = document.createElement("div");
    panel.id = "x-custom-panel";
    panel.className = "x-fader x-hide";

    const card = document.createElement("div");
    card.id = "x-custom-card";

    const hotkeyLabel = document.createElement("div");
    hotkeyLabel.textContent = "Chat Toggle Hotkey:";
    hotkeyLabel.style.marginBottom = "6px";

    const hotkeyInput = document.createElement("input");
    hotkeyInput.id = "x-hotkey-input";
    hotkeyInput.type = "text";
    hotkeyInput.placeholder = "Press a key";
    hotkeyInput.readOnly = true;
    hotkeyInput.value = "Y"; 

    card.appendChild(hotkeyLabel);
    card.appendChild(hotkeyInput);

    const returnBtn = document.createElement("button");
    returnBtn.id = "x-return-btn";
    returnBtn.textContent = "Return";
    card.appendChild(returnBtn);

    panel.appendChild(card);
    document.body.appendChild(panel);

    tab.addEventListener("click", () => {
        fadeOut(main);
        fadeIn(panel);
    });
    returnBtn.addEventListener("click", () => {
        fadeOut(panel);
        fadeIn(main);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && panel.classList.contains("x-show")) {
            e.stopPropagation();
            e.preventDefault();
            fadeOut(panel);
            fadeIn(main);
        }
    });

    let chatHotkey = "y";
    hotkeyInput.addEventListener("focus", () => {
        hotkeyInput.value = "Press any key...";
    });

    document.addEventListener("keydown", (e) => {
        if (hotkeyInput === document.activeElement) {
            e.preventDefault();
            hotkeyInput.value = e.key.toUpperCase();
            hotkeyInput.blur();
            chatHotkey = e.key.toLowerCase();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === chatHotkey && document.activeElement.tagName !== "INPUT") {
            const chatPanel = document.getElementById("chat-panel");
            if (chatPanel) {
                if (chatPanel.style.display === "none") {
                    chatPanel.style.setProperty("display", "block", "important");
                } else {
                    chatPanel.style.setProperty("display", "none", "important");
                }
            }
        }
    });

    function fadeIn(el) {
        el.classList.remove("x-hide");
        el.classList.add("x-show");
    }
    function fadeOut(el) {
        el.classList.remove("x-show");
        el.classList.add("x-hide");
    }
})();

(function addCopyFeature() {

(function savedPlayersModule(){
  'use strict';

  const LS_KEY = 'savedPlayers';
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  const waitFor = (selector, cb, timeout=15000, poll=100) => {
    const start = Date.now();
    const it = setInterval(() => {
      const el = $(selector);
      if (el) { clearInterval(it); cb(el); }
      else if (Date.now() - start > timeout) { clearInterval(it); }
    }, poll);
  };

  const loadSaved = () => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
    catch { return []; }
  };
  const saveSaved = (list) => localStorage.setItem(LS_KEY, JSON.stringify(list));

  function parseTitleText(txt) {
    if (!txt) return { name: '[unknown]', skin: 'none' };
    txt = txt.trim();

      let m = txt.match(/^\s*\[([^\]]+)\]\s*(.+)$/);
    if (m) return { skin: m[1].trim(), name: m[2].trim() };

    m = txt.match(/^(.*?)\s*\[([^\]]+)\]\s*$/);
    if (m) return { name: m[1].trim(), skin: m[2].trim() };

    return { name: txt, skin: 'none' };
  }

  function ensureSavedListUI(card) {
    if ($('#x-saved-wrap', card)) return;
    const wrap = document.createElement('div');
    wrap.id = 'x-saved-wrap';
    wrap.innerHTML = `
      <h3>Saved Players</h3>
      <ul id="x-saved-list" class="context-list"></ul>
      <div id="x-saved-empty" style="display:none;">No players saved yet.</div>
    `;
    card.appendChild(wrap);


    if (!$('#x-saved-style')) {
      const style = document.createElement('style');
      style.id = 'x-saved-style';
      style.textContent = `
        #x-saved-list li { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        #x-saved-list .meta { display: flex; align-items: baseline; gap: 8px; }
        #x-saved-list .actions { display: flex; gap: 6px; }
        #x-saved-list button { border: 0; border-radius: 6px; padding: 3px 8px; cursor: pointer; font-size: 12px; }
        #x-saved-list .use { background: #333; color: #fff; }
        #x-saved-list .del { background: #600; color: #fff; }
      `;
      document.head.appendChild(style);
    }
  }



function getNameInput() {
  return document.querySelector('input#name-box.gota-input')
      || document.querySelector('input#nick')
      || document.querySelector('input[name="nick"]')
      || document.querySelector('input[placeholder*="name" i]');
}

function getSkinInput() {
  return document.querySelector('input#skinUrl.gota-input')
      || document.querySelector('input#skinurl')
      || document.querySelector('input[name="skinUrl"]')
      || document.querySelector('input[placeholder*="skin" i]');
}

function setInputValue(el, value) {
  if (!el) return;

  const desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  if (desc && desc.set) desc.set.call(el, value);
  else el.value = value;
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
}



function renderSaved(card) {

  const old = card.querySelector("#saved-players-wrapper");
  if (old) old.remove();

  const wrapper = document.createElement("div");
  wrapper.id = "saved-players-wrapper";
  wrapper.style.marginTop = "20px";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "6px";
  card.appendChild(wrapper);

  const header = document.createElement("div");
  header.style.display = "grid";
  header.style.gridTemplateColumns = "1fr 1fr auto";
  header.style.fontWeight = "600";
  header.style.marginBottom = "8px";
  header.innerHTML = `
    <div style="text-align:center;">Saved Name</div>
    <div style="text-align:center;">Saved Skin</div>
    <div style="text-align:center;">Actions</div>`;
  wrapper.appendChild(header);

  let saved = loadSaved();
  if (!saved.length) {
    const empty = document.createElement("div");
    empty.textContent = "No players saved yet.";
    empty.style.color = "#aaa";
    empty.style.textAlign = "center";
    wrapper.appendChild(empty);
    return;
  }

  saved.forEach((p, i) => {
    const row = document.createElement("div");
    row.style.display = "grid";
    row.style.gridTemplateColumns = "1fr 1fr auto";
    row.style.alignItems = "center";
    row.style.padding = "6px 10px";
    row.style.borderRadius = "8px";
    row.style.background = "rgba(255,255,255,0.05)";
    row.style.gap = "10px";


    const nameCell = document.createElement("div");
    nameCell.textContent = p.name || "[unknown]";


    const skinCell = document.createElement("div");
    skinCell.textContent = p.skin || "[none]";


    const actions = document.createElement("div");
    actions.style.display = "flex";
    actions.style.gap = "6px";
    actions.style.flexWrap = "wrap";

    const useNameBtn = document.createElement("button");
    useNameBtn.textContent = "Use Name";
    useNameBtn.className = "x-small-btn";
    useNameBtn.onclick = () => {
      const el = getNameInput();
      setInputValue(el, p.name || "");
    };


    const useSkinBtn = document.createElement("button");
    useSkinBtn.textContent = "Use Skin";
    useSkinBtn.className = "x-small-btn";
    useSkinBtn.onclick = () => {
      const el = getNameInput();
      if (!el) return;
      const currentName = el.value.replace(/\[.*\]$/, "");
      const skinVal = (p.skin && p.skin !== "none")
        ? `[${p.skin.replace(/^\[|\]$/g, "")}]`
        : "";
      setInputValue(el, currentName + skinVal);
    };


    const useBothBtn = document.createElement("button");
    useBothBtn.textContent = "Use Both";
    useBothBtn.className = "x-small-btn";
    useBothBtn.onclick = () => {
      const el = getNameInput();
      if (!el) return;
      const skinVal = (p.skin && p.skin !== "none")
        ? `[${p.skin.replace(/^\[|\]$/g, "")}]`
        : "";
      setInputValue(el, (p.name || "") + skinVal);
    };


    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "x-small-btn x-small-del";
    delBtn.onclick = () => {
      const arr = loadSaved();
      arr.splice(i, 1);
      saveSaved(arr);
      renderSaved(card);
    };

    actions.appendChild(useNameBtn);
    actions.appendChild(useSkinBtn);
    actions.appendChild(useBothBtn);
    actions.appendChild(delBtn);

    row.appendChild(nameCell);
    row.appendChild(skinCell);
    row.appendChild(actions);
    wrapper.appendChild(row);
  });
}


  function attachCopyLi(contextUl, card) {
    if (!contextUl || $('#x-copy-player-li', contextUl)) return;
    const copyLi = document.createElement('li');
    copyLi.id = 'x-copy-player-li';
    copyLi.textContent = 'Copy';
    copyLi.style.cursor = 'pointer';
  on(copyLi, 'click', () => {
  const nameEl = document.querySelector("li#context-name");
  let raw = "";

  if (nameEl) {
    raw = (nameEl.textContent || "").trim();
  }

  const { name, skin } = parseTitleText(raw);

  const list = loadSaved();
  list.push({ name, skin });
  saveSaved(list);
  renderSaved(card);
});



    contextUl.appendChild(copyLi);
  }

  function watchContextMenu(card) {
    waitFor('#context-menu', (menu) => {
      const tryAttach = () => {
        const ul = $('ul.context-list', menu) || $('ul', menu);
        if (ul) attachCopyLi(ul, card);
      };
      tryAttach();
      const mo = new MutationObserver(tryAttach);
      mo.observe(menu, { childList: true, subtree: true });
    });
  }

  function boot() {
    waitFor('#x-custom-card', (card) => {
      on($('#x-custom-tab'), 'click', () => renderSaved(card));
      renderSaved(card);
      watchContextMenu(card);
    });
  }

  boot();
})();

(function() {
    'use strict';

    function modifyDonutButton() {
        const cellPanelBtn = document.querySelector('#btn-cellpanel');
        if (!cellPanelBtn) return;

        const donutBtn = document.querySelector('.donut-features-btn');
        if (!donutBtn) return;

        donutBtn.style.opacity = "1";
        donutBtn.style.pointerEvents = "auto";
        donutBtn.style.background = "#222";
        donutBtn.style.color = "#fff";
        donutBtn.style.width = "270px";
        donutBtn.style.height = "35px";
        donutBtn.style.borderRadius = "10px";
        donutBtn.style.marginTop = "8px";
        donutBtn.style.display = "flex";
        donutBtn.style.justifyContent = "center";
        donutBtn.style.alignItems = "center";
        donutBtn.style.cursor = "pointer";
        donutBtn.style.fontWeight = "bold";
        donutBtn.style.position = "static";

        if (cellPanelBtn.nextElementSibling !== donutBtn) {
            cellPanelBtn.parentNode.insertBefore(donutBtn, cellPanelBtn.nextSibling);
        }

        donutBtn.addEventListener('click', () => {
            const menu = document.querySelector('.donut-features-table');
            if (!menu) {
                console.warn("⚠️ Donut menu not found in DOM yet");
                return;
            }
            menu.style.display = (menu.style.display === "none" || !menu.style.display)
                ? "block"
                : "none";
        });

        console.log("✅ Donut button forced under Cell Panel");
    }

    const observer = new MutationObserver(() => {
        modifyDonutButton();
    });

    const menu = document.querySelector('#btn-cellpanel')?.parentNode;
    if (menu) {
        observer.observe(menu, { childList: true, subtree: false });
    }

   
    const interval = setInterval(() => {
        modifyDonutButton();
        if (document.querySelector('.donut-features-btn')) {
            clearInterval(interval);
        }
    }, 300);
})();



(function() {
    'use strict';

    function arrangePlaySpec() {
        const playBtn = document.querySelector('#btn-play');
        const specBtn = document.querySelector('#btn-spec');

        if (playBtn && specBtn && !document.querySelector('.play-spec-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'play-spec-wrapper';
            wrapper.style.display = 'flex';
            wrapper.style.justifyContent = 'center';
            wrapper.style.gap = '10px';
            wrapper.style.marginBottom = '10px';

            wrapper.appendChild(playBtn);
            wrapper.appendChild(specBtn);

            const parent = document.querySelector('.main-input-btns');
            if (parent) parent.insertBefore(wrapper, parent.firstChild);
        }
    }

    setTimeout(arrangePlaySpec, 1000);

 let otherTabId = null;

(function () {
    'use strict';

    const channel = new BroadcastChannel("gota_multi");
    let myId = null;


    const feeders = {};

function getCurrentPlayerId() {
    const el = document.querySelector("#pId span");
    return el?.innerText?.trim() || null;
}


    function updateMyId() {
        const newId = getCurrentPlayerId();
        if (!newId || newId === "0") return; // ignore invalid

        if (myId !== newId) {
            if (myId) {
                delete feeders[myId];
                channel.postMessage({ action: "deregisterFeeder", feederId: myId });
            }
            myId = newId;
            feeders[myId] = Date.now();
            console.log(`🔄 Updated myId: ${myId}`);
            channel.postMessage({ action: "registerFeeder", feederId: myId });
        }
    }

    setInterval(updateMyId, 1000);

    channel.onmessage = (e) => {
        const data = e.data;
        if (!data) return;

        switch (data.action) {
            case "registerFeeder":
            case "feederPing":
                feeders[data.feederId] = Date.now();
                updateOtherTabId();
                break;
            case "deregisterFeeder":
                delete feeders[data.feederId];
                updateOtherTabId();
                break;
            case "autoAccept":
                scheduleAcceptScan();
                break;
        }
    };

    function updateOtherTabId() {
        const now = Date.now();
        const validIds = Object.entries(feeders)
            .filter(([id, ts]) => id !== myId && id !== "0" && (now - ts < 5000))
            .map(([id]) => id);

        otherTabId = validIds.length ? validIds[0] : null;
        if (otherTabId) console.log(`📡 Detected other tab: ${otherTabId}`);
    }


    setInterval(() => {
        if (myId && myId !== "0") {
            channel.postMessage({ action: "feederPing", feederId: myId });
        }
    }, 3000);


    function setNativeValue(el, value) {
        const valueSetter = Object.getOwnPropertyDescriptor(el.__proto__, "value")?.set;
        const prototype = Object.getPrototypeOf(el);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(el, value);
        } else {
            valueSetter.call(el, value);
        }
    }

    function pressEnter(el) {
        ["keydown", "keypress", "keyup"].forEach(type => {
            el.dispatchEvent(new KeyboardEvent(type, {
                bubbles: true,
                cancelable: true,
                key: "Enter",
                code: "Enter",
                keyCode: 13,
                which: 13
            }));
        });
    }

    function findAcceptButton() {
        const candidates = [
            ...document.querySelectorAll('button, [role="button"], .gota-btn, .btn-accept, #btn-accept')
        ];
        const lowerIncludes = (s, sub) => (s || "").toLowerCase().includes(sub);

        let btn = candidates.find(b =>
            lowerIncludes(b.id, "accept") || lowerIncludes(b.className, "accept")
        );
        if (btn) return btn;

        btn = [...document.querySelectorAll('*')].find(el => {
            const text = (el.textContent || "").trim().toLowerCase();
            if (!text) return false;
            const clickable = (el.tagName === "BUTTON") ||
                              el.getAttribute("role") === "button" ||
                              el.classList.contains("gota-btn") ||
                              el.onclick || el.dataset?.onClick;
            return clickable && (text.includes("accept") || text.includes("join"));
        });
        return btn || null;
    }

    function scheduleAcceptScan() {
        let tries = 0;
        const maxTries = 40;
        const timer = setInterval(() => {
            const btn = findAcceptButton();
            if (btn) {
                btn.click();
                console.log("✅ Accepted invite automatically");
                clearInterval(timer);
            } else if (++tries >= maxTries) {
                console.log("❌ No accept button detected within timeout.");
                clearInterval(timer);
            }
        }, 150);
    }

    function sendInviteAndAccept(id) {
        const chat = document.querySelector("input#chat-input");
        if (!chat) return console.log("⚠️ Chat input not found");

   
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", code: "Escape", bubbles: true }));
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", code: "Escape", bubbles: true }));

        setTimeout(() => {
            chat.focus();

            setNativeValue(chat, `/invite ${id}`);
            chat.dispatchEvent(new Event("input", { bubbles: true }));
            pressEnter(chat);

            console.log(`📨 Invite sent for ${id}`);

            scheduleAcceptScan();

            setTimeout(() => {
                channel.postMessage({ action: "autoAccept" });
            }, 200);

        }, 50);
    }

    document.addEventListener("keydown", (e) => {
        if (e.code === "KeyJ") {
            if (!otherTabId) return console.log("⚠️ No other tab detected yet!");
            sendInviteAndAccept(otherTabId);
        }
        if (e.code === "KeyK") {
            scheduleAcceptScan();
        }
    });

})();
   function findPanel() {
        return document.querySelector("#party-panel");
    }

    function styleButton(btn) {
        Object.assign(btn.style, {
            backgroundColor: "transparent",
            color: "#fff",
            border: "groove",
            borderColor: "grey",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            cursor: "pointer",
            margin: "auto",
        
            width: "150px",
            display: "block",
            transition: "0.2s",
            userSelect: "none",
            zIndex: 2147483647,
            position: "relative",
            pointerEvents: "auto"

        });

        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#666";
            btn.style.transform = "scale(1.05)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "transparent";
            btn.style.transform = "scale(1)";
        });
    }

    function createLeaveButton(panel) {
        let btn = panel.querySelector("#leaveBtn");
        if (!btn) {
            btn = document.createElement("button");
            btn.id = "leaveBtn";
            btn.textContent = "Leave";
            panel.appendChild(btn);
        }

        if (!btn.dataset.wired) {
            styleButton(btn);

            btn.addEventListener("click", () => {
                sendLeaveCommand();
            });

            btn.dataset.wired = "1";
        }
    }

    function sendLeaveCommand() {
        const chatBar = document.querySelector("#chat-input");
        if (!chatBar) return alert("Chat input not found!");

        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
        setter.call(chatBar, "/l");

        chatBar.dispatchEvent(new Event("input", { bubbles: true }));

        const form = chatBar.closest("form");
        if (form) {
            form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
            return;
        }

        ["keydown", "keypress", "keyup"].forEach(type => {
            chatBar.dispatchEvent(new KeyboardEvent(type, {
                key: "Enter",
                code: "Enter",
                keyCode: 13,
                which: 13,
                bubbles: true
            }));
        });

        chatBar.value = "";
    }

    let lastPanel = null;
    function ensureButton() {
        const panel = findPanel();
        if (!panel) return;

        if (panel !== lastPanel || !panel.querySelector("#leaveBtn")) {
            createLeaveButton(panel);
            lastPanel = panel;
        }
    }

    setInterval(ensureButton, 1000);

})();


const contextList = document.querySelector(".context-list");


contextList.classList.add("active");

contextList.classList.remove("active");


if (!localStorage.getItem("changelogShown")) {

    const overlay = document.createElement("div");
    overlay.id = "changelogOverlay";
    document.body.appendChild(overlay);

    const modal = document.createElement("div");
    modal.id = "changelogModal";

    const html = `
        <h2>📝 Changelog</h2>
        <ul>
            <li>Fixed auto-invite bug</li>
            <li>Added Chat disable hotkey</li>
            <li>Added auto update</li>
        </ul>
        <button id="closeChangelog">Close</button>
    `;
    modal.innerHTML = html;
    document.body.appendChild(modal);

    const style = document.createElement("style");
    style.textContent = `
        #changelogOverlay {
            display: block;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9998;
        }
        #changelogModal {
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(22,22,22,0.95);
            color: white;
            padding: 20px 30px;
            border-radius: 12px;
            border: 2px solid #fff;
            max-width: 400px;
            z-index: 9999;
            box-shadow: 0 0 20px rgba(0,0,0,0.7);
            text-align: center;
            font-family: sans-serif;
            animation: fadeIn 0.3s ease;
        }
        #changelogModal h2 { margin-top: 0; margin-bottom: 10px; }
        #changelogModal ul { text-align: left; padding-left: 20px; }
        #changelogModal button {
            margin-top: 15px;
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            background: #00bfff;
            color: black;
            cursor: pointer;
            font-weight: bold;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -48%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    `;
    document.head.appendChild(style);

    document.getElementById("closeChangelog").addEventListener("click", () => {
        modal.remove();
        overlay.remove();
    });

    localStorage.setItem("changelogShown", "false");
}




})();

})();


