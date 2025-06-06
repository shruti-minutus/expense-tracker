<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="expenses"
      :items-per-page="5"
      class="elevation-1"
    >
      <template #item.actions="{ item }">
        <v-btn icon size="small" @click="$emit('edit-expense', item)" :title="'Edit ' + item.description">
          <v-icon color="primary">mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon size="small" @click="$emit('delete-expense', item.id)" :title="'Delete ' + item.description">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </template>

      <template #no-data>
        <div class="text-center text-grey">No expenses found.</div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
const props = defineProps({
  expenses: {
    type: Array,
    required: true,
  }
})

const headers = [
  { text: 'Description', value: 'description' },
  { text: 'Amount (₹)', value: 'amount' },
  { text: 'Category', value: 'category' },
  { text: 'Date', value: 'date' },
  { text: 'Actions', value: 'actions', sortable: false }
]
</script>
