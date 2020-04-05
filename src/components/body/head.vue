<template>
  <div id="bodyHead" class="d-flex justify-content-between">
    <p>Welcome to BIHER OS</p>
    <p class="jumbotron container-flexible" @click="emitProfile">Profile</p>
  </div>
</template>

<script>

export default {
  name: "BodyHead",
  data: function() {
    return {};
  },
  methods: {
    emitProfile() {
      this.$root.$emit("sidebar", 4);
    }
  }
};
</script>

<style>
#bodyHead {
  background-color: green;
}
</style>