const checkTypeNumber = (givenNumber) => {
  let result; // Untuk menyimpan hasil

  if (givenNumber === undefined) {
    // Kondisi jika tidak ada parameter
    result = "Error: Bro where is the parameter?";
  } else if (typeof givenNumber !== "number") {
    // Kondisi jika tipe datanya bukan number
    result = "Error: Invalid data type";
  } else if (givenNumber % 2 === 0) {
    // Kondisi jika Angka Genap
    result = `${givenNumber} = GENAP`;
  } else {
    // Kondisi jika Angka Ganjil
    result = `${givenNumber} = GANJIL`;
  }

  return result;
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

module.exports = checkTypeNumber;
