// ==UserScript==
// @name         Custom UI by liliwi
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  just a ui
// @author       liliwi
// @discord      liliwi
// @match        https://gota.io/camlan/*
// @match        https://gota.io/web/*
// @match        https://play.gota.io/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL    https://raw.githubusercontent.com/liliwi/Gota.io-Custom-UI/main/Custom%20UI%20by%20liliwi.user.js
// @downloadURL  https://raw.githubusercontent.com/liliwi/Gota.io-Custom-UI/main/Custom%20UI%20by%20liliwi.user.js
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
    background: rgba(20, 20, 20, 0.95) !important;
    border: 2px solid rgba(255,255,255,0.1) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important;

}
       div#party-panel.ui-pane.interface-color.hud-panel {
    background: rgba(20, 20, 20, 0.95) !important;
    border: 2px solid rgba(255,255,255,0.1) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important;
     padding-bottom: 10px;
}
#name-box {
background: rgba(30,30,30) !important;
color: white !important;
border-radius: 10px !important;
}

        .main-panel {
            height: auto !important;
            min-height: unset !important;
            padding-bottom: 15px !important;
        }
        div.options-container {
            background: transparent !important;
            height: 458px !important;
        }



#chat-panel, #leaderboard-panel {
    background: rgba(20, 20, 20, 0.95) !important;
    border: 2px solid rgba(255,255,255,0.1) !important;
}

#minimap-panel {
    background: rgba(20, 20, 20, 0.95) !important;
    border: 2px solid rgba(255,255,255,0.1) !important;
}


name-box.gota.input {
    background: rgba(30, 30, 30, 0.8) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;

}
.gota-btn, button.gota-btn.bottom-btn, .gota-menu-btn {
    background: rgba(20, 20, 20, 0.6) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    color: #fff !important;
   border-radius: 10px !important;
}

div#social-friends.menu-sub-bg  {
background:rgba(20,20,20) }

.gota-btn:hover, button.gota-btn.bottom-btn:hover, .gota-menu-btn:hover {
    background: rgba(50, 50, 50, 0.7) !important;
}

#main-right th {
    background: rgba(20, 20, 20) !important;
    color: #fff !important;
}

#main-right tr:hover {
    background: rgba(255,255,255,0.08) !important;
}

server-body-na {
background:rgba(20,20,20) !important;
}

li#server-tab-eu.server-tab,
li#server-tab-na.server-tab {
    background: rgba(40, 40, 40, 0.6) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    color: #aaa !important;
}

li.server-active {
    background: rgba(80,80,255,0.3) !important;
    border-color: rgba(80,80,255,0.5) !important;
    color: #fff !important;
}


li#server-tab-eu.server-tab:hover,
li#server-tab-na.server-tab:hover {
    background: rgba(50, 50, 50, 0.7) !important;
    color: #fff !important;
    }
        
        div.policyLinks.interface-color,
        div#main-rb.main-panel,
        .main-bottom-right,
        .main-bottom.interface-color,
        li#menu-block.contest-action,
        li#menu-block,
        li#server-tab-ap.server-tab {
            display: none !important;
        }

        .main-input-btns {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 8px !important;
        }
   
        .play-spec-wrapper #btn-play,
        .play-spec-wrapper #btn-spec {
            height: 50px !important;
            width: 130px !important;
            margin-top: 10px !important;
        }

        div#popup-profile.popup-panel { background: rgba(20,20,20) !important; }
        button#profile-close-btn.gota-btn { background: rgba(20,20,20) !important; }

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

        div.main-bottom-links {
        padding-top: 178px !important }


        input[data-coloris] {
        background: transparent !important;
        }



        #main-right td {
            padding: 5px !important;
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
            pointer-events: none;
            transition: opacity 0.25s ease;
        }

        ul.context-list.active {
            opacity: 1;
            pointer-events: auto;
        }

        .server-table tbody {
            overflow: unset !important;
            background:rgba(20,20,20) !important;
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

     div#main-right.main-divider.main-panel,
div#main-scrimmage.main-panel.interface-color {
height: 500px !important;
    background: rgba(20, 20, 20, 0.95) !important;
    border: 2px solid rgba(255,255,255,0.1) !important;
}


        div#main-scrimmage.main-panel.interface-color {
            height: 470px !important;
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

        * {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
        }
        #unified-settings-btn {
            width: 270px !important; height: 35px !important;
            border-radius: 10px !important;
            background: rgba(20,20,20,0.6) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            color: #fff !important; font-size: 14px !important; font-weight: 500 !important;
            display: flex !important; justify-content: center !important; align-items: center !important;
            margin: 0 auto !important; cursor: pointer !important; transition: all 0.3s ease !important;
        }
        #unified-settings-btn:hover { background: rgba(40,40,40,0.7) !important; transform: scale(1.02) !important; }

     .main-panel-wrapper {
    margin-top: 100px;
}

        .settings-header {
            padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.1);
            display: flex; justify-content: space-between; align-items: center; background: rgba(30,30,30,0.5);
        }
        .settings-header h2 { margin:0; font-size:24px; color:#fff; font-weight:600; }
        .settings-close-btn {
            background: rgba(220,38,38,0.3); border: 1px solid rgba(220,38,38,0.5);
            color:#fff; width:32px; height:32px; border-radius:8px; cursor:pointer;
            display:flex; justify-content:center; align-items:center; font-size:20px; transition: all 0.2s ease;
        }
        .settings-close-btn:hover { background: rgba(220,38,38,0.5); transform: scale(1.1); }
        .settings-tabs {
            display:flex;
            gap:8px;
            padding:15px 25px;
            background: rgba(15,15,15,0.5);
            border-bottom:1px solid rgba(255,255,255,0.1);
            overflow-x:auto;
            justify-content: center !important;
            align-items: center;
        }
        .settings-tab {
            padding:10px 20px; background: rgba(40,40,40,0.6); border: 1px solid rgba(255,255,255,0.08);
            border-radius:8px; color:#aaa; cursor:pointer; transition: all 0.2s ease;
            white-space: nowrap; font-size:14px; font-weight:500;
        }
        .settings-tab:hover { background: rgba(50,50,50,0.7); color:#fff; }
        .settings-tab.active { background: rgba(80,80,255,0.3); border-color: rgba(80,80,255,0.5); color:#fff; }
        .settings-content { padding:25px; max-height: calc(85vh - 160px); overflow-y:auto; }
        .settings-content::-webkit-scrollbar { width: 8px; }
        .settings-content::-webkit-scrollbar-track { background: rgba(40,40,40,0.3); border-radius: 4px; }
        .settings-content::-webkit-scrollbar-thumb { background: rgba(80,80,80,0.6); border-radius: 4px; }
        .tab-content { display:none; }
        .tab-content.active { display:block; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from {opacity:0;transform:translateY(10px);} to {opacity:1;transform:translateY(0);} }

        .setting-group {
            background: rgba(30,30,30,0.5); border:1px solid rgba(255,255,255,0.1);
            border-radius:12px; padding:20px; margin-bottom:20px;
        }
        .setting-group h3 { margin:0 0 15px 0; color:#fff; font-size:18px; font-weight:600; }
        .setting-row {
            display: flex; justify-content: space-between; align-items: center;
            padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .setting-row:last-child { border-bottom: none; }
        .setting-label { color: #ccc; font-size: 14px; }
        .setting-control input[type="checkbox"] {
            width: 20px; height: 20px; cursor: pointer;
            accent-color: rgb(80,80,255);
        }
        .setting-control select, .setting-control input[type="text"] {
            background: rgba(40,40,40,0.8); border: 1px solid rgba(255,255,255,0.1);
            color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 14px;
        }
        .setting-control input[type="range"] {
            width: 150px; accent-color: rgb(80,80,255);
        }
        .range-value {
            display: inline-block;


            min-width: 50px;
            margin-left: 10px;
            color: #fff;
            font-weight: 600;
            font-size: 14px;
            background: rgba(40,40,40,0.8);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 4px 8px;
            border-radius: 4px;
            cursor: text;
        }
        .range-value:hover {
            border-color: rgba(255,255,255,0.3);
        }

.setting-control input[data-coloris] {
    width: 80px !important;
    height: 40px !important;
    border-radius: 8px !important;
    border: 2px solid rgba(255,255,255,0.2) !important;
    cursor: pointer !important;
    padding: 5px !important;
    font-size: 11px !important;
    text-align: center !important;
    color: #fff !important;
    text-shadow: 0 0 3px #000, 0 0 3px #000 !important;
    font-weight: 600 !important;
}
.setting-control input[data-coloris]:focus {
    box-shadow: 0 0 0 2px rgba(80,80,255,0.5) !important;
}

        .setting-control input[data-coloris]:focus {
            box-shadow: 0 0 0 2px rgba(80,80,255,0.5);
        }
        .setting-control input[data-coloris]::-webkit-color-swatch {
            border: none;
            border-radius: 8px;
        }
        .setting-control input[data-coloris]::-moz-focus-inner {
            border: none;
            padding: 0;
        }
        .keybind-btn {
            background: rgba(60,60,60,0.8); border: 1px solid rgba(255,255,255,0.2);
            color: #fff; padding: 8px 16px; border-radius: 6px; cursor: pointer;
            min-width: 80px; text-align: center; transition: all 0.2s;
        }
        .keybind-btn:hover { background: rgba(80,80,80,0.9); }
        .keybind-btn.listening { background: rgba(80,80,255,0.5); border-color: rgba(80,80,255,0.8); }

        #main-servers { display: block !important; visibility: visible !important; }

body > #clr-picker {
    z-index: 10001 !important;
}

#btn-servers.gota-btn.bottom-btn,
#btn-options.gota-btn.bottom-btn,
#btn-hotkeys.gota-btn.bottom-btn,
#btn-themes.gota-btn.bottom-btn,
#btn-cellpanel.gota-btn.bottom-btn {
    display: none !important;
}

#unified-settings-overlay.show ~ #clr-picker .clr-gradient,
#unified-settings-overlay.show ~ #clr-picker .clr-hue,
#unified-settings-overlay.show ~ #clr-picker .clr-alpha,
#unified-settings-overlay.show ~ #clr-picker .clr-color,
#unified-settings-overlay.show ~ #clr-picker .clr-marker,
#unified-settings-overlay.show ~ #clr-picker .clr-format,
#unified-settings-overlay.show ~ #clr-picker .clr-swatches {
    display: block !important;
}

#unified-settings-overlay {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: rgba(0,0,0,0) !important;
    backdrop-filter: blur(0px) !important;
    z-index: 10000 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    opacity: 0 !important;
    pointer-events: none !important;
    transition: all 0.4s ease !important;
}
#unified-settings-overlay.show {
    opacity: 1 !important;
    background: rgba(0,0,0,0.7) !important;
    backdrop-filter: blur(5px) !important;
    pointer-events: auto !important;
}
#unified-settings-panel {
    background: rgba(20,20,20,0.95) !important;
    border: 2px solid rgba(255,255,255,0.1) !important;
    border-radius: 16px !important;
    width: 90% !important;
    max-width: 900px !important;
    max-height: 85vh !important;
    overflow: hidden !important;
    opacity: 0 !important;
    transform: scale(0.8) translateY(30px) !important;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important;
}
#unified-settings-overlay.show #unified-settings-panel {
    opacity: 1 !important;
    transform: scale(1) translateY(0) !important;
}


    `);
})();
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

(function() {
    'use strict';

    const channel = new BroadcastChannel("gota_multi");
    let myId = null;
    let otherTabId = null;

    const feeders = {};

    function getCurrentPlayerId() {
        const el = document.querySelector("#pId span");
        return el?.innerText?.trim() || null;
    }

    function updateMyId() {
        const newId = getCurrentPlayerId();
        if (!newId || newId === "0") return;

        if (myId !== newId) {
            if (myId) {
                delete feeders[myId];
                channel.postMessage({ action: "deregisterFeeder", feederId: myId });
            }
            myId = newId;
            feeders[myId] = Date.now();
            console.log(`📄 Updated myId: ${myId}`);
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
        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

        if (e.key.toLowerCase() === (window.__TAB_INVITE_HOTKEY || 'j')) {
            if (!otherTabId) return console.log("⚠️ No other tab detected yet!");
            sendInviteAndAccept(otherTabId);
        }
    });

    window.__TAB_INVITE_HOTKEY = localStorage.getItem("tabInviteHotkey") || "j";
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
})();

const CONFIG = {
    tabs: [
        { id: 'options', label: '⚙️ Options' },
        { id: 'hotkeys', label: '⌨️ Hotkeys' },
        { id: 'themes', label: '🎨 Themes' },
        { id: 'cellpanel', label: '📊 Cell Panel' },
        { id: 'customfeatures', label: '✨ Custom Features' }
    ],
    hiddenButtons: ['#btn-options', '#btn-hotkeys', '#btn-themes', '#btn-cellpanel']
};

const state = { isOpen: false, initialized: false, listeningForKey: false };

function saveColorSettings() {
    const colors = {};
    document.querySelectorAll('#unified-settings-panel input[type="color"], #unified-settings-panel input[data-coloris]').forEach(inp => {
        if (inp.id) {
            colors[inp.id] = inp.value;
            console.log(`💾 Saving color for ${inp.id}: ${inp.value}`);
        }
    });
    try {
        GM_setValue('savedColors', JSON.stringify(colors));
        console.log('✅ Colors saved to GM storage');
    } catch(e) {
        localStorage.setItem('savedColors', JSON.stringify(colors));
        console.log('✅ Colors saved to localStorage');
    }
}

function loadSavedColors() {
    let saved = null;
    try { saved = GM_getValue('savedColors', null); } catch(e) { saved = localStorage.getItem('savedColors'); }
    if (!saved) {
        console.log('⚠️ No saved colors found');
        return;
    }
    try {
        const colors = JSON.parse(saved);
        console.log('📂 Loading saved colors:', colors);
        setTimeout(() => {
            Object.keys(colors).forEach(id => {
                const input = document.querySelector(`#unified-settings-panel #${CSS.escape(id)}`);
                if (input) {
                    input.value = colors[id];
                    input.setAttribute('style', `background-color: ${colors[id]} !important`);

                    const gameInput = findGameElement(id);
                    if (gameInput) {
                        gameInput.value = colors[id];
                        gameInput.setAttribute('style', `background-color: ${colors[id]} !important`);
                        gameInput.dispatchEvent(new Event('input', { bubbles: true }));
                        gameInput.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                    console.log(`✅ Loaded color for ${id}: ${colors[id]}`);
                }
            });
        }, 600);
    } catch (e) {
        console.error('❌ Error loading colors:', e);
    }
}

