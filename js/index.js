// table切换
var btn = document.getElementsByClassName('hotAttentTitle')[0].children;
var list = document.getElementsByClassName('hotAttentlist');
// table 封装
function table(btn1, list1) {
    for (var i = 0; i < btn1.length; i++) {
        btn1[i].inde = i;
        btn1[i].ontouchstart = function () {
            for (var j = 0; j < btn1.length; j++) {
                btn1[j].className = '';
                list1[j].style.display = 'none';
            }
            this.className = 'tilteActive';
            list1[this.inde].style.display = 'flex';
        }
    }
}
table(btn, list);
// 控制弹窗广告
var wrong = document.getElementsByClassName('wrong')[0];
var flipWindow = document.getElementsByClassName('flipWindow')[0];
wrong.ontouchstart = function () {
    flipWindow.parentNode.removeChild(flipWindow);
}