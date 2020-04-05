<template>
  <div class="myProfile">
    <h3>Profile</h3>

    <section v-if="errored">
      <p>Something went wrong</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else class="row">
        <!-- Image Container -->
        <div class="col-5">
          <kinesis-container>
            <kinesis-element :strength="-10">
              <img :src="info.pic" height="200px"/>
            </kinesis-element>
          </kinesis-container>
        </div>

        <div class="col-7">
          <div
            v-anime="{ rotate: '1turn', backgroundColor: red, duration: 2000, loop: false }"
          >{{info.name}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import VueAnime from "vue-animejs";
import Vue from "vue";
Vue.use(VueAnime);

export default {
  name: "Profile",
  components: {
    KinesisContainer,
    KinesisElement
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/u17cs412")
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
</style>