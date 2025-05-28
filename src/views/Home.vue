<template>
  <v-container class="pa-4">
    <h1 style="color: red">🏠 Home Page Loaded</h1>

    <AddExpense />
    <ExpenseList />
  </v-container>
</template>

<script setup>
import AddExpense from '@/components/AddExpense.vue'
import ExpenseList from '@/components/ExpenseList.vue'
</script>
