<template>
  <h1>Персонажи</h1>
  <div class="filter-btns">
    <MyInput            
      v-model="searchChar"
      placeholder="Поиск..."
    />
    <MySelect />
  </div>
  <CharactersList></CharactersList>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";
import CharactersList from "../components/CharactersList.vue";
export default {
    components: { MyInput, MySelect, CharactersList },

    data() {
      return {
        selectedChar: '',
        searchChar: '',
      }
    },
    methods: {
      sortCharacters() {
        return [...this.characters].sort( (post1, post2) =>  post1[this.selectedChar]?.localeCompare(post2[this.selectedChar]) )
      },
      searchCharacters() {
        return this.sortCharacters.filter( character => character.title.toLowerCase().includes(this.searchChar.toLowerCase()))
      }
    }
}
</script>

<style>

</style>