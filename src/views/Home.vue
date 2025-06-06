<template>
  <v-container class="pa-4">
    <v-btn color="primary" @click="openAddDialog">+ Add Expense</v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <AddExpense :expenseToEdit="selectedExpense" @close="dialog = false" />
    </v-dialog>

    <v-select
      v-model="selectedCategory"
      :items="categories"
      label="Filter by Category"
      clearable
    />

 <v-row class="d-flex align-center">
  <v-col cols="12" sm="6" md="3">
    <v-text-field
      v-model="startDate"
      label="Start Date"
      type="date"
      clearable
    />
  </v-col>

  <v-col cols="12" sm="6" md="3">
    <v-text-field
      v-model="endDate"
      label="End Date"
      type="date"
      clearable
    />
  </v-col>
</v-row>

    <ExpenseList
      :expenses="filteredExpenses"
      @edit-expense="openEditDialog"
      @delete-expense="handleDeleteExpense"
    />
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import AddExpense from '@/components/AddExpense.vue'
import ExpenseList from '@/components/ExpenseList.vue'
import { useExpenseStore } from '@/stores/expenseStore'

const store = useExpenseStore()

const dialog = ref(false)
const selectedExpense = ref(null)
const selectedCategory = ref(null)
const startDate = ref(null)
const endDate = ref(null)

const categories = ['Food', 'Travel', 'Utilities', 'Shopping'] // example categories

const openAddDialog = () => {
  selectedExpense.value = null
  dialog.value = true
}

const openEditDialog = (expense) => {
  selectedExpense.value = { ...expense }
  dialog.value = true
}

const handleDeleteExpense = (id) => {
  store.deleteExpense(id)
}

const filteredExpenses = computed(() =>
  store.filteredExpenses(selectedCategory.value, startDate.value, endDate.value)
)
</script>
