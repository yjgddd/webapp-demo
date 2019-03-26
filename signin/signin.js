'use strict';
var signin=new Vue({
  el: "#signin",
  data(){
    return{
      username: '',
      password: '',
    }
  },
  created: function()
  {
    this.pathname = document.location.pathname;
    this.redirectPath = document.location.search;
  },
  methods: {
    do_submit_signin_info: function()
    {
        var self=this;
        self.from= {
          username:self.username,
          password:self.password
        }

        var APIpost = `${self.pathname}${self.redirectPath}`;
        console.log(APIpost);
        
        axios.post(APIpost,self.from).then(function(resp){
        console.log(resp);
        
        if(resp.data == -1){
            alert("该用户不存在");
        }
        else if(resp.data == 0){
          alert("密码输入错误");
        }
        else{
          window.location.href='';
        }
      })
    },
  }
})