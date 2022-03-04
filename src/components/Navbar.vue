<template>
  <nav class="side-navbar">
    <div class="side-navbar-btns">
      <router-link class="side-navbar__link" to="/">Главная</router-link>
      <router-link class="side-navbar__link" to="/characters">Персонажи</router-link>
      <router-link class="side-navbar__link" to="/wishcounter">Счетчик молитв</router-link>
      <router-link class="side-navbar__link" to="/calculator">Калькулятор</router-link>
      <router-link class="side-navbar__link" to="/todo">Список дел</router-link>
    </div>
  </nav>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style scoped>
.side-navbar {
  display: flex;
  position: fixed; 
  flex-direction: column;
  align-items: baseline;
  overflow-x: hidden; 
  height: 100%;
  width: 180px; 
  padding: 15px;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: rgb(20, 20, 20);
}

.side-navbar-btns {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.side-navbar__main {
  padding: 15px;
  font-size: 18px;
}

.side-navbar__link.router-link-active {
  background-color: aquamarine;
  font-weight: 500;
  opacity: 0.8;
}

.side-navbar__link {
    padding: 15px;
    background: none;
    color: white;
    border: none;
    opacity: 0.6;
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    border-radius: 15px;
}

.side-navbar__link:hover {
    opacity: 1;
}
</style>