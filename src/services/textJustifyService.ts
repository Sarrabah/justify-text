const charsInLine: number = 80;
export function textJustify(text: string): string {
    let textFor = textFormatter(text);
    const stringTab = textFor.split("\n");
    let textJustified = "";
    for (let line of stringTab) {
        let justifiedLine = lineJustify(line);
        textJustified = textJustified + justifiedLine + "\n";
    }
    return textJustified;
}

function textFormatter(text: string): string {
    const tab = text.split(" ");
    let lineLength = tab[0].length;
    let justifyText = tab[0];
    for (let i = 1; i < tab.length; i++) {
        lineLength = tab[i].length + lineLength;
        if (lineLength < charsInLine) {
            justifyText = justifyText + ' ' + tab[i];
            lineLength++;
        } else {
            justifyText = justifyText + '\n' + tab[i];
            lineLength = tab[i].length + 1;
        }
    }
    return justifyText;
}

function lineJustify(line: string): string {
    const wordsTab = line.split(" ");
    let spaceNumber = wordsTab.length - 1;
    let finalSpaceNb = charsInLine - line.length;
    let justifiedLine = "";
    let q = 0;
    for (let word of wordsTab) {
        if (spaceNumber !== 0) {
            q = Math.floor(finalSpaceNb / spaceNumber);
            justifiedLine = justifiedLine + word + ' '.repeat(q + 1);
            finalSpaceNb = finalSpaceNb - q;
            spaceNumber--;
        } else {
            justifiedLine = justifiedLine + wordsTab[wordsTab.length - 1];
        }
    }
    justifiedLine = justifiedLine.trim();
    return justifiedLine;
}