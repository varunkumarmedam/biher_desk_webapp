<template>
  <div id="SideBar" class="jumbotron d-flex flex-column justify-content-between">
    <!-- <div
      v-for="(item, index) in iconData"
      :key="index"
      class="d-flex flex-column justify-content-around"
    >
      <p class="p-2" :class="{activeCss:item.css}" :id="item.css" @click="item.name">{{item.name}}</p>
    </div>-->
    <div>
      <div @click="changeHome" :class="{activeCss:home}" class="logos">
        <img src="../assets/home.png" height="30px" style="margin-bottom:10px" />
        <br />
        <font class="myFont">Home</font>
      </div>
      <div @click="changeRes" :class="{activeCss:res}" class="logos">
        <img src="../assets/res.svg" height="30px" style="margin-bottom:10px" />
        <br />
        <font class="myFont">Resources</font>
      </div>
      <div @click="changeQuery" :class="{activeCss:apps}" class="logos">
        <img src="../assets/query.png" height="30px" width="30px" style="margin-bottom:10px" />
        <br />
        <font class="myFont">Queries</font>
      </div>
    </div>

    <p @click="changeSettings" :class="{activeCss:settings}" class="logos">Account</p>
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
      settings: false,
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
      this.res = this.settings = this.apps = false;
      this.home = true;
    },
    changeRes: function() {
      this.$root.$emit("sidebar", 2);
      this.home = this.settings = this.apps = false;
      this.res = true;
    },
    changeQuery: function() {
      this.$root.$emit("sidebar", 3);
      this.res = this.settings = this.home = false;
      this.apps = true;
    },
    changeSettings() {
      this.$root.$emit("sidebar", 4);
      this.res = this.home = this.apps = false;
      this.settings = true;
    }
  }
};
</script>

<style>
.activeCss {
  background-color: #0a65ff!important;
  /* background-image: linear-gradient(to right rgb(255, 255, 255), rgb(73, 131, 255)); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: white;
  padding: 20px;
  border-radius: 15px;
  opacity: 1 !important;
}
.logos {
  padding: 25px;
  background-color: white;
  border-radius: 15px;
  opacity: 0.5;
  margin-bottom: 20px;
}
#SideBar {
  height: 100%;
  border-radius: 25px;
}
.myFont {
  margin-top: 50px !important;
  font-size: 15px;
  letter-spacing: 0.02rem;
  font-weight: 600;
}
</style>