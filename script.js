const items = ['Bầu', 'Cua', 'Tôm', 'Cá', 'Nai', 'Gà'];
const board = document.getElementById('board');
const spinButton = document.getElementById('spin-button');
const resultDiv = document.getElementById('result');

spinButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    resultDiv.innerText = 'Kết quả: ' + selectedItem;
    board.classList.add('spinning');    

    setTimeout(() => {
        board.classList.remove('spinning');
    }, 3000);
});