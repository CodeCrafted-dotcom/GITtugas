function drawRightTriangle(rows) {
    let triangle = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += "*";
        }
        triangle += "\n"; // Pindah ke baris berikutnya
    }
    console.log(triangle);
}

drawRightTriangle(5);