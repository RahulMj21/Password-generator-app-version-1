console.log("hey I am Rahul Mondal");

const ammountInNumber = document.getElementById("ammount-in-number");
const ammountInRange = document.getElementById("ammount-in-range");

const form = document.getElementById("form");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const result = document.getElementById("result");

const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
const numberCharCodes = arrayFromLowToHigh(48, 57);
const symbolCharCodes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

ammountInNumber.addEventListener("input", syncAmmount);
ammountInRange.addEventListener("input", syncAmmount);
function syncAmmount(e) {
  const value = e.target.value;
  ammountInNumber.value = value;
  ammountInRange.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const characterAmmount = ammountInNumber.value;
  const includeUppercase = uppercase.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;
  const password = generatePassword(
    characterAmmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
    result.innerText=password
});

function generatePassword(
  characterAmmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
    let charCodes=lowercaseCharCodes
    if(includeUppercase) charCodes=charCodes.concat(uppercaseCharCodes)
    if(includeNumbers) charCodes=charCodes.concat(numberCharCodes)
    if(includeSymbols) charCodes=charCodes.concat(symbolCharCodes)

    const passwordCharacters=[];

    for(i=0; i<characterAmmount;i++){
        const characterCode=charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

    return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
