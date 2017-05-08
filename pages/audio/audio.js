Page({
  onLoad:function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 80
        })
      }
    })
  },

  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    seek:0,
    scrollHeight:0,
    music: {
        id:0,
        poster:'http://www.chinavane.online/music/1.jpg',
        name:'暧昧',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/1.mp3'
      },

    musicList:[
      {
        id:0,
        poster:'http://www.chinavane.online/music/1.jpg',
        name:'暧昧',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/1.mp3'
      },
      {
        id:1,
        poster:'http://www.chinavane.online/music/2.jpg',
        name:'动物世界',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/2.mp3'
      },
      {
        id:2,
        poster:'http://www.chinavane.online/music/3.jpg',
        name:'说散就散',
        author:'JC',
        src:'http://www.chinavane.online/music/3.mp3'
      }
    ]



  },
  playMusic:function(event){
    var idx = event.target.dataset.idx;
    var that = this;
    that.setData({
      music: that.data.musicList[idx] 
    })
    
    setTimeout(function(){
       that.audioCtx.play();
    },500)
   

      
  },

  endedHandle:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id + 1 >= that.data.musicList.length ){
      pos = 0;
    }else{
      pos = that.data.music.id + 1;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playingMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)

  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
 audios: function () {
   console.log(1);
    var that = this;
    var sid=this.data.music.id;
    sid--;
    if(sid<0){
      sid=this.data.musicList.length-1;
      var pos=this.data.musicList[sid];
      this.setData({
        music:pos
      })
    }
    else{
      var pos=this.data.musicList[sid];
      this.setData({
        music:pos
      })
    }
    setTimeout(function(){
       that.audioCtx.play();
    },500)
  },
  audiox: function () {
    var that = this;
    var xid=this.data.music.id;
    xid++;
    if(xid>=this.data.musicList.length){
      xid=0;
     var pos=this.data.musicList[xid];
      this.setData({
        music:pos
      })
    }
    else{
       var pos=this.data.musicList[xid];
      this.setData({
        music:pos
      })
    }
    setTimeout(function(){
       that.audioCtx.play();
    },500)
  },
   pro:function(event){
    var that=this;
 this.setData({
   seek:Math.ceil(event.detail.currentTime).toString()
 })
  },
  todetail:function(event){
     var id= event.target.dataset.idx;
     this.audioCtx.pause();
    wx.navigateTo({
      url: '/pages/audiodetail/audiodetail?id='+ id+'&seek='+this.data.seek
    })
  }
})