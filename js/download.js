import { fetchData } from "./fetchData.js";
var data = [];

// Menampilkan loading screen
var loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "flex";
localStorage.clear();

$(document).ready(async function () {
  // Mengambil data dari API
  try {
    const dataRes = await fetchData();
    data = dataRes?.dataPeserta;

    var a = false;
    var nopendaftaran = new URLSearchParams(window.location.search).get(
      "nopendaftaran"
    );
    var jalurpenerimaan = new URLSearchParams(window.location.search).get(
      "jalurpenerimaan"
    );

    for (var i = 0; i < data.length; i++) {
      if (
        nopendaftaran == data[i].nopendaftaran &&
        jalurpenerimaan == data[i].jalurpenerimaan
      ) {
        a = true;
        loadingScreen.style.display = "none";
        return;
      }
    }

    if (!a) {
      $(".download-data").remove();
      $("#notfound").append(
        '<div class="py-12 mx-auto"> <div class="text-3xl font-bold text-center text-white w-4/5 mx-auto"> TOKEN TIDAK VALID! </div> <div class="text-md text-center text-white font-bold container mx-auto my-3" > Perhatian! <span class="font-medium" >untuk mengunduh kelengkapan administrasi peserta MPLS SMANSA, silahkan akses melalui halaman sebelumnya terlebih dahulu.</span > </div> <img src="../img/logo-putih.png" alt="" class="h-40 w-auto mx-auto my-12" /> </div>'
      );
      loadingScreen.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    loadingScreen.style.display = "none";
    $("#notfound").append(
      '<div class="py-12 mx-auto"> <div class="text-3xl font-bold text-center text-white w-4/5 mx-auto"> ERROR MENGAMBIL DATA! </div> <div class="text-md text-center text-white font-bold container mx-auto my-3" > Perhatian! <span class="font-medium" >Terjadi kesalahan saat mengambil data.</span > </div> <img src="../img/logo-putih.png" alt="" class="h-40 w-auto mx-auto my-12" /> </div>'
    );
  }
});
