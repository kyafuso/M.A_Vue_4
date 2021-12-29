import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      name : ''
    }
  },
  mutations: {
    registerUser(state, user){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        state.user.name = user.name;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
    }
  },
  actions: {
    registerUser( {commit}, user){
      commit('registerUser', user);
    }
  },
  modules: {
  }
})
