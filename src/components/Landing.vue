<template>
  <div class="hello">
       <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
            <div class="ui card">
              <div class="content">
                <h1 class="head">Create An account</h1>
                <div class="description">
                  Feel free to explore and maintain our Policy
                </div>
                <div class="buttons">
                  <h3 >Register now...</h3> 
                  <h3 >Free Trial for 30 days</h3>
                  <router-link to="/log">
                    <button class="ui toggle button">Sign Up</button>
                  </router-link>
                </div>
              </div>
              <!-- <div class="extra content">
                <a>
                  <i class="user icon"></i>
                  22 Friends
                </a>
              </div> -->
            </div>
    </div>
    <div class="column">
      <h1>Welcome Back !</h1>        <form class="ui form">
          <div class="field">
            <label>Username:</label>
            <input type="text" name="first-name" placeholder="User">
          </div>
          <div class="field">
            <label>Email:</label>
            <input type="text" name="last-name" placeholder="Email">
          </div>
          <div class="field">
            <label>Password:</label>
            <input type="text" name="last-name" placeholder="Password">
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden">
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div> 
          <router-link to="/user">
              <button v-on:click="say('Please wait while your information is being processed')" class="ui button" type="submit">Sign In</button>
          </router-link>
        </form>
    </div>
  </div>
</div>
<!-- <router-link v-bind:to="'/blog/'></router-link> -->
  </div>
</template>

<script>
export default {
  props: { 
    msg: String
  },
  methods:{
    say:function(message){
      alert(message)
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 150px;
}

.head{
  color:azure;
}
.column{
  height: 50vh;
}
.ui .card{
  padding: 20px;
  width: 500px;
  background: grey;
}
.buttons{
  padding: 50px;
}
</style>
