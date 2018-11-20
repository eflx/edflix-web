<template>
  <div >
      <ul>
       <li>
        <a class="w3-button" @click="ratingFunc()">
          <i class="glyphicon glyphicon-star"></i> <span>Rating </span> <i class="glyphicon glyphicon-chevron-down"></i>
        </a>
        <ul id="rating" class="w3-dropdown-content w3-bar-block w3-white w3-card">
          <li class="w3-bar-item w3-button"><router-link to="/home/rating?val=10"> <span>4 </span></router-link></li>
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>5 </span></router-link></li>
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>6 </span></router-link></li>
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>3 </span></router-link></li>
        </ul>
    </li>

      <li>
        <a class="w3-button" @click="myDropFunc()">
          <i class="glyphicon glyphicon-user"></i> <span>class </span> <i class="glyphicon glyphicon-chevron-down"></i>
        </a>
        <ul id="class" class="w3-dropdown-content w3-bar-block w3-white w3-card">
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>10 <sup>th </sup></span></router-link></li>
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>10 <sup>th </sup></span></router-link></li>
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>10 <sup>th </sup></span></router-link></li>
          <li class="w3-bar-item w3-button"><router-link to="/home/class?val=10"> <span>10 <sup>th </sup></span></router-link></li>
        </ul>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    //
  },
  mathods: {
    myDropFunc () {
      var x = document.getElementById('class')
      if (x.className.indexOf('w3-show') === -1) {
        x.className += ' w3-show'
        x.previousElementSibling.className += ' w3-gray'
      } else {
        x.className = x.className.replace(' w3-show', '')
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(' w3-gray', '')
      }
    },
    ratingFunc () {
      var x = document.getElementById('rating')
      if (x.className.indexOf('w3-show') === -1) {
        x.className += ' w3-show'
        x.previousElementSibling.className += ' w3-gray'
      } else {
        x.className = x.className.replace(' w3-show', '')
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(' w3-gray', '')
      }
    }
  }
}
</script>

<style>

</style>


