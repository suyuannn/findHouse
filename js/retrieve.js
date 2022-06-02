// 找回密码js

// 手机号码
var inpu = document.getElementsByClassName('click')[0].firstElementChild;
var rge = /^1[3-9][0-9]{9}$/;
// inpu.onfocus = function(){
//     var inpu_value = inpu.value;
//     console.log(inpu_value);
// }
inpu.onblur = function(){
    var inpu_value = inpu.value;
    if(!rge.test(inpu_value)||inpu_value ==!NaN ){
        alert('请输入正确的手机号码')
    }else if(rge.test(inpu_value)){

    }
    // console.log(inpu.value);
}
// 发送验证码
var click_a = document.getElementsByClassName('click')[0].lastElementChild;
// console.log(click_a);
var counter = 60;
var time;
touch.on(click_a,'tap',function(){
    clearInterval(time);
   time= setInterval(function(){
        counter--;
        click_a.innerHTML = `(${counter}秒)重发`;
        if(counter==47){
            alert('797979');
            clearInterval(time);
            click_a.innerHTML = '发送验证码';
        }

    },1000)
})
// 获取验证码
var inp = document.getElementsByClassName('inp')[0].firstElementChild;
// console.log(inp);
var number = '797979';
// console.log(typeof(number));

    inp.onblur = function(){
        
        
        if(inp.value!== number){
            alert('请输入正确的验证码')
        }else if(inp.value == number){}
    }



// 输入密码
var inp_a = document.getElementById('inp_a');
// console.log(inp_a);

inp_a.onblur = function(){
    var rge_a =/^\w{6,12}$/g;
    if(!rge_a.test(inp_a.value)){
        alert('请输入6-12位数的密码')
    }else{
        // console.log(inp_a.value)
    }
    // console.log('xxx')
}

// 确认密码
var inp_b = document.getElementById('inp_b');
// console.log(inp_b);
inp_b.onblur = function(){
    if(inp_a.value !== inp_b.value){
        alert('两次的密码不同')
    }else{
        // console.log(inp_b.value);
    }
}
// 提交
var but = document.getElementsByClassName('but')[0]; 


console.log(but);
touch.on(but,'tap',function(){
    var inpu__a = inpu.value;
    var inpu__b = inp_b.value;
    var inpu__c = inp.value;
    var inpu__d = inp_a.value
    console.log(inpu__a,inpu__b,inpu__c,inpu__d);
    localStorage.setItem('name',inpu__a);
    localStorage.setItem('password',inpu__b);
    if(inpu__a == ''){
        alert('手机号码未填写');
    }else if(inpu__c == ''){
        alert('验证码未填写');
    }else if(inpu__d == ''){
        alert('密码未填写');
    }else if(inpu__b == ''){
        alert('再次确认密码未填写');
    }else{
        window.location.href = 'mine.html'
    }
    
})

function setRem() {
    var ui_w = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
window.onresize = setRem;

