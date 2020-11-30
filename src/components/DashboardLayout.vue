<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header width="500px" id="listHam"><b-icon icon="list"></b-icon></b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3" id="sidebar">
          <h1 id="sidebar-no-header-title">Froster</h1>
          <br><br><br><br>
          <nav class="mb-1" id="DatMas">
              <b-nav-item href="/account" @click="hide"><b-icon icon="person-fill"></b-icon>Account</b-nav-item><br><br>
              <b-nav-item href="/location" @click="hide"><b-icon icon="shop"></b-icon>Location</b-nav-item><br><br>
              <b-nav-item href="/products" @click="hide"><b-icon icon="cart3"></b-icon>Product</b-nav-item><br><br>
              <b-nav-item href="/transaction" @click="hide"><b-icon icon="geo-alt-fill"></b-icon>Transaction</b-nav-item><br>
          </nav>
          <!-- <b-button variant="primary" block @click="hide">Close Sidebar</b-button> -->
          <br><br><br><br><br>
          <nav class="mb-1" id="logout">
            <b-nav-item href="/login" @click="logout()"><b-icon icon="box-arrow-in-right"></b-icon>Logout</b-nav-item>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name:"Account",
  data(){
    return{
      drawer:true,
      items:[
        {name: "Account",to:"/account"},
        {name: "Product",to:"/products"},
        {name: "Transaction",to:"/transaction"},
        {name: "Location",to:"/location"},
      ],
    };
  },
  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.replace('/login')
    }
  }
}
</script>
