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
                <input type="text" name="first-name" placeholder="First Name">
              </div>
              <div class="field">
                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name">
              </div>
              <div class="field">
                <label>Date of Birth</label>
                <input type="text" name="last-name" placeholder="Last Name">
              </div>
              <div class="field">
                <label>Email:</label>
                <input type="text" name="last-name" placeholder="Last Name">
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" tabindex="0" class="hidden">
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button class="ui button" type="submit">Sign Up</button>
            </form>
        </div>
      </div>

    </div>
  </div>
  <div class="extra content">
    <button class="ui button">Join Project</button>
  </div>
      
</div>
</center>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: { 
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* .devider {
  height: 100vh;
  margin: 0;
  padding: 0;
}  */
.column{
  height: 75vh;
}
.ui .card{
  padding: 20px;
  width: 500px;
}
.buttons{
  padding: 50px;
}
.hello{
  align-content: center;
}
</style>
