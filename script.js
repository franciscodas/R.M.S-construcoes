const sair = document.querySelector(".pop-up");
const formul = document.querySelector(".formulario");
const captura = document.querySelectorAll(".pop-up1 .botao-pop");
const nome = document.getElementById("nome");
const adress = document.getElementById("adress");
const referencia = document.getElementById("reference");
const rolagem = document.querySelectorAll(".opcao");
const menu = document.querySelector(".menu");





let evento;


rolagem.forEach(scrol =>{
    scrol.addEventListener("click", interar);
})
function interar(event){
    let conteudo = event.target;
    let conca = conteudo.getAttribute('id');
    let sesao =document.querySelector(conca).offsetTop
    window.scroll({
        top: sesao -100})  
        if (conca) {
            conca.scrollIntoView({ behavior: 'smooth' });
          }
}

window.addEventListener("scroll", function() {
    if(scrollY > 0){
        menu.style.top= 0
    }
    else{menu.style.top = 0}
});
 
function orcamento(){
    if(sair.style.display === "none"){
    sair.style.display = "block"}
    else{sair.style.display= "none"}
}

function sairpop(){
sair.style.display= "none" 
}
function sairform(){
    formul.style.display= "none" 
    const input = document.querySelectorAll(".formulario1 .campo .campo-input");
    input.forEach(camp => camp.value = "");
    }

captura.forEach(descri => {descri.addEventListener("click", disparo);});

function disparo(event) {
     evento = event.target.innerText;
    formul.style.display = "block";
    sairpop()
    
}

function confirmar(){
    if (nome.value === "") {
        // Adiciona uma borda vermelha ao campo nome se estiver vazio
        nome.style.border = "1px solid red";
    }
    else if (adress.value === "") {
        
        adress.style.border = "1px solid red";
    } 
    else if (referencia.value === "") {
        
        referencia.style.border = "1px solid red";
    }
    else { console.log(`Nome: ${nome.value}, 
    Endereço: ${adress.value},
     Referência: ${referencia.value},
      Evento: ${evento}`);
        msg(); // Chama a função para enviar a mensagem via WhatsApp
      sairform();}
    
}

// mensagem de resumo via WhatsApp
function msg(){
    const resumo = 
`
 *Resumo do Pedido de Orçamento*:

 *Nome:* ${nome.value}
 *Endereço:* ${adress.value}
 *Referência:* ${referencia.value}
 *Serviço desejado:* ${evento}

 Entraremos em contato em breve!`;

var mensagem = encodeURIComponent(resumo);
    var linkzap = `https://wa.me/5594984333958?text=${mensagem}`;
    window.location.href = linkzap; 
}
