window.onload = function () {
    var tab = document.getElementById('tab').getElementsByTagName('li'); //获取tab列表
    var tab_contain = document.getElementById('tab-contain').getElementsByClassName('mod'); //获取tab-contain的列表
    for (var i = 0; i < tab.length; i++) {
        tab[i].index = i; //定义index变量，以便tab按钮与tab内容相对应
        tab[i].onclick = function () { //移除全部tab样式和内容
            for (var i = 0; i < tab_contain.length; i++) {
                tab[i].className = "";
                tab_contain[i].style.display = 'none';
            }
            this.className = "active"; //为当前tab添加样式
            tab_contain[this.index].style.display = 'block';
        }
    }
}