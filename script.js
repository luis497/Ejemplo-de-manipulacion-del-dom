const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector(".btnSumar")
const btn2 = document.querySelector(".btnRestar")
const btn3 = document.querySelector(".btnDividir")
const btn4 = document.querySelector(".btnMultiplicar")
const pResult = document.querySelector("#result")


btn.addEventListener("click", btnSumar)
btn2.addEventListener("click", btnRestar)
btn3.addEventListener("click", btnDividir)
btn4.addEventListener("click", btnMultiplicar)

function btnSumar(event) {
    const inputsResultado = +input1.value + +input2.value

    pResult.innerText= "Resultado: " + inputsResultado
    return
}

function btnRestar(event) {
    const inputsResultado = +input1.value - +input2.value

    pResult.innerText= "Resultado: " + inputsResultado
}

function btnDividir(event) {
    const inputsResultado = +input1.value / +input2.value

    pResult.innerText= "Resultado: " + inputsResultado
}

function btnMultiplicar(event) {
    const inputsResultado = +input1.value * +input2.value

    pResult.innerText= "Resultado: " + inputsResultado
}
