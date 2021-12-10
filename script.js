let penColour = 'black';

// paleta de cores predileta

const colorsFavorites =  ["transparent", "FFFFFF","FFDBBB","FFD6BD","FFD5C4","FECDBF","FFC8C3","FFC3C2","FFBFC3","FFBAC4","FFB7C5","F5B8C1","F3AEC3","F3A6C6","F7A1C8","EF97C7","DD8CC6","D488C6","CB85C3","A776BB","976FB6","8569B4","7762B1","715BA4"]

colorsFavorites.reverse() // array de trás pra frente

//gera cor aleatoria ideia retirada do https://wallacemaxters.com.br/
function gerarCor() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    return `rgba(${r}, ${g}, ${b})`;
}

//cores aleatorias
 
let colors = ['black'];
for (let i = 0; i < 3; i += 1){
    let cor = gerarCor()
    colors.push(cor)
}

function palletOfColors () {
    let palette = document.querySelector('#color-palette');
    let paletteFavorite = document.querySelector('#color-palette-favorite');

    // percorre e cria cada cor da paleta e tira e coloca a classe 'selected'
    for(let i = 0; i < colors.length; i +=1 ) {
        let divColor
        if (colors[i] == "000000"){
            divColor = createPixel('color selected');
            divColor.style.backgroundColor = colors[i];
            palette.appendChild(divColor);
            divColor.addEventListener("click", selection);
            divColor.addEventListener("click",coletaCor);
        } else{
            divColor = createPixel('color');
            divColor.style.backgroundColor = colors[i];
            palette.appendChild(divColor);
            divColor.addEventListener("click", selection);
            divColor.addEventListener("click",coletaCor);
        }
    }

    // faz a mesma coisa porém para as minhas cores fixas
    for(let i = 0; i < colorsFavorites.length; i +=1 ) {
        let divColor1
        if (colors[i] == "000000"){
            divColor1 = createPixel('color selected');
            divColor1.style.backgroundColor = "#" + colorsFavorites[i];
            paletteFavorite.appendChild(divColor1);
            divColor1.addEventListener("click", selection);
            divColor1.addEventListener("click",coletaCor);
        } else{
            divColor1 = createPixel('color');
            divColor1.style.backgroundColor = "#" + colorsFavorites[i];
            paletteFavorite.appendChild(divColor1);
            divColor1.addEventListener("click", selection);
            divColor1.addEventListener("click",coletaCor);
        }
    }
}
palletOfColors()

// Variavel que pega a cor selecionada
function coletaCor(){
    penColour = this.style.backgroundColor
    console.log(penColour)
}


//  Verifica se a classe selected está atuando
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

// botão de tamanho

let botaoVqv = document.querySelector('#generate-board');
let value = 5;

botaoVqv.addEventListener("click", function (){
    reset ()
    n = document.querySelector('#board-size');
    value = n.value;
    console.log(value);
    if (value == ''){
        alert ("Board inválido!");
    }
    if (value < 5 ){
        value = 5;
        linePixelBoard(value)
        preenchePixelBoard(value)
    } else if (value > 50){
        value = 50;
        linePixelBoard(value)
        preenchePixelBoard(value)
    } else {
        linePixelBoard(value)
        preenchePixelBoard(value)
    }
    n.value = ''
});

linePixelBoard(value)
preenchePixelBoard(value)

// reseta os blocos

function reset (){
    let pai = document.getElementById("pixel-board");

    pai.innerHTML = '';
}

// Cria as linhas da altura
function linePixelBoard (altura){
    let pixelBoard = document.querySelector('#pixel-board')
    for (let i = 0; i < altura; i+=1){
        let line = createPixel('line')
        pixelBoard.appendChild(line);
    }
}

//cria as linhas da largura
function preenchePixelBoard (largura){
    let linhas = document.getElementsByClassName('line');
    for ( let linha of linhas){
        for ( let i = 0; i < largura; i += 1){
            let divPixel = createPixel("pixel");
            linha.appendChild(divPixel)
            divPixel.addEventListener('click', changeColor)
            divPixel.addEventListener('mousedown', function () { //Referência do stackoVerflow, perdi o link
                clicado = true;
            });
              
            divPixel.addEventListener('mouseup', function () { //Referência do stackoVerflow,  perdi o link
                clicado = false;
            });
              
            divPixel.addEventListener('mouseover', function () { //Referência do stackoVerflow,  perdi o link
                if (clicado) {
                  this.style.backgroundColor = penColour;
                }
            });
        }
    }
}


// troca a cor do elemento clicado
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
        i.style.backgroundColor = 'transparent';
    }
}

