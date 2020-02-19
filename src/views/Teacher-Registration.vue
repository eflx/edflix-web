<template>
<div class="section"><!-- section -->
    <div class="container"><!--  container -->
    <div class="content"><!-- main content -->
    <p class="title">Registration for Teachers</p>
    <hr>
    <div class="columns">
      <div class="column">
        <b-field label="FirstName" :label-position="labelPosition" type="is-primary">
            <b-input placeholder="First Name"></b-input>
        </b-field>
        <b-field label="Email" :label-position="labelPosition" type="is-primary">
            <b-input type="email" maxlength="99"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="LastName" :label-position="labelPosition" type="is-primary">
            <b-input placeholder="Last Name"></b-input>
        </b-field>
        <b-field label="Password" :label-position="labelPosition" type="is-danger" :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input type="password" maxlength="99"></b-input>
        </b-field>
        <b-field label="Select or Enter Tags" :label-position="labelPosition">
            <b-taginput
                v-model="tags"
                :data="filteredTags"
                autocomplete
                :allow-new="allowNew"
                :open-on-focus="openOnFocus"
                field="user.first_name"
                icon="label"
                placeholder="Add a tag"
                @typing="getFilteredTags">
            </b-taginput>
        </b-field>
            <b-button type="is-primary is-pulled-right">Sign Up for EdFlix</b-button>
            <p>Agree with the <a href="#0">Terms of Service </a>
            <b-checkbox v-model="checkboxCustom"
                true-value="Yes"
                false-value="No">
                {{ checkboxCustom }}
            </b-checkbox>
            </p>
      </div>
    </div>
    </div><!-- /main content -->
</div><!--  /container  -->
</div><!--  /section  -->
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      checkboxCustom: 'Yes',
      labelPosition: 'on-border'
    }
  },
}
</script>
