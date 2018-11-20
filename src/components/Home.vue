<template>
  <div id="main">
    <div v-if="authenticated">
       <Dashboard/>
    </div>
      <section id="fristsec" v-if="!authenticated">
       <div class="container">
         <center>
           <div style="margin-top:100px;">
               <h1><strong>Edflix - Organize Your Learning</strong> </h1>
             </div>
            <div style="margin-top:100px;">
               <button class="btn btn-primary" @click="auth.login()" style="width:150px;">Get Started</button>
             </div>
            <p style="margin-top:20px;">Already have an account? <span> <a @click="auth.login()" style="color:blue">Log In</a></span></p>
         </center>
       </div>
      </section>
  </div>
</template>

<script>
  import Dashboard from './Dashboard.vue'
  // import appService from '../appservice.js'

  export default {
    name: 'home',
    components: { Dashboard },
    props: ['auth', 'authenticated']
    // methods: {
    //   loadPosts () {
    //     let exid = 'google-sandeep123-108966023221944'
    //     let tokan = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlEwSkVNekk0TnprMlFVRkNRekk1TmtVd05VTTRNek16UlRSQlFrTTJSalUyUlVKRVEwRTNRUSJ9.eyJpc3MiOiJodHRwczovL2VkZmxpeC5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDY0NjQzMzE4MTY0NDY0Njg0MDUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuZWRmbGl4LmNvbSIsImh0dHBzOi8vZWRmbGl4LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1NDIzODg0MTMsImV4cCI6MTU0MjM5NTYxMywiYXpwIjoibE90R2ZxQU9qcjJ1R0pSdGxlY2h1QTFtbjJoUVo5eHoiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.EpFrvcqwHpBNTWh-8-0bBAGVyqUmpsTjAjohI4wXpcoOEizZv2bPXWCMDdmvjf--CmIGl4TP26kU9o4ZychdYRksxlFdwsQWzf_6KBd6SasvE6RYPMbYe5EYalQCrCQnTxHznJywgfmaAwGls1HvTU__LeY8vtS2fLhZicFebJa8SF024UJRaiUbQBq0AmgtNjz8Qw0mekQ0IcGxiul2NaniCexJk98mlSagczj3Pf8kaXD-ZzN6lCPULtCNiJF8H1ipB1YGp4qyAjkNtxNRD-sS1_mUKkS-xqJozxcsJX5AgiPkDvYFfKi2yE8qn7kG3CWT5gI-84VK7RG4k7Ii-Q'
    //     appService.getIexternalid(exid, tokan).then(data => {
    //       if (data === 404) {
    //         appService.createuseri('sandeepTesting', 'sandeep@testing.com', exid, tokan).then(data => {
    //           alert(JSON.stringify(data))
    //         })
    //       } else {
    //         alert(JSON.stringify(data))
    //       }
    //     })
    //   }
    // },
    // watch: {
    //   '$route' (to, from) {
    //     this.id = to.params.id
    //     this.loadPosts()
    //   }
    // },
    // created () {
    //   this.loadPosts()
    // }
  }
</script>

<style>
  a {
    cursor: pointer;
  }
  #main {
    transition: margin-left .5s;

}
#mainid{
  margin-top: 70px;
}

#fristsec{
  height: 500px;
  width: 100%;
  background-image: url('../assets/back.jpg');
  margin-top: -20px;
}
</style>

