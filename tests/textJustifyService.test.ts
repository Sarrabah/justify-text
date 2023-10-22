import { expect } from 'chai';
import 'mocha';
import { textJustify } from '../src/services/textJustifyService';

describe('textJustify function', () => {
    it('should justify the text correctly when the text contains many lines', () => {
        const inputText = `Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient`;
        const expectedText = `Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte,` + `\n` + `mes` + ` `.repeat(20) + `yeux` + ` `.repeat(21) + `se` + ` `.repeat(21) + `fermaient` + `\n`;
        const result = textJustify(inputText);
        expect(result).to.equal(expectedText);
    });
    it('should justify the text correctly when the text is short', () => {
        const inputText = `mes yeux se fermaient`;
        const expectedText = `mes` + ` `.repeat(20) + `yeux` + ` `.repeat(21) + `se` + ` `.repeat(21) + `fermaient` + `\n`;
        const result = textJustify(inputText);
        expect(result).to.equal(expectedText);
    });

    it('should handle an empty text', () => {
        const inputText = '';
        const result = textJustify(inputText);
        expect(result).to.equal('\n');
    });

});
