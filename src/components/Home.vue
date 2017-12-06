<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="primary">
                    Explore Meetups
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/create" class="primary">
                    Organize Meetup
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex>
              <v-carousel>
                <v-carousel-item v-for="item in carouselItems" 
                v-bind:src="item.src" 
                :key="item.description"></v-carousel-item>
              </v-carousel>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      // carouselItems: []
    }
  },
  computed: {
    carouselItems () {
      return this.$store.getters.loadedRecentMeetups
    }
  }
}
</script>
