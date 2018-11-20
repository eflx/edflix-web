import auth0 from 'auth0-js'
import axios from 'axios'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import router from './../router'
import appService from '../appservice.js'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid email profile'
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        axios.defaults.baseURL = 'https://edflix-platform.herokuapp.com/api/v1/users'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + authResult.accessToken
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        this.auth0.client.userInfo(authResult.accessToken, function (err, user) {
          if (err) {
            console.log(err)
          }
          // Check user have user id if not than create new user id for user.
          appService.getIexternalid(user.sub, authResult.accessToken).then(data => {
            if (data === 404) {
              appService.createuseri(user.name, user.email, user.sub, authResult.accessToken).then(data => {
                localStorage.setItem('edflix_user_id', data.id)
                var d = new Date()
                d.setTime(d.getTime() + (1 * 1 * 60 * 60 * 1000))
                var expires = 'expires=' + d.toUTCString()
                document.cookie = 'edflix_user_auth' + '=' + data.id + ' edflix_user_assess ' + authResult.accessToken + ';' + expires + ';path=/'
              })
            } else {
              localStorage.setItem('edflix_user_id', data.id)
              var d = new Date()
              d.setTime(d.getTime() + (1 * 1 * 60 * 60 * 1000))
              var expires = 'expires=' + d.toUTCString()
              document.cookie = 'edflix_user_auth' + '=' + data.id + ' edflix_user_assess ' + authResult.accessToken + ';' + expires + ';path=/'
            }
          })

          // Set the cookie for 1 hours
          var d = new Date()
          d.setTime(d.getTime() + (1 * 1 * 60 * 60 * 1000))
          var expires = 'expires=' + d.toUTCString()
          document.cookie = 'edflix_user_auth' + '=' + window.localStorage.getItem('edflix_user_id') + ';' + expires + ';path=/'
          // Set the user information which is coming from auth0
          localStorage.setItem('user_info_auth', JSON.stringify(user))
        })
        this.setSession(authResult)
        router.replace('home/all')
      } else if (err) {
        router.replace('home/home')
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user_info_auth')
    localStorage.removeItem('edflix_user_id')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    this.removeCookie()
    router.replace('home')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
  setCookie (cvalue) {
    var d = new Date()
    d.setTime(d.getTime() + (1 * 1 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = 'edflix_user_auth' + '=' + cvalue + ';' + expires + ';path=/'
    alert('et')
  }
  removeCookie (calue) {
    var d = new Date()
    d.setTime(d.getTime() + (1 * 1 * 1 * 1 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = 'edflix_user_auth' + '=' + '' + ';' + expires + ';path=/'
  }
}
