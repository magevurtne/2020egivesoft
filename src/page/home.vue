<template>
  <div class="home">
<!--    轮播-->
    <Carousel
            class="home-banner"
            v-model="banner"
            :autoplay="setting.autoplay"
            :arrow="setting.arrow"
            :dots="setting.dots"
    >
      <CarouselItem>
        <div class="demo-carousel">
          <img class="pr" src="../assets/homeImg/banner.png"/>
          <div class="pa grid">
            <p class="cn">数字铁路智能运维，一带一路引领世界</p>
            <p class="en">铁路供电专业生产一体化平台</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
    </Carousel>
<!--    四个麻将-->
    <div class="four-block">
      <ul class="wrap">
        <li class="four-block-a"></li>
        <li class="four-block-b"></li>
        <li class="four-block-c"></li>
        <li class="four-block-d"></li>
      </ul>
    </div>
<!--    产品中心-->
    <div class="home-products padding">
      <div class="titile">
        <div><img src="../assets/aboutImg/01.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">产品中心</p><p class="f16">PRODUCTS</p>
        </div>
      </div>
      <p class="text">针对铁路供电生产管理需求，以信息设施为基础，借助可视化界面，通过数据服务<br>集成化操作，实现业务、流程、决策一体化管理。</p>
    </div>
<!--      tab切换-->
    <div class="a-banner home-ailway">
      <Tabs value="name1">
        <TabPane label="生产类" name="name1">
            <p class="row"><span>基于大数据的牵引供电生产<br>网络管理平台</span><span>铁路电力供电作业生产管理<br>平台</span></p>
            <p class="row"><span>6C检测监测智能分析管理系<br>统</span><span>接触网一杆一档管理系统<br>统</span></p>
            <p class="row"><span>铁路GIS地理信息数据分析及<br>决策支持管理平台</span><span>基于大数据数字可视化大屏<br>及决策分析平台</span></p>
            <p class="row borbottom"><span>牵引供电智能化应急处置分<br>析系统</span><span>基于“互联网+”的铁路新<br>线介入全生命管理平台</span></p>
        </TabPane>
        <TabPane label="管理类" name="name2">标签二的内容</TabPane>
        <TabPane label="经营类" name="name3">标签三的内容</TabPane>
        <TabPane label="智能设备类" name="name4">标签三的内容</TabPane>
      </Tabs>
    </div>
<!--      解决方案-->
      <div class="home-products home-sol padding">
          <div class="titile">
              <div><img src="../assets/aboutImg/02.png" /></div>
              <div class="ml20">
                  <p class="f32 mb10">解决方案</p><p class="f16">SOLUTION</p>
              </div>
          </div>
          <p class="text">针对铁路供电生产管理需求，以信息设施为基础，借助可视化界面，通过数据服务<br>集成化操作，实现业务、流程、决策一体化管理。</p>


          <div class="in_product wrap">
              <div class="in_product_main fixed ratio-img" data-ratio="0.3885">
                  <div class="in_product_main_r">
                      <div class="in_product_main_t fixed">
                          <div class="in_product_main_t_l proHover">
                              <img src="../assets/homeImg/in_imgcase1.png" data-img="../assets/homeImg/p_in_imgcase1.png" />
                              <div class="in_product_txt">
<!--                                  <h5><a href="">健康医疗</a><em></em></h5>-->
                                  <p>资产运营风险管控方案</p><a href=""></a>
<!--                                  <img src="homeImg/more.png" data-img="homeImg/phone_more.png" />-->
                              </div>
                              <i></i>
                          </div>
                          <div class="in_product_main_t_r proHover">
                              <img src="../assets/homeImg/in_imgcase2.png" data-img="../assets/homeImg/p_in_imgcase2.png" />
                              <div class="in_product_txt">
<!--                                  <h5><a href="pattern/info_ser.html">金融服务</a><em></em></h5>-->
                                  <p>智能锁具授权管理解决方案</p><a href=""></a>
                              </div>
                              <i></i>
                          </div>
                      </div>
                      <div class="in_product_main_b fixed">
                          <div class="in_product_main_b_l proHover">
                              <img src="../assets/homeImg/in_imgcase3.png" data-img="../assets/homeImg/p_in_imgcase3.png" />
                              <div class="in_product_txt">