function hideButtons() {
    CONFIG.hiddenButtons.forEach(sel => {
        try {
            const btn = document.querySelector(sel);
            if (btn) btn.style.display = 'none';
        } catch (e) {}
    });
}

function createButton() {
    const container = document.querySelector('.main-input-btns');
    if (!container || document.getElementById('unified-settings-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'unified-settings-btn';
    btn.innerHTML = '⚙️ Settings';
    btn.onclick = open;
    container.appendChild(btn);
}

function createPanel() {
    if (document.getElementById('unified-settings-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'unified-settings-overlay';

    const panel = document.createElement('div');
    panel.id = 'unified-settings-panel';

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isOpen && !state.listeningForKey) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            close();
            return false;
        }
    }, true);

    panel.innerHTML = `
        <div class="settings-header">
            <h2>⚙️ Settings</h2>
            <button class="settings-close-btn" id="close-settings-btn">×</button>
        </div>
        <div class="settings-tabs">
            ${CONFIG.tabs.map((tab,i) => `<div class="settings-tab ${i===0?'active':''}" data-tab="${tab.id}">${tab.label}</div>`).join('')}
        </div>
        <div class="settings-content">
            <div class="tab-content active" id="tab-options">${getOptionsHTML()}</div>
            <div class="tab-content" id="tab-hotkeys">${getHotkeysHTML()}</div>
            <div class="tab-content" id="tab-themes">${getThemesHTML()}</div>
            <div class="tab-content" id="tab-cellpanel">${getCellPanelHTML()}</div>
            <div class="tab-content" id="tab-customfeatures">${getCustomFeaturesHTML()}</div>
        </div>
    `;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isOpen && !state.listeningForKey) {
            close();
        }
    });
    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    try {
        panel.querySelector('#close-settings-btn').onclick = close;
    } catch(e){}

    panel.querySelectorAll('.settings-tab').forEach(tab => {
        tab.onclick = () => {
            panel.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panel.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            const id = '#tab-'+tab.dataset.tab;
            const node = panel.querySelector(id);
            if (node) node.classList.add('active');

            if (tab.dataset.tab === 'customfeatures') {
                renderSavedPlayers();
            }
        };
    });

    setupRangeListeners();
    setupKeybindListeners();
    setupColorPickers();
    setupFontSelector();
    setupSavedPlayersFeature();
    setupUpdateButton();
}


