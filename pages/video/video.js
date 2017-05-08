Page({
  onLoad:function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight
        })
      }
    })
  },


  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    scrollHeight:0,
    movieList:[
      {
        id:0,
        poster:'http://www.cyjhyl.online/img/piper.jpg',
        name:'鹬',
        author:'皮克斯'
      },
      {
        id:1,
        poster:'http://www.cyjhyl.online/img/jack.jpg',
        name:'小杰克的攻击',
        author:'布拉德.伯德',
      },
      {
        id:2,
        poster:'http://www.cyjhyl.online/img/birds.jpg',
        name:'鸟鸟鸟',
        author:'拉夫.埃格尔斯顿'
      }
    ]
  },

  playmovie:function(event){
    var id= event.target.dataset.idx;
    wx.navigateTo({
      url: '/pages/videodetail/videodetail?id='+ id
    })
  }
})