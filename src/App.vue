<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link> |
      <router-link to="/add-expense">Add Expense</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
// No script needed
</script>
