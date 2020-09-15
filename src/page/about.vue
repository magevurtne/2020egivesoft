<template>
  <div class="about">
    <!--    banner-->
    <section class="yy-sec a-banner">
      <div class="art">
        <div class="wrap">
          <div class="bannerContent">
            <p class="cn">
              关<span class="f60">予</span>我们
            </p>
            <p class="en">
              About Us
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--    公司介绍-->
    <section class="yy-sec a-company">
      <div class="yy-sec-tit">
        <div>
          <img
            src="../assets/aboutImg/01.png"
            alt=""
          />
        </div>
        <div class="ml20">
          <p class="f32 mb10">
            公司介绍
          </p>
          <p class="f16">
            Company Introduction
          </p>
        </div>
      </div>
      <div class="cont">
        上海易予信息技术有限公司是创新型行业化解决方案及信息技术服务商，业务流程平台（BPM）供应商；致力于SOA架构、大数据、移动互联、人工智能等技术与行业解决方案相结合，助力客户完成企业信息化升级、数字化转型；围绕“一带一路”国家高铁建设，积极探索高铁供电专业信息化创新，争创成为领先建设者。
      </div>
      <ul class="art">
        <li>
          <div>
            <span>
              <countTo
                :start-val="startVal"
                :end-val="endVal"
                :duration="3000"
              ></countTo>
              <sup style="top: 0!important;">+</sup></span>
            <p class="c9 title">
              合作企业
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>
              <countTo
                :start-val="startStaff"
                :end-val="endStaff"
                :duration="3000"
              ></countTo>
              <sup style="top: 0!important;">+</sup>
            </span>
            <P class="c9 title">
              公司员工
            </P>
          </div>
        </li>
        <li>
          <div>
            <span>
              <countTo
                :start-val="startIT"
                :end-val="endIT"
                :duration="3000"
              ></countTo>%
              <sup style="top: 0!important;">+</sup>
            </span>
            <p class="c9 title">
              技术占比
            </p>
          </div>
        </li>
      </ul>
    </section>
    <!--    发展里程-->
    <section class="yy-sec a-history">
      <div class="yy-sec-tit">
        <div><img src="../assets/aboutImg/02.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">
            发展里程
          </p>
          <p class="f16">
            Development history
          </p>
        </div>
      </div>
      <div class="a-history-cont mt65">
        <div class="wrap clearfix">
          <div class="swiper-l">
            <div class="swiper-msg">
              <h4>{{ curHisItem.title }}</h4>
              <p>
                {{ curHisItem.details }}
              </p>
            </div>
            <div class="swiper-timeline">
              <swiper
                :options="hisSwipersL"
              >
                <swiper-slide
                  v-for="(item, index) in hisData.data"
                  :key="index"
                >
                  <div class="swiper-inner">
                    <Icon
                      class="arrow-icon"
                      type="md-radio-button-on"
                    />
                    <h5>{{ item.title }}</h5>
                    <p v-html="item.message"></p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiper-inner"></div>
                </swiper-slide>
                <div
                  class="swiper-pagination"
                  slot="pagination"
                ></div>
              </swiper>
            </div>
          </div>
          <div class="swiper-r">
            <div class="swiper-album">
              <div class="swiper-box">
                <swiper
                  class="swiper-no-swiping"
                  ref="mySwiper"
                  :options="hisSwipersR"
                >
                  <swiper-slide
                    v-for="(item, index) in hisData.data"
                    :key="index"
                  >
                    <div class="swiper-inner">
