<template>
  <div class="myAccount">
    <h3>Account {{id}}</h3>

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
              <img
                src="https://lh3.googleusercontent.com/-iw_VT87niIgs7_fO3fNSenXfSZu96_MK5zENDjDtma_YOkoRsAjz35BbkLf5Zr00hlENr1i_cT9I_QwlR1FCfyMCn6PQmwZhyXY5GHkiTt09yP9XUPrcONGmUHBxVRIKO0Ny-9xw1K4s0yb9FL8IkEtrYiMmp_PlnErPyeEzgHS2BdnsOMLCKu6fC5CTwJ23kIAqBprK1M8qdlzpUWI_LbHcpRdJv7LE-ZFEswi04V678qwOqiUJciE0p1KsrIoPBZ9JOsMw-Yvu-BUz7wDPvBR0-6C4k2fs-C5Z598urRDb35tem90ujG5M5Fh-n9KYixovi4oLr8ZC1caHTdyl0EKdGH01E0xdFqF0xtUumCwPq4Oz-n9fwW0HKHGGZNXJu7cjVGUhXsjsNccwgu4HMCg3SLQFhk_9kcNqeaeBFuabLzUErmiUqWzItS7LIwOF2vFVQWSz4hRO0E8HSp8nzrhvOM1dXMsbPnvm2ExQWnAiz0oNgLUj7FclU8eBiHlg4V5r4DxGuO4v9IwMWLAmn930TnxORjN-k22oqdSr0FqN1n-T-lCrB5cSMjPFJtEkyUfGPJ3LRvPcxYYKCJtnPwqG2ritsKKm92pKFomSCYDTerxfDNhVA9tYoc4Atu7hHvAaYCdIF5ZukE5KN7it5zUj5tUlnpfLGyhCuZeO2P5Z6JFUH6YWWbjvc4Exbw=w195-h260-no"
                height="200px"
              />
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
      errored: false,
      id: this.$route.params.id
    };
  },
  mounted() {
    axios
      .get("https://biheros.herokuapp.com/" + this.id)
      .then(response => {
        this.info = response.data;
        console.log("lets see");
        console.log(response.data);
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