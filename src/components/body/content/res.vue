<template>
  <div class="ResContent">
    <h3 class="mb-5 pb-5">Select a Year</h3>
    <div class="col-sm-12">
      <sequential-entrance>
        <div v-for="(data, index) in apps" :key="index" class="col-sm-12 d-inline cardDeck">
          <div class="card myCard d-inline">{{data}}</div>
        </div>
      </sequential-entrance>
    </div>
    <div class="reading_logo col-sm-12">
      <div class="float-right">
        <img src="../../../assets/reading.jpg" height="250px" width="250px" />
      </div>
    </div>
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

<style scoped>
.reading_logo {
  margin-top: 100px;
}
.myCard {
  padding: 30px;
  height: 100px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.myCard:hover {
  cursor: pointer;
  box-shadow: none;
}
.cardDeck {
  margin-top: 100px;
}
</style>