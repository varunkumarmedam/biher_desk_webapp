<template>
  <div>
    <h3 class="mb-5 pb-5">Select a Year</h3>
    <sequential-entrance>
      <div v-for="(data, index) in apps" :key="index" class="col-sm-12 d-inline cardDeck">
        <div class="card myCard d-inline">{{data}}</div>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  name: "ResContent",
  data: function() {
    return {
      apps: [1, 2, 3, 4]
    };
  }
};
</script>

<style>
.myCard {
  padding: 30px;
  height: 100px;
  border-radius: 20px;
}
.myCard:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.cardDeck {
  margin-top: 100px;
}
</style>