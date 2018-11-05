//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array:[
      '广州市',
      '惠州',
      '东莞',
    ],
    index:1,
    selectArray: [{
      "id": "10",
      "text": "会计类"
    }, {
      "id": "21",
      "text": "工程类"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onPullDownRefresh (){
    console.log('下拉刷新')
  },
  onLoad: function () {
  
  },
  bindPickerChange:function (e) {
    this.setData({
      index:e.detail.value
    })
  }
})
