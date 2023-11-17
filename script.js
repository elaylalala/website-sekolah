document.addEventListener("DOMContentLoaded", function () {
  function tampilkanDetailJurusan(jurusan) {
    var detailJurusan = document.getElementById("detailJurusan");
    detailJurusan.innerHTML =
      "<h2>" + jurusan.judul + "</h2><p>" + jurusan.deskripsi + "</p>";
  }

  var jurusanList = [
    {
      judul: "Desain Pemodelan dan Informasi Bangunan",
      deskripsi:
        "Pelajari teknik menggambar konstruksi bangunan (2D/3D) dengan perangkat lunak terkini disertai kemampuan pengukuran tanah, estimasi biaya konstruksi, dan kewirausahaan.",
    },
    {
      judul: "Teknik Instalasi Tenaga Listrik",
      deskripsi:
        "Pelajari teknik instalasi penerangan listrik baik konvensional maupun smarthome disertai kemampuan perawatan dan perbaikan instalasi listrik.",
    },
    // Tambahkan detail untuk jurusan lainnya
  ];

  var jurusanSection = document.getElementById("jurusanDetail");
  var detailJurusanContainer = document.createElement("div");
  detailJurusanContainer.id = "detailJurusan";
  jurusanSection.appendChild(detailJurusanContainer);

  for (var i = 0; i < jurusanList.length; i++) {
    var jurusanButton = document.createElement("button");
    jurusanButton.textContent = jurusanList[i].judul;

    jurusanButton.addEventListener(
      "click",
      (function (index) {
        return function () {
          tampilkanDetailJurusan(jurusanList[index]);
        };
      })(i)
    );

    jurusanSection.appendChild(jurusanButton);
  }
});
