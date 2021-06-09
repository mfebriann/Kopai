const hamburgerMenu = document.querySelector(".hamburger-menu");
const tampilMenu = document.querySelector(".tampil-menu");
hamburgerMenu.addEventListener("click", function (e) {
  this.classList.toggle("tampilBorder");
  if (this.classList.contains("tampilBorder")) {
    tampilMenu.style.display = "flex";
  } else {
    tampilMenu.style.display = "none";
  }
  e.stopPropagation();
});

document.body.addEventListener("click", function () {
  if (tampilMenu.style.display == "flex" && hamburgerMenu.classList.contains("tampilBorder")) {
    hamburgerMenu.classList.remove("tampilBorder");
    tampilMenu.style.display = "none";
  }
});

const lists = document.querySelectorAll("#menu .menu-list a");
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function (e) {
    if (lists[i] == lists[0]) {
      lists[0].classList.add("semua");
      lists[1].classList.remove("terlaris");
      lists[2].classList.remove("diskon");
      lists[3].classList.remove("espresso");
      lists[4].classList.remove("arabika");
      lists[5].classList.remove("robusta");
      lists[6].classList.remove("liberika");
    } else if (lists[i] == lists[1]) {
      lists[0].classList.remove("semua");
      lists[1].classList.add("terlaris");
      lists[2].classList.remove("diskon");
      lists[3].classList.remove("espresso");
      lists[4].classList.remove("arabika");
      lists[5].classList.remove("robusta");
      lists[6].classList.remove("liberika");
    } else if (lists[i] == lists[2]) {
      lists[0].classList.remove("semua");
      lists[1].classList.remove("terlaris");
      lists[2].classList.add("diskon");
      lists[3].classList.remove("espresso");
      lists[4].classList.remove("arabika");
      lists[5].classList.remove("robusta");
      lists[6].classList.remove("liberika");
    } else if (lists[i] == lists[3]) {
      lists[0].classList.remove("semua");
      lists[1].classList.remove("terlaris");
      lists[2].classList.remove("diskon");
      lists[3].classList.add("espresso");
      lists[4].classList.remove("arabika");
      lists[5].classList.remove("robusta");
      lists[6].classList.remove("liberika");
    } else if (lists[i] == lists[4]) {
      lists[0].classList.remove("semua");
      lists[1].classList.remove("terlaris");
      lists[2].classList.remove("diskon");
      lists[3].classList.remove("espresso");
      lists[4].classList.add("arabika");
      lists[5].classList.remove("robusta");
      lists[6].classList.remove("liberika");
    } else if (lists[i] == lists[5]) {
      lists[0].classList.remove("semua");
      lists[1].classList.remove("terlaris");
      lists[2].classList.remove("diskon");
      lists[3].classList.remove("espresso");
      lists[4].classList.remove("arabika");
      lists[5].classList.add("robusta");
      lists[6].classList.remove("liberika");
    } else {
      lists[0].classList.remove("semua");
      lists[1].classList.remove("terlaris");
      lists[2].classList.remove("diskon");
      lists[3].classList.remove("espresso");
      lists[4].classList.remove("arabika");
      lists[5].classList.remove("robusta");
      lists[6].classList.add("liberika");
    }
    e.preventDefault();
  });
}

const keranjangCard = document.querySelectorAll(".keranjangCard");
const tambahBarang = document.querySelectorAll(".tambah");
const kurangBarang = document.querySelectorAll(".kurang");
const totalBarang = document.querySelectorAll(".total");
const jmlBarang = document.querySelectorAll(".jmlBarang");
let countKeranjang1 = 0;
let countKeranjang2 = 0;
let countKeranjang3 = 0;

tambahBarang[0].addEventListener("click", function () {
  if (totalBarang[0].innerText >= 0) {
    countKeranjang1 += 1;
    totalBarang[0].innerText = countKeranjang1;
  }
});

kurangBarang[0].addEventListener("click", () => {
  if (totalBarang[0].innerText >= 1) {
    countKeranjang1 -= 1;
    totalBarang[0].innerText = countKeranjang1;
  }
});

keranjangCard[0].addEventListener("click", (e) => {
  jmlBarang.forEach((jumlahBarang) => {
    if (countKeranjang2 == 0 && countKeranjang3 == 0) {
      jumlahBarang.innerText = countKeranjang1;
    } else if (!countKeranjang1 == 0 && (countKeranjang2 != 0 || countKeranjang3 != 0)) {
      jumlahBarang.innerText = countKeranjang1 + countKeranjang2 + countKeranjang3;
    }
  });
  if (countKeranjang1 == 0) {
    alert("Masukkan jumlah barang terlebih dahulu!");
  }
  e.preventDefault();
});

tambahBarang[1].addEventListener("click", function () {
  if (totalBarang[1].innerText >= 0) {
    countKeranjang2 += 1;
    totalBarang[1].innerText = countKeranjang2;
  }
});

kurangBarang[1].addEventListener("click", () => {
  if (totalBarang[1].innerText >= 1) {
    countKeranjang2 -= 1;
    totalBarang[1].innerText = countKeranjang2;
  }
});

