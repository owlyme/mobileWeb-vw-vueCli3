<template>
   <div>
    <div class="paddingTB100 paddingLR30">
      <h4 class="big36 marginB40">企业文化</h4>
      <div class="marginB40 blue-line"></div>
      <p class="marginB26 gray">
        星客互联崇尚开放的互联网理念，致力于实现客户、团队和公司三者之间的融合发展，把团队作为公司的核心发展动力，充分信任团队，并激励团队，朝着共同的奋斗目标，让团队与公司协同发展，共同进步，一起享受公司发展的喜悦。
      </p>
    </div>

    <div class="paddingTB50 paddingLR30 box-shadow">
      <div class="relative rel">
        <div class="abs abs1"></div>
        <div class="abs flex-container abs2">
          <div class="font26">
            <div>01</div>
            <div>公司</div>
          </div>
          <div class="font60">使命</div>
        </div>
        <div class="abs abs3">用智慧营销赋能企业升级</div>
      </div>
    </div>

    <div class="paddingLR30 wish">
      <div class="flex-container center">
        <div class="font26">
          <div>02</div>
          <div>公司</div>
        </div>
        <div class="font60">愿景</div>
      </div>
      <div class="font48 paddingTB120">
        成为行业领先的企业<br/>
        移动社交营销解决方案服务商
      </div>
    </div>
    
    <div class="paddingLR30 value">
      <div class="flex-container left">
        <div class="font60">价值</div>
        <div class="font26">
          <div>03</div>
          <div>观</div>
        </div>
      </div>
      <div class="flex-container center">
        <div class="value-item value-bg1">
          <h1 class="title">团队</h1>
          <div class="marginTB30 blue-line"></div>
          <p class="prag">
            团队是上帝<br>只有好的团队<br>公司才能发展<br>才能更好地服务客户
          </p>
        </div>
        <div class="value-item value-bg2">
          <h1 class="title">创新</h1>
          <div class="marginTB30 blue-line"></div>
          <p class="prag">
            创新是公司的灵魂<br>创新是我们的使命
          </p>
        </div>
        <div class="value-item value-bg3">
          <h1 class="title">拼搏</h1>
          <div class="marginTB30 blue-line"></div>
          <p class="prag">
            年轻就要拼搏<br>拼搏让我们的生命更有意义<br>也只有拼搏<br>梦想才会更近
          </p>
        </div>
        <div class="value-item value-bg4">
          <h1 class="title">卓越</h1>
          <div class="marginTB30 blue-line"></div>
          <p class="prag">
            要么不做<br>要做就做最好<br>卓越<br>是我们永恒的追求<br>让客户满意，让自己无悔
          </p>
        </div>
      </div>
    </div>

    <div class="paddingLR30 talent">
      <div class="flex-container">
        <div class="tuxing">
          <div class="flex-container center talent-title">
            <div class="font60">人才</div>
            <div class="font26">
              <div>04</div>
              <div>观</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
  .rel
    height: 290px;
  .font26
    text-align right
    font-size: 26px;
    line-height 30px
    padding-right 10px
    color: #091b3d;
    font-weight 700
  .font60
    height: 59px;
    line-height 59px
    font-size 60px    
    color: #091b3d;
    font-weight 700
  .font48
    line-height: 72px;
    text-align center
    line-height 59px
    font-size 48px    
    color: #091b3d;
    font-weight 500
  .abs1
    top 0
    left 0
    width: 391px;
    height: 240px;
    background-color: #e5e5e5;
    background-image: url(../../../assets/images//about/img2_1.png)
    background-size: cover
  .abs2
    top 101px
    right 0
    
  .abs3
    top 190px
    left 89px
    width: 600px;
    height: 100px;
    line-height 100px
    font-size: 48px;
    color: #ffffff;
    text-align center
    background-color: #091b3d;
  .wish
    padding-top 130px
    padding-bottom 75px
    background-image: url(../../../assets/images/about/img2_bg.png)
    background-size: cover
  .value
    padding-top 80px
    padding-bottom 80px
    .value-item
      box-sizing border-box
      padding 40px 0 40px 20px
      width: 300px;
      height: 370px;
      border-radius: 3px;
      margin-top 30px
      background-size: cover
      &:nth-child(2n+1)
        margin-right 30px
      .title
        font-size: 36px;
        color: #ffffff;
      .prag
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
      &.value-bg1
        background-image: url(../../../assets/images/about/img3_1.png)
      &.value-bg2
        background-image: url(../../../assets/images/about/img3_2.png)
      &.value-bg3
        background-image: url(../../../assets/images/about/img3_3.png)
      &.value-bg4
        background-image: url(../../../assets/images/about/img3_4.png)
  .talent
    height: 638px;
    background-image: url(../../../assets/images/about/img4_bg.png)
    background-size: cover
    .tuxing
      margin-top 80px
      height: 478px;
      width: 650px;
      background-image: url(../../../assets/images/about/img4_tuxing.png)
      background-size: 100%
      background-repeat no-repeat
      .talent-title
        margin-top 258px
</style>
