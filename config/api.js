// 以下是业务服务器API地址
// 本机开发时使用
// var WxApiRoot = 'http://localhost:8080/';
// 局域网测试使用
// var WxApiRoot = 'http://apiv4.dkwgps.com/';
// 云平台部署时使用
var WxApiRoot = 'https://apiwx.dkwgps.com/userapi/';
                // https://apiwx.dkwgps.com

// 以下是图片存储服务器API地址
// 本机开发时使用
// var StorageApi = 'http://localhost:8081/os/storage/create';
// 局域网测试时使用
// var StorageApi = 'http://192.168.0.101:8081/os/storage/create';
// 云平台部署时使用
//var StorageApi = 'http://122.152.206.172:8081/os/storage/create';


module.exports = {
    LoginUrl: WxApiRoot + 'Login/userLogin', //登录接口
    AuthLoginByWeixin: WxApiRoot +'Login/getVipByWeiXin',//获取微信openid
    UserRegisterFastYZM:WxApiRoot +'Login/userRegisterFastYZM',
    AuthRegister : WxApiRoot +"Login/userRegisterFast",
    AuthNormalRegister: WxApiRoot + "Login/userRegister",
    SelTerList: WxApiRoot +'Terminal/bcx_selTerList' ,
    UpTerFocus: WxApiRoot + 'Terminal/upTerFocus' ,
    SelTerFocusList: WxApiRoot +'Terminal/selTerFocusList',
    GetAddressDetail: WxApiRoot + 'Terminal/getAddressDetail',
    MessageCenter: WxApiRoot + 'Information/messageCenter',
    MessageCenterDelOne: WxApiRoot +'Information/messageCenterDelOne',
    Bell_messageCenterBySN: WxApiRoot +'Information/bell_messageCenterBySN',
    SelReplayB: WxApiRoot +'Terminal/selReplayB',
    SelReplayG: WxApiRoot + 'Terminal/selReplayG',
    SelTerInfo: WxApiRoot + 'Terminal/bcx_selTerInfo',
    UpTerInfo: WxApiRoot + 'Terminal/bcx_upTerInfo',
    AddTer: WxApiRoot + 'Terminal/addTer',
    ResetPwdUserCheck: WxApiRoot +'Login/resetPwdUserCheck',
    ResetPwdYZM: WxApiRoot +'Login/resetPwdYZM',
    ResetPwdYZMCheck: WxApiRoot +'Login/resetPwdYZMCheck',
    ResetPwd: WxApiRoot +'Login/resetPwd'
};