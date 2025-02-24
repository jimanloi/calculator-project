console.log('Hello, world!');

const display = document.getElementById('display');

const buttons = document.getElementById('buttons');

const data = [
    ['C', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

data.forEach((row) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    row.forEach((buttonData) => {
        const btn = document.createElement('button');
        btn.innerText = buttonData;

        if (buttonData === '=') {
            btn.classList.add('equal');
        } else if (buttonData === 'C') {
            btn.classList.add('clear');
        } else if (['*', '-', '+', '/', '%'].includes(buttonData)) {
            btn.classList.add('operator');
        }

        btn.addEventListener('click', (btn) => clickHandler(buttonData));

        rowElement.append(btn);
    });

    buttons.append(rowElement);
});

let value = '';
function clickHandler(btn) {
    if (btn === '=') {
        try {
            value = eval(value);
            console.log(value);
        } catch {
            value = 'error';
        }
    } else if (btn === 'C') {
        value = '';
    } else {
        value += btn;
    }
    display.innerText = value;
}
