import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Vuex from "vuex";
import mainvue from "./main.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Rules from "./components/Rules.vue";


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
    routes: [
        { name: "home", path: "/", component: Home },
        { name: "about", path: "/about", component: About },
        { name: "rules", path: "/rules", component: Rules }
    ]
});


new Vue({
    router: router,
    render: h => h(mainvue),
    mounted()
    {
    }
}).$mount("div#MainApp");
