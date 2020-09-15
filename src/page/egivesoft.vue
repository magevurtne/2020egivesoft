<template>
  <div>
    <div class="yy-header">
      <div class="wrap add">
        <div class="yy-header-logo">
          <a><img
              class="img-s"
              src="../assets/homeImg/logo.png"
              alt="egivesoft.png"
          /></a>
        </div>
        <Menu
            mode="horizontal"
            :theme="theme1"
            active-name="1"
        >
          <MenuItem
              name="1"
              to="/index/home"
              class="ivu-menu-item-nva"
          >
            首页
          </MenuItem>
          <Submenu
              name="2"
              class="P_S"
          >
            <template slot="title">
              产品与服务
            </template>
            <MenuGroup title="供电生产">
              <MenuItem name="3-1">
                铁路供电新线介入管理系统
              </MenuItem>
              <MenuItem name="3-2">
                铁路GIS地理信息数据分析及决策支持管理平台
              </MenuItem>
              <MenuItem name="3-3">
                6C检测监测智能分析管理系统
              </MenuItem>
              <MenuItem name="3-4">
                铁路数据决策及生产大屏管理平台
              </MenuItem>
              <MenuItem name="3-5">
                铁路电力供电作业生产管理平台
              </MenuItem>
              <MenuItem name="3-6">
                牵引供电智能化应急处置分析系统
              </MenuItem>
              <MenuItem name="3-7">
                铁路供电牵引变电生产管理平台
              </MenuItem>
              <MenuItem name="3-8">
                接触网一杆一档管理系统
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="经营">
              <MenuItem name="3-9">
                电能远程采集与质量监测分析系统
              </MenuItem>
              <MenuItem name="3-10">
                铁路供电电能收费管理系统
              </MenuItem>
              <MenuItem name="3-11">
                资产经营风险管控平台
              </MenuItem>
              <MenuItem name="3-12">
                资产经营风险管控平台
              </MenuItem>
              <MenuItem name="3-13">
                计量科业务综合管理系统
              </MenuItem>
              <MenuItem name="3-14">
                铁路物资追踪管理系统
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="管理">
              <MenuItem name="3-15">
                供电安全双重预防机制管理平台
              </MenuItem>
              <MenuItem name="3-16">
                局级网信工作管理平台
              </MenuItem>
              <MenuItem name="3-17">
                局级事务统一平台
              </MenuItem>
              <MenuItem name="3-18">
                综合办公管理平台
              </MenuItem>
              <MenuItem name="3-19">
                一体化在线学习考试平台
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="设备">
              <MenuItem name="3-20">
                智能锁+授权管理系统
              </MenuItem>
              <MenuItem name="3-21">
                单兵指挥设备+指挥中心远传系统
              </MenuItem>
              <MenuItem name="3-22">
                录音笔+录音转储分析系统
              </MenuItem>
            </MenuGroup>
            <div class="bot">
              产品与服务
            </div>
          </Submenu>
          <Submenu
              name="3"
              class="plan"
          >
            <template slot="title">
              行业应用
            </template>
            <MenuGroup>
              <MenuItem name="3-23">
                <p>铁路行业</p><img src="../assets/homeImg/apply01.png"/>
              </MenuItem>
              <MenuItem name="3-24">
                <p>企业服务</p><img src="../assets/homeImg/apply02.png"/>
              </MenuItem>
            </MenuGroup>
            <div class="bot">
              行业应用
            </div>
          </Submenu>
          <Submenu
              name="4"
              class="plan"
          >
            <template slot="title">
              解决方案
            </template>
            <MenuGroup>
              <MenuItem name="3-25">
                <p>站段协同办公平台</p><img src="../assets/homeImg/plan01.png"/>
              </MenuItem>
              <MenuItem name="3-26">
                <p>基于BIM的供电设备运维管理</p><img src="../assets/homeImg/plan02.png"/>
              </MenuItem>
              <MenuItem name="3-27">
                <p>资产经营风险管控</p><img src="../assets/homeImg/plan03.png"/>
              </MenuItem>
              <MenuItem name="3-28">
                <p>智能锁具授权管理</p><img src="../assets/homeImg/plan04.png"/>
              </MenuItem>
            </MenuGroup>
            <div class="bot">
              解决方案
            </div>
          </Submenu>
          <MenuItem
              name="5"
              to="/index/about"
              class="ivu-menu-item-nva"
          >
            关于我们
          </MenuItem>
          <MenuItem
              name="6"
              to="/index/together"
              class="ivu-menu-item-nva"
          >
            战略合作
          </MenuItem>
        </Menu>
        <div class="yy-header-phone">
          在线咨询
        </div>
      </div>
    </div>
    <router-view/>
    <div class="yy-footer">
      <div class="wrap">
        <Row>
          <Col span="18">
            <Row class="rowL pb15 border">
              <Col span="4">首页</Col>
              <Col span="4">产品与服务</Col>
              <Col span="4">行业应用</Col>
              <Col span="4">解决方案</Col>
              <Col span="4">关于我们</Col>
              <Col span="4">战略合作</Col>
            </Row>
            <div class="border pb15">
              <p class="space">
                咨询热线
              </p>
              <p class="col">
                <span class="fs26">400-9202518</span>( 服务时间：8:00 — 17:30 )
              </p>
              <div class="footer-flex">
                <p class="mr40">
                  <span>上海</span><br><span class="fs20">021-58768609</span>
                </p>
                <p><span>南京</span><br><span class="fs20">025-85201303</span></p>
              </div>
            </div>
          </Col>
          <Col
              span="6"
              class="border pt36"
          >
            <p class="code-title">
              官方微信
            </p>
            <p class="footer-icon">
              <img
                  class="size"
                  src="../assets/homeImg/weibo.png"
              />
              <img
                  class="size"
                  src="../assets/homeImg/wechat.png"
              />
              <img
                  class="size"
                  src="../assets/homeImg/toutiao.png"
              />
              <img
                  class="w124"
                  src="../assets/homeImg/code.png"
              />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Egivesoft',
  data() {
    return {
      theme1: 'light'
    }
  },
  components: {}
}
</script>

