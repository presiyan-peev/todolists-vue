<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        text
        @click="navigateNewTodo"
      >
        <span class="mr-2">Create New</span>
        <v-icon>mdi-pencil-box</v-icon>
      </v-btn>
      <v-btn
        text
        @click="navigateHome"
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    navigateHome() {
      this.$router.push('/')
    },

    navigateNewTodo() {
      this.$router.push({name: 'CreateTodo'})
    }
  },
};
</script>
