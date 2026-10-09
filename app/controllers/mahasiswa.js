import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class MahasiswaController extends Controller {
  @tracked nama = "";
  @tracked nim = "";
  @tracked kelas = "";
  @tracked semester = "5";
  @tracked tanggal = new Date().toLocaleDateString("en-CA");
  @tracked jam = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  @tracked status = "Hadir";
  @tracked daftarHadir = [];
  @tracked indexEdit = -1;

  constructor() {
    super(...arguments);
    this.daftarHadir = this.muatDataKehadiran();
  }

  muatDataKehadiran() {
    try {
      if (typeof window === "undefined") {
        return [];
      }

      const data = window.localStorage.getItem("daftarHadir");

      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Gagal memuat data kehadiran:", error);
      return [];
    }
  }

  simpanDataKehadiran() {
    try {
      window.localStorage.setItem(
        "daftarHadir",
        JSON.stringify(this.daftarHadir)
      );
    } catch (error) {
      console.error("Gagal menyimpan data kehadiran:", error);
      alert("Data gagal disimpan. Periksa penyimpanan browser kamu.");
    }
  }

  get sedangEdit() {
    return this.indexEdit !== -1;
  }

  @action
  ubahNama(event) {
    this.nama = event.target.value;
  }

  @action
  ubahNim(event) {
    this.nim = event.target.value;
  }

  @action
  ubahKelas(event) {
    this.kelas = event.target.value;
  }

  @action
  ubahSemester(event) {
    this.semester = event.target.value;
  }

  @action
  ubahTanggal(event) {
    this.tanggal = event.target.value;
  }

  @action
  ubahJam(event) {
    this.jam = event.target.value;
  }

  @action
  ubahStatus(event) {
    this.status = event.target.value;
  }

  @action
  simpanAbsensi(event) {
    event.preventDefault();

    if (
      !this.nama.trim() ||
      !this.nim.trim() ||
      !this.kelas.trim() ||
      !this.semester ||
      !this.tanggal ||
      !this.jam ||
      !this.status
    ) {
      alert("Semua data wajib diisi!");
      return;
    }

    const dataBaru = {
      nama: this.nama.trim(),
      nim: this.nim.trim(),
      kelas: this.kelas.trim(),
      semester: this.semester,
      tanggal: this.tanggal,
      jam: this.jam,
      status: this.status,
    };

    if (this.indexEdit === -1) {
      this.daftarHadir = [...this.daftarHadir, dataBaru];
    } else {
      this.daftarHadir = this.daftarHadir.map((data, index) =>
        index === this.indexEdit ? dataBaru : data
      );
    }

    this.simpanDataKehadiran();
    this.resetForm();
  }

  @action
  editAbsensi(index) {
    const data = this.daftarHadir[index];

    this.nama = data.nama;
    this.nim = data.nim;
    this.kelas = data.kelas;
    this.semester = data.semester;
    this.tanggal = data.tanggal;
    this.jam = data.jam;
    this.status = data.status;

    this.indexEdit = index;
  }

  @action
  hapusAbsensi(index) {
    if (!confirm("Apakah Anda yakin ingin menghapus data kehadiran ini?")) {
      return;
    }

    this.daftarHadir = this.daftarHadir.filter(
      (_, i) => i !== index
    );

    this.simpanDataKehadiran();
    this.resetForm();
  }

  @action
  resetForm() {
    this.nama = "";
    this.nim = "";
    this.kelas = "";
    this.semester = "5";
    this.tanggal = new Date().toLocaleDateString("en-CA");
    this.jam = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    this.status = "Hadir";
    this.indexEdit = -1;
  }
}