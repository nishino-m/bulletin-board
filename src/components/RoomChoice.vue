<template>
    <div class="room">
        <h1>{{ categoryName }} ルーム</h1>
            <div>ここは{{ categoryName }}の部屋です</div>
        </div>
    <div v-if="CategoryData[categoryName].length > 0">
      <ul>
        <li v-for="(room, index) in CategoryData[categoryName]" :key="index">
          <button @click="goToRoom(room)">{{ room }}</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>このカテゴリにはまだ部屋がありません。</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return{
            CategoryData: {
                趣味: ['キャンプ','将棋'],
                仕事: ['技術','社内情報']
            }
        }
    },
    props: ['category'],
    computed: {
      categoryName() {
        return this.category;
      }
    },
    methods: {
        goToRoom(room){
            this.$router.push({ path: `/talk-room/${room}` });
        }
    }
};
  </script>
  
  <style scoped>
  </style>
  