const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualanNovel) => {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let bukuTerlaris = {
    namaProduk: "",
    totalTerjual: 0,
  };
  let penulisTerlaris = {
    penulis: "",
    totalTerjual: 0,
  };

  for (let i = 0; i < dataPenjualanNovel.length; i++) {
    const novel = dataPenjualanNovel[i];

    // Mencari total keuntungan
    totalKeuntungan += (novel.hargaJual - novel.hargaBeli) * novel.totalTerjual;
    let keuntungan = totalKeuntungan.toString();
    (sisa = keuntungan.length % 3),
      (keuntunganRupiah = keuntungan.substring(0, sisa)),
      (ribuan = keuntungan.substring(sisa).match(/\d{3}/g));

    if (ribuan) {
      pemisah = sisa ? "." : "";
      keuntunganRupiah += pemisah + ribuan.join(".");
    }

    // Mencari total modal
    totalModal += novel.hargaBeli * (novel.totalTerjual + novel.sisaStok);
    let modal = totalModal.toString();
    (sisa = modal.length % 3),
      (modalRupiah = modal.substring(0, sisa)),
      (ribuan = modal.substring(sisa).match(/\d{3}/g));

    if (ribuan) {
      pemisah = sisa ? "." : "";
      modalRupiah += pemisah + ribuan.join(".");
    }

    // Mencari buku terlaris
    if (novel.totalTerjual > bukuTerlaris.totalTerjual) {
      bukuTerlaris = {
        namaProduk: novel.namaProduk,
        totalTerjual: novel.totalTerjual,
      };
    }

    // Mencari penulis terlaris
    if (novel.penulis === penulisTerlaris.penulis) {
      penulisTerlaris.totalTerjual += novel.totalTerjual;
    } else if (novel.totalTerjual > penulisTerlaris.totalTerjual) {
      penulisTerlaris = {
        penulis: novel.penulis,
        totalTerjual: novel.totalTerjual,
      };
    }
  }

  // Persentase keuntungan yang didapat
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(
    2
  );

  return {
    keuntunganRupiah: `Rp. ${keuntunganRupiah}`,
    modalRupiah: `Rp. ${modalRupiah}`,
    bukuTerlaris: bukuTerlaris.namaProduk,
    penulisTerlaris: penulisTerlaris.penulis,
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
  };
};

const informasiPenjualan = getInfoPenjualan(dataPenjualanNovel);

console.log(informasiPenjualan);

module.exports = informasiPenjualan;

// function formatRupiah(angka, prefix) {
//   var modal = hitungTotalKeuntungan(dataPenjualanNovel).totalModal.toString(),
//     split = modal.split(","),
//     sisa = split[0].length % 3,
//     rupiah = split[0].substr(0, sisa),
//     ribuan = split[0].substr(sisa).match(/\d{3}/gi);

//   // tambahkan titik jika yang di input sudah menjadi angka ribuan
//   if (ribuan) {
//     separator = sisa ? "." : "";
//     rupiah += separator + ribuan.join(".");
//   }

//   rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
//   return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
// }

// console.log("Total Modal: " + formatRupiah(this.value, "Rp. "));
