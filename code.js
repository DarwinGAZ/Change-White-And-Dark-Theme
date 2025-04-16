var blackradio = document.querySelector("#Escuro");
var whiteradio = document.querySelector("#Claro");
const DarkImg = document.querySelector("#WhiteImg");
const WhiteImg = document.querySelector("#DarkImg");

var corpo = document.body;

//Seleciona a Caixa Branca
whiteradio.checked = true;

//Quando clicar em alguma caixa, acontece a função
blackradio.addEventListener("click", toggletheme);
whiteradio.addEventListener("click", toggletheme);

function toggletheme() {
    //Tema Preto
    if (blackradio.checked) {
        corpo.style.background = "#121212";
        corpo.style.color = "white";
        DarkImg.style.filter = "invert(1)";
        WhiteImg.style.filter = "invert(1)";
    } else if (whiteradio.checked) {
        //Tema Branco
        corpo.style.background = "white";
        corpo.style.color = "black";
        DarkImg.style.filter = "invert(0)";
        WhiteImg.style.filter = "invert(0)";
    }
}
