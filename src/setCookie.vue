<template>
  <h3>Done</h3>
</template>

<script>
import crypto from "crypto";
export default {
  mounted() {
    this.$cookies.set("osid", "varunkumarmedam@gmail.com");
    const email = this.$cookies.get("osid");
    var myhash = crypto
      .createHash("sha1")
      .update("biheros" + email)
      .digest("hex");
    this.$cookies.set("os_token", myhash);
    this.$router.push("/login");
  }
};
</script>