// ==UserScript==
// @name         Custom UI by liliwi
// @namespace    http://tampermonkey.net/
// @version      3.0
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

(function () {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes bgFade {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        @keyframes textReveal {
            0% {
                opacity: 0;
                transform: translateY(40px) scale(0.9);
                filter: blur(8px);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }
        @keyframes letterStagger {
            0% {
                opacity: 0;
                transform: translateY(60px) rotateX(80deg);
                filter: blur(12px);
            }
            100% {
                opacity: 1;
                transform: translateY(0) rotateX(0);
                filter: blur(0);
            }
        }
        @keyframes glowPulse {
            0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.4); }
            50% { text-shadow: 0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,255,255,0.3); }
        }
        @keyframes fadeOut {
            to { opacity: 0; }
        }
        #liliwi-pro-splash {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: linear-gradient(135deg, #0a0a0a 0%, #111 50%, #000 100%);
            background-size: 300% 300%;
            animation: bgFade 20s ease infinite;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1);
            cursor: default;
        }
        #liliwi-pro-splash.fade-out {
            opacity: 0;
            pointer-events: none;
        }
        .pro-text-container {
            perspective: 1000px;
            text-align: center;
        }
        .pro-line {
            opacity: 0;
            animation: textReveal 1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            font-family: 'Helvetica Neue', 'Arial', sans-serif;
            color: #ffffff;
            letter-spacing: 8px;
            text-transform: uppercase;
            font-weight: 300;
            margin: 0;
        }
        .pro-line-1 {
            font-size: clamp(1.4rem, 4vw, 2.4rem);
            animation-delay: 0.4s;
        }
        .pro-line-2 {
            font-size: clamp(2.2rem, 7vw, 5rem);
            font-weight: 100;
            letter-spacing: 16px;
            animation-delay: 1s;
            animation-duration: 1.8s;
        }
        .pro-letter {
            display: inline-block;
            opacity: 0;
            transform-origin: center bottom;
            animation: letterStagger 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards,
                       glowPulse 4s ease-in-out infinite;
        }
        .skip-hint {
            position: absolute;
            bottom: 50px;
            font-size: 0.9rem;
            font-weight: 300;
            letter-spacing: 3px;
            color: rgba(255,255,255,0.4);
            opacity: 0;
            animation: fadeIn 1s forwards 2.5s;
        }
        @keyframes fadeIn { to { opacity: 1; } }
    `;
    document.head.appendChild(style);

    const splash = document.createElement('div');
    splash.id = 'liliwi-pro-splash';

    const container = document.createElement('div');
    container.className = 'pro-text-container';

    const line1 = document.createElement('p');
    line1.className = 'pro-line pro-line-1';
    line1.textContent = 'Developed by';

    const line2 = document.createElement('p');
    line2.className = 'pro-line pro-line-2';
    const text = 'Liliwi';
    line2.innerHTML = text.split('').map((char, i) =>
        `<span class="pro-letter" style="animation-delay:${1.6 + i * 0.12}s">${char}</span>`
    ).join('');

    const hint = document.createElement('div');
    hint.className = 'skip-hint';
    hint.textContent = 'Click or tap to continue';

    container.appendChild(line1);
    container.appendChild(line2);
    splash.appendChild(container);
    splash.appendChild(hint);
    document.body.appendChild(splash);

    const removeNow = () => {
        splash.classList.add('fade-out');
        setTimeout(() => splash.remove(), 1200);
    };
    splash.addEventListener('click', removeNow);
    splash.addEventListener('touchend', (e) => { e.preventDefault(); removeNow(); });

    setTimeout(() => {
        if (splash.isConnected) {
            splash.classList.add('fade-out');
            setTimeout(() => splash.remove(), 1200);
        }
    }, 4000);

})();


(function() {
    'use strict';

   GM_addStyle(`
/* ===== MAIN PANELS & CONTAINERS ===== */
.main-panel,
#main-right,
#mainPanel,
#leaderboard,
#chat,
#map,
div#main-panel-wrapper,
div#party-panel.ui-pane.interface-color.hud-panel,
#chat-panel,
#leaderboard-panel,
#minimap-panel,
div#main-right.main-divider.main-panel,
div#main-scrimmage.main-panel.interface-color {
    background: rgba(20, 20, 20, 0.95) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4) !important;
}

div#party-panel.ui-pane.interface-color.hud-panel {
    padding-bottom: 10px;
}
.main {margin 0 350px !important;}
.main-panel {
    height: auto !important;
    min-height: unset !important;
    padding-bottom: 15px !important;
}
/* ===== FRIENDS PANEL STYLING ===== */
#main-friends,
.main-left.main-divider.main-panel {
    background: rgba(20, 20, 20, 0.95) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 10px !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4) !important;
    transition: border-color 0.25s ease, box-shadow 0.25s ease !important;
}

#main-friends:hover,
.main-left.main-divider.main-panel:hover {
    border-color: rgba(255,255,255,0.16) !important;
    box-shadow: 0 12px 40px rgba(0,0,0,0.5) !important;
}

/* Friends list items */
#main-friends .friend-item,
.main-left .friend-item {
    background: rgba(28, 28, 28, 0.7) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 8px !important;
    padding: 8px 12px !important;
    margin: 4px 0 !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

#main-friends .friend-item:hover,
.main-left .friend-item:hover {
    background: rgba(45, 45, 45, 0.85) !important;
    border-color: rgba(255,255,255,0.15) !important;
    transform: translateX(4px) scale(1.02) !important;
}

/* Friends panel buttons */
#main-friends button,
.main-left button {
    background: rgba(28, 28, 28, 0.7) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
    border-radius: 8px !important;
    padding: 8px 14px !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    cursor: pointer !important;
}

#main-friends button:hover,
.main-left button:hover {
    background: rgba(45, 45, 45, 0.85) !important;
    border-color: rgba(255,255,255,0.15) !important;
    transform: scale(1.03) !important;
}

/* Friends panel scrollbar */
#main-friends::-webkit-scrollbar,
.main-left::-webkit-scrollbar {
    width: 6px !important;
}

#main-friends::-webkit-scrollbar-track,
.main-left::-webkit-scrollbar-track {
    background: rgba(20,20,20,0.5) !important;
    border-radius: 3px !important;
}

#main-friends::-webkit-scrollbar-thumb,
.main-left::-webkit-scrollbar-thumb {
    background: rgba(100,100,100,0.5) !important;
    border-radius: 3px !important;
    transition: background 0.2s ease !important;
}

#main-friends::-webkit-scrollbar-thumb:hover,
.main-left::-webkit-scrollbar-thumb:hover {
    background: rgba(120,120,120,0.6) !important;
}
/* ===== POPUP PROFILE STYLING ===== */
#popup-profile,
.popup-panel {
    background: linear-gradient(145deg, rgba(20,20,20,0.98) 0%, rgba(15,15,15,0.98) 100%) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    border-radius: 12px !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6) !important;
}

/* Profile header */
#popup-profile .popup-header,
.popup-panel .popup-header {
    background: rgba(30,30,30,0.9) !important;
    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
    padding: 18px 24px !important;
    border-radius: 12px 12px 0 0 !important;
}

/* Profile close button */
#profile-close-btn,
.popup-panel .close-btn {
    background: rgba(50,50,50,0.7) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    color: #fff !important;
    width: 32px !important;
    height: 32px !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    transition: all 0.2s ease !important;
}

#profile-close-btn:hover,
.popup-panel .close-btn:hover {
    background: rgba(70,70,70,0.9) !important;
    border-color: rgba(255,255,255,0.25) !important;
    transform: scale(1.05) !important;
}

/* Profile content area */
#popup-profile .popup-content,
.popup-panel .popup-content {
    background: rgba(18,18,18,0.8) !important;
    padding: 20px !important;
}

/* Profile inputs */
#popup-profile input,
.popup-panel input {
    background: rgba(30,30,30,0.9) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    color: #fff !important;
    padding: 10px 14px !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    transition: all 0.25s ease !important;
}

#popup-profile input:hover,
.popup-panel input:hover {
    border-color: rgba(255,255,255,0.18) !important;
    background: rgba(35,35,35,0.95) !important;
}

#popup-profile input:focus,
.popup-panel input:focus {
    outline: none !important;
    border-color: rgba(255,255,255,0.25) !important;
    background: rgba(38,38,38,1) !important;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.08) !important;
}

/* Profile buttons */
#popup-profile button,
.popup-panel button {
    background: rgba(28, 28, 28, 0.7) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
    border-radius: 8px !important;
    padding: 10px 18px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    cursor: pointer !important;
}

#popup-profile button:hover,
.popup-panel button:hover {
    background: rgba(45, 45, 45, 0.85) !important;
    border-color: rgba(255,255,255,0.15) !important;
    transform: scale(1.03) !important;
}

#popup-profile button:active,
.popup-panel button:active {
    transform: scale(0.98) !important;
}

