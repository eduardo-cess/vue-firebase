<template>
    <v-container>
        <v-layout row wrap>
            <v-flex>
                <v-card class="mt-2" v-for="meetup in meetups" :key="meetup.id"
                router :to="'meetups/' + meetup.id"
                >
                    <v-card-title>
                        <h3>{{meetup.description}}</h3>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { id: 1, description: 'Meetup 1' },
        { id: 2, description: 'Meetup 2' },
        { id: 3, description: 'Meetup 3' },
        { id: 4, description: 'Meetup 4' },
        { id: 5, description: 'Meetup 5' },
        { id: 6, description: 'Meetup 6' },
        { id: 7, description: 'Meetup 7' },
        { id: 8, description: 'Meetup 8' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

