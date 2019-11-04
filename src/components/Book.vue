<template>
  <div class="view-book">
      <h2>Book</h2>
    <h2>Book for {{ bookId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ViewBook',
  data(){
    return {
      bookId: this.$route.params.book_id
    }
  },
  methods: {
    updateBookId(){
      this.bookId = this.$route.params.book_id
    }
  },
  watch: {
    $route: 'updateBookId'
  }
}
</script>