/* Profile stats/info rows */
#popup-profile .profile-row,
.popup-panel .profile-row {
    background: rgba(25,25,25,0.6) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 8px !important;
    padding: 12px 16px !important;
    margin: 8px 0 !important;
    transition: all 0.2s ease !important;
}

#popup-profile .profile-row:hover,
.popup-panel .profile-row:hover {
    background: rgba(30,30,30,0.7) !important;
    border-color: rgba(255,255,255,0.12) !important;
}

/* Profile labels */
#popup-profile label,
.popup-panel label {
    color: #e0e0e0 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
}

/* Profile scrollbar */
#popup-profile::-webkit-scrollbar,
.popup-panel::-webkit-scrollbar {
    width: 8px !important;
}

#popup-profile::-webkit-scrollbar-track,
.popup-panel::-webkit-scrollbar-track {
    background: rgba(20,20,20,0.5) !important;
    border-radius: 4px !important;
}

#popup-profile::-webkit-scrollbar-thumb,
.popup-panel::-webkit-scrollbar-thumb {
    background: rgba(100,100,100,0.5) !important;
    border-radius: 4px !important;
}

#popup-profile::-webkit-scrollbar-thumb:hover,
.popup-panel::-webkit-scrollbar-thumb:hover {
    background: rgba(120,120,120,0.6) !important;
}
/* ===== ACCOUNT USERNAME POPUP STYLING ===== */
#popup-account-username,
#popup-account-username.popup-panel {
    background: linear-gradient(145deg, rgba(20,20,20,0.98) 0%, rgba(15,15,15,0.98) 100%) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    border-radius: 12px !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6) !important;
    padding: 0 !important;
}

/* Username popup header */
#popup-account-username .popup-header {
    background: rgba(30,30,30,0.9) !important;
    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
    padding: 18px 24px !important;
    border-radius: 12px 12px 0 0 !important;
}

#popup-account-username h2,
#popup-account-username h3 {
    color: #fff !important;
    font-weight: 700 !important;
    margin: 0 !important;
}

/* Username popup content */
#popup-account-username .popup-content {
    background: rgba(18,18,18,0.8) !important;
    padding: 24px !important;
}

/* Username input field */
#popup-account-username input[type="text"],
#popup-account-username input[type="password"] {
    background: rgba(30,30,30,0.9) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    color: #fff !important;
    padding: 12px 16px !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    transition: all 0.25s ease !important;
}

#popup-account-username input:hover {
    border-color: rgba(255,255,255,0.18) !important;
    background: rgba(35,35,35,0.95) !important;
}

#popup-account-username input:focus {
    outline: none !important;
    border-color: rgba(255,255,255,0.25) !important;
    background: rgba(38,38,38,1) !important;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.08) !important;
}

#popup-account-username input::placeholder {
    color: rgba(255,255,255,0.4) !important;
}

/* Username popup buttons */
#popup-account-username button {
    background: rgba(28, 28, 28, 0.7) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
    border-radius: 8px !important;
    padding: 10px 20px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    cursor: pointer !important;
    margin: 4px !important;
}

#popup-account-username button:hover {
    background: rgba(45, 45, 45, 0.85) !important;
    border-color: rgba(255,255,255,0.15) !important;
    transform: scale(1.03) !important;
}

#popup-account-username button:active {
    transform: scale(0.98) !important;
}

/* Primary button (submit/save) */
#popup-account-username button[type="submit"],
#popup-account-username .btn-primary {
    background: rgba(70,70,70,0.8) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
}

#popup-account-username button[type="submit"]:hover,
#popup-account-username .btn-primary:hover {
    background: rgba(85,85,85,0.9) !important;
    border-color: rgba(255,255,255,0.3) !important;
}

/* Close button */
#popup-account-username .close-btn,
#popup-account-username-close {
    background: rgba(50,50,50,0.7) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    color: #fff !important;
    width: 32px !important;
    height: 32px !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    transition: all 0.2s ease !important;
    position: absolute !important;
    top: 18px !important;
    right: 24px !important;
}
/* Clear All button styling */
#clear-all-saved-players {
    width: 100% !important;
    max-width: 100% !important;
    height: 38px !important;
    padding: 10px 16px !important;
    background: rgba(120,50,50,0.7) !important;
    border: 1px solid rgba(255,100,100,0.3) !important;
    color: #ffb3b3 !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    transition: all 0.25s ease !important;
    margin-bottom: 16px !important;
}

#clear-all-saved-players:hover {
    background: rgba(140,60,60,0.85) !important;
    border-color: rgba(255,120,120,0.5) !important;
    transform: scale(1.02) !important;
}


#popup-account-username .close-btn:hover,
#popup-account-username-close:hover {
    background: rgba(70,70,70,0.9) !important;
    border-color: rgba(255,255,255,0.25) !important;
    transform: scale(1.05) !important;
}

/* Error/success messages */
#popup-account-username .error-message {
    background: rgba(120,50,50,0.3) !important;
    border: 1px solid rgba(255,100,100,0.3) !important;
    color: #ffb3b3 !important;
    padding: 10px 14px !important;
    border-radius: 8px !important;
    margin: 10px 0 !important;
}

#popup-account-username .success-message {
    background: rgba(50,120,50,0.3) !important;
    border: 1px solid rgba(100,255,100,0.3) !important;
    color: #b3ffb3 !important;
    padding: 10px 14px !important;
    border-radius: 8px !important;
    margin: 10px 0 !important;
}

/* Labels */
#popup-account-username label {
    color: #e0e0e0 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    margin-bottom: 8px !important;
    display: block !important;
}




div#main-right.main-divider.main-panel,
div#main-scrimmage.main-panel.interface-color {
    height: 500px !important;
}

div#main-scrimmage.main-panel.interface-color {
    height: 470px !important;
}
.main  {
    position: absolute;
    inset: 6% 0 0;
    width: 1020px;
    height: 470px;
    padding: 10px;
        z-index: 2;
        margin: 0 !important;
        }

.main-panel-wrapper {
    margin-top: 110px;
    margin-left: 640px !important;
}
div.options-container {
    background: transparent !important;
    height: 458px !important;
}

div#main-options.main-right-panel,
table.options-container,
div.main-mid.menu-sub-bg,
div.title-text.menu-title,
div#server-content,
tbody#servers-body-eu {
    background: transparent !important;
}

div#server-content {
    height: 429px !important;
}

/* ===== INPUTS & BUTTONS ===== */
#name-box {
    background: rgba(30,30,30) !important;
    color: white !important;
    border-radius: 8px !important;
}

name-box.gota.input {
    background: rgba(30, 30, 30, 0.8) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
}

.gota-btn,
button.gota-btn.bottom-btn,
.gota-menu-btn {
    background: rgba(28, 28, 28, 0.7) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
    border-radius: 8px !important;
}

.gota-btn:hover,
button.gota-btn.bottom-btn:hover,
.gota-menu-btn:hover {
    background: rgba(45, 45, 45, 0.85) !important;

    transform: scale(1.03) !important;
}
.xp-meter {
    height: 6px;
    width: 100%;
    margin-top: 10px;
    align-self: center;
    position: relative;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    overflow: hidden;
}

.xp-meter > span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #6b6b6b, #8a8a8a);
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    transition: width 0.6s ease-in-out;
}
.material-icons {
    font-family: 'Material Icons' !important;
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
}

#account-actions .gota-btn {
    width: 50px !important;
    height: 30px;
    border-radius: 8px !important;
    background: rgba(20,20,20,0.6) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
    font-size: 14px !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

button#btn-updateSP.gota-btn {
    border: 1px solid rgba(255,255,255,0.1) !important;
    background: rgba(20,20,20,0.6) !important;
}

.play-spec-wrapper #btn-play,
.play-spec-wrapper #btn-spec {
    height: 50px !important;
    width: 130px !important;
    margin-top: 10px !important;
}

.main-input-btns {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 8px !important;
}

/* ===== SERVER & TABLE STYLES ===== */
#main-right th {
    background: rgba(20, 20, 20) !important;
    color: #fff !important;
}

#main-right tr:hover {
    background: rgba(255,255,255,0.08) !important;
}

#main-right td {
    padding: 5px !important;
}

th.server-table-name,
th.server-table-players,
th.server-table-mode {
    display: none !important;
}

.server-table tbody {
    overflow: unset !important;
    background: rgba(20,20,20) !important;
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

#main-social {
margin-left: 640px !important;}

server-body-na,
div#social-friends.menu-sub-bg {
    background: rgba(20,20,20) !important;
}

/* ===== SERVER TABS ===== */
li#server-tab-eu.server-tab,
li#server-tab-na.server-tab {
    background: linear-gradient(135deg, rgba(45, 45, 48, 0.75), rgba(35, 35, 40, 0.65)) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    color: #b8b8b8 !important;
    width: auto !important;
    min-width: 90px !important;
    padding: 6px 12px !important;
    margin: 0 4px !important;
    display: inline-block !important;
    text-align: center !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    position: relative !important;
    overflow: hidden !important;
    font-weight: 500 !important;
    letter-spacing: 0.3px !important;
}

