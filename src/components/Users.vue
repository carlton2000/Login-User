<template>
  <div class="hello">
    <h1 class="header">Users Logged In </h1>
        <div class="shift">
        <div class="ui grid">
        <div class="four wide column">
          <div class="ui card">
              <div class="image">
                <!-- <img alt="Vue logo" src="../assets/chelsea.png"> -->
              </div>
              <div class="content">
                <a class="header">Paul</a>
                <div class="meta">
                  <span class="date">paul@gmail.com</span>
                </div>
                <div class="description">
                  Tel: 021 333 3333
                </div>
                <div class="ui simple selection dropdown">
                  <input type="hidden" name="gender">
                  <i class="dropdown icon"></i>
                  <div class="default text">Title :</div>
                  <div class="menu">
                    <div class="item" data-value="2">Admin</div>
                    <div class="item" data-value="1">Intern</div>
                    <div class="item" data-value="0">Partner</div>
                  </div>
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">John</a>
                <div class="meta">
                  <span class="date">john@gmail.co.za</span>
                </div>
                <div class="description">
                  Tel: 021 444 4444
                </div>
                <div class="ui simple selection dropdown">
                  <input type="hidden" name="gender">
                  <i class="dropdown icon"></i>
                  <div class="default text">Title :</div>
                  <div class="menu">
                    <div class="item" data-value="2">Admin</div>
                    <div class="item" data-value="1">Intern</div>
                    <div class="item" data-value="0">Partner</div>
                  </div>
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">Sandy</a>
                <div class="meta">
                  <span class="date">sandy@hotmail.co.za</span>
                </div>
                <div class="description">
                  Tel: 021 555 5555
                </div>
                 <div class="ui simple selection dropdown">
                  <input type="hidden" name="gender">
                  <i class="dropdown icon"></i>
                  <div class="default text">Title :</div>
                  <div class="menu">
                    <div class="item" data-value="2">Admin</div>
                    <div class="item" data-value="1">Intern</div>
                    <div class="item" data-value="0">Partner</div>
                  </div>
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">Miche</a>
                <div class="meta">
                  <span class="date">Miche@yahoo.com</span>
                </div>
                <div class="description">
                  Tel: 021 777 7777
                </div>
                  <div class="ui simple selection dropdown">
                  <input type="hidden" name="gender">
                  <i class="dropdown icon"></i>
                  <div class="default text">Title :</div>
                  <div class="menu">
                    <div class="item" data-value="2">Admin</div>
                    <div class="item" data-value="1">Intern</div>
                    <div class="item" data-value="0">Partner</div>
                  </div>
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        </div>
        </div>
        <router-link to="/"><button v-on:click="says('Confirm Logging Out')" class="ui inverted secondary button" id="flot">Log Out</button></router-link>
                <!-- <div class="ui grid">
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">Kristy</a>
                <div class="meta">
                  <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">Kristy</a>
                <div class="meta">
                  <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">Kristy</a>
                <div class="meta">
                  <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
                <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
              <div class="content">
                <a class="header">Kristy</a>
                <div class="meta">
                  <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                  Kristy is an art director living in New York.
                </div>
              </div>
              <div class="ui buttons">
                <button class="ui inverted green button">Update</button>
                <button class="ui inverted red button">Delete</button>
              </div>
            </div>
        </div>
        </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: { 
  },

    methods: {
    says: function (message) {
      alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  padding: 2px;
}

.shift{
    padding: 40px;
}
</style>
