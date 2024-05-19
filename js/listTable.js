export function listTable(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  data?.forEach((item) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.judul;
    nameCell.className = "p-2 border-2";

    const downloadCell = document.createElement("td");
    downloadCell.className = "p-2 border-2";

    const downloadLink = document.createElement("a");
    downloadLink.href = item.url;

    const downloadButton = document.createElement("button");
    downloadButton.textContent =
      item.judul.split(" ")?.[0].toLowerCase() === "upload"
        ? "UPLOAD"
        : "DOWNLOAD";
    downloadButton.className =
      "bg-[#2488a5] hover:bg-[#0f6d84] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
    downloadButton.type = "button";

    downloadLink.appendChild(downloadButton);
    downloadCell.appendChild(downloadLink);
    row.appendChild(nameCell);
    row.appendChild(downloadCell);

    tableBody.appendChild(row);
  });
}
