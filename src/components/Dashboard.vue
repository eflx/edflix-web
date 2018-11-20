<template>
<div>
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
  <a href="all"><i class="glyphicon glyphicon-tags"></i> Tags</a>

  <ul>
       <li>
        <a class="w3-button" @click="ratingFunc()">
          <i class="glyphicon glyphicon-star"></i> <span>Rating </span> <i class="glyphicon glyphicon-chevron-down"></i>
        </a>
        <ul id="rating" class="w3-dropdown-content w3-bar-block w3-white w3-card">
          <li class="w3-bar-item w3-button" v-for="item in tags" v-bind:key="item.id"><a v-bind:href="'/home/'+ item" > <span> {{item}} </span></a></li>
        </ul>
    </li>

      <!-- <li>
        <a class="w3-button" @click="myDropFunc()">
          <i class="glyphicon glyphicon-user"></i> <span>class </span> <i class="glyphicon glyphicon-chevron-down"></i>
        </a>
        <ul id="class" class="w3-dropdown-content w3-bar-block w3-white w3-card">
          <li class="w3-bar-item w3-button"><router-link to="/home/rating?val=10"  v-for="item in tags.class" v-bind:key="item.id"> <span> {{item}} </span></router-link></li>
        </ul>
    </li> -->
  </ul>
</div>
<div>
  <div class="row">
  <div class="col-sm-6">
   <a id="show-modal" @click="showModal = true" class="btn btn-warning" style="margin-left:10px"><i class="glyphicon glyphicon-envelope"></i> FeedBack</a>
  <newItem v-if="showModal" @close="showModal = false">
    <h3 slot="header">Send your valuable feedback to us!!</h3>
  </newItem>
  </div>
  <div class="col-sm-4"></div>
  <div class="col-sm-4" style="float:right">
    <!-- <button id="show-modal" @click="showModal1 = true" class="btn btn-warning" style="margin-left:10px;border-radius:50px" ><i class="glyphicon glyphicon-envelope"></i></button>
  <FeedBack v-if="showModal1" @close="showModal1 = false">
    <h3 slot="header">Send your valuable feedback to us!!</h3>
  </FeedBack> -->
  </div>
  </div>
</div>
<div class="grid-container" v-if="post.length" style="margin-top:10px;">
  <div id="demo" v-for="item in datachak" v-bind:key="item.id">
  <div class="panel panel-default">
    <div class="panel-heading">
          <div class="row">
        <div class="col-sm-3">
          <button class="btn btn-default"><i class="glyphicon glyphicon-star"></i><span class="badge">{{item.rating}}</span></button>

        </div>
        <div class="col-sm-6" id="wordlnt" data-toggle="tooltip" v-bind:title="item.title"><strong> {{item.title}} </strong> </div>
        <div class="col-sm-3">
          <button class="btn btn-default"><i class="glyphicon glyphicon-user"></i><span class="badge">{{item.class}} <sup>th</sup></span></button>
        </div>
      </div>
    </div>
    <div class="panel-body">
      <a v-bind:href="item.url" target="_blank" class="btn btn-info" id="infobtn" data-toggle="tooltip" title="Go to main source of this content"><i class="glyphicon glyphicon-share-alt"></i></a>
      <div class="video">
              <iframe v-bind:src="item.modifyurl" sandbo="" frameborder="0"></iframe>
            </div>
    </div>
    <div class="panel-footer">
      <p id="datesize" ><i class="glyphicon glyphicon-bookmark" data-toggle="tooltip" title="Your Book mark"></i><small> {{item.comment}}</small></p>
      <div class="row">
        <div class="col-sm-4" style="margin-left:10px;">
          <button class="btn btn-primary">Update</button>

        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-2"></div>
        <div class="col-sm-3" style="margin-right:10px;">
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>

</template>

<script>
import appService from '../appservice.js'
import newItem from './nuwItem.vue'
import FeedBack from './FeadBack.vue'
export default {
  name: 'dashboard',
  components: { FeedBack, newItem },
  data () {
    return {
      showModal: false,
      showModal1: false,
      idprams: this.$route.params.id,
      post: [],
      tags: new Set()
    }
  },
  computed: {
    datachak: function () {
      if (this.idprams === 'all') {
        return this.post
      } else {
        this.post = this.post.filter(item => item.rating === parseInt(this.idprams))
        return this.post
      }
    }
  },
  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
      document.getElementById('main').style.marginLeft = '250px'
    },
    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
      document.getElementById('main').style.marginLeft = '0'
    },
    loadPosts () {
      let id = window.localStorage.getItem('edflix_user_id')
      // Call GetItem API and replace youtube link
      appService.getItems(id).then(data => {
        for (var i = 0; i < data.items.length; i++) {
          var urlclone = data.items[i].url
          if (urlclone.includes('watch?v=')) {
            urlclone = urlclone.replace('watch?v=', 'embed/')
            data.items[i].modifyurl = urlclone
          } else {
            data.items[i].modifyurl = data.items[i].url
          }
          this.post.push(data.items[i])
          this.tags.add(data.items[i].rating)
        }

        this.tags = Array.from(this.tags)
      })

      // if (this.$route.params.id === 'all') {
      //   this.post = this.post
      // } else if (this.$route.params.id === 'rating') {
      //   this.post = this.post.filter(item => item.rating === this.$route.params.id)
      // } else {
      //   this.post = this.post.filter(item => item.rating === this.$route.params.id)
      // }
    },
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
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }

}
</script>

<style>

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
#main {
    transition: margin-left .5s;

}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgb(201, 190, 190);
  text-align: center;
  font-size: 30px;
}
#demo {
-webkit-transition: 0.5s;
transition: 0.5s;
-webkit-box-shadow: 1px 2px 9px 5px rgba(0,0,0,0.63);
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
}

#demo:hover{
-webkit-box-shadow: 1px 2px 9px 5px rgba(0,0,0,0.63);
box-shadow: 1px 1px 10px 5px rgba(135, 233, 236, 0.63);
 -moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
-o-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
}
.video {
  border-radius: 5px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
}

#wordlnt {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10ch;
}
#datesize{
  font-size: 16px;
  text-decoration:tomato
}

#infobtn{
  margin-bottom: 10px;
  margin-left: 70%
}
li{
  list-style-type: none
}
</style>