function setupUpdateButton() {
    const checkButton = setInterval(() => {
        const customBtn = document.getElementById('btn-updateSP-custom');
        if (customBtn) {
            clearInterval(checkButton);

            customBtn.addEventListener('click', () => {
                const gameBtn = document.getElementById('btn-updateSP');
                if (gameBtn) {
                    console.log('🔄 Triggering game update button...');
                    gameBtn.click();

                    customBtn.textContent = '✓ Updated!';
                    customBtn.style.background = 'rgba(0, 255, 0, 0.3)';
                    customBtn.style.borderColor = 'rgba(0, 255, 0, 0.5)';

                    setTimeout(() => {
                        customBtn.textContent = 'Update Cell Settings';
                        customBtn.style.background = 'rgba(80,80,255,0.3)';
                        customBtn.style.borderColor = 'rgba(80,80,255,0.5)';
                    }, 2000);
                } else {
                    console.warn('⚠️ Game update button not found!');
                    customBtn.textContent = '❌ Not Found';
                    customBtn.style.background = 'rgba(255, 0, 0, 0.3)';

                    setTimeout(() => {
                        customBtn.textContent = 'Update Cell Settings';
                        customBtn.style.background = 'rgba(80,80,255,0.3)';
                    }, 2000);
                }
            });

            customBtn.addEventListener('mouseenter', () => {
                customBtn.style.background = 'rgba(100,100,255,0.5)';
                customBtn.style.transform = 'scale(1.05)';
            });

            customBtn.addEventListener('mouseleave', () => {
                customBtn.style.background = 'rgba(80,80,255,0.3)';
                customBtn.style.transform = 'scale(1)';
            });

            console.log('✅ Update button linked successfully');
        }
    }, 100);

    const checkLockedName = setInterval(() => {
        const display = document.getElementById('spLockedName-display');
        const useBtn = document.getElementById('btn-use-ln-custom');
        const editBtn = document.getElementById('btn-chg-ln-custom');
        const expiryDisplay = document.getElementById('spExpiry-display');

        if (display && useBtn && editBtn && expiryDisplay) {
            clearInterval(checkLockedName);

            const syncLockedName = () => {
                const gameLockedName = document.getElementById('spLockedName');
                const gameExpiry = document.getElementById('spExpiry');

                if (gameLockedName) {
                    display.textContent = gameLockedName.textContent || 'None';
                }
                if (gameExpiry) {
                    expiryDisplay.textContent = gameExpiry.textContent || 'N/A';
                }
            };

            syncLockedName();

            setInterval(syncLockedName, 2000);

            useBtn.addEventListener('click', () => {
                const gameLnBtn = document.getElementById('btn-use-ln');
                if (gameLnBtn) {
                    gameLnBtn.click();
                    console.log('✅ Used locked name');
                } else {
                    console.warn('⚠️ Game use-ln button not found');
                }
            });

            editBtn.addEventListener('click', () => {
                const gameEditBtn = document.getElementById('btn-chg-ln');
                if (gameEditBtn) {
                    gameEditBtn.click();
                    console.log('✅ Opened edit locked name');
                } else {
                    console.warn('⚠️ Game chg-ln button not found');
                }
            });

            console.log('✅ Locked name controls linked successfully');
        }
    }, 100);
}
function getOptionsHTML() {
    return `
            <div class="setting-group">
                <h3>Camera & Display</h3>
                <div class="setting-row"><span class="setting-label">Hide Own Name</span><div class="setting-control"><input type="checkbox" id="cHideOwnName"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Friend Names</span><div class="setting-control"><input type="checkbox" id="cHideFriendNames"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Bot Names</span><div class="setting-control"><input type="checkbox" id="cHideBotNames"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Enemy Names</span><div class="setting-control"><input type="checkbox" id="cHideEnemyNames"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Own Mass</span><div class="setting-control"><input type="checkbox" id="cHideOwnMass"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Friend Masses</span><div class="setting-control"><input type="checkbox" id="cHideFriendMasses"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Bot Masses</span><div class="setting-control"><input type="checkbox" id="cHideBotMasses"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Enemy Masses</span><div class="setting-control"><input type="checkbox" id="cHideEnemyMasses"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Own Skin</span><div class="setting-control"><input type="checkbox" id="cHideOwnSkin"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Friend Skins</span><div class="setting-control"><input type="checkbox" id="cHideFriendSkins"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Bot Skins</span><div class="setting-control"><input type="checkbox" id="cHideBotSkins"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Enemy Skins</span><div class="setting-control"><input type="checkbox" id="cHideEnemySkins"></div></div>
                <div class="setting-row"><span class="setting-label">Uncap FPS</span><div class="setting-control"><input type="checkbox" id="cUncapFPS"></div></div>
                <div class="setting-row"><span class="setting-label">Smooth Cells</span><div class="setting-control"><input type="checkbox" id="cSmoothCells"></div></div>
                <div class="setting-row"><span class="setting-label">Linesplit Mode</span><div class="setting-control"><select id="sLinesplitMode"><option value="TOGGLE">Toggle</option><option value="HOLD">Hold</option></select></div></div>
                <div class="setting-row"><span class="setting-label">Camera Focus</span><div class="setting-control"><select id="sCameraFocus"><option value="0">Center</option><option value="1">Biggest Cells</option></select></div></div>
                <div class="setting-row">
                    <span class="setting-label">Camera Delay</span>
                    <div class="setting-control">
                        <input type="range" id="rCameraDelay" min="0" max="250" value="0" step="1">
                        <input type="number" class="range-value" data-range="rCameraDelay" min="0" max="250" value="0">
                    </div>
                </div>
                <div class="setting-row">
                    <span class="setting-label">Zoom Delay</span>
                    <div class="setting-control">
                        <input type="range" id="rZoomDelay" min="0" max="400" value="165" step="1">
                        <input type="number" class="range-value" data-range="rZoomDelay" min="0" max="400" value="165">
                    </div>
                </div>
                <div class="setting-row">
                    <span class="setting-label">Menu Delay</span>
                    <div class="setting-control">
                        <input type="range" id="rMenuDelay" min="0" max="1000" value="500" step="5">
                        <input type="number" class="range-value" data-range="rMenuDelay" min="0" max="1000" value="500">
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>Performance</h3>
                <div class="setting-row"><span class="setting-label">Quality</span><div class="setting-control"><select id="sQuality"><option value="ULTRA">Ultra</option><option value="HIGH">High</option><option value="MEDIUM">Medium</option><option value="LOW">Low</option><option value="VERYLOW">Very Low</option></select></div></div>
                <div class="setting-row"><span class="setting-label">Render Type</span><div class="setting-control"><select id="sRenderType"><option value="AUTO">Auto</option><option value="WEBGL">WebGl</option><option value="CANVAS">Canvas</option></select></div></div>
                <div class="setting-row"><span class="setting-label">Disable Anti-Aliasing</span><div class="setting-control"><input type="checkbox" id="cDisableAA"></div></div>
            </div>

            <div class="setting-group">
                <h3>Render Options</h3>
                <div class="setting-row"><span class="setting-label">Show Border</span><div class="setting-control"><input type="checkbox" id="cShowBorder"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Food</span><div class="setting-control"><input type="checkbox" id="cHideFood"></div></div>
                <div class="setting-row"><span class="setting-label">Transparent Cells</span><div class="setting-control"><input type="checkbox" id="cTransCells"></div></div>
                <div class="setting-row"><span class="setting-label">Disable Auto Name Hiding</span><div class="setting-control"><input type="checkbox" id="cDisableAutoNameHiding"></div></div>
                <div class="setting-row"><span class="setting-label">Disable Auto Food Hiding</span><div class="setting-control"><input type="checkbox" id="cDisableAutoFoodHiding"></div></div>
                <div class="setting-row"><span class="setting-label">Text Outlines</span><div class="setting-control"><select id="sTextOutlines"><option value="THICK">Thick</option><option value="THIN">Thin</option><option value="NONE">Off</option></select></div></div>
                <div class="setting-row"><span class="setting-label">Mass Type</span><div class="setting-control"><select id="sMassType"><option value="DEFAULT">Default</option><option value="SHORT">Short</option></select></div></div>
                <div class="setting-row"><span class="setting-label">Show Tracer</span><div class="setting-control"><input type="checkbox" id="cShowTracer"></div></div>
            </div>

            <div class="setting-group">
                <h3>General Options</h3>
                <div class="setting-row"><span class="setting-label">Auto Respawn</span><div class="setting-control"><input type="checkbox" id="cAutoRespawn"></div></div>
                <div class="setting-row"><span class="setting-label">Silent Login</span><div class="setting-control"><input type="checkbox" id="cSilentLogin"></div></div>
                <div class="setting-row"><span class="setting-label">Disable Auto Zoom</span><div class="setting-control"><input type="checkbox" id="cDisableAutoZoom"></div></div>
                <div class="setting-row"><span class="setting-label">Auto Decline</span><div class="setting-control"><input type="checkbox" id="cAutoDecline"></div></div>
                <div class="setting-row"><span class="setting-label">Disable Persist Eject Mass</span><div class="setting-control"><input type="checkbox" id="cDisablePersistEjectMass"></div></div>
                <div class="setting-row">
                    <span class="setting-label">Animation Delay</span>
                    <div class="setting-control">
                        <input type="range" id="rAnimationDelay" min="1" max="250" value="90" step="1">
                        <input type="number" class="range-value" data-range="rAnimationDelay" min="1" max="250" value="90">
                    </div>
                </div>
                <div class="setting-row">
                    <span class="setting-label">View Distance</span>
                    <div class="setting-control">
                        <input type="range" id="rViewDistance" min="50" max="150" value="100" step="1">
                        <input type="number" class="range-value" data-range="rViewDistance" min="50" max="150" value="100">
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>UI Options</h3>
                <div class="setting-row"><span class="setting-label">Hide Minimap</span><div class="setting-control"><input type="checkbox" id="cHideMinimap"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Leaderboard</span><div class="setting-control"><input type="checkbox" id="cHideLeaderboard"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Extra Panel</span><div class="setting-control"><input type="checkbox" id="cHideExtraPanel"></div></div>
                <div class="setting-row"><span class="setting-label">Darker Bots</span><div class="setting-control"><input type="checkbox" id="cDarkerBots"></div></div>
                <div class="setting-row"><span class="setting-label">Show Coordinates</span><div class="setting-control"><input type="checkbox" id="cShowCoordinates"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Leaderboard Header</span><div class="setting-control"><input type="checkbox" id="cHideLeaderboardHeader"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Party Header</span><div class="setting-control"><input type="checkbox" id="cHidePartyHeader"></div></div>
                <div class="setting-row">
                    <span class="setting-label">UI Scale</span>
                    <div class="setting-control">
                        <input type="range" id="rUiScale" min="0.50" max="1.25" value="1.00" step="0.01">
                        <input type="number" class="range-value" data-range="rUiScale" min="0.50" max="1.25" value="1.00" step="0.01">
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>Chat Options</h3>
                <div class="setting-row"><span class="setting-label">Hide Chat</span><div class="setting-control"><input type="checkbox" id="cHideChat"></div></div>
                <div class="setting-row"><span class="setting-label">Resizable Chat</span><div class="setting-control"><input type="checkbox" id="cResizableChat"></div></div>
                <div class="setting-row"><span class="setting-label">Show Chat IDs</span><div class="setting-control"><input type="checkbox" id="cShowChatIds"></div></div>
            </div>

            <div class="setting-group">
                <h3>Score Panel Options</h3>
                <div class="setting-row"><span class="setting-label">Score Panel</span><div class="setting-control"><select id="sScorePanel"><option value="0">Hidden</option><option value="1">Horizontal</option><option value="2">Vertical</option></select></div></div>
                <div class="setting-row"><span class="setting-label">Colored Ping</span><div class="setting-control"><input type="checkbox" id="cColoredPing"></div></div>
                <div class="setting-row"><span class="setting-label">Colored Cell Count</span><div class="setting-control"><input type="checkbox" id="cColoredCellCount"></div></div>
                <div class="setting-row"><span class="setting-label">Hide Party Panel</span><div class="setting-control"><input type="checkbox" id="cHidePartyPanel"></div></div>
            </div>

            <div class="setting-group">
                <h3>Sounds</h3>
                <div class="setting-row"><span class="setting-label">Enable Sounds</span><div class="setting-control"><input type="checkbox" id="cEnableSounds"></div></div>
                <div class="setting-row"><span class="setting-label">Split Sound URL</span><div class="setting-control"><input type="text" id="iSplitSound" placeholder="https://example.wav" style="width:300px"></div></div>
                <div class="setting-row"><span class="setting-label">Eject Sound URL</span><div class="setting-control"><input type="text" id="iEjectSound" placeholder="https://example.wav" style="width:300px"></div></div>
            </div>

            <div class="setting-group">
                <h3>Privacy</h3>
                <div class="setting-row"><span class="setting-label">Accept Cookies</span><div class="setting-control"><input type="checkbox" id="cc_acceptCookies"></div></div>
                <div class="setting-row"><span class="setting-label">Global Leaderboard</span><div class="setting-control"><input type="checkbox" id="cGlobalLeaderboard"></div></div>
                <div class="setting-row"><span class="setting-label">Hide ID (Streamer)</span><div class="setting-control"><input type="checkbox" id="cHideId"></div></div>
            </div>
        `;
}

