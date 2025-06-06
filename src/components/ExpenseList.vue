<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (₹)</th>
          <th>Category</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.id">
          <td>{{ expense.description }}</td>
          <td>{{ expense.amount.toFixed(2) }}</td>
          <td>{{ expense.category }}</td>
          <td>{{ expense.date }}</td>
          <td>
            <v-btn icon size="small" @click="$emit('edit-expense', expense)" :title="'Edit ' + expense.description">
              <v-icon color="primary">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon size="small" @click="$emit('delete-expense', expense.id)" :title="'Delete ' + expense.description">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div v-if="expenses.length === 0" class="text-center text-grey mt-4">
      No expenses found.
    </div>
  </v-container>
</template>

<script setup>
const props = defineProps({
  expenses: Array
})
</script>
