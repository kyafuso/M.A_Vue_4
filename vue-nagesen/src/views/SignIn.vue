<template>
  <div class="signin">
    <Title msg="ログイン画面"/>
    <form>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="user.email" placeholder="E-mail">
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="user.password" placeholder="Password">
      </div>
      <button type="button" class="button is-primary" @click="loginUser">ログイン</button>
    </form>
    <p><router-link to="/signup">新規登録はこちら</router-link></p>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'SignIn',
  data : function() {
    return{
      user : {
        email : '',
        password : ''
      }
    }
  },
  components: {
    Title
  },
  computed : {
  },
  methods: {
    loginUser(){
      this.$store.dispatch('loginUser', this.user)
      this.$router.push('/');
    }
  }
}
</script>