<!--                      {{ item.title }}-->
                      <img
                        :src="item.image"
                        alt="发展历程"
                      >
                    </div>
                  </swiper-slide>
                  <div
                    class="swiper-pagination"
                    slot="pagination"
                  ></div>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    企业文化-->
    <section class="yy-sec wrap a-spirit">
      <div class="yy-sec-tit">
        <div><img src="../assets/aboutImg/03.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">
            企业文化
          </p>
          <p class="f16">
            Development history
          </p>
        </div>
      </div>
      <Row class="mt65">
        <Col span="8"><img
          class="pr"
          src="../assets/aboutImg/a-c-1.png"
        />
        <div class="pa we">
          <p class="d-w-a">
            我们的使命
          </p>
          <p class="d-w-b">
            以创新思维和领先技术<br>为客户创造价值
          </p>
        </div>
        </Col>
        <Col span="8"><img
          class="pr"
          src="../assets/aboutImg/a-c-2.png"
        />
        <div class="pa hope">
          <p class="d-w-a tc">
            我们的愿景
          </p>
          <p class="d-w-b tc">
            成为领先的数字铁路建设服务提供商
          </p>
        </div>
        </Col>
        <Col span="8">
        <img
          class="pr"
          src="../assets/aboutImg/a-c-3.png"
        />
        <div class="pa idea">
          <p class="d-w-a">
            价值核心观
          </p>
          <p class="d-w-b">
            务实、创新、专业、学习
          </p>
        </div>
        </Col>
      </Row>
    </section>
    <!--      荣誉资质-->
    <section class="yy-sec a-honor">
      <div class="wrap">
        <div class="yy-sec-tit">
          <div><img src="../assets/aboutImg/04.png" /></div>
          <div class="ml20">
            <p class="f32 mb10">
              荣誉资质
            </p>
            <p class="f16">
              Honor
            </p>
          </div>
        </div>
        <div class="swiper">
          <!--          <swiper >-->
          <!--            <swiper-slide>-->
          <!--              <div class="swiper-text">-->
          <!--                <ul>-->
          <!--                  <li class="ft24">资质</li>-->
          <!--                  <li>- CMMI3体系认证</li>-->
          <!--                  <li>- ISO9001体系认证</li>-->
          <!--                  <li>- ISO20000体系认证</li>-->
          <!--                  <li>- ISO27000体系认证</li>-->
          <!--                  <li>更多内容 ></li>-->
          <!--                </ul>-->
          <!--              </div>-->
          <!--              <div class="swiper-img">-->
          <!--                <img src="../assets/aboutImg/carousel1.png"/>-->
          <!--              </div>-->
          <!--            </swiper-slide>-->
          <!--            <swiper-slide>-->
          <!--              <div class="swiper-text">-->
          <!--                <ul>-->
          <!--                  <li class="ft24">证书</li>-->
          <!--                  <li>- 国家高新技术企业认证</li>-->
          <!--                  <li>- 江苏省综合交通运输学会科学技术<br>一等奖</li>-->
          <!--                  <li>- 科学技术进步一等奖</li>-->
          <!--                  <li>- 科学技术进步二等奖</li>-->
          <!--                  <li>更多内容 ></li>-->
          <!--                </ul>-->
          <!--              </div>-->
          <!--              <div class="swiper-img">-->
          <!--                <img src="../assets/aboutImg/carousel2.png"/>-->
          <!--              </div>-->
          <!--            </swiper-slide>-->
          <!--            <div class="swiper-pagination" slot="pagination" ></div>-->
          <!--          </swiper>-->
        </div>
      </div>
    </section>
    <!--    联系我们-->
    <section class="dContact">
      <div class="wrap">
        <div class="yy-sec-tit">
          <div><img src="../assets/aboutImg/05.png" /></div>
          <div class="ml20">
            <p class="f32 mb10">
              联系我们
            </p>
            <p class="f16">
              Honor
            </p>
          </div>
        </div>
        <Tabs
          value="name1"
          class="mt65"
        >
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
              <Col span="12"><img
                src="../assets/aboutImg/35@2x.png"
                alt=""
              /></Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </section>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import Vue from 'vue';
import {Swiper as SwiperClass, Pagination, Mousewheel, Autoplay} from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const {Swiper, SwiperSlide} = getAwesomeSwiper(SwiperClass);
import 'swiper/swiper-bundle.css';

