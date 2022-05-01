<template>
  <div class="home">
    <div class="header">
      <p class="username">{{ user.name }}さんようこそ！！</p>
      <p class="account">残高：{{ user.account }}円</p>
      <div class="logout">
        <button type="button" class="button is-primary" @click="logoutUser">ログアウト</button>
      </div>
    </div>
    <Title msg="ユーザー一覧"/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Title
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    logoutUser(){
      this.$store.dispatch('logoutUser')
      this.$router.push('/signin');
    }
  }
}
</script>

<style scoped>

.username {
  text-align: left;
  float: left;
}

.account {
  text-align: right;
}

.logout {
  float: right;
}
</style>