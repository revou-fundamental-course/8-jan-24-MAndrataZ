var currentFunction = null;

function squareAreaCount() {
    currentFunction = "area";
    var sisi = parseInt(document.getElementById('squareSide').value);
    if (isNaN(sisi)) {
        alert("Anda belum memasukkan nilai sisi"); //validasi
    } else if (sisi <= 0) {
        alert("Nilai sisi tidak bisa negatif");
    } else {
        var luas = sisi * sisi;
        const resultMessageArea =
            `<p>Luas Persegi : S x S</p>
            <p>Luas Persegi : ${sisi} x ${sisi}</p>
            <p><strong>Luas Persegi : ${luas}</strong></p>`;

        document.getElementById("squareAreaResult").innerHTML = resultMessageArea;
    }
}

function squareCircumferenceCount() {
    currentFunction = "circumference";
    var sisi = parseInt(document.getElementById('squareSide').value);
    if (isNaN(sisi)) {
        alert("Anda belum memasukkan nilai sisi"); //validasi
    } else if (sisi <= 0) {
        alert("Nilai sisi tidak bisa negatif");
    } else {
        var keliling = 4 * sisi;
        const resultMessageCircumference =
            `<p>Keliling persegi : 4 x S</p>
            <p>Keliling Persegi : ${4} x ${sisi}</p>
            <p><strong>Keliling Persegi : ${keliling}</strong></p>`;

        document.getElementById("squareAreaResult").innerHTML = resultMessageCircumference;
    }
}

function resetAreaCount() {
    // Reset input
    document.getElementById("squareSide").value = "";
    
    // Hapus result Message
    document.getElementById("squareAreaResult").innerHTML = "";
    currentFunction = null;
}

// Additional event listeners for the buttons
document.getElementById("countAreaButton").addEventListener("click", squareAreaCount);
document.getElementById("countCircumferenceButton").addEventListener("click", squareCircumferenceCount);
document.getElementById("resetButton").addEventListener("click", resetAreaCount);