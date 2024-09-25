const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 조정
canvas.width = 780;
canvas.height = 400;

// 팝업 요소들
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupText = document.getElementById('popup-text');
const confirmButton = document.getElementById('confirm-button');

// 알 컨테이너 (숨기기 위해 추가)
const eggContainer = document.querySelector('.egg-container');

// 알 선택 시 팝업 띄우기 및 알 숨기기
document.getElementById('ddak-egg').addEventListener('click', function() {
    localStorage.setItem('selectedEgg', 'ddak');  // 알 저장
    showPopup('Your pet is... Ddak!', 'images/Ddak.png');
});

document.getElementById('pong-egg').addEventListener('click', function() {
    localStorage.setItem('selectedEgg', 'pong');  // 알 저장
    showPopup('Your pet is... Pong!', 'images/Pong.png');
});

document.getElementById('ahk-egg').addEventListener('click', function() {
    localStorage.setItem('selectedEgg', 'ahk');  // 알 저장
    showPopup('Your pet is... Ahk!', 'images/Ahk.png');
});

// 팝업을 보여주는 함수
function showPopup(text, imageSrc) {
    popupText.textContent = text;
    popupImage.src = imageSrc;
    popup.style.display = 'block';
    
    // 알들을 숨김
    eggContainer.style.display = 'none';
}

// 확인 버튼을 눌렀을 때 페이지 이동
confirmButton.addEventListener('click', function() {
    const selectedEgg = localStorage.getItem('selectedEgg');  // 저장된 알을 가져옴
    if (selectedEgg === 'ddak') {
        window.location.href = 'Tamagochi_Ddakmain.html';
    } else if (selectedEgg === 'pong') {
        window.location.href = 'Tamagochi_Pongmain.html';
    } else if (selectedEgg === 'ahk') {
        window.location.href = 'Tamagochi_Ahkmain.html';
    }
});

