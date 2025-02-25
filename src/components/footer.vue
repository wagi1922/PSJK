<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="top-layout">
        <div class="logo-section">
          <img src="../assets/Logo.png" alt="PSJK Logo" class="logo" />
          <p class="title">PSJK</p>
        </div>
        <p class="footer-text">Kami memiliki layanan Sertifikasi terkait Jasa Konstruksi, BNSP, KAN. Kami siap melayani kebutuhan sertifikasi Anda</p>
      </div>
      <div class="contact-section">
        <h3>Contact</h3>
        <address>
          fadillahastekriau@gmail.com<br />
          + 628 12 4866 7908<br />
          + 628 22 8777 0886<br />
        </address>
      </div>
      <div class="media">
        <h3>Start to Contact</h3>
        <p class="media-text">Hubungi kami langsung</p>
        <button class="media-button">Start →</button>
      </div>
    </div>
    <button v-show="showScroll" class="scroll-up" @click="scrollToTop">
      <h1 class="up">↑</h1>
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";


const showScroll = ref(false);

const handleScroll = () => {
  showScroll.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.footer {
  position: relative;
  left: 0; 
  right: 0; 
  width: 100vw;
  background-color: #043873;
  color: #ffffff;
  padding: 2rem 1rem;
  text-align: center;
}


.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.logo-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo {
  width: 20px;
  height: auto;
  margin-right: 0.5rem;
}

h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

address {
  font-style: normal;
  line-height: 1.5;
  font-size: 12px;
  text-align: left;
  margin-left: 125px;
}

/* Social Media */
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.8rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

ul li a:hover {
  transform: scale(1.2);
  color: #f9a61d;
}

/* Scroll-Up Button */
.scroll-up {
  width: 45px;
  background-color: #4F9CF9;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 0.8rem;
  font-size: 1.2rem;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-up:hover {
  background-color: #4F9CF9;
  opacity: 1;
  transform: scale(1.1);
}

.title{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
}

.footer-text{
  width: 250px;
  font-size: 10px;
  text-align: left;
}

.media-text{
  font-size: 12px;
  margin-bottom: 12px;
}

.media-button{
  background-color: #4F9CF9;
  color: #fff;
  border: none;
  width: 75px;
  height: 35px;
  font-weight: normal;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
}

.top-layout{
  align-items: baseline;
}

.up{
  font-size: 15px;
}

@media (max-width: 768px) {
  .footer{
    position: relative;
    margin-bottom: -100px;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    max-width: 60px;
  }
  
  
  address {
    margin-left: 0;
    text-align: center;
  }
  
  .footer-text {
    text-align: center;
  }

  ul {
    flex-direction: row;
    justify-content: center;
  }

  .scroll-up {
    bottom: 15px;
    right: 15px;
    font-size: 1rem;
  }

  .logo-section{
    margin-left: 80px;
  }
}
</style>
