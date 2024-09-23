const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 조정
canvas.width = 780;
canvas.height = 400;

document.getElementById('ddak-egg').addEventListener('click', function() {
    localStorage.setItem('selectedEgg', 'ddak');
    window.location.href = 'Tamagochi_Ddakmain.html';
});

document.getElementById('pong-egg').addEventListener('click', function() {
    localStorage.setItem('selectedEgg', 'pong');
    window.location.href = 'Tamagochi_Pongmain.html';
});

document.getElementById('ahk-egg').addEventListener('click', function() {
    localStorage.setItem('selectedEgg', 'ahk');
    window.location.href = 'Tamagochi_Ahkmain.html';
});