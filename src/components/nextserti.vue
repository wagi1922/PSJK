<template>
  <div class="layout">
    <img :src="images[currentImage]" alt="cover" class="cover animate-fade-in"/>

    <div class="slider-controls">
      <button @click="prevImage" class="slider-button">❮</button>
      <button @click="nextImage" class="slider-button">❯</button>
    </div>

    <div class="body">
      <div class="card animate-slide-in-right">
        <img src="../assets/gam2.png" alt="card-img" class="card-img">

        <div class="title-layout">
          <h1 class="title animate-slide-down">Laporan Audit Akuntan Publik – Jasa Konstruksi</h1>
          <p class="text">
            Laporan Auditor Independen (LAI) Akuntan Publik adalah dokumen resmi yang disusun oleh seorang akuntan publik bersertifikat yang berisi hasil audit atas laporan keuangan perusahaan
          </p>
          <button @click="next1" class="nextButton">Try it now →</button>
        </div>
      </div>

      <div class="card2 animate-slide-in-left">
        <div class="title2-layout">
          <h1 class="title animate-slide-down">Sertifikasi ISO Akreditasi KAN  | Non KAN | Akreditasi Internasional IAF | Non IAF</h1>
          <p class="text">
            KAN adalah kepanjangan dari Komite Akreditasi Nasional lembaga akreditasi untuk sertifikasi ISO di Indonesia. Bentuknya adalah Lembaga Non Struktural (LNS) yang lingkup pekerjaannya bertanggung jawab di bidang akreditasi penilaian kesesuaian
          </p>
          <button @click="next2" class="nextButton">Try it now →</button>
        </div>
        <img src="../assets/gam3.png" alt="card-img" class="card2-img">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import image1 from '../assets/cover1.png';
import image2 from '../assets/cover2.png';
import image3 from '../assets/cover2.png';

const router = useRouter();
const images = [image1, image2, image3];
const currentImage = ref(0);

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length;
};

const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length;
};

const next1 = () => {
  router.push({ name: 'PageLAAP' });
};

const next2 = () => {
  router.push({ name: 'PageISO' });
};

// Gambar berubah otomatis tiap 3 detik
onMounted(() => {
  setInterval(() => {
    nextImage();
  }, 3000);
});
</script>

<style scoped>
/* Efek Animasi */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-down {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-in-right {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-in-left {
  from { transform: translateX(0); opacity: 0; }
  to { transform: translateX(100px); opacity: 1; }
}

/* Keyframe untuk mobile: slide in dari bawah */
@keyframes slide-in-bottom {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Efek Animasi yang diterapkan */
.animate-fade-in { animation: fade-in 1.5s ease-out; }
.animate-slide-down { animation: slide-down 1s ease-out; }
.animate-slide-in-right { animation: slide-in-right 1s ease-out; }
.animate-slide-in-left { animation: slide-in-left 1s ease-out; }

/* Layout */
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
}

.cover {
  position: absolute;
  top: 60px;
  left: 0;
  width: 1295px;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.body {
  width: 100%;
  max-width: 130vh;
  margin-top: 100vh;
}

/* Card Styling */
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px; 
  padding: 20px;
  border-radius: 10px;
  background: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
}

.card2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px; 
  padding: 20px;
  border-radius: 10px;
  background: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card2:hover {
  transform: translateY(-5px) scale(1.02);
}

.card-img {
  width: 350px;
  height: 350px;
  transform: scaleX(-1);
}

.card2-img {
  width: 350px;
  height: 350px;
  transform: scaleX(-1);
}

/* Title Styling */
.title-layout {
  flex: 1; 
  text-align: left;
  margin-left: 50px;
}

.title2-layout {
  flex: 1; 
  text-align: left;
  margin-right: 50px;
}

.title {
  font-size: 35px;
  font-weight: bold;
  color: #333;
}

/* Tombol */
.nextButton {
  background-color: #4F9CF9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
}

.nextButton:hover {
  background-color: #3b82f6;
  transform: scale(1.05);
}

/* Slider Controls */
.slider-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.slider-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 5px;
}

.slider-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  font-size: 10px;
  color: #333;
  margin-bottom: 25px;
  margin-top: 10px;
}

.text2 {
  font-size: 10px;
  color: #333;
  margin-bottom: 25px;
  margin-top: 10px;
  font-weight: bold;
}

/* Responsif */
@media (max-width: 768px) {
  .cover { max-width: 100%; max-height: 200px; }

  .title { font-size: 18px; }
  .text { font-size: 8px; }

  .body {
    width: 350px;
    margin-top: 15vh;
  }

  .card {
    flex-direction: column;
    text-align: center;
    padding: 15px;
    align-items: center;
  }  

  .card2 {
    flex-direction: column-reverse; /* Menampilkan gambar di atas teks */
    text-align: center;
    padding: 15px;
  }

  .card-img, .card2-img {
    width: 250px;
    height: 250px;
    transform: scaleX(-1);
  }

  .title-layout {
    margin-left: 0;
  }

  .nextButton {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  .slider-controls {
    top: 150px;
  }

  .slider-button {
    font-size: 10px;
  }

  /* Override animasi: gunakan slide in dari bawah untuk tampilan mobile */
  .animate-slide-in-right,
  .animate-slide-in-left {
    animation: slide-in-bottom 1s ease-out;
  }
}
</style>
