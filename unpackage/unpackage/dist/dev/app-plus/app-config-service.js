
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/card/card","pages/gpt/gpt","pages/map/map","pages/acount/acount","pages/map/hubei","pages/gpt/chat","pages/card/components/CardBar","pages/card/components/Card","pages/card/components/CardList","pages/card/components/CardFront","pages/card/components/CardBack","pages/card/components/CardDetails","pages/card/components/Content","pages/card/components/TabList","pages/acount/components/login","pages/acount/components/submit"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"药材宝典","navigationBarBackgroundColor":"rgba(59,168,122)","backgroundColor":"#F8F8F8","navigationBarHidden":true},"tabBar":{"color":"#999","selectedColor":"#99acbe","borderStyle":"none","backgroundColor":"#e4e0df","list":[{"pagePath":"pages/card/card","text":"卡片","iconPath":"static/daohanglan/shouye-unchecked.png","selectedIconPath":"static/daohanglan/shouye-checked.png"},{"pagePath":"pages/gpt/gpt","text":"问答","iconPath":"static/daohanglan/kongzhi-unchecked.png","selectedIconPath":"static/daohanglan/kongzhi-checked.png"},{"pagePath":"pages/map/map","text":"地图","iconPath":"static/daohanglan/shibie-unchecked.png","selectedIconPath":"static/daohanglan/shibie-checked.png"},{"pagePath":"pages/acount/acount","text":"我的","iconPath":"static/daohanglan/wode-unchecked.png","selectedIconPath":"static/daohanglan/wode-checked.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"project","compilerVersion":"3.7.9","entryPagePath":"pages/card/card","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/card/card","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/gpt/gpt","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false}},{"path":"/pages/map/map","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false}},{"path":"/pages/acount/acount","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false}},{"path":"/pages/map/hubei","meta":{},"window":{}},{"path":"/pages/gpt/chat","meta":{},"window":{}},{"path":"/pages/card/components/CardBar","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/Card","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/CardList","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/CardFront","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/CardBack","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/CardDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/Content","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/card/components/TabList","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/acount/components/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/acount/components/submit","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
