console.log('Hello, world!');

const display = document.getElementById('display');

const buttons = document.getElementById('buttons');

const data = [
    ['C', '%', '+/-', '÷'],
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
        rowElement.append(btn);
    });

    buttons.append(rowElement);
});
