function changeWord(selectedText, changedText, text) {
  const newText = text.replaceAll(selectedText, changedText);
  return newText;
}

// Kalimat yang kata-nya akan diganti
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(kalimat1);
console.log(kalimat2);

// Kata penggantinya
const kataGanti1 = changeWord("mencintai", "membenci", kalimat1);
const kataGanti2 = changeWord("bromo", "semeru", kalimat2);

console.log(kataGanti1);
console.log(kataGanti2);

module.exports = changeWord;
