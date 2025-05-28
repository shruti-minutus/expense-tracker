<template>
  <v-form>
    <v-text-field v-model="description" label="Description" />
    <v-text-field v-model="amount" label="Amount" type="number" />
    <v-text-field v-model="category" label="Category" />
    <v-btn color="primary" @click="addExpense">Add Expense</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useExpenseStore } from '../store/expenseStore'

const store = useExpenseStore()

const description = ref('')
const amount = ref('')
const category = ref('')

const addExpense = () => {
  if (description.value && amount.value && category.value) {
    store.addExpense({
      description: description.value,
      amount: parseFloat(amount.value),
      category: category.value,
    })

    // Clear the form
    description.value = ''
    amount.value = ''
    category.value = ''
  } else {
    alert('Please fill all fields')
  }
}
</script>
