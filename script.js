
// paleta de cores
let penColour = 'black';

const colors = [/* "FFDBBB","FFD6BD","FFD5C4","FECDBF","FFC8C3","FFC3C2","FFBFC3","FFBAC4","FFB7C5","F5B8C1","F3AEC3","F3A6C6","F7A1C8","EF97C7","DD8CC6","D488C6","CB85C3","A776BB","976FB6", */"8569B4","7762B1","715BA4", "000000"];

colors.reverse()

function palletOfColors () {
    let palette = document.querySelector('#color-palette');

    // percorre e cria cada cor da paleta e tira e coloca a classe 'selected'
    for(let i = 0; i < colors.length; i +=1 ) {
        let divColor
        if (colors[i] == "000000"){
            divColor = createPixel('color selected');
            divColor.style.backgroundColor = '#' + colors[i];
            palette.appendChild(divColor);
            divColor.addEventListener("click", selection);
            divColor.addEventListener("click",coletaCor);
        } else{
            divColor = createPixel('color');
            divColor.style.backgroundColor = '#' + colors[i];
            palette.appendChild(divColor);
            divColor.addEventListener("click", selection);
            divColor.addEventListener("click",coletaCor);
        }
    }
}
palletOfColors()

function coletaCor(){
    penColour = this.style.backgroundColor
    console.log(penColour)
}


// seleciona a cor desejada
function selection (event) {
    let todasCores = document.getElementsByClassName('color');
    let corAtual = event.target;
    corAtual.classList.add('selected')

    for ( let z = 0; z < todasCores.length; z += 1){
        if (todasCores[z].className == 'color selected' && todasCores[z] !== corAtual ){
            todasCores[z].classList.remove('selected');
        }
    }
}

  // Cria uma div com base nas diferentes classes (inspirado na pirâmide do bloco 5)
function createPixel(className) {
    let pixel = document.createElement("div");
    pixel.className = className;
    return pixel;
}


// Cria as linhas da altura
function linePixelBoard (altura){
    let pixelBoard = document.querySelector('#pixel-board')
    for (let i = 0; i < altura; i+=1){
        let line = createPixel('line')
        pixelBoard.appendChild(line);
    }
}
linePixelBoard(5)

//cria as linhas da largura
function preenchePixelBoard (largura){
    let linhas = document.getElementsByClassName('line');
    for ( let linha of linhas){
        for ( let i = 0; i < largura; i += 1){
            let divPixel = createPixel("pixel");
            linha.appendChild(divPixel)
            divPixel.addEventListener('click', changeColor)
        }
    }
}
preenchePixelBoard(5)

// troca a classe do elemento clicado mudando a cor
function changeColor (event){
    event.target.style.backgroundColor = penColour;
}

function botaoLimpar(){
    let botao = document.querySelector('#clear-board');
    botao.addEventListener("click", clearBoard);
}
botaoLimpar()

function clearBoard (){
    let pixels = document.getElementsByClassName('pixel');
    for(let i of pixels){
        i.style.backgroundColor = 'white';
    }
}