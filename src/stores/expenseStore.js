import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expenses', {
  state: () => ({
    expenses: []
  }),
  actions: {
    addExpense(expense) {
      this.expenses.push(expense)
    }
  }
})
