<template>
  <div>
    <section v-if="errored">
      <p>Something went wrong</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div class="jumbotron m-5 myBody">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <kinesis-container>
                <kinesis-element :strength="-10">
                  <img :src="info.pic" width="100%" height="300px" />
                </kinesis-element>
              </kinesis-container>
            </div>
            <div class="col-sm-12 col-lg-8 pl-5 mt-3">
              <div class="col-12 mb-5">
                <h1>{{info.name}}</h1>
              </div>

              <div class="row col-sm-12">
                <span v-html="phoneIcon"></span>
                <span class="contact">{{info.pmobile}}</span>
              </div>

              <div class="row col-12 mb-3">
                <span class="col-xs-1">
                  <svg
                    class="bi bi-inbox"
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.81 4.063A1.5 1.5 0 014.98 3.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H4.98a.5.5 0 00-.39.188L.89 9.312a.5.5 0 11-.78-.624l3.7-4.625z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M.125 8.67A.5.5 0 01.5 8.5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H10.45a2.5 2.5 0 01-4.9 0H1.066z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="col-xs-10" style="width:80%;">
                  <a href="#" target="_blank" class="email">{{info.email}}</a>
                </span>
              </div>

              <div class="row col-12">
                <span class="col-xs-1">
                  <svg
                    class="bi bi-card-text"
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="col-xs-11" style="width:80%;">
                  <p class="bio">{{info.bio}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- Image Container -->
        <!-- <div class="col-5">
          <kinesis-container>
            <kinesis-element :strength="-10">
              <img :src=info.pic heigth="200px" />
              {{info}}
              
            </kinesis-element>
          </kinesis-container>
        </div>-->
        <!-- <img
                src="https://lh3.googleusercontent.com/-iw_VT87niIgs7_fO3fNSenXfSZu96_MK5zENDjDtma_YOkoRsAjz35BbkLf5Zr00hlENr1i_cT9I_QwlR1FCfyMCn6PQmwZhyXY5GHkiTt09yP9XUPrcONGmUHBxVRIKO0Ny-9xw1K4s0yb9FL8IkEtrYiMmp_PlnErPyeEzgHS2BdnsOMLCKu6fC5CTwJ23kIAqBprK1M8qdlzpUWI_LbHcpRdJv7LE-ZFEswi04V678qwOqiUJciE0p1KsrIoPBZ9JOsMw-Yvu-BUz7wDPvBR0-6C4k2fs-C5Z598urRDb35tem90ujG5M5Fh-n9KYixovi4oLr8ZC1caHTdyl0EKdGH01E0xdFqF0xtUumCwPq4Oz-n9fwW0HKHGGZNXJu7cjVGUhXsjsNccwgu4HMCg3SLQFhk_9kcNqeaeBFuabLzUErmiUqWzItS7LIwOF2vFVQWSz4hRO0E8HSp8nzrhvOM1dXMsbPnvm2ExQWnAiz0oNgLUj7FclU8eBiHlg4V5r4DxGuO4v9IwMWLAmn930TnxORjN-k22oqdSr0FqN1n-T-lCrB5cSMjPFJtEkyUfGPJ3LRvPcxYYKCJtnPwqG2ritsKKm92pKFomSCYDTerxfDNhVA9tYoc4Atu7hHvAaYCdIF5ZukE5KN7it5zUj5tUlnpfLGyhCuZeO2P5Z6JFUH6YWWbjvc4Exbw=w195-h260-no"
                height="200px"
        />-->
        <!-- <div class="col-7">
          <div
            v-anime="{ rotate: '1turn', backgroundColor: red, duration: 2000, loop: false }"
        >{{info.name}}</div>-->
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
      phoneIcon:
        '<svg class="bi bi-phone" width="2em" height="2em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd" /> <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /> </svg>',
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
.myBody {
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.name {
  font-weight: bold;
}
.contact {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.email {
  font-size: 20px;
  width: 200px;
  word-wrap: break-word;
  font-weight: bold;
  color: blue;
  text-decoration: none;
  padding-left: 10px;
}
.bio {
  padding-left: 10px;
}
</style>