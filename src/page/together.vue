<template>
  <!--    banner-->
  <div class="together">
    <div class="a-banner">
      <div class="art">
        <div class="tog-wrap">
          <h2>易予信息2020</h2>
          <h1>渠道招募计划正式启动</h1>
          <ul class="nav-link">
            <li class="mr15">
              在线咨询
            </li>
            <li>我要加入</li>
          </ul>
        </div>
      </div>
    </div>
    <!--    合作优势-->
    <div class="a-company">
      <div class="pb70 titile ">
        <div><img src="../assets/aboutImg/01.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">
            合作优势
          </p><p class="f16">
            ADVANTAGE
          </p>
        </div>
      </div>
      <ul class="four">
        <li>
          <img src="../assets/togetherImg/t01.png" />
          <div class="text">
            <p class="f20 mb15">
              强势产品
            </p>
            <p class="f14">
              生产，经营，办公三大块20+产品全覆盖PC端，移动端，大屏全<br>面支撑各类检测，监测设备，单兵设备全面对接，持续更新
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/togetherImg/t02.png" />
          <div class="text">
            <p class="f20 mb15">
              专业厂商
            </p>
            <p class="f14">
              管理软件11年铁路供电行业软件5年拥有自主知识产权30+<br>专业完善的合作系
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/togetherImg/t03.png" />
          <div class="text">
            <p class="f20 mb15">
              强大支持
            </p>
            <p class="f14">
              专业营销、实施、技术、运维、服务团队全面支撑，让你无后<br>顾之忧
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/togetherImg/t04.png" />
          <div class="text">
            <p class="f20 mb15">
              强强联合
            </p>
            <p class="f14">
              同行跨行合作势资源互补实现精准
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!--        合作体系-->
    <div class="a-system">
      <div class="pb70 titile ">
        <div><img src="../assets/aboutImg/02.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">
            合作体系
          </p><p class="f16">
            SYSTEM
          </p>
        </div>
      </div>
      <div class="tc">
        <img src="../assets/togetherImg/t06.png" />
      </div>
    </div>
    <div class="a-system-small">
      <img src="../assets/togetherImg/t05.png" />
    </div>
    <!--        合作申请-->
    <div class="a-form wrap">
      <div class="pb70 titile ">
        <div><img src="../assets/aboutImg/03.png" /></div>
        <div class="ml20">
          <p class="f32 mb10">
            合作申请
          </p><p class="f16">
            APPLICATION
          </p>
        </div>
      </div>
      <div>
        <p class="tips pl20 mb10">
          请正确填写以下信息,以便我们第一时间回复您。其中带<span class="red">*</span>号的选项为必填项。
        </p>
        <div class="form-block">
          <Form
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="125"
            inline
            label-position="left"
          >
            <h3 class="form-title pl20">
              基本信息
            </h3>
            <div class="form-border">
              <Row>
                <Col span="12">
                <FormItem
                  label="企业中文名称："
                  prop="name"
                >
                  <Input
                    v-model="formValidate.name"
                    placeholder="请输入企业中文名称"
                  ></Input>
                </FormItem>
                <FormItem
                  label="企业中文名称："
                  prop="cnName"
                >
                  <Input
                    v-model="formValidate.cnName"
                    placeholder="请输入企业中文名称"
                  ></Input>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem
                  label="企业详细地址："
                  prop="add"
                >
                  <Input
                    v-model="formValidate.add"
                    placeholder="请输入企业详细地址"
                  ></Input>
                </FormItem>
                <FormItem label="企业网址：">
                  <Input v-model="formValidate.web"></Input>
                </FormItem>
                </Col>
              </Row>
            </div>
            <h3 class="form-title pl20">
              联系方式
            </h3>
            <div class="form-border">
              <Row>
                <Col span="12">
                <FormItem
                  label="联系人名称："
                  prop="contactName"
                >
                  <Input
                    v-model="formValidate.contactName"
                    placeholder="请输入联系人名称"
                  ></Input>
                </FormItem>
                <FormItem
                  label="办公电话："
                  prop="telephone"
                >
                  <Input
                    v-model="formValidate.telephone"
                    placeholder="请输入办公电话"
                  ></Input>
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem
                  label="手机："
                  prop="phone"
                >
                  <Input
                    v-model="formValidate.phone"
                    placeholder="请输入手机"
                  ></Input>
                </FormItem>
                <FormItem
                  label="联系人邮箱："
                  prop="mail"
                >
                  <Input
                    v-model="formValidate.mail"
                    placeholder="请输入联系人邮箱"
                  ></Input>
                </FormItem>
                </Col>
              </Row>
            </div>
            <h3 class="form-title pl20">
              合作信息
            </h3>
            <div class="form-border">
              <Row>
                <Col span="12">
                <FormItem
                  label="希望合作方式："
                  prop="way"
                >
                  <RadioGroup v-model="formValidate.way">
                    <Radio label="dai">
                      代理合作
                    </Radio>
                    <Radio label="zhan">
                      战略合作
                    </Radio>
                    <Radio label="ding">
                      按需定制
                    </Radio>
                  </RadioGroup>
                </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="12">
                <FormItem label="备注：">
                  <Input
                    v-model="formValidate.desc"
                    type="textarea"
                    :autosize="{minRows: 2,maxRows: 5}"
                    style="width: 856px;"
                    placeholder="请输入备注"
                  ></Input>
                </FormItem>
                </Col>
              </Row>
            </div>
            <FormItem class="tc w">
              <Button
                type="primary"
                @click="handleSubmit('formValidate')"
              >
                提交
              </Button>
              <Button
                @click="handleReset('formValidate')"
                style="margin-left: 16px"
              >
                重置
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <!--        更多-->
    <div class="a-banner more">
      <div class="wrap more-text">
        <p class="pa">
          了解更多合作信息，或获取合作资料
        </p>
        <p class="pb">
          请致电：400-9202518
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Together",
    data () {
      return {
          formValidate: {
              name: '',
              add: '',
              cnName: '',
              web:'',
              contactName:'',
              phone:'',
              telephone:'',
              mail:''
          },
          ruleValidate: {
              name: [
                  { required: true, message: '企业中文名称不能为空', trigger: 'blur' }
              ],
              add: [
                  { required: true, message: '企业详细地址不能为空', trigger: 'blur' }
              ],
              cnName: [
                  { required: true, message: '企业中文名称不能为空', trigger: 'blur' }
              ],
              contactName: [
                  { required: true, message: '联系人名称不能为空', trigger: 'blur' }
              ],
              phone: [
                  { required: true, message: '手机不能为空', trigger: 'blur' }
              ],
              telephone: [
                  { required: true, message: '办公电话不能为空', trigger: 'blur' }
              ],
              mail: [
                  { required: true, message: '联系人邮箱不能为空', trigger: 'blur' },
                  { type: 'email', message: '电子邮件格式不正确', trigger: 'blur' }
              ],
              way: [
                  { required: true, message: '希望合作方式不能为空', trigger: 'change' }
              ],
          },
        }
      },
      methods: {
          handleSubmit (name) {
              this.$refs[name].validate((valid) => {
                  if (valid) {
                      this.$Message.success('Success!');
                  } else {
                      this.$Message.error('Fail!');
                  }
              })
          },
          handleReset (name) {
              this.$refs[name].resetFields();
          }
      },
    components: {
    }
  };
