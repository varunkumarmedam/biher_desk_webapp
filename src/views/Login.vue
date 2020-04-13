<template>
  <div>
    <a href="https://biheros.herokuapp.com/google">Login with Google</a>
    <br />
    <router-link to="/set">Lets Set Cookies</router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    this.$cookies.set("test", "ddcdcdc");
    console.log(this.$cookies.get("connect"));
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