keranjangCard[1].addEventListener("click", (e) => {
  jmlBarang.forEach((jumlahBarang) => {
    if (countKeranjang1 == 0 && countKeranjang3 == 0) {
      jumlahBarang.innerText = countKeranjang2;
    } else if (!countKeranjang2 == 0 && (countKeranjang1 != 0 || countKeranjang3 != 0)) {
      jumlahBarang.innerText = countKeranjang1 + countKeranjang2 + countKeranjang3;
    }
  });
  if (countKeranjang2 == 0) {
    alert("Masukkan jumlah barang terlebih dahulu!");
  }
  e.preventDefault();
});

tambahBarang[2].addEventListener("click", function () {
  if (totalBarang[2].innerText >= 0) {
    countKeranjang3 += 1;
    totalBarang[2].innerText = countKeranjang3;
  }
});

kurangBarang[2].addEventListener("click", () => {
  if (totalBarang[2].innerText >= 1) {
    countKeranjang3 -= 1;
    totalBarang[2].innerText = countKeranjang3;
  }
});

keranjangCard[2].addEventListener("click", (e) => {
  jmlBarang.forEach((jumlahBarang) => {
    if (countKeranjang1 == 0 && countKeranjang2 == 0) {
      jumlahBarang.innerText = countKeranjang3;
    } else if (!countKeranjang3 == 0 && (countKeranjang1 != 0 || countKeranjang2 != 0)) {
      jumlahBarang.innerText = countKeranjang1 + countKeranjang2 + countKeranjang3;
    }
  });
  if (countKeranjang3 == 0) {
    alert("Masukkan jumlah barang terlebih dahulu!");
  }
  e.preventDefault();
});

const keranjang = document.querySelectorAll(".keranjang");
keranjang.forEach(function (keranjangItems) {
  keranjangItems.addEventListener("click", function (e) {
    alert(`Total barang di keranjang: ${jmlBarang[0].innerText}`);
    e.preventDefault();
  });
});

const favoriteCard = document.querySelectorAll(".favoriteCard");
const jmlFavorite = document.querySelectorAll(".jmlFavorite");
let countFavorite = 0;
favoriteCard.forEach(function (itemsFavorite) {
  itemsFavorite.addEventListener("click", function (e) {
    if (e.target == itemsFavorite.children[0]) {
      itemsFavorite.children[0].style.display = "none";
      itemsFavorite.children[1].style.display = "inline";
      countFavorite += 1;
      jmlFavorite.forEach(function (itemJmlFavorite) {
        itemJmlFavorite.innerText = countFavorite;
        if (countFavorite <= -1) {
          itemJmlFavorite.innerText = 0;
        }
      });
    } else {
      itemsFavorite.children[1].style.display = "none";
      itemsFavorite.children[0].style.display = "inline";
      countFavorite -= 1;
      jmlFavorite.forEach(function (itemJmlFavorite) {
        itemJmlFavorite.innerText = countFavorite;
        if (countFavorite <= 0) {
          itemJmlFavorite.innerText = 0;
        }
      });
    }

    e.preventDefault();
  });
});

const favorite = document.querySelectorAll(".favorite");
favorite.forEach(function (favoriteItems) {
  favoriteItems.addEventListener("click", function (e) {
    if (jmlFavorite[0]) {
      alert(`Total favorite: ${countFavorite}`);
    }
    e.preventDefault();
  });
});

const btnKirim = document.getElementById("kirim");
const notifikasi = document.querySelectorAll(".notifikasi");
const input = document.querySelectorAll(".required");
btnKirim.addEventListener("click", (e) => {
  if (input[0].value == "" || input[1].value == "" || input[2].value == "") {
    alert("Isi terlebih dahulu data yang masih kosong!");
  } else if (input[1].value !== "Pelajar" && input[1].value !== "Sudah bekerja" && input[1].value !== "Mahasiswa") {
    alert("Inputan status harus sesuai pilihan!");
    input[1].value = "";
  } else if (input[0].value !== "" || input[1].value !== "" || input.value[2] !== "") {
    alert(`Terima kasih ${input[0].value} atas komentar nya`);
    input.forEach((kosongkanInput) => {
      kosongkanInput.value = "";
    });
    document.getElementById("sosmed").value = "";
  }
  e.preventDefault();
});

input[0].addEventListener("input", () => {
  if (input[0].value != "") {
    notifikasi[0].style.display = "none";
  } else if (input[0].value == "") {
    notifikasi[0].style.display = "inline";
  }
});

input[1].addEventListener("input", () => {
  if (input[1].value != "") {
    notifikasi[1].style.display = "none";
  } else if (input[1].value == "") {
    notifikasi[1].style.display = "inline";
  }
});

input[2].addEventListener("input", () => {
  if (input[2].value != "") {
    notifikasi[2].style.display = "none";
  } else if (input[2].value == "") {
    notifikasi[2].style.display = "inline";
    document.querySelector(".komentar-notif").style.display = "block";
  }
});

const sosmedInput = document.getElementById("sosmed");
const hapus = document.getElementById("hapus");
hapus.addEventListener("click", (e) => {
  if (input[0].value == "" && input[1].value == "" && input[2].value == "" && sosmedInput.value == "") {
    alert(`Data masih kosong, apa yang mau dihapus?`);
  } else {
    input.forEach((hapusItem) => {
      if (hapusItem.value !== "" || sosmedInput.value !== "") {
        sosmedInput.value = "";
        hapusItem.value = "";
        notifikasi.forEach((tampilNotifikasiLangsung) => {
          tampilNotifikasiLangsung.style.display = "inline";
        });
        document.querySelector(".komentar-notif").style.display = "block";
      }
    });
  }
  e.preventDefault();
});
