<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-2">
        <SideBar></SideBar>
      </div>
      <div class="col-sm-10">
        <body-head></body-head>
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
          <profile></profile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import BodyHead from "./components/body/head.vue";
import HomeContent from "./components/body/content/home.vue";
import QueryContent from "./components/body/content/query.vue";
import ResContent from "./components/body/content/res.vue";
import Profile from "./components/profile";

export default {
  name: "App",
  data: function() {
    return {
      status: 1
    };
  },
  components: {
    SideBar,
    BodyHead,
    HomeContent,
    QueryContent,
    ResContent,
    Profile
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
  padding: 20px;
  height: 100%;
  border-radius: 20px;
}
</style>
