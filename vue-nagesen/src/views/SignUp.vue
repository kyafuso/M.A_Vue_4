<template>
  <div class="signup">
    <Title msg="ユーザー登録"/>
    <form >
      <div>
        <label for="name">ユーザー名</label>
        <input type="text" id="name" v-model="user.name" placeholder="userName">
      </div>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="user.email" placeholder="E-mail">
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="user.password" placeholder="Password">
      </div>
      <button type="button" class="button is-primary" @click="registerUser">送信する</button>
    </form>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'SignUp',
  data : function() {
    return{
      user : {
        name : '',
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
    registerUser(){
      this.$store.dispatch('registerUser', this.user)
    }
  }
}
</script>