li#server-tab-eu.server-tab::before,
li#server-tab-na.server-tab::before {
    content: '' !important;
    position: absolute !important;
    top: 0 !important;
    left: -100% !important;
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent) !important;
    transition: left 0.5s ease !important;
}

li#server-tab-eu.server-tab:hover,
li#server-tab-na.server-tab:hover {
    background: linear-gradient(135deg, rgba(60, 60, 65, 0.85), rgba(50, 50, 58, 0.75)) !important;
    border-color: rgba(255,255,255,0.18) !important;
    color: #ffffff !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12) !important;
}

li#server-tab-eu.server-tab:hover::before,
li#server-tab-na.server-tab:hover::before {
    left: 100% !important;
}

li.server-active {
    background: linear-gradient(135deg, rgba(90,90,255,0.4), rgba(70,70,235,0.35)) !important;
    border-color: rgba(120,120,255,0.6) !important;
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(80,80,255,0.3), 0 0 20px rgba(80,80,255,0.15), inset 0 1px 0 rgba(255,255,255,0.15) !important;
    font-weight: 600 !important;
}

li.server-active::after {
    content: '' !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: 70% !important;
    height: 2px !important;
    background: linear-gradient(90deg, transparent, rgba(150,150,255,0.8), transparent) !important;
    border-radius: 2px !important;
}

ul#server-tabs {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 4px !important;
    margin: 0 auto !important;
    width: fit-content !important;
    position: relative !important;
}
.server-table {
display: block;
}

.server-table-name {
width: 120px;
white-space: nowrap;
text-align: left;
}

.server-table-players {
width: 100px;
white-space: nowrap;
text-align: center;
}

.server-table-mode {
width: 150px;
white-space: nowrap;
text-align: right;
}

.server-table thead {
display: none;
}

.server-table tbody {
display: flex;
overflow: auto;
background-color: transparent !important;
border-collapse: collapse;
flex-direction: column;
gap: 1px;
}

.server-table tbody::-webkit-scrollbar {
width: 5px;
}

.server-table tbody::-webkit-scrollbar-thumb {
background-color: #414141;
border-radius: 2px;
}

.server-row {
cursor: pointer;
height: 25px;
border-radius: 5px;
display: flex;
align-items: center;
padding-inline: 5px;
transition: all 0.1s ease;
}

.server-row:hover:not(.server-selected) {
background-color: #35353547;
}

.account-server {
background-color: rgb(246, 115, 115, 0.7);
}

.server-selected {
background-color: #353535;
}

/* ===== CONTEXT MENU ===== */
ul.context-list {
    background: rgba(22,22,22,0.8) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    box-shadow: none !important;
    pointer-events: none;
    transition: opacity 0.25s ease;
}

ul.context-list.active {
    opacity: 1;
    pointer-events: auto;
}

.context-list li {
    padding: 6px 10px !important;
    border-radius: 6px !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.context-list li:hover {
    background: rgba(255, 255, 255, 0.08) !important;
}

/* ===== UTILITY BUTTONS ===== */
.x-small-btn {
    width: auto !important;
    min-width: 65px !important;
    height: 22px !important;
    border-radius: 6px !important;
    font-size: 12px !important;
    padding: 0 6px !important;
    background: rgba(20,20,20,0.6) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #fff !important;
    cursor: pointer !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
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

/* ===== CHAT & LEADERBOARD ===== */
#leaderboard {
    font-size: 13px !important;
    color: #fff !important;
}

table.chat-table {
    font-size: 13px !important;
    color: #fff !important;
    background: transparent !important;
}

/* ===== MAP & MINIMAP ===== */
#map {
    background: rgba(25,25,25,0.3) !important;
}

#minimap-canvas {
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    background: url("") no-repeat center center;
    background-size: cover;
}

/* ===== HIDDEN ELEMENTS ===== */
div.policyLinks.interface-color,
div#main-rb.main-panel,
.main-bottom-right,
.main-bottom.interface-color,
li#menu-block.contest-action,
li#menu-block,
li#server-tab-ap.server-tab,
#btn-servers.gota-btn.bottom-btn,
#btn-options.gota-btn.bottom-btn,
#btn-hotkeys.gota-btn.bottom-btn,
#btn-themes.gota-btn.bottom-btn,
#btn-cellpanel.gota-btn.bottom-btn {
    display: none !important;
}

/* ===== POPUP & PROFILE ===== */
div#popup-profile.popup-panel,
button#profile-close-btn.gota-btn {
    background: rgba(20,20,20) !important;
}

div.main-bottom-links {
    padding-top: 178px !important;
}

.x-show {
    margin-top: 100px !important;
}

/* ===== GLOBAL FONT ===== */
* {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
}
#chat-tab-container {
list-style-type: none;
display: flex;
font-size: 14pt;
pointer-events: auto;
}

.chat-tab {
text-align: center;
padding: 0 10px;
border-right: 1px solid;
opacity: 0.6;
border-color: #ffffff1c !important;
}

.chat-tab:hover {
cursor: pointer;
}

.chat-tab span {
display: block;
padding: 2px 0;
}

.chat-active-tab {
opacity: 1;
}

#chat-components {
display: flex;
border-top: 1px solid #ffffff0d !important;
}

#chat-container {
display: block;
width: 100%;
height: calc(100% - 58px);
border-color: rgb(255, 255, 255, 0.2);
word-break: break-word;
background-color: rgb(0, 0, 0, 0.7);
pointer-events: auto;
user-select: auto;
}

.chat-inner-container {
height: 100%;
width: 100%;
overflow-y: auto;
overflow-x: hidden;
}

.chat-inner-container::-webkit-scrollbar {
width: 5px;
}

.chat-inner-container::-webkit-scrollbar-thumb {
background-color: #414141;
border-radius: 2px;
}

#chat-resize {
position: absolute;
width: 15px;
height: 15px;
background-color: #50505085;
border-radius: 0 0 0 100%;
right: 0;
top: 0;
pointer-events: auto;
cursor: ne-resize;
}

#chat-input {
background-color: #29292999;
color: #ffffff;
border: none;
border-right: 1px solid #474747;
font-size: 14px;
flex: 1;
height: 25px;
text-indent: 5px;
user-select: auto;
pointer-events: auto;
}

#chat-emote-btn {
background-color: #29292999;
background-position: center;
background-size: 20px 20px;
background-repeat: no-repeat;
width: 25px;
border: none;
pointer-events: auto;
user-select: auto;
transition: all 0.1s ease;
filter: grayscale(0.4);
border-radius: 1000px;
}

#chat-emote-btn:hover {
background-size: 22px 22px;
filter: grayscale(0);
}

#chat-table {
table-layout: fixed;
}

.chat-text {
overflow-wrap: break-word;
pointer-events: none;
user-select: auto;
position: relative;
display: inline-block;
z-index: 1;
}

.chat-table td {
display: table-cell;
vertical-align: top;
font-size: 14px;
}

.chat-table span {
vertical-align: top;
}

/* ===== UNIFIED SETTINGS BUTTON ===== */
#unified-settings-btn {
    width: 270px !important;
    height: 40px !important;
    border-radius: 10px !important;
    background: linear-gradient(135deg, rgba(60,60,60,0.3) 0%, rgba(50,50,50,0.3) 100%) !important;
    backdrop-filter: blur(10px) !important;
    border: 2px solid rgba(140,140,140,0.3) !important;
    color: #fff !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 auto !important;
    cursor: pointer !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

#unified-settings-btn:hover {
    background: linear-gradient(135deg, rgba(80,80,80,0.4) 0%, rgba(70,70,70,0.4) 100%) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(255,255,255,0.15) !important;
    border-color: rgba(160,160,160,0.5) !important;
}

#unified-settings-btn:active {
    transform: translateY(0px) !important;
}

/* ===== SETTINGS PANEL OVERLAY ===== */
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
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

#unified-settings-overlay.show {
    opacity: 1 !important;
    background: rgba(0,0,0,0.75) !important;
    backdrop-filter: blur(8px) !important;
    pointer-events: auto !important;
}

body > #clr-picker {
    z-index: 10002 !important;
    position: fixed !important;
}

#unified-settings-overlay.show ~ #clr-picker {
    z-index: 10002 !important;
    position: fixed !important;
}

/* ===== SETTINGS PANEL ===== */
#unified-settings-panel {
    background: linear-gradient(145deg, rgba(20,20,20,0.98) 0%, rgba(15,15,15,0.98) 100%) !important;
    border: 2px solid rgba(140,140,140,0.25) !important;
    border-radius: 14px !important;
    width: 90% !important;
    max-width: 900px !important;
    max-height: 85vh !important;
    overflow: hidden !important;
    opacity: 0 !important;
    transform: scale(0.9) translateY(30px) !important;
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7) !important;
}

#unified-settings-overlay.show #unified-settings-panel {
    opacity: 1 !important;
    transform: scale(1) translateY(0) !important;
}

