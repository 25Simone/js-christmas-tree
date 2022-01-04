// dichiaro la variabile del container
let rowContainer = document.querySelector('.container');

// definisco le variabili dei button
const button7 = document.getElementById('button-7');
const button9 = document.getElementById('button-9');
const buttonOnOff = document.getElementById('on-off-button');

// definisco la lista di colori per le luci
const colorList = ['red','blue', 'yellow', 'purple', 'maroon', 'dodgerblue'];

// contatori
let currentIndex = 0;
let contatore = 0;

// definisco una variabile flag per l'accensione delle luci
let lightsOn;

// funzione per creare le row
function createRow(treeHeight) {
    let treeWidth = (treeHeight * 2) - 1;

    // dichiaro la variabile middle per il centro dell'albero
    let middle = ((treeWidth - 1) / 2);

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
            const lightsBox = document.createElement('div');
            if(j == middle){
            coloredBox.className = 'box green centeredbox';
            } else {
                coloredBox.className = 'box green';
            }
            lightsBox.className = 'lights';
            treeDecorationContainer.append(coloredBox);
            coloredBox.append(lightsBox);
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

        // dichiaro la variabile middle per il centro dell'albero
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

// definisco gli eventi al click dei pulsanti
button7.addEventListener('click', () => {
    // reset
    rowContainer.innerHTML = '';
    // richiamo le funzioni per la creazione dell'albero e del tronco
    createRow(7);
    createTrunk(2, 7);
})
button9.addEventListener('click', () => {
    // reset
    rowContainer.innerHTML = '';
    // richiamo le funzioni per la creazione dell'albero e del tronco
    createRow(9);
    createTrunk(2, 9);
})
buttonOnOff.addEventListener('click', () => {
    contatore++;
    let lightsList = document.getElementsByClassName('lights');
    if(contatore % 2 != 0){
        lightsOn = true;
        clock = setInterval(() => {
            if(currentIndex > colorList.length - 1) {
                currentIndex = 0; 
            }
            for(let i = 0; i <= lightsList.length - 1; i ++) {
                lightsList[i].style.backgroundColor = colorList[currentIndex];
            }
            currentIndex++; 
        }, 500);
    } else {
        lightsOn = false;
        for(let i = 0; i <= lightsList.length - 1; i ++) {
            lightsList[i].style.backgroundColor = 'transparent';
        }
        clearInterval(clock);
    }
})
