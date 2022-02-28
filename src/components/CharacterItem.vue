<template>
  <div class="character" @click="$router.push(`/characters/${character.name}`)">
    <div class="character-top">
      <img class="character-img" :src="character.img" >
    </div>
    <div class="character-bottom">
      <p class="character-name"> {{character.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      require: true,
    } 
  }
}
</script>

<style scoped lang="scss">
.character {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;

  &-img{
    width: 100%;
  }
}


</style>