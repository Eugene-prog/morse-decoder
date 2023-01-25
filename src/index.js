const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const sep = (xs, s) => (xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : []);

  const bin = sep(expr, 10);

  let result = bin
    .map((item) => {
      return sep(item, 2).reduce((total, currentValue) => {
        if (currentValue === "11") {
          total += "-";
        }
        if (currentValue === "10") {
          total += ".";
        }
        return total;
      }, "");
    })
    .map((item) => {
      if (item.trim() !== "") {
        return MORSE_TABLE[item];
      } else {
        return " ";
      }
    })
    .join("");

  return result;
}

module.exports = {
  decode,
};
