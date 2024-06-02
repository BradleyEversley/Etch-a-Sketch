document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');

    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement('div');
        board.appendChild(cell);
    }
});
