<template> 
<div class="home"> 
  <div class="bg"> 
    <div class="border"> 
      <div class="left-top-corner">  
         <img src="../assets/imgs/corner.png" alt=""> 
      </div> 
       <div class="right-top-corner">  
         <img src="../assets/imgs/corner1.png" alt=""> 
      </div> 
       <div class="left-footer-corner">  
         <img src="../assets/imgs/corner2.png" alt=""> 
      </div> 
       <div class="right-footer-corner">  
         <img src="../assets/imgs/corner3.png" alt=""> 
      </div> 
      <div class="people"></div>
      <div class="top-logo"></div> 
      <div class="title">慕思睡眠顾问上岗资格证</div> 
       <ul> 
         <li><div class="name">姓名</div><span>李白</span></li> 
         <li><div class="name">性别</div><span>男</span></li> 
         <li><div class="data">入职日期</div><span>2018年5月23日</span></li> 
         <li><div class="area">广东</div> 省 <div class="area">东莞</div> 市 <div class="area">南城</div> 区（县）</li> 
         <li><div class="area">XX</div> 经销商 <div class="area">XX</div> 系列</li> 
      </ul> 
     <div class="footer-logo"></div> 
     </div> 
   </div> 
</div> 
</template> 
   <script>
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      item: 4
    };
  },
  created(){
    this.getMsg()
  },
  methods:{
    
    getMsg:function(){
      const url = "http://10.12.0.58/derucci/workflow/roster/getPositionById.jsp"
      // axios.get(url)
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      axios({
        method:'get',
        url:url,
        params:{
          id:"7"
        }
      }).then((res) => {
        console.log('返回数据',res)
        if(res.data){
          console.log(res.data)
        }
      }).catch(function(error){
        console.log('返回错误',error)
      })
   
    }
  }
};
</script> 
   <style lang="scss" scoped>
.home{
  width: 100vw;
  height: 100vh;
}
.bg {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: linear-gradient(0, #000 0%, #0f181e 100%);
  padding: 4vw;
  .border {
    border: 0.75vw solid #cea073;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    .left-top-corner {
      width: 7.3vw;
      height: 7.3vw;
      background: #0f181e;
      position: absolute;
      top: -0.82vw;
      left: -0.82vw;
      img {
        width: 7.3vw;
        height: 7.3vw;
        position: absolute;
        top: 0.2vw;
        left: 0.2vw;
      }
    }
     .right-top-corner {
      width: 7.3vw;
      height: 7.3vw;
      background: #0f181e;
      position: absolute;
      top: -0.82vw;
      right: -0.82vw;
      img {
        width: 7.3vw;
        height: 7.3vw;
        position: absolute;
        top: 0.2vw;
        right: 0.2vw;
        z-index: 1;  
      }
    }
    .left-footer-corner {
      width: 7.3vw;
      height: 7.3vw;
      background: #010102;
      position: absolute;
      bottom: -0.82vw;
      left: -0.82vw;
      img {
        width: 7.3vw;
        height: 7.3vw;
        position: absolute;
        bottom: 0.2vw;
        left: 0.2vw;
        z-index: 1;  
      }
    }
     .right-footer-corner {
      width: 7.3vw;
      height: 7.3vw;
      background: #010102;
      position: absolute;
      bottom: -0.82vw;
      right: -0.82vw;
      img {
        width: 7.3vw;
        height: 7.3vw;
        position: absolute;
        bottom: 0.2vw;
        right: 0.2vw;
        z-index: 1;  
      }
    }
    .people{
      background: url(../assets/imgs/people.png) no-repeat center;
      background-size: 100%;
      width: 43.86vw;
      height: 48.66vw;
      position: absolute;
      right: -5vw;
      top: -3vw;
    }
    .top-logo{
      background: url(../assets/imgs/top-logo.png) no-repeat center;
      background-size: 100%;
      width: 17.2vw;
      height: 11.7vw;
      position: absolute;
      left: 37.3vw;
      top: 26.6vw;
    }
    .title{
	    color: #ffffff;
      font-size: 4.8vw;
      position: absolute;
      margin: 0 auto;
      top: 44.93vw;
      left: 19.73vw;
    }
    ul{
      height: 57.86vw;
      position: absolute;
      left:19.46vw;
      top: 60.66vw;
      li{
        font-size: 4vw;
        color: #fff;
        margin-bottom: 6vw;
        .name{
          display: inline-block;
          letter-spacing: 8vw;
        }
        .data{
          display: inline-block;
          width: 20vw;
        }
        span{
          position: absolute;
          left: 20vw;
        }
        span::after{
          content: '';
          display: block;
          width: 30vw;
          border-bottom: 1px solid #fff;
          margin-top: -4px;
        }
        .area{
          display: inline-block;
          text-align: center;
        }
        .area:after{
          content: '';
          display: block;
          width: 10vw;
          border-bottom: 1px solid #fff;
          margin-top: -4px;
        }
      }
    }
    .footer-logo{
      background: url(../assets/imgs/footer-logo.png) no-repeat center;
      background-size: 100%;
      width: 26.66vw;
      height: 5.73vw;
      position: absolute;
      bottom: 3.06vw;
      left: 32.8vw;
      opacity: .5;
    }
  }
}
</style> 
