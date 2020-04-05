<template>
  <div id="SideBar" class="jumbotron jusify-content-space">
    <!-- <div
      v-for="(item, index) in iconData"
      :key="index"
      class="d-flex flex-column justify-content-around"
    >
      <p class="p-2" :class="{activeCss:item.css}" :id="item.css" @click="item.name">{{item.name}}</p>
    </div>-->
    <p @click="changeHome" :class="{activeCss:home}" key="1">
      <img src="../assets/home.png" height="50px" />
      <br />Home
    </p>
    <p @click="changeRes" :class="{activeCss:res}" key="2">
      <img src="../assets/res.svg" height="50px" />
      <br />Resources
    </p>
    <p @click="changeQuery" :class="{activeCss:apps}">
      <img src="../assets/query.png" height="50px" />
      <br />Queries
    </p>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: function() {
    return {
      home: true,
      apps: false,
      res: false,
      activeData: "",
      iconData: [
        {
          name: "Home",
          css: "home"
        },
        {
          name: "Resources",
          css: "res"
        },
        {
          name: "Queries",
          css: "query"
        }
      ]
    };
  },
  methods: {
    changeHome: function() {
      this.$root.$emit("sidebar", 1);
      this.home = true;
      this.apps = false;
      this.res = false;
    },
    changeRes: function() {
      this.$root.$emit("sidebar", 2);
      this.res = true;
      this.home = false;
      this.apps = false;
    },
    changeQuery: function() {
      this.$root.$emit("sidebar", 3);
      this.apps = true;
      this.home = false;
      this.res = false;
    }
  }
};
</script>

<style>
.activeCss {
  background-color: rgb(110, 110, 255);
  color: white;
  padding: 20px;
  border-radius: 20px;
}
#SideBar {
  height: 100%;
  background-color: whitesmoke;
  opacity: 0.9;
}
</style>