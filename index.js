// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [{
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (items) => {
  let orders = [];

  for (let item = 0; item < items.length; item++) {
    let order = "- " + items[item].nama + " x " + items[item].kuantitas + " = Rp. " + rupiah(items[item].harga * items[item].kuantitas);
    orders.push(order);
  }

  return orders;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (items) => {

  let totalOrders = null;

  for (let item = 0; item < items.length; item++) {
    totalOrders += items[item].harga * items[item].kuantitas;
  }

  return rupiah(totalOrders);

};

const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    currency: "IDR"
  }).format(number);
}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};