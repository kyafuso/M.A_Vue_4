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
    },
    users: []
  },
  getters: {
    user: state => state.user,
    users: state => state.users
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
      const docRef = db.collection('users').doc(firebase.auth().currentUser.uid)
      docRef.get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data()
          state.user.name = userData.name
          state.user.account = userData.account
        }
      })
    },
    setLogout(state){
      state.user.isLogin = false;
      state.users = [];
    },
    getUsers(state){
      db.collection("users").get().then((query) => {
        query.forEach((doc) => {
          const data = doc.data();
          if (doc.id != firebase.auth().currentUser.uid) {
            state.users.push({ id: doc.id,
                               name: data.name,
                               account: data.account
                            });
          }
        });
      })
      .catch((error)=>{
        console.log(`データの取得に失敗しました (${error})`);
      });
    }
  },
  actions: {
    registerUser( {commit}, user){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        console.log(userCredential.user);
        commit('setUser', user);
        commit('getUsers');
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
        commit('getUsers');
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
