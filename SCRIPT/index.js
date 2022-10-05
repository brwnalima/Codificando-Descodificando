// Declando variáveis importantes para me ajudar //

var seletor = document.querySelector("select")
var addContainer = document.getElementById("divEscondida")
var texto = document.querySelector("#msg-inicio")
var txtResultado = document.querySelector("#msg-result")
var radioCode = document.getElementById("codificar")
var radioDecode = document.getElementById("decodificar")
var btnCodificar = document.getElementById("btn-codificar")


//Evento criado para quando o select mudar para o Cifra de Cesar a div escondida (passo) aparecer.
seletor.addEventListener("change", function(event){
    
    if (event.target.value == "cifraCesar") { //se o value for o value cifraCesar

        addContainer.style = "display: block"; //display aparecerá
        document.body.style.backgroundSize = "121%"

      } else { //senão
    
        addContainer.style = "display: none"; //display sumirá - no css o display está none
      }

    });



//evento criado para evitar o comportamento de ao clicar no botão a página recarregar//
btnCodificar.addEventListener("click", function(event){
    console.log(texto.value)
    event.preventDefault()
})
    
// Dependendo do radio selecionado, o botão btnCodificar muda a frase

radioCode.addEventListener("click", function() {
    btnCodificar.innerText = "Codificar Texto"
});
    
radioDecode.addEventListener("click", function() {
    btnCodificar.innerText = "Decodificar Texto"
});
    



var passo = document.querySelector("#passo")



    
botao.addEventListener("click", function() {
    if(passo.value > 26){
        return txtResultado.value = `O valor que você usou foi de ${passo.value}. Digite um valor de 1 a 25.`
    }

    if(radioCode.checked && seletor.value == "cifraCesar"){
        txtResultado.value = cifra(parseInt(passo.value), texto.value);
      //codificar cifra//
    }else if(radioCode.checked && seletor.value == "base.64"){
        resultado.value = codificandoABase64(texto.value)
        //codificar base 64/
    }else if(radioDecode.checked && seletor.value == "cifraCesar"){
        txtResultado.value = decifra(parseInt(passo.value), texto.value);
        //decodificar cifra//
    }else if(radioDecode.checked && seletor.value == "base.64"){
        txtResultado.value = decodificandoABase64(texto.value)
        //decodificar base//
    }
});
    
      
    
function cifra (passo, texto){
    var textoCodificado = ""
    var codigo = 0
    for(var i = 0; i < texto.length; i++){
        if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
            codigo = (((texto.charCodeAt(i) - 65) + passo) % 26) + 65;
        }else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
            codigo = (((texto.charCodeAt(i) - 97) + passo) % 26) + 97;
        }else if(texto.charCodeAt(i) == 32){
            codigo = 32
        }
          textoCodificado += String.fromCharCode(codigo)
        }

        return textoCodificado;
      }
      
function decifra (passo, texto){
    var textoCodificado = ""
    var codigo = 0

    for(var i = 0; i < texto.length; i++){

        if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
            if((texto.charCodeAt(i) - 65) - passo < 0){
              codigo = (((texto.charCodeAt(i) - 65) - passo + 26) % 26) + 65;
            }else{
              codigo = (((texto.charCodeAt(i) - 65) - passo) % 26) + 65;
        }
            
        }else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
            if((texto.charCodeAt(i) - 97) - passo < 0){
              codigo = (((texto.charCodeAt(i) - 97) - passo + 26) % 26) + 97;
            }else{
              codigo = (((texto.charCodeAt(i) - 97) - passo) % 26) + 97;
            }
            
        }else if(texto.charCodeAt(i) == 32){
            codigo = 32
        }
          textoCodificado += String.fromCharCode(codigo)
        }
        return textoCodificado;
      }
    
      
    
      //btoa e atob funções js//
    function codificandoABase64(texto) {
        return btoa(texto);
    }
      
    function decodificandoABase64(texto) {
        return atob(texto);
    }





