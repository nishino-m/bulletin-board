<template>
  <div class="login-container">
    <h2>ログイン</h2>

    <form @submit.prevent="onLogin">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" placeholder="メールアドレス" />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" placeholder="パスワード" />
      </div>

      <button type="submit">ログイン</button>

      <div class="forgot-password">
        <router-link to="/reset-password">パスワードを忘れた場合</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin() {
      this.$router.push({path: '/category-choice'});
    }
  }
};
</script>

<style>

</style>
