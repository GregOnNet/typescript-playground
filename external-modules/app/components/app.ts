import zip     = require("./zip.code.validator");
import letters = require("./letters.only.validator");

var validateZip = new zip.ZipCodeValidator();
var validateLetters = new letters.LettersOnlyValidator();

var zipCode = '04177';
var lettersWithNumber = 'E53L';

console.info(validateZip.isAcceptable(zipCode));
console.error(validateLetters.isAcceptable(lettersWithNumber));
