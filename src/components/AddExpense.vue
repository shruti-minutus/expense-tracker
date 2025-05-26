<template>
  <v-card class="pa-4 ma-4">
    <v-text-field
      label="Expense Name"
      v-model="name"
      outlined
    />
    <v-text-field
      label="Amount"
      v-model="amount"
      type="number"
      outlined
    />
    <v-btn color="primary" @click="submitExpense">Add Expense</v-btn>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useExpenseStore } from '../stores/expenseStore'

const name = ref('')
const amount = ref('')

const expenseStore = useExpenseStore()

function submitExpense() {
  if (name.value && amount.value) {
    expenseStore.addExpense({
      name: name.value,
      amount: parseFloat(amount.value)
    })
    name.value = ''
    amount.value = ''
  }
}
</script>
