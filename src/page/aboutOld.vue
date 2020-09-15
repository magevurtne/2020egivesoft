<template>
  <div class="about">
    <!--    banner-->
    <div class="a-banner">
      <div class="art">
        <div class="wrap">
          <h1>上海易予信息技术有限公司</h1>
          <p>是创新型行业化解决方案及信息技术服务商，业务流程平台（BPM）供应商；致力于SOA架构、大数据、移动互联、人工智能等技术与行业解决方案相结合，助力客户完成企业信息化升级、数字化转型；围绕“一带一路”国家高铁建设，积极探索高铁供电专业信息化创新，争创成为领先建设者。</p>
          <ul>
            <li><div><span>2009</span><span>易予信息与2009年成立</span></div></li>
            <li><div><span>100+</span><span>客户超100家涵盖多个行业</span></div></li>
            <li><div><span>150+</span><span>拥有员工150多名</span></div></li>
            <li><div><span>85%+</span><span>专业的技术团队占比公司85%以上</span></div></li>
          </ul>
        </div>
      </div>
    </div>
    <!--    发展历程-->
    <div class="wrap dHistory">
      <h1 class="bigTitle">
        发展历程
      </h1>
      <Timeline>
        <TimelineItem>
          <div class="itemLeft fl">
            <div class="arrow arrowR">
              <img src="../assets/aboutImg/arrowR.jpg">
            </div>
            <div class="position">
              <p class="time">
                2009
              </p>
              <p class="subtitle">
                创业阶段探索中成长，<br>专业化服务与产品研发相结合
              </p>
              <p class="content">
                2009年易子公司成立。专业化服务团队以输出专业化技术服务，与九阳、韵达、德邦、交通银行、山东农信、国家水利局等企业建立稳定合作关系。支撑韵达快递5年上市规划信息化建设。
              </p>
            </div>
          </div>
          <div class="itemRight fr">
            <img src="../assets/aboutImg/a-h-1.png">
          </div>
        </TimelineItem>
        <TimelineItem>
          <div class="itemRight fl">
            <img src="../assets/aboutImg/a-h-2.png">
          </div>
          <div class="itemLeft fr">
            <div class="arrow arrowL">
              <img src="../assets/aboutImg/arrowL.jpg">
            </div>
            <div class="position">
              <p class="time">
                2012
              </p>
              <p class="subtitle">
                规模阶段全球化布局<br>解决方案积累、BPM工作流平台推向市场
              </p>
              <p class="content">
                2012年BPM产品市场化成熟的BPM工作流平台作为开拓型业务，经过多年研发与实践，以独立的业务推向市场。<br>SOA:神华集团“董事长信箱“上CCTV-7播报;“煤炭行业安全标准”创新落地“本质安全管理”。
              </p>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem>
          <div class="itemLeft fl">
            <div class="arrow arrowR">
              <img src="../assets/aboutImg/arrowR.jpg">
            </div>
            <div class="position">
              <p class="time">
                2015
              </p>
              <p class="subtitle">
                转型升级，铁路供电行业信息化研发
              </p>
              <p class="content">
                铁路供电专业研发团队成立。<br>南京供电段:段网一体化平台，供电生产管理一-体化平台，电能计收要，电能远程采集与分析，新线介入3.0升级，安全双重预防新机制系统全局推广。
              </p>
            </div>
          </div>
          <div class="itemRight fr">
            <img src="../assets/aboutImg/a-h-3.png">
          </div>
        </TimelineItem>
        <TimelineItem>
          <div class="itemRight fl">
            <img src="../assets/aboutImg/a-h-4.png">
          </div>
          <div class="itemLeft fr">
            <div class="arrow arrowL">
              <img src="../assets/aboutImg/arrowL.jpg">
            </div>
            <div class="position">
              <p class="time">
                2020
              </p>
              <p class="subtitle">
                研发设备缺陷问题大数据预测性检修平台<br>持续投入
              </p>
              <p class="content">
                2020年不断探索围绕大数据+人工智能深入探索铁路供电专业行业信息化创新，以行业标准为指导，在大数据，人工智能领域相融合。
              </p>
            </div>
          </div>
        </TimelineItem>
        <TimelineItem
          class="lastIcon"
        />
      </Timeline>
      <div class="ending">
        以创新思维和领先技术为客户创造价值， 企业持续10年稳步成长。
      </div>
    </div>
    <!--    荣誉资质-->
    <div
      class="dHonor"
      style="text-align: center"
    >
      <h1 class="bigTitle mb">
        荣誉资质
      </h1>
      <Carousel
        autoplay
        v-model="value2"
        :autoplay-speed="setting.autoplaySpeed"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
      >
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/aboutImg/carousel2.png" />
            <div class="dHonor-name">
              <span>CMMIDEV/3</span><span>中国软件企业证书</span><span>高新技术企业</span><span>计算机应用软件的设计开发</span><span>计算机应用软件的设计开发…</span>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../assets/aboutImg/carousel1.png" />
            <div class="dHonor-name">
              <span>CMMIDEV/3</span><span>中国软件企业证书</span><span>高新技术企业</span><span>计算机应用软件的设计开发</span><span>计算机应用软件的设计开发…</span>
            </div>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <!--    企业文化-->
    <div class="wrap dCulture">
      <h1 class="bigTitle">
        企业文化
      </h1>
      <Row>
        <Col span="8">
        <div class="words">
          <div>
            <p class="d-w-a">
              我们的使命
            </p><p class="d-w-b">
              以创新思维和领先技术<br>为客户创造价值
            </p>
          </div>
        </div>
        <div><img src="../assets/aboutImg/a-c-1.png" /></div>
        </Col>
        <Col span="8">

        <div><img src="../assets/aboutImg/a-c-2.png" /></div>
        <div class="words white">
          <div>
            <p class="d-w-a">
              我们的愿景
            </p><p class="d-w-b">
              成为领先的数字铁路建设服务提供商
            </p>
          </div>
        </div>
        </Col>
        <Col span="8">
        <div class="words">
          <div>
            <p class="d-w-a">
              价值核心观
            </p><p class="d-w-b">
              务实、创新、专业、学习
            </p>
          </div>
        </div>
        <div><img src="../assets/aboutImg/a-c-3.png" /></div>
        </Col>
      </Row>
    </div>
    <!--    联系我们-->
    <div class="a-banner dContact">
      <div class="wrap">
        <h1 class="bigTitle mr">
          联系我们
        </h1>
        <template>
          <Tabs value="name1">
            <TabPane
              label="上海总公司"
              name="name1"
            >
              <Row>
                <Col
                  span="12"
                  class="dCol"
                >
                <p>地址：上海市浦东新区峨山路77号金牛大厦北楼加禾loft201室</p>
                <p>邮编：200127</p>
                <p>电话：400-9202518</p>
                <p>传真：021-58768609</p>
                <p>邮箱：zixun@egivesoft.com</p>
                </Col>
                <Col span="12"><img src="../assets/aboutImg/35@2x.png" /></Col>
              </Row>
            </TabPane>
            <TabPane
              label="南京研发中心"
              name="name2"
            >
              <Row>
                <Col
                  span="12"
                  class="dCol"
                >
                <p>地址：江苏省南京市鼓楼区建宁路65号21栋311室</p>
                <p>邮编：210000</p>
                <p>电话：025-85201303</p>
                <p>传真：021-58768609</p>
                <p>邮箱：zixun@egivesoft.com</p>
                </Col>
                <Col span="12"><img src="../assets/aboutImg/35@2x.png" /></Col>
              </Row>
            </TabPane>
            <TabPane
              label="无锡分公司"
              name="name3"
            >
              <Row>
                <Col
                  span="12"
                  class="dCol"
                >
                <p>地址：无锡分公司</p>
                <p>邮编：210000</p>
                <p>电话：025-85201303</p>
                <p>传真：021-58768609</p>
                <p>邮箱：zixun@egivesoft.com</p>
                </Col>
                <Col span="12"><img src="../assets/aboutImg/35@2x.png" /></Col>
              </Row>
            </TabPane>
          </Tabs>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "About",
    data () {
      return {
        value2: 0,
        setting: {
          // autoplay: true,
          autoplaySpeed: 60000,
          // dots: 'inside',
          // radiusDot: false,
          trigger: 'click',
          arrow: 'never'
        },
      }
    },
    components: {
    }
  };
