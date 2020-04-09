<template>
  <div>
    <h2>Cookies data got corrupted</h2>
    <h3>All Sessions and cookies are removed, Start with a new Blast :)</h3>
    <router-link to="/login">Login Now</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$cookies.remove("osid");
    this.$cookies.remove("os_token");
  }
};
</script>