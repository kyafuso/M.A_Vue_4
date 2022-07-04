<template>
    <div id="overlay">
        <div id="content">
            <p>あなたの残高：{{ user.account }}</p>
            <p>送る金額</p>
            <div>
                <input type="text" v-model="amount" />
                <button v-on:click="transferAmount">送信</button>
            </div>
            <div>
                <button type="button" class="button is-danger is-small" @click="$emit('close')">close</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TransferModal',
    props: ['val'],
    data: function(){
        return {
            amount: ''
        }
    },
    computed: {
        ...mapGetters([
        'user',
        ])
    },
    methods:{
        transferAmount: function(){
            this.$store.dispatch('transferAmount', {amount: this.amount, recipient: this.val});
            this.$emit('close')
        }
    },
}
</script>

<style>
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding-top: 5em;
  padding-bottom: 5em;
  background-color: #fff;
  text-align: center;
}
</style>