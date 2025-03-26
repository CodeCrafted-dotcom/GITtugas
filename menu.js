import { kalkulator } from './rumus.js';
import readline from 'readline';

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Minta input dari pengguna
inputUser.question('Masukkan angka pertama: ', angka1 => {
    inputUser.question('Masukkan operator (+, -, *, /): ', operator => {
        inputUser.question('Masukkan angka kedua: ', angka2 => {
            console.log(`Hasil: ${kalkulator(parseFloat(angka1), parseFloat(angka2), operator)}`);
            inputUser.close();
        });
    });
});
