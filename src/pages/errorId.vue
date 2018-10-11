<template>
  <div class="errorId">
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
      <div class="content">
        <div class="missMsg"></div>
        <p>您的上岗证信息丢失</p>
        <p>请联系管理员处理</p>
      </div>
      <div class="footer-logo"></div> 
    </div>
   
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
export default {
  
}
</script>

<style lang="scss" scoped>

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
    .content{
      width: 40vw;
      height: 44vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      .missMsg{
        background: url(../assets/imgs/missMsg.png) no-repeat center;
        background-size: 100%;
        width: 40vw;
        height: 26.66vw;
        margin-bottom: 2.66vw;
      }
      p{
        text-align: center;
        font-size: 3.73vw;
        font-weight: bold;
        color: #d8a879;
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