function getHotkeysHTML() {
    return `
            <div class="setting-group">
                <h3>Movement & Splits</h3>
                <div class="setting-row"><span class="setting-label">Split</span><div class="setting-control"><button class="keybind-btn" data-key="kSplit">SPACE</button></div></div>
                <div class="setting-row"><span class="setting-label">Linesplit</span><div class="setting-control"><button class="keybind-btn" data-key="kLinesplit">C</button></div></div>
                <div class="setting-row"><span class="setting-label">Double Split (4x)</span><div class="setting-control"><button class="keybind-btn" data-key="kDoubleSplit">G</button></div></div>
                <div class="setting-row"><span class="setting-label">Triple Split (8x)</span><div class="setting-control"><button class="keybind-btn" data-key="kTripleSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Quad Split (16x)</span><div class="setting-control"><button class="keybind-btn" data-key="kQuadSplit">T</button></div></div>
                <div class="setting-row"><span class="setting-label">Penta Split (32x)</span><div class="setting-control"><button class="keybind-btn" data-key="kPentaSplit">F</button></div></div>
                <div class="setting-row"><span class="setting-label">Hexa Split (64x)</span><div class="setting-control"><button class="keybind-btn" data-key="kHexaSplit">R</button></div></div>
                <div class="setting-row"><span class="setting-label">Septi Split (128x)</span><div class="setting-control"><button class="keybind-btn" data-key="kSeptiSplit">D</button></div></div>
                <div class="setting-row"><span class="setting-label">Octo Split (256x)</span><div class="setting-control"><button class="keybind-btn" data-key="kOctoSplit">-</button></div></div>
            </div>

            <div class="setting-group">
                <h3>Freeze Mouse</h3>
                <div class="setting-row"><span class="setting-label">Freeze Mouse (Toggle)</span><div class="setting-control"><button class="keybind-btn" data-key="kFreezeMouse">S</button></div></div>
                <div class="setting-row"><span class="setting-label">Freeze Mouse (Hold)</span><div class="setting-control"><button class="keybind-btn" data-key="kFreezeMouseHold">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Double Split Freeze Hold</span><div class="setting-control"><button class="keybind-btn" data-key="kDoubleFreezeHold">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Triple Split Freeze Hold</span><div class="setting-control"><button class="keybind-btn" data-key="kTripleFreezeHold">-</button></div></div>
            </div>

            <div class="setting-group">
                <h3>Zoom Levels</h3>
                <div class="setting-row"><span class="setting-label">Zoom Level 1</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom1">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 2</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom2">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 3</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom3">F5</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 4</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom4">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 5</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom5">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 6</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom6">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 7</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom7">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 8</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom8">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 9</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom9">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 10</span><div class="setting-control"><button class="keybind-btn" data-key="kZoom10">-</button></div></div>
            </div>

            <div class="setting-group">
                <h3>Option Toggles</h3>
                <div class="setting-row"><span class="setting-label">Hide Food</span><div class="setting-control"><button class="keybind-btn" data-key="kHideFood">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Hide Chat</span><div class="setting-control"><button class="keybind-btn" data-key="kHideChat">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Auto Respawn</span><div class="setting-control"><button class="keybind-btn" data-key="kAutoRespawn">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Cycle Names</span><div class="setting-control"><button class="keybind-btn" data-key="kCycleNames">N</button></div></div>
                <div class="setting-row"><span class="setting-label">Cycle Masses</span><div class="setting-control"><button class="keybind-btn" data-key="kCycleMasses">M</button></div></div>
                <div class="setting-row"><span class="setting-label">Cycle Skins</span><div class="setting-control"><button class="keybind-btn" data-key="kCycleSkins">K</button></div></div>
            </div>

            <div class="setting-group">
                <h3>General Keybinds</h3>
                <div class="setting-row"><span class="setting-label">Eject Mass</span><div class="setting-control"><button class="keybind-btn" data-key="kEjectMass">E</button></div></div>
                <div class="setting-row"><span class="setting-label">Context Menu</span><div class="setting-control"><button class="keybind-btn" data-key="kContextMenu">MOUSE3</button></div></div>
                <div class="setting-row"><span class="setting-label">Toggle Spectate</span><div class="setting-control"><button class="keybind-btn" data-key="kToggleSpec">Q</button></div></div>
            </div>
        `;
}

function getThemesHTML() {
    return `
            <div class="setting-group">
                <h3>Map & Background</h3>
                <div class="setting-row"><span class="setting-label">Map Background URL</span><div class="setting-control"><input type="text" id="iMapBackground" placeholder="https://example.png" style="width:300px"></div></div>
                <div class="setting-row"><span class="setting-label">Game Background Color</span><div class="setting-control"><input type="text" id="uiGameBackgroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Game Border Color</span><div class="setting-control"><input type="text" id="uiGameBorderColor" data-coloris></div></div>
            </div>

            <div class="setting-group">
                <h3>Mouse Tracer</h3>
                <div class="setting-row"><span class="setting-label">Tracer Color</span><div class="setting-control"><input type="text" id="uiTracerColor" data-coloris></div></div>
            </div>

            <div class="setting-group">
                <h3>Pastel Mode</h3>
                <div class="setting-row"><span class="setting-label">Enable Pastel Mode</span><div class="setting-control"><input type="checkbox" id="cPastelMode"></div></div>
            </div>

            <div class="setting-group">
                <h3>Status Colors</h3>
                <div class="setting-row"><span class="setting-label">Success Color</span><div class="setting-control"><input type="text" id="uiGameColorSuccess" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Warning Color</span><div class="setting-control"><input type="text" id="uiGameColorWarning" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Error Color</span><div class="setting-control"><input type="text" id="uiGameColorError" data-coloris></div></div>
            </div>

            <div class="setting-group">
                <h3>Game Font</h3>
                <div class="setting-row">
                    <span class="setting-label">Select Font</span>
                    <div class="setting-control">
                        <select id="gameFont">
                            <option value="default">Default (Arial)</option>
                            <option value="'Courier New', monospace">Courier New</option>
                            <option value="Georgia, serif">Georgia</option>
                            <option value="'Times New Roman', serif">Times New Roman</option>
                            <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                            <option value="Verdana, sans-serif">Verdana</option>
                            <option value="Tahoma, sans-serif">Tahoma</option>
                            <option value="'Consolas', monospace">Consolas</option>
                        </select>
                    </div>
                </div>
                <div class="setting-row">
                    <span class="setting-label">Preview</span>
                    <div class="setting-control">
                        <div id="fontPreview" style="padding: 15px; background: rgba(40,40,40,0.5); border-radius: 8px; color: #fff; font-size: 18px;">
                            The quick brown fox jumps over the lazy dog
                        </div>
                    </div>
                </div>
            </div>
        `;
}

