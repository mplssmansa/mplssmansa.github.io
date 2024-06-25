import { fetchData } from "./fetchData.js";

let allData = [];
const loadingScreen = document.getElementById("loading-screen");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    loadingScreen.style.display = "flex";
    const dataRes = await fetchData();
    allData = dataRes.dataPeserta;
    displayData(allData);
  } catch (error) {
    console.error("Error fetching data:", error);
    tableBody.innerHTML = '<tr><td colspan="2">Error loading data</td></tr>';
  } finally {
    loadingScreen.style.display = "none";
  }
});

function displayData(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  if (data?.length > 0) {
    data?.forEach((item) => {
      const row = document.createElement("tr");
      row.className = "bg-white";

      const nameCell = document.createElement("td");
      nameCell.className = "py-2 px-4";
      nameCell.textContent = item.nama;

      const downloadCell = document.createElement("td");
      downloadCell.className = "py-2 px-4";
      downloadCell.textContent = item.nopendaftaran;

      const penerimaanCell = document.createElement("td");
      penerimaanCell.className = "py-2 px-4";
      penerimaanCell.textContent = item.asalsekolah;

      const copyCell = document.createElement("td");
      copyCell.className = "py-2 px-4";

      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy";
      copyButton.className =
        "bg-[#2488a5] hover:bg-[#0f6d84] font-bold p-2 rounded border-2 border-black";
      copyButton.type = "button";

      copyButton.onclick = function () {
        const textToCopy = `*INFORMASI AKUN MPLS SMANSA*
        
Nama : 
*${item.nama}*

No. Pendaftaran :
*${item.nopendaftaran}*

Asal Sekolah :
*${item.asalsekolah}*

Silakan masukkan data tersebut ke Portal MPLS SMANSA. Kerahasiaan akun adalah tanggung jawab setiap peserta.

--- Helpdesk MPLS SMANSA --`;

        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            alert("Teks berhasil disalin ke clipboard:\n" + textToCopy);
          })
          .catch((err) => {
            console.error("Gagal menyalin teks: ", err);
          });
      };

      copyCell.appendChild(copyButton);

      row.appendChild(nameCell);
      row.appendChild(downloadCell);
      row.appendChild(penerimaanCell);
      row.appendChild(copyCell);
      tableBody.appendChild(row);
    });
  } else {
    const row = document.createElement("tr");
    const noResultCell = document.createElement("td");
    noResultCell.setAttribute("colspan", 3);
    const noResultSpan = document.createElement("span");
    noResultCell.className = "py-2 px-4 text-center italic";
    noResultSpan.textContent = "No result found";
    noResultCell.appendChild(noResultSpan);
    row.appendChild(noResultCell);
    tableBody.appendChild(row);
  }
}

window.filterData = function () {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const regex = new RegExp(searchTerm, "i");
  const filteredData = allData.filter((item) => {
    const name = item.nama || "";
    return regex.test(name);
  });
  displayData(filteredData);
};
