'use strict';
var signup=new Vue({
  el: '#signup',
  data(){
    return{
      newUsername: '',
      newPassword: '',
      repeatPassward:'',
      email:'',
    }
  },
  created: function()
  {
    this.pathname = document.location.pathname;
    this.redirectPath = document.location.search;
  },
  methods: {
    check_repeatpassword:function(){
                if(this.repeatPassward !=this.newPassword){
                alert('两次输入密码不一致');
              }
            },
    do_submit_signup_info: function()
    {
      var self=this;
      self.from= {
        newUsername:self.newUsername,
        newPassword:self.newPassword,
        repeatPassward:self.repeatPassward,
        email:self.email
      }
      var APIpost = `${self.pathname}${self.redirectPath}`;
      console.log(APIpost);
      axios.post(APIpost, self.from).then(function(resp)
      {
        console.log(resp);
        if(resp.data == "ok")
        {
           window.location.href='';
        }
      })
    }
  }
})