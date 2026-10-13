
const tahun = document.getElementById("tahun");

tahun.textContent = new Date().getFullYear();

const tombolKontak = document.getElementById("tombolKontak");
const pesanKontak = document.getElementById("pesanKontak");

tombolKontak.addEventListener("click", function () {
    pesanKontak.textContent =
        "Silakan hubungi kantor melalui nomor kontak resmi yang tercantum.";
});
function pilihLayanan(namaLayanan) {
    const pesan = document.getElementById("pesanKontak");

    if (pesan) {
        pesan.textContent =
            "Anda memilih: " + namaLayanan +
            ". Silakan hubungi kantor untuk informasi lebih lanjut.";
    }
}
function bukaDokumenSK() {
    const pembaca = document.getElementById("pembaca-sk");
    const frame = document.getElementById("frame-sk");

    frame.src = "sk-pengangkatan-notaris.pdf";
    pembaca.hidden = false;

    pembaca.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function tutupDokumenSK() {
    const pembaca = document.getElementById("pembaca-sk");
    const frame = document.getElementById("frame-sk");

    pembaca.hidden = true;
    frame.src = "";
}