import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'
import Books from '@/components/Books'
import Book from '@/components/Book'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    // 
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    },
    {
      path: '/profile',
      name: 'Profiles', 
      component: Users
    },
    // 
    {
      path: '/book/:book_id',
      name: 'Book',
      component: Book
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
  ]
})
