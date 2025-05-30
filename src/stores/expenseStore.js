import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expenses', {
  state: () => ({
    expenses: []
  }),
  actions: {
    addExpense(expense) {
      this.expenses.push(expense)
    },
    updateExpense(id, updatedExpense) {
      const index = this.expenses.findIndex(exp => exp.id === id)
      if (index !== -1) {
        this.expenses[index] = { ...updatedExpense }
      }
    },
    deleteExpense(id) {
      this.expenses = this.expenses.filter(exp => exp.id !== id)
    }
  }
})
