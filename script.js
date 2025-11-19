// Este script pode ser usado para adicionar interatividade ou
// para controlar a velocidade dinamicamente via JS.

document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.getElementById('marquee-content');
    
    // g. Controlar a velocidade do letreiro (em segundos)
    const velocidadeEmSegundos = 20; // Defina a velocidade desejada (quanto menor, mais rápido)

    // Aplica a velocidade ao CSS através de uma variável (melhor prática)
    // Se o CSS fosse estático, este código seria desnecessário.
    marqueeContent.style.setProperty('--speed', `${velocidadeEmSegundos}s`);

    // Nota: A variável --speed deve ser definida no CSS para este método funcionar:
    /*
    .marquee-content {
        animation: slide-bounce var(--speed) linear infinite;
    }
    */
    
    // Como a velocidade já está definida no CSS (30s) no exemplo anterior,
    // este bloco JavaScript é *opcional* e apenas demonstra como você faria
    // o controle via JS. Para o código anterior, ele não é estritamente necessário.

    // Exemplo de como mudar o texto (c. Frase motivacional) via JS:
    // marqueeContent.textContent = "Nova frase inspiradora!";
});