export default {
  name: "About",
  data() {
    const me = this;
    return {
      startVal: 0,
      endVal: 100,
      startStaff: 0,
      endStaff: 150,
      startIT: 0,
      endIT: 85,
      // 发展历程
      hisData: {
        cur: 0,
        data: [
          {
            title: '2009年',
            message: '创业阶段探索中成长<br>专业化服务与产品研发相结合',
            details: `2009年易予公司成立；
                      专业化服务团队输出专业化技术服务，与九阳、韵达、德邦、交通银行、山东农信、国家水利局等企业建立稳定合作关系；
                      支撑韵达快递5年上市规划信息化建设。`,
            image: require('@/assets/aboutImg/a-h-1.png')
          },
          {
            title: '2012年',
            message: '规模阶段全球化布局<br>解决方案积累、BPM工作流<br>平台推向市场',
            details: `2012年BPM产品市场化；
                      成熟的BPM工作流平台为开拓型业务，经过多年研发与实践，以独立的业务推向市场；
                      SOA：神华集团“董事长信箱”上CCTV-7播报，“煤炭行业安全标准”创新落地“本质安全管理平台”。`,
            image: require('@/assets/aboutImg/a-h-2.png')
          },
          {
            title: '2015年',
            message: '转型升级<br>保持每年30%以上增长<br>开启铁路供电行业信息化研发',
            details: `2015年铁路供电专业研发团队成立；
                      某铁路局供电段：段网一体化平台，电能计量收费，电能远程采集与分析，供电生产管理一体化平台上线；
                      数次荣获中国铁路某铁路局科学技术奖项；
                      BPM实现年30%的增长态势，逐渐被世界百强、中国百强企业认可并成功合作。`,
            image: require('@/assets/aboutImg/a-h-1.png')
          },
          {
            title: '2020年',
            message: '不断探索创新<br>围绕大数据+人工智能',
            details: `2020年深入探索铁路供电专业行业信息化创新， 以行业标准为指导，与大数据，人工智能领域相融合。`,
            image: require('@/assets/aboutImg/a-h-2.png')
          }
        ]
      },
      // 发展历程-swiper-l
      hisSwipersL: {
        curIndex: 0,
        direction: 'vertical',
        // loop: true,
        slidesPerView: 2,
        mousewheel: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        on: {
          slideChange: function () {
            console.log(this.activeIndex);
            const cur = this.activeIndex;
            // 循环loop模式获取索引较为复杂，建议排除这个选项
            // me.hisData.cur = cur - 2 > me.hisData.data.length - 1 ? 0 : cur - 2;
            me.hisData.cur = cur;
            me.$nextTick(() => {
              me.swiper.slideTo(cur, 500, false)
            })
          },
        },
      },
      // 发展历程-swiper-r
      hisSwipersR: {
        slidesPerView: 2,
        // spaceBetween: 10,
        centeredSlides: true,
        // loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        }
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    curHisItem() {
      return this.hisData.data[this.hisData.cur];
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(2, 1000, false)
  },
  components: {
    countTo,
    Swiper,
    SwiperSlide
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
/*css normal*/
.ml20 {
  margin-left: 20px;
}

.mt65 {
  margin-top: 65px;
}

.c9 {
  color: #999999;
}

.pr {
  position: relative;
}

.pa {
  position: absolute;
}

.tc {
  text-align: center;
}

.ft24 {
  font-size: 24px;
  text-decoration: underline;
}

.ft18 {
  font-size: 18px;
}

.yy-sec {
  padding-top: 68px;
}

/*banner*/
.a-banner {
  background-image: url("../assets/aboutImg/banners.png");
  width: 100%;
  height: 400px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  position: relative;
}

.a-banner .art {
  color: #ffffff;
  position: absolute;
  width: 100%;
  left: 0;
  top: 45%;
  transform: translateY(-50%);
}

.bannerContent {
  color: #fff;
}

.bannerContent .cn {
  font-size: 48px;
}

.bannerContent .cn .f60 {
  font-size: 60px;
}

.bannerContent .en {
  font-size: 24px;
  border-bottom: 10px solid #0090FF;
  width: 99px;
  margin-top: 10px;
  padding-bottom: 10px;
}

/*1.公司介绍*/
.a-company {
  width: 963px;
  padding-bottom: 98px;
  margin: 0 auto;
}

.cont {
  font-size: 20px;
  color: #787878;
  line-height: 28px;
  margin: 65px 0 93px 0;
}

.a-company .art {
  display: flex;
  justify-content: space-around;
}

.a-company .art li {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.a-company .art li span {
  /*display: block;*/
}

.a-company .art li span:first-child {
  font-size: 44px;
  font-weight: bold;
  line-height: 48px;
  color: #0090FF;
}

.a-company .art .title {
  font-size: 20px;
  line-height: 24px;
}

/*2.发展里程*/
.a-history {
  background-color: #f7f7f7;
  padding-bottom: 77px;
}

.a-history-cont {
  font-size: 0;
}

.swiper-l,
.swiper-r {
  width: 50%;
  position: relative;
  float: left;
  font-size: 14px;
}

.swiper-l {
  padding-right: 110px;
}

// swiper-msg
.swiper-msg {
  margin-bottom: 60px;

  h4 {
    font-size: 48px;
    color: #0090FF;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    color: #787878;
    line-height: 24px;
    //max-height: 96px;
    overflow-x: hidden;
  }
}

// swiper-timeline
.swiper-timeline {
  margin-right: 34px;
  height: 400px;

  .swiper-container {
    width: 100%;
    height: 100%;

    &.swiper-container-vertical > .swiper-pagination-progressbar {
      height: 224px;
      left: auto;
      top: 65px;
      right: 0;
      background-color: #CDDFEC;
    }

    .swiper-inner {
      height: 100%;
      padding-top: 64px;
      padding-left: 65px;
      padding-right: 65px;
      position: relative;

      &::before {
        content: "";
        width: 2px;
        display: block;
        height: 100%;
        background-color: #C4D7E6;
        position: absolute;
        top: 0;
        left: 35px;
      }

      .arrow-icon {
        font-size: 24px;
        position: absolute;
        top: 64px;
        left: 24px;
        color: #C4D7E6;
      }

      h5 {
        color: #343434;
        font-size: 20px;
        margin-bottom: 16px;
      }

      p {
        font-size: 16px;
        line-height: 26px;
      }
    }

    .swiper-slide-active {
      .swiper-inner h5,
      .swiper-inner p {
        color: #0090FF;
      }
    }
  }

}

.swiper-album {
  position: absolute;
  left: 0;
  top: 0;
  width: 50vw;
  height: 631px;
  overflow: hidden;

  .swiper-box {
    width: 1920px;
    height: 100%;
    margin-left: -660px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      transition: 300ms;
      transform: scale(0.78);

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
    }

    .swiper-slide-active, .swiper-slide-duplicate-active {
      transform: scale(1);
    }

    .swiper-inner {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper-pagination-fraction {
      letter-spacing: -2px;
      bottom: 0;
      font-size: 25px;
      padding-left: 325px;
      color: #b5b5b5;
      line-height: 20px;
    }
  }
}

/*3.企业文化*/
.a-spirit {
  padding: 73px 0 77px 0;
}

.we {
  top: 58px;
  left: 32px;
  color: #fff;

}

.idea {
  color: #fff;
  left: 32px;
  bottom: 64px;
}

.hope {
  bottom: 15px;
  width: 360px;
}

.d-w-a {
  font-size: 30px;
  margin-bottom: 20px;
}

.d-w-b {
  font-size: 18px;
  line-height: 20px;
}

/*4.荣誉资质*/
.a-honor {
  background-color: #f7f7f7;
  padding: 73px 0 65px 0;
}

//.swiper {
//  margin-top: 65px;
//}
//
//.swiper-slide {
//  height: 698px;
//}

.a-honor .swiper-text {
  width: 513px;
  height: 615px;
  background-color: #63BBFF;
  position: relative;
  color: #fff;
}

.a-honor .swiper-text ul {
  padding: 102px 0 0 65px;
}

.a-honor .swiper-text ul li {
  padding-bottom: 35px;
}

.a-honor .swiper-text ul li:first-child {
  padding-bottom: 65px;
}

.a-honor .swiper-text ul li:last-child {
  padding-top: 25px;
  cursor: pointer;
}

.a-honor .swiper-img {
  position: absolute;
  z-index: 100;
  top: 144px;
  left: 425px;
}

/*.swiper-pagination {*/
/*  width: 100%;*/
/*  height: .2rem;*/
/*  text-align: center;*/
/*  position: absolute;*/
/*  bottom: 0 !important;*/
/*  line-height: .2rem;*/
/*  box-sizing: border-box;*/
/*  padding: 0 .3rem;*/
/*  font-size: 0;*/
/*  z-index: 1;*/
/*}*/

/*.swiper-pagination-bullet {*/
/*  background-color: rgba(255, 255, 255, 1);*/
/*  opacity: 1;*/
/*}*/

/*.swiper-pagination-bullet-active {*/
/*  background-color: #ff7035 !important;*/
/*  opacity: 1;*/
/*}*/

/*  联系我们*/
.dContact {
  padding: 73px 0 77px 0;
}

.dContact .mr {
  padding: 64px 0 77px 0;
}
</style>