function getCellPanelHTML() {
    return `
        <div class="setting-group">
            <h3>Locked Name</h3>
            <div class="setting-row">
                <span class="setting-label">Locked Name</span>
                <div class="setting-control">
                    <span id="spLockedName-display" style="color: #fff; font-weight: 600;">Loading...</span>
                    <button id="btn-chg-ln-custom" class="x-small-btn" style="margin-left: 10px;">Edit</button>
                </div>
            </div>
            <div class="setting-row">
                <span class="setting-label"></span>
                <div class="setting-control">
                    <button id="btn-use-ln-custom" class="x-small-btn">Use Name</button>
                </div>
            </div>
            <div class="setting-row">
                <span class="setting-label">Expiry</span>
                <div class="setting-control">
                    <span id="spExpiry-display" style="color: #aaa;">Loading...</span>
                </div>
            </div>
            <div class="setting-row">
                <span class="setting-label"></span>
                <div class="setting-control">
                    <a href="https://gota.io/policies/locked-names/rules.html" target="_blank" rel="noopener" style="color: #5af; text-decoration: none;">
                        Locked Name Rules
                    </a>
                </div>
            </div>
        </div>

        <div class="setting-group">
            <h3>Cell Customization</h3>
            <div class="setting-row"><span class="setting-label">Skin Name</span><div class="setting-control"><input type="text" id="spSkinName" style="width:200px"></div></div>
            <div class="setting-row">
                <span class="setting-label">Ejected Mass Skin</span>
                <div class="setting-control">
                    <select id="spEffect">
                        <option value="0">None</option>
                        <option value="1">Heart</option>
                        <option value="2">Star</option>
                        <option value="3">Home</option>
                        <option value="4">Apple</option>
                        <option value="5">Spiral</option>
                        <option value="6">Dice</option>
                        <option value="7">Chicken</option>
                        <option value="8">Ghost</option>
                        <option value="9">Burger</option>
                        <option value="10">Bow</option>
                        <option value="11">Cloud</option>
                        <option value="12">Skull</option>
                        <option value="13">Mug</option>
                        <option value="14">Flower</option>
                        <option value="15">Music</option>
                        <option value="16">Checkmark</option>
                        <option value="17">Clover</option>
                        <option value="18">Crown</option>
                        <option value="19">Fancy</option>
                        <option value="20">Fish</option>
                        <option value="21">Fire</option>
                        <option value="22">Lightning</option>
                        <option value="23">Paw</option>
                        <option value="24">Duck</option>
                        <option value="25">Snowflake</option>
                        <option value="26">Bomb</option>
                        <option value="27">Butterfly</option>
                        <option value="28">Cherry</option>
                        <option value="29">Watermelon</option>
                        <option value="30">Cat</option>
                        <option value="31">Cupid</option>
                        <option value="32">Sword</option>
                        <option value="33">Shield</option>
                        <option value="34">Tornado</option>
                        <option value="35">Radioactive</option>
                        <option value="36">Rocket</option>
                        <option value="37">Wave</option>
                    </select>
                </div>
            </div>
            <div class="setting-row">
                <span class="setting-label">Name Font</span>
                <div class="setting-control">
                    <select id="spNameFont">
                        <option value="0">Default</option>
                        <option value="1">Ampad</option>
                        <option value="2">Burnstown</option>
                        <option value="3">Chlorinar</option>
                        <option value="4">Facon</option>
                        <option value="5">Archistico</option>
                        <option value="6">Breakaway</option>
                        <option value="7">Conformity</option>
                        <option value="8">Electroharmonix</option>
                        <option value="9">PWJoyeuxNoel</option>
                        <option value="10">Leckerli-one</option>
                        <option value="11">Satisfy</option>
                        <option value="12">Titan-one</option>
                        <option value="13">Press-start-2p</option>
                        <option value="14">Oswald</option>
                        <option value="15">Indie-flower</option>
                        <option value="16">Dancingscript</option>
                        <option value="17">Comicrelief</option>
                        <option value="18">Bungee</option>
                    </select>
                </div>
            </div>
            <div class="setting-row"><span class="setting-label">Name Color</span><div class="setting-control"><input type="text" id="spNameColor" data-coloris></div></div>
            <div class="setting-row"><span class="setting-label">Chat Color</span><div class="setting-control"><input type="text" id="spChatColor" data-coloris></div></div>
            <div class="setting-row"><span class="setting-label">Cell Color</span><div class="setting-control"><input type="text" id="spCellColor" data-coloris></div></div>
            <div class="setting-row"><span class="setting-label">Use Cell Color</span><div class="setting-control"><input type="checkbox" id="cUseCellColor"></div></div>
            <div class="setting-row"><span class="setting-label">Lower Name</span><div class="setting-control"><input type="checkbox" id="spLowerName"></div></div>
            <div class="setting-row">
                <span class="setting-label"></span>
                <div class="setting-control">
                    <button id="btn-updateSP-custom" class="gota-btn" style="width: 800px; height: 40px; padding: 10px; background: rgba(80,80,255,0.3); border: 1px solid rgba(80,80,255,0.5); color: #fff; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
                        Update Cell Settings
                    </button>
                </div>
            </div>
        </div>
    `;
}
function getCustomFeaturesHTML() {
    return `
            <div class="setting-group">
                <h3>Chat Toggle</h3>
                <div class="setting-row">
                    <span class="setting-label">Chat Toggle Hotkey</span>
                    <div class="setting-control">
                        <button class="keybind-btn" id="chat-toggle-key" data-custom="chatToggle">Y</button>
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>Tab Invite</h3>
                <div class="setting-row">
                    <span class="setting-label">Tab Invite Hotkey</span>
                    <div class="setting-control">
                        <button class="keybind-btn" id="tab-invite-key" data-custom="tabInvite">J</button>
                    </div>
                </div>
                <p style="color: #aaa; font-size: 12px; margin-top: 10px;">Automatically invites and accepts party invites from another tab.</p>
            </div>

            <div class="setting-group">
                <h3>👥 Saved Players</h3>
                <p style="color: #aaa; font-size: 13px; margin-bottom: 15px;">Right-click on players in-game and select "Copy" to save them here.</p>
                <div id="saved-players-list"></div>
            </div>
        `;
}


const LS_KEY = 'savedPlayers';

function loadSavedPlayers() {
    try {
        return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    } catch {
        return [];
    }
}

function saveSavedPlayers(list) {
    localStorage.setItem(LS_KEY, JSON.stringify(list));
}

function parseTitleText(txt) {
    if (!txt) return { name: '[unknown]', skin: 'none' };
    txt = txt.trim();

    let m = txt.match(/^\s*\[([^\]]+)\]\s*(.+)$/);
    if (m) return { skin: m[1].trim(), name: m[2].trim() };

    m = txt.match(/^(.*?)\s*\[([^\]]+)\]\s*$/);
    if (m) return { name: m[1].trim(), skin: m[2].trim() };

    return { name: txt, skin: 'none' };
}

function getNameInput() {
    return document.querySelector('input#name-box.gota-input')
    || document.querySelector('input#nick')
    || document.querySelector('input[name="nick"]')
    || document.querySelector('input[placeholder*="name" i]');
}

function setInputValue(el, value) {
    if (!el) return;

    const desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    if (desc && desc.set) desc.set.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
}

