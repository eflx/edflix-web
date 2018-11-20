import axios from 'axios'
axios.defaults.baseURL = 'https://edflix-platform.herokuapp.com/api/v1/users'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.crossDomain = true

// For geting items from server
const appService = {
  getItems (id) {
    return new Promise((resolve) => {
      axios.get(`https://edflix-platform.herokuapp.com/api/v1/users/${window.localStorage.getItem('edflix_user_id')}/items`,
        {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`
          }
        }
      )
        .then(response => {
          resolve(response.data)
        })
    })
  },

  // For geting user id from database
  getIexternalid (exid, accesstoken) {
    return new Promise((resolve) => {
      axios.get(`https://edflix-platform.herokuapp.com/api/v1/users/${exid}`,
        {
          headers: {
            'Authorization': `Bearer ${accesstoken}`
          }
        }
      )
        .then(response => {
          resolve(response.data)
        })
        .catch(function (error) {
          resolve(error.response.status)
        })
    })
  },

  // for creaing new user id
  createuseri (uname, uemail, exid, accesstoken) {
    let data = {name: uname, email: uemail, external_id: exid}
    return new Promise((resolve) => {
      axios.post('https://edflix-platform.herokuapp.com/api/v1/users',
        data,
        {
          headers: {
            'Authorization': `Bearer ${accesstoken}`
          }
        }
      )
        .then(response => {
          resolve(response.data)
        })
        .catch(function (error) {
          alert(error)
        })
    })
  },

  // Add new item though user
  addnewitem (userdata, userid) {
    return new Promise((resolve, reject) => {
      axios.post(`https://edflix-platform.herokuapp.com/api/v1/users/${userid}/items`, userdata,
        {
          headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`
          }
        }
      )
        .then(response => {
          resolve(response.status)
        }).catch(response => {
          reject(response.status)
        })
    })
  }

}

export default appService
