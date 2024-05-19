var data = [];

// Menampilkan loading screen
var loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "flex";
localStorage.clear();

$(document).ready(function () {
  // Mengambil data dari API
  fetch(
    "https://script.google.com/macros/s/AKfycbzN_moOhPJ3aaLufK9-IDPPYGEgy6PGhij6etrudMJKCexnCJgrhmNvHdrCbUIbm5j4/exec"
  )
    .then((response) => response.json())
    .then((apiData) => {
      data = apiData?.dataPeserta;

      var a = false;
      var nopendaftaran = new URLSearchParams(window.location.search).get(
        "nopendaftaran"
      );
      var jalurpenerimaan = new URLSearchParams(window.location.search).get(
        "jalurpenerimaan"
      );
      console.log(nopendaftaran);
      console.log(jalurpenerimaan);

      for (var i = 0; i < data.length; i++) {
        if (
          nopendaftaran == data[i].nopendaftaran &&
          jalurpenerimaan == data[i].jalurpenerimaan
        ) {
          $("#nama").append(data[i].nama);
          $("#asalsekolah").append(data[i].asalsekolah);
          $("#ttl").append(data[i].ttl);
          $("#ruang").append(data[i].ruang);
          $("#nomorpeserta").append(data[i].nomorpeserta);
          a = true;
          var link = $("#linkdownload");
          link.attr(
            "href",
            link.attr("href") +
              "?nopendaftaran=" +
              nopendaftaran +
              "&jalurpenerimaan=" +
              jalurpenerimaan
          );
          loadingScreen.style.display = "none";
          return;
        }
      }

      if (!a) {
        $("#gagal").append("TIDAK DITEMUKAN");
        $(".del").remove();
        console.log("masuk");
      }

      loadingScreen.style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      loadingScreen.style.display = "none";
      $("#gagal").append("ERROR MENGAMBIL DATA");
    });
});
