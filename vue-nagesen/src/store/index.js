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
    registerUser(state, user){
      state.user.name = user.name;
      state.user.account = 1000;
    },
    loginUser(state){
      state.user.isLogin = true;
    }
  },
  actions: {
    registerUser( {commit}, user){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        commit('registerUser', user);
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
        commit('loginUser');
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
