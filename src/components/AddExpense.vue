<template>
  <v-card class="pa-4 mx-auto" max-width="500">
    <v-card-title>{{ expenseToEdit ? 'Edit Expense' : 'Add New Expense' }}</v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="description"
        label="Description"
        :rules="[v => !!v || 'Description is required']"
        required
      />
      <v-text-field
        v-model="amount"
        label="Amount"
        type="number"
        :rules="[v => !!v || 'Amount is required', v => v > 0 || 'Amount must be positive']"
        required
      />
      <v-select
        v-model="category"
        :items="categories"
        label="Category"
        :rules="[v => !!v || 'Category is required']"
        clearable
        required
      />
      <v-text-field
        v-model="date"
        label="Date"
        type="date"
        :rules="[v => !!v || 'Date is required']"
        required
      />

      <v-card-actions class="justify-end">
        <v-btn text color="grey" @click="$emit('close')">Cancel</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="submitExpense">
          {{ expenseToEdit ? 'Update' : 'Add' }}
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'
import { useExpenseStore } from '../stores/expenseStore'

const props = defineProps({
  expenseToEdit: Object,
  categories: {
    type: Array,
    default: () => []
  }
})


const emit = defineEmits(['close'])

const store = useExpenseStore()
const form = ref(null)
const valid = ref(false)

const description = ref('')
const amount = ref('')
const category = ref('')
const date = ref('')

watch(() => props.expenseToEdit, (newVal) => {
  if (newVal) {
    description.value = newVal.description
    amount.value = newVal.amount
    category.value = newVal.category
    date.value = newVal.date
  } else {
    description.value = ''
    amount.value = ''
    category.value = ''
    date.value = ''
  }
}, { immediate: true })

function submitExpense() {
  if (!form.value.validate()) return

  if (props.expenseToEdit) {
    store.updateExpense(props.expenseToEdit.id, {
      id: props.expenseToEdit.id,
      description: description.value,
      amount: parseFloat(amount.value),
      category: category.value,
      date: date.value,
    })
  } else {
    store.addExpense({
      id: Date.now(),
      description: description.value,
      amount: parseFloat(amount.value),
      category: category.value,
      date: date.value,
    })
  }
  emit('close')
}
</script>
