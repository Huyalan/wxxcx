// pages/videodetil/videodetil.js
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad:function(options){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 80,
          id:options.id
        })
      }
    })
  },
  inputValue: '',
    data: {
       id:0,
        movieList:[
      {
        id:0,
        poster:'http://www.cyjhyl.online/img/piper.jpg',
        name:'鹬',
        author:'皮克斯',
        src:'http://www.cyjhyl.online/video/piper.mp4'
      },
      {
        id:1,
        poster:'http://www.cyjhyl.online/img/jack.jpg',
        name:'小杰克的攻击',
        author:'布拉德.伯德',
        src:'http://www.cyjhyl.online/video/jack.mp4'
      },
      {
        id:2,
        poster:'http://www.cyjhyl.online/img/birds.jpg',
        name:'鸟鸟鸟',
        author:'拉夫.埃格尔斯顿',
        src:'http://www.cyjhyl.online/video/birds.mp4'
      }
    ]
    },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  movieended:function(){
   var that = this;
   var idx=this.data.id;
    if( this.data.id + 1 >= this.data.movieList.length ){
      this.setData({
        id:0
      })
    }
    else{
      idx++;
      this.setData({
        id:idx
      })
    }
    setTimeout(function(){
       that.videoContext.play();
    },500)

  }
})