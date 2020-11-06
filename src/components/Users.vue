<template>
  <div class="hello">
    <center>
    <!-- <h1 class="header">Adding Card</h1> -->
        <div class="shift">
          <div class="ui card">
            <form class="ui form">
              <div class="field">
                <h3 v-if="!edit">Adding users</h3><h3 v-if="edit">Update User</h3>             
                <input v-model="add.name" type="text" name="first-name" placeholder="Name :">
              </div>
              <div class="field">
                <input v-model="add.email" type="text" name="last-name" placeholder="Email :">
              </div>
              <div class="field">
                <input v-model="add.phone" type="text" name="last-name" placeholder="Phone :">
              </div>
              <div class="field">
                <input v-model="add.type" type="text" name="last-name" placeholder="Type :">
              </div>
                <!-- <select v-model="add.type">
                  <option disabled value="">Type :</option>
                  <option>Intern</option>
                  <option>Personal</option>
                  <option>Professional</option>
                </select> -->
                <br>
              <br>
              <button v-if="!edit" v-on:click="handleAdd" class="ui button" type="button">Submit</button>
              <button v-if="edit" v-on:click="handleUpdateContacts(add._id)" class="ui button" type="button">Update</button>
              <br>
            </form>
            </div>
            <div class="gap">
       <div>
         <div class="ui grid">
            <div class="ui card three wide column" v-for="contact in contacts" :key="contact.id">
                <div class="content" >
                  <p>Name: {{ contact.name}}</p>
                  <p>Email: {{ contact.email }}</p>
                  <p>Phone: {{ contact.phone}}</p>
                  <p>Type: {{ contact.type}}</p>
                </div>
                <div class="ui buttons">
                  <button class="ui inverted green button" @click="toggleUpdate(contact)">Update</button>
                  <button v-on:click="handleDeleteContacts(contact._id)" class="ui inverted red button">Delete</button>
                </div>
              </div>
        </div>
      </div>
        
        </div>
        </div>
        <router-link to="/">
        <button v-on:click="says('Confirm Logging Out')" class="ui inverted secondary button" id="flot">Log Out</button>
        </router-link>
                
    </center>
  </div>
</template>

<script>
export default {
 data(){
   return{
     add: {},
     selected: '',
     contacts: [],
     edit: false
   }
 },
  methods:{
       handleAdd() {
            let URL = "https://keepers-contact.herokuapp.com/api/contact";
            let _data = this.add;
            // console.log("add", this.add)
            let token = window.localStorage.getItem('token');
            fetch(URL, {
                method:"POST",
                body:  JSON.stringify(_data),
                headers: {
                    "Content-type": "application/json",
                    "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {   
                console.log('json->', json);  
                })
                .catch(err => console.log('err->',err))
        }, 
        handleGetContacts(){
            let URL = "https://keepers-contact.herokuapp.com/api/contact";
            // console.log("add", this.add)
            let token = window.localStorage.getItem('token');
            fetch(URL, {
                method:"GET",
                mode: 'cors',
                headers: {
                    "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {   
                this.contacts = json;
                })
                .catch(err => console.log('err->',err))
      },
      handleDeleteContacts(_id){
                // this.contacts.splice(key, 1)
            let URL = `https://keepers-contact.herokuapp.com/api/contact/${_id}`;
            let token = window.localStorage.getItem('token');
       
            fetch(URL, {
                method:"DELETE",
                mode:'cors',
                headers: {
                    "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {   
                console.log('json->', json);  
                this.handleGetContacts();
                })
                .catch(err => console.log('err->',err))
      },
            handleUpdateContacts(id){
            let URL = `https://keepers-contact.herokuapp.com/api/contact/${id}`;
            let _data = this.add;
            console.log(_data);
            let token = window.localStorage.getItem('token');
            fetch(URL, {
              method:"PUT",
              body:  JSON.stringify(_data),
                headers: {
                    "Content": "application/json",
                    "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {   
                console.log('json->', json);  
                this.add = {};
                this.edit = false;
                this.handleGetContacts();
                })
                .catch(err => console.log('err->',err))
      },
      toggleUpdate(data){
          this.edit = true;
          this.add = data;
          console.log(JSON.stringify(this.add));
      }
    },
    created() {
      this.handleGetContacts();
    },
    mounted() {
      this.handleGetContacts();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  padding: 2px;
}
.card {
  margin: 10px !important;
  padding: 10px !important;
}

.shift{
    padding: 40px;
}
.gap{
  padding: 50px;
}
</style>
