function calcularStickers() {
    let totalStickers = 0;
    let inputs = document.querySelectorAll("input[type='number']");
    for (let i = 0; i < inputs.length; i++) {
        totalStickers += parseInt(inputs[i].value);
    }
    if (totalStickers <= 10) {
        document.getElementById("resultado").textContent = "Llevas " + totalStickers + " stickers.";
    } else {
        document.getElementById("resultado").textContent = "Llevas demasiados stickers.";
    }
}
