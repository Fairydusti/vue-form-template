<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input
                          v-model.lazy="contactData.name"
                          type="text"
                          id="name"
                          class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          v-model.lazy="contactData.email"
                          type="text"
                          id="email"
                          class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input
                          v-model.lazy="contactData.address"
                          type="text"
                          id="address"
                          class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="zip">Zip code</label>
                        <input
                          v-model.number.lazy="contactData.zipCode"
                          type="number"
                          id="zip"
                          class="form-control">
                    </div>

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
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Name:&nbsp;{{contactData.name}}</p>
                        <p>Mail:&nbsp;{{contactData.email}}</p>
                        <p>Address:&nbsp;{{contactData.address}}</p>
                        <p>Age:{{contactData.zipCode}}</p>
                        <p>Message: {{contactData.message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <div v-for="item in contactData.sendMail">{{item}}</div>
                        <p>Gender: {{contactData.gender}}</p>
                        <p>Icecream flavour: {{contactData.favIceCream}}</p>
                        <p>Switched:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          contactData:{
            name: '',
            email: '',
            address: '',
            zipCode: 33100,
            message:'',
            sendMail: [],
            gender: '',
            favIceCream: ''
          },
          iceCreamFlavours: ['vanilla','chocolate', 'strawberry', 'jallu']
        }
      }
    }
</script>

<style lang="">

</style>
