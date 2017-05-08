function parseLyric(lrc) {
    var lyrics = lrc.split("\n");
    var lrcObj = {};
    for(var i=0;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');
        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
}
Page({
  data: {
    seek:0,
    index:"a0",
    time1:0,
    geci:'',
    pro:0,
    id:0,
    scrollHeight:0,
    musicList:[
      {
        id:0,
        poster:'http://www.chinavane.online/music/1.jpg',
        name:'暧昧',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/1.mp3',
        lrc:`
[00:00.00]薛之谦 - 暧昧
[00:02.00]作词:薛之谦
[00:04.00]作曲:薛之谦
[00:06.00]歌词编辑：果果
[00:08.00]QQ:765708831
[00:10.00]爱歌词网：www.22lrc.com
[00:12.00]
[00:15.18]反正现在的感情都暧昧
[00:19.86]你大可不必为难找般配
[00:24.50]付出过的人排队谈体会
[00:29.12]趁年轻别害怕一个人睡
[00:34.29]可能是现在感情太昂贵
[00:39.03]让付出真心的人好狼狈
[00:43.72]还不如听首情歌的机会
[00:48.95]忘了谁
[00:55.09]感情像牛奶一杯
[00:59.77]越甜越让人生畏
[01:04.44]都早有些防备
[01:07.04]润色前的原味
[01:13.68]所以人们都拿起咖啡
[01:18.79]把试探放在两人位
[01:23.82]距离感一对
[01:25.98]就不必再赤裸相对
[01:31.95]反正现在的感情都暧昧
[01:36.80]你大可不必为难找般配
[01:41.38]付出过的人排队谈体会
[01:45.99]弃之可惜食而无味
[01:51.19]可能是现在感情太珍贵
[01:55.81]让付出真心的人好疲惫
[02:00.63]谁不曾用过卑微的词汇
[02:05.40]想留住谁
[02:09.46]
[02:49.98]还贪恋着衣衫昂贵
[02:54.75]却输给了廉价香水
[02:59.76]他先诱你入位
[03:01.97]还刻意放低了分贝
[03:09.19]可感情越爱越妩媚
[03:13.95]像烂掉的苹果一堆
[03:18.92]连基因都不对
[03:21.16]还在意什么鱼腥味
[03:27.19]反正现在的感情都暧昧
[03:31.96]你大可不必为难找般配
[03:36.62]何必给自己沉迷的机会
[03:41.10]不如用误会来结尾
[03:46.26]反正现在的我们算暧昧
[03:51.02]我愿意给的感情请浪费
[03:55.74]反正流过的眼泪难收回
[04:00.77]就别再安慰
[04:05.66]看你入眠的侧脸
[04:08.77]有多美
[04:10.83]和你丢下的一切
[04:14.46]好匹配
[04:17.26]我还以为我能
[04:20.52]多狼狈
[04:23.18]我自以为
[04:28.98]
[04:30.01]制作人:郑伟
[04:31.54]编曲:薛之谦、郑伟
[04:34.16]混音:郑伟
[04:35.63]大提琴:周润青
[04:38.15]女声:孟楠
[04:40.03]合音:薛之谦、张石狄
[04:42.26]录音:莫家伟
[04:45.42]母带:Chris Gehringer
[04:48.75]`
      },
      {
        id:1,
        poster:'http://www.chinavane.online/music/2.jpg',
        name:'动物世界',
        author:'薛之谦',
        src:'http://www.chinavane.online/music/2.mp3',
        lrc:`[00:00.41]动物世界 - 薛之谦
[00:02.86]词：薛之谦
[00:04.90]曲：郭顶
[00:06.93]歌词分享QQ122121036
[00:09.00]www.22lrc.com
[00:10.67]东打一下西戳一下
[00:13.49]动物未必需要尖牙
[00:16.05]示爱的方法有礼貌或是我管它
[00:20.83]要将情人一口吞下
[00:23.84]还要显得温文尔雅
[00:26.52]螳螂委屈的展示旧伤疤
[00:31.28]求偶时候一惊一乍
[00:34.34]因为害怕时常倒挂
[00:36.84]走投无路的情况下舍弃了尾巴
[00:41.81]如果不能将它同化就寄生于它
[00:47.00]大不了一同腐化
[00:50.97]努力进化 笑动物世界都太假
[00:57.00]祖先 已磨去爪牙
[01:01.50]相爱相杀 一定有更好的办法
[01:07.42]攀比一下 谁先跪下
[01:11.66]不再进化 动物世界里都太傻
[01:17.68]为情表现到浮夸
[01:23.33]得到了你就该丢下
[01:26.04]人性来不及粉刷
[01:27.88]所以啊 人总患孤寡
[01:31.97]
[01:54.31]麋鹿本来约在树下
[01:56.97]说好一起浪迹天涯
[01:59.65]系上铃铛还在往那个方向挣扎
[02:04.71]如果有只豺狼它英勇披上婚纱
[02:09.59]同伴笑他读过童话
[02:13.33]歌词分享QQ122121036
[02:18.00]
[02:22.76]别再进化 别让动物世界太假
[02:28.68]我们 该露出爪牙
[02:32.77]相爱相杀 别再想更好的办法
[02:38.80]优胜劣汰 自舔伤疤
[02:42.88]假装进化 拼命想和动物有差
[02:48.85]玩一出高贵优雅
[02:54.02]在人们腐烂的欲望下
[02:56.82]兽性来不及抹杀
[02:58.66]算了吧 懒得去挣扎
[03:04.58]人类用沙 想捏出梦里通天塔
[03:10.16]为贪念不惜代价
[03:15.56]驾驭着昂贵的木马
[03:18.39]巢穴一层层叠加
[03:20.00]最后啊 却一丝不挂
[03:25.16]别害怕 我们都孤寡
[03:31.15]歌词分享QQ122121036
[03:35.01]`
      },
      {
        id:2,
        poster:'http://www.chinavane.online/music/3.jpg',
        name:'说散就散',
        author:'JC',
        src:'http://www.chinavane.online/music/3.mp3',
        lrc:`[00:09.72]抱一抱
[00:10.73]就当作从没有在一起
[00:16.41]好不好
[00:17.60]要解释都
[00:18.57]已经来不及
[00:23.26]算了吧
[00:24.27]我付出过什么没关系
[00:28.57]我忽略自己
[00:31.30]就因为遇见你
[00:35.64]没办法好可怕
[00:39.11]那个我不像话
[00:42.67]一直奋不顾身是我太傻
[00:48.23]说不上爱别说谎
[00:51.91]就一点喜欢
[00:54.99]说不上恨别纠缠
[00:57.15]别装作感叹
[01:02.15]就当作我太麻烦
[01:04.78]不停让自己受伤
[01:06.15]我告诉我自己
[01:08.70]感情就是这样
[01:12.44]怎么一不小心太疯狂
[01:25.24]抱一抱
[01:26.28]再好好觉悟不能长久
[01:31.91]好不好
[01:33.33]有亏欠我们都别追究
[01:38.81]算了吧
[01:39.91]我付出再多都不足够
[01:44.32]我终于得救
[01:46.83]我不想再献丑
[01:51.43]没办法不好吗
[01:54.82]大家都不留下
[01:57.92]一直勉强相处总会累垮
[02:03.73]说不上爱别说谎
[02:07.41]就一点喜欢
[02:10.55]说不上恨别纠缠
[02:14.26]别装作感叹
[02:17.67]就当作我太麻烦
[02:20.01]不停让自己受伤
[02:21.95]我告诉我自己
[02:24.30]感情就是这样
[02:27.86]怎么一不小心太疯狂
[02:33.81]别后悔就算错过
[02:37.15]在以后
[02:38.16]你少不免想起我
[02:42.98]还算不错
[02:45.64]当我不在你会不会难过
[02:50.27]你够不够我这样洒脱
[02:55.98]说不上爱别说谎
[02:58.70]就一点喜欢
[03:02.11]说不上恨别纠缠
[03:05.54]别装作感叹
[03:07.91]将一切都体谅
[03:09.47]将一切都原谅
[03:11.02]我尝试找答案
[03:12.88]而答案很简单
[03:14.47]简单得很遗憾
[03:16.88]因为成长
[03:18.92]我们逼不得已要习惯
[03:23.40]因为成长
[03:25.89]我们忽尔间说散就散`
      }
    ]



  },
 onReady: function (res) {
     this.audioCtx = wx.createAudioContext('myAudio')
     this.audioCtx.seek(this.data.seek)
      this.audioCtx.play()
  },
  onLoad:function(options){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 220,
          id:options.id,
          seek:options.seek
        })
      }
    })
  },
  pro:function(event){
    var that=this;
  var time=parseInt((event.detail.currentTime/event.detail.duration)*100);
 this.setData({
   geci:parseLyric(that.data.musicList[that.data.id].lrc),
   pro:time,
   time1:Math.ceil(event.detail.currentTime).toString()
 })
  },
   audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audios: function () {
    var that = this;
    var sid=this.data.id;
    sid--;
    if(sid==0){
      sid=this.data.musicList.length;
      that.setData({
       id:sid
        })
    }
    else{
       that.setData({
       id:sid
        })
    }
    
    setTimeout(function(){
       that.audioCtx.play();
    },500)
  },
  audiox: function () {
    var that = this;
    var xid=this.data.id;
    xid++;
    if(xid==this.data.musicList.length){
      xid=0;
      that.setData({
       id:xid
        })
    }
    else{
       that.setData({
       id:xid
        })
    }
    setTimeout(function(){
       that.audioCtx.play();
    },500)
  },
  endedHandle:function(){
    var that = this;
    var pos = that.data.id;
    pos++;
    if( pos >that.data.musicList.length-1 ){
     this.setData({
       id:0
     })
    }else{
      this.setData({
       id:pos
     })
    }

    setTimeout(function(){
      that.audioCtx.play();
    },500)

  }
})