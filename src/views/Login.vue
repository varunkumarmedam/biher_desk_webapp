<template>
  <div class="col-12">
    <div class="col-sm-12 col-lg-8 mx-auto">
      <img src="../assets/login_logo.jpg" height="500px" width="100%" />
    </div>
    <div class="col-sm-8 col-lg-3 mx-auto">
      <button
        class="col-sm-8 col-lg-12 google_btn pt-1"
        style="width:100%"
        onclick="location.href = 'https://biheros.herokuapp.com/google'"
      >
        <span class="d-flex justify-content-right">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            style="background-color:white"
            class="p-1 -1"
            height="35px"
          />
          <p class="pl-4" style="font-size:20px">Login with Google</p>
        </span>
      </button>
    </div>
    <router-link to="/set">Lets Set Cookies</router-link>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>

<script>
export default {
  name: "Login",
  mounted() {
    // this.$cookies.set("test", "ddcdcdc");
    if (this.$cookies.get("connect.sid")) {
      console.log(this.$cookies.get("connect.sid"));
      this.$router.push("/");
    } else {
      console.log("no cookie found");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.google_btn {
  color: white;
  background-color: #4285f4;
  height: 45px;
}
.google_btn:hover {
  box-shadow: 3px 3px 3px #888888;
}
.btn {
  color: blue;
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
}
.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px;
}
.btn-google {
  color: #1300bd;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #ddd;
}
</style>