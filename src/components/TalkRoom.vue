<template>
    <div class="room-details">
      <h1>{{ roomname }} のトークルーム</h1>
      
      <!-- トーク履歴の表示 -->
      <div v-if="messages.length > 0">
        <ul>
          <li v-for="(message, index) in messages" :key="index">
            <strong>{{ message.user }}:</strong> {{ message.text }}
          </li>
        </ul>
      </div>
  
      <!-- トーク履歴がない場合 -->
      <div v-else>
        <p>この部屋にはまだメッセージがありません。</p>
      </div>
      
      <!-- メッセージ送信フォーム -->
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
            newMessage: '', // 新しいメッセージの入力値
            messages: []
    };
  },
  created(){
    this.fetchMessages();
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') {
        return; // 空メッセージを送信しない
      }
      const newMessage = {
        user: 'User1', // 現在のユーザー名をここに設定（仮）
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