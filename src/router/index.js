import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AddExpenseView from '@/components/AddExpense.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
  ,
  { path: '/add-expense',
    name: 'AddExpense',
    component: AddExpenseView,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
