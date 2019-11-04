<template>
  <div id="books">
    <h2>Books list</h2>
    <ul>
      <li v-for="(id, index) in books" :key="index">
        <router-link :to="{ name: 'Book', params: {book_id: id}   }">
            Book {{id}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Books",
  data() {  
    return {
      books: ["book11", "book12", "book13"]
    };
  }
};
</script>