<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Questionnaire</h1>
                    <hr>
                    <pesonal-info></pesonal-info>
                    <other-info></other-info>
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
    import otherInfo from './components/form-page2.vue'

    export default {
      data(){
        return {
          contactData:{
            name: '',
            email: '',
            address: '',
            zipCode: ''
          },
          iceCreamFlavours: [],
          formIsSubmitted: false,
          postUrl: 'example/url',
          getUrl: 'src/assets/mock.json'
        }
      },
      components:{
        pesonalInfo: personalInfo,
        otherInfo: otherInfo
      },
      methods:{
        submitForm(){
          const vm = this;
          const store = this.$store;
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
      }
    }
</script>

<style lang="sass">

</style>
