function insertValues(num){
    const input = document.querySelector('#input-values').value
    document.querySelector('#input-values').value = input + num
    
}

function calculo(){
    const input = document.querySelector('#input-values').value
    document.querySelector('#input-values').value = eval(input)

}

function apagar_input(){
    document.querySelector('#input-values').value = ""

}

function mais_menos(){
    calculo()
    const input = document.querySelector('#input-values').value
    document.querySelector('#input-values').value = input * -1

}

function porcent(num){

    const input = document.querySelector('#input-values').value
    document.querySelector('#input-values').value = input / 100
    
    
    
}