<!--                                  <h5><a href="pattern/info_area.html">品质地产</a><em></em></h5>-->
                                  <p>基于BIM的供电设备运维管</p>
                                  <a href=""></a>
                              </div>
                              <i></i>
                          </div>
                          <div class="in_product_main_b_r proHover">
                              <img src="../assets/homeImg/in_imgcase4.png" data-img="../assets/homeImg/in_imgcase4.png" />
                              <div class="in_product_txt">
<!--                                  <h5><a href="pattern/info_teach.html">职业教育</a><em></em></h5>-->
                                  <p>随着中国产业经济升级</p>
                                  <a href=""></a>
                              </div>
                              <i></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
<!--      新闻中心-->
      <div class="a-banner home-new padding">
          <div class="titile">
              <div><img src="../assets/aboutImg/03.png" /></div>
              <div class="ml20">
                  <p class="f32 mb10">新闻中心</p><p class="f16">NEWS CENITER</p>
              </div>
          </div>
          <Carousel
                  class="wrap"
                  v-model="valueNew"
                  :autoplay="settingNew.autoplay"
                  :dots="settingNew.dots"
                  :radius-dot="settingNew.radiusDot"
                  :trigger="settingNew.trigger"
                  :arrow="settingNew.arrow">
              <CarouselItem>
                  <div class="demo-carousel">
                      <div><img src="../assets/homeImg/new1.png"/></div>
                      <div class="new-main">
                          <p class="new-main-a">针对铁路供电生产管理需求徐秀</p>
                          <p class="new-main-b">针对铁路供电生产管理需求，针对铁路供电生产管理需求针对铁理需</p>
                      </div>
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">2</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">3</div>
              </CarouselItem>
          </Carousel>
          <div class="new-three wrap">
              <div class="block">
                  <div class="bot">
                      <p class="bot-a">针对铁路供电生产管理需求</p>
                      <p class="bot-b">针对铁路供电生产管理需求，针对铁路供电针对铁路供电生产管理需求，针对铁路供电针对铁路供电生产管理需</p>
                  </div>
                  <div class="top">01</div>
              </div>
              <div class="block">
                  <div class="bot">
                      <p class="bot-a">针对铁路供电生产管理需求</p>
                      <p class="bot-b">针对铁路供电生产管理需求，针对铁路供电针对铁路供电生产管理需求，针对铁路供电针对铁路供电生产管理需</p>
                  </div>
                  <div class="top">02</div>
              </div>
              <div class="block">
                  <div class="bot">
                      <p class="bot-a">针对铁路供电生产管理需求</p>
                      <p class="bot-b">针对铁路供电生产管理需求，针对铁路供电针对铁路供电生产管理需求，针对铁路供电针对铁路供电生产管理需</p>
                  </div>
                  <div class="top">03</div>
              </div>
          </div>
          <div class="new-more">更多新闻 ></div>
      </div>
<!--    100+-->
    <div class="a-banner bai">
      <p><span>100＋</span>客户的共同选择</p>
    </div>
    <!--    服务与支持-->
    <div class="home-ss padding wrap">
      <div class="titile">
        <div><img src="../assets/aboutImg/04.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">服务与支持</p><p class="f16">SERVICE SUPPOTR</p>
        </div>
      </div>
      <div class="text">
        <ul class="ss-ul">
          <li><img src="../assets/homeImg/ss01.png"/><p>荣誉资质</p></li>
          <li><img src="../assets/homeImg/ss02.png"/><p>加入我们</p></li>
          <li><img src="../assets/homeImg/ss03.png"/><p>技术服务支持</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        banner:0,
          valueNew: 0,
        setting:{
          autoplay: false,
          arrow: 'never',
          dots: 'inside',
        },
          settingNew:{
              autoplay: false,
              dots: 'inside',
              radiusDot: true,
              trigger: 'click',
              arrow: 'never'
          }
      }
    }
  }
</script>

