const container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue';
        });
        container.appendChild(square);
    }
}

function resetGrid() {
    let size = prompt('Enter new grid size (max 1000):', 70);
    size = Math.min(Math.max(parseInt(size), 1), 64); // Limit size to 1-64
    createGrid(size);
}

createGrid(20); // Default grid size