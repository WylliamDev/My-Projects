function insert(num) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}

function calc() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = eval(result);
    }
    else {
        document.getElementById('result').innerHTML = "Coloque um valor"
    }
}

function insert(num) {
    var result = document.getElementById('result').innerHTML;
    var lastChar = result.slice(-1);
    if (operators(num) && operators(lastChar)) {
        return;
    }
    else {
        document.getElementById('result').innerHTML += num;
    }
}

function insert(num) {
    var result = document.getElementById('result');
    var showresult = result.innerHTML;

    var maxLength = 18;

    if (showresult.length < maxLength) {
      result.innerHTML += num;
    } else {
      alert("Limite de caracteres atingido!");
    }
    
}

function operators(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}