<template>
    <div class="item" v-for="(item, index) in items" :key="index" @click="GotoRoom(item.RoomName)">
        <button class="itembutton">{{ item.CategoryName }}</button>
    </div>
</template>
  
  <script>
  export default{
    data(){
        return {
            items: [
                {CategoryName: '趣味',RoomName: 'hobby'},
                {CategoryName: '仕事',RoomName: 'business'}
            ]
        };
    },
    methods: {
        GotoRoom(RoomName){
            this.$router.push({path: `/room/${RoomName}`})
        }

    }
}
  </script>
  
  <style>
  </style>
  