/*
== == == == == == == == == ==
Lire le fichier de son propre code et le sauvegarder en numérotant chaque ligne comme un éditeur de text
== == == == == == == == == ==
*/

const fs = require('node:fs');
const path = require('path');

const fileName = process.argv[1].split('/').pop();
const resultFile = `${path.parse(fileName).name}.txt`;

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let content = '';
    data.split('\n').map((elem, index) => content += `${index} ${elem} \n`)

    fs.writeFile(resultFile, content, err => {
        if (err) console.error(err);
        else console.log(`écriture du fichier "${resultFile}" terminé`);
    })
});
