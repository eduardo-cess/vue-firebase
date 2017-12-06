import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        src:
          'https://s.aficionados.com.br/imagens/dragon-ball-superamv-son-goku-vs_cke.jpg',
        description: 'goku-black',
        id: 1,
        date: '2017-04-03'
      },
      {
        src:
          'https://pm1.narvii.com/6528/a582bc06fdacbb1ed3a71dfe41f5e1cb5433e188_hq.jpg',
        description: 'freeza',
        id: 2,
        date: '2017-04-01'
      },
      {
        src: 'https://i.ytimg.com/vi/4K4MWStX9ks/hqdefault.jpg',
        description: 'majin-boo',
        id: 3,
        date: '2017-04-02'
      }
    ],
    user: {
      id: 'sdlfnnownw',
      registeredMeetups: [1, 2]
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedRecentMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadMeetup (state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    }
  },
  mutations: {},
  actions: {}
})
