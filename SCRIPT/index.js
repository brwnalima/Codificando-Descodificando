// Declando variáveis importantes para me ajudar //

var seletor = document.querySelector("select")
var botaoConf = document.querySelector("btn-escolha")

var addContainer = document.getElementById("divEscondida")

var texto = document.querySelector("#msg-inicio");
var txtResultado = document.querySelector("#msg-result")

var btnCodificar = document.querySelector("#btn-codificar")
var btnDecodificar = document.querySelector("#btn-descodificar")


//Evento criado para quando o select mudar para o Cifra de Cesar
//a div escondida (passo) aparecer.
seletor.addEventListener("change", function(event){
    
    if (event.target.value == "cifraCesar") { //se o value for o value cifraCesar

        addContainer.style = "display: block"; //display aparecerá

      } else { //senão
    
        addContainer.style = "display: none"; //display sumirá - no css o display está none
      }

    });

//Evento criado para que o click am algum botão não recarregue a pág
botao.addEventListener("click", function(event){
    console.log(texto.value);
    event.preventDefault()
});


btnCodificar.addEventListener("click", function(event) {

    if (event.target.value == "base.64"){
       txtResultado = codeBase(texto)
      //codificar base 64/
    }

});
  
btnDecodificar.addEventListener("click", function() {

    if(btnDecodificar.checked && seletor.value == "cifraCesar"){
        txtResultado.value = decifra(parseInt(passo.value), texto.value);
    //decodificar cifra//
    }else if (decodificar.checked && seletor.value == "base.64") {
        txtResultado.value = decodeBase(texto.value)
    //decodificar base//
    }
 
})

//Funções de codificação e descodificação em Base64
function codeBase (texto) {
    return btoa(texto)
}

function decodeBase (texto) {
    return atob(texto) 
}
