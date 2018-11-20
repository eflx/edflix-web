<template>
      <div class="modal-mask" id="thismoda">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">


                <div class="form-group">
                  <label class="sr-only" for="exampleInputAmount"></label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="glyphicon glyphicon-user"></i></div>
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="Your Name" v-model="name">
                    <div class="input-group-addon"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="sr-only" for="exampleInputAmount"></label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="	glyphicon glyphicon-envelope"></i></div>
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="Rating" v-model="email" readonly>
                    <div class="input-group-addon"></div>
                  </div>
                </div>
                <!-- <div class="form-group">
                  <label class="sr-only" for="exampleInputAmount"></label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="	glyphicon glyphicon-envelope"></i></div>
                    <input type="hidden" class="form-control" id="exampleInputAmount" placeholder="Rating" v-model="toEmail" readonly>
                    <div class="input-group-addon"></div>
                  </div>
                </div> -->
                <div>
                 <input type="hidden" class="form-control" id="exampleInputAmount" placeholder="Rating" v-model="toEmail" readonly>

                </div>
                <div class="form-group">
                  <label class="sr-only" for="exampleInputAmount"></label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="glyphicon glyphicon-comment	"></i></div>
                    <textarea type="text" class="form-control" id="exampleInputAmount" placeholder="Youe Message" v-model="message"></textarea>
                    <div class="input-group-addon"></div>
                  </div>
                </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-success">
                save
              </button>
                <button class="btn btn-danger" @click="$emit('close')" >
                cancle
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'feadback',
  data () {
    return {
      showModal1: false,
      name: JSON.parse(localStorage.getItem('user_info_auth')).name,
      email: JSON.parse(localStorage.getItem('user_info_auth')).email,
      toEmail: 'edflix.project@gmail.com',
      message: ''
    }
  }
}
</script>

<style>

</style>


