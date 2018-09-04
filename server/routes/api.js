var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/carousel', function(req, res, next) {
  res.json({'carousel':[
      { img:"/activityimg/1.jpg",activityId:"001"},
      { img:"/activityimg/2.jpg",activityId:"002"},
      { img:"/activityimg/3.jpg",activityId:"003"}
  ]})
});

router.get('/hotgame', function(req, res, next) {
  res.json({'hotGame':[
    {name:"命运-冠位指定",icon:"/gameicon/fgo.png",gameId:"001"},
    {name:"崩坏3",icon:"/gameicon/bh3.png",gameId:"002"},
    {name:"碧蓝航线",icon:"/gameicon/blhx.png",gameId:"003"},
    {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"},
    {name:"食梦计划",icon:"/gameicon//smjh.png",gameId:"005"},
    {name:"站双：帕弥什",icon:"/gameicon//zs.png",gameId:"006"},
    {name:"辐射：避难所Online",icon:"/gameicon//fs.png",gameId:"007"},
  ]})
});

router.post('/gameadver', function(req, res, next) {
  var sendData = req.body
  var db =[
    {gameId:"1",name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
    {gameId:"2",name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
    {gameId:"3",name:"天天躲猫猫",activityimg:"/gamenews/3.png",gameIcon:"/gameicon/ttdmm.png",score:"9.8",info:"寻找调皮可爱的小猫咪,一起来云吸猫吧~",isNewGame:false},
    {gameId:"4",name:"妈妈把我的游戏藏起来了3",activityimg:"/gamenews/4.png",gameIcon:"/gameicon/mmbwyxcqll.png",score:"9.5",info:"妈妈又把你游戏藏起来了",isNewGame:true},
    {gameId:"5",name:"艾比",activityimg:"/gamenews/5.png",gameIcon:"/gameicon/ab.png",score:"8.3",info:"AI,传递内心的语言",isNewGame:false},
    {gameId:"6",name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
    {gameId:"7",name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
    {gameId:"8",name:"天天躲猫猫",activityimg:"/gamenews/3.png",gameIcon:"/gameicon/ttdmm.png",score:"9.8",info:"寻找调皮可爱的小猫咪,一起来云吸猫吧~",isNewGame:false},
    {gameId:"9",name:"妈妈把我的游戏藏起来了3",activityimg:"/gamenews/4.png",gameIcon:"/gameicon/mmbwyxcqll.png",score:"9.5",info:"妈妈又把你游戏藏起来了",isNewGame:true},
    {gameId:"10",name:"艾比",activityimg:"/gamenews/5.png",gameIcon:"/gameicon/ab.png",score:"8.3",info:"AI,传递内心的语言",isNewGame:false},
    {gameId:"11",name:"大王不高兴",activityimg:"/gamenews/1.png",gameIcon:"/gameicon/dwbgx.png",score:"9.8",info:"全新回合概念制手游《大王不高兴》换了启程",isNewGame:true},
    {gameId:"12",name:"崩坏3",activityimg:"/gamenews/2.png",gameIcon:"/gameicon/bh3.png",score:"8.8",info:"\"空之律者\"女王降临",isNewGame:false},
  ]
  var resData = db.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)//返回查找到的页数的内容，每页size由客户端决定

  res.json({'gameAdver':resData})
});


router.get('/bookgame', function(req, res, next) {
  res.json({'bookGame':[
    {img:"/gamecover/1.jpg",game:"公主连接Re:Dive",gameId:"001",bookNum:"123123"},
    {img:"/gamecover/2.jpg",game:"魔法记录 魔法少女小圆",gameId:"002",bookNum:"872364"},
    {img:"/gamecover/3.jpg",game:"FGO",gameId:"003",bookNum:"784574"},
    {img:"/gamecover/4.jpg",game:"第五人格",gameId:"004",bookNum:"234234"},
  ]})
});

router.get('/newgame', function(req, res, next) {
  res.json({'newGame':[
    {name:"梦幻模拟战",icon:"/gameicon//mhmnz.png",gameId:"004"},
    {name:"食梦计划",icon:"/gameicon//smjh.png",gameId:"005"},
    {name:"站双：帕弥什",icon:"/gameicon//zs.png",gameId:"006"},
    {name:"辐射：避难所Online",icon:"/gameicon//fs.png",gameId:"007"},
    {name:"命运-冠位指定",icon:"/gameicon/fgo.png",gameId:"001"},
    {name:"崩坏3",icon:"/gameicon/bh3.png",gameId:"002"},
    {name:"碧蓝航线",icon:"/gameicon/blhx.png",gameId:"003"},
  ]})
});

router.get('/hotstrategy', function(req, res, next) {
  res.json({'hotStrategy':[
    {img:"/videocover/1.jpg",eye:"2074",good:"101",title:"【角色测评】[处刑装·紫苑]全新改版",game:"崩坏3",vedioId:"001"},
    {img:"/videocover/2.jpg",eye:"1478",good:"341",title:"《崩坏三》120水隐藏福利，永久有效，你们发现了吗？",game:"崩坏3",vedioId:"002"},
    {img:"/videocover/3.jpg",eye:"896",good:"99",title:"【FGO】满破・泳装·谜之女主角XX（CV：川澄绫子）宝具+EX+2技能",game:"FGO",vedioId:"003"},
    {img:"/videocover/4.jpg",eye:"136",good:"49",title:"【第五人格】双监管者模式流出，监管者竟然可以使用道具",game:"第五人格",vedioId:"004"},
  ]})
});

router.post('/rank', function(req, res, next) {
  var sendData = req.body;
  console.log(sendData)
  var db = [
    {icon:'/gameicon/bh3.png',name:'崩坏3',type:'角色扮演',size:'1478M',score:8.8,gameId:'001'},
    {icon:"/gameicon/mhmnz.png",name:"梦幻模拟战",type:'角色扮演',size:'872M',score:7.4,gameId:"002"},
    {icon:"/gameicon/smjh.png",name:"食梦计划",type:'角色扮演',size:'872M',score:7.4,gameId:"003"},
    {icon:"/gameicon/zs.png",name:"站双：帕弥什",type:'角色扮演',size:'472M',score:7.4,gameId:"004"},
    {icon:"/gameicon/mhmnz.png",name:"辐射：避难所Online",type:'休闲益智',size:'672M',score:7.4,gameId:"005"},
    {icon:"/gameicon/fgo.png",name:"命运-冠位指定",type:'回合卡牌',size:'802M',score:8.2,gameId:"006"},
    {icon:"/gameicon/blhx.png",name:"碧蓝航线",type:'冒险射击',size:'792M',score:8.4,gameId:"007"},
    {icon:'/gameicon/bh3.png',name:'崩坏3-新开始',type:'角色扮演',size:'1478M',score:8.8,gameId:'009'},
    {icon:"/gameicon/mhmnz.png",name:"梦幻模拟战",type:'角色扮演',size:'872M',score:7.4,gameId:"010"},
    {icon:"/gameicon/smjh.png",name:"食梦计划",type:'角色扮演',size:'872M',score:7.4,gameId:"011"},
    {icon:"/gameicon/zs.png",name:"站双：帕弥什",type:'角色扮演',size:'472M',score:7.4,gameId:"012"},
    {icon:"/gameicon/mhmnz.png",name:"辐射：避难所Online",type:'休闲益智',size:'672M',score:7.4,gameId:"013"},
    {icon:"/gameicon/fgo.png",name:"命运-冠位指定",type:'回合卡牌',size:'802M',score:8.2,gameId:"014"},
    {icon:"/gameicon/blhx.png",name:"碧蓝航线",type:'冒险射击',size:'792M',score:8.4,gameId:"015"},
  ]

  var resData = db.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)//返回查找到的页数的内容，每页size由客户端决定
  res.json({'rankList':resData})
});

router.get('/strategy/hotgame', function(req, res, next) {
  res.json({'hotgame':[
    {img:"/gamecover/1.jpg",gameId:"001"},
    {img:"/gamecover/2.jpg",gameId:"002"},
    {img:"/gamecover/3.jpg",gameId:"003"},
    {img:"/gamecover/4.jpg",gameId:"004"}
  ]})
});

router.post('/strategy/newstrategy', function(req, res, next) {
  var sendData = req.body;
  var db = [
    {
      authorName:'咸鱼5号',
      authorHead:"/userhead/1.jpg",
      title:"《死神激斗》朽木角色曝光！技能炸裂",
      cover:"/stragetysrc/cover/5.png",
      strategyInfo:"【游戏介绍】《BLEACH境·界-死神激斗》是由集英社、テレビ東京、電通、ぴえろ协力制作、获得日本国",
      eye:"22",
      good:"12",
      gameName:"死神激斗·境界-死神激斗",
      stragetyId:"001"
    },{
      authorName:'万象物语',
      authorHead:"/userhead/3.jpg",
      title:"《幻境试炼》公告",
      cover:"/stragetysrc/cover/2.png",
      strategyInfo:"【游戏介绍】《万象物语》是由龙渊网络与雷亚游戏联合研发的大型角色扮演游戏，故事讲述远古大地",
      eye:"626",
      good:"52",
      gameName:"万象物语",
      stragetyId:"002"
    },{
      authorName:'山竹哟',
      authorHead:"/userhead/2.jpg",
      title:"《决战平安京》式神·犬夜叉",
      cover:"/stragetysrc/cover/1.png",
      strategyInfo:"全球无符文对称MOBA，5V5公平竞技！《决战！平安京》是网易重磅推出的无符文公平对战MOBA手游，完美传承《阴阳师》的唯美和风画面",
      eye:"452",
      good:"132",
      gameName:"决战平安京",
      stragetyId:"003"
    },{
      authorName:'咸鱼6号',
      authorHead:"/userhead/4.jpg",
      title:"《崩坏3》女王降临",
      cover:"/stragetysrc/cover/3.png",
      strategyInfo:"《崩坏3》2.5版本「女王降临」! 琪亚娜S级灵魂觉醒女武神「空之律者」 女王降临,姬子A级女武神「极地战刃」参战,助",
      eye:"432",
      good:"242",
      gameName:"崩坏3",
      stragetyId:"004"
    },{
      authorName:'阴阳师',
      authorHead:"/userhead/5.jpg",
      title:"《阴阳师》新剧情攻略",
      cover:"/stragetysrc/cover/4.png",
      strategyInfo:"【游戏介绍】《阴阳师》是由中国网易移动游戏公司自主研发的3D日式和风回合制RPG手游。游戏中的和风元素是以《源氏物语》的古日本平安时代为背景设计的。",
      eye:"222",
      good:"132",
      gameName:"阴阳师",
      stragetyId:"005"
    },{
      authorName:'咸鱼5号',
      authorHead:"/userhead/1.jpg",
      title:"《死神激斗》朽木角色曝光！技能炸裂",
      cover:"/stragetysrc/cover/5.png",
      strategyInfo:"【游戏介绍】《BLEACH境·界-死神激斗》是由集英社、テレビ東京、電通、ぴえろ协力制作、获得日本国",
      eye:"22",
      good:"12",
      gameName:"死神激斗·境界-死神激斗",
      stragetyId:"006"
    },{
      authorName:'万象物语',
      authorHead:"/userhead/3.jpg",
      title:"《幻境试炼》公告",
      cover:"/stragetysrc/cover/2.png",
      strategyInfo:"【游戏介绍】《万象物语》是由龙渊网络与雷亚游戏联合研发的大型角色扮演游戏，故事讲述远古大地",
      eye:"626",
      good:"52",
      gameName:"万象物语",
      stragetyId:"007"
    }
  ];
  
  var resData = db.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)//返回查找到的页数的内容，每页size由客户端决定
  
  res.json({'strategy':resData})
});

router.get('/my/user', function(req, res, next) {
  res.json({'user':{
    back:"/gamecover/1.jpg",
    headImg:"/userhead/1.jpg",
    name:"山竹哟",
    sex:"female",
    lv:6,
    id:"2845689",
    following:45,
    follower:21
  }})
});

module.exports = router;
  
