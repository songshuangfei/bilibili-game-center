# api
* /login POST 登录
    * req body {uid: string,pwd: string, rememberme:"on"|"off"}
    * res {status: number}; 
        * status 1001: 登录成功
        * status 1002: 密码错误

* /login GET 自动登录验证
    * req query none
    * res {status: number}; 
        * status 1011: token未过期
        * status 1012: 无token（未登陆过)
        * status 1013: token过期（会删除token）