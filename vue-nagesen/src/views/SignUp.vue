<template>
  <div class="signup">
    <Title msg="ユーザー登録"/>
    <form >
      <div>
        <label for="name">ユーザー名</label>
        <input type="text" id="name" v-model="name" placeholder="userName">
      </div>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" placeholder="E-mail">
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" placeholder="Password">
      </div>
      <button type="button" class="button is-primary" @click="registerUser">送信する</button>
    </form>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

export default {
  name: 'SignUp',
  data : function() {
    return{
      name : '',
      email : '',
      password : ''
    }
  },
  components: {
    Title
  },
  computed : {
  },
  methods: {
    registerUser(){
      console.log(firebase);
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    }
  }
}
</script>