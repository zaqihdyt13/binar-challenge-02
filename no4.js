const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy B",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const getTotalPenjualan = (dataPenjualanPakAldi) => {
  let totalSeluruhSepatuTerjual = 0;
  for (let i = 0; i < dataPenjualanPakAldi.length; i++) {
    totalSeluruhSepatuTerjual += dataPenjualanPakAldi[i].totalTerjual;
  }
  return totalSeluruhSepatuTerjual;
};

console.log(
  `Total seluruh sepatu Pak Aldi yang sudah terjual: ${getTotalPenjualan(
    dataPenjualanPakAldi
  )}`
);

module.exports = getTotalPenjualan;
