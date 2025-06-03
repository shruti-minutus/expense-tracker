<template>
  <v-container>
    <v-row>
      <v-col
        v-for="expense in expenses"
        :key="expense.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="mx-auto my-3" outlined hover>
          <v-card-title class="d-flex justify-space-between align-center">
            <div>
              <strong>{{ expense.description }}</strong>
              <div class="text--secondary">{{ expense.category }}</div>
            </div>
            <div :class="amountClass(expense.amount)">
              ₹{{ expense.amount.toFixed(2) }}
            </div>
          </v-card-title>

          <v-card-subtitle>{{ expense.date }}</v-card-subtitle>

          <v-card-actions>
            <v-btn icon @click="$emit('edit-expense', expense)">
              <v-icon color="primary">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="$emit('delete-expense', expense.id)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  expenses: Array
})
function amountClass(amount) {
  return amount > 1000 ? 'text-danger' : 'text-success'
}
</script>

<style>
.text-danger {
  color: #e53935;
  font-weight: bold;
}
.text-success {
  color: #43a047;
  font-weight: bold;
}
</style>
