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
      carouselItems: [
        {
          src: 'https://s.aficionados.com.br/imagens/dragon-ball-superamv-son-goku-vs_cke.jpg',
          description: 'goku-black'
        },
        {
          src: 'https://pm1.narvii.com/6528/a582bc06fdacbb1ed3a71dfe41f5e1cb5433e188_hq.jpg',
          description: 'freeza'
        },
        {
          src: 'https://i.ytimg.com/vi/4K4MWStX9ks/hqdefault.jpg',
          description: 'majin-boo'
        }
      ]
    }
  }
}
</script>
