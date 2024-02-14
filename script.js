let flipped = false;

function flipContainer() {
    const container = document.querySelector('.container');
    const frontImage = document.getElementById('frontImage');
    if (!flipped) {
        container.style.transform = 'rotateX(180deg)';
        frontImage.style.backgroundImage = "url('foto2.png')"; // Путь ко второму изображению на передней стороне
    } else {
        container.style.transform = 'rotateX(0deg)';
        frontImage.style.backgroundImage = "url('foto3.png')"; // Путь к первому изображению на передней стороне
    }
    flipped = !flipped;
}
