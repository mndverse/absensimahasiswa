import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import tambahSatu from "../helpers/tambah-satu";
import formatTanggal from "../helpers/format-tanggal";

<template>
  <section class="absensi">
    <div class="judul-halaman">
      <h1>Daftar Hadir Mahasiswa</h1>
      <p>Isi formulir berikut untuk mencatat kehadiran mahasiswa.</p>
    </div>

    <form
      class="form-absensi"
      {{on "submit" @controller.simpanAbsensi}}
    >
      <h2>{{if @controller.sedangEdit "Edit Data Kehadiran" "Formulir Absensi"}}</h2>

      <div class="form-grid">
        <div class="form-group">
          <label for="nama">Nama Lengkap</label>
          <input
            id="nama"
            type="text"
            value={{@controller.nama}}
            placeholder="Masukkan nama lengkap"
            required
            {{on "input" @controller.ubahNama}}
          />
        </div>

        <div class="form-group">
          <label for="nim">Nomor Induk Mahasiswa (NIM)</label>
          <input
            id="nim"
            type="text"
            value={{@controller.nim}}
            placeholder="Masukkan NIM"
            required
            {{on "input" @controller.ubahNim}}
          />
        </div>

        <div class="form-group">
          <label for="kelas">Kelas</label>
          <input
            id="kelas"
            type="text"
            value={{@controller.kelas}}
            placeholder="Contoh: IK-1"
            required
            {{on "input" @controller.ubahKelas}}
          />
        </div>

        <div class="form-group">
          <label for="semester">Semester</label>
          <select
            id="semester"
            value={{@controller.semester}}
            {{on "change" @controller.ubahSemester}}
          >
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>
        </div>

        <div class="form-group">
          <label for="tanggal">Tanggal Kehadiran</label>
          <input
            id="tanggal"
            type="date"
            value={{@controller.tanggal}}
            required
            {{on "input" @controller.ubahTanggal}}
          />
        </div>

        <div class="form-group">
          <label for="jam">Jam Kehadiran</label>
          <input
            id="jam"
            type="time"
            value={{@controller.jam}}
            required
            {{on "input" @controller.ubahJam}}
          />
        </div>

        <div class="form-group">
          <label for="status">Status Kehadiran</label>
          <select
            id="status"
            value={{@controller.status}}
            {{on "change" @controller.ubahStatus}}
          >
            <option value="Hadir">Hadir</option>
            <option value="Izin">Izin</option>
            <option value="Sakit">Sakit</option>
            <option value="Alpa">Alpa</option>
          </select>
        </div>
      </div>

      <div class="aksi-form">
        <button type="submit" class="tombol">
          {{if @controller.sedangEdit "Simpan Perubahan" "Catat Kehadiran"}}
        </button>

        {{#if @controller.sedangEdit}}
          <button
            type="button"
            class="tombol-batal"
            {{on "click" @controller.resetForm}}
          >
            Batal
          </button>
        {{/if}}
      </div>
    </form>

    <div class="judul-tabel">
      <div>
        <h2>Riwayat Kehadiran</h2>
        <p>Daftar catatan kehadiran mahasiswa.</p>
      </div>

      <span>Total Data: {{@controller.daftarHadir.length}}</span>
    </div>

    <div class="tabel-container">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Mahasiswa</th>
            <th>NIM</th>
            <th>Kelas</th>
            <th>Semester</th>
            <th>Tanggal</th>
            <th>Jam</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {{#each @controller.daftarHadir as |data index|}}
            <tr>
              <td>{{tambahSatu index}}</td>
              <td>{{data.nama}}</td>
              <td>{{data.nim}}</td>
              <td>{{data.kelas}}</td>
              <td>{{data.semester}}</td>
              <td>{{formatTanggal data.tanggal}}</td>
              <td>{{data.jam}}</td>
              <td>
                <span class="status {{data.status}}">
                  {{data.status}}
                </span>
              </td>
              <td>
                <button
                  type="button"
                  class="tombol-edit"
                  {{on "click" (fn @controller.editAbsensi index)}}
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="tombol-hapus"
                  {{on "click" (fn @controller.hapusAbsensi index)}}
                >
                  Hapus
                </button>
              </td>
            </tr>
          {{else}}
            <tr>
              <td colspan="9" class="kosong">
                Belum ada catatan kehadiran.
              </td>
            </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
  </section>
</template>