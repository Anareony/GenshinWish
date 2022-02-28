<template>
  <h1>Персонажи</h1>
  <div class="filter-btns">
    <my-select 
      v-model="selectedSort"
      :options="charOptions"
    />
    <sort-btn
      @click="sword"
    />
  </div>
  <character-list
    :characters="sortedCharacters"
  />
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";
import CharacterList from "@/components/CharacterList.vue";
export default {
    components: { MyInput, MySelect, CharacterList },
    data() {
      return {
        charOptions: [
          {value: 'name', name: 'По названию'},
          {value: 'weapon', name: 'По оружию'}
        ],
        selectedSort: '',
        characters: [
          {name: 'Albedo',    img:'/characters/albedo.png',             weapon:'d'},
          {name: 'Aloy',      img:'/characters/aloy.png',               weapon:'a'},
          {name: 'Amber',     img:'/characters/amber.png',              weapon:'b'},
          {name: 'Itto',      img:'/characters/arataki_itto.png',       weapon:'1'},
          {name: 'Barbara',   img:'/characters/barbara.png',            weapon:'s'},
          {name: 'Beidou',    img:'/characters/beidou.png',             weapon:'s'},
          {name: 'Bennett',   img:'/characters/bennett.png',            weapon:'1'},
          {name: 'Chongyun',  img:'/characters/chongyun.png',           weapon:'6'},
          {name: 'Diluc',     img:'/characters/diluc.png',              weapon:'8'},
          {name: 'Diona',     img:'/characters/diona.png',              weapon:'7'},
          {name: 'Eula',      img:'/characters/eula.png',               weapon:'a'},
          {name: 'Fischl',    img:'/characters/fischl.png',             weapon:'o'},
          {name: 'Ganyu',     img:'/characters/ganyu.png',              weapon:'s'},
          {name: 'Gorou',     img:'/characters/gorou.png',              weapon:'g'},
          {name: 'Hu tao',    img:'/characters/hu_tao.png',             weapon:'g'},
          {name: 'Jean',      img:'/characters/jean.png',               weapon:'a'},
          {name: 'Kazuha',    img:'/characters/kaedehara_kazuha.png',   weapon:'d'},
          {name: 'Kaeya',     img:'/characters/kaeya.png',              weapon:'c'},
          {name: 'Ayaka',     img:'/characters/kamisato_ayaka.png',     weapon:'b'},
          {name: 'Keqing',    img:'/characters/keqing.png',             weapon:'c'},
          {name: 'Klee',      img:'/characters/klee.png',               weapon:'a'},
          {name: 'Sara',      img:'/characters/kujou_sara.png',         weapon:'d'},
          {name: 'Lisa',      img:'/characters/lisa.png',               weapon:'s'},
          {name: 'Mona',      img:'/characters/mona.png',               weapon:'w'},
          {name: 'Ningguang', img:'/characters/ningguang.png',          weapon:'s'},
          {name: 'Noelle',    img:'/characters/noelle.png',             weapon:'w'},
          {name: 'Qiqi',      img:'/characters/qiqi.png',               weapon:'d'},
          {name: 'Raiden',    img:'/characters/raiden_shogun.png',      weapon:'a'},
          {name: 'Razor',     img:'/characters/razor.png',              weapon:'a'},
          {name: 'Rosaria',   img:'/characters/rosaria.png',            weapon:'x'},
          {name: 'Kokomi',    img:'/characters/sangonomiya_kokomi.png', weapon:'x'},
          {name: 'Sayu',      img:'/characters/sayu.png',               weapon:'s'},
          {name: 'Shenhe',    img:'/characters/shenhe.png',             weapon:'v'},
          {name: 'Sucrose',   img:'/characters/sucrose.png',            weapon:'b'},
          {name: 'Tartaglia', img:'/characters/tartaglia.png',          weapon:'n'},
          {name: 'Thoma',     img:'/characters/thoma.png',              weapon:'f'},
          {name: 'Anemo',     img:'/characters/traveler_anemo.png',     weapon:'z'},
          {name: 'Electro',   img:'/characters/traveler_electro.png',   weapon:'c'},
          {name: 'Geo',       img:'/characters/traveler_geo.png',       weapon:'s'},
          {name: 'Venti',     img:'/characters/venti.png',              weapon:'l'},
          {name: 'Xiangling', img:'/characters/xiangling.png',          weapon:'x'},
          {name: 'Xinyan',    img:'/characters/xinyan.png',             weapon:'p'},
          {name: 'Yae Miko',  img:'/characters/yae_miko.png',           weapon:'h'},
          {name: 'Yanfei',    img:'/characters/yanfei.png',             weapon:'d'},
          {name: 'Yoimiya',   img:'/characters/yoimiya.png',            weapon:'s'},
          {name: 'Yun jin',   img:'/characters/yun_jin.png',            weapon:'sword'},
          {name: 'Zhongli',   img:'/characters/zhongli.png',            weapon:'hj'},
        ]
      }
    },
    computed: {
      sortedCharacters() {
        return [...this.characters].sort( (char1, char2) =>  char1[this.selectedSort]?.localeCompare(char2[this.selectedSort]) )
      },
      sword() {
          return console.log([...this.characters].filter( character => character.weapon.includes('sword')))
      }
    }
}
</script>

<style>

</style>