/* ===== HEADER ===== */
.settings-header {
    padding: 18px 24px !important;
    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    background: rgba(30,30,30,0.8) !important;
}

.settings-header h2 {
    margin: 0 !important;
    font-size: 22px !important;
    color: #fff !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
}

.settings-close-btn {
    background: rgba(80,80,80,0.4) !important;
    border: 2px solid rgba(140,140,140,0.3) !important;
    color: #fff !important;
    width: 32px !important;
    height: 32px !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.settings-close-btn:hover {
    background: rgba(100,100,100,0.5) !important;
    transform: rotate(90deg) !important;
    border-color: rgba(160,160,160,0.5) !important;
}


/* ===== SEARCH INPUT ===== */
#settings-search-input {
    background: rgba(40,40,40,0.8) !important;
    border: 2px solid rgba(100,100,100,0.3) !important;
    color: #fff !important;
    padding: 8px 12px !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    width: 280px !important;
    outline: none !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

#settings-search-input:focus {
    border-color: rgba(160,160,160,0.7) !important;
    box-shadow: 0 0 0 3px rgba(100,100,100,0.15) !important;
}

#settings-search-input::placeholder {
    color: rgba(255,255,255,0.4) !important;
}

@keyframes searchPulse {
    0%, 100% { background: rgba(120,120,120,0.12) !important; }
    50% { background: rgba(140,140,140,0.25) !important; }
}

/* ===== TABS ===== */
.settings-tabs {
    display: flex !important;
    gap: 8px !important;
    padding: 12px 20px !important;
    background: rgba(18,18,18,0.8) !important;
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
    overflow-x: auto !important;
    justify-content: center !important;
}

.settings-tabs::-webkit-scrollbar {
    height: 6px !important;
}

.settings-tabs::-webkit-scrollbar-track {
    background: rgba(20,20,20,0.5) !important;
    border-radius: 3px !important;
}

.settings-tabs::-webkit-scrollbar-thumb {
    background: rgba(100,100,100,0.5) !important;
    border-radius: 3px !important;
}

.settings-tab {
    padding: 8px 16px !important;
    background: rgba(40,40,40,0.6) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 8px !important;
    color: #999 !important;
    cursor: pointer !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    white-space: nowrap !important;
    font-size: 14px !important;
    font-weight: 600 !important;
}

.settings-tab:hover {
    background: rgba(55,55,55,0.7) !important;
    color: #fff !important;
    border-color: rgba(255,255,255,0.12) !important;
}

.settings-tab.active {
    background: rgba(90,90,90,0.5) !important;
    border-color: rgba(140,140,140,0.4) !important;
    color: #fff !important;
}

/* ===== CONTENT ===== */
.settings-content {
    padding: 16px 20px !important;
    max-height: calc(85vh - 160px) !important;
    overflow-y: auto !important;
    background: rgba(15,15,15,0.5) !important;
}

.settings-content::-webkit-scrollbar {
    width: 8px !important;
}

.settings-content::-webkit-scrollbar-track {
    background: rgba(20,20,20,0.6) !important;
    border-radius: 4px !important;
}

.settings-content::-webkit-scrollbar-thumb {
    background: rgba(100,100,100,0.5) !important;
    border-radius: 4px !important;
}

.settings-content::-webkit-scrollbar-thumb:hover {
    background: rgba(120,120,120,0.6) !important;
}

.tab-content {
    display: none !important;
}

.tab-content.active {
    display: block !important;
    animation: fadeIn 0.3s ease !important;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===== SETTING GROUPS ===== */
.setting-group {
    background: rgba(28,28,28,0.6) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 10px !important;
    padding: 16px 18px !important;
    margin-bottom: 16px !important;
    transition: border-color 0.2s ease !important;
}

.setting-group:hover {
    border-color: rgba(255,255,255,0.12) !important;
}

.setting-group h3 {
    margin: 0 0 12px 0 !important;
    color: #fff !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    letter-spacing: 0.3px !important;
    padding-bottom: 8px !important;
    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
}

/* ===== SETTING ROWS ===== */
.setting-row {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 8px 0 !important;
    border-bottom: 1px solid rgba(255,255,255,0.04) !important;
}

.setting-row:last-child {
    border-bottom: none !important;
}

.setting-label {
    color: #ddd !important;
    font-size: 14px !important;
    font-weight: 500 !important;
}

/* ===== CHECKBOX (TOGGLE STYLE) ===== */
.setting-control input[type="checkbox"] {
    appearance: none !important;
    -webkit-appearance: none !important;
    width: 46px !important;
    height: 24px !important;
    background: rgba(60,60,60,0.6) !important;
    border: 2px solid rgba(100,100,100,0.4) !important;
    border-radius: 10px !important;
    cursor: pointer !important;
    position: relative !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    outline: none !important;
}

.setting-control input[type="checkbox"]::before {
    content: '' !important;
    position: absolute !important;
    width: 16px !important;
    height: 16px !important;
    border-radius: 50% !important;
    top: 2px !important;
    left: 2px !important;
    background: rgba(100,100,100,0.8) !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.setting-control input[type="checkbox"]:checked {
    background: rgba(120,120,120,0.8) !important;
    border-color: rgba(140,140,140,0.6) !important;
}

.setting-control input[type="checkbox"]:checked::before {
    left: 24px !important;
    background: rgba(220,220,220,1) !important;
}

.setting-control input[type="checkbox"]:hover {
    border-color: rgba(140,140,140,0.5) !important;
}

/* ===== OTHER INPUTS ===== */
.setting-control select,
.setting-control input[type="text"] {
    background: rgba(40,40,40,0.8) !important;
    border: 2px solid rgba(100,100,100,0.3) !important;
    color: #fff !important;
    padding: 8px 12px !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    transition: border-color 0.2s ease !important;
}

.setting-control select:hover,
.setting-control input[type="text"]:hover {
    border-color: rgba(140,140,140,0.4) !important;
}

.setting-control select:focus,
.setting-control input[type="text"]:focus {
    outline: none !important;
    border-color: rgba(160,160,160,0.6) !important;
}

.setting-control input[type="range"] {
    width: 160px !important;
    accent-color: rgb(120,120,120) !important;
    cursor: pointer !important;
}

.range-value {
    display: inline-block !important;
    min-width: 50px !important;
    margin-left: 10px !important;
    color: #fff !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    background: rgba(50,50,50,0.8) !important;
    border: 2px solid rgba(120,120,120,0.3) !important;
    padding: 4px 8px !important;
    border-radius: 6px !important;
    text-align: center !important;
    transition: border-color 0.2s ease !important;
}

.range-value:hover {
    border-color: rgba(140,140,140,0.5) !important;
}


.clr-field button {
display: none;
}
.clr-field {
    display: inline-block !important;
}

.range-value:focus {
    outline: none !important;
    border-color: rgba(160,160,160,0.6) !important;
}

/* ===== KEYBIND BUTTONS ===== */
.keybinds-btn {
    background: rgba(60,60,60,0.8) !important;
    border: 2px solid rgba(120,120,120,0.3) !important;
    color: #fff !important;
    padding: 8px 16px !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    min-width: 80px !important;
    text-align: center !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-weight: 600 !important;
    font-size: 13px !important;
}

.keybinds-btn:hover {
    background: rgba(75,75,75,0.9) !important;
    border-color: rgba(140,140,140,0.5) !important;
}

.keybinds-btn.listening {
    background: rgba(120,120,120,0.7) !important;
    border-color: rgba(160,160,160,0.7) !important;
    animation: pulse 1.5s ease-in-out infinite !important;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

/* ===== COLOR PICKER ===== */
.setting-control input[data-coloris],
#unified-settings-panel input[data-coloris] {
    width: 80px !important;
    height: 40px !important;
    border-radius: 8px !important;
    border: 2px solid rgba(120,120,120,0.4) !important;
    cursor: pointer !important;
    padding: 0 !important;
    margin: 0 !important;
    font-size: 0px !important;
    text-indent: -9999px !important;
    color: transparent !important;
    transition: border-color 0.2s ease !important;
    appearance: none !important;
    -webkit-appearance: none !important;
}


.setting-control input[data-coloris]::-webkit-color-swatch-wrapper {
    padding: 0 !important;
}

.setting-control input[data-coloris]::-webkit-color-swatch {
    border: none !important;
    border-radius: 6px !important;
}


.setting-control input[data-coloris]:hover {
    border-color: rgba(140,140,140,0.6) !important;
}

.setting-control input[data-coloris]:focus {
    outline: none !important;
    border-color: rgba(160,160,160,0.7) !important;
}

/* ===== UTILITY BUTTONS ===== */
.x-small-btn {
    width: auto !important;
    min-width: 65px !important;
    height: 26px !important;
    border-radius: 7px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    padding: 0 10px !important;
    background: rgba(60,60,60,0.7) !important;
    border: 2px solid rgba(120,120,120,0.3) !important;
    color: #fff !important;
    cursor: pointer !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.x-small-btn:hover {
    background: rgba(80,80,80,0.8) !important;
    border-color: rgba(140,140,140,0.5) !important;
}

.x-small-del {
    background: rgba(80,50,50,0.7) !important;
    border-color: rgba(120,80,80,0.4) !important;
}

.x-small-del:hover {
    background: rgba(100,60,60,0.8) !important;
    border-color: rgba(140,90,90,0.6) !important;
}

/* ===== LARGE UPDATE BUTTON ===== */
#btn-updateSP-custom {
    width: 100% !important;
    max-width: 350px !important;
    height: 42px !important;
    padding: 10px 18px !important;
    background: rgba(90,90,90,0.5) !important;
    border: 2px solid rgba(140,140,140,0.4) !important;
    color: #fff !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    font-weight: 700 !important;
    font-size: 15px !important;
    letter-spacing: 0.5px !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    margin: 0 auto !important;
    display: block !important;
}

#btn-updateSP-custom:hover {
    background: rgba(110,110,110,0.6) !important;
    border-color: rgba(160,160,160,0.5) !important;
    transform: translateY(-2px) !important;
}

/* ===== FONT PREVIEW ===== */
#fontPreview {
    padding: 16px !important;
    background: rgba(40,40,40,0.7) !important;
    border: 2px solid rgba(120,120,120,0.3) !important;
    border-radius: 8px !important;
    color: #fff !important;
    font-size: 18px !important;
}

