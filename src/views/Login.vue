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
    if (this.$cookies.get("osid") && this.$cookies.get("os_token")) {
      console.log(this.$cookies.get("osid"));
      this.$router.push("/");
    } else {
      console.log("no cookie found");
    }
  }
};
</script>