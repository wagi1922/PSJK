<template>
  <div class="layout">
    <img src="../assets/cover2.png" alt="cover" class="cover animate-fade-in">
    <div class="body">
      <div class="title-layout">
        <h1 class="title animate-slide-down">Laporan Audit Akuntan Publik – Jasa Konstruksi</h1>
      </div>
      <transition name="slide-up" appear>
        <div class="card animate-zoom-in">
          <h2 class="card-title">Dokumen Persyaratan Administratif</h2>
          <ol class="requirements">
            <li>Form Permohonan Laporan Audit Akuntan Publik</li>
            <li>Akta Pendirian, Perubahan dan Risalah RUPS</li>
            <li>SIUP, TDP, NPWP, Ket. Domisili</li>
            <li>SPT Badan Usaha Tahun Terakhir</li>
            <li>Laporan Audit / SPT Badan Usaha Sebelumnya</li>
            <li>KOP Surat Perusahaan</li>
          </ol>
        </div>
      </transition>
      <a href="http://wa.me/6282287770886" target="_blank">
        <button class="whatsapp-button animate-bounce">WhatsApp</button>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Efek animasi fade-in */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Efek animasi slide-down */
@keyframes slide-down {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Efek animasi zoom-in */
@keyframes zoom-in {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Efek animasi bounce */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Kelas animasi */
.animate-fade-in {
  animation: fade-in 1.5s ease-out;
}

.animate-slide-down {
  animation: slide-down 1s ease-out;
}

.animate-zoom-in {
  animation: zoom-in 0.8s ease-out;
}

.animate-bounce {
  animation: bounce 1s infinite ease-in-out;
}

/* Kelas lainnya */
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
  max-width: 800px;
  padding: 20px;
  margin-top: 100vh;
}

.title-layout {
  text-align: center;
  margin-bottom: 50px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  color: #333;
}

.subTitle {
  font-size: 20px;
  color: #555;
}

.card {
  margin-top: 20px;
  background: linear-gradient(135deg, #043873, #0e66cb);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

.requirements {
  margin: 0;
  text-align: left;
}

.requirements li {
  margin: 10px 0;
  line-height: 1.6;
  font-size: 16px;
}

button.whatsapp-button {
  margin-top: 60px;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.whatsapp-button:hover {
  background-color: #1da851;
}

@media (max-width: 768px) {
  .cover {
    max-width: 100%;
    max-height: 200px;
  }

  .title-layout {
    margin-bottom: 30px;
  }

  .title {
    font-size: 12px;
  }

  .subTitle {
    font-size: 10px;
  }

  .body {
    width: 350px;
    margin-top: 11vh;
  }

  .card-title {
    font-size: 12px;
  }

  .requirements li {
    font-size: 10px;
  }

  .card {
    padding-left: 1px;
  }
}
</style>
