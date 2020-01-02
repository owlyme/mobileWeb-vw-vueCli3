<template>
  <!-- 社交营销系统 -->
  <div id="marketing">
    <div class="mod mod-mark">
      <h1 class="tit">精准群发</h1>
      <p class="mod-text text-gray9">
        为企业提供更丰富、更强大的群发方式，实现差异化营销策略。<br>
        突破微信官方发送次数限制，针对不同人群定时群发对应的产品信息、
        促销活动等内容，提升微信营销转化率。
      </p>
      <ul class="mass">
        <li class="flex">
          <my-img class="mass-image" :src="loadImg('product/img1_1.png')"></my-img>
          <div class="mass-text">
            <p>标准群发</p>
            <span>多标签组批量群发消息</span>
          </div>
        </li>
        <li class="flex">
          <my-img class="mass-image" :src="loadImg('product/img1_3.png')"></my-img>
          <div class="mass-text">
            <p>高级群发</p>
            <span><strong>基于丰富的粉丝画像</strong>每日群发给不同粉丝</span>
          </div>
        </li>
        <li class="flex">
          <my-img class="mass-image" :src="loadImg('product/img1_4.png')"></my-img>
          <div class="mass-text">
            <p>客服消息群发</p>
            <span>不限群发次数，不占用微信官方群发数量<strong>声音/震动提醒粉丝</strong></span>
          </div>
        </li>
        <li class="flex">
          <my-img class="mass-image" :src="loadImg('product/img1_2.png')"></my-img>
          <div class="mass-text">
            <p>模板消息群发</p>
            <span>海量的微信模板消息发送<strong>不限次数</strong>，可指定跳转链接</span>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="mod mod-qrcode">
      <div class="tit text-white">渠道二维码</div>
      <p class="mod-text text-graye">
        线上线下全渠道推广监控，追踪用户来源，粉丝归类，精准掌握推广营销效果。
        一个二维码代表一个推广渠道场景，有效统计用户来源，
        查看每个推广渠道的效果，优化自身的推广方案。
      </p>
      <div class="qrcode">
        <img :src="loadImg('product/qrcode-ad.png')" alt="">
        <img :src="loadImg('product/qrcode-staff.png')" alt="">
        <img :src="loadImg('product/qrcode-marketing.png')" alt="">
      </div>
    </div>

    <div class="mod mod-poster">
      <div class="tit">裂变海报</div>
      <p class="mod-text text-gray9">
        目前火热的微信生态裂变增长营销，基于熟人信任背书的社交工具。
        帮助企业获得用户裂变增长和口碑品牌效应传播，进而带来效果转化。
      </p>
      <ul class="poster flex-between flex-wrap">
        <li>
          <h3>成本低<i></i></h3>
          <p>获取单个粉丝成本平均低至2分钱，一张海报让你轻松涨粉1万+。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_1.png')"></my-img>
        </li>
        <li>
          <h3>效果持久<i></i></h3>
          <p>通过营销策划方案，一旦启动，就会自发持续传播很长时间。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_2.png')"></my-img>
        </li>
        <li>
          <h3>影响力大<i></i></h3>
          <p>每个微信用户大约有300位好友，以粉丝为中心，向好友扩散传播。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_3.png')"></my-img>
        </li>
        <li>
          <h3>灵活的海报设计<i></i></h3>
          <p>用户可根据不同营销活动设置个性化海报模板。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_4.png')"></my-img>
        </li>
        <li>
          <h3>自动回复<i></i></h3>
          <p>新用户关注后自动回复与活动相关的内容，并可回复多条内容。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_5.png')"></my-img>
        </li>
        <li>
          <h3>自动打标签<i></i></h3>
          <p>新用户领取海报后可自动打标签，完成任务也可自动打标签。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_6.png')"></my-img>
        </li>
        <li>
          <h3>实时感知活动进展<i></i></h3>
          <p>新用户从分享者的粉丝海报关注后，分享者立即收到关注通知和活动完成通知，及时掌握自己的活动完成情况。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_7.png')"></my-img>
        </li>
        <li>
          <h3>活动效果统计<i></i></h3>
          <p>企业可了解活动的裂变传播效果以及整体效果分析，包括增长数据、裂变层级等。</p>
          <my-img class="poster-image" :src="loadImg('product/img3_8.png')"></my-img>
        </li>
      </ul>
    </div>

    <div class="mod mod-smart">
      <div class="tit">智能接待</div>
      <div class="mod-text text-gray9">
        根据粉丝的不同触达场景，自定义时间智能发送1条或多条销售话术给粉丝，从而达到营销转化的目的。
      </div>
      <div class="smart">
        <img :src="loadImg('product/img4_tuxing.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'marketing',
    data() {
      return {}
    },
    components: {
      myImg: () => import('@/components/image.vue')
    },
    computed: {},
    created() {},
    watch: {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="stylus">
$baseImg = $baseImg + '/product'
#marketing 
  .mod-mark 
    .mass  
      padding-bottom: 40px
      >li 
        padding: 30px 0
        align-items: center
        border-top: 2px solid #e5e5e5
        .mass-image 
          width: 100px 
          height: 100px
          margin-right: 24px
        &:first-child 
          border-top: none
        .mass-text 
          >p 
            color: #258ffc
            font-size: 28px 
            line-height: 1
            padding-bottom: 10px
          >span 
            display: block
            color: #606366
            font-size: 22px
            line-height: 1.2
          strong 
            color: #303133
            font-weight: 500
  .mod-qrcode 
    background: url($baseImg'/img2_bg.png')
    .tit
      color: #fff
    .qrcode 
      padding-bottom: 74px
      >img 
        width: 100%
        display: block 
        margin-top: 30px
  .mod-poster
    .poster
      padding-bottom: 60px
      >li
        width: 48.52%
        height: 300px
        padding: 35px 26px
        margin-top: 30px
        background-color: #fff
        position: relative
        >h3 
          font-size: 24px 
          font-weight: 600
          >i
            display: block 
            width: 30px 
            height: 3px 
            margin-top: 30px
            background-color:#409fff
        >p 
          font-size: 22px 
          line-height: 30px 
          padding-top: 28px
          position: relative 
          z-index: 1
        .poster-image 
          position: absolute 
          bottom: 0 
          right: 0
          width: 110px
          height: 110px
  .mod-smart 
    background-color: #fff
    .smart
      padding-bottom: 50px
      >img 
        width: 100%
</style>