<template>
  <div class="delete-todo-modal">
      <v-dialog
      v-model="showDeletionDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Deleting Todo</v-card-title>

        <v-card-text>
          Are you sure you want to delete this Todo?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="purple darken-1"
            text
            @click="cancelDeletion"
          >
            Cancel
          </v-btn>

          <v-btn
            color="red darken-2"
            text
            @click="confirmDeletion"
          >
            Yes, I am sure
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: [
      'id'
    ],

    computed: {
        ...mapGetters(['showDeletionDialog'])
    },
    
    methods: {
        ...mapActions(['toggleDeleteDialog', 'deleteTodo']),

        confirmDeletion() {
            this.deleteTodo(this.id).then(() => {
              this.toggleDeleteDialog()
              this.$router.push({name: 'Home'})
            })
        },

        cancelDeletion() {
            this.toggleDeleteDialog()
        }
    },
}
</script>

<style>

</style>