</script>

<style scoped>
  /*banner*/
  .a-banner{
    background-image: url("../assets/aboutImg/banner.png");
    width: 100%;
    height:680px;
    background-position:top center;
    background-repeat:no-repeat;
    background-size:auto 100%;
    position: relative;
  }
  .a-banner .art{
    color:#ffffff;
    position: absolute;
    width:100%;
    left: 0;
    top:45%;
    transform: translateY(-50%);
  }
  .a-banner .art .wrap{
    width: 1104px;
    margin: 0 auto;
    box-sizing: border-box;
    color: #edfcff;
  }
  .a-banner .art .wrap .ivu-divider-horizontal{
    width: 236px;
    min-width: 236px;
    height: 8px;
    margin: 16px 0 22px 0;
  }
  .a-banner .art h1,.a-banner .art p{
    width: 840px;
  }
  .a-banner .art h1{
    font-size: 40px;
  }
  .a-banner .art p{
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 11%;
  }
  .a-banner .art .wrap ul{
    display: flex;
    justify-content:space-around;
  }
  .a-banner .art .wrap ul li{
    width: 264px;
    height: 160px;
    text-align: center;
    background:rgba(0,85,160,0.5);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .a-banner .art .wrap ul li span{
    display: block;
    color: #C2E2FF;
  }
  .a-banner .art .wrap ul li span:first-child{
    font-size: 32px;
    font-weight:bold;
    line-height: 48px;
  }
  .a-banner .art .wrap ul li span:last-child{
    font-size: 16px;
    line-height: 24px;
    padding:0 62px;
  }
  /*发展历程*/
  .dHistory{
      padding:63px 0 0px 0;
  }
  .bigTitle{
      text-align: center;
      color: #333;
      font-size: 40px;
  }
  .time{
      font-size: 14px;
      font-weight: bold;
  }
  .content{
      padding-left: 5px;
  }
  .dHistory .itemLeft .arrow{
      position: absolute;
      z-index: 1;
      right: -13px;
      top: 10px;
  }
  .dHistory .itemLeft .arrowR{
      right: -13px;
  }
  .dHistory .itemLeft .arrowL{
      left: -13px;
  }
  .dHistory .itemLeft .position{
      width: 429px;
      margin: 0 auto;
  }
  .dHistory .itemLeft .time{
      color: #EB0011;
      font-size: 32px;
      line-height: 48px;
  }
  .dHistory .itemLeft .subtitle{
      color: #333;
      font-size: 18px;
      /*max-width:234px;*/
      line-height: 26px;
      font-weight: bold;
  }
  .dHistory .itemLeft .content{
      color: #777;
      line-height: 24px;
      margin-top: 11px;
  }
  .ending{
      width: 430px;
      background-color: #0C418E;
      color: #fff;
      width: 430px;
      height: 96px;
      margin: 0 auto;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      display: flex;
      align-items: center;
      padding: 0 4.5%;
      line-height: 24px;
  }
  /*荣誉资质*/
  .dHonor{
      background-color: #F2F4F5;
      margin: 88px 0 63px 0;
      padding: 64px 0 88px 0;
  }
  .mb{
    margin-bottom: 1.5%;
  }
  .dHonor-name{
    display: flex;
    justify-content: space-around;
    width: 1552px;
    margin: 0 auto;
  }
  /*企业文化*/
  .dCulture .ivu-row{
    margin: 88px 0;
  }
  .dCulture .words{
    background-color:#525252;
    color: #fff;
    width: 358px;
    height: 218px;
    padding-left: 40px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .dCulture .white{
    background-color: #fff;
    color: #343434;
  }
  .dCulture .words .d-w-a{
    font-size: 28px;
    line-height: 48px;
  }
  .dCulture .words .d-w-b{
    font-size: 16px;
    line-height: 20px;
  }
  /*  联系我们*/
  .dContact{
    background-image: url("../assets/aboutImg/contact.png");
    height: 716px;
  }
  .dContact .mr{
    padding: 64px 0 77px 0;
  }
</style>