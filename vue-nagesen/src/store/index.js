import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      name : '',
      account : '',
      isLogin : false
    }
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser(state, user){
      state.user.name = user.name;
      state.user.account = 1000;
    },
    setLogin(state){
      state.user.isLogin = true;
    }
  },
  actions: {
    registerUser( {commit}, user){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        commit('setUser', user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
    },
    loginUser( {commit}, user){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        commit('setLogin');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
    }
  },
  modules: {
  }
})
