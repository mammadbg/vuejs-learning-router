<template>
    <div class="users">
        <h1>Users</h1>
        <ul>
            <li v-for="(user,index) in users" :key="index">
                <router-link :to="{ name:'ViewProfile', params:{user_id: user} }">{{user}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "users",
    data(){
        return{
            users: ["user1", "user2", "user3", "user4"],
        }
    }
}
</script>

<style>
ul{
    padding: 1rem;
    background: #051996;
}
    a{
        padding: 1rem;
        /* background: #456654; */
        border: 1px solid #fff;
        color: #fff;
    }
</style>