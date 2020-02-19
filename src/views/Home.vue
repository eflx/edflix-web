<template>
  <div class="home">
    <section>
      <div class="container">
        <p class="title">Welcome to Edlix</p>
        <p class="subtitle">Save course work from articles to video</p>
        <button class="button is-primary">Take a Tour</button>
        <hr>
        <div class="columns"><!-- columns -->
            <div class="column">
                <b-message class="is-primary">
                    <p class="title">Sign up as a Teacher</p>
                    <p class="subtitle">Teachers <a href="#">Learn More</a></p>
                    <b-button class="is-primary" tag="router-link" to="/teacher-registration">Sign Up: Teacher</b-button>
                </b-message>
            </div>
            <div class="column">
                <b-message>
                    <p class="title">Sign up as an Administrator</p>
                    <p class="subtitle">Administrators <a href="#">Learn More</a></p>
                    <b-button disabled>Sign Up: Administrator</b-button>
                </b-message>
            </div> 
        </div><!-- columns -->
        </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>
