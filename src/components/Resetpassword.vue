<template>
    <div>
      <h2>パスワード変更</h2>
      <form @submit.prevent="onChangePassword">
        <div>
          <label for="oldPassword">現在のパスワード</label>
          <input type="password" v-model="oldPassword" required />
        </div>
        <div>
          <label for="newPassword">新しいパスワード</label>
          <input type="password" v-model="newPassword" required />
        </div>
        <div>
          <label for="confirmPassword">新しいパスワードの確認</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">変更</button>
      </form>
    </div>
  </template>
  
  <script>
  </script>
  
  <style>
  </style>
  