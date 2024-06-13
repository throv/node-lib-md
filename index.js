import fs from 'fs';
import chalk from 'chalk';

const treatError = (err) => {
    throw new Error(chalk.red(err.code, 'Directory not found'));
}

const catchFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            treatError(err);
            return;
        }
        console.log(chalk.green(data));
    })
}


catchFile('./arquivos/texto.md');
