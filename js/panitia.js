import { fetchData } from "./fetchData.js";
import { listTable } from "./listTable.js";

var data = [];

var loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "flex";
localStorage.clear();

$(document).ready(async function () {
  try {
    const dataRes = await fetchData();
    data = dataRes?.dataPanitia;
    var a = false;
    var uc = new URLSearchParams(window.location.search).get("uc");
    for (var i = 0; i < data.length; i++) {
      if (uc == data[i].kode) {
        $("#namapanitia").append(data[i].nama);
        a = true;
        break;
      }
    }
    listTable(dataRes?.dataUrlPanitia);
    loadingScreen.style.display = "none";
    if (!a) {
      $(".download-data").remove();
      $("#notfound").append(
        '<div class="py-12 mx-auto"> <div class="text-3xl font-bold text-center text-white w-4/5 mx-auto"> KODE TIDAK VALID! </div> <div class="text-md text-center text-white font-bold container mx-auto my-3" > Perhatian! <span class="font-medium" >pastikan kode yang anda masukkan benar.</span > </div> <img src="../img/logo-putih.png" alt="" class="h-40 w-auto mx-auto my-12" /> </div>'
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    loadingScreen.style.display = "none";
    $("#notfound").append(
      '<div class="py-12 mx-auto"> <div class="text-3xl font-bold text-center text-white w-4/5 mx-auto"> ERROR MENGAMBIL DATA! </div> <div class="text-md text-center text-white font-bold container mx-auto my-3" > Perhatian! <span class="font-medium" >Terjadi kesalahan saat mengambil data.</span > </div> <img src="../img/logo-putih.png" alt="" class="h-40 w-auto mx-auto my-12" /> </div>'
    );
  }
});
