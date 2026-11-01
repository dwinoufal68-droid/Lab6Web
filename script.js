
// LATIHAN 1
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";


// LATIHAN 2
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function() {
    pesan.textContent = "Tombol diklik pada " +
        new Date().toLocaleTimeString();
});


// LATIHAN 3
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function() {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});


// LATIHAN 4
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function() {
    jumlahKarakter.textContent = namaInput.value.length;
});


// LATIHAN 5
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 || usia > 100
    ) {
        pesanForm.textContent = "Usia harus 17-100 tahun.";
    } else {
        pesanForm.textContent = "Validasi berhasil!";
        form.reset();
    }
});


// LATIHAN 6
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function() {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function() {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    item.append(label, selesai);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
});


// MINI PROJECT
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

namaWorkshop.addEventListener("input", function() {
    document.getElementById("jumlahNama").textContent =
        "Jumlah karakter: " + namaWorkshop.value.length;
});

sesiWorkshop.addEventListener("change", function() {
    document.getElementById("pilihanSesi").textContent =
        sesiWorkshop.value === ""
        ? "Belum memilih sesi."
        : "Sesi yang dipilih: " + sesiWorkshop.value;
});

formWorkshop.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pesan = document.getElementById("pesanWorkshop");

    if (nama.length < 3) {
        pesan.textContent = "Nama minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesan.textContent = "Email tidak valid.";
    } else if (sesi === "") {
        pesan.textContent = "Silakan pilih sesi.";
    } else {
        pesan.textContent = "Pendaftaran workshop berhasil!";
    }
});
