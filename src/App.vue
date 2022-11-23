<template>
  <div id="app">
        <header class="header-content header">
        <div class="logo-content">
            <img src="./assets/photos/logo3.png">
            <div>
                <span class="emp-text">EMPLOYEE</span>
                <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
        </div>
        <nav>
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/addemppayroll">Add Employee Payroll</router-link> -->
    </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.body {
    margin: 0;
    height: 100%;
}

.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content>img {
    height: 40px;
    width: 35px;
    border: solid 0px #42515f;
}

.logo-content>div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.emp-text {
    font-family: system-ui;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}

</style>