</script>

<style scoped>
    .mr15{
        margin-right: 15px;
    }
    .mb10{
        margin-bottom: 10px;
    }
    .mb15{
        margin-bottom: 15px;
    }
    .f20{
        font-size: 20px;
    }
    .f14{
        font-size: 14px;
        line-height: 24px;
    }
    .pb70{
        padding-bottom:70px;
    }
    .pl20{
        padding-left: 20px;
    }
    .tc{
        text-align: center;
    }
    .red{
        color: red;
    }
    /*banner*/
    .a-banner{
        background-image: url("../assets/togetherImg/tbanner.png");
        width: 100%;
        height:592px;
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
    .tog-wrap{
        width:544px ;
        margin: 0 auto;
    }
    .tog-wrap h2,h1{
        text-align: center;
    }
    .tog-wrap h2{
        font-size: 32px;
        margin-bottom: 38px;
    }
    .tog-wrap h1{
        font-size: 48px;
        margin-bottom: 64px;
    }
    .nav-link li{
        width:264px ;
        display: inline-block;
        background-color: #0C428E;
        height: 64px;
        line-height: 64px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
    }

    /*合作优势*/
    .a-company{
        width:1104px;
        padding: 70px 0 98px 0;
        margin: 0 auto;
    }
    .a-company .art {
        display: flex;
        justify-content:space-around;
    }
    .a-company .art li{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    .a-company .art li span{
        display: block;
    }
    .a-company .art li span:first-child{
        font-size: 44px;
        font-weight:bold;
        line-height: 48px;
        color: #0090FF;
    }
    .a-company .art li span:last-child{
        font-size: 20px;
        line-height: 24px;
    }
    .titile{
        width: 250px;
        margin: 0 auto;
        display: flex;
    }
    .titile .f32{
        font-size: 32px;
        color: #343434;
    }
    .titile .f16{
        font-size: 16px;
        text-align: center;
    }
    ul.four li{
        display: inline-block;
        position: relative;
    }
    ul.four .text{
        position: absolute;
        bottom: 22px;
        left: 35px;
        color: #fff;
    }
    /*合作体系*/
    .a-system{
        background-color: #F2F4F5;
        padding-top: 55px;
        padding-bottom: 30px;
    }
    .a-system-small{
        background-color: #d9dbdc;
        text-align: center;
    }
    /*合作申请*/
    .a-form{
        padding: 80px 0 64px 0;
    }
    .tips{
        background-color: #e9f0fc;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #565656;
    }
    .form-border{
        border:1px solid #DEDEDE;
        border-top:none;
        padding-top: 25px;
        margin-bottom: 25px;
        padding-left: 30px;
    }
    .form-block .form-title{
        height: 40px;
        line-height: 40px;
        color: #fff;
        background: linear-gradient(90deg, #0C428E 0%, #4684FF 100%);
    }
    .ivu-input-wrapper{
        width: 320px;
    }
    .ivu-radio-wrapper{
        margin-right: 40px;
    }
    .ivu-btn-primary{
        background-color: #0C428E;
        border-color: #0C428E;
    }
    .ivu-btn{
        border-radius:0px;
        width: 128px;
        height: 40px;
    }
    .ivu-input:hover{
        border-color: #0C428E!important;
    }
    ivu-btn:hover {
        color: #0C428E;
        border-color: #0C428E;
    }
    .w{
        width: 100%;
        margin-top: 15px;
    }
    /*更多*/
    .more{
        background-image: url("../assets/togetherImg/tfooter.png");
        height:178px;
    }
    .more-text{
        color: #fff;
        padding-top: 38px;
    }
    .more-text .pa{
        font-size: 32px;
        margin-bottom: 30px;
        text-align: center;
    }
    .more-text .pb{
        font-size: 18px;
        width: 240px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #fff;
        margin: 0 auto;
        text-align: center;
    }
</style>
