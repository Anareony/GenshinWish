<template>
  <div class="character-list">
    <character-item
      v-for="character in characters"
      :character="character"
      :key="character.name"    
    />
  </div>
</template>

<script>
import CharacterItem from "./CharacterItem.vue";
export default {
    components: { CharacterItem },
    props: {
      characters: {
        type: Array,
        require: true,
      }
    }
}
</script>

<style scoped>
  .character-list{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
</style>