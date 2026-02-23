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
    const apple = document.getElementById('apple');

    const imgA = 'redRingo.png';
    const imgB = 'redRingoOpen.png';
    btn.addEventListener('click', ()=>{
        if(apple && apple.src.includes(imgA)){
            apple.src = 'img/' + imgB;
        }else if(apple) {
            apple.src = 'img/' + imgA;
        };
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

// pageTopBtm
$(function() {
    const topBtn = $('#page-top');
    topBtn.hide(); // 最初はボタンを隠す

    // スクロールが100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
            topBtn.addClass('is-show');
        } else {
            topBtn.fadeOut();
            topBtn.removeClass('is-show');
        }
    });

    // スムーズにスクロールしてトップに戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100 ); // 0.1秒かけて戻る
        return false;
    });
});

// about ページの処理
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('code-input');
    const styleTag = document.getElementById('dynamic-style');
    const myButton = document.getElementById('myButton');
    const resetBtn = document.getElementById('reset-btn');

    if (!input || !styleTag || !myButton) return;

    myButton.addEventListener('click', () => {
        const code = input.value;
        if (!code) return; // 空なら何もしない

        // ボタンの演出
        myButton.style.background = "#866bff";
        setTimeout(() => { myButton.style.background = "#444"; }, 200);

        // ユーザーが書いたコードを .apple { ... } で包む
        const appleFocusedCode = `.apple { ${code} }`;

        // スタイルタグの中身を「魔法のコード」に置き換える
        styleTag.innerHTML = appleFocusedCode;

        // リセットボタンを表示
        resetBtn.style.display = "block";
    });

    // リセットボタンの処理
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            input.value = "";
            styleTag.innerHTML = ""; // 魔法を解除
            resetBtn.style.display = "none";
        });
    }
});

// コードのプリセット
const presets = [
    {name: "青リンゴにする", code: "background-color: #4cd964;"},
    {name: "巨大化", code: "transform: scale(2);"},
    {name: "回転させる", code: "animation: spin 2s linear infinite;"},
    {name: "消える魔法", code: "opacity: 0;"},
    {name: "浮遊する", code: "animation: floating 3s ease-in-out infinite;"}
];

document.addEventListener('DOMContentLoaded', () => {
    const bookIcon = document.getElementById('book-icon');
    const bookContent = document.getElementById('book-content');
    const closeBook = document.getElementById('close-book');
    const presetList = document.getElementById('preset-list');
    const input = document.getElementById('code-input');

    if (!bookIcon || !presetList) return;

    // 1. 本を開閉する
    bookIcon.addEventListener('click', () => {
        bookContent.classList.add('show');
        bookIcon.style.display = 'none';
    });

    closeBook.addEventListener('click', () => {
        bookContent.classList.remove('show');
        bookIcon.style.display = 'block';
    });

    // 2. プリセットを本の中に生成する
    presets.forEach(data => {
        const li = document.createElement('li');
        li.innerText = data.name;
        
        li.onclick = () => {
            if (input) {
                input.value = data.code;
                input.focus();
                input.style.boxShadow = "0 0 15px #866bff";
                setTimeout(() => { input.style.boxShadow = "none"; }, 500);
            }
        };
        presetList.appendChild(li);
    });
});

// index
