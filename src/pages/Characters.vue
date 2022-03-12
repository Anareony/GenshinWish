<template>
  <h1>Персонажи</h1>
  <div class="filter-btns">  
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <my-select 
      v-model="selectedSort"
      :options="charOptions"
    />
    <sort-btn
      @click="toggleClass()"
      :class="{active: isActive}"
    />
  </div>
  <character-list
    :characters="searchedCharacters"    
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
        isActive: false,
        charOptions: [
          {value: 'name', name: 'По имени'},
          {value: 'weapon', name: 'По оружию'}
        ],
        searchQuery: '',
        selectedSort: '',
        characters: [
          {name:'Albedo',    img:'./characters/albedo.png',             weapon:'sword'          },
          {name:'Aloy',      img:'./characters/aloy.png',               weapon:'bow'            },
          {name:'Amber',     img:'./characters/amber.png',              weapon:'bow'            },
          {name:'Itto',      img:'/characters/arataki_itto.png',       weapon:'claymore'       },
          {name:'Barbara',   img:'/characters/barbara.png',            weapon:'catalyst'       },
          {name:'Beidou',    img:'/characters/beidou.png',             weapon:'claymore'       },
          {name:'Bennett',   img:'/characters/bennett.png',            weapon:'sword'          },
          {name:'Chongyun',  img:'/characters/chongyun.png',           weapon:'claymore'       },
          {name:'Diluc',     img:'/characters/diluc.png',              weapon:'claymore'       },
          {name:'Diona',     img:'/characters/diona.png',              weapon:'bow'            },
          {name:'Eula',      img:'/characters/eula.png',               weapon:'claymore'       },
          {name:'Fischl',    img:'/characters/fischl.png',             weapon:'bow'            },
          {name:'Ganyu',     img:'/characters/ganyu.png',              weapon:'bow'            },
          {name:'Gorou',     img:'/characters/gorou.png',              weapon:'bow'            },
          {name:'Hu tao',    img:'/characters/hu_tao.png',             weapon:'spear'          },
          {name:'Jean',      img:'/characters/jean.png',               weapon:'sword'          },
          {name:'Kazuha',    img:'/characters/kaedehara_kazuha.png',   weapon:'sword'          },
          {name:'Kaeya',     img:'/characters/kaeya.png',              weapon:'sword'          },
          {name:'Ayaka',     img:'/characters/kamisato_ayaka.png',     weapon:'sword'          },
          {name:'Keqing',    img:'/characters/keqing.png',             weapon:'sword'          },
          {name:'Klee',      img:'/characters/klee.png',               weapon:'catalyst'       },
          {name:'Sara',      img:'/characters/kujou_sara.png',         weapon:'bow'            },
          {name:'Lisa',      img:'/characters/lisa.png',               weapon:'catalyst'       },
          {name:'Mona',      img:'/characters/mona.png',               weapon:'catalyst'       },
          {name:'Ningguang', img:'/characters/ningguang.png',          weapon:'catalyst'       },
          {name:'Noelle',    img:'/characters/noelle.png',             weapon:'claymore'       },
          {name:'Qiqi',      img:'/characters/qiqi.png',               weapon:'sword'          },
          {name:'Raiden',    img:'/characters/raiden_shogun.png',      weapon:'spear'          },
          {name:'Razor',     img:'/characters/razor.png',              weapon:'claymore'       },
          {name:'Rosaria',   img:'/characters/rosaria.png',            weapon:'spear'          },
          {name:'Kokomi',    img:'/characters/sangonomiya_kokomi.png', weapon:'catalyst'       },
          {name:'Sayu',      img:'/characters/sayu.png',               weapon:'claymore'       },
          {name:'Shenhe',    img:'/characters/shenhe.png',             weapon:'spear'          },
          {name:'Sucrose',   img:'/characters/sucrose.png',            weapon:'catalyst'       },
          {name:'Tartaglia', img:'/characters/tartaglia.png',          weapon:'bow'            },
          {name:'Thoma',     img:'/characters/thoma.png',              weapon:'spear'          },
          {name:'Anemo',     img:'/characters/traveler_anemo.png',     weapon:'sword'          },
          {name:'Electro',   img:'/characters/traveler_electro.png',   weapon:'sword'          },
          {name:'Geo',       img:'/characters/traveler_geo.png',       weapon:'sword'          },
          {name:'Venti',     img:'/characters/venti.png',              weapon:'bow'            },
          {name:'Xiangling', img:'/characters/xiangling.png',          weapon:'spear'          },
          {name:'Xinyan',    img:'/characters/xinyan.png',             weapon:'claymore'       },
          {name:'Yae Miko',  img:'/characters/yae_miko.png',           weapon:'catalyst'       },
          {name:'Yanfei',    img:'/characters/yanfei.png',             weapon:'catalyst'       },
          {name:'Yoimiya',   img:'/characters/yoimiya.png',            weapon:'bow'            },
          {name:'Yun jin',   img:'/characters/yun_jin.png',            weapon:'spear'          },
          {name:'Zhongli',   img:'/characters/zhongli.png',            weapon:'spear'          },
        ]
      }
    },
    methods: {
        filterByWeapon(weapon) {
            return this.sortedCharacters.filter( c => c.weapon.includes(weapon))
        },
        toggleClass() {
            this.isActive = !this.isActive
        }
    },
    computed: {
        sortedCharacters() {
            return [...this.characters].sort( (char1, char2) =>  char1[this.selectedSort]?.localeCompare(char2[this.selectedSort]) )
        },
        searchedCharacters() {
            return this.sortedCharacters.filter( characters => characters.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            || characters.weapon.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
        sword() {
            return this.filterByWeapon('sword')
        }
    },
}
</script>

<style scoped>

.filter-btns {
    display: flex;
    align-items: center;
    padding-bottom: 15px;

}

</style>