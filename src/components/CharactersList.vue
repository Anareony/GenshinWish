<template>
  <div class="character" 
    @click="$router.push(`/characters/${character.name}`)" 
    v-for="character in characters" 
    :key="character.name" >
    <div class="character-top">
      <img :src="character.img" >
    </div>
    <div class="character-bottom">
      <p class="character-name"> {{character.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        {name: 'Albedo',    img:'/characters/albedo.png'},
        {name: 'Aloy',      img:'/characters/aloy.png'},
        {name: 'Amber',     img:'/characters/amber.png'},
        {name: 'Itto',      img:'/characters/arataki_itto.png'},
        {name: 'Barbara',   img:'/characters/barbara.png'},
        {name: 'Beidou',    img:'/characters/beidou.png'},
        {name: 'Bennett',   img:'/characters/bennett.png'},
        {name: 'Chongyun',  img:'/characters/chongyun.png'},
        {name: 'Diluc',     img:'/characters/diluc.png'},
        {name: 'Diona',     img:'/characters/diona.png'},
        {name: 'Eula',      img:'/characters/eula.png'},
        {name: 'Fischl',    img:'/characters/fischl.png'},
        {name: 'Ganyu',     img:'/characters/ganyu.png'},
        {name: 'Gorou',     img:'/characters/gorou.png'},
        {name: 'Hu tao',    img:'/characters/hu_tao.png'},
        {name: 'Jean',      img:'/characters/jean.png'},
        {name: 'Kazuha',    img:'/characters/kaedehara_kazuha.png'},
        {name: 'Kaeya',     img:'/characters/kaeya.png'},
        {name: 'Ayaka',     img:'/characters/kamisato_ayaka.png'},
        {name: 'Keqing',    img:'/characters/keqing.png'},
        {name: 'Klee',      img:'/characters/klee.png'},
        {name: 'Sara',      img:'/characters/kujou_sara.png'},
        {name: 'Lisa',      img:'/characters/lisa.png'},
        {name: 'Mona',      img:'/characters/mona.png'},
        {name: 'Ningguang', img:'/characters/ningguang.png'},
        {name: 'Noelle',    img:'/characters/noelle.png'},
        {name: 'Qiqi',      img:'/characters/qiqi.png'},
        {name: 'Raiden',    img:'/characters/raiden_shogun.png'},
        {name: 'Razor',     img:'/characters/razor.png'},
        {name: 'Rosaria',   img:'/characters/rosaria.png'},
        {name: 'Kokomi',    img:'/characters/sangonomiya_kokomi.png'},
        {name: 'Sayu',      img:'/characters/sayu.png'},
        {name: 'Shenhe',    img:'/characters/shenhe.png'},
        {name: 'Sucrose',   img:'/characters/sucrose.png'},
        {name: 'Tartaglia', img:'/characters/tartaglia.png'},
        {name: 'Thoma',     img:'/characters/thoma.png'},
        {name: 'Anemo',     img:'/characters/traveler_anemo.png'},
        {name: 'Electro',   img:'/characters/traveler_electro.png'},
        {name: 'Geo',       img:'/characters/traveler_geo.png'},
        {name: 'Venti',     img:'/characters/venti.png'},
        {name: 'Xiangling', img:'/characters/xiangling.png'},
        {name: 'Xinyan',    img:'/characters/xinyan.png'},
        {name: 'Yae Miko',  img:'/characters/yae_miko.png'},
        {name: 'Yanfei',    img:'/characters/yanfei.png'},
        {name: 'Yoimiya',   img:'/characters/yoimiya.png'},
        {name: 'Yun jin',   img:'/characters/yun_jin.png'},
        {name: 'Zhongli',   img:'/characters/zhongli.png'},
      ]
    }
  }
}
</script>

<style scoped>
.character {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
}


</style>