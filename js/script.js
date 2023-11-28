const texto = "Seja bem vindo(a) ao Portifólio de : "
      const tempoDigitacao = 150; // Tempo em milissegundos
      const tempoPausa = 1000; // Tempo de pausa em milissegundos entre loops
    
      function maquinaEscrever(texto, elemento, tempo) {
        let i = 0;
        function escrever() {
          elemento.innerHTML += texto.charAt(i);
          i++;
          if (i <= texto.length) {
            setTimeout(escrever, tempo);
          } else {
            setTimeout(resetar, tempoPausa);
          }
        }
    
        function resetar() {
          i = 0;
          elemento.innerHTML = '';
          setTimeout(escrever, tempoPausa);
        }
    
        escrever();
      }
    
      window.onload = function() {
        const divTexto = document.getElementById('maquina-escrever');
        maquinaEscrever(texto, divTexto, tempoDigitacao);
      };