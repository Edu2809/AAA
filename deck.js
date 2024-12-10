let cartas = []

fetch('http://127.0.0.1:3000/cartas.json')
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(arrayDeCartas){        
        cartas = arrayDeCartas
        montarDeck()
    })


function montarDeck() {

    cartas.forEach( function(umacarta) {
        const carta = document.createElement('article')
        carta.classname = 'carta'
        
        const innerHTMLcarta = `
        
              <header class="linha">
                <div class="teste">
                 
                    <img class="ps" src="img/ps.png">
                  </div>   
                  </div>
                <h1 class = "nome">${umacarta.nome}</h1>
                <h2 class="nome2">Poder: ${umacarta.poder}</h2>
              </header>
              <section>
                <div class="grade">
                  <div class="linha2">
                  <img src="${umacarta.imagem}">
                </div>
              </section>
               <article>
                <div class="linha3">
                  <p class="nome2">informação</p> 
                </div>
               </article>
                <section>
                  <div class="linha4">
            
                    <p class="nome3">${umacarta.texto}</p>
                  </div>
              </section>
              
        
              `
              carta.innerHTML = innerHTMLcarta
              const deck = document.querySelector('.baralho')
              deck.appendChild(carta)
    
    
    
    
    
    
    
    
    
    })
    
}

