import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expenses', {
  state: () => ({
    expenses: [
      // sample expenses
      { id: 1, category: 'Food', amount: 10, date: '2025-06-01' },
      { id: 2, category: 'Travel', amount: 20, date: '2025-06-15' },
      { id: 3, category: 'Food', amount: 5, date: '2025-06-20' }
    ]
  }),
  getters: {
    filteredExpenses: (state) => (category, startDate, endDate) => {
      return state.expenses.filter(exp => {
        const matchCategory = category ? exp.category === category : true
        const matchDate =
          startDate && endDate
            ? exp.date >= startDate && exp.date <= endDate
            : true
        return matchCategory && matchDate
      })
    }
  },
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