<style scoped>
  .pr{
    position: relative;
  }
  .pa{
    position: absolute;
  }
  .padding{
    padding:85px 0 90px 0;
  }
  /*banner*/
  .home-banner .art{
    color:#ffffff;
    position: absolute;
    width:100%;
    left: 0;
    top:45%;
    transform: translateY(-50%);
  }
  .home-banner .bannerContent{
    color: #fff;
  }
  .home-banner .grid{
    top:45%;
    left: 7%;
    transform: translateY(-50%);
    margin: 0 auto;
  }
  .home-banner .cn{
    font-size: 64px;
    font-weight: 500;
    color: #fff;
  }
  .home-banner .en{
    font-size: 30px;
    margin-top: 30px;
    padding-bottom: 10px;
    font-style: italic;
    color: #fff;
  }
  .four-block{
    background-color: #f2f5ff;
  }
  .four-block ul li{
    display: inline-block;
    margin-right: 20px;
  }
  .four-block ul li:last-child{
    margin-right: 0px;
  }
  .four-block-a ,.four-block-b ,.four-block-c ,.four-block-d{
    width: 260px;
    height: 278px;
    position: relative;
    top: -73px;
    z-index: 200;
    bottom: 0;
  }
  .four-block-a{
    background: url("../assets/homeImg/4-1.png") no-repeat;
  }
  .four-block-a:hover{
    background: url("../assets/homeImg/4-1-h.png") no-repeat;
  }
  .four-block-b{
    background: url("../assets/homeImg/4-2.png") no-repeat;
  }
  .four-block-b:hover{
    background: url("../assets/homeImg/4-2-h.png") no-repeat;
  }
  .four-block-c{
    background: url("../assets/homeImg/4-3.png") no-repeat;
  }
  .four-block-c:hover{
    background: url("../assets/homeImg/4-3-h.png") no-repeat;
  }
  .four-block-d {
    background: url("../assets/homeImg/4-4.png") no-repeat;
  }
  /*产品中心*/
  .home-products{

  }
  .home-products .text{
    font-size: 18px;
    line-height: 36px;
    color: #808080;
    text-align: center;
    margin-top: 75px;
  }
  .home-ailway{
      width: 802px;
      margin: 0 auto;
      padding-top: 35px;
  }
  .home-ailway .row{
      color: #fff;
      font-size: 16px;
      border-bottom: 1px solid #7C7C7C;
      text-align: center;
  }
  .home-ailway .row span{
      border-right: 1px solid #7C7C7C;
      display: inline-block;
      width: 50%;
      text-align: left;
      line-height: 24px;
      height: 127px;
      padding-top:45px;
      padding-left: 68px;
  }
  .home-ailway .row span:hover{
      color: #D8ECFF;
      cursor: pointer;
  }
  .home-ailway .row span:last-child{
      border-right:none;
  }
  .home-ailway .borbottom{
      border-bottom:none;
  }
  .a-banner{
      background-image: url("../assets/homeImg/ailway.png");
      width: 100%;
      height:650px;
      background-position:top center;
      background-repeat:no-repeat;
      background-size:auto 100%;
      position: relative;
  }
  /*解决方案*/
  .home-sol{
      background-color: #f5faff;
  }
  .in_product i { text-decoration: none; color:#2D2E32;transition:0.4s all; -webkit-transition:0.4s all;}
  .in_product_txt p,.in_product_txt a { text-decoration: none; color:#2D2E32;transition:1s all; -webkit-transition:1s all;}

  .in_product{ text-align:center; margin-bottom:100px; overflow: hidden;}

  .in_product_main_l{ width:36.3541%; height:100%; float:left; position:relative;}
  .in_product_main_l img{ width:100%; height:100%;}
  .in_product_main_r{ width:63.6459%; height:100%; float:left; position:relative;}
  .in_product_main_r img{ width:100%; height:100%;}


  .in_product_main_t,.in_product_main_b{ width:100%; height:50%;}

  .in_product_main_t_l{ width:61%; height:100%; float:left; position:relative;}
  .in_product_main_t_r{ width:39%; height:100%; float:left; position:relative;}

  .in_product_main_b_l{ width:51%; height:100%; float:left; position:relative;}
  .in_product_main_b_r{ width:49%; height:100%; float:left; position:relative;}

  .in_product_txt{ position:absolute; left:50px; top:42px; text-align:left; width:75%; z-index:20;}
  .in_product_txt h5{ line-height:2em; font-size:36px; font-weight:normal; position:relative; margin-bottom:0.9em;}
  .in_product_txt h5 a{ color:#fff;}
  .in_product_txt h5 em{ height:4px; width:90px; position:absolute; left:0; bottom:0; display:block; background:#fff;}
  .in_product_txt p{ color:#fff; font-size:14px; line-height:1.7em; height:6.8em; overflow:hidden; margin-bottom:1.7em; opacity:0;}
  .in_product_txt a > img{ width:auto; height:auto; opacity:0; }
  .in_product i{ display:block; width:100%; height:100%; background:rgba(0,0,0,0.5); position:absolute; left:0; top:0; z-index:10; transform:scale(1,1); opacity:0;}

  .proHover:hover i{ opacity:1; transform:scale(1,1);}
  .proHover:hover .in_product_txt p{ opacity:1;}
  .proHover:hover .in_product_txt a > img{ opacity:1;}
  /*新闻中心*/
  .home-new{
      background-image: url("../assets/homeImg/home-new-bj.png");
      height: 1080px;
  }
  .home-new .ivu-carousel{
      margin-top: 75px;
  }
  .home-new .ivu-carousel-list{
      background-color: #fff;
  }
  .home-new .demo-carousel{
      background-color: #Fff;
      display: flex;
  }
  .home-new .demo-carousel img{
      max-width: 504px;
      max-height:344px; 
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
  }
  .home-new .demo-carousel .new-main{
      padding:69px 0  0 108px;
  }
  .home-new .demo-carousel .new-main .new-main-a{
      font-size: 24px;
      color: #343434;
      width: 380px;
      height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 25px;
  }
  .home-new .demo-carousel .new-main .new-main-b{
      font-size: 14px;
      color: #888;
      width: 392px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .new-three{
      margin-top: 85px;
  }
  .new-three .block{
      width: 339px;
      height: 282px;
      background-color: #fff;
      margin-right: 29px;
      display: inline-block;
      position: relative;
  }
  .new-three .block .bot{
      padding:100px 30px 0 30px;
  }
  .new-three .block .top{
      position: absolute;
      width: 104px;
      height: 100px;
      background-color: #b4b4b4;
      color: #fff;
      font-size: 46px;
      text-align: center;
      line-height: 100px;
      top: -40px;
      left: 30px;
  }
  .new-three .block .top:hover{
      background-color: #0C418E;
      color: #fff;
  }
  .new-three .block .bot .bot-a{
      font-size: 20px;
      color: #343434;;
      margin-bottom: 30px;
  }
  .new-three .block .bot .bot-a:hover{
      color:#0C418E;
  }
  .new-more{
      cursor: pointer;
      width: 160px;
      height: 56px;
      line-height: 56px;
      border: 1px solid #0C418E;
      margin: 42px auto 0 auto;
      text-align: center;
      font-size: 20px;
      color: #0C418E;
  }
  /*100+*/
  .bai{
    position: relative;
      background-image: url("../assets/homeImg/100+.png");
      height: 446px;
  }
  .bai p{
    margin:0 auto;
    position: absolute;
    left:34%;
    top: 40%;
  }
  .bai p{
    color: #fff;
    font-size: 48px;
  }
  .bai p span{
    color: #F54B00;
    font-size: 72px;
  }
  /*服务与支持*/
  .home-ss{
    margin-bottom: 50px;
  }
  .home-ss  .ss-ul{
    text-align: center;
    margin-top: 110px;
  }
  .home-ss  .ss-ul li{
    display: inline-block;
    margin-right: 185px;
  }
  .home-ss  .ss-ul li:last-child{
    margin-right: 0px;
  }
  .home-ss  .ss-ul p{
    text-align: center;
    font-size: 24px;
    color: #29579B;
    margin-top: 30px;
  }
  </style>