function renderSavedPlayers() {
    const container = document.getElementById('saved-players-list');
    if (!container) return;

    container.innerHTML = '';

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.gap = "6px";

    const header = document.createElement("div");
    header.style.display = "grid";
    header.style.gridTemplateColumns = "1fr 1fr auto";
    header.style.fontWeight = "600";
    header.style.marginBottom = "8px";
    header.style.color = "#fff";
    header.innerHTML = `
            <div style="text-align:center; color:#fff;">Saved Name</div>
            <div style="text-align:center; color:#fff;">Saved Skin</div>
            <div style="text-align:center; color:#fff;">Actions</div>`;
    wrapper.appendChild(header);

    let saved = loadSavedPlayers();
    if (!saved.length) {
        const empty = document.createElement("div");
        empty.textContent = "No players saved yet.";
        empty.style.color = "#aaa";
        empty.style.textAlign = "center";
        wrapper.appendChild(empty);
        container.appendChild(wrapper);
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
        nameCell.style.textAlign = "center";
        nameCell.style.color = "#fff";

        const skinCell = document.createElement("div");
        skinCell.textContent = p.skin || "[none]";
        skinCell.style.textAlign = "center";
        skinCell.style.color = "#fff";

        const actions = document.createElement("div");
        actions.style.display = "flex";
        actions.style.gap = "6px";
        actions.style.flexWrap = "wrap";
        actions.style.justifyContent = "center";

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
                const arr = loadSavedPlayers();
                arr.splice(i, 1);
                saveSavedPlayers(arr);
                renderSavedPlayers();
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

    container.appendChild(wrapper);
}

function setupSavedPlayersFeature() {
    const waitForContextMenu = setInterval(() => {
        const contextMenu = document.querySelector('#context-menu');
        if (contextMenu) {
            clearInterval(waitForContextMenu);

            const observer = new MutationObserver(() => {
                const ul = contextMenu.querySelector('ul.context-list');
                if (ul && !ul.querySelector('#x-copy-player-li')) {
                    const copyLi = document.createElement('li');
                    copyLi.id = 'x-copy-player-li';
                    copyLi.textContent = 'Copy';
                    copyLi.style.cursor = 'pointer';

                    copyLi.onclick = () => {
                        const nameEl = document.querySelector("li#context-name");
                        let raw = "";

                        if (nameEl) {
                            raw = (nameEl.textContent || "").trim();
                        }

                        const { name, skin } = parseTitleText(raw);

                        const list = loadSavedPlayers();
                        list.push({ name, skin });
                        saveSavedPlayers(list);

                        const customTab = document.querySelector('.settings-tab[data-tab="customfeatures"]');
                        if (customTab && customTab.classList.contains('active')) {
                            renderSavedPlayers();
                        }
                    };

                    ul.appendChild(copyLi);
                }
            });

            observer.observe(contextMenu, { childList: true, subtree: true });
        }
    }, 500);
}

function setupRangeListeners() {
    document.querySelectorAll('#unified-settings-panel input[type="range"]').forEach(range => {
        try {
            const valueInput = document.querySelector(`input[data-range="${range.id}"]`);
            if (valueInput) {
                range.addEventListener('input', () => {
                    valueInput.value = range.value;
                });

                valueInput.addEventListener('input', () => {
                    const val = parseFloat(valueInput.value);
                    if (!isNaN(val)) {
                        range.value = val;
                        range.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                });

                valueInput.value = range.value;
            }
        } catch(e){}
    });
}

function setupFontSelector() {
    const fontSelect = document.getElementById('gameFont');
    const fontPreview = document.getElementById('fontPreview');

    if (!fontSelect || !fontPreview) return;

    let savedFont = 'default';
    try { savedFont = GM_getValue('gameFont', 'default'); } catch(e) { savedFont = localStorage.getItem('gameFont') || 'default'; }

    fontSelect.value = savedFont;
    applyFont(savedFont);

    fontSelect.addEventListener('change', () => {
        const selectedFont = fontSelect.value;
        try { GM_setValue('gameFont', selectedFont); } catch(e) { localStorage.setItem('gameFont', selectedFont); }
        applyFont(selectedFont);
        fontPreview.style.fontFamily = selectedFont === 'default' ? 'Arial, sans-serif' : selectedFont;
    });

    fontPreview.style.fontFamily = savedFont === 'default' ? 'Arial, sans-serif' : savedFont;
}

function applyFont(font) {
    const fontFamily = font === 'default' ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' : font;



    let style = document.getElementById('custom-game-font');
    if (!style) {
        style = document.createElement('style');
        style.id = 'custom-game-font';
        document.head.appendChild(style);
    }
    style.textContent = `
            body, body * {
                font-family: ${fontFamily} !important;
            }
        `;
}

function setupColorPickers() {
    console.log('🎨 Setting up color pickers...');

    setTimeout(() => {
        const gameColorInputs = [...document.querySelectorAll('input[data-coloris]')].filter(inp =>
                                                                                             !inp.closest('#unified-settings-panel')
                                                                                            );

        console.log(`Game color inputs found: ${gameColorInputs.length}`);

        if (gameColorInputs.length === 0) {
            console.warn('⚠️ NO GAME COLOR INPUTS FOUND! Retrying in 2 seconds...');
            setTimeout(setupColorPickers, 2000);
            return;
        }

        document.querySelectorAll('#unified-settings-panel [data-coloris]').forEach(ourInput => {
            console.log(`⚙️ Setting up: ${ourInput.id}`);
            const gameInput = findGameElement(ourInput.id);

            if (gameInput) {
                console.log(`  ✅ Found matching game input for ${ourInput.id}`);

                let isUpdating = false; 

                const applyPersistentStyle = (color) => {
                    if (isUpdating) return;
                    isUpdating = true;

                    const style =
                          `background: ${color} !important; ` +
                          `background-color: ${color} !important; ` +
                          `width: 100px !important; ` +
                          `height: 40px !important; ` +
                          `border-radius: 8px !important; ` +
                          `border: 2px solid rgba(255,255,255,0.3) !important; ` +
                          `cursor: pointer !important; ` +
                          `padding: 5px !important; ` +
                          `margin: 0 !important; ` +
                          `font-size: 11px !important; ` +
                          `text-align: center !important; ` +
                          `color: #fff !important; ` +
                          `text-shadow: 0 0 3px #000, 0 0 3px #000 !important; ` +
                          `font-weight: 600 !important; ` +
                          `box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;`;

                    ourInput.setAttribute('style', style);

                    setTimeout(() => { isUpdating = false; }, 50);
                };

                const updateOurColor = (newColor) => {
                    console.log(`🎨 Updating ${ourInput.id} display to: ${newColor}`);
                    ourInput.value = newColor;
                    applyPersistentStyle(newColor);
                    saveColorSettings();
                };

                if (gameInput.value) {
                    updateOurColor(gameInput.value);
                }

                let lastValue = gameInput.value;

                ['input', 'change'].forEach(eventType => {
                    gameInput.addEventListener(eventType, () => {
                        const newValue = gameInput.value;
                        if (newValue && /^#[0-9A-Fa-f]{6}$/i.test(newValue) && newValue !== lastValue) {
                            console.log(`📡 Game ${eventType}: ${gameInput.id} = ${newValue}`);
                            lastValue = newValue;
                            updateOurColor(newValue);
                        }
                    });
                });

                ourInput.addEventListener('input', () => {
                    const newValue = ourInput.value;
                    if (newValue && /^#[0-9A-Fa-f]{6}$/i.test(newValue)) {
                        console.log(`🎨 Our input changed: ${ourInput.id} = ${newValue}`);
                        gameInput.value = newValue;
                        gameInput.dispatchEvent(new Event('input', { bubbles: true }));
                        gameInput.dispatchEvent(new Event('change', { bubbles: true }));
                        lastValue = newValue;
                        applyPersistentStyle(newValue);
                        saveColorSettings();
                    }
                });

                const styleMonitor = setInterval(() => {
                    const overlay = document.getElementById('unified-settings-overlay');
                    if (!overlay || !overlay.classList.contains('show')) {
                        return;
                    }

                    const currentWidth = ourInput.offsetWidth;
                    if (currentWidth !== 100 && ourInput.value && /^#[0-9A-Fa-f]{6}$/i.test(ourInput.value)) {
                        applyPersistentStyle(ourInput.value);
                    }
                }, 100);

                document.addEventListener('click', (e) => {
                    if (!e.target.closest('#clr-picker') && !e.target.closest('[data-coloris]')) {
                        setTimeout(() => {
                            if (ourInput.value && /^#[0-9A-Fa-f]{6}$/i.test(ourInput.value)) {
                                applyPersistentStyle(ourInput.value);
                            }
                        }, 100);
                    }
                });

            } else {
                console.warn(`  ❌ No matching game input for ${ourInput.id}`);
            }
        });

        loadSavedColors();
    }, 500);
}
function setupKeybindListeners() {
    const attach = (btn) => {
        if (!btn || btn.dataset._listeningAttached) return;
        btn.dataset._listeningAttached = '1';

        btn.onclick = function(e) {
            e && e.stopPropagation && e.stopPropagation();
            const explicitKeyId = btn.dataset.key || btn.id || btn.dataset.custom || btn.dataset.mb;
            const keyId = explicitKeyId || null;
            btn.classList.add('listening');
            const prevText = btn.textContent;
            btn.textContent = 'Press key...';
            state.listeningForKey = true;

            const cleanup = () => {
                try {
                    btn.classList.remove('listening');
                    state.listeningForKey = false;
                    document.removeEventListener('keydown', kdHandler, true);
                    document.removeEventListener('mousedown', mdHandler, true);
                } catch(e){}
            };

            const applyKeyToBtn = (keyStr) => {
                btn.textContent = keyStr;

                if (btn.id === 'chat-toggle-key') {
                    localStorage.setItem('chatToggleHotkey', keyStr.toLowerCase());
                    setupChatToggle(keyStr.toLowerCase());
                } else if (btn.id === 'tab-invite-key') {
                    localStorage.setItem("tabInviteHotkey", keyStr.toLowerCase());
                    window.__TAB_INVITE_HOTKEY = keyStr.toLowerCase();
                }

                if (keyId) {
                    const gameBtn = findGameElement(keyId);
                    if (gameBtn) {
                        try {
                            if ('textContent' in gameBtn) gameBtn.textContent = keyStr;
                            gameBtn.dispatchEvent(new Event('change', { bubbles: true }));
                            gameBtn.dispatchEvent(new Event('input', { bubbles: true }));
                            gameBtn.dispatchEvent(new Event('click', { bubbles: true }));
                        } catch(e){}
                    }
                }
            };

            const kdHandler = (ev) => {
                ev.preventDefault && ev.preventDefault();
                ev.stopPropagation && ev.stopPropagation();

                if (ev.key === 'Escape') {
                    btn.textContent = prevText;
                    cleanup();
                    return;
                }

                let key = ev.key ? ev.key.toUpperCase() : '';
                if (key === ' ') key = 'SPACE';

                applyKeyToBtn(key);
                cleanup();
            };

            const mdHandler = (ev) => {
                ev.preventDefault && ev.preventDefault();
                ev.stopPropagation && ev.stopPropagation();

                let key = '';
                switch(ev.button) {
                    case 0: key = 'MOUSE1'; break;
                    case 1: key = 'MOUSE2'; break;
                    case 2: key = 'MOUSE3'; break;
                    case 3: key = 'MOUSE4'; break;
                    case 4: key = 'MOUSE5'; break;
                    default: key = `MOUSE${ev.button + 1}`;
                }

                applyKeyToBtn(key);
                cleanup();
            };

            document.addEventListener('keydown', kdHandler, true);
            document.addEventListener('mousedown', mdHandler, true);
        };
    };

    document.querySelectorAll('#unified-settings-panel .keybind-btn').forEach(attach);

    const panel = document.getElementById('unified-settings-panel');
    if (panel) {
        try {
            const mo = new MutationObserver((mutations) => {
                mutations.forEach(m => {
                    m.addedNodes && m.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            if (node.matches && node.matches('.keybind-btn')) attach(node);
                            node.querySelectorAll && node.querySelectorAll('.keybind-btn').forEach(attach);
                        }
                    });
                });
            });
            mo.observe(panel, { childList: true, subtree: true });
        } catch(e){}
    }
}

