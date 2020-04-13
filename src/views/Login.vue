<template>
  <div class="col-12">
    <div class="col-8 mx-auto">
      <img src="../assets/login_logo.jpg" height="500px" width="100%" />
    </div>
    <div class="col-3 google_btn">
      <a href="#" class="google">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Signup Using Google
      </a>
    </div>
    <a href="https://biheros.herokuapp.com/google">Login with Google</a>
    <br />
    <router-link to="/set">Lets Set Cookies</router-link>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>

<script>
export default {
  name: "Login",
  mounted() {
    // this.$cookies.set("test", "ddcdcdc");
    console.log(this.$cookies.get("connect"));
    if (this.$cookies.get("osid")) {
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
.google_btn{
  color: white;
  background-color: #4285f4;
  
}
a.google{
  color: white;
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