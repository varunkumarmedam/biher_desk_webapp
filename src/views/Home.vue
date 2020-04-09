<template>
  <div id="app">
    <div class="appBack" v-show="show">
      <KinesisContainer>
        <KinesisElement :strength="-10">hello world main</KinesisElement>
      </KinesisContainer>
    </div>
    <div class="row">
      <div class="col-sm-2">
        {{temp}}
        <SideBar></SideBar>
      </div>
      <div class="col-sm-10">
        <div class="row">
          <body-head></body-head>
          <SearchBox></SearchBox>
        </div>
        <div class="jumbotron p-3 mainFrame">
          <div v-if="status == 1">
            <home-content></home-content>
          </div>
          <div v-else-if="status == 2">
            <query-content></query-content>
          </div>
          <div v-else-if="status==3">
            <res-content></res-content>
          </div>
          <div v-else>
            <account></account>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import BodyHead from "../components/body/head.vue";
import HomeContent from "../components/body/content/home.vue";
import QueryContent from "../components/body/content/query.vue";
import ResContent from "../components/body/content/res.vue";
import Account from "./Account";
import SearchBox from "../components/SearchBox";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import VueAnime from "vue-animejs";
import Vue from "vue";
import store from "../store";

Vue.use(VueAnime);

export default {
  name: "App",
  data: function() {
    return {
      show: false,
      status: 1,
      temp : store.name
    };
  },
  components: {
    KinesisContainer,
    KinesisElement,
    SideBar,
    BodyHead,
    HomeContent,
    QueryContent,
    ResContent,
    Account,
    SearchBox
  },
  mounted: function() {
    this.$root.$on("sidebar", data => {
      this.status = data;
      console.log(data);
    });
  }
};
</script>

<style>
.appBack {
  height: 200px;
  background-color: red;
  padding: 40px;
  /* position: absolute; */
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 20px;
  border-radius: 20px;
}
.mainFrame {
  height: 80%;
  border-radius: 20px;
}
</style>