function setupChatToggle(hotkey) {
    document.removeEventListener('keydown', window.__chatToggleHandler);

    window.__chatToggleHandler = (e) => {
        if (e.key.toLowerCase() === hotkey && document.activeElement.tagName !== "INPUT") {
            const chatPanel = document.getElementById("chat-panel");
            if (chatPanel) {
                if (chatPanel.style.display === "none") {
                    chatPanel.style.setProperty("display", "block", "important");
                } else {
                    chatPanel.style.setProperty("display", "none", "important");
                }
            }
        }
    };

    document.addEventListener("keydown", window.__chatToggleHandler);
}

function syncWithGameSettings() {
    try {
        console.log('🔄 Starting sync with game settings...');

        const mainOptions = findPotentialGamePanel();
        if (!mainOptions) {
            console.warn('⚠️ Game settings panel not found, retrying...');
            setTimeout(syncWithGameSettings, 1000);
            return;
        }

        setTimeout(() => performSync(), 500);
    } catch (e) {
        console.error('syncWithGameSettings error', e);
    }
}

function findPotentialGamePanel() {
    const possible = [
        'main-options',
        'main-themes',
        'main-subpanel',
        'main-hotkeys',
        'main-panel',
        'main-right',
        'mainPanel'
    ];
    for (const id of possible) {
        const el = document.getElementById(id);
        if (el) return el;
    }
    const fallback = document.querySelector('.main-options, .main-panel-wrapper, .main-right, .main-left');
    return fallback || null;
}

function findGameElement(id) {
    if (!id) return null;
    try {
        let el = document.getElementById(id);
        if (el && !el.closest('#unified-settings-panel')) return el;

        el = document.querySelector(`#${CSS.escape(id)}`);
        if (el && !el.closest('#unified-settings-panel')) return el;

        el = document.querySelector(`[name="${id}"]`);
        if (el && !el.closest('#unified-settings-panel')) return el;

        el = document.querySelector(`[data-id="${id}"], [data-key="${id}"], [data-name="${id}"]`);
        if (el && !el.closest('#unified-settings-panel')) return el;

        const panels = ['main-options','main-themes','main-hotkeys','main-subpanel','mainPanel','main-right','main-left'];
        for (const pid of panels) {
            const panel = document.getElementById(pid) || document.querySelector(`#${pid}`);
            if (!panel) continue;
            let candidate = panel.querySelector(`#${CSS.escape(id)}`);
            if (candidate) return candidate;
            candidate = panel.querySelector(`[name="${id}"]`);
            if (candidate) return candidate;
            const partial = panel.querySelector(`[id*="${id}"], [name*="${id}"], [data-id*="${id}"]`);
            if (partial) return partial;
        }

        const short = id.replace(/^k|^c|^s|^r|^i|^sp/, '');
        const broad = [...document.querySelectorAll('*')].find(n => {
            if (n.closest && n.closest('#unified-settings-panel')) return false;
            const nid = n.id || '';
            const nname = n.getAttribute && n.getAttribute('name') || '';
            if (!nid && !nname) return false;
            return nid.toLowerCase().includes(short.toLowerCase()) || (nname && nname.toLowerCase().includes(short.toLowerCase()));
        });
        if (broad) return broad;
    } catch (e) {
        /* ignore */
    }
    return null;
}

function performSync() {
    try {
        let syncedCount = 0;

        const panel = document.getElementById('unified-settings-panel');
        if (!panel) return;

        panel.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            try {
                const gameCheckbox = findGameElement(checkbox.id);
                if (gameCheckbox && (gameCheckbox.type === 'checkbox' || gameCheckbox.getAttribute('role') === 'checkbox')) {
                    checkbox.checked = !!gameCheckbox.checked;
                    syncedCount++;

                    const newCheckbox = checkbox.cloneNode(true);
                    checkbox.parentNode && checkbox.parentNode.replaceChild(newCheckbox, checkbox);

                    newCheckbox.addEventListener('change', () => {
                        try {
                            gameCheckbox.checked = newCheckbox.checked;
                            gameCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                            gameCheckbox.dispatchEvent(new Event('click', { bubbles: true }));
                            gameCheckbox.dispatchEvent(new Event('input', { bubbles: true }));
                        } catch(e){}
                    });
                }
            } catch(e){ }
        });

        panel.querySelectorAll('select').forEach(select => {
            try {
                const gameSelect = findGameElement(select.id);
                if (gameSelect && gameSelect.tagName === 'SELECT') {
                    select.innerHTML = gameSelect.innerHTML;
                    select.value = gameSelect.value;
                    syncedCount++;

                    const newSelect = select.cloneNode(true);
                    select.parentNode && select.parentNode.replaceChild(newSelect, select);
                    newSelect.innerHTML = gameSelect.innerHTML;
                    newSelect.value = gameSelect.value;

                    newSelect.addEventListener('change', () => {
                        try {
                            gameSelect.value = newSelect.value;
                            gameSelect.dispatchEvent(new Event('change', { bubbles: true }));
                            gameSelect.dispatchEvent(new Event('input', { bubbles: true }));
                        } catch(e){}
                    });
                }
            } catch(e){}
        });

        panel.querySelectorAll('input[type="text"]').forEach(input => {
            try {
                const gameInput = findGameElement(input.id);
                if (gameInput) {
                    input.value = gameInput.value || '';
                    input.type = gameInput.type || 'text';
                    syncedCount++;

                    const newInput = input.cloneNode(true);
                    input.parentNode && input.parentNode.replaceChild(newInput, input);
                    newInput.value = gameInput.value || '';
                    newInput.type = gameInput.type || 'text';

                    newInput.addEventListener('input', () => {
                        try {
                            gameInput.value = newInput.value;
                            gameInput.dispatchEvent(new Event('input', { bubbles: true }));
                            gameInput.dispatchEvent(new Event('change', { bubbles: true }));
                        } catch(e){}
                    });
                }
            } catch(e){}
        });

        panel.querySelectorAll('input[type="range"]').forEach(range => {
            try {
                const gameRange = findGameElement(range.id);
                if (gameRange && gameRange.type === 'range') {
                    range.value = gameRange.value;
                    range.min = gameRange.min;
                    range.max = gameRange.max;
                    range.step = gameRange.step;
                    syncedCount++;

                    const newRange = range.cloneNode(true);
                    range.parentNode && range.parentNode.replaceChild(newRange, range);
                    newRange.value = gameRange.value;
                    newRange.min = gameRange.min;
                    newRange.max = gameRange.max;
                    newRange.step = gameRange.step;

                    const valueInput = document.querySelector(`input[data-range="${newRange.id}"]`);
                    if (valueInput) {
                        valueInput.value = newRange.value;
                        valueInput.min = newRange.min;
                        valueInput.max = newRange.max;
                        valueInput.step = newRange.step;
                    }

                    newRange.addEventListener('input', () => {
                        try {
                            gameRange.value = newRange.value;
                            if (valueInput) valueInput.value = newRange.value;
                            gameRange.dispatchEvent(new Event('input', { bubbles: true }));
                            gameRange.dispatchEvent(new Event('change', { bubbles: true }));
                        } catch(e){}
                    });
                }
            } catch(e){}
        });

        console.log(`✅ Synced ${syncedCount} settings with game controls`);
    } catch (e) {
        console.error('performSync error', e);
    }
}