/* ===== SAVED PLAYERS LIST ===== */
#saved-players-list {
    margin-top: 12px !important;
}

#saved-players-list > div {
    background: rgba(25,25,25,0.5) !important;
    border-radius: 8px !important;
    padding: 10px !important;
}

/* ===== SEARCH HIGHLIGHTING ===== */
.setting-row.search-match {
    background: rgba(120,120,120,0.12) !important;
    border-left: 3px solid rgba(140,140,140,0.6) !important;
    padding-left: 12px !important;
    margin-left: -4px !important;
    border-radius: 6px !important;
}

.setting-row.search-hidden,
.setting-group.search-hidden {
    display: none !important;
}

.search-no-results {
    text-align: center !important;
    padding: 30px 20px !important;
    color: rgba(160,160,160,0.6) !important;
    font-size: 15px !important;
    display: none !important;
}

.search-no-results.visible {
    display: block !important;
}

.setting-label mark,
.setting-group h3 mark {
    background: rgba(140,140,140,0.3) !important;
    color: #fff !important;
    padding: 2px 4px !important;
    border-radius: 3px !important;
    font-weight: 700 !important;
}

/* ===== MISC ===== */
#main-servers {
    display: block !important;
    visibility: visible !important;
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
        { id: 'options', label: 'Options' },
        { id: 'hotkeys', label: 'Hotkeys' },
        { id: 'themes', label: 'Themes' },
        { id: 'cellpanel', label: 'Cell Panel' },
        { id: 'customfeatures', label: 'Custom Features' }
    ],
    hiddenButtons: ['#btn-options', '#btn-hotkeys', '#btn-themes', '#btn-cellpanel']
};

const state = { isOpen: false, initialized: false, listeningForKey: false };

