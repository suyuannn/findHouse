//  悬浮窗 table 一级切换
var tabA = document.getElementsByClassName('tableA')[0].children;
var tab = document.getElementsByClassName('tableBoxs');
for (var i = 0; i < tabA.length; i++) {
    tabA[i].ind = i;
    tabA[i].ontouchstart = function () {
        for (var j = 0; j < tabA.length; j++) {
            tabA[j].firstElementChild.className = '';
            tabA[j].lastElementChild.className = '';
            tab[j].style.display = 'none';
        }
        this.firstElementChild.className = 'tableActive';
        this.lastElementChild.className = 'spanActive';
        tab[this.ind].style.display = 'flex';
    }
}
//  悬浮窗 table 二级切换
var tableBoxA = document.getElementsByClassName('tableBoxA')[0].children;
// console.log(tableBoxA)
var tableBoxB = document.getElementsByClassName('tableBoxB');
// console.log(tableBoxB);
function table(a, b) {
    for (var i = 0; i < a.length; i++) {
        a[i].ind = i;
        a[i].ontouchstart = function () {
            for (var j = 0; j < a.length; j++) {
                a[j].className = '';
                b[j].style.display = 'none';
            }
            this.className = 'tableActiveB';
            b[this.ind].style.display = 'flex';
        }
    }
}
table(tableBoxA, tableBoxB);

// 页面显示的tab切换
var tableControl = document.getElementsByClassName('tableControl')[0].children;
var floatTable = document.getElementsByClassName('floatTable')[0]; //获取悬浮窗的dom节点
var mb = document.getElementsByClassName('mb')[0];
for (var i = 0; i < tableControl.length; i++) {
    tableControl[i].ind = i;
    tableControl[i].ontouchstart = function () {
        for (var j = 0; j < tableControl.length; j++) {
            floatTable.style.display = 'none';
            tabA[j].firstElementChild.className = '';
            tabA[j].lastElementChild.className = '';
            tab[j].style.display = 'none';
            mb.style.display = 'none';
        }
        floatTable.style.display = 'block';
        tabA[this.ind].firstElementChild.className = 'tableActive';
        tabA[this.ind].lastElementChild.className = 'spanActive';
        tab[this.ind].style.display = 'flex';
        mb.style.display = 'block';
    }
}
// 蒙版控制=>蒙版、悬浮窗（table）的显示隐藏
$(document).ready(function () {
    $('.mb').bind('touchstart', function (e) {
        // console.log(e.touches)
        $(this).toggle();
        $('.floatTable').toggle();
    })
});