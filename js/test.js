window.onload = function () {
    var btns = document.getElementById('btn').getElementsByClassName('yse');
    // var bntp = btns.getElementsByTagName('p');
    for (var i = 0; i < btns.length; i++) {
        console.log(btns);
        btns[i].onclick = function () {
            alert("我是按钮" + i);
        }
    }
}