function saveColorSettings() {
    const colors = {};
    document.querySelectorAll('#unified-settings-panel input[type="color"], #unified-settings-panel input[data-coloris]').forEach(inp => {
        if (inp.id) {
            colors[inp.id] = inp.value;
            
        }
    });
    try {
        GM_setValue('savedColors', JSON.stringify(colors));
    } catch(e) {
        localStorage.setItem('savedColors', JSON.stringify(colors));
     
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
    btn.innerHTML = 'Settings';
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
            <h2>Settings</h2>
            <input type="text" id="settings-search-input" placeholder="🔍 Search settings..." />
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
                <div class="setting-row"><span class="setting-label">Split</span><div class="setting-control"><button class="keybinds-btn" data-key="kSplit">SPACE</button></div></div>
                <div class="setting-row"><span class="setting-label">Linesplit</span><div class="setting-control"><button class="keybinds-btn" data-key="kLinesplit">C</button></div></div>
                <div class="setting-row"><span class="setting-label">Double Split (4x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kDoubleSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Triple Split (8x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kTripleSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Quad Split (16x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kQuadSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Penta Split (32x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kPentaSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Hexa Split (64x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kHexaSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Septi Split (128x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kSeptiSplit">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Octo Split (256x)</span><div class="setting-control"><button class="keybinds-btn" data-key="kOctoSplit">-</button></div></div>
            </div>

            <div class="setting-group">
                <h3>Freeze Mouse</h3>
                <div class="setting-row"><span class="setting-label">Freeze Mouse (Toggle)</span><div class="setting-control"><button class="keybinds-btn" data-key="kFreezeMouse">S</button></div></div>
                <div class="setting-row"><span class="setting-label">Freeze Mouse (Hold)</span><div class="setting-control"><button class="keybinds-btn" data-key="kFreezeMouseHold">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Double Split Freeze Hold</span><div class="setting-control"><button class="keybinds-btn" data-key="kDoubleFreezeHold">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Triple Split Freeze Hold</span><div class="setting-control"><button class="keybinds-btn" data-key="kTripleFreezeHold">-</button></div></div>
            </div>

            <div class="setting-group">
                <h3>Zoom Levels</h3>
                <div class="setting-row"><span class="setting-label">Zoom Level 1</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom1">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 2</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom2">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 3</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom3">F5</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 4</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom4">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 5</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom5">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 6</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom6">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 7</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom7">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 8</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom8">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 9</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom9">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Zoom Level 10</span><div class="setting-control"><button class="keybinds-btn" data-key="kZoom10">-</button></div></div>
            </div>

            <div class="setting-group">
                <h3>Option Toggles</h3>
                <div class="setting-row"><span class="setting-label">Hide Food</span><div class="setting-control"><button class="keybinds-btn" data-key="kHideFood">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Hide Chat</span><div class="setting-control"><button class="keybinds-btn" data-key="kHideChat">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Auto Respawn</span><div class="setting-control"><button class="keybinds-btn" data-key="kAutoRespawn">-</button></div></div>
                <div class="setting-row"><span class="setting-label">Cycle Names</span><div class="setting-control"><button class="keybinds-btn" data-key="kCycleNames">N</button></div></div>
                <div class="setting-row"><span class="setting-label">Cycle Masses</span><div class="setting-control"><button class="keybinds-btn" data-key="kCycleMasses">M</button></div></div>
                <div class="setting-row"><span class="setting-label">Cycle Skins</span><div class="setting-control"><button class="keybinds-btn" data-key="kCycleSkins">K</button></div></div>
            </div>

            <div class="setting-group">
                <h3>General Keybinds</h3>
                <div class="setting-row"><span class="setting-label">Eject Mass</span><div class="setting-control"><button class="keybinds-btn" data-key="kEjectMass">E</button></div></div>
                <div class="setting-row"><span class="setting-label">Context Menu</span><div class="setting-control"><button class="keybinds-btn" data-key="kContextMenu">MOUSE3</button></div></div>
                <div class="setting-row"><span class="setting-label">Toggle Spectate</span><div class="setting-control"><button class="keybinds-btn" data-key="kToggleSpec">Q</button></div></div>
            </div>
        `;
}

function getThemesHTML() {
    return `
            <div class="setting-group">
                <h3>Theme Toggle</h3>
                <div class="setting-row"><span class="setting-label">Enable Custom Theme</span><div class="setting-control"><input type="checkbox" id="cThemeEnabled"></div></div>
                <div class="setting-row"><span class="setting-label">Disable Event Theme</span><div class="setting-control"><input type="checkbox" id="cDisableEventSkins"></div></div>
            </div>

            <div class="setting-group">
                <h3>Map & Background</h3>
                <div class="setting-row"><span class="setting-label">Map Background URL</span><div class="setting-control"><input type="text" id="iMapBackground" placeholder="https://example.png" style="width:300px"></div></div>
                <div class="setting-row"><span class="setting-label">Game Background Color</span><div class="setting-control"><input type="text" id="uiGameBackgroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Game Border Color</span><div class="setting-control"><input type="text" id="uiGameBorderColor" data-coloris></div></div>
                <div class="setting-row">
                    <span class="setting-label">Border Size</span>
                    <div class="setting-control">
                        <input type="range" id="rBorderSize" min="1" max="256" value="64" step="1">
                        <input type="number" class="range-value" data-range="rBorderSize" min="1" max="256" value="64">
                    </div>
                </div>
                <div class="setting-row">
                    <span class="setting-label">Background Opacity</span>
                    <div class="setting-control">
                        <input type="range" id="rBackgroundOpacity" min="0" max="1" value="1" step="0.01">
                        <input type="number" class="range-value" data-range="rBackgroundOpacity" min="0" max="1" value="1" step="0.01">
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>Interface Colors</h3>
                <div class="setting-row"><span class="setting-label">Foreground Color</span><div class="setting-control"><input type="text" id="uiForegroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Background Color</span><div class="setting-control"><input type="text" id="uiBackgroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Border Color</span><div class="setting-control"><input type="text" id="uiBorderColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Menu Background</span><div class="setting-control"><input type="text" id="uiMenuBackgroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Menu Title Background</span><div class="setting-control"><input type="text" id="uiMenuTitleBackgroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Menu Sub Background</span><div class="setting-control"><input type="text" id="uiMenuSubBackgroundColor" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Menu Sub Background 2</span><div class="setting-control"><input type="text" id="uiMenuSubBackground2Color" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Button Color</span><div class="setting-control"><input type="text" id="uiButtonColor" data-coloris></div></div>
            </div>

            <div class="setting-group">
                <h3>Mouse Tracer</h3>
                <div class="setting-row"><span class="setting-label">Tracer Color & Opacity</span><div class="setting-control"><input type="text" id="uiTracerColor" data-coloris></div></div>
                <div class="setting-row">
                    <span class="setting-label">Tracer Width</span>
                    <div class="setting-control">
                        <input type="range" id="rTracerWidth" min="0.5" max="10" value="2" step="0.5">
                        <input type="number" class="range-value" data-range="rTracerWidth" min="0.5" max="10" value="2" step="0.5">
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>Pastel Mode</h3>
                <div class="setting-row"><span class="setting-label">Enable Pastel Mode</span><div class="setting-control"><input type="checkbox" id="cPastelMode"></div></div>
                <div class="setting-row">
                    <span class="setting-label">Pastel Intensity</span>
                    <div class="setting-control">
                        <input type="range" id="rPastelIntensity" min="0" max="100" value="50" step="1">
                        <input type="number" class="range-value" data-range="rPastelIntensity" min="0" max="100" value="50">
                    </div>
                </div>
            </div>

            <div class="setting-group">
                <h3>Interface Highlights</h3>
                <div class="setting-row"><span class="setting-label">Leaderboard Highlight (Self)</span><div class="setting-control"><input type="text" id="uiLeaderboardHighlightSelf" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Leaderboard Highlight (Party)</span><div class="setting-control"><input type="text" id="uiLeaderboardHighlightParty" data-coloris></div></div>
                <div class="setting-row"><span class="setting-label">Party Leader Color</span><div class="setting-control"><input type="text" id="uiPartyLeaderColor" data-coloris></div></div>
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
                    <button class="keybinds-btn" id="chat-toggle-key" data-custom="chatToggle">Y</button>
                </div>
            </div>
        </div>


        <div class="setting-group">
            <h3>Tab Invite</h3>
            <div class="setting-row">
                <span class="setting-label">Tab Invite Hotkey</span>
                <div class="setting-control">
                    <button class="keybinds-btn" id="tab-invite-key" data-custom="tabInvite">J</button>
                </div>
            </div>
            <p style="color: #aaa; font-size: 12px; margin-top: 10px;">Automatically invites and accepts party invites from another tab.</p>
        </div>

      <div class="setting-group">
            <h3>Quick Add Player</h3>
            <p style="color: #bbb; font-size: 13px; margin-bottom: 12px;">As an example liliwi [sasa] and then pressing on both with save it seperatly REMEMBER TO USE []</p>
            <div class="setting-row">
                <span class="setting-label">Input</span>
                <div class="setting-control">
                    <input type="text" id="quick-player-input" placeholder="Enter name/skin..." style="width:300px;">
                </div>
            </div>
            <div class="setting-row">

                <span class="setting-label"></span>
                <div class="setting-control" style="display:flex; gap:10px;">
                    <button id="save-name-btn" class="x-small-btn" style="min-width:90px;">Save Name</button>
                    <button id="save-skin-btn" class="x-small-btn" style="min-width:90px;">Save Skin</button>
                    <button id="save-both-btn" class="x-small-btn" style="min-width:90px;">Save Both</button>
                </div>
            </div>
        </div>

        <div class="setting-group">
            <h3>Saved Players</h3>
            <p style="color: #bbb; font-size: 13px; margin-bottom: 12px;">Right-click players in-game and select "Copy" to save them, or use Quick Add above.</p>
            <button id="clear-all-saved-players">Clear All</button>
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
            const gameInput = findGameElement(ourInput.id);

            if (gameInput) {
                let isUpdating = false;

                const applyPersistentStyle = (color) => {
                    if (isUpdating) return;
                    isUpdating = true;

                    let hexColor = color;
                    if (color.startsWith('rgba') || color.startsWith('rgb')) {
                        hexColor = rgbaToHex(color);
                    }

                    const style =
                          `background: ${hexColor} !important; ` +
                          `background-color: ${hexColor} !important; ` +
                          `width: 80px !important; ` +
                          `height: 40px !important; ` +
                          `border-radius: 8px !important; ` +
                          `border: 2px solid rgba(120,120,120,0.4) !important; ` +
                          `cursor: pointer !important; ` +
                          `padding: 5px !important; ` +
                          `margin: 0 !important; ` +
                          `font-size: 0px !important; ` + // Hide the text
                          `text-indent: -9999px !important; ` + // Hide any text
                          `color: transparent !important; ` + // Make text transparent
                          `box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;`;

                    ourInput.setAttribute('style', style);
                    ourInput.value = hexColor;

                    setTimeout(() => { isUpdating = false; }, 50);
                };

                const updateOurColor = (newColor) => {
                    let hexColor = newColor;
                    if (newColor.startsWith('rgba') || newColor.startsWith('rgb')) {
                        hexColor = rgbaToHex(newColor);
                    }
                    ourInput.value = hexColor;
                    applyPersistentStyle(hexColor);
                    saveColorSettings();
                };

                if (gameInput.value) {
                    updateOurColor(gameInput.value);
                }

                let lastValue = gameInput.value;

                ['input', 'change'].forEach(eventType => {
                    gameInput.addEventListener(eventType, () => {
                        const newValue = gameInput.value;
                        if (newValue && newValue !== lastValue) {
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

                    if (ourInput.value && (ourInput.value.startsWith('#') || ourInput.value.startsWith('rgb'))) {
                        applyPersistentStyle(ourInput.value);
                    }
                }, 100);

            } else {
                console.warn(`  ❌ No matching game input for ${ourInput.id}`);
            }
        });

        loadSavedColors();
    }, 500);
}

function rgbaToHex(rgba) {
    if (rgba.startsWith('#')) return rgba;

    const parts = rgba.match(/[\d.]+/g);
    if (!parts || parts.length < 3) return rgba;

    const r = parseInt(parts[0]);
    const g = parseInt(parts[1]);
    const b = parseInt(parts[2]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
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



function syncHotkeysFromGame() {
    const hotkeysTab = document.querySelector('#tab-hotkeys');
    if (!hotkeysTab) return;

    const gameHotkeysPanel = document.querySelector('#main-hotkeys') ||
                             document.querySelector('[id*="hotkey"]') ||
                             document.querySelector('.hotkeys-panel');

    if (!gameHotkeysPanel) {
        console.warn('⚠️ Game hotkeys panel not found');
        return;
    }

    const gameButtons = gameHotkeysPanel.querySelectorAll('.keybinds-btn, button[data-key]');

    gameButtons.forEach(btn => {
        const customBtn = hotkeysTab.querySelector(`[data-key="${btn.dataset.key}"]`);
        if (customBtn) {
            customBtn.textContent = btn.textContent;
            customBtn.onclick = () => btn.click();

        }

    });
}


function syncHotkeysWithGame() {
    let isCapturing = false;
    let currentGameBtn = null;
    let currentKeyId = null;

    const escapeHandler = (e) => {
        if (isCapturing && e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            setTimeout(() => {
                const keybinds = JSON.parse(localStorage.getItem('keybinds') || '{}');
                keybinds[currentKeyId] = -1;
                localStorage.setItem('keybinds', JSON.stringify(keybinds));

                if (currentGameBtn) currentGameBtn.textContent = ' ';
                const customBtn = document.querySelector(`#tab-hotkeys button[data-key="${currentKeyId}"]`);
                if (customBtn) customBtn.textContent = '-';

                window.dispatchEvent(new Event('storage'));
            }, 50);

            isCapturing = false;
            currentGameBtn = null;
            currentKeyId = null;

            return false;
        }
    };

    document.addEventListener('keydown', escapeHandler, { capture: true, passive: false });
    document.addEventListener('keypress', escapeHandler, { capture: true, passive: false });
    document.addEventListener('keyup', escapeHandler, { capture: true, passive: false });

    const stopHandler = (e) => {
        if (isCapturing) {
            setTimeout(() => {
                isCapturing = false;
                currentGameBtn = null;
                currentKeyId = null;
            }, 200);
        }
    };

    document.addEventListener('keydown', stopHandler, true);
    document.addEventListener('mousedown', stopHandler, true);

    setInterval(() => {
        const gameButtons = document.querySelectorAll('button.keybinds-btn[id]');
        gameButtons.forEach(gameBtn => {
            const customBtn = document.querySelector(`#tab-hotkeys button[data-key="${gameBtn.id}"]`);
            if (customBtn && gameBtn.textContent !== customBtn.textContent) {
                customBtn.textContent = gameBtn.textContent || '-';
            }
        });
    }, 100);

    const gameButtons = document.querySelectorAll('button.keybinds-btn[id]');
    gameButtons.forEach(gameBtn => {
        const customBtn = document.querySelector(`#tab-hotkeys button[data-key="${gameBtn.id}"]`);
        if (customBtn) {
            customBtn.onclick = () => {
                gameBtn.click();
                isCapturing = true;
                currentGameBtn = gameBtn;
                currentKeyId = gameBtn.id;
            };
        }
    });

    console.log('✅ Hotkeys synced with aggressive Escape handling');
}

function syncWithGameSettings() {
    try {
        console.log('Starting sync with game settings...');

        const mainOptions = findPotentialGamePanel();
        if (!mainOptions) {
            console.warn('Game settings panel not found, retrying...');
            setTimeout(syncWithGameSettings, 1000);
            return;
        }

        setTimeout(() => {
            performSync();
            syncHotkeysWithGame();
        }, 500);
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
        syncHotkeysWithGame();
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




function setupSearchFunctionality() {
    const searchInput = document.getElementById('settings-search-input');
    if (!searchInput) return;

    const labelTexts = new Map();

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const allGroups = document.querySelectorAll('.setting-group');
        const allRows = document.querySelectorAll('.setting-row');

        if (!query) {
            allGroups.forEach(g => g.classList.remove('search-hidden'));
            allRows.forEach(row => {
                row.classList.remove('search-match', 'search-hidden');
                const label = row.querySelector('.setting-label');
                if (label && labelTexts.has(label)) {
                    label.textContent = labelTexts.get(label);
                }
            });
            return;
        }

        allGroups.forEach(group => {
            let hasMatch = false;
            const rows = group.querySelectorAll('.setting-row');

            rows.forEach(row => {
                const label = row.querySelector('.setting-label');
                if (!label) return;

                if (!labelTexts.has(label)) {
                    labelTexts.set(label, label.textContent);
                }

                const originalText = labelTexts.get(label);

                if (originalText.toLowerCase().includes(query)) {
                    row.classList.add('search-match');
                    row.classList.remove('search-hidden');
                    hasMatch = true;

                    const regex = new RegExp(`(${query})`, 'gi');
                    label.innerHTML = originalText.replace(regex, '<mark>$1</mark>');
                } else {
                    row.classList.remove('search-match');
                    row.classList.add('search-hidden');
                    label.textContent = originalText;
                }
            });

            if (hasMatch) {
                group.classList.remove('search-hidden');
            } else {
                group.classList.add('search-hidden');
            }
        });
    });

    console.log('✅ Search functionality initialized - highlights cleared on empty search');
}
function setupThemeButtons() {
    const checkButtons = setInterval(() => {
        const customBgBtn = document.getElementById('aCustomBackground');
        const customSpikeBtn = document.getElementById('aCustomSpike');
        const customMotherBtn = document.getElementById('aCustomMother');
        const foodColorsBtn = document.getElementById('btn-food-colors');
        const importBtn = document.getElementById('btn-theme-import');
        const exportBtn = document.getElementById('btn-theme-export');

        if (customBgBtn && customSpikeBtn && customMotherBtn && foodColorsBtn && importBtn && exportBtn) {
            clearInterval(checkButtons);

            // Link to game buttons
            customBgBtn.onclick = () => {
                const gameBtn = document.getElementById('aCustomBackground');
                if (gameBtn) gameBtn.click();
            };

            customSpikeBtn.onclick = () => {
                const gameBtn = document.getElementById('aCustomSpike');
                if (gameBtn) gameBtn.click();
            };

            customMotherBtn.onclick = () => {
                const gameBtn = document.getElementById('aCustomMother');
                if (gameBtn) gameBtn.click();
            };

            foodColorsBtn.onclick = () => {
                const gameBtn = document.getElementById('btn-food-colors');
                if (gameBtn) gameBtn.click();
            };

            importBtn.onclick = () => {
                const gameBtn = document.getElementById('btn-theme-import');
                if (gameBtn) gameBtn.click();
            };

            exportBtn.onclick = () => {
                const gameBtn = document.getElementById('btn-theme-export');
                if (gameBtn) gameBtn.click();
            };

            console.log('✅ Theme buttons linked successfully');
        }
    }, 100);
}

function parsePlayerInput(input) {
    if (!input) return { name: '', skin: 'none' };

    input = input.trim();


   const match = input.match(/^(.+?)\s*\[([^\]]+)\]\s*$/);
    if (match) {
        return {
            name: match[1].trim(),
            skin: match[2].trim()
        };
    }

    const match2 = input.match(/^\s*\[([^\]]+)\]\s*(.+)$/);
    if (match2) {
        return {
            name: match2[2].trim(),
            skin: match2[1].trim()
        };
    }

    return {
        name: input,
        skin: 'none'
    };
}

function setupQuickAddName() {
    const checkButtons = setInterval(() => {
        const saveNameBtn = document.getElementById('save-name-btn');
        const saveSkinBtn = document.getElementById('save-skin-btn');
        const saveBothBtn = document.getElementById('save-both-btn');
        const playerInput = document.getElementById('quick-player-input');

        if (saveNameBtn && saveSkinBtn && saveBothBtn && playerInput) {
            clearInterval(checkButtons);

            saveNameBtn.onclick = () => {
                const input = playerInput.value.trim();
                if (!input) {
                    alert('Please enter something first!');
                    return;
                }

                const list = loadSavedPlayers();
                list.push({ name: input, skin: 'none' });
                saveSavedPlayers(list);

                playerInput.value = '';
                saveNameBtn.textContent = '✓ Saved!';
                saveNameBtn.style.background = 'rgba(50,120,50,0.7)';

                setTimeout(() => {
                    saveNameBtn.textContent = 'Save Name';
                    saveNameBtn.style.background = 'rgba(28, 28, 28, 0.7)';
                }, 1500);

                renderSavedPlayers();
            };

            saveSkinBtn.onclick = () => {
                const input = playerInput.value.trim();
                if (!input) {
                    alert('Please enter something first!');
                    return;
                }

                const list = loadSavedPlayers();
                list.push({ name: '[skin]', skin: input });
                saveSavedPlayers(list);

                playerInput.value = '';
                saveSkinBtn.textContent = '✓ Saved!';
                saveSkinBtn.style.background = 'rgba(50,120,50,0.7)';

                setTimeout(() => {
                    saveSkinBtn.textContent = 'Save Skin';
                    saveSkinBtn.style.background = 'rgba(28, 28, 28, 0.7)';
                }, 1500);

                renderSavedPlayers();
            };

            saveBothBtn.onclick = () => {
                const input = playerInput.value.trim();
                if (!input) {
                    alert('Please enter something first!');
                    return;
                }

                const { name, skin } = parsePlayerInput(input);

                if (!name) {
                    alert('Could not parse player name!');
                    return;
                }

                const list = loadSavedPlayers();
                list.push({ name: name, skin: skin });
                saveSavedPlayers(list);

                playerInput.value = '';
                saveBothBtn.textContent = '✓ Saved!';
                saveBothBtn.style.background = 'rgba(50,120,50,0.7)';

                setTimeout(() => {
                    saveBothBtn.textContent = 'Save Both';
                    saveBothBtn.style.background = 'rgba(28, 28, 28, 0.7)';
                }, 1500);

                renderSavedPlayers();
            };

            console.log('✅ Quick add buttons initialized');
        }
    }, 100);
}
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

                setupSearchFunctionality();
                setupRangeListeners();
                setupColorPickers();
                setupFontSelector();
                setupQuickAddName();
                setupThemeButtons();

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
                console.warn('Could not find game button container; panel created but sync may be limited');
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
            <h2>📝 Changelog v3.0</h2>
            <ul>
                <li>BIG UPDATE!!!</li>
                <li>REMADE HOTKEY CODE SO IT ACTULLY WORKS!!!!</li>
                <li>Added more stuff to theme</li>
                <li>remade ui again!!</li>
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
(function() {
    'use strict';

    GM_addStyle(`
        .main-top,
        div.main-top,
        div[class="main-top"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
        }

        .loader,
        #account-loader,
        div.loader,
        div#account-loader,
        [id="account-loader"],
        [class*="loader"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            position: absolute !important;
            left: -9999px !important;
        }

        .main-content.main-divider.main-panel,
        .main-content.main-panel {
            min-width: 350px !important;
        }

        .main-mid.menu-sub-bg {
            padding: 20px !important;
            padding-top: 0px !important;
        }

        #name-box {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            height: 45px !important;
            font-size: 15px !important;
            border-radius: 8px !important;
        }

        .main-input-btns {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 10px !important;
        }

        .main-input-btns button,
        .main-input-btns .gota-btn,
        .main-input-btns .gota-menu-btn,
        #unified-settings-btn,
        #btn-servers {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            height: 45px !important;
            font-size: 15px !important;
            font-weight: 600 !important;
            border-radius: 8px !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            cursor: pointer !important;
        }

        .play-spec-wrapper {
            width: 100% !important;
            display: flex !important;
            gap: 10px !important;
            margin-bottom: 0 !important;
        }

        .play-spec-wrapper #btn-play,
        .play-spec-wrapper #btn-spec {
            flex: 1 !important;
            height: 50px !important;
            font-size: 16px !important;
            font-weight: 700 !important;
        }

        .main-input-btns button:hover,
        #unified-settings-btn:hover,
        #btn-servers:hover,
        #btn-play:hover,
        #btn-spec:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
        }

        #main-account,
        div#main-account {
            position: relative !important;
            top: unset !important;
            left: unset !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            background: transparent !important;
            border: none !important;
            padding: 20px 20px 0px 20px !important;
            margin-bottom: 10px !important;
            margin-right: 16px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 8px !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            order: -1 !important;
        }

        #main-account .profile-section,
        #main-account > div:first-child {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100% !important;
            margin-bottom: 0 !important;
        }

        #main-account #userinfo {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100% !important;
        }

        #main-account #account-avatar {
            max-height: 50px !important;
            max-width: 50px !important;
            min-height: 50px !important;
            min-width: 50px !important;
            border-radius: 50% !important;
            border: 2px solid rgba(255,255,255,0.15) !important;
            flex-shrink: 0 !important;
        }

        #main-account #username-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 4px !important;
            flex: 1 !important;
            min-width: 0 !important;
            width: 100% !important;
        }

        #main-account #account-username {
            font-weight: 700 !important;
            font-size: 15px !important;
            color: #fff !important;
            letter-spacing: 0.3px !important;
        }

        #main-account #account-level,
        #main-account [class*="level"],
        #main-account [id*="level"] {
            font-size: 13px !important;
            font-weight: 600 !important;
            color: #fff !important;
            opacity: 0.85 !important;
        }

        #main-account .xp-meter {
            width: 90% !important;
            min-width: 200px !important;
        }

        #main-account .xp-meter,
        #main-account [class*="xp"],
        #main-account [id*="xp"] {
            color: #fff !important;
            opacity: 0.85 !important;
        }

        #main-account .xp-meter > div,
        #main-account [class*="xp-bar"],
        #main-account [class*="progress"] {
            background: rgba(60,60,60,0.6) !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
        }

        #main-account .xp-meter > div > div,
        #main-account [class*="xp-fill"],
        #main-account [class*="progress-fill"] {
            background: linear-gradient(90deg, rgba(100,100,100,0.8), rgba(120,120,120,0.8)) !important;
        }

        #main-account .xp-text,
        #main-account [class*="xp-text"] {
            font-size: 12px !important;
            font-weight: 600 !important;
            color: #fff !important;
            opacity: 0.9 !important;
        }

        #main-account > div:last-child,
        #main-account .account-buttons-wrapper {
            display: flex !important;
            flex-direction: row !important;
            gap: 14px !important;
            align-items: center !important;
            justify-content: flex-start !important;
            width: 100% !important;
            flex-wrap: wrap !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
        }

        #main-account button,
        #main-account .gota-btn {
            background: rgba(40, 40, 40, 0.6) !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
            color: #fff !important;
            padding: 6px 14px !important;
            border-radius: 6px !important;
            cursor: pointer !important;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            font-size: 13px !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
            flex: 0 1 auto !important;
            min-width: fit-content !important;
            height: 32px !important;
            margin: 0 !important;
        }

        #main-account button:hover,
        #main-account .gota-btn:hover {
            background: rgba(60, 60, 60, 0.8) !important;
            border-color: rgba(255,255,255,0.2) !important;
            transform: translateY(-2px) !important;

    transform: scale(1.03) !important;
}

        #main-account.logged-out {
            gap: 6px !important;
        }

        #main-account.logged-out .account-buttons-wrapper {
            gap: 14px !important;
        }

        #main-account.logged-out button,
        #main-account.logged-out .gota-btn {
            padding: 5px 10px !important;
            font-size: 12px !important;
            height: 30px !important;
        }

        #main-account span,
        #main-account p,
        #main-account div {
            color: #fff !important;
        }

        @media (max-width: 768px) {
            #main-account {
                flex-direction: column !important;
                gap: 6px !important;
            }

            #main-account .account-buttons-wrapper {
                gap: 6px !important;
            }
        }


    `);

    function hideLoaders() {
        const loaders = [
            document.getElementById('account-loader'),
            document.querySelector('.loader'),
            document.querySelector('#account-loader'),
            ...document.querySelectorAll('[class*="loader"]')
        ];

        loaders.forEach(loader => {
            if (loader) {
                loader.style.display = 'none';
                loader.style.visibility = 'hidden';
                loader.style.opacity = '0';
                loader.style.pointerEvents = 'none';
                loader.style.position = 'absolute';
                loader.style.left = '-9999px';
            }
        });
    }

    function moveAccountMenu() {
        const accountMenu = document.getElementById('main-account') ||
                          document.querySelector('#main-account') ||
                          document.querySelector('div#main-account');

        if (!accountMenu) {
            return false;
        }

        const guestDiv = document.getElementById('guest');
        const isLoggedIn = !guestDiv || guestDiv.style.display === 'none';

        if (!isLoggedIn) {
            accountMenu.classList.add('logged-out');
        } else {
            accountMenu.classList.remove('logged-out');
        }


        const loginButton = Array.from(accountMenu.querySelectorAll('button')).find(btn =>
            btn.textContent.trim().toLowerCase().includes('login') ||
            btn.textContent.trim().toLowerCase().includes('log in') ||
            btn.id === 'btn-login'
        );

        if (loginButton) {
            if (isLoggedIn) {
                loginButton.style.display = 'none';
            } else {
                loginButton.style.display = 'block';
            }
        }

        const buttons = accountMenu.querySelectorAll('button, .gota-btn');
        const userInfo = accountMenu.querySelector('#userinfo');

        if (buttons.length > 0) {
            let buttonWrapper = accountMenu.querySelector('.account-buttons-wrapper');
            if (!buttonWrapper) {
                buttonWrapper = document.createElement('div');
                buttonWrapper.className = 'account-buttons-wrapper';
                buttonWrapper.style.cssText = `
                    flex-direction: row !important;
                    gap: 15px !important;
                    width: 100% !important;
                `;

                buttons.forEach(btn => {
                    if (btn.style.display !== 'none') {
                        buttonWrapper.appendChild(btn);
                    }
                });

                accountMenu.appendChild(buttonWrapper);
            }
        }

        if (userInfo && isLoggedIn) {
            userInfo.style.cssText = `
                flex-direction: row !important;
                align-items: center !important;
                gap: 12px !important;
                width: 100% !important;
            `;
        }

        const mainContent = document.querySelector('.main-content.main-divider.main-panel') ||
                          document.querySelector('.main-content') ||
                          document.querySelector('.main-panel');

        if (!mainContent) {
            return false;
        }

        if (mainContent.contains(accountMenu) && mainContent.firstChild === accountMenu) {
            return true;
        }

        mainContent.insertBefore(accountMenu, mainContent.firstChild);

        console.log('Account menu moved to main panel');
        return true;
    }

    hideLoaders();

    let attempts = 0;
    const maxAttempts = 20;

    const moveInterval = setInterval(() => {
        attempts++;
        hideLoaders();
        const success = moveAccountMenu();

        if (success || attempts >= maxAttempts) {
            clearInterval(moveInterval);
            if (!success) {
            }
        }
    }, 500);

    const observer = new MutationObserver(() => {
        hideLoaders();
        moveAccountMenu();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Account Menu Integration script loaded');
})();
function setupClearAllButton() {
    const checkButton = setInterval(() => {
        const clearBtn = document.getElementById('clear-all-saved-players');
        if (clearBtn) {
            clearInterval(checkButton);

            clearBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear all saved players?')) {
                    const LSKEY = 'savedPlayers';
                    localStorage.setItem(LSKEY, JSON.stringify([]));

                    GM_setValue('savedPlayers', JSON.stringify([]));

                    const listContainer = document.getElementById('saved-players-list');
                    if (listContainer) {
                        listContainer.innerHTML = '<p style="color: #888; font-size: 13px; text-align: center; padding: 20px;">No saved players yet.</p>';
                    }

                    if (typeof renderSavedPlayers === 'function') {
                        renderSavedPlayers();
                    }

                    clearBtn.textContent = 'Cleared!';
                    clearBtn.style.background = 'rgba(50,120,50,0.5)';
                    clearBtn.style.borderColor = 'rgba(100,255,100,0.3)';
                    clearBtn.style.color = '#b3ffb3';

                    setTimeout(() => {
                        clearBtn.textContent = 'Clear All';
                        clearBtn.style.background = 'rgba(120,50,50,0.7)';
                        clearBtn.style.borderColor = 'rgba(255,100,100,0.3)';
                        clearBtn.style.color = '#ffb3b3';
                    }, 2000);

                
                }
            });
        }
    }, 100);
}

