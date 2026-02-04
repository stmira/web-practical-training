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