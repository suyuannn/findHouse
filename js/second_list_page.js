 // 二手房列表页js
var clickss = document.getElementsByClassName('clickss')[0];
var click1 = document.getElementsByClassName('click1')[0];
var click2 = document.getElementsByClassName('click2')[0];
var click3 = document.getElementsByClassName('click3')[0];
var area = document.getElementsByClassName('area')[0];
var ind = document.getElementsByClassName('ind')[0];
var sign = document.getElementsByClassName('sign')[0];
var sign1 = document.getElementsByClassName('sign')[1];
var sign2 = document.getElementsByClassName('sign')[2];
var sign3 = document.getElementsByClassName('sign')[3];
// console.log(sign,sign1,sign2,sign3);

var area_a = document.getElementsByClassName('area_a')[0];
// 价格事件
var price = document.getElementsByClassName('price')[0];
// 房型事件
var house_type  = document.getElementsByClassName('house_type')[0];
// 更多事件
var more  = document.getElementsByClassName('more')[0];
// console.log(price,house_type,more);
// console.log(area,area_a);


    // 区域
    touch.on(clickss,'tap',function(){
        ind.className = 'ind mb';
        area_a.style.display ='flex';
        area.style.top = 0 +'px'
        area_a.style.top = 4.6+'rem'
        click1.style.color = ''
        click2.style.color = ''
        click3.style.color = ''
        clickss.style.color = '#ff8a00'
        sign.style.borderTop = '5px solid transparent';
        sign.style.borderBottom = '5px solid #ff8a00';
        price.style.display ='none';
        house_type.style.display = 'none'
        more.style.display = 'none'
        sign1.style.borderTop = '5px solid #ccc';
        sign1.style.borderBottom = '5px solid transparent ';
        sign2.style.borderTop = '5px solid #ccc';
        sign2.style.borderBottom = '5px solid transparent ';
        sign3.style.borderTop = '5px solid #ccc';
        sign3.style.borderBottom = '5px solid transparent ';
    })


    touch.on(ind,'tap',function(){
        ind.className = 'ind'
        area.style.top = ''
        clickss.style.color = ''
        area_a.style.display = 'none'
        sign.style.borderTop = '5px solid #ccc';
        sign.style.borderBottom = '5px solid transparent ';
    })

// 价格
touch.on(click1,'tap',function(){
    ind.className = 'ind mb';
    price.style.display ='block';
    area.style.top = 0 +'px'
    price.style.top = 4.6+'rem'
    click1.style.color = '#ff8a00'
    clickss.style.color = ''
    click2.style.color = ''
    click3.style.color = ''
    area_a.style.display ='none';
    house_type.style.display = 'none'
    more.style.display = 'none'
    sign1.style.borderTop = '5px solid transparent';
    sign1.style.borderBottom = '5px solid #ff8a00';
    sign.style.borderTop = '5px solid #ccc';
    sign.style.borderBottom = '5px solid transparent ';
    sign2.style.borderTop = '5px solid #ccc';
    sign2.style.borderBottom = '5px solid transparent ';
    sign3.style.borderTop = '5px solid #ccc';
    sign3.style.borderBottom = '5px solid transparent ';
})

touch.on(ind,'tap',function(){
    ind.className = 'ind'
    area.style.top = ''
    click1.style.color = ''
    price.style.display = 'none'
    sign1.style.borderTop = '5px solid #ccc';
    sign1.style.borderBottom = '5px solid transparent ';
})

// 房型
touch.on(click2,'tap',function(){
    ind.className = 'ind mb';
    house_type.style.display ='block';
    area.style.top = 0 +'px'
    house_type.style.top = 4.6+'rem'
    click2.style.color = '#ff8a00'
    clickss.style.color = ''
    click1.style.color = ''
    click3.style.color = ''
    area_a.style.display ='none';
    price.style.display = 'none'
    more.style.display = 'none'
    sign2.style.borderTop = '5px solid transparent';
    sign2.style.borderBottom = '5px solid #ff8a00';
    sign.style.borderTop = '5px solid #ccc';
    sign.style.borderBottom = '5px solid transparent ';
    sign1.style.borderTop = '5px solid #ccc';
    sign1.style.borderBottom = '5px solid transparent ';
    sign3.style.borderTop = '5px solid #ccc';
    sign3.style.borderBottom = '5px solid transparent ';
})

touch.on(ind,'tap',function(){
    ind.className = 'ind'
    area.style.top = ''
    click2.style.color = ''
    house_type.style.display = 'none'
    sign2.style.borderTop = '5px solid #ccc';
    sign2.style.borderBottom = '5px solid transparent ';
})
// 更多
touch.on(click3,'tap',function(){
    ind.className = 'ind mb';
    more.style.display ='flex';
    area.style.top = 0 +'px'
    more.style.top = 4.6+'rem'
    click3.style.color = '#ff8a00'
    clickss.style.color = ''
    click1.style.color = ''
    click2.style.color = ''
    area_a.style.display ='none';
    price.style.display = 'none'
    house_type.style.display = 'none'
    sign3.style.borderTop = '5px solid transparent';
    sign3.style.borderBottom = '5px solid #ff8a00';
    sign.style.borderTop = '5px solid #ccc';
    sign.style.borderBottom = '5px solid transparent ';
    sign1.style.borderTop = '5px solid #ccc';
    sign1.style.borderBottom = '5px solid transparent ';
    sign2.style.borderTop = '5px solid #ccc';
    sign2.style.borderBottom = '5px solid transparent ';
})

touch.on(ind,'tap',function(){
    ind.className = 'ind'
    area.style.top = ''
    click3.style.color = ''
    house_type.style.display = 'none'
    sign3.style.borderTop = '5px solid #ccc';
    sign3.style.borderBottom = '5px solid transparent ';
})

function setRem() {
    var ui_w = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
window.onresize = setRem;
