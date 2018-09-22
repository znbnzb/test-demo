var list = document.getElementById("list");
var listsub = list.getElementsByTagName("img");
var button = document.getElementById("buttons");
var buttonsub = button.getElementsByTagName("span");

var timer; //存储时间
var index = 1; //存储下标


window.onload = function () {
    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所有第一张图后style.left都为负值
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字

        var newLeft = parseInt(list.style.left) + offset;

        if (newLeft < 3000) {
            list.style.left = -600 + 'px';
            index = 1;
        } else if (newLeft > -600) {
            list.style.left = -3000 + 'px';
            index = 5;
        } else {
            list.style.left = newLeft + 'px';
        }
        buttonsShow();
    }
}