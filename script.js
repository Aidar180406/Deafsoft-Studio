// Массив с путями к изображениям
const backgroundImages = [
    '2025-05-31_13-14-52.png',
    '2025-05-31_13-29-09.png'
];
console.log("Файл script.js успешно подключён!");
// Выбираем случайное изображение
const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

// Применяем его к блоку
document.getElementById('welcomeSection').style.backgroundImage = `url('${randomImage}')`;