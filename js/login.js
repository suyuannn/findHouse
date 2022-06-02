// 验证码
var containVerify = document.getElementById('containVerify');

function yzm(a) {
    var num = 5;
    var timer; //定时器
    var yzmNumber = 888666;
    a.ontouchstart = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            a.innerHTML =
                `
        （${num}秒）重发
                `;
            if (num == 0) {
                window.alert(yzmNumber);
                a.innerHTML = '已发送';
                clearInterval(timer);
            }
        }, 1000);
    }
}
yzm(containVerify);
// table切换-封装
var tablebox = document.getElementsByClassName('tablebox')[0].children;
var form = document.getElementsByTagName('form');

function table(a, b) {
    for (var i = 0; i < a.length; i++) {
        a[i].ind = i;
        a[i].ontouchstart = function () {
            for (var j = 0; j < a.length; j++) {
                a[j].className = '';
                b[j].style.display = 'none';
            }
            this.className = 'liActive';
            b[this.ind].style.display = 'block';
        }
    }
}
table(tablebox, form);

// 普通登录-手机号
var phone = document.getElementsByClassName('phone');
// console.log(phone);
for (var i = 0; i < phone.length; i++) {
    phone[i].ind = i;
    phone[i].onblur = function () {
        var phoneValue = phone[this.ind].value;
        var reg1 = /^1[3-9][0-9]{9}$/; //手机号
        var reg2 = /^\s*$/g; //不能为空
        if (reg2.test(phoneValue)) {
            alert('手机号，不能为空！');
            return false;
        } else if (!reg1.test(phoneValue)) {
            alert('长度不在范围内或者存在非法字符');
            return false;
        }
    }
}

// 普通登录-密码
var pwd = document.getElementById('pwd');
pwd.onblur = function () {
    var pwdValue = pwd.value;
    var reg2 = /^\s*$/g; //不能为空
    var reg4 = /^\w{6,12}$/; //长度不在范围内或者存在非法字符
    var reg5 = /[^0-9]/; // 判断密码框值全是数字
    var reg6 = /[^A-z]/; //判断密码框全是字母
    if (reg2.test(pwdValue)) {
        alert('密码不能为空！');
        return false;
    } else if (!reg4.test(pwdValue)) {
        alert('长度不在范围内或者存在非法字符');
        return false;
    } else if (!reg5.test(pwdValue)) {
        alert('验证码不能全是数字！');
        return false;
    } else if (!reg6.test(pwdValue)) {
        alert('验证码不能全是字母！');
        return false;
    }
}

// 普通登录-登录
var btn1 = document.getElementById('btn1');
btn1.ontouchstart = function () {
    var phoneNumber = document.getElementById('phone').value;
    var pwdValue = document.getElementById('pwd').value;
    // console.log(phoneNumber, pwdValue)
    var passwords = localStorage.getItem('password'); // 获取浏览器中密码 的 localStorage
    var phone = localStorage.getItem('phoneNumber'); // 获取浏览器中手机号 的 localStorage
    if (phoneNumber == phone && pwdValue == passwords) {
        window.location.href = 'index.html';
        alert('恭喜你登录成功');
    } else {
        alert('账号或密码不正确，登录失败！');
    }
}
// 快捷登录-验证码
var pwd2 = document.getElementById('pwd2');
pwd2.onblur = function () {
    var pwd2Value = (pwd2.value) - 0;
    var yzmNumber = 888666;
    var reg2 = /^\s*$/g; //不能为空
    if (reg2.test(pwd2Value)) {
        alert('验证码不能为空！');
        return false;
    } else if (pwd2Value !== yzmNumber) {
        alert('与提示的验证码不符合！');
        return false;
    }
}
// 快捷登录-验证并登录
var btn2 = document.getElementById('btn2');
btn2.ontouchstart = function () {
    var phoneNumber = document.getElementsByClassName('phone')[1].value;
    var phone = localStorage.getItem('phoneNumber'); // 获取浏览器中手机号 的 localStorage
    var yzmNumber = 888666;
    var yzm = 888666;
    if (phoneNumber == phone && yzmNumber == yzm) {
        alert('恭喜你登录成功');
        window.location.href = 'mine.html';
    } else {
        alert('与提示的验证码不符合,登录失败！');
    }
}