<style scoped>
.yy-header {
  min-width: 100%;
  height: 60px;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(255, 255, 255, 1);
  /*box-shadow: 0 0 15px rgba(0, 0, 0, .1);*/
}

.yy-header .add {
  display: flex;
  justify-content: space-between;
}

.yy-header-logo {
  display: flex;
  align-items: center;
}

.yy-header-logo {
  z-index: 999;
}

.yy-header-logo img {
  width: 132px;

}

.yy-header-logo .img-s {
  display: inline-block;
}

.yy-footer {
  background-color: #3A4145;
  min-height: 255px;
  padding: 30px 0;
  padding-bottom: 5px;
  box-sizing: border-box;
  color: #ccc;
}

.rowL {
  /*font-size: 14px;*/
}

.border {
  border-bottom: 1px solid #ccc;
}

.w124 {
  width: 124px;
  margin-left: 35px;
}

.space {
  padding: 15px 0 10px 0;
}

.fs26 {
  font-size: 26px;
  margin-right: 15px;
}

.fs20 {
  font-size: 20px;
  margin-top: 10px;
  display: inline-block;
  color: #EBEBEB;
}

.col {
  color: #EBEBEB;
}

.pb15 {
  padding-bottom: 15px;
}

.footer-flex {
  display: flex;
  margin-top: 20px;
}

.mr40 {
  margin-right: 40px;
}

.footer-icon {
  display: flex;
  align-items: flex-end;
}

.size {
  width: 24px;
  margin-right: 15px;
}

.pt36 {
  padding-top: 35px;
  position: relative;
  padding-bottom: 15px;
}

.code-title {
  position: absolute;
  right: 34px;
  top: 10px;
}

.bot {
  font-size: 18px;
  color: #343434;
  text-align: center;
  border-top: 1px solid #D1D1D1;
  line-height: 48px;
  margin-top: 30px;
  cursor: default;
}

.yy-header-phone {
  width: 96px;
  height: 35px;
  line-height: 35px;
  background-color: #0C428E;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  cursor: pointer;
  margin-top: 14px;
}
</style>
