function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('result').value;
    if (display) {
        document.getElementById('result').value = eval(display);
    }
}

function square() {
    let display = document.getElementById('result').value;
    if (display) {
        document.getElementById('result').value = Math.pow(eval(display), 2);
    }
}

function cube() {
    let display = document.getElementById('result').value;
    if (display) {
        document.getElementById('result').value = Math.pow(eval(display), 3);
    }
}
