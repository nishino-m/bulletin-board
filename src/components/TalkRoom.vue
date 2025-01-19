<template>
    <div class="room-details">
      <h1>{{ roomname }} のトークルーム</h1>
      
      <div v-if="messages.length > 0">
        <ul>
          <li v-for="(message, index) in messages" :key="index">
            <strong>{{ message.user }}:</strong> {{ message.text }}
          </li>
        </ul>
      </div>
  
      <div v-else>
        <p>この部屋にはまだメッセージがありません。</p>
      </div>
      
      <div>
        <input v-model="newMessage" type="text" placeholder="メッセージを入力" />
        <button @click="sendMessage">送信</button>
      </div>
    </div>
  </template>
<script>
export default {
    props: ['roomname'],
    data() {
        return {
            newMessage: '', 
            messages: []
    };
  },
  created(){
    this.fetchMessages();
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') {
        return; 
      }
      const newMessage = {
        user: 'User1',
        text: this.newMessage
      };
    },
    fetchMessages() {
        this.messages = [
            { user: 'User1', text: '初めまして！' },
            { user: 'User2', text: 'こんにちは！' }
        ];
    }
}
  }
</script>
<style>
</style>
