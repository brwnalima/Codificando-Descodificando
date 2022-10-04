// Declando variáveis importantes para me ajudar //

var seletor = document.querySelector("select")
var botaoConf = document.querySelector("btn-escolha")

var addContainer = document.getElementById("divEscondida")

var texto = document.querySelector("#msg-inicio");
var txtResultado = document.querySelector("#msg-result")

var btnCodificar = document.querySelector("#btn-codificar")
var btnDecodificar = document.querySelector("#btn-descodificar")


//Aqui estou adicionando um evento para quando o usuário interagir 
//com a opção select
//O change evento é acionado para <input>, <select> e <textarea>, 
//quando uma alteração ao valor do elemento é cometida pelo usuário.//

seletor.addEventListener("change", function(event){
    var addContainer = document.getElementById("divEscondida")
    if (event.target.value == "cifraCesar") {

        addContainer.style = "display: block";
        
      } else {
    
        addContainer.style = "display: none";
      }
    });
 


















// Mostrar div escondida //


function mostrarDiv() {
    
    var x = document.getElementById('divEscondida');

        if (seletor[1].checked && x.style.display === 'none') {
            x.style.display = 'block';
               
       } else {
            x.style.display = 'none';
       }
}
