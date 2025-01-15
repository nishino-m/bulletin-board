<template>
    <div class="item" v-for="(item, index) in items" :key="index" @click="GotoRoom(item.CategoryName)">
        <button class="itembutton">{{ item.CategoryName }}</button>
    </div>
</template>
  
  <script>
  export default{
    data(){
        return {
            items: [
                {CategoryName: '趣味'},
                {CategoryName: '仕事'}
            ]
        };
    },
    methods: {
        GotoRoom(RoomName){
            this.$router.push({path: `/room-choice/${RoomName}`});
        }

    }
}
  </script>
  
  <style>
  </style>
  