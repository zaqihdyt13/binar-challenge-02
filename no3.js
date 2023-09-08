const getAngkaTerbesarKedua = (array) => {
  if (!Array.isArray(array)) {
    return "Tidak ada parameter atau Input bukan array";
  }

  // Array durutkan secara descending
  const sortedArray = array.sort((a, b) => b - a);
  console.log(sortedArray);
  return sortedArray[2];
};

// Array yang diurutkan dan dipilih angka terbesar kedua
const dataAngka = [2, 3, 5, 6, 6, 4];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output: Angka terbesar kedua
console.log(getAngkaTerbesarKedua(0)); // Output: Input bukan array
console.log(getAngkaTerbesarKedua()); // Output: Tidak ada parameter

module.exports = getAngkaTerbesarKedua;
