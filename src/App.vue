<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Questionnaire</h1>
                    <hr>
                    <pesonal-info></pesonal-info>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            v-model="contactData.message"
                            id="message"
                            rows="5"
                            class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                              type="checkbox"
                              id="sendmail"
                              value="SendMail"
                              v-model="contactData.sendMail"
                              > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                              type="checkbox"
                              id="sendInfomail"
                              value="SendInfoMail"
                              v-model="contactData.sendMail"
                              > Send Infomail
                        </label>
                        <label for="nomail">
                            <input
                              type="checkbox"
                              id="nomail"
                              value="DoNotSendMail"
                              v-model="contactData.sendMail"
                              >Do not Send me any mail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                          type="radio"
                          id="male"
                          value="Male"
                          v-model="contactData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                          type="radio"
                          id="female"
                          value="Female"
                          v-model="contactData.gender"> Female
                    </label>
                    <label for="other">
                        <input
                          type="radio"
                          id="other"
                          value="Other"
                          v-model="contactData.gender"> Other
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="iceCreamFlavours">Select your favourite icecream?</label>
                    <select
                            id="iceCreamFlavours"
                            class="form-control"
                            v-model="contactData.favIceCream">
                        <option 
                        v-for="flavour in iceCreamFlavours" 
                        >{{flavour}}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary" @click.prevent="submitForm">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
    </div>
</template>

<script>
    import axios from 'axios'
    import personalInfo from './components/form-page1.vue'

    export default {
      data(){
        return {
          contactData:{
            name: '',
            email: '',
            address: '',
            zipCode: '',
            message:'',
            sendMail: [],
            gender: '',
            favIceCream: ''
          },
          iceCreamFlavours: [],
          formIsSubmitted: false,
          postUrl: 'example/url',
          getUrl: 'src/assets/mock.json'
        }
      },
      components:{
        pesonalInfo: personalInfo
      },
      methods:{
        submitForm(){
          //this.$store.state.formData
          const vm = this;
          const store = this.$store;
          store.commit('setFormData', this.contactData);
          console.log(store.getters.getFormData);
          return;
          axios.post(
            this.postUrl,
              this.contactData
          )
          .then(function (response) {
            vm.formIsSubmitted = true;
            //Do Something
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      created(){
          const vm = this;
          axios.get(this.getUrl)
          .then(function (response) {
            if(!response.data){
              console.error('There is problem fetching icecream data')
              return;
            }
            response.data.data.map( function(element) {
                vm.iceCreamFlavours.push(element);
            });
          })
          .catch(function (error) {
            console.error(error);
          });
      },
      watch:{
        contactData(){
          this.$store.state.formData = this.contactData;
        }
      }
    }
</script>

<style lang="sass">

</style>
