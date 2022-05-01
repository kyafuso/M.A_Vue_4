import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import { db } from "../firebase";

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

      db.collection('users').doc(firebase.auth().currentUser.uid).set({
        'name': state.user.name,
        'account': state.user.account
      }, { merge: true })
    },
    setLogin(state){
      state.user.isLogin = true;
      //const doc = db.collection('users').doc(firebase.auth().currentUser.uid).get()
      //const user = doc.data()
      //state.user.name = user.name
      let userData = {}
      const docRef = db.collection('users').doc(firebase.auth().currentUser.uid)
      docRef.get().then((doc) => {
        if (doc.exists) {
          userData = doc.data()
          state.user.name = userData.name
          state.user.account = userData.account
        }
      })
    },
    setLogout(state){
      state.user.isLogin = false;
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
    loginUser( {commit}, user ){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        commit('setLogin');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
    },
    logoutUser( {commit} ){
      firebase.auth().signOut()
      .then(() => {
        commit('setLogout');
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
