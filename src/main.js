import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo_MwpWHKpsClWDK4u6VdBuwrsHqpaEVA",
  authDomain: "test-743c1.firebaseapp.com",
  databaseURL: "https://test-743c1.firebaseio.com",
  projectId: "test-743c1",
  storageBucket: "test-743c1.appspot.com",
  messagingSenderId: "75507173189",
  appId: "1:75507173189:web:30f59fc1994a540f4a202c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


 