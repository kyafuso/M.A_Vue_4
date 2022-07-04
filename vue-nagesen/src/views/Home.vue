<template>
  <div class="home">
    <div class="header">
      <p class="username">{{ user.name }}さんようこそ！！</p>
      <p class="account">残高：{{ user.account }}円</p>
      <div class="logout">
        <button type="button" class="button is-light" @click="logoutUser">ログアウト</button>
      </div>
    </div>
    <Title msg="ユーザー一覧"/>
    <div class="container">
      <div class="column is-8 is-offset-2">
        <table id="user-table">
          <thead>
            <tr>
              <th>ユーザー名</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="user in users" v-bind:key="user.id">
            <tr>
              <td>{{ user.name }}</td>
              <td><button type="button" class="button is-primary is-small" @click="openWalletModal(user)">walletを見る</button></td>
              <td><button type="button" class="button is-primary is-small" @click="openTransferModal(user)">送る</button></td>
            </tr>
          </tbody>
        </table>
        <wallet-modal :val="userInfo" v-show="showWalletModal" @close="closeWalletModal" />
        <transfer-modal :val="userInfo" v-show="showTransferModal" @close="closeTransferModal" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import WalletModal from '@/components/WalletModal.vue'
import TransferModal from '@/components/TransferModal.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Title,
    WalletModal,
    TransferModal
  },
  data () {
      return {
        showWalletModal: false,
        showTransferModal: false
      }
  },
  computed: {
    ...mapGetters([
      'user',
      'users'
    ])
  },
  methods: {
    logoutUser(){
      this.$store.dispatch('logoutUser')
      this.$router.push('/signin');
    },
    openWalletModal(user) {
      this.showWalletModal = true
      this.userInfo = user
    },
    openTransferModal(user) {
      this.showTransferModal = true
      this.userInfo = user
    },
    closeWalletModal () {
      this.showWalletModal = false
    },
    closeTransferModal () {
      this.showTransferModal = false
    },
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

 #user-table{
  margin: auto;
  border-collapse: separate;
  border-spacing: 8px 2px;
}
</style>