function open() {
    const overlay = document.getElementById('unified-settings-overlay');
    if (overlay && !state.isOpen) {
        state.isOpen = true;

        requestAnimationFrame(() => {
            overlay.classList.add('show');
        });

        syncWithGameSettings();
        setupColorPickers();
    }
}

function close() {
    const overlay = document.getElementById('unified-settings-overlay');
    if (overlay && state.isOpen) {
        overlay.classList.remove('show');
        state.isOpen = false;

        if (window.Coloris) {
            try { window.Coloris.close(); } catch(e) {}
        }
    }
}


(function animateContextMenu() {
    'use strict';

    const oldStyle = document.getElementById('context-menu-animation-style');
    if (oldStyle) oldStyle.remove();

    const style = document.createElement('style');
    style.id = 'context-menu-animation-style';
    style.textContent = `
        #context-menu {
            opacity: 0;
            transform: scale(0.5);
            transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
                        left 0.3s ease, top 0.3s ease;
            pointer-events: none;
            transform-origin: center center;
        }
        #context-menu.show {
            opacity: 1 !important;
            transform: scale(1);
            pointer-events: auto;
        }
        #context-menu.moving {
            transition: left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                        top 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                        opacity 0.1s ease, transform 0.1s ease;
        }
        ul.context-list {
            transition: none !important;
        }
        @keyframes popIn {
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    const POP_IN_EASING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    let lastPosition = { left: null, top: null };
    let isCurrentlyVisible = false;

    function liIndexOf(el) {
        const li = el.closest('li');
        if (!li || !li.parentElement) return -1;
        const lis = Array.from(li.parentElement.querySelectorAll('li'));
        return lis.indexOf(li);
    }

    const buttonSelectors = {
        copy: [
            'button.copy', '.copy-btn', '[data-action="copy"]', '#copy', '[aria-label="copy"]'
        ].join(','),
        spectate: [
            'button.spectate', '.spectate-btn', '[data-action="spectate"]', '#spectate', '[aria-label="spectate"]'
        ].join(',')
    };


    function applyPopInToButtons(menu) {
        const copyButtons = menu.querySelectorAll(buttonSelectors.copy);
        const spectateButtons = menu.querySelectorAll(buttonSelectors.spectate);

        const targets = [...copyButtons, ...spectateButtons];

        targets.forEach(target => {
            const idx = liIndexOf(target);
            const safeIdx = idx >= 0 ? idx : 6;
            const delay = (safeIdx + 1) * 0.03;

            target.style.animation = 'none';
            target.style.opacity = '0';
            target.style.transform = 'scale(0.8)';
            void target.offsetWidth;
            target.style.animation = `popIn 0.2s ${POP_IN_EASING} ${delay}s forwards`;
        });
    }

    const observer = new MutationObserver(() => {
        const menu = document.getElementById('context-menu');
        if (!menu) return;

        const currentLeft = parseInt(menu.style.left) || 0;
        const currentTop = parseInt(menu.style.top) || 0;
        const isVisible = menu.style.display !== 'none' &&
              menu.style.visibility !== 'hidden' &&
              window.getComputedStyle(menu).display !== 'none';

        if (isVisible && isCurrentlyVisible &&
            lastPosition.left !== null && lastPosition.top !== null &&
            (Math.abs(lastPosition.left - currentLeft) > 5 ||
             Math.abs(lastPosition.top - currentTop) > 5)) {
            menu.classList.add('moving');
            setTimeout(() => menu.classList.remove('moving'), 250);
        }

        if (isVisible && !isCurrentlyVisible) {
            menu.classList.remove('moving');
            menu.classList.add('show');
            setTimeout(() => applyPopInToButtons(menu), 10);
        }

        if (!isVisible && isCurrentlyVisible) {
            menu.classList.remove('show');
            menu.classList.remove('moving');
            lastPosition = { left: null, top: null };

            menu.style.left = '';
            menu.style.top = '';
            clearPopInFromButtons(menu);
        }

        lastPosition = { left: currentLeft, top: currentTop };
        isCurrentlyVisible = isVisible;
    });

    function clearPopInFromButtons(menu) {
        const copyButtons = menu.querySelectorAll(buttonSelectors.copy);
        const spectateButtons = menu.querySelectorAll(buttonSelectors.spectate);
        const targets = [...copyButtons, ...spectateButtons];
        targets.forEach(t => {
            t.style.animation = 'none';
            t.style.opacity = '';
            t.style.transform = '';
            void t.offsetWidth;
        });
    }

    function watchContextMenu() {
        const menu = document.getElementById('context-menu');
        if (menu) {
            observer.observe(menu, { attributes: true, attributeFilter: ['style'] });

            const docObserver = new MutationObserver(() => {
                const newMenu = document.getElementById('context-menu');
                if (newMenu && !newMenu.dataset.watching) {
                    newMenu.dataset.watching = 'true';
                    observer.observe(newMenu, { attributes: true, attributeFilter: ['style'] });
                }
            });
            docObserver.observe(document.body, { childList: true, subtree: true });

            console.log('Context menu: copy & spectate start animations wired up.');
        } else {
            setTimeout(watchContextMenu, 500);
        }
    }

    watchContextMenu();
})();

function init() {
    if (state.initialized) return;
    let attempts = 0;
    const wait = setInterval(() => {
        attempts++;
        const container = document.querySelector('.main-input-btns') || document.querySelector('.main-input-buttons') || document.querySelector('.main-buttons') || document.querySelector('#mainPanel .main-input-btns');

        if (container || attempts > 60) {
            clearInterval(wait);
            if (container) {
                hideButtons();
                createButton();
                createPanel();
                state.initialized = true;

                let savedFont = 'default';
                try { savedFont = GM_getValue('gameFont', 'default'); } catch(e) { savedFont = localStorage.getItem('gameFont') || 'default'; }
                applyFont(savedFont);

                setupKeybindListeners();
                setupRangeListeners();
                setupColorPickers();
                setupFontSelector();

                const savedChatKey = localStorage.getItem('chatToggleHotkey') || 'y';
                const chatToggleBtn = document.getElementById('chat-toggle-key');
                if (chatToggleBtn) {
                    chatToggleBtn.textContent = savedChatKey.toUpperCase();
                }
                setupChatToggle(savedChatKey);

                const savedTabKey = localStorage.getItem('tabInviteHotkey') || 'j';
                const tabInviteBtn = document.getElementById('tab-invite-key');
                if (tabInviteBtn) {
                    tabInviteBtn.textContent = savedTabKey.toUpperCase();
                }

                console.log('✔ Unified Settings with custom UI loaded');
            } else {
                createPanel();
                state.initialized = true;
                console.warn('⚠️ Could not find game button container; panel created but sync may be limited');
            }
        }
    }, 500);
}
init();

(function addCustomBottomText() {
    const checkLinks = setInterval(() => {
        const bottomLinks = document.querySelector('div.main-bottom-links');

        if (bottomLinks) {
            clearInterval(checkLinks);

            const customText = document.createElement('span');
            customText.textContent = 'Made with ❤️ by liliwi';
            customText.style.color = '#fff';
            customText.style.marginTop = '4px';
            customText.style.fontSize = '14px';
            customText.style.fontWeight = '500';

            bottomLinks.insertBefore(customText, bottomLinks.firstChild);

            console.log('✅ Custom text added to bottom links');
        }
    }, 100);

    setTimeout(() => clearInterval(checkLinks), 10000);
})();

(function changeYouTubeLink() {
    const checkLinks = setInterval(() => {
        const bottomLinks = document.querySelector('div.main-bottom-links');

        if (bottomLinks) {
            clearInterval(checkLinks);

            const youtubeLink = bottomLinks.querySelector('a[href*="youtube"]');
            if (youtubeLink) {
                youtubeLink.href = 'https://www.youtube.com/@liliwigota1';
                console.log('✅ YouTube link changed to your channel');
            }
        
        }
    }, 100);

    setTimeout(() => clearInterval(checkLinks), 10000);
})();

if (!localStorage.getItem("changelogShown")) {
    const overlay = document.createElement("div");
    overlay.id = "changelogOverlay";
    document.body.appendChild(overlay);

    const modal = document.createElement("div");
    modal.id = "changelogModal";
    modal.innerHTML = `
            <h2>📝 Changelog v2.0</h2>
            <ul>
                <li>!!!!NEW SETTINGS MENU!!!!</li>
                <li>Removed old custom features menu</li>
                <li>added fonts (might be some problems with the ui for now will change later)</li>
                <li>remade ui again!! (improvements will come) </li>
                <li>You will now need camlan to use this script!</li>
            </ul>
            <button id="closeChangelog">Close</button>
        `;
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
            .settings-tab[data-tab="multibox"] {
        display: none !important;

        `;
    document.head.appendChild(style);

    document.getElementById("closeChangelog").addEventListener("click", () => {
        modal.remove();
        overlay.remove();
        localStorage.setItem("changelogShown", "true");
    });
}
