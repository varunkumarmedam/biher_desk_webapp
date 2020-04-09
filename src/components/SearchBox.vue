<template>
  <div id="cover" class="d-inline">
    <form method="get" action>
      <div class="tb">
        <div class="td">
          <input type="text" placeholder="Search" required />
        </div>
        <div class="td" id="s-cover">
          <button type="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style scoped>
input,
button {
  color: #fff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  outline: none;
}

#cover {
  position: absolute;
  left: 0;
  right: -100px;
  width: 750px;
  padding: 35px;
  padding-top: 0;
  height: 100px;
  margin: -25px 0 0 auto;
  background-color: #0a65ff;
  border-radius: 20px;
  box-shadow: 0 10px 40px #0a65ff, 0 0 0 20px #ffffffeb;
  transform: scale(0.6);
}

input[type="text"] {
  width: 100%;
  height: 96px;
  font-size: 60px;
  line-height: 1;
}

input[type="text"]::placeholder {
  color: #a4c6ff;
}

#s-cover {
  width: 1px;
  padding-left: 35px;
}

button {
  position: relative;
  display: block;
  width: 84px;
  height: 96px;
  cursor: pointer;
}

#s-circle {
  position: relative;
  top: -10px;
  bottom: 30px !important;
  left: 0;
  width: 53px;
  height: 53px;
  margin-top: 0;
  border-width: 15px;
  border: 15px solid rgb(255, 255, 255);
  background-color: transparent;
  border-radius: 100%;
  transition: 0.5s ease all;
}

button span {
  position: absolute;
  top: 60px;
  left: 28px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
}

button span:before,
button span:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 15px;
  background-color: #fff;
  border-radius: 10px;
  transform: rotateZ(0);
  transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
  top: -1px;
  width: 67px;
  height: 15px;
  border-width: 0;
  background-color: #fff;
  border-radius: 20px;
}

#s-cover:hover span {
  top: 40px;
  left: 56px;
  width: 25px;
  transform: rotateZ(0);
  bottom: 20px;
}

#s-cover:hover button span:before {
  bottom: 11px;
  transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
  bottom: -11px;
  transform: rotateZ(-52deg);
}
#s-cover:hover button span:before,
#s-cover:hover button span:after {
  right: -6px;
  width: 40px;
  background-color: #fff;
}
.tb {
  display: table;
  width: 100%;
}
.td {
  display: table-cell;
  vertical-align: middle;
}
</style>