// Menampilkan loading screen
var loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "flex";
localStorage.clear();

const url = "https://sheet2api.com/v1/WlmGDOXaS8W7/db-question";
const options = {};
Sheet2API.read(url, options).then(
  function submitForm(result) {
    var a = false;
    for (var i = 0; i < result.length; i++) {
      var nisn = new URLSearchParams(window.location.search).get("nisn");
      if (nisn == result[i].nisn) {
        $("#nama").append(result[i].nama);
        $("#nisn").append(result[i].nisn);
        $("#asalsekolah").append(result[i].asalsekolah);
        $("#sesi").append(result[i].sesi);
        $("#haritanggal").append(result[i].haritanggal);
        $("#ruang").append(result[i].ruang);

        function randomString(length) {
          var result = "";
          var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }
          return result;
        }

        // menghasilkan sebuah string acak dengan panjang 10 karakter
        var token = randomString(10);

        localStorage.setItem("token", token);
        var link = $("#linkdownload");
        link.attr("href", link.attr("href") + "?token=" + token);
        a = true;
        break;
      }
    }
    localStorage.setItem("data", result);
    if (a == false) {
      $("#gagal").append("TIDAK DITEMUKAN");
      $(".del").remove();
    }
    loadingScreen.style.display = "none";
  },
  function (error) {
    console.log(error);
  }
);
