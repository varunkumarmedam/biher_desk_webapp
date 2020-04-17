<template>
  <div class="jumbotron m-5 myBody">
    <div class="row">
      <div class="col-sm-12 col-lg-4">
        <img
          src="https://thumbs.dreamstime.com/b/robot-head-gaming-mascot-illustration-sacred-geometry-geometric-background-vector-e-sport-logo-twitch-profile-173343340.jpg"
          width="100%"
          height="300px"
        />
      </div>
      <div class="col-sm-12 col-lg-8 pl-5 mt-3">
        <div class="col-12 mb-5">
          <h1>Varun Kumar Medam</h1>
        </div>
        <div class="row col-sm-12">
          <span>
            <svg
              class="bi bi-phone"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
                clip-rule="evenodd"
              />
              <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </span>
          <span class="contact">+91 9515792944</span>
        </div>

        <div class="row col-12 mb-3">
          <span class="col-xs-1">
            <svg
              class="bi bi-inbox"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.81 4.063A1.5 1.5 0 014.98 3.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H4.98a.5.5 0 00-.39.188L.89 9.312a.5.5 0 11-.78-.624l3.7-4.625z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M.125 8.67A.5.5 0 01.5 8.5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H10.45a2.5 2.5 0 01-4.9 0H1.066z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="col-xs-10" style="width:80%;">
            <a href="#" target="_blank" class="email">varunkumarmedam@gmail.com</a>
          </span>
        </div>

        <div class="row col-12">
          <span class="col-xs-1">
            <svg
              class="bi bi-card-text"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="col-xs-11" style="width:80%;">
            <p class="bio">This is my Bio</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myBody {
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.name {
  font-weight: bold;
}
.contact {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.email {
  font-size: 20px;
  width: 200px;
  word-wrap: break-word;
  font-weight: bold;
  color: blue;
  text-decoration: none;
  padding-left: 10px;
}
.bio {
  padding-left: 10px;
}
</style>