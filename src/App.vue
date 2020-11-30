<template>
  <router-view>
  </router-view>
</template>

<script>
export default {
  name: "App",
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
  background-color: #F2F5F7;

}

#DatMas{
    text-align: center;
    color: #151D65;
    font-size: 100%;
    font-weight: bold;
  }

  #sidebar{
    background-color: #151D65;
    border-radius: 0% 10% 10% 0%;
  }

  #logout{
    text-align: center;
    color: #151D65;
    font-size: 100%;
    font-weight: bold;
  }

  #listHam{
    position:absolute;
    left: 0px;
    right: 0px;
    padding-bottom: 45%;
    padding-right: 5%;
    background-color: #151D65;
  }

</style>

