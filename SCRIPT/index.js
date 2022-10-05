// Declando variáveis importantes para me ajudar //

var seletor = document.querySelector("select")
var addContainer = document.getElementById("divEscondida")
var texto = document.querySelector("#msg-inicio")
var txtResultado = document.querySelector("#msg-result")
var radioCode = document.getElementById("#codificar")
var radioDecode = document.getElementById("#decodificar")
var btnCodificar = document.getElementById("#btn-codificar")


//Evento criado para quando o select mudar para o Cifra de Cesar a div escondida (passo) aparecer.
seletor.addEventListener("change", function(event){
    
    if (event.target.value == "cifraCesar") { //se o value for o value cifraCesar

        addContainer.style = "display: block"; //display aparecerá
        document.body.style.backgroundSize = "121%"

      } else { //senão
    
        addContainer.style = "display: none"; //display sumirá - no css o display está none
      }

    });

// Dependendo do radio selecionado, o botão btnCodificar muda a frase

var fraseCode = "Codificar texto"
var fraseDecode = "Decodificar texto"

radioCode.addEventListener("click", function() {
    btnCodificar.innerText = fraseCode
  });
  

radioDecode.addEventListener("click", function() {
   console.log(btnCodificar.innerText = fraseDecode)
  });

//Evento criado para que o click am algum botão não recarregue a pág
btnCodificar.addEventListener("check", function(event){
    console.log(texto.value);
    event.preventDefault()
});
