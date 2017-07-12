<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Questionnaire</h1>
                    <hr>
                    <transition name="slide">
                      <keep-alive>
                        <router-view>
                          <pesonal-info></pesonal-info>
                          <other-info></other-info>
                          <ice-cream-info></ice-cream-info>
                        </router-view>
                      </keep-alive>
                    </transition>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                      class="btn btn-primary"
                      v-show="formCompleted"
                      @click.prevent="submitForm"
                      >Submit!
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
          formCompleted: false
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
      },
      computed:{
         // ...mapGetters({

         // })
         completed(){
            const curPage = this.$store.getters.showPage;
            return curPage == 3 ? this.formCompleted = true : this.formCompleted = false;
         }
      }

    }
</script>

<style lang="SASS">
    .slide-enter-active {
      /*transition: all .4s ease;*/
      animation: slide-in 1s ease-in forwards;
      transition: opacity .7s;
    }
    .slide-leave-active {
      /*transition: all .8s linear;*/
      animation: slide-out 0.3s ease-out backwards;
      transition: opacity .7s;
    }
    .slide-enter,
    .slide-leave-to{
      opacity: 0;
      position: absolute;
    }
    @keyframes slide-in{
        from{
          transform: translateX(-20%);
        }
        to{
          transform: translateX(0);
        }
    }
    @keyframes slide-out{
        from{
/*          transform: translateX(0);
*/        }
        to{
/*          transform: translateX(20%);
*/      }
   }
</style>
