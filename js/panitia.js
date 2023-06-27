var data = [
    {
     "kode": "KR-SMT-01",
     "nama": "NESYA THALIQA SALSABILA",
     "posisi": "KETUA RUANG I \/ SUMATERA"
    },
    {
     "kode": "KR-JWA-02",
     "nama": "DYAH MEYLISYA",
     "posisi": "KETUA RUANG II \/ JAWA"
    },
    {
     "kode": "KR-KLM-03",
     "nama": "PUTRI JUNIARTI",
     "posisi": "KETUA RUANG III \/ KALIMANTAN"
    },
    {
     "kode": "KR-SLW-04",
     "nama": "ALBAR PRATAMA",
     "posisi": "KETUA RUANG IV \/ SULAWESI"
    },
    {
     "kode": "KR-BLI-05",
     "nama": "CHELSEA AULIA ZAHRAH",
     "posisi": "KETUA RUANG V \/ BALI"
    },
    {
     "kode": "KR-NTG-06",
     "nama": "CYRA ATHAFA SHAFANIA",
     "posisi": "KETUA RUANG VI \/ NUSA TENGGARA"
    },
    {
     "kode": "KR-MKU-07",
     "nama": "CHELSI DWI MAULIANI",
     "posisi": "KETUA RUANG VII \/ MALUKU"
    },
    {
     "kode": "KR-PPA-08",
     "nama": "KESHYA JOSIFA SYAHIRA",
     "posisi": "KETUA RUANG VIII \/ PAPUA"
    },
    {
     "kode": "PJR-SMT-01",
     "nama": "M RIZKY AKBAR HASIBUAN",
     "posisi": "PENANGGUNG JAWAB RUANG I \/ SUMATERA"
    },
    {
     "kode": "PJR-JWA-02",
     "nama": "M FAJRI SYAHPUTRA",
     "posisi": "PENANGGUNG JAWAB RUANG II \/ JAWA"
    },
    {
     "kode": "PJR-KLM-03",
     "nama": "NOVITA AISYAH PUTRI",
     "posisi": "PENANGGUNG JAWAB RUANG III \/ KALIMANTAN"
    },
    {
     "kode": "PJR-SLW-04",
     "nama": "ALLIYAH SALSABILLA",
     "posisi": "PENANGGUNG JAWAB RUANG IV \/ SULAWESI"
    },
    {
     "kode": "PJR-BLI-05",
     "nama": "RAHMAD ALPIN",
     "posisi": "PENANGGUNG JAWAB RUANG V \/ BALI"
    },
    {
     "kode": "PJR-NTG-06",
     "nama": "M SHANATA RAMADHAN",
     "posisi": "PENANGGUNG JAWAB RUANG VI \/ NUSA TENGGARA"
    },
    {
     "kode": "PJR-MKU-07",
     "nama": "NASYA PUTRI ANDIENI",
     "posisi": "PENANGGUNG JAWAB RUANG VII \/ MALUKU"
    },
    {
     "kode": "PJR-PPA-08",
     "nama": "GITA NOVRIANA",
     "posisi": "PENANGGUNG JAWAB RUANG VIII \/ PAPUA"
    }
];


var loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "flex";
localStorage.clear();

$(document).ready(function() {
    var a = false;
    var uc = new URLSearchParams(window.location.search).get("uc");
    for (var i = 0; i < data.length; i++) {
      if (uc == data[i].kode) {
        $("#namapanitia").append(data[i].nama);
        loadingScreen.style.display = "none";
        return;
      }
    }
    if(a == false){
      $(".download-data").remove();
      $("#notfound").append(
        '<div class="py-12 mx-auto"> <div class="text-3xl font-bold text-center text-white w-4/5 mx-auto"> KODE TIDAK VALID! </div> <div class="text-md text-center text-white font-bold container mx-auto my-3" > Perhatian! <span class="font-medium" >pastikan kode yang anda masukkan benar.</span > </div> <img src="../img/logo-putih.png" alt="" class="h-40 w-auto mx-auto my-12" /> </div>'
      );
      loadingScreen.style.display = "none";
    }
  });