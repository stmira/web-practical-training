// ハンバーガーメニュー
const open = document.querySelectorAll('.menu-list li');

const menuOptions = {
    duration: 1,
    easing: 'ease',
    fill: 'forwards',
}

// メニューを開く
document.addEventListener('DOMContentLoaded', () => {
const nav = document.querySelector('#nav');
const btn = document.querySelector('.btn-trigger');
const menuList = document.querySelector('.menu-list');
btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        nav.animate(
            {
                visibility: 'visible',
            },
            {
                duration:1,
                fill: "forwards",
            }
        );
        menuList.classList.add('visible');
    } else {
        nav.animate(
            {
                visibility: 'hidden',
            },
            menuOptions
        );
        menuList.classList.remove('visible');
    }
});
});

// loading
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loading');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loaded');
            document.body.style.overflow = 'auto';
        }, 2000);
    }
});

// about
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('code-input');
    const styleTag = document.getElementById('dynamic-style');
    const bgText = document.getElementById('bg-text');
    const myButton = document.getElementById('myButton');
    const resetBtn = document.getElementById('reset-btn');

    // コード適用
    if (!input || !styleTag || !bgText) return; //必要な要素が見つからなかったら以降の処理を中断

    // 初期のCSSを保持しておき、適用時はこれを残した上でユーザー入力を追加する
    const initialCSS = styleTag.innerHTML;

    if (myButton) {
        myButton.addEventListener('click', () => {
            const code = input.value;
            myButton.style.background = "#866bff";
            setTimeout(()=>{ myButton.style.background = "#444";}, 200);

            // 元のCSSを残して、ユーザーの入力を追記する
            styleTag.innerHTML = initialCSS + "\n" + code;

            if(code.includes('name')){
                bgText.innerText = "MY NAME IS GEMINI";
            } else if (code.includes('hobby')){
                bgText.innerText = "I LOVE CODING";
            } else {
                bgText.innerText = "コードをいれてね！";
            };

            if (input.value.length > 0){
                resetBtn.style.display = "block";
            } else {
                resetBtn.style.display = "none";
            }
        });
    }

    // リセットボタン
    if (resetBtn) {
        resetBtn.addEventListener('click', ()=>{
        input.value = "";
        styleTag.innerHTML = initialCSS;
        bgText.innerText = "HELLO WORLD"
        resetBtn.style.background = "#866bff";
        setTimeout(()=>{ resetBtn.style.background = "#444";}, 200);
    });
    }
});

// コードのプリセット
const presets = [
    {name:"上下反転", code:"body { transform: rotate(180deg); }"},
    {name:"ぼかし", code:"body { filter: blur(5px); }"},
    {name:"大きくする", code:"* { font-size: 30px; }"},
    
];

// コードを流す（DOM 準備後に初期化）
document.addEventListener('DOMContentLoaded', () => {
    // このスクリプトは about ページのみに限定する
    // about.html にある要素 '#about' が存在しなければ処理を中断
    if (!document.getElementById('about')) return;

    // コメント用コンテナがあればそれを使い、なければ about ページでは body を使う
    const container = document.getElementById('comment-container') || document.body;

    const input = document.getElementById('code-input');
    const styleTag = document.getElementById('dynamic-style');

    function spawnPreset() {
        const data = presets[Math.floor(Math.random() * presets.length)];
        const item = document.createElement('div');

        // data が文字列かオブジェクトかを判定して表示ラベルとコード本体を決定
        const codeText = (typeof data === 'string') ? data : (data.code || '');
        const labelText = (typeof data === 'string') ? data : (data.name || data.code || 'preset');

        item.innerText = labelText;
        item.dataset.code = codeText;

        // スタイル: フッター上に重なってもクリックできるように固定配置かつ高い z-index を指定
        Object.assign(item.style, {
            position: 'fixed',
            left: '100%',
            top: Math.random() * 80 + '%',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            padding: '10px',
            background: 'rgba(0, 255, 0, 0.1)',
            border: '1px solid #0f0',
            color: '#0f0',
            fontFamily: 'monospace',
            zIndex: '9999',
            pointerEvents: 'auto'
        });

        // DOM に追加して画面上に表示
        container.appendChild(item);

        item.onclick = () => {
            // クリックで入力欄にコードをコピー
            if (input) {
                input.value = item.dataset.code || '';
                input.focus();
            }
            item.style.background = "yellow"; 
            setTimeout(() => item.remove(), 200);
        };

        const anim = item.animate([
            { left: '100%' },
            { left: '-100%' }
        ], {
            duration: 30000 + Math.random() * 5000, // 10〜15秒かけてゆっくり
            easing: 'linear'
        });

        anim.onfinish = () => item.remove();
    }

    setInterval(spawnPreset, 3000);
});

// index
