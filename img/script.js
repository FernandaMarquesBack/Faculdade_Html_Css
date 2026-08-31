const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const bloco = document.querySelector(".blocoMatrix");

const caracteres = "0123456789 SENAC-EAD feito por Fernanda C. Marques 阿 贝 色 德 饿 艾 弗 ش لا ؤ ي ث ب  𓆑 𓇋 𓂋 𓈖 𓄿 𓈖 𓂧 𓄿  ՖԵՐՆԱՆԴԱ ႴႤႰႬႠႬႣႠ  𐤐𐤓𐤍𐤀𐤍𐤃𐤀 ܦܪܢܢܕܐ";

const tamanho = 12;

let colunas;
let gotas;

function ajustarCanvas() {

    canvas.width = bloco.clientWidth;
    canvas.height = bloco.clientHeight;

    colunas = Math.floor(canvas.width / tamanho);

    gotas = [];

    for (let i = 0; i < colunas; i++) {
        gotas[i] = Math.random() * -30;
    }
}

ajustarCanvas();


function desenharMatrix() {

    //não deixa um pequeno rastro atrás dos números
ctx.clearRect(0, 0, canvas.width, canvas.height);  

    ctx.font = tamanho + "px monospace";

    for (let i = 0; i < gotas.length; i++) {

        const caractere =
            caracteres[
                Math.floor(Math.random() * caracteres.length)
            ];

        const x = i * tamanho;
        const y = gotas[i] * tamanho;

        ctx.fillStyle = "#619240";
//#6CCC33 -> cor verde #797c77-> cinza
        ctx.fillText(caractere, x, y);

        gotas[i]++;

        // Quando chega ao final,
        // algumas gotas voltam para cima
        if (
            y > canvas.height &&
            Math.random() > 0.975
        ) {
            gotas[i] = 0;
        }
    }

    requestAnimationFrame(desenharMatrix);
}

desenharMatrix();


window.addEventListener("resize", () => {
    ajustarCanvas();
});