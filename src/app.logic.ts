import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

// console.log(yarg);

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
==============================================
                Tabla del ${base}
==============================================\n`

for (let index = 1; index <= limit; index++) {
    outputMessage += `${base} X ${index} = ${base * index}\n`;
}
outputMessage = headerMessage + outputMessage;

if (showTable) {
    console.log(outputMessage);
}

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created');

// let outputMessage = '';
// const base = 5;
// const headerMessage = `
// ==============================================
//           Tabla del ${base}
// ==============================================\n`

// for (let index = 1; index <= 10; index++) {
//     outputMessage += `${base} X ${index} = ${base * index}\n`;
// }
// outputMessage = headerMessage + outputMessage;
// console.log(outputMessage);

// const outputPath = `outputs`;

// fs.mkdirSync(outputPath, {recursive: true});

// fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
// console.log('File created');