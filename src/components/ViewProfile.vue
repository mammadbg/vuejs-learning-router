  
<template>
  <div class="view-profile">
    <h2>Profile for {{ user }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data(){
    return {
      user: this.$route.params.user_id
    }
  },
  methods: {
    updateId(){
      this.user = this.$route.params.user_id
    }
  },
  watch: {
    $route: 'updateId'
  }
}
</script>