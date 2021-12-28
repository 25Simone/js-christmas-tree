// dichiaro la variabile del container
let rowContainer = document.querySelector('.container');

// funzione per creare le row
function createRow(treeHeight) {
    for (let i = 1; i <= treeHeight; i++) {
        const rowHtml = document.createElement('div');
        rowHtml.className = 'row';
        rowContainer.append(rowHtml);

        // creazione box vuoti left
        for (let x = 0; x < (treeHeight - i); x++) {
            const emptyBoxLeft = document.createElement('div');
            emptyBoxLeft.className = 'box';
            rowHtml.append(emptyBoxLeft);
        }

        const treeDecorationContainer = document.createElement('span')
        rowHtml.append(treeDecorationContainer);
        // loop cicle per il pyramid pattern: colored boxes
        for (let j = 0; j < 2 * i - 1; j++) {
            const coloredBox = document.createElement('div');
            const roundBox = document.createElement('div');
            coloredBox.className = 'box green';
            roundBox.className = 'round';
            treeDecorationContainer.append(coloredBox);
            coloredBox.append(roundBox);
        }

        // creazione box vuoti right
        for (let k = 0; k < (treeHeight - i); k++) {
            const emptyBoxRight = document.createElement('div');
            emptyBoxRight.className = 'box';
            rowHtml.append(emptyBoxRight);
        }
    }
}

// definisco la funzione per la creazione del tronco
function createTrunk (trunkHeight, treeHeight) {
    let treeWidth = (treeHeight * 2) - 1;
    for (let i = 1; i <= trunkHeight; i++) {
        const rowHtml = document.createElement('div');
        rowHtml.className = 'row';
        rowContainer.append(rowHtml);

        // dichiaro la variabile middle per il posizionamento del tronco
        let middle = ((treeWidth - 1) / 2);
        for (let x = 0; x <= middle; x++) {
            if (x == middle){
                const coloredBox = document.createElement('div');
                coloredBox.className = 'box brown';
                rowHtml.append(coloredBox);
            } else {
                const emptyBoxLeft = document.createElement('div');
                emptyBoxLeft.className = 'box';
                rowHtml.append(emptyBoxLeft);
            }
        }

        for (let k = (middle + 1); k < treeWidth; k++) {
            const emptyBoxRight = document.createElement('div');
            emptyBoxRight.className = 'box';
            rowHtml.append(emptyBoxRight);
        }
    }
}



createRow(8);
createTrunk(2, 8);