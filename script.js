
// paleta de cores
const colors = [/* "FFDBBB","FFD6BD","FFD5C4","FECDBF","FFC8C3","FFC3C2","FFBFC3","FFBAC4","FFB7C5","F5B8C1","F3AEC3","F3A6C6","F7A1C8","EF97C7","DD8CC6","D488C6","CB85C3","A776BB","976FB6", */"8569B4","7762B1","715BA4", "000000"];

colors.reverse()

function palletOfColors () {
    let palette = document.querySelector('#color-palette');

    // percorre e cria cada cor da paleta
    for(let i = 0; i < colors.length; i +=1 ) {
        let divColor
        if (colors[i] == "000000"){
            divColor = createPixel('color selected');
            divColor.style.backgroundColor = '#' + colors[i];
            palette.appendChild(divColor);
            divColor.addEventListener("click", selection);
        } else{
            divColor = createPixel('color');
            divColor.style.backgroundColor = '#' + colors[i];
            palette.appendChild(divColor);
            divColor.addEventListener("click", selection);
        }
    }
}

palletOfColors()

// seleciona a cor desejada
function selection (event) {
    let selectionColor = event.target.style.backgroundColor; //Para saber qual é a cor
    let todasCores = document.getElementsByClassName('color');
    let corAtual = event.target;
    corAtual.classList.add('selected')

    for ( let z = 0; z < todasCores.length; z += 1){
        if (todasCores[z].className == 'color selected' && todasCores[z] !== corAtual ){
            todasCores[z].classList.remove('selected');
        }
    }

    console.log(selectionColor);
    return selectionColor
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
    event.target.className = 'selected';
}

