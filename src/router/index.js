import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/meetup/Meetups'
import Meetup from '@/components/meetup/Meetup'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Profile from '@/components/users/Profile'
import SignIn from '@/components/users/SignIn'
import SignUp from '@/components/users/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups/',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/meetup/create',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/users/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/users/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/users/SignUp',
      name: 'SignUp',
      component: SignUp
    }

  ],
  mode: 'history'
})
