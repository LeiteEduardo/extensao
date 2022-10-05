(function () {
  function setBackgroudColor() {
    var allElements = document.body.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
      console.log(allElements[i].id);
      if ( !(allElements[i].id == "btn-ativar" || allElements[i].id == "btn-plus-font" || allElements[i].id == 'divExtension' || allElements[i].id == 'btn-menos-font' || allElements[i].id == 'btn-padrao-font') )
      {
        allElements[i].style.backgroundColor='black';
        allElements[i].style.color='yellow';
        allElements[i].style.borderColor='yellow';
      }
    }
  }

  var dimensoes = new Array("100%", "110%", "120%"/*, "130%", "140%" , "150%", "160%" */);
  // Dimensão Padrão
  var dimensaoPadrao = 0;
  // Elementos html destino destino / elementos extras
  var elementoDestino = new Array("p", "input", "select", "button");
  // funão com os parametros tags alvo e posição do tamanho do vetor
  function controleDeFonte(alvo, posicaoTamanho) {
      if (document.getElementById) {
          var e, n, o, l = null;
          var m = dimensaoPadrao;
          for ((m += posicaoTamanho) < 0 && (m = 0), m > 2 && (m = 2), dimensaoPadrao = m, (l = document.getElementById(alvo)) || (l = document.getElementsByTagName(alvo)[0]), l.style.fontSize = dimensoes[m], e = 0; e < elementoDestino.length; e++)
          {
              for (o = l.getElementsByTagName(elementoDestino[e]), n = 0; n < o.length; n++) 
              {
                if ( !(o[n].id == "btn-ativar" || o[n].id == "btn-plus-font" || o[n].id == 'divExtension' || o[n].id == 'btn-menos-font' || o[n].id == 'btn-padrao-font') )
                  {
                    o[n].style.fontSize = dimensoes[m];
                  }
              }
          }
      }   
      // forçando menu ficar aberto após clique
      event.stopPropagation();
    }

  function createButton() {
    var divActions = document.createElement('div');
    divActions.id = "divExtension";

    var btn = document.createElement('button');
    btn.innerText = "Ativar";
    btn.classList.add('btn');
    btn.id = "btn-ativar"
    btn.type = "button"

    var btnFontPlus = document.createElement('button');
    btnFontPlus.innerText = "+ Fonte";
    btnFontPlus.classList.add('btn');
    btnFontPlus.id = "btn-plus-font";
    btn.type = "button";

    var btnFontMenos = document.createElement('button');
    btnFontMenos.innerText = "- Fonte";
    btnFontMenos.classList.add('btn');
    btnFontMenos.id = "btn-menos-font";
    btn.type = "button";

    var btnPadrao = document.createElement('button');
    btnPadrao.innerText = "Pdrão";
    btnPadrao.classList.add('btn');
    btnPadrao.id = "btn-padrao-font";
    btn.type = "button";

    document.querySelector("body").appendChild(divActions);
    document.querySelector("#divExtension").appendChild(btn);
    document.querySelector("#divExtension").appendChild(btnFontPlus);
    document.querySelector("#divExtension").appendChild(btnFontMenos);
    document.querySelector("#divExtension").appendChild(btnPadrao);
  }

  function defineEvents() {
    document.getElementById("btn-ativar").addEventListener("click",function(event){
      setBackgroudColor();
    });

    document.getElementById("btn-plus-font").addEventListener("click",function(event){
      controleDeFonte('body',1);
    });

    document.getElementById("btn-menos-font").addEventListener("click",function(event){
      controleDeFonte('body',-1);
    });

    document.getElementById("btn-padrao-font").addEventListener("click",function(event){
      controleDeFonte('body',-2);
    });
  }

  createButton();
  defineEvents();
})();