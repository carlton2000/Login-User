<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/log" exact>Login</router-link></li>
        </ul>
    </nav>
</template>

<script>

export default {
    data () {
        return {
            
        }
    },
    methods: {
    },
    
    computed: {

    },
    
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: lightgray;
    color: darkgrey;
}
</style>