//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        address: [
            {
                "id": "1",
                "text": "广州市"
            },
            {
                "id": "2",
                "text": "惠州"
            },
            {
                "id": "3",
                "text": "东莞"
            }
        ],
        school: [
            {
                "id": "1",
                "text": "惠东学校1"
            },
            {
                "id": "2",
                "text": "惠东学校2"
            },
            {
                "id": "3",
                "text": "惠东学校3"
            }
        ],
        list:[
            {
                schoolName: '惠东学校1',
                principal: '张三',
                telNum: 13682427923,
                date: '2018-10-6'
            },
            {
                schoolName: '惠东学校2',
                principal: '李四',
                telNum: 13682427923,
                date: '2018-10-6'
            },
            {
                schoolName: '惠东学校3',
                principal: '王五',
                telNum: 13682427923,
                date: '2018-10-6'
            },
            {
                schoolName: '惠东学校4',
                principal: '小红',
                telNum: 13682427923,
                date: '2018-10-6'
            }
        ]
    },
    //事件处理函数
    bindViewTap: function () {
    },
    onPullDownRefresh() {
        console.log('下拉刷新');
    },
    onLoad: function () {
    }
})
