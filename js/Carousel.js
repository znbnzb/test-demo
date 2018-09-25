var list = document.getElementById("list");
var listsub = list.getElementsByTagName("img");
var button = document.getElementById("buttons");
var buttons = button.getElementsByTagName("span");
// var prev = document.getElementById('prev');
// var next = document.getElementById('next');
var prev;
var next;


var timer; //存储时间
var index = 1; //存储下标


window.onload = function () {


    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所有第一张图后style.left都为负值
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字

        var newLeft = parseInt(list.style.left) + offset;

        if (newLeft < -3000) {
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

    //手动切换图片

    function next() {
        index += 1;
        if (index > 5) {
            index = 1;
        }
        buttonsShow();
        animate(-600);
    }

    //圆点切换图片 
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            /* 偏移量获取：这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法 */
            /* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 600 * (index - clickIndex);
            animate(offset);
            //存放鼠标点击后的位置，用于小圆点的正常显示 
            index = clickIndex;
            buttonsShow();
        }
    }
    play();


    //让图片自动播放
    function play() {
        timer = setInterval(function () {
            next()
        }, 3000)
    }

    //图片暂停播放
    // function stop() {
    //     clearInterval(timer);
    // }


    //圆点按钮高亮状态切换函数
    function buttonsShow() {
        //需要先清除之前的样式
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = 'on';
    }
}