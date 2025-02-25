<template>
  <nav class="navbar" :class="{ hidden: isHidden }">
    <div class="navbar-left">
      <router-link to="/">
        <img src="../assets/Logo.png" alt="PSJK logo" class="logo" />
      </router-link>
      <p class="title">Pengurusan Sertifikasi Jasa Konstruksi (PSJK)</p>
    </div>
    <button class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="navbar-links" :class="{ 'navbar-links--active': isMenuOpen }">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <div class="dropdown">
          <span class="text">Produk</span>
          <div class="dropdown-content">
            <router-link to="/sbuPage">SBU PUPR | LPJK</router-link> <br>
            <router-link to="/profesionalPage">SKK PUPR | LPJK | BNSP</router-link> <br>
            <div class="dropdown2">
              <span class="text">Lainnya</span>
              <div class="dropdown2-content">
                <router-link to="/pageLAAP">Laporan Audit Akuntan Publik</router-link> <br>
                <router-link to="/pageISO">Sertifikasi ISO KAN & IAF</router-link> <br>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li><a href="http://wa.me/6282287770886" target="_blank">
        <button class="kontak">Kontak</button>
      </a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const isMenuOpen = ref(false);
const isHidden = ref(false);
let lastScrollY = 0;
const router = useRouter();
const route = useRoute();

// Toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Tutup menu saat route berubah
watch(() => route.fullPath, () => {
  isMenuOpen.value = false;
});

// Sembunyikan navbar saat scroll ke bawah
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50;
  lastScrollY = currentScrollY;
};

// Tampilkan navbar saat kursor bergerak ke atas
const handleMouseMove = (event) => {
  if (event.movementY < 0) {
    isHidden.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
/* Navbar Default */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #043873;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

/* Navbar Tersembunyi */
.hidden {
  transform: translateY(-100%);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 2rem;
  height: auto;
}

.title {
  margin-left: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}

.navbar-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navbar-links li {
  margin: 0 1rem;
}

.navbar-links a {
  text-decoration: none;
  color: #fff;
  font-weight: normal;
  transition: color 0.2s ease;
}

.navbar-links a:hover {
  color: #ffe492;
}

.navbar-links--active {
  display: flex;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1200;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #ffe492;
  border-radius: 2px;
}

button.kontak {
  padding: 10px 20px;
  background-color: #FFE492;
  color: #043873;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.kontak:hover {
  background-color: #ffd145;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #043873;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 10px;
  right: 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown2 {
  position: relative;
  display: inline-block;
}

.dropdown2-content {
  display: none;
  position: absolute;
  background-color: #043873;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 10px;
}

.dropdown2:hover .dropdown2-content {
  display: block;
}

.text{
  color: #fff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 1rem;
    background-color: #043873;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 1rem 0;
    z-index: 1000;
  }

  .navbar-links li {
    margin: 0.5rem 1rem;
    text-align: center;
  }

  .navbar-links--active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .title{
    font-size: 11px;
    margin-bottom: 3px;
  }
  .logo{
    max-width: 20px;
    margin-right: -10px;
  }

}
</style>
