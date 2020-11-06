<template>
  <div class="hello">
    <center>
      <div class="ui card">
  <div class="content">
    <div class="header">Register Account</div>
  </div>
  <div class="content">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
          <form class="ui form">
              <div class="field">
                <label>First Name</label>
                <input v-model="register.name" type="text" name="first-name" placeholder="First Name">
              </div>
              <div class="field">
                <label>Email</label>
                <input v-model="register.email" type="email" name="last-name" placeholder="Email:">
              </div>
              <div class="field">
                <label>Password</label>
                <input v-model="register.password" type="password" name="last-name" placeholder="Password">
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" tabindex="0" class="hidden">
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
             <router-link to="/user">
                <button type="button" v-on:click="handleRegister" class="ui button">Sign Up</button>
             </router-link>
            </form>
        </div>
      </div>
    </div>
  </div>
    </div>
    </center>
  </div>
</template>

<script>
export default {
 data() {
   return {
    register :{ 
      name:'',
      email:'',
      password:'',
    }
   }
 },
  methods:{
       handleRegister() {
            let URL = "https://keepers-contact.herokuapp.com/api/users";
            let _data = this.register;
            console.log("register", this.register)
            fetch(URL, {
                method:"POST",
                body:  JSON.stringify(_data),
                headers: {
                    "Content-type": "application/json"
                    // "Access-Control-Allow-Origin": "*"
                }
            })
            .then(response => response.json())
                .then(json => {   
                window.localStorage.setItem('token',json.token);
                })
                .catch(err => console.log('err->',err))
        }
}
  }
</script>

<style scoped>

</style>
