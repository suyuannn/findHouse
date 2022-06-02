// 我的登录页面
function setRem() {
    var ui_w = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
window.onresize = setRem;


// 获取数据

var name_a = document.getElementById('name_a');
console.log(name_a);
window.onload = function(){
   
    var name = localStorage.getItem(phoneNumber)
    name_a.innerHTML = '欢迎你，'+name
}