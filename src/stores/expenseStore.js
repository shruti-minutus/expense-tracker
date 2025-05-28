// src/store/expenseStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExpenseStore = defineStore('expense', () => {
  const expenses = ref([])

  const addExpense = (expense) => {
    expenses.value.push(expense)
  }

  return {
    expenses,
    addExpense,
  }
})
