var token = new URLSearchParams(window.location.search).get("token");
console.log(token);
console.log(localStorage.getItem("token"));
console.log($(".download-data"));
if (token != localStorage.getItem("token")) {
  $(".download-data").remove();
  $("#notfound").append(
    '<div class="py-12 mx-auto"> <div class="text-3xl font-bold text-center text-white w-4/5 mx-auto"> TOKEN TIDAK VALID! </div> <div class="text-md text-center text-white font-bold container mx-auto my-3" > Perhatian! <span class="font-medium" >untuk mengunduh kelengkapan administrasi peserta MPLS SMANSA, silahkan akses melalui halaman sebelumnya terlebih dahulu.</span > </div> <img src="../img/logo-putih.png" alt="" class="h-40 w-auto mx-auto my-12" /> </div>'
  );
}
