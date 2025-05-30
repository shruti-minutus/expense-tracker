<template>
  <v-container class="pa-4">
    <v-btn color="primary" @click="openAddDialog">+ Add Expense</v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <AddExpense :expenseToEdit="selectedExpense" @close="dialog = false" />
    </v-dialog>

    <ExpenseList @edit-expense="openEditDialog" @delete-expense="handleDeleteExpense" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import AddExpense from '@/components/AddExpense.vue'
import ExpenseList from '@/components/ExpenseList.vue'
import { useExpenseStore } from '@/stores/expenseStore'

const store = useExpenseStore()
const dialog = ref(false)
const selectedExpense = ref(null)

const openAddDialog = () => {
  selectedExpense.value = null
  dialog.value = true
}

const openEditDialog = (expense) => {
  selectedExpense.value = { ...expense }
  dialog.value = true
}

function handleDeleteExpense(id) {
  store.deleteExpense(id)
}
</script>
