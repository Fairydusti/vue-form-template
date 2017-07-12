<template>
  <div>
    <label for="message">Message</label><br>
    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
    <textarea
      @input="updateData"
      id="message"
      rows="5"
      class="form-control">
    </textarea>
    <div class="form-group">
        <label for="sendmail">
            <input
              type="checkbox"
              id="sendmail"
              value=false
              @change="updateData"
              > Send Mail
        </label>
        <label for="sendInfomail">
            <input
              type="checkbox"
              id="sendInfomail"
              value=false
              @change="updateData"
              > Send Infomail
        </label>
        <label for="nomail">
            <input
              type="checkbox"
              id="nomail"
              value=false
              @change="updateData"
              >Do not Send me any mail
        </label>
    </div>
    <div class="form-group">
      <label for="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="Male"
            @change="updateData"> Male
      </label>
      <label for="female">
          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            @change="updateData"> Female
      </label>
      <label for="other">
          <input
            type="radio"
            name="gender"
            id="other"
            value="Other"
            @change="updateData"> Other
      </label>
    </div>
</div>
</template>
<script>
  export default{
    data(){
      return {
        data:{
            message:'',
            sendMail: false,
            sendInfomail: false,
            nomail: false,
            gender: ''
        }
      }
    },
    methods: {
      updateData(event){
        //Check changed value in dummy switch case
        switch(event.target.id){
          case 'message':
            this.data.message = event.target.value;
            break;
          case 'sendmail':
            console.log(event.target.value)
            this.data.sendmail = !this.data.sendmail;
            break;
          case 'sendInfomail':
            this.data.sendInfomail = !this.data.sendInfomail;
            break;
          case 'nomail':
            this.data.nomail = !this.data.nomail;
            break;
          case 'male':
          case 'female':
          case 'other':
            this.data.gender = event.target.value;
            break;

        }
        this.$store.commit('setOtherData', this.data);
      }
    }
  }
</script>