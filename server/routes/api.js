var express = require('express');
var router = express.Router();
var games =  require('../db/games');
var home =  require('../db/home');
var strategy =  require('../db/strategy');
var users =  require('../db/users');
var my =  require('../db/my');
var find  =  require('../db/find');

/* GET home page. */
router.get('/carousel', function(req, res, next) {//首页轮播图
  res.json({'carousel':home.carousel});
});

router.get('/hotgame', function(req, res, next) {//首页热门游戏
  res.json({'hotGame':games.hotGame})
});

router.post('/gameadver', function(req, res, next) {//首页游戏广告
  var sendData = req.body
  var db = home.gameAdver;
  var resData = db.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)//返回查找到的页数的内容，每页size由客户端决定
  res.json({'gameAdver':resData})
});


router.get('/bookgame', function(req, res, next) {//首页预约游戏
  res.json({'bookGame':home.bookGame})
});

router.get('/newgame', function(req, res, next) {//首页新游推荐
  res.json({'newGame':games.newGame})
});

router.get('/hotstrategy', function(req, res, next) {//首页热门攻略
  res.json({'hotStrategy':home.hotStrategy})
});

router.post('/rank', function(req, res, next) {//排行榜页面，更具前端参数排序
// ['BestSelling','GoodTrend','MorePraise','Hot']前端发来的排序方式
  var sendData = req.body;
  var db = [];
  switch (sendData.sort){//这里假装在排序，其实是返回不同打乱的顺序
  case 'BestSelling':
    db = games.gamesRank;
    break;
  case 'GoodTrend':
    db = [...games.gamesRank].reverse();
    break;
  case 'MorePraise':
    db = [...games.gamesRank];
    db = db.slice(1,db.length);
    break;
  case 'Hot':
    db = [...games.gamesRank];
    db = db.slice(2,db.length);
    break;
  default:
    break;
  }

  var resData = db.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)//返回查找到的页数的内容，每页size由客户端决定
  res.json({'rankList':resData})
});

router.get('/strategy/hotgame', function(req, res, next) {//攻略页面，热门游戏
  res.json({'hotgame':strategy.hotGame})
});

router.post('/strategy/newstrategy', function(req, res, next) {//攻略页面，新攻略
  var sendData = req.body;
  var db = strategy.newStrategy;
  
  var resData = db.slice(sendData.page*sendData.pageSize,(sendData.page+1)*sendData.pageSize)//返回查找到的页数的内容，每页size由客户端决定
  
  res.json({'strategy':resData})
});

router.get('/my/user', function(req, res, next) {//我的页面，用户数据
  res.json({'user':users})
});

router.get('/my/menu', function(req, res, next) {//我的页面，菜单数据
  res.json({'menu':my.menu})
});

router.get('/find/hot', function(req, res, next) {//发现页面，轮播图
  res.json({'hot':find.hot})
});

router.get('/find/better', function(req, res, next) {//发现页面，好游戏
  res.json({'better':find.better})
});

router.get('/find/paygame', function(req, res, next) {//发现页面，付费游戏
  res.json({'paygame':find.payGame})
});

router.get('/find/list', function(req, res, next) {//发现页面，发现列表
  res.json({'list':find.list})
});


router.get('/find/special', function(req, res, next) {//发现页面，精选专栏
  res.json({'special':find.special})

});


module.exports = router;
  
