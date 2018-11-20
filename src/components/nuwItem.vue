<template>
    <div class="modal-mask" id="thismodal">
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
              <button class="btn btn-success" @click="saveitem()">
                send
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
import appService from '../appservice.js'

export default {
  name: 'newItem',
  data () {
    return {
      showModal1: false,
      name: JSON.parse(localStorage.getItem('user_info_auth')).name,
      email: JSON.parse(localStorage.getItem('user_info_auth')).email,
      toEmail: 'edflix.project@gmail.com',
      message: ''
    }
  },
  methods: {
    close: function () {
      this.$emit('close')
      this.title = ''
      this.body = ''
    },
    saveitem () {
      let userid = window.localStorage.getItem('edflix_user_id')
      appService.addnewitem({title: this.categories, rating: this.rating, comment: this.bookmark, url: this.url}, userid)
        .then((data) => {
          alert(data)
        })
        .catch(() => {
          window.alert('Data is not summited please try again!')
          this.close()
        }
        )
    }

  }
}
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
