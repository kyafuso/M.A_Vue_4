<template>
  <div class="home">
    <div class="header">
      <p class="username">{{ user.name }}ようこそさん！</p>
      <p class="account">残高：{{ user.account }}円</p>
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
</style>