<template>
  <v-data-table
    :headers="headers"
    :items="expenses"
    class="elevation-1"
  />
</template>

<script setup>
import { useExpenseStore } from '../stores/expenseStore'
import { computed } from 'vue'

const store = useExpenseStore()

const expenses = computed(() => store.expenses)

const headers = [
  { text: 'Description', value: 'description' },
  { text: 'Amount', value: 'amount' },
  { text: 'Category', value: 'category' },
]
</script>
