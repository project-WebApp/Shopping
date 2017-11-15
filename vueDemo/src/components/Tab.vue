<template>
  <div id='tab'>
    <ul>
      <h3 class="title ">出国留学</h3>
      <li class="title" v-for="(item, index) of tabList" v-if="item.visible" :class="{active:currentIndex == index}" @click="toggle(index)">{{ item.title }}</li>
    </ul>
    <div class="content">
      <dl v-for="(item, index) of tabList[this.currentIndex].contendList">
        <dt><a>{{ item.goods_name }}</a></dt>
        <dd>CONTENT</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex:0,
      firsetTab:true,
      tabList:[
      {
        title:'美国',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'加拿大',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'澳洲',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'英国',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'香港',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'新西兰',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'亚洲',
        contendList:[],
        visible:true,
        first:true
      },
      {
        title:'欧洲',
        contendList:[],
        visible:true,
        first:true
      }
      ]
    }
  },
  beforeCreate () {
    for(let index = 0; index < 8; index ++){
      this.$http.jsonp('http://youxue.xdf.cn/api/getcatlist.php?cat_id='+Number(index+1)+'&callback=callback').then(function(res){
        let len = JSON.parse(res.bodyText).LIST.length;
        if(len < 6){
          this.tabList[index].visible = false;
        }else{
          if(this.firsetTab){
            this.firsetTab = false;
            for(let i = 0; i < 6; i ++){
              this.tabList[index].contendList.push(JSON.parse(res.bodyText).LIST[i]);
              this.tabList[index].first = false;
            }
            console.log(this.tabList[index].contendList);
          }
        }
      })
    }
  },
  methods:{
    toggle (index) {
      this.currentIndex = index;
      if(this.tabList[index].first){
        this.tabList[index].first = false;
        this.$http.jsonp('http://youxue.xdf.cn/api/getcatlist.php?cat_id='+Number(index+1)+'&callback=callback').then(function(res){
          let len = JSON.parse(res.bodyText).LIST.length;
          if(this.tabList[index].contendList == '' && len >= 6){
            for(let i = 0; i < 6; i ++){
              this.tabList[index].contendList.push(JSON.parse(res.bodyText).LIST[i]);
            }
          }
        })
      }

    }
  }
}
</script>

<style>
ul, li, dl, dt, dd, h3{
  margin: 0;
  padding: 0;
  font-weight: normal;
}
li{
  list-style: none;
}
h3{
  font-size: 20px;
  float: left;
  padding: 0 32px;
}
ul{
  position: relative;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(124, 193, 178);
  top: -2px;
  padding-bottom: 1px;
}
li.title{
  color: #666;
  cursor: pointer;
  float: left;
  font-size: 14px;
  line-height: 39px;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  text-align: center;
}
.content{
  height: 100%;
  width: 100%;
}
#tab{
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  margin-top: 10px;
}
.active{
  border-top: 2px solid rgb(124, 193, 178);
  border-right: 1px solid rgb(124, 193, 178);
  border-bottom: 1px solid #fff;
  border-left: 1px solid rgb(124, 193, 178);
  color: rgb(124, 193, 178);
}
</style>