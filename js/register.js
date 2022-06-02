// 注册
// 验证码
var containVerify = document.getElementsByClassName('containVerify')[0];

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
// 手机号
var phone = document.getElementById('phone');
phone.onblur = function () {
    var phoneValue = phone.value;
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
// 验证码
var verifyCode = document.getElementById('verifyCode');
verifyCode.onblur = function () {
    var reg2 = /^\s*$/g; //不能为空
    var reg3 = /^\d{6}$/g;
    var verifyCodeValue = verifyCode.value;
    var yzmNumber = '888666';
    if (reg2.test(verifyCodeValue)) {
        alert('验证码不能为空！');
        return false;
    } else if (!reg3.test(verifyCodeValue)) {
        alert('验证码为6位数字！');
        return false;
    } else if (verifyCodeValue !== yzmNumber) {
        alert('与提示的验证码不符合');
        return false;
    }
}
// 密码

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
        alert('验证码不 能全是数字！');
        return false;
    } else if (!reg6.test(pwdValue)) {
        alert('验证码不能全是字母！');
        return false;
    }
}

var btn = document.getElementById('btn');
btn.ontouchstart = function () {
    var phoneNumber = document.getElementById('phone').value;
    var password = document.getElementById('pwd').value;
    var reg1 = /^1[3-9][0-9]{9}$/; //手机号
    var reg4 = /^\w{6,12}$/;
    var yzmNumber = 888666;
    if (reg1.test(phone.value) && yzmNumber == verifyCode.value && reg4.test(pwd.value)) {
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('password', password);
        window.location.href = 'index.html';
        alert('恭喜你注册成功');
    } else {
        alert('注册失败！');
    }
}