import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expense', {
  state: () => ({
    expenses: []
  }),
  actions: {
    addExpense(expense) {
      this.expenses.push(expense)
    }
  }
})
