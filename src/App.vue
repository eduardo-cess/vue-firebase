<template>
  <v-app light>
    <v-toolbar dark class="purple darken-3">
      <v-toolbar-side-icon class="" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to='/' tag="span" style="cursor: pointer">
          MeetUp
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat  v-for="item in menuItems"
        :key="item.title"
        router :to="item.linkTo" exact>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in menuItems"
        :key="item.title"
        router :to="item.linkTo"
        exact>

            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                  {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      menuItems: [
        { title: 'Home', icon: 'home', linkTo: '/' },
        { title: 'Meetups', icon: 'question_answer', linkTo: '/meetups' },
        { title: 'Create Meetup', icon: 'question_answer', linkTo: '/meetup/create' },
        { title: 'Profile', icon: 'question_answer', linkTo: '/users/' },
        { title: 'SignIn', icon: 'question_answer', linkTo: '/users/SignIn' },
        { title: 'SignUp', icon: 'question_answer', linkTo: '/users/SignUp' }
      ]
    }
  }
}
</script>
