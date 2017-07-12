<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Questionnaire</h1>
                    <hr>
                    <keep-alive>
                      <router-view>
                        <pesonal-info></pesonal-info>
                        <other-info></other-info>
                        <ice-cream-info></ice-cream-info>
                      </router-view>
                    </keep-alive>
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
    import iceCreamInfo from './components/form-page3.vue'
    import Home from './components/home.vue'

    export default {
      data(){
        return {
          formIsSubmitted: false,
          postUrl: 'example/url',

        }
      },
      components:{
        pesonalInfo: personalInfo,
        otherInfo: otherInfo,
        iceCreamInfo: iceCreamInfo,
        home: Home
      },
      methods:{
        submitForm(){
          const vm = this;
          const store = this.$store;
          axios.post(
            this.postUrl,
              {
                'data':{
                  'person': this.$store.state.persondata,
                  'mail': this.$store.state.otherData,
                  'icecream': this.$store.state.iceCreamData
                }
              }
          )
          .then(function (response) {
            vm.formIsSubmitted = true;
            //Do Something
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        getFormData(){
          return this.$store.getters.formData();
        }
      }

    }
</script>

<style lang="sass">

</style>
