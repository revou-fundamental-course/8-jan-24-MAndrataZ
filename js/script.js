function squareSideCount() {
    var squareSideValue = parseInt(document.getElementById('squareSide').value);
    var squareAreaResult = squareSideValue * squareSideValue;
    // Menampilkan hasil perhitungan di dalam elemen 'resultText'
    var resultText = document.getElementById('resultText');
    resultText.textContent = 'L = S x S\n';
    resultText.textContent += 'L = (' + squareSideValue + ') x (' + squareSideValue + ')\n';
    resultText.textContent += 'L = ' + squareAreaResult;

    // Menampilkan section hasil perhitungan
    var resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
}

function resetCount() {
    document.getElementById("squareSide").value = "";

    // Menyembunyikan section hasil perhitungan
    var resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'none';
}