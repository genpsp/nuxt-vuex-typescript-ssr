<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
      <div @click="getOlder">{{ age }}</div>
      <input type="text" :value="name" @change="editForm('name', $event)" />
      <div>{{ name }}</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    // ...mapState('user', ['age', 'name']),
    age() {
      return this.$accessor.user.age
    },
    name() {
      return this.$accessor.user.name
    },
  },
  created(): void {
    console.log(this.$isServer)
    // this.$accessor.user.getOlder()
    console.log(this.age)
    console.log(this.$accessor.user.age)
  },
  methods: {
    getOlder() {
      this.$accessor.user.getOlder()
    },
    editForm(key: string, event: { target: HTMLInputElement }) {
      this.$accessor.user.setForm({ key, value: event.target.value })
    